import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Mail, Users, Send, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatDate } from 'date-fns';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  template_type: string;
  is_active: boolean;
  created_at: string;
}

interface SystemNotification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  is_read: boolean;
  created_at: string;
  profiles?: {
    name: string;
    email: string;
  };
}

const NotificationCenter = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: '',
    subject: '',
    content: '',
    template_type: 'newsletter',
  });
  const [notificationForm, setNotificationForm] = useState({
    title: '',
    message: '',
    type: 'info',
    target: 'all', // 'all' ou user_id específico
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query para templates de email
  const { data: emailTemplates } = useQuery({
    queryKey: ['email-templates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('email_templates')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as EmailTemplate[];
    },
  });

  // Query para notificações do sistema
  const { data: notifications } = useQuery({
    queryKey: ['system-notifications'],
    queryFn: async () => {
      const { data: notificationData, error } = await supabase
        .from('system_notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (error) throw error;

      // Buscar perfis dos usuários
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('id, name, email');
      
      if (profileError) throw profileError;

      // Combinar dados
      const notificationsWithProfiles = notificationData.map(notification => ({
        ...notification,
        profiles: profiles.find(profile => profile.id === notification.user_id)
      }));

      return notificationsWithProfiles as SystemNotification[];
    },
  });

  // Query para usuários
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, name, email')
        .order('name');
      if (error) throw error;
      return data;
    },
  });

  // Mutation para criar template de email
  const createEmailTemplateMutation = useMutation({
    mutationFn: async (template: Omit<EmailTemplate, 'id' | 'created_at' | 'updated_at' | 'is_active'>) => {
      const { error } = await supabase.from('email_templates').insert([{
        ...template,
        is_active: true,
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['email-templates'] });
      toast({
        title: "Sucesso",
        description: "Template de email criado com sucesso",
      });
      setIsEmailModalOpen(false);
      setEmailForm({ name: '', subject: '', content: '', template_type: 'newsletter' });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao criar template de email",
        variant: "destructive",
      });
    },
  });

  // Mutation para criar notificação
  const createNotificationMutation = useMutation({
    mutationFn: async (notification: any) => {
      if (notification.target === 'all') {
        // Enviar para todos os usuários
        const userNotifications = users?.map(user => ({
          user_id: user.id,
          title: notification.title,
          message: notification.message,
          type: notification.type,
        }));

        const { error } = await supabase
          .from('system_notifications')
          .insert(userNotifications || []);
        if (error) throw error;
      } else {
        // Enviar para usuário específico
        const { error } = await supabase
          .from('system_notifications')
          .insert([{
            user_id: notification.target,
            title: notification.title,
            message: notification.message,
            type: notification.type,
          }]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['system-notifications'] });
      toast({
        title: "Sucesso",
        description: "Notificação enviada com sucesso",
      });
      setIsNotificationModalOpen(false);
      setNotificationForm({ title: '', message: '', type: 'info', target: 'all' });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao enviar notificação",
        variant: "destructive",
      });
    },
  });

  // Mutation para enviar newsletter
  const sendNewsletterMutation = useMutation({
    mutationFn: async (templateId: string) => {
      const { error } = await supabase.functions.invoke('send-newsletter', {
        body: { templateId }
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "Sucesso",
        description: "Newsletter enviada com sucesso",
      });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao enviar newsletter",
        variant: "destructive",
      });
    },
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationBadgeVariant = (type: string) => {
    switch (type) {
      case 'error':
        return 'destructive';
      case 'warning':
        return 'secondary';
      case 'success':
        return 'default';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Central de Notificações</h3>
          <p className="text-muted-foreground">Gerencie emails e notificações do sistema</p>
        </div>
        <div className="space-x-2">
          <Dialog open={isEmailModalOpen} onOpenChange={setIsEmailModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Novo Template
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Criar Template de Email</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome do Template</Label>
                    <Input
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      placeholder="Ex: Newsletter Semanal"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo</Label>
                    <Select 
                      value={emailForm.template_type} 
                      onValueChange={(value) => setEmailForm({ ...emailForm, template_type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newsletter">Newsletter</SelectItem>
                        <SelectItem value="welcome">Boas-vindas</SelectItem>
                        <SelectItem value="stock_alert">Alerta de Estoque</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Assunto</Label>
                  <Input
                    value={emailForm.subject}
                    onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                    placeholder="Assunto do email"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Conteúdo</Label>
                  <Textarea
                    value={emailForm.content}
                    onChange={(e) => setEmailForm({ ...emailForm, content: e.target.value })}
                    placeholder="Conteúdo do email (HTML permitido)"
                    rows={8}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEmailModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button 
                    onClick={() => createEmailTemplateMutation.mutate(emailForm)}
                    disabled={createEmailTemplateMutation.isPending}
                  >
                    {createEmailTemplateMutation.isPending ? 'Criando...' : 'Criar Template'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isNotificationModalOpen} onOpenChange={setIsNotificationModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Nova Notificação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enviar Notificação</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input
                    value={notificationForm.title}
                    onChange={(e) => setNotificationForm({ ...notificationForm, title: e.target.value })}
                    placeholder="Título da notificação"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Mensagem</Label>
                  <Textarea
                    value={notificationForm.message}
                    onChange={(e) => setNotificationForm({ ...notificationForm, message: e.target.value })}
                    placeholder="Conteúdo da notificação"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tipo</Label>
                    <Select 
                      value={notificationForm.type} 
                      onValueChange={(value) => setNotificationForm({ ...notificationForm, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Informação</SelectItem>
                        <SelectItem value="warning">Aviso</SelectItem>
                        <SelectItem value="error">Erro</SelectItem>
                        <SelectItem value="success">Sucesso</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Destinatário</Label>
                    <Select 
                      value={notificationForm.target} 
                      onValueChange={(value) => setNotificationForm({ ...notificationForm, target: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os usuários</SelectItem>
                        {users?.map((user) => (
                          <SelectItem key={user.id} value={user.id}>
                            {user.name} ({user.email})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsNotificationModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button 
                    onClick={() => createNotificationMutation.mutate(notificationForm)}
                    disabled={createNotificationMutation.isPending}
                  >
                    {createNotificationMutation.isPending ? 'Enviando...' : 'Enviar'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList>
          <TabsTrigger value="templates">Templates de Email</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <div className="grid gap-6">
            {emailTemplates?.map((template) => (
              <Card key={template.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.subject}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{template.template_type}</Badge>
                        <Badge variant={template.is_active ? 'default' : 'secondary'}>
                          {template.is_active ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Criado em {formatDate(new Date(template.created_at), 'dd/MM/yyyy')}
                      </p>
                    </div>
                    <div className="space-x-2">
                      {template.template_type === 'newsletter' && (
                        <Button
                          size="sm"
                          onClick={() => sendNewsletterMutation.mutate(template.id)}
                          disabled={sendNewsletterMutation.isPending}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Enviar
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {(!emailTemplates || emailTemplates.length === 0) && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Nenhum template encontrado</h3>
                  <p className="text-muted-foreground mb-4">
                    Crie seu primeiro template de email para começar.
                  </p>
                  <Button onClick={() => setIsEmailModalOpen(true)}>
                    Criar Template
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="grid gap-4">
            {notifications?.map((notification) => (
              <Card key={notification.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{notification.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <p className="text-xs text-muted-foreground">
                              Para: {notification.profiles?.name} ({notification.profiles?.email})
                            </p>
                            <Badge variant={getNotificationBadgeVariant(notification.type) as any} className="text-xs">
                              {notification.type}
                            </Badge>
                            {!notification.is_read && (
                              <Badge variant="destructive" className="text-xs">
                                Não lida
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(new Date(notification.created_at), 'dd/MM/yyyy HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {(!notifications || notifications.length === 0) && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Nenhuma notificação encontrada</h3>
                  <p className="text-muted-foreground mb-4">
                    As notificações enviadas aparecerão aqui.
                  </p>
                  <Button onClick={() => setIsNotificationModalOpen(true)}>
                    Enviar Notificação
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationCenter;