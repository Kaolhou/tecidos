-- ================================================
-- SCRIPT DE VERIFICAÇÃO - POLÍTICAS RLS PARA ROLES
-- ================================================
-- Use este script para verificar se as políticas RLS estão permitindo
-- o acesso correto à tabela user_roles
--
-- Execute no SQL Editor do Supabase

-- ================================================
-- 1. VERIFICAR POLÍTICAS ATIVAS NA TABELA user_roles
-- ================================================
SELECT
  schemaname as "Schema",
  tablename as "Tabela",
  policyname as "Nome da Política",
  permissive as "Permissiva",
  roles as "Roles",
  cmd as "Comando",
  qual as "Condição USING",
  with_check as "Condição WITH CHECK"
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'user_roles'
ORDER BY policyname;

-- ================================================
-- 2. VERIFICAR SE RLS ESTÁ HABILITADO
-- ================================================
SELECT
  schemaname,
  tablename,
  rowsecurity as "RLS Habilitado"
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'user_roles';

-- ================================================
-- 3. TESTAR ACESSO COM auth.uid()
-- ================================================
-- Esta query simula o que acontece quando o frontend tenta buscar a role
-- IMPORTANTE: Execute isso quando estiver LOGADO no Supabase

-- Primeiro, veja qual é o seu auth.uid() atual
SELECT auth.uid() as "Meu User ID";

-- Depois, tente buscar sua role (simula o que o frontend faz)
SELECT
  user_id,
  role
FROM user_roles
WHERE user_id = auth.uid();

-- ================================================
-- 4. VERIFICAR TODAS AS ROLES (COMO ADMIN)
-- ================================================
-- Esta query só funciona se você estiver usando o SQL Editor como admin
-- (ignora RLS)
SELECT
  ur.user_id,
  au.email,
  ur.role,
  ur.created_at
FROM user_roles ur
JOIN auth.users au ON au.id = ur.user_id
ORDER BY ur.created_at DESC;

-- ================================================
-- 5. CRIAR POLÍTICA RLS SE NÃO EXISTIR
-- ================================================
-- Execute APENAS se a query #1 não mostrou nenhuma política

-- Política para permitir que usuários leiam sua própria role
DO $$
BEGIN
  -- Verificar se a política já existe
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'user_roles'
      AND policyname = 'Users can read own role'
  ) THEN
    -- Criar a política
    EXECUTE 'CREATE POLICY "Users can read own role"
      ON public.user_roles
      FOR SELECT
      USING (auth.uid() = user_id)';

    RAISE NOTICE 'Política "Users can read own role" criada com sucesso';
  ELSE
    RAISE NOTICE 'Política "Users can read own role" já existe';
  END IF;
END $$;

-- ================================================
-- 6. CRIAR POLÍTICA PARA ADMINS (OPCIONAL)
-- ================================================
-- Permite que admins vejam todas as roles

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'user_roles'
      AND policyname = 'Admins can read all roles'
  ) THEN
    EXECUTE 'CREATE POLICY "Admins can read all roles"
      ON public.user_roles
      FOR SELECT
      USING (
        EXISTS (
          SELECT 1 FROM user_roles
          WHERE user_id = auth.uid()
            AND role = ''admin''
        )
      )';

    RAISE NOTICE 'Política "Admins can read all roles" criada com sucesso';
  ELSE
    RAISE NOTICE 'Política "Admins can read all roles" já existe';
  END IF;
END $$;

-- ================================================
-- 7. HABILITAR RLS SE ESTIVER DESABILITADO
-- ================================================
DO $$
BEGIN
  -- Verificar se RLS está habilitado
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables
    WHERE schemaname = 'public'
      AND tablename = 'user_roles'
      AND rowsecurity = true
  ) THEN
    -- Habilitar RLS
    ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
    RAISE NOTICE 'RLS habilitado para user_roles';
  ELSE
    RAISE NOTICE 'RLS já está habilitado para user_roles';
  END IF;
END $$;

-- ================================================
-- 8. TESTE COMPLETO DE ACESSO
-- ================================================
-- Execute este bloco quando estiver LOGADO no sistema

-- Mostrar informações da sessão atual
SELECT
  auth.uid() as "User ID Atual",
  auth.role() as "Role do Auth",
  CASE
    WHEN auth.uid() IS NULL THEN '❌ Não autenticado'
    WHEN auth.uid() IS NOT NULL THEN '✅ Autenticado'
  END as "Status";

-- Tentar buscar a role do usuário atual
SELECT
  CASE
    WHEN COUNT(*) > 0 THEN '✅ Acesso permitido - Role encontrada'
    ELSE '❌ Sem acesso - Verifique políticas RLS'
  END as "Resultado",
  MAX(role::text) as "Sua Role"
FROM user_roles
WHERE user_id = auth.uid();

-- ================================================
-- 9. DIAGNÓSTICO DE PROBLEMAS COMUNS
-- ================================================

-- Problema: auth.uid() retorna NULL
-- Solução: Certifique-se de estar logado no sistema

SELECT
  CASE
    WHEN auth.uid() IS NULL THEN
      '❌ PROBLEMA: auth.uid() está NULL. Você precisa estar logado.'
    ELSE
      '✅ OK: Você está autenticado como ' || auth.uid()::text
  END as "Diagnóstico";

-- Problema: Usuário existe mas não tem role
-- Solução: Inserir role manualmente

INSERT INTO user_roles (user_id, role)
SELECT
  auth.uid(),
  'user'::app_role
WHERE auth.uid() IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM user_roles WHERE user_id = auth.uid()
  )
ON CONFLICT (user_id) DO NOTHING;

-- ================================================
-- 10. SCRIPT DE CORREÇÃO AUTOMÁTICA
-- ================================================
-- Execute este bloco para corrigir problemas comuns

DO $$
DECLARE
  v_count INTEGER;
BEGIN
  -- Contar quantos usuários não têm role
  SELECT COUNT(*) INTO v_count
  FROM auth.users au
  LEFT JOIN user_roles ur ON au.id = ur.user_id
  WHERE ur.user_id IS NULL;

  IF v_count > 0 THEN
    -- Criar roles para usuários sem role
    INSERT INTO user_roles (user_id, role)
    SELECT au.id, 'user'::app_role
    FROM auth.users au
    LEFT JOIN user_roles ur ON au.id = ur.user_id
    WHERE ur.user_id IS NULL;

    RAISE NOTICE '✅ Criadas % roles faltantes', v_count;
  ELSE
    RAISE NOTICE '✅ Todos os usuários têm roles';
  END IF;

  -- Verificar se RLS está habilitado
  PERFORM 1 FROM pg_tables
  WHERE schemaname = 'public'
    AND tablename = 'user_roles'
    AND rowsecurity = true;

  IF NOT FOUND THEN
    ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
    RAISE NOTICE '✅ RLS habilitado para user_roles';
  ELSE
    RAISE NOTICE '✅ RLS já estava habilitado';
  END IF;

  -- Criar política básica se não existir
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'user_roles' AND policyname = 'Users can read own role'
  ) THEN
    EXECUTE 'CREATE POLICY "Users can read own role"
      ON public.user_roles FOR SELECT
      USING (auth.uid() = user_id)';
    RAISE NOTICE '✅ Política criada';
  ELSE
    RAISE NOTICE '✅ Política já existe';
  END IF;
END $$;

-- ================================================
-- RESULTADO ESPERADO
-- ================================================
--
-- Após executar este script, você deve ver:
--
-- Query #1: Deve mostrar pelo menos uma política (ex: "Users can read own role")
-- Query #2: rowsecurity deve ser 'true'
-- Query #3: Deve retornar seu user_id
-- Query #4: Deve retornar sua role corretamente
-- Query #8: Deve mostrar "✅ Acesso permitido"
--
-- Se alguma query falhar, execute as correções nas seções #5, #6, #7
--
-- ================================================
