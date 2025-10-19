-- ================================================
-- SCRIPT DE DIAGNÓSTICO - SISTEMA DE ROLES
-- ================================================
-- Use este script para diagnosticar problemas com permissões de usuários
-- Execute no SQL Editor do Supabase

-- ================================================
-- 1. VERIFICAR USUÁRIOS SEM PROFILE
-- ================================================
-- Lista usuários que existem em auth.users mas não têm profile
SELECT
  au.id,
  au.email,
  au.created_at as "Cadastro em",
  'SEM PROFILE' as status
FROM auth.users au
LEFT JOIN public.profiles p ON au.id = p.id
WHERE p.id IS NULL;

-- ================================================
-- 2. VERIFICAR USUÁRIOS SEM ROLE
-- ================================================
-- Lista usuários que existem em auth.users mas não têm role definida
SELECT
  au.id,
  au.email,
  au.created_at as "Cadastro em",
  'SEM ROLE' as status
FROM auth.users au
LEFT JOIN public.user_roles ur ON au.id = ur.user_id
WHERE ur.user_id IS NULL;

-- ================================================
-- 3. VISÃO COMPLETA DE TODOS OS USUÁRIOS
-- ================================================
-- Mostra todos os usuários com seus profiles e roles
SELECT
  au.id,
  au.email,
  p.name as "Nome",
  COALESCE(ur.role::text, 'SEM ROLE') as "Role",
  au.created_at as "Criado em",
  au.last_sign_in_at as "Último login"
FROM auth.users au
LEFT JOIN public.profiles p ON au.id = p.id
LEFT JOIN public.user_roles ur ON au.id = ur.user_id
ORDER BY au.created_at DESC;

-- ================================================
-- 4. CONTAGEM DE USUÁRIOS POR ROLE
-- ================================================
SELECT
  COALESCE(ur.role::text, 'sem role') as "Role",
  COUNT(*) as "Quantidade"
FROM auth.users au
LEFT JOIN public.user_roles ur ON au.id = ur.user_id
GROUP BY ur.role
ORDER BY COUNT(*) DESC;

-- ================================================
-- 5. VERIFICAR SE O TRIGGER ESTÁ ATIVO
-- ================================================
-- Verifica se o trigger handle_new_user existe e está habilitado
SELECT
  trigger_name,
  event_object_table,
  action_statement,
  action_timing,
  event_manipulation
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';

-- ================================================
-- 6. VERIFICAR POLÍTICAS RLS DAS TABELAS
-- ================================================
-- Verifica se RLS está habilitado nas tabelas críticas
SELECT
  schemaname,
  tablename,
  CASE
    WHEN rowsecurity THEN '✓ Habilitado'
    ELSE '✗ Desabilitado'
  END as "RLS Status"
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('profiles', 'user_roles', 'products', 'orders')
ORDER BY tablename;

-- ================================================
-- 7. VERIFICAR POLÍTICAS RLS DA TABELA user_roles
-- ================================================
SELECT
  policyname as "Nome da Política",
  cmd as "Comando",
  CASE
    WHEN permissive THEN 'Permissiva'
    ELSE 'Restritiva'
  END as "Tipo"
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'user_roles';

-- ================================================
-- 8. SCRIPT DE CORREÇÃO - CRIAR PROFILE E ROLE FALTANTES
-- ================================================
-- Execute APENAS se encontrar usuários sem profile/role nas queries acima
-- ATENÇÃO: Substitua 'USER_ID_AQUI' pelo UUID do usuário

-- Exemplo de uso:
-- INSERT INTO public.profiles (id, name, email)
-- SELECT
--   au.id,
--   COALESCE(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
--   au.email
-- FROM auth.users au
-- WHERE au.id = 'USER_ID_AQUI'
--   AND NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = au.id);

-- INSERT INTO public.user_roles (user_id, role)
-- VALUES ('USER_ID_AQUI', 'user')
-- ON CONFLICT (user_id) DO NOTHING;

-- ================================================
-- 9. PROMOVER USUÁRIO A ADMIN
-- ================================================
-- Para tornar um usuário específico admin
-- ATENÇÃO: Substitua 'USER_ID_AQUI' pelo UUID do usuário

-- UPDATE public.user_roles
-- SET role = 'admin'
-- WHERE user_id = 'USER_ID_AQUI';

-- ================================================
-- 10. CORRIGIR TODOS OS USUÁRIOS SEM PROFILE/ROLE
-- ================================================
-- Execute este bloco para corrigir TODOS os usuários de uma vez
-- CUIDADO: Este script modifica todos os usuários sem profile/role

-- Criar profiles para usuários que não têm
-- INSERT INTO public.profiles (id, name, email)
-- SELECT
--   au.id,
--   COALESCE(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
--   au.email
-- FROM auth.users au
-- LEFT JOIN public.profiles p ON au.id = p.id
-- WHERE p.id IS NULL;

-- Criar roles para usuários que não têm
-- INSERT INTO public.user_roles (user_id, role)
-- SELECT
--   au.id,
--   'user'::app_role
-- FROM auth.users au
-- LEFT JOIN public.user_roles ur ON au.id = ur.user_id
-- WHERE ur.user_id IS NULL;

-- ================================================
-- 11. TESTE FINAL - VALIDAR TUDO
-- ================================================
-- Execute esta query para confirmar que todos os usuários estão OK
SELECT
  COUNT(*) FILTER (WHERE p.id IS NULL) as "Sem Profile",
  COUNT(*) FILTER (WHERE ur.user_id IS NULL) as "Sem Role",
  COUNT(*) FILTER (WHERE p.id IS NOT NULL AND ur.user_id IS NOT NULL) as "OK",
  COUNT(*) as "Total de Usuários"
FROM auth.users au
LEFT JOIN public.profiles p ON au.id = p.id
LEFT JOIN public.user_roles ur ON au.id = ur.user_id;

-- ================================================
-- INTERPRETAÇÃO DOS RESULTADOS
-- ================================================
--
-- Se "Sem Profile" ou "Sem Role" for > 0:
--   → Execute as queries de correção (#8 ou #10)
--
-- Se o trigger não aparecer na query #5:
--   → Execute o script de criação do trigger do arquivo SETUP_SUPABASE_PROMPT.md
--
-- Se RLS estiver desabilitado:
--   → Execute: ALTER TABLE nome_da_tabela ENABLE ROW LEVEL SECURITY;
--
-- Após fazer correções:
--   → Usuários precisam fazer LOGOUT e LOGIN novamente
--   → Limpar cache do navegador (Local Storage)
--
-- ================================================
