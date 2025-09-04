import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Edit, Trash2, AlertTriangle, Package, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cleanProductNameForAdmin } from '@/utils/adminUtils';
import ProductCreateEditModal from './ProductCreateEditModal';
import StockManagement from './StockManagement';
import BulkImageUpload from './BulkImageUpload';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  material: string;
  width: string;
  image_url: string;
  category: string;
  created_at: string;
}

const AdminProductsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: products, isLoading } = useQuery({
    queryKey: ['admin-products', searchTerm, categoryFilter, stockFilter],
    queryFn: async () => {
      let query = supabase.from('products').select('*').order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);
      }

      if (categoryFilter !== 'all') {
        query = query.eq('category', categoryFilter);
      }

      const { data, error } = await query;
      if (error) throw error;

      // Filtrar produtos sem imagem
      let filteredData = data.filter(product => product.image_url && product.image_url.trim() !== '');
      
      if (stockFilter === 'low') {
        filteredData = filteredData.filter(product => product.stock_quantity <= 5);
      } else if (stockFilter === 'out') {
        filteredData = filteredData.filter(product => product.stock_quantity === 0);
      }

      return filteredData;
    },
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase.from('categories').select('*');
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (productId: string) => {
      const { error } = await supabase.from('products').delete().eq('id', productId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] });
      toast({
        title: "Sucesso",
        description: "Produto deletado com sucesso",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao deletar produto",
        variant: "destructive",
      });
    },
  });

  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setIsCreateMode(true);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsCreateMode(false);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      deleteMutation.mutate(productId);
    }
  };

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) return { label: 'Sem estoque', color: 'destructive' };
    if (quantity <= 5) return { label: 'Estoque baixo', color: 'warning' };
    return { label: 'Em estoque', color: 'default' };
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
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
          <h2 className="text-2xl font-bold">Gestão de Produtos</h2>
          <p className="text-muted-foreground">Gerencie produtos, estoque e preços</p>
        </div>
        <Button onClick={handleCreateProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="stock">Controle de Estoque</TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload de Imagens
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          {/* Filtros */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas categorias</SelectItem>
                    {categories?.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={stockFilter} onValueChange={setStockFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Estoque" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="low">Estoque baixo</SelectItem>
                    <SelectItem value="out">Sem estoque</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Package className="h-4 w-4 mr-2" />
                  {products?.length || 0} produtos
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de Produtos */}
          <div className="grid gap-6">
            {products?.map((product) => {
              const stockStatus = getStockStatus(product.stock_quantity);
              return (
                <Card key={product.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-4">
                        <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
                          {product.image_url ? (
                            <img
                              src={product.image_url}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-semibold text-lg">{cleanProductNameForAdmin(product.name)}</h3>
                            <p className="text-muted-foreground line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <span><strong>Preço:</strong> {formatPrice(product.price)}</span>
                            <span><strong>Material:</strong> {product.material}</span>
                            <span><strong>Largura:</strong> {product.width}</span>
                            <Badge variant="outline">{product.category}</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <Badge variant={stockStatus.color as any}>
                              {stockStatus.label}
                            </Badge>
                            {product.stock_quantity <= 5 && (
                              <AlertTriangle className="h-4 w-4 text-orange-500" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {product.stock_quantity} unidades
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditProduct(product)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {products?.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Nenhum produto encontrado</h3>
                <p className="text-muted-foreground mb-4">
                  Não encontramos produtos que correspondam aos filtros aplicados.
                </p>
                <Button onClick={handleCreateProduct}>
                  <Plus className="h-4 w-4 mr-2" />
                  Criar primeiro produto
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="stock">
          <StockManagement />
        </TabsContent>

        <TabsContent value="upload">
          <BulkImageUpload 
            products={products || []}
            onComplete={() => {
              queryClient.invalidateQueries({ queryKey: ['admin-products'] });
              toast({
                title: "Sucesso",
                description: "Upload completado com sucesso",
              });
            }}
          />
        </TabsContent>
      </Tabs>

      <ProductCreateEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        isCreateMode={isCreateMode}
        onSuccess={() => {
          queryClient.invalidateQueries({ queryKey: ['admin-products'] });
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default AdminProductsManagement;