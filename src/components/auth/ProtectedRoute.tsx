
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();

  console.log('🛡️ ProtectedRoute check:', { 
    loading, 
    hasUser: !!user, 
    userEmail: user?.email,
    profileRole: profile?.role,
    requireAdmin 
  });

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

  // Wait a bit more for profile to load if user exists but no profile yet
  if (!profile) {
    console.log('⏳ User exists but no profile yet, waiting...');
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-muted-foreground">Carregando perfil...</p>
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
