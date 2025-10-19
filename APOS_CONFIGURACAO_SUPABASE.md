# Pós-Configuração do Supabase - Próximos Passos

## ✅ O que já foi feito

1. **Credenciais atualizadas** em `/src/integrations/supabase/client.ts`:
   - Nova URL: `https://nythrkrfdybycrjpkans.supabase.co`
   - Nova ANON_KEY configurada

2. **Arquivos criados**:
   - `.env.local` - Suas credenciais locais (não será commitado)
   - `.env.example` - Template para outros desenvolvedores

3. **Segurança**:
   - `.gitignore` já protege arquivos `.env.local`

---

## 🔧 Próximos Passos

### 1. Testar a Conexão

Execute o projeto e verifique se não há erros de conexão:

```bash
npm run dev
```

Abra o console do navegador (F12) e verifique se há erros do Supabase.

### 2. Criar Usuário Admin

Depois de configurar o banco de dados usando o prompt do arquivo `SETUP_SUPABASE_PROMPT.md`:

1. **Crie sua conta** no site (através da página de registro)
2. **Copie seu User ID** do Supabase:
   - Acesse: https://nythrkrfdybycrjpkans.supabase.co/project/nythrkrfdybycrjpkans/auth/users
   - Encontre seu usuário
   - Copie o UUID (ID)

3. **Execute no SQL Editor do Supabase**:
   ```sql
   -- Substituir 'SEU_USER_ID_AQUI' pelo UUID copiado
   UPDATE user_roles
   SET role = 'admin'
   WHERE user_id = 'SEU_USER_ID_AQUI';
   ```

4. **Faça logout e login novamente** no site

### 3. Criar o Bucket de Storage

No painel do Supabase:

1. Acesse: https://nythrkrfdybycrjpkans.supabase.co/project/nythrkrfdybycrjpkans/storage/buckets
2. Clique em "New Bucket"
3. Configure:
   - **Nome**: `tecidos`
   - **Público**: ✓ Marque como público
4. Clique em "Create bucket"

### 4. Configurar Políticas do Storage

Execute no SQL Editor:

```sql
-- Permitir leitura pública
CREATE POLICY "Public Access"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'tecidos');

-- Permitir upload para usuários autenticados
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

### 5. Testar Upload de Imagens

1. **Faça login como admin**
2. **Acesse a área administrativa** do site
3. **Tente fazer upload de uma imagem de teste**
4. **Verifique** se a imagem aparece corretamente

### 6. Baixar Imagens do Google Drive

Agora você está pronto para fazer upload das suas imagens!

**Opção 1 - Upload em Massa (Recomendado)**:
1. Baixe todas as fotos do Google Drive
2. Renomeie os arquivos com nomes que correspondam aos produtos (ex: `alfaiataria-preta.jpg`)
3. Acesse o painel admin → Upload em Massa de Imagens
4. Selecione todas as imagens
5. O sistema vai detectar automaticamente os produtos ou criar novos

**Opção 2 - Upload Manual no Supabase**:
1. Baixe as fotos do Google Drive
2. Acesse o Storage no Supabase
3. Entre no bucket `tecidos`
4. Crie a pasta `products`
5. Faça upload manual

---

## 🧪 Validação Final

Execute estas verificações:

### Teste de Conexão
```javascript
// Cole no console do navegador (F12)
const { data, error } = await supabase.from('products').select('*').limit(1);
console.log('Conexão OK:', !error);
```

### Teste de Autenticação
- [ ] Consegue criar nova conta
- [ ] Consegue fazer login
- [ ] Consegue fazer logout
- [ ] Profile é criado automaticamente

### Teste de Storage
- [ ] Bucket `tecidos` existe
- [ ] É possível fazer upload como admin
- [ ] Imagens são acessíveis publicamente
- [ ] URLs públicas funcionam

### Teste de Admin
- [ ] Usuário admin consegue acessar painel admin
- [ ] Consegue criar produtos
- [ ] Consegue fazer upload de imagens
- [ ] Consegue ver analytics

---

## 🚨 Resolução de Problemas

### Erro: "Invalid API key"
- Verifique se copiou a ANON_KEY corretamente
- Certifique-se que não há espaços extras
- Reinicie o servidor de desenvolvimento

### Erro: "relation does not exist"
- Execute todos os scripts SQL do `SETUP_SUPABASE_PROMPT.md`
- Verifique se as tabelas foram criadas no SQL Editor

### Erro: "Row Level Security policy violation"
- Verifique se as políticas RLS foram criadas
- Certifique-se que está logado com usuário correto
- Verifique se o usuário tem a role correta

### Erro ao fazer upload de imagens
- Verifique se o bucket `tecidos` existe
- Confirme que o bucket está público
- Verifique as políticas de storage

### Problema: Usuário admin não consegue acessar painel admin

**Sintomas:**
- Login funciona normalmente
- Ao tentar acessar `/admin`, é redirecionado ou vê "Acesso Negado"
- Console mostra `profileRole: undefined`

**Causa:**
- O usuário existe em `auth.users` mas não tem registro em `user_roles`
- Ou o registro existe mas a role não é 'admin'

**Diagnóstico:**
1. Execute o script `SQL_DIAGNOSTICO_ROLES.sql` no SQL Editor do Supabase
2. Verifique a seção "VERIFICAR USUÁRIOS SEM ROLE"
3. Verifique a seção "VISÃO COMPLETA DE TODOS OS USUÁRIOS"

**Solução:**
```sql
-- 1. Primeiro, encontre seu User ID
SELECT id, email FROM auth.users WHERE email = 'seu-email@exemplo.com';

-- 2. Verifique se existe registro na user_roles
SELECT * FROM user_roles WHERE user_id = 'SEU_USER_ID';

-- 3a. Se NÃO existir, crie:
INSERT INTO user_roles (user_id, role)
VALUES ('SEU_USER_ID', 'admin');

-- 3b. Se existir mas a role estiver errada, atualize:
UPDATE user_roles
SET role = 'admin'
WHERE user_id = 'SEU_USER_ID';

-- 4. Verifique se o profile existe
SELECT * FROM profiles WHERE id = 'SEU_USER_ID';

-- 5. Se não existir, crie:
INSERT INTO profiles (id, name, email)
VALUES (
  'SEU_USER_ID',
  'Seu Nome',
  'seu-email@exemplo.com'
);
```

**Após a correção:**
1. Faça LOGOUT no site
2. Limpe o cache do navegador:
   - Abra DevTools (F12)
   - Aba "Application" → "Local Storage"
   - Delete tudo relacionado a "supabase"
   - Ou use Ctrl+Shift+Delete → Limpar dados do site
3. Faça LOGIN novamente
4. Tente acessar `/admin`

### Problema: Trigger não criou profile/role automaticamente

**Sintomas:**
- Usuário novo não consegue usar o sistema
- Erros ao tentar buscar perfil

**Diagnóstico:**
```sql
-- Verificar se o trigger existe
SELECT * FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';
```

**Solução:**
Se o trigger não existir, recrie usando o script do `SETUP_SUPABASE_PROMPT.md` seção "7.2 - Trigger para criar profile automaticamente"

Para usuários já criados, use o script de correção no `SQL_DIAGNOSTICO_ROLES.sql` seção #10

---

## 📝 Links Úteis

- **Painel do Supabase**: https://nythrkrfdybycrjpkans.supabase.co
- **Database**: https://nythrkrfdybycrjpkans.supabase.co/project/nythrkrfdybycrjpkans/editor
- **SQL Editor**: https://nythrkrfdybycrjpkans.supabase.co/project/nythrkrfdybycrjpkans/sql
- **Storage**: https://nythrkrfdybycrjpkans.supabase.co/project/nythrkrfdybycrjpkans/storage/buckets
- **Auth**: https://nythrkrfdybycrjpkans.supabase.co/project/nythrkrfdybycrjpkans/auth/users

---

## 🎯 Ordem Recomendada de Execução

1. ✅ Credenciais atualizadas (já feito)
2. ⬜ Configurar banco de dados (use `SETUP_SUPABASE_PROMPT.md`)
3. ⬜ Criar bucket de storage
4. ⬜ Criar sua conta no site
5. ⬜ Tornar seu usuário admin
6. ⬜ Testar conexão
7. ⬜ Testar upload de imagem
8. ⬜ Baixar fotos do Google Drive
9. ⬜ Fazer upload em massa

**Boa sorte! 🚀**
