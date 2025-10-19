# PROMPT PARA CONFIGURAÇÃO COMPLETA DO SUPABASE - TECIDO LUZ BRASIL

## CONTEXTO DO PROJETO

Estou desenvolvendo um e-commerce completo de tecidos chamado "Tecido Luz Brasil" usando:
- **Frontend**: React 18 + Vite + TypeScript
- **UI**: Shadcn/ui + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Estado**: TanStack Query (React Query)

Criei uma nova conta no Supabase e preciso configurar TUDO do zero para este projeto funcionar.

---

## OBJETIVO

Preciso de um guia COMPLETO, passo a passo, para:
1. Criar toda a estrutura do banco de dados
2. Configurar autenticação e roles de usuários
3. Configurar Storage para imagens de produtos
4. Implementar políticas RLS (Row Level Security)
5. Gerar as credenciais e variáveis de ambiente
6. Validar que tudo está funcionando

---

## 1. ESTRUTURA DO BANCO DE DADOS

### Tabelas Necessárias

#### 1.1 - Tabela `profiles`
```sql
Campos:
- id (uuid, primary key, references auth.users)
- name (text, not null)
- email (text)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
```

#### 1.2 - Tabela `user_roles`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- user_id (uuid, references auth.users, not null)
- role (enum: 'admin', 'moderator', 'user', default 'user')
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: user_id -> auth.users(id)
```

#### 1.3 - Tabela `categories`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- name (text, not null, unique)
- description (text)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Unique: name
```

#### 1.4 - Tabela `products`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- name (text, not null)
- description (text)
- price (numeric, not null)
- category (text)
- material (text)
- width (text) // largura do tecido
- stock_quantity (integer, default 0)
- image_url (text) // URL da imagem principal (deprecated, usar product_images)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Index: category
- Index: name (para busca)
```

#### 1.5 - Tabela `product_images`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- product_id (uuid, references products(id) on delete cascade)
- image_url (text, not null)
- alt_text (text)
- position (integer, default 0) // ordem de exibição
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: product_id -> products(id)
- Index: product_id, position
```

#### 1.6 - Tabela `reviews`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- product_id (uuid, references products(id) on delete cascade, not null)
- rating (integer, not null, check rating >= 1 and rating <= 5)
- comment (text)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: product_id -> products(id)
```

#### 1.7 - Tabela `product_reviews`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- product_id (uuid, references products(id) on delete cascade, not null)
- user_id (uuid, references profiles(id), not null)
- rating (integer, not null, check rating >= 1 and rating <= 5)
- comment (text)
- created_at (timestamp with time zone, default now())
- updated_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: product_id -> products(id)
- Foreign key: user_id -> profiles(id)
```

#### 1.8 - Tabela `cart_items`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- user_id (uuid, references auth.users)
- product_id (uuid, references products(id) on delete cascade)
- quantity (integer, not null, default 1)
- created_at (timestamp with time zone, default now())
- updated_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: user_id -> auth.users(id)
- Foreign key: product_id -> products(id)
- Unique: (user_id, product_id)
```

#### 1.9 - Tabela `wishlists`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- user_id (uuid, references auth.users, not null)
- product_id (uuid, references products(id) on delete cascade, not null)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: user_id -> auth.users(id)
- Foreign key: product_id -> products(id)
- Unique: (user_id, product_id)
```

#### 1.10 - Tabela `orders`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- user_id (uuid, references auth.users)
- customer_name (text, not null)
- customer_email (text, not null)
- shipping_address (jsonb, not null)
- total_amount (numeric, not null)
- shipping_cost (numeric)
- status (text, default 'pending') // pending, processing, shipped, delivered, cancelled
- payment_info (jsonb)
- notes (text)
- created_at (timestamp with time zone, default now())
- updated_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: user_id -> auth.users(id)
- Index: status
- Index: created_at
```

#### 1.11 - Tabela `order_items`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- order_id (uuid, references orders(id) on delete cascade)
- product_id (uuid, references products(id))
- product_name (text, not null)
- product_price (numeric, not null)
- quantity (integer, not null)
- subtotal (numeric, not null)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: order_id -> orders(id)
- Foreign key: product_id -> products(id)
```

#### 1.12 - Tabela `stock_movements`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- product_id (uuid, references products(id))
- movement_type (text, not null) // 'entrada', 'saida', 'ajuste'
- quantity (integer, not null)
- previous_quantity (integer)
- new_quantity (integer)
- reason (text)
- user_id (uuid, references auth.users)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: product_id -> products(id)
- Foreign key: user_id -> auth.users(id)
- Index: product_id, created_at
```

#### 1.13 - Tabela `stock_alerts`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- product_id (uuid, references products(id))
- threshold (integer, not null)
- is_active (boolean, default true)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: product_id -> products(id)
```

#### 1.14 - Tabela `product_analytics`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- product_id (uuid, references products(id))
- date (date, not null)
- views (integer, default 0)
- cart_additions (integer, default 0)
- purchases (integer, default 0)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: product_id -> products(id)
- Unique: (product_id, date)
```

#### 1.15 - Tabela `system_notifications`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- user_id (uuid, references auth.users)
- type (text, not null) // 'info', 'warning', 'error', 'success'
- title (text, not null)
- message (text, not null)
- is_read (boolean, default false)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Foreign key: user_id -> auth.users(id)
- Index: user_id, is_read
```

#### 1.16 - Tabela `email_templates`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- template_type (text, not null, unique)
- name (text, not null)
- subject (text, not null)
- content (text, not null)
- is_active (boolean, default true)
- created_at (timestamp with time zone, default now())
- updated_at (timestamp with time zone, default now())

Índices:
- Primary key: id
- Unique: template_type
```

#### 1.17 - Tabela `sales`
```sql
Campos:
- id (uuid, primary key, default gen_random_uuid())
- cliente (text)
- itens (jsonb)
- processed (boolean, default false)
- created_at (timestamp with time zone, default now())

Índices:
- Primary key: id
```

---

## 2. ENUMS E TIPOS

### 2.1 - Enum `app_role`
```sql
CREATE TYPE app_role AS ENUM ('admin', 'moderator', 'user');
```

---

## 3. FUNÇÕES DO BANCO DE DADOS

### 3.1 - Função `get_user_role`
```sql
CREATE OR REPLACE FUNCTION get_user_role(_user_id uuid)
RETURNS app_role
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_role app_role;
BEGIN
  SELECT role INTO user_role
  FROM user_roles
  WHERE user_id = _user_id
  LIMIT 1;

  RETURN COALESCE(user_role, 'user'::app_role);
END;
$$;
```

### 3.2 - Função `has_role`
```sql
CREATE OR REPLACE FUNCTION has_role(_role app_role, _user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM user_roles
    WHERE user_id = _user_id AND role = _role
  );
END;
$$;
```

### 3.3 - Função `get_current_user_role`
```sql
CREATE OR REPLACE FUNCTION get_current_user_role()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_role app_role;
BEGIN
  SELECT role INTO user_role
  FROM user_roles
  WHERE user_id = auth.uid()
  LIMIT 1;

  RETURN COALESCE(user_role::text, 'user');
END;
$$;
```

### 3.4 - Função `log_stock_movement`
```sql
CREATE OR REPLACE FUNCTION log_stock_movement(
  p_product_id uuid,
  p_movement_type text,
  p_quantity integer,
  p_reason text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_previous_quantity integer;
  v_new_quantity integer;
BEGIN
  -- Get current stock
  SELECT stock_quantity INTO v_previous_quantity
  FROM products
  WHERE id = p_product_id;

  -- Calculate new quantity based on movement type
  IF p_movement_type = 'entrada' THEN
    v_new_quantity := v_previous_quantity + p_quantity;
  ELSIF p_movement_type = 'saida' THEN
    v_new_quantity := v_previous_quantity - p_quantity;
  ELSE
    v_new_quantity := p_quantity; -- ajuste direto
  END IF;

  -- Update product stock
  UPDATE products
  SET stock_quantity = v_new_quantity
  WHERE id = p_product_id;

  -- Log the movement
  INSERT INTO stock_movements (
    product_id,
    movement_type,
    quantity,
    previous_quantity,
    new_quantity,
    reason,
    user_id
  ) VALUES (
    p_product_id,
    p_movement_type,
    p_quantity,
    v_previous_quantity,
    v_new_quantity,
    p_reason,
    auth.uid()
  );
END;
$$;
```

### 3.5 - Função `update_product_analytics`
```sql
CREATE OR REPLACE FUNCTION update_product_analytics(
  p_product_id uuid,
  p_action text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_today date := CURRENT_DATE;
BEGIN
  -- Insert or update analytics for today
  INSERT INTO product_analytics (product_id, date, views, cart_additions, purchases)
  VALUES (
    p_product_id,
    v_today,
    CASE WHEN p_action = 'view' THEN 1 ELSE 0 END,
    CASE WHEN p_action = 'cart' THEN 1 ELSE 0 END,
    CASE WHEN p_action = 'purchase' THEN 1 ELSE 0 END
  )
  ON CONFLICT (product_id, date)
  DO UPDATE SET
    views = product_analytics.views + CASE WHEN p_action = 'view' THEN 1 ELSE 0 END,
    cart_additions = product_analytics.cart_additions + CASE WHEN p_action = 'cart' THEN 1 ELSE 0 END,
    purchases = product_analytics.purchases + CASE WHEN p_action = 'purchase' THEN 1 ELSE 0 END;
END;
$$;
```

---

## 4. VIEWS (VISUALIZAÇÕES)

### 4.1 - View `consolidation_report`
```sql
CREATE OR REPLACE VIEW consolidation_report AS
SELECT
  'Total Products' as metric,
  COUNT(*)::numeric as value
FROM products
UNION ALL
SELECT
  'Total Orders' as metric,
  COUNT(*)::numeric as value
FROM orders
UNION ALL
SELECT
  'Total Revenue' as metric,
  COALESCE(SUM(total_amount), 0) as value
FROM orders
WHERE status = 'delivered';
```

---

## 5. POLÍTICAS RLS (ROW LEVEL SECURITY)

### Configuração Geral
```sql
-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE stock_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE stock_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
```

### Políticas para `profiles`
```sql
-- Todos podem ver profiles
CREATE POLICY "Profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

-- Usuários podem atualizar seu próprio profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Usuários podem inserir seu próprio profile
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);
```

### Políticas para `products`
```sql
-- Todos podem ver produtos
CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT
  USING (true);

-- Apenas admins podem criar produtos
CREATE POLICY "Admins can insert products"
  ON products FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Apenas admins podem atualizar produtos
CREATE POLICY "Admins can update products"
  ON products FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Apenas admins podem deletar produtos
CREATE POLICY "Admins can delete products"
  ON products FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

### Políticas para `product_images`
```sql
-- Todos podem ver imagens de produtos
CREATE POLICY "Product images are viewable by everyone"
  ON product_images FOR SELECT
  USING (true);

-- Apenas admins podem gerenciar imagens
CREATE POLICY "Admins can manage product images"
  ON product_images FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

### Políticas para `cart_items`
```sql
-- Usuários podem ver apenas seus próprios itens do carrinho
CREATE POLICY "Users can view own cart items"
  ON cart_items FOR SELECT
  USING (auth.uid() = user_id);

-- Usuários podem inserir em seu próprio carrinho
CREATE POLICY "Users can insert own cart items"
  ON cart_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Usuários podem atualizar seu próprio carrinho
CREATE POLICY "Users can update own cart items"
  ON cart_items FOR UPDATE
  USING (auth.uid() = user_id);

-- Usuários podem deletar de seu próprio carrinho
CREATE POLICY "Users can delete own cart items"
  ON cart_items FOR DELETE
  USING (auth.uid() = user_id);
```

### Políticas para `wishlists`
```sql
-- Usuários podem ver apenas sua própria wishlist
CREATE POLICY "Users can view own wishlist"
  ON wishlists FOR SELECT
  USING (auth.uid() = user_id);

-- Usuários podem adicionar à sua wishlist
CREATE POLICY "Users can insert own wishlist"
  ON wishlists FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Usuários podem remover de sua wishlist
CREATE POLICY "Users can delete own wishlist"
  ON wishlists FOR DELETE
  USING (auth.uid() = user_id);
```

### Políticas para `orders`
```sql
-- Usuários podem ver apenas seus próprios pedidos
CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);

-- Admins podem ver todos os pedidos
CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Usuários autenticados podem criar pedidos
CREATE POLICY "Authenticated users can create orders"
  ON orders FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Admins podem atualizar pedidos
CREATE POLICY "Admins can update orders"
  ON orders FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

### Políticas para `reviews` e `product_reviews`
```sql
-- Todos podem ver reviews
CREATE POLICY "Reviews are viewable by everyone"
  ON product_reviews FOR SELECT
  USING (true);

-- Usuários autenticados podem criar reviews
CREATE POLICY "Authenticated users can create reviews"
  ON product_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Usuários podem atualizar suas próprias reviews
CREATE POLICY "Users can update own reviews"
  ON product_reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- Usuários podem deletar suas próprias reviews
CREATE POLICY "Users can delete own reviews"
  ON product_reviews FOR DELETE
  USING (auth.uid() = user_id);
```

### Políticas para tabelas administrativas
```sql
-- stock_movements, stock_alerts, product_analytics, system_notifications, email_templates
-- Apenas admins podem acessar

CREATE POLICY "Admins can manage stock movements"
  ON stock_movements FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage stock alerts"
  ON stock_alerts FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can view analytics"
  ON product_analytics FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Users podem ver suas próprias notificações
CREATE POLICY "Users can view own notifications"
  ON system_notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications"
  ON system_notifications FOR UPDATE
  USING (auth.uid() = user_id);
```

---

## 6. CONFIGURAÇÃO DO STORAGE

### 6.1 - Criar Bucket
```
Nome: tecidos
Tipo: Public bucket ✓
```

### 6.2 - Estrutura de Pastas
```
tecidos/
  └── products/
      └── (imagens dos produtos aqui)
```

### 6.3 - Políticas de Storage
```sql
-- Permitir leitura pública
CREATE POLICY "Public Access"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'tecidos');

-- Permitir upload apenas para usuários autenticados
CREATE POLICY "Authenticated users can upload"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'tecidos'
    AND auth.role() = 'authenticated'
  );

-- Permitir update apenas para admins
CREATE POLICY "Admins can update files"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'tecidos'
    AND EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Permitir delete apenas para admins
CREATE POLICY "Admins can delete files"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'tecidos'
    AND EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

---

## 7. CONFIGURAÇÃO DE AUTENTICAÇÃO

### 7.1 - Providers
- Habilitar: Email/Password
- Configurar confirmação de email (opcional)

### 7.2 - Trigger para criar profile automaticamente
```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email
  );

  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'user');

  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 8. DADOS INICIAIS (SEED DATA)

### 8.1 - Categorias
```sql
INSERT INTO categories (name, description) VALUES
  ('Alfaiataria', 'Tecidos para alfaiataria e ternos'),
  ('Oxford', 'Tecidos Oxford e Oxfordine'),
  ('Crepe', 'Tecidos Crepe e Chanel'),
  ('Malha', 'Malhas e Jersey'),
  ('Linho', 'Tecidos de Linho'),
  ('Viscose', 'Tecidos de Viscose'),
  ('Geral', 'Outros tecidos');
```

### 8.2 - Criar um usuário admin (após criar conta manualmente)
```sql
-- Substituir 'SEU_USER_ID' pelo UUID do seu usuário
UPDATE user_roles
SET role = 'admin'
WHERE user_id = 'SEU_USER_ID';
```

---

## 9. VARIÁVEIS DE AMBIENTE

Após criar o projeto, você receberá:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

**IMPORTANTE**:
- No meu projeto, o arquivo `/src/integrations/supabase/client.ts` usa essas variáveis
- Preciso atualizar o arquivo com as novas credenciais

---

## 10. CHECKLIST DE VALIDAÇÃO

Após configurar tudo, validar:

- [ ] Todas as tabelas foram criadas
- [ ] Enums foram criados
- [ ] Funções estão funcionando
- [ ] Políticas RLS estão ativas
- [ ] Bucket 'tecidos' foi criado e é público
- [ ] Políticas de storage estão configuradas
- [ ] Autenticação por email está habilitada
- [ ] Trigger de criação de profile está ativo
- [ ] Consegue fazer login/cadastro
- [ ] Consegue fazer upload de imagem no bucket
- [ ] Imagens estão acessíveis publicamente
- [ ] Usuário admin foi criado

---

## TAREFA FINAL

Preciso que você:

1. **Me guie PASSO A PASSO** para criar toda essa estrutura no Supabase
2. Use o SQL Editor do Supabase para executar os scripts necessários
3. Me ajude a configurar as políticas RLS corretamente
4. Me ajude a criar e configurar o bucket de storage
5. Me forneça um script SQL COMPLETO que eu possa copiar e colar no SQL Editor
6. Me ajude a validar que tudo está funcionando

**FORMATO DA RESPOSTA:**

Por favor, organize sua resposta assim:

1. Script SQL completo para copiar e colar (com comentários)
2. Instruções passo a passo para o painel do Supabase
3. Como configurar o Storage manualmente
4. Como obter as credenciais (URL e ANON_KEY)
5. Queries de teste para validar tudo
6. Como criar o primeiro usuário admin

---

## INFORMAÇÕES ADICIONAIS

- Meu projeto já tem componentes de upload em massa prontos
- Preciso que as URLs das imagens sejam públicas
- Vou fazer upload de muitas imagens de produtos
- O sistema precisa suportar múltiplas imagens por produto
- Preciso de um sistema robusto de roles (admin, moderator, user)

**OBRIGADO!**
