import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertTriangle, Plus, Minus, Package, History, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatDate } from 'date-fns';

interface StockMovement {
  id: string;
  product_id: string;
  movement_type: string;
  quantity: number;
  previous_quantity: number;
  new_quantity: number;
  reason: string;
  created_at: string;
  products: {
    name: string;
  };
}

interface StockAlert {
  id: string;
  product_id: string;
  threshold: number;
  is_active: boolean;
  products: {
    name: string;
    stock_quantity: number;
  };
}

const StockManagement = () => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [movementType, setMovementType] = useState<'purchase' | 'adjustment' | 'sale'>('purchase');
  const [quantity, setQuantity] = useState(0);
  const [reason, setReason] = useState('');
  const [isMovementModalOpen, setIsMovementModalOpen] = useState(false);
  const [alertThreshold, setAlertThreshold] = useState(5);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*').order('name');
      if (error) throw error;
      return data;
    },
  });

  const { data: stockMovements } = useQuery({
    queryKey: ['stock-movements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stock_movements')
        .select(`
          *,
          products (name)
        `)
        .order('created_at', { ascending: false })
        .limit(50);
      if (error) throw error;
      return data as StockMovement[];
    },
  });

  const { data: stockAlerts } = useQuery({
    queryKey: ['stock-alerts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stock_alerts')
        .select(`
          *,
          products (name, stock_quantity)
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as StockAlert[];
    },
  });

  const stockMovementMutation = useMutation({
    mutationFn: async ({ productId, type, qty, reason }: {
      productId: string;
      type: string;
      qty: number;
      reason: string;
    }) => {
      const { error } = await supabase.rpc('log_stock_movement', {
        p_product_id: productId,
        p_movement_type: type,
        p_quantity: qty,
        p_reason: reason || null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock-movements'] });
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['admin-products'] });
      toast({
        title: "Sucesso",
        description: "Movimentação de estoque registrada",
      });
      setIsMovementModalOpen(false);
      setQuantity(0);
      setReason('');
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao registrar movimentação",
        variant: "destructive",
      });
    },
  });

  const createAlertMutation = useMutation({
    mutationFn: async ({ productId, threshold }: { productId: string; threshold: number }) => {
      const { error } = await supabase.from('stock_alerts').insert([{
        product_id: productId,
        threshold: threshold,
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock-alerts'] });
      toast({
        title: "Sucesso",
        description: "Alerta de estoque criado",
      });
      setIsAlertModalOpen(false);
      setAlertThreshold(5);
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao criar alerta",
        variant: "destructive",
      });
    },
  });

  const handleStockMovement = () => {
    if (!selectedProductId || quantity <= 0) {
      toast({
        title: "Erro",
        description: "Selecione um produto e informe uma quantidade válida",
        variant: "destructive",
      });
      return;
    }

    stockMovementMutation.mutate({
      productId: selectedProductId,
      type: movementType,
      qty: quantity,
      reason: reason,
    });
  };

  const handleCreateAlert = () => {
    if (!selectedProductId || alertThreshold <= 0) {
      toast({
        title: "Erro",
        description: "Selecione um produto e informe um limite válido",
        variant: "destructive",
      });
      return;
    }

    createAlertMutation.mutate({
      productId: selectedProductId,
      threshold: alertThreshold,
    });
  };

  const getMovementIcon = (type: string) => {
    switch (type) {
      case 'purchase':
        return <Plus className="h-4 w-4 text-green-500" />;
      case 'sale':
        return <Minus className="h-4 w-4 text-red-500" />;
      case 'adjustment':
        return <Settings className="h-4 w-4 text-blue-500" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getMovementLabel = (type: string) => {
    switch (type) {
      case 'purchase':
        return 'Compra';
      case 'sale':
        return 'Venda';
      case 'adjustment':
        return 'Ajuste';
      default:
        return type;
    }
  };

  // Produtos com estoque baixo
  const lowStockProducts = products?.filter(product => {
    const alert = stockAlerts?.find(alert => alert.product_id === product.id);
    return alert && product.stock_quantity <= alert.threshold;
  }) || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Controle de Estoque</h3>
          <p className="text-muted-foreground">Gerencie movimentações e alertas de estoque</p>
        </div>
        <div className="space-x-2">
          <Dialog open={isMovementModalOpen} onOpenChange={setIsMovementModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Package className="h-4 w-4 mr-2" />
                Nova Movimentação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Registrar Movimentação de Estoque</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Produto</Label>
                  <Select value={selectedProductId} onValueChange={setSelectedProductId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um produto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products?.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} (Estoque: {product.stock_quantity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de Movimentação</Label>
                  <Select value={movementType} onValueChange={(value: any) => setMovementType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="purchase">Compra (Entrada)</SelectItem>
                      <SelectItem value="adjustment">Ajuste</SelectItem>
                      <SelectItem value="sale">Venda (Saída)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Quantidade</Label>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Motivo (opcional)</Label>
                  <Input
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Ex: Compra de fornecedor, correção de inventário"
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsMovementModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleStockMovement} disabled={stockMovementMutation.isPending}>
                    {stockMovementMutation.isPending ? 'Registrando...' : 'Registrar'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isAlertModalOpen} onOpenChange={setIsAlertModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Configurar Alerta
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configurar Alerta de Estoque</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Produto</Label>
                  <Select value={selectedProductId} onValueChange={setSelectedProductId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um produto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products?.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Limite para Alerta</Label>
                  <Input
                    type="number"
                    min="1"
                    value={alertThreshold}
                    onChange={(e) => setAlertThreshold(parseInt(e.target.value) || 5)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Será exibido um alerta quando o estoque for igual ou menor que este valor.
                  </p>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsAlertModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleCreateAlert} disabled={createAlertMutation.isPending}>
                    {createAlertMutation.isPending ? 'Criando...' : 'Criar Alerta'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Alertas de Estoque Baixo */}
      {lowStockProducts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Alertas de Estoque Baixo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStockProducts.map((product) => {
                const alert = stockAlerts?.find(alert => alert.product_id === product.id);
                return (
                  <div key={product.id} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Estoque atual: {product.stock_quantity} | Limite: {alert?.threshold}
                      </p>
                    </div>
                    <Badge variant="destructive">Estoque Baixo</Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Histórico de Movimentações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <History className="h-5 w-5 mr-2" />
            Histórico de Movimentações
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stockMovements && stockMovements.length > 0 ? (
            <div className="space-y-4">
              {stockMovements.map((movement) => (
                <div key={movement.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getMovementIcon(movement.movement_type)}
                    <div>
                      <p className="font-medium">{movement.products.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {getMovementLabel(movement.movement_type)} • {movement.quantity} unidades
                      </p>
                      {movement.reason && (
                        <p className="text-sm text-muted-foreground">
                          Motivo: {movement.reason}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      {movement.previous_quantity} → {movement.new_quantity}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(new Date(movement.created_at), 'dd/MM/yyyy HH:mm')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Nenhuma movimentação registrada ainda.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StockManagement;