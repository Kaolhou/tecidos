import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Package, ShoppingCart, Users, BarChart3, Lock, Settings, Bell } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminOrdersManagement from '@/components/admin/AdminOrdersManagement';
import AdminProductsManagement from '@/components/admin/AdminProductsManagement';
import AdminAnalyticsDashboard from '@/components/admin/AdminAnalyticsDashboard';
import AdminUsersManagement from '@/components/admin/AdminUsersManagement';
import NotificationCenter from '@/components/admin/NotificationCenter';

const AdminPageExclusive = () => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="ml-4 text-gray-600">Carregando...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Verificação de acesso baseada em role
  console.log('🔐 AdminPageExclusive - Access check:', {
    hasUser: !!user,
    userEmail: user?.email,
    profileRole: profile?.role,
    isAdmin: profile?.role === 'admin'
  });

  if (!user || profile?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="text-center py-8">
              <Lock className="h-12 w-12 mx-auto text-red-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Acesso Negado</h2>
              <p className="text-gray-600">
                Você não tem permissão para acessar esta página.
                Apenas administradores podem visualizar o painel administrativo.
              </p>
              {user && (
                <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-left">
                  <p className="font-semibold mb-1">Debug Info:</p>
                  <p>Email: {user.email}</p>
                  <p>Role atual: {profile?.role || 'undefined'}</p>
                  <p>Role necessária: admin</p>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Painel Administrativo</h1>
          <p className="text-gray-600">Gerencie produtos, pedidos e configurações da loja</p>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Produtos
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Usuários
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notificações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <AdminOrdersManagement />
          </TabsContent>

          <TabsContent value="products">
            <AdminProductsManagement />
          </TabsContent>

          <TabsContent value="users">
            <AdminUsersManagement />
          </TabsContent>

          <TabsContent value="analytics">
            <AdminAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="notifications">
            <NotificationCenter />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPageExclusive;