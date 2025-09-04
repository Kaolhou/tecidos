
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ProfileEditForm = () => {
  const { profile, updateProfile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || '',
    bio: profile?.bio || '',
    profile_image: profile?.profile_image || '',
  });

  const validateImageUrl = (url: string): boolean => {
    if (!url) return true; // Empty URLs are allowed
    
    try {
      const urlObj = new URL(url);
      // Only allow HTTPS URLs for security
      if (urlObj.protocol !== 'https:') return false;
      
      // Check for valid image file extensions
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const pathname = urlObj.pathname.toLowerCase();
      
      return validExtensions.some(ext => pathname.includes(ext)) || 
             pathname.includes('/image/') || // For services like imgur
             urlObj.hostname.includes('supabase'); // Allow Supabase storage
    } catch {
      return false;
    }
  };

  const sanitizeText = (text: string): string => {
    // Remove potentially dangerous characters and limit length
    return text.replace(/[<>\"']/g, '').trim().slice(0, 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate profile image URL
    if (formData.profile_image && !validateImageUrl(formData.profile_image)) {
      toast({
        variant: "destructive",
        title: "URL de imagem inválida",
        description: "Por favor, use uma URL HTTPS válida de imagem."
      });
      return;
    }

    // Sanitize text inputs
    const sanitizedData = {
      name: sanitizeText(formData.name),
      bio: sanitizeText(formData.bio),
      profile_image: formData.profile_image.trim()
    };

    setLoading(true);
    await updateProfile(sanitizedData);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Real-time validation for profile image URL
    if (name === 'profile_image' && value && !validateImageUrl(value)) {
      // Still update the state but could show visual feedback
      setFormData(prev => ({ ...prev, [name]: value }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile_image">URL da foto de perfil</Label>
            <Input
              id="profile_image"
              name="profile_image"
              value={formData.profile_image}
              onChange={handleChange}
              placeholder="https://exemplo.com/sua-foto.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biografia</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Conte um pouco sobre você..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={profile?.email || ''}
              disabled
              className="bg-gray-50"
            />
            <p className="text-xs text-gray-600">
              O email não pode ser alterado por questões de segurança.
            </p>
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileEditForm;
