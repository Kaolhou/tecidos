import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const { updatePassword } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se há tokens na URL (access_token e refresh_token)
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    
    if (!accessToken || !refreshToken) {
      toast({
        title: "Link inválido",
        description: "O link de recuperação de senha é inválido ou expirou.",
        variant: "destructive",
      });
      navigate('/auth');
    }
  }, [searchParams, navigate, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Senhas não coincidem",
        description: "As senhas digitadas são diferentes.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await updatePassword(password);
    
    if (!error) {
      navigate('/auth');
    }
    setLoading(false);
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
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          </div>
          <CardTitle className="text-2xl font-serif text-petrol-800 mb-2">Redefinir Senha</CardTitle>
          <CardDescription className="text-antracite-600">Digite sua nova senha</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-antracite-700 font-medium">Nova senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                minLength={6}
                className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-antracite-700 font-medium">Confirmar nova senha</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="••••••••"
                minLength={6}
                className="border-antracite-300 focus:border-petrol-500 focus:ring-petrol-500"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-petrol-600 to-petrol-700 hover:from-petrol-700 hover:to-petrol-800 text-white font-medium py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl" disabled={loading}>
              {loading ? 'Atualizando...' : 'Atualizar senha'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;