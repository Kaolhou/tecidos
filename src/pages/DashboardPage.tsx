
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Heart, Package, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileEditForm from '@/components/dashboard/ProfileEditForm';
import UserOrders from '@/components/dashboard/UserOrders';
import UserWishlist from '@/components/dashboard/UserWishlist';

const DashboardPage = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleAdminAccess = () => {
    console.log('🔧 Admin button clicked');
    console.log('📧 User email:', profile?.email);
    console.log('👤 User role:', profile?.role);
    console.log('🎯 Navigating to /admin...');
    navigate('/admin');
  };

  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16 md:h-20 md:w-20">
                  <AvatarImage src={profile?.profile_image || ''} />
                  <AvatarFallback className="text-lg">
                    {getInitials(profile?.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Olá, {profile?.name || 'Usuário'}!</h1>
                  <p className="text-sm md:text-base text-gray-600 truncate max-w-[200px] md:max-w-none">{profile?.email}</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Cliente</Badge>
                  </div>
                </div>
              </div>

              {/* Botão Admin para tecidosleticia@gmail.com */}
              {profile?.email === 'tecidosleticia@gmail.com' && (
                <Button
                  onClick={handleAdminAccess}
                  variant="outline"
                  className="flex items-center gap-2 w-full md:w-auto"
                >
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Área Administrativa</span>
                  <span className="sm:hidden">Admin</span>
                </Button>
              )}
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center justify-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Perfil</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center justify-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Desejos</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center justify-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Pedidos</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center justify-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Config</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Perfil</CardTitle>
                  <CardDescription>
                    Gerencie suas informações pessoais e configurações de conta.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfileEditForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <UserWishlist />
            </TabsContent>

            <TabsContent value="orders">
              <UserOrders />
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                  <CardDescription>
                    Gerencie suas preferências e configurações de segurança.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile?.role === 'admin' && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Acesso Administrativo</h4>
                      <p className="text-blue-700 text-sm mb-3">
                        Você tem privilégios de administrador. Gerencie produtos e usuários.
                      </p>
                      <Button onClick={() => navigate('/admin')} variant="outline">
                        Acessar Painel Admin
                      </Button>
                    </div>
                  )}
                  
                  <div className="border-t pt-4">
                    <Button 
                      variant="destructive" 
                      onClick={handleSignOut}
                      className="w-full"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sair da Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
