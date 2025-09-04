
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AuthPage = () => {
  const { signIn, signUp, resetPassword, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    await signIn(email, password);
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;
    
    await signUp(email, password, name);
    setLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResetLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    await resetPassword(email);
    setResetLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-petrol-50 to-antracite-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-2xl border-petrol-200 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-petrol-500 to-petrol-700 rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/92719de6-bc2d-451a-b76c-e73440b0cfc3.png" 
                alt="LETÍCIA TECIDOS" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <CardTitle className="text-2xl font-serif text-petrol-800 mb-2">Bem-vindo</CardTitle>
          <CardDescription className="text-antracite-600">Entre na sua conta ou crie uma nova</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-petrol-50 border border-petrol-200">
              <TabsTrigger value="signin" className="!text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white data-[state=active]:shadow-sm transition-all">Entrar</TabsTrigger>
              <TabsTrigger value="signup" className="!text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white data-[state=active]:shadow-sm transition-all">Cadastrar</TabsTrigger>
              <TabsTrigger value="reset" className="!text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white data-[state=active]:shadow-sm transition-all">Recuperar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin" className="mt-6">
              <form onSubmit={handleSignIn} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="text-antracite-700 font-medium">Email</Label>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password" className="text-antracite-700 font-medium">Senha</Label>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-petrol-600 to-petrol-700 hover:from-petrol-700 hover:to-petrol-800 text-white font-medium py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl" disabled={loading}>
                  {loading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="reset" className="mt-6">
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="reset-email" className="text-antracite-700 font-medium">Email</Label>
                  <Input
                    id="reset-email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-antracite-600 to-antracite-700 hover:from-antracite-700 hover:to-antracite-800 text-white font-medium py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl" disabled={resetLoading}>
                  {resetLoading ? 'Enviando...' : 'Enviar link de recuperação'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="mt-6">
              <form onSubmit={handleSignUp} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-antracite-700 font-medium">Nome completo</Label>
                  <Input
                    id="signup-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-antracite-700 font-medium">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-antracite-700 font-medium">Senha</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    minLength={6}
                    className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-petrol-600 to-petrol-700 hover:from-petrol-700 hover:to-petrol-800 text-white font-medium py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl" disabled={loading}>
                  {loading ? 'Criando conta...' : 'Criar conta'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
