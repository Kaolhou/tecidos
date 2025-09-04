import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Package, Users, ShoppingCart, Eye } from 'lucide-react';
import { cleanProductNameForAdmin } from '@/utils/adminUtils';

const AdminAnalyticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  // Query para estatísticas gerais
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      // Total de produtos
      const { count: productsCount } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });

      // Total de usuários
      const { count: usersCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Total de pedidos
      const { count: ordersCount } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true });

      // Receita total
      const { data: revenueData } = await supabase
        .from('orders')
        .select('total_amount')
        .eq('status', 'completed');

      const totalRevenue = revenueData?.reduce((sum, order) => sum + parseFloat(order.total_amount.toString()), 0) || 0;

      return {
        productsCount: productsCount || 0,
        usersCount: usersCount || 0,
        ordersCount: ordersCount || 0,
        totalRevenue,
      };
    },
  });

  // Query para vendas por período
  const { data: salesData } = useQuery({
    queryKey: ['sales-data', selectedPeriod],
    queryFn: async () => {
      const daysAgo = parseInt(selectedPeriod);
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - daysAgo);

      const { data } = await supabase
        .from('orders')
        .select('created_at, total_amount, status')
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: true });

      // Agrupar por dia
      const salesByDay = data?.reduce((acc: any, order) => {
        const date = new Date(order.created_at).toLocaleDateString('pt-BR');
        if (!acc[date]) {
          acc[date] = { date, revenue: 0, orders: 0 };
        }
        acc[date].revenue += parseFloat(order.total_amount.toString());
        acc[date].orders += 1;
        return acc;
      }, {});

      return Object.values(salesByDay || {});
    },
  });

  // Query para produtos mais vendidos
  const { data: topProducts } = useQuery({
    queryKey: ['top-products'],
    queryFn: async () => {
      const { data } = await supabase
        .from('order_items')
        .select(`
          product_name,
          quantity,
          products(name, price)
        `)
        .limit(10);

      // Agrupar por produto
      const productSales = data?.reduce((acc: any, item) => {
        const productName = item.product_name;
        if (!acc[productName]) {
          acc[productName] = { name: cleanProductNameForAdmin(productName), totalSold: 0 };
        }
        acc[productName].totalSold += item.quantity;
        return acc;
      }, {});

      return Object.values(productSales || {})
        .sort((a: any, b: any) => b.totalSold - a.totalSold)
        .slice(0, 5);
    },
  });

  // Query para analytics de produtos
  const { data: productAnalytics } = useQuery({
    queryKey: ['product-analytics'],
    queryFn: async () => {
      const { data } = await supabase
        .from('product_analytics')
        .select(`
          *,
          products(name)
        `)
        .order('views', { ascending: false })
        .limit(5);

      return data;
    },
  });

  // Query para status de pedidos
  const { data: orderStatus } = useQuery({
    queryKey: ['order-status'],
    queryFn: async () => {
      const { data } = await supabase
        .from('orders')
        .select('status');

      const statusCount = data?.reduce((acc: any, order) => {
        const status = order.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});

      return Object.entries(statusCount || {}).map(([status, count]) => ({
        name: status,
        value: count,
      }));
    },
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Analytics e Relatórios</h3>
          <p className="text-muted-foreground">Acompanhe o desempenho da sua loja</p>
        </div>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Últimos 7 dias</SelectItem>
            <SelectItem value="30">Últimos 30 dias</SelectItem>
            <SelectItem value="90">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold">{formatCurrency(stats?.totalRevenue || 0)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                <p className="text-2xl font-bold">{stats?.ordersCount || 0}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Produtos</p>
                <p className="text-2xl font-bold">{stats?.productsCount || 0}</p>
              </div>
              <Package className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Usuários Registrados</p>
                <p className="text-2xl font-bold">{stats?.usersCount || 0}</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Vendas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Vendas por Período
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip 
                  formatter={(value: any, name: string) => [
                    name === 'revenue' ? formatCurrency(value) : value,
                    name === 'revenue' ? 'Receita' : 'Pedidos'
                  ]}
                />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="orders" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status dos Pedidos */}
        <Card>
          <CardHeader>
            <CardTitle>Status dos Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={orderStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {orderStatus?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Produtos Mais Vendidos */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProducts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalSold" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Analytics de Produtos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              Produtos Mais Visualizados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {productAnalytics?.map((product, index) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{cleanProductNameForAdmin(product.products.name)}</p>
                    <p className="text-sm text-muted-foreground">
                      {product.views} visualizações • {product.cart_additions} adições ao carrinho
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{product.purchases} compras</p>
                    <p className="text-xs text-muted-foreground">
                      {product.cart_additions > 0 ? 
                        ((product.purchases / product.cart_additions) * 100).toFixed(1) + '% conversão' 
                        : '0% conversão'
                      }
                    </p>
                  </div>
                </div>
              ))}
              {(!productAnalytics || productAnalytics.length === 0) && (
                <p className="text-center text-muted-foreground py-4">
                  Nenhum dado de analytics disponível ainda.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalyticsDashboard;