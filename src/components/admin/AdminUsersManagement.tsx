import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Search, Users, Crown, Shield, User, Calendar, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatDate } from 'date-fns';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  created_at: string;
  user_roles?: {
    role: string;
  }[];
}

interface UserOrders {
  user_id: string;
  total_orders: number;
  total_spent: number;
  last_order: string;
}

const AdminUsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRole, setNewRole] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery({
    queryKey: ['admin-users', searchTerm, roleFilter],
    queryFn: async () => {
      // Buscar profiles
      let profileQuery = supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchTerm) {
        profileQuery = profileQuery.or(`name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`);
      }

      const { data: profiles, error: profileError } = await profileQuery;
      if (profileError) throw profileError;

      // Buscar roles dos usuários
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');
      
      if (rolesError) throw rolesError;

      // Combinar dados
      const usersWithRoles = profiles.map(profile => ({
        ...profile,
        user_roles: userRoles.filter(role => role.user_id === profile.id)
      }));

      // Filtrar por role se necessário
      if (roleFilter !== 'all') {
        return usersWithRoles.filter(user => 
          user.user_roles.some(role => role.role === roleFilter)
        );
      }

      return usersWithRoles;
    },
  });

  const { data: userStats } = useQuery({
    queryKey: ['user-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          user_id,
          total_amount,
          created_at
        `);

      if (error) throw error;

      const stats = data.reduce((acc: any, order) => {
        const userId = order.user_id;
        if (!acc[userId]) {
          acc[userId] = {
            user_id: userId,
            total_orders: 0,
            total_spent: 0,
            last_order: order.created_at,
          };
        }
        acc[userId].total_orders += 1;
        acc[userId].total_spent += parseFloat(order.total_amount.toString());
        if (new Date(order.created_at) > new Date(acc[userId].last_order)) {
          acc[userId].last_order = order.created_at;
        }
        return acc;
      }, {});

      return Object.values(stats) as UserOrders[];
    },
  });

  const updateRoleMutation = useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: string }) => {
      // Primeiro, remove roles existentes
      await supabase.from('user_roles').delete().eq('user_id', userId);
      
      // Então, adiciona o novo role
      const { error } = await supabase.from('user_roles').insert([{
        user_id: userId,
        role: role as 'admin' | 'moderator' | 'user',
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast({
        title: "Sucesso",
        description: "Role do usuário atualizado com sucesso",
      });
      setIsModalOpen(false);
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao atualizar role do usuário",
        variant: "destructive",
      });
    },
  });

  const handleUpdateRole = () => {
    if (!selectedUser || !newRole) return;
    
    updateRoleMutation.mutate({
      userId: selectedUser.id,
      role: newRole,
    });
  };

  const openRoleModal = (user: UserProfile) => {
    setSelectedUser(user);
    setNewRole(user.user_roles?.[0]?.role || 'user');
    setIsModalOpen(true);
  };

  const getUserRole = (user: UserProfile) => {
    return user.user_roles?.[0]?.role || 'user';
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="h-4 w-4" />;
      case 'moderator':
        return <Shield className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin':
        return 'destructive';
      case 'moderator':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const getUserStats = (userId: string) => {
    return userStats?.find(stat => stat.user_id === userId);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-1/3"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Gestão de Usuários</h3>
          <p className="text-muted-foreground">Gerencie usuários e suas permissões</p>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar usuários..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os roles</SelectItem>
                <SelectItem value="admin">Administradores</SelectItem>
                <SelectItem value="moderator">Moderadores</SelectItem>
                <SelectItem value="user">Usuários</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              {users?.length || 0} usuários
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Usuários */}
      <div className="grid gap-6">
        {users?.map((user) => {
          const role = getUserRole(user);
          const stats = getUserStats(user.id);
          
          return (
            <Card key={user.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <p className="text-muted-foreground">{user.email}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Desde {formatDate(new Date(user.created_at), 'dd/MM/yyyy')}</span>
                        </div>
                        
                        {stats && (
                          <>
                            <div className="flex items-center space-x-1">
                              <ShoppingBag className="h-4 w-4" />
                              <span>{stats.total_orders} pedidos</span>
                            </div>
                            <span>Total gasto: {formatCurrency(stats.total_spent)}</span>
                          </>
                        )}
                      </div>
                      
                      {stats?.last_order && (
                        <p className="text-sm text-muted-foreground">
                          Último pedido: {formatDate(new Date(stats.last_order), 'dd/MM/yyyy')}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={getRoleBadgeVariant(role) as any}
                      className="flex items-center space-x-1"
                    >
                      {getRoleIcon(role)}
                      <span className="capitalize">{role}</span>
                    </Badge>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openRoleModal(user)}
                    >
                      Alterar Role
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {users?.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum usuário encontrado</h3>
            <p className="text-muted-foreground">
              Não encontramos usuários que correspondam aos filtros aplicados.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Modal para alterar role */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alterar Role do Usuário</DialogTitle>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-4">
              <div>
                <p><strong>Usuário:</strong> {selectedUser.name}</p>
                <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
              </div>
              
              <div className="space-y-2">
                <Label>Novo Role</Label>
                <Select value={newRole} onValueChange={setNewRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">Usuário</SelectItem>
                    <SelectItem value="moderator">Moderador</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleUpdateRole} disabled={updateRoleMutation.isPending}>
                  {updateRoleMutation.isPending ? 'Salvando...' : 'Salvar'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminUsersManagement;