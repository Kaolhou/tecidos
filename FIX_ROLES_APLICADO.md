# 🔧 Correção Aplicada - Sistema de Roles

## ✅ O Que Foi Corrigido

### Problema Identificado
O hook `useAuth` não estava buscando a **role** do usuário da tabela `user_roles`, fazendo com que todos os usuários tivessem `role: undefined`, bloqueando o acesso ao painel admin.

### Arquivo Modificado
**`src/hooks/useAuth.tsx`** - Função `fetchProfile` (linhas 47-111)

---

## 🔍 Mudanças Técnicas

### ANTES (código antigo)
```typescript
const fetchProfile = async (userId: string, retryCount = 0) => {
  // Buscava apenas da tabela 'profiles'
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  setProfile(data); // role estava sempre undefined!
}
```

### DEPOIS (código corrigido)
```typescript
const fetchProfile = async (userId: string, retryCount = 0) => {
  // 1. Busca dados do profile
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  // 2. Busca a role da tabela user_roles
  const { data: roleData, error: roleError } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .single();

  // 3. Combina os dados
  const completeProfile = {
    ...profileData,
    role: roleData?.role || 'user' // fallback para 'user'
  };

  setProfile(completeProfile); // Agora com role correta!
}
```

### Benefícios da Correção
- ✅ Role é buscada corretamente da tabela `user_roles`
- ✅ Logs detalhados para debug
- ✅ Fallback seguro para 'user' se não encontrar role
- ✅ Mantém retry logic para resiliência

---

## 📊 Arquivos Adicionados

### 1. `SQL_DIAGNOSTICO_ROLES.sql`
Script completo para diagnosticar problemas com roles, incluindo:
- Verificar usuários sem profile
- Verificar usuários sem role
- Visão completa de todos os usuários
- Scripts de correção automática
- Verificação de triggers e políticas RLS

### 2. Documentação Atualizada
**`APOS_CONFIGURACAO_SUPABASE.md`** - Adicionada seção completa de troubleshooting para problemas de roles

---

## 🧪 Como Testar a Correção

### Passo 1: Verificar a Role no Banco de Dados
```sql
-- Execute no SQL Editor do Supabase
SELECT
  au.email,
  ur.role
FROM auth.users au
LEFT JOIN user_roles ur ON au.id = ur.user_id
WHERE au.email = 'seu-email@exemplo.com';
```

**Resultado esperado:** Deve mostrar `role: admin` (ou outra role válida)

Se não mostrar nada ou mostrar `NULL`:
```sql
-- Corrigir: Adicionar role
INSERT INTO user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'seu-email@exemplo.com';
```

### Passo 2: Limpar Cache do Navegador
**IMPORTANTE:** Você DEVE fazer isso para a correção funcionar!

1. Abra o DevTools (F12)
2. Vá para a aba **"Application"**
3. Na barra lateral, clique em **"Local Storage"**
4. Encontre e delete todas as entradas relacionadas a "supabase"
5. Ou simplesmente: Ctrl+Shift+Delete → Limpar dados do site

### Passo 3: Fazer Logout e Login
1. Faça **logout** completo do site
2. Feche e reabra o navegador (opcional, mas recomendado)
3. Faça **login** novamente

### Passo 4: Verificar Logs no Console
Após o login, abra o Console do DevTools (F12) e procure por:

```
✅ Complete profile with role: { ..., role: "admin" }
```

Se ver isso, **a correção funcionou!**

### Passo 5: Testar Acesso Admin
1. Acesse a rota `/admin` ou `/admin-exclusive`
2. Você deve ver o painel admin
3. Se ainda não funcionar, verifique os logs no console

---

## 🚨 Troubleshooting

### Console mostra `role: undefined`
**Problema:** A role não está sendo buscada corretamente

**Verificar:**
1. O usuário tem registro na tabela `user_roles`?
   ```sql
   SELECT * FROM user_roles WHERE user_id = 'SEU_USER_ID';
   ```
2. A query retorna erro? Verifique os logs no console:
   ```
   ⚠️ Role fetch error (using default "user"): ...
   ```
3. Se sim, há um problema com políticas RLS ou a tabela não existe

### Console mostra `role: "user"` mas deveria ser `"admin"`
**Problema:** A role está errada no banco de dados

**Corrigir:**
```sql
UPDATE user_roles
SET role = 'admin'
WHERE user_id = 'SEU_USER_ID';
```

### Erro: "relation 'user_roles' does not exist"
**Problema:** A tabela `user_roles` não foi criada

**Solução:**
Execute o script completo do arquivo `SETUP_SUPABASE_PROMPT.md` para criar todas as tabelas

### Ainda não funciona após limpar cache
**Possíveis causas:**
1. Não fez logout/login após limpar cache
2. Cache ainda está presente (tente em aba anônima)
3. A role realmente não está no banco de dados (use `SQL_DIAGNOSTICO_ROLES.sql`)

---

## 📝 Checklist de Validação

Execute este checklist completo:

- [ ] **Banco de dados:**
  - [ ] Tabela `user_roles` existe
  - [ ] Usuário tem registro em `user_roles`
  - [ ] A role está correta ('admin', 'moderator', ou 'user')
  - [ ] Tabela `profiles` tem registro do usuário

- [ ] **Frontend:**
  - [ ] Código foi atualizado em `src/hooks/useAuth.tsx`
  - [ ] Aplicação foi reiniciada (npm run dev)
  - [ ] Cache do navegador foi limpo
  - [ ] Logout e login foram feitos

- [ ] **Console do navegador:**
  - [ ] Logs mostram `✅ Complete profile with role: { role: "admin" }`
  - [ ] Não há erros de `RLS policy violation`
  - [ ] ProtectedRoute mostra `✅ Access granted`

- [ ] **Acesso:**
  - [ ] Consegue acessar `/admin`
  - [ ] Consegue acessar `/admin-exclusive`
  - [ ] Não é redirecionado para `/dashboard`

Se TODOS os itens estiverem marcados: **✅ Correção funcionou perfeitamente!**

---

## 💡 Prevenção de Problemas Futuros

### Para Novos Usuários
Certifique-se de que o trigger `handle_new_user` está funcionando:

```sql
-- Verificar se existe
SELECT * FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';
```

Se não existir, recrie usando o `SETUP_SUPABASE_PROMPT.md` seção 7.2

### Monitoramento
Use o script `SQL_DIAGNOSTICO_ROLES.sql` periodicamente para verificar:
- Usuários sem profile
- Usuários sem role
- Distribuição de roles

### Boas Práticas
1. **Sempre teste novos usuários** após criá-los
2. **Use o script de diagnóstico** antes de mudanças importantes
3. **Mantenha logs detalhados** no console durante desenvolvimento
4. **Documente mudanças** em roles de usuários específicos

---

## 📞 Próximos Passos

1. **Teste a correção** seguindo o guia acima
2. Se funcionar, **commit as mudanças**:
   ```bash
   git add .
   git commit -m "Fix: Adicionar busca de roles da tabela user_roles no useAuth"
   ```
3. **Configure o restante do Supabase** usando `SETUP_SUPABASE_PROMPT.md`
4. **Faça upload das imagens** do Google Drive

**Boa sorte! 🚀**
