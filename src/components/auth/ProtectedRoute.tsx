
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();
  const [showTimeout, setShowTimeout] = useState(false);

  console.log('🛡️ ProtectedRoute check:', {
    loading,
    hasUser: !!user,
    userEmail: user?.email,
    profileRole: profile?.role,
    requireAdmin
  });

  // Set timeout for profile loading (10 seconds)
  useEffect(() => {
    if (user && !profile && !loading) {
      const timer = setTimeout(() => {
        console.warn('⏰ Profile loading timeout - showing error message');
        setShowTimeout(true);
      }, 10000);

      return () => clearTimeout(timer);
    } else {
      setShowTimeout(false);
    }
  }, [user, profile, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-muted-foreground">Carregando autenticação...</p>
      </div>
    );
  }

  if (!user) {
    console.log('🚫 No user, redirecting to /auth');
    return <Navigate to="/auth" replace />;
  }

  // Wait for profile to load if user exists but no profile yet
  if (!profile) {
    console.log('⏳ User exists but no profile yet, waiting...');

    if (showTimeout) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <CardTitle>Erro ao Carregar Perfil</CardTitle>
              </div>
              <CardDescription>
                Não foi possível carregar suas informações de usuário
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-3 rounded-lg text-sm">
                <p className="font-medium mb-2">Possíveis causas:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Problema de conexão com o banco de dados</li>
                  <li>Perfil ainda não foi criado</li>
                  <li>Permissões de acesso incorretas</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => window.location.reload()}
                  className="w-full"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Tentar Novamente
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/auth'}
                  className="w-full"
                >
                  Voltar para Login
                </Button>
              </div>
              <div className="text-xs text-gray-500 p-2 bg-gray-100 rounded font-mono">
                User ID: {user.id}<br />
                Email: {user.email}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-muted-foreground">Carregando perfil...</p>
        <p className="text-xs text-gray-400">Aguarde até 10 segundos...</p>
      </div>
    );
  }

  if (requireAdmin && profile?.role !== 'admin') {
    console.log('🚫 Admin required but user role is:', profile?.role);
    return <Navigate to="/dashboard" replace />;
  }

  console.log('✅ Access granted');
  return <>{children}</>;
};

export default ProtectedRoute;
