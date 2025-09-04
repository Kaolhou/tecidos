import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, Package, CheckCircle, Clock, Truck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface OrderItem {
  id: string;
  product_name: string;
  quantity: number;
  product_price: number;
  subtotal: number;
}

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  total_amount: number;
  shipping_cost: number;
  status: string;
  created_at: string;
  shipping_address: any;
  order_items: OrderItem[];
}

const OrderStatusPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);

  const { data: order, isLoading, error, refetch } = useQuery({
    queryKey: ['order-status', orderNumber, email],
    queryFn: async () => {
      if (!orderNumber || !email) return null;
      
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            id,
            product_name,
            quantity,
            product_price,
            subtotal
          )
        `)
        .ilike('id', `%${orderNumber}%`)
        .eq('customer_email', email.toLowerCase())
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          throw new Error('Pedido não encontrado. Verifique o número do pedido e email.');
        }
        throw new Error('Erro ao buscar pedido. Tente novamente.');
      }

      return data as Order;
    },
    enabled: searchAttempted && orderNumber.length >= 6 && email.includes('@'),
    retry: false,
  });

  const handleSearch = () => {
    if (!orderNumber || orderNumber.length < 6) {
      toast({
        title: "Número do pedido inválido",
        description: "Digite pelo menos os últimos 6 caracteres do número do pedido.",
        variant: "destructive",
      });
      return;
    }

    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Digite um email válido.",
        variant: "destructive",
      });
      return;
    }

    setSearchAttempted(true);
    refetch();
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Aguardando Processamento',
          icon: Clock,
          color: 'bg-yellow-100 text-yellow-800',
          description: 'Seu pedido foi recebido e está aguardando processamento.'
        };
      case 'processing':
        return {
          label: 'Em Processamento',
          icon: Package,
          color: 'bg-blue-100 text-blue-800',
          description: 'Seu pedido está sendo preparado para envio.'
        };
      case 'shipped':
        return {
          label: 'Enviado',
          icon: Truck,
          color: 'bg-purple-100 text-purple-800',
          description: 'Seu pedido foi enviado e está a caminho.'
        };
      case 'delivered':
        return {
          label: 'Entregue',
          icon: CheckCircle,
          color: 'bg-green-100 text-green-800',
          description: 'Seu pedido foi entregue com sucesso!'
        };
      default:
        return {
          label: 'Status Desconhecido',
          icon: Clock,
          color: 'bg-gray-100 text-gray-800',
          description: 'Status do pedido não identificado.'
        };
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Consultar Status do Pedido
          </h1>
          <p className="text-lg text-gray-600">
            Digite o número do seu pedido e email para consultar o status
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Buscar Pedido
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Número do Pedido (últimos 6+ dígitos)
                </label>
                <Input
                  type="text"
                  placeholder="Ex: A1B2C3D4"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Email do Pedido
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            <Button 
              onClick={handleSearch} 
              disabled={isLoading}
              className="w-full md:w-auto"
            >
              {isLoading ? 'Buscando...' : 'Consultar Pedido'}
            </Button>
          </CardContent>
        </Card>

        {error && (
          <Card className="mb-8 border-red-200">
            <CardContent className="pt-6">
              <div className="text-center text-red-600">
                <p className="font-medium">{error.message}</p>
                <p className="text-sm mt-2">
                  Verifique se o número do pedido e email estão corretos.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {order && (
          <div className="space-y-6">
            {/* Order Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">
                      Pedido #{order.id.slice(-8).toUpperCase()}
                    </CardTitle>
                    <p className="text-gray-600">
                      Realizado em {formatDate(order.created_at)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {formatPrice(order.total_amount)}
                    </p>
                    <p className="text-sm text-gray-600">Total do pedido</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Order Status */}
            <Card>
              <CardHeader>
                <CardTitle>Status do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                {(() => {
                  const statusInfo = getStatusInfo(order.status);
                  const StatusIcon = statusInfo.icon;
                  return (
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${statusInfo.color}`}>
                        <StatusIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <Badge className={statusInfo.color}>
                          {statusInfo.label}
                        </Badge>
                        <p className="text-gray-600 mt-1">
                          {statusInfo.description}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Itens do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.order_items.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.product_name}</h4>
                          <p className="text-sm text-gray-600">
                            Quantidade: {item.quantity} × {formatPrice(item.product_price)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatPrice(item.subtotal)}</p>
                        </div>
                      </div>
                      {index < order.order_items.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{formatPrice(order.total_amount - order.shipping_cost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete:</span>
                    <span>{formatPrice(order.shipping_cost)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{formatPrice(order.total_amount)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Endereço de Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700">
                  <p className="font-medium">{order.customer_name}</p>
                  <p>{order.shipping_address.street}, {order.shipping_address.number}</p>
                  {order.shipping_address.complement && (
                    <p>{order.shipping_address.complement}</p>
                  )}
                  <p>{order.shipping_address.neighborhood}</p>
                  <p>{order.shipping_address.city} - {order.shipping_address.state}</p>
                  <p>CEP: {order.shipping_address.zipCode}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatusPage;