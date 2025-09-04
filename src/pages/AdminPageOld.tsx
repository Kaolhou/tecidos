
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Package, Users, Tag, Upload } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploadComponent from '@/components/admin/ImageUploadComponent';
import BulkImageUpload from '@/components/admin/BulkImageUpload';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string | null;
  material: string | null;
  width: string | null;
  image_url: string | null;
  category: string | null;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  created_at: string;
  role: string;
}

const AdminPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [productImages, setProductImages] = useState<any[]>([]);
  const [showBulkUpload, setShowBulkUpload] = useState(false);

  // Fetch products
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ['admin-products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as Product[];
    },
  });

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });
      if (error) throw error;
      return data as Category[];
    },
  });

  // Fetch users
  const { data: profiles, isLoading: profilesLoading } = useQuery({
    queryKey: ['admin-profiles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as Profile[];
    },
  });

  // Delete product mutation
  const deleteProductMutation = useMutation({
    mutationFn: async (productId: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] });
      toast({
        title: 'Produto deletado',
        description: 'Produto removido com sucesso.',
      });
    },
    onError: () => {
      toast({
        title: 'Erro',
        description: 'Não foi possível deletar o produto.',
        variant: 'destructive',
      });
    },
  });

  // Add/Update product mutation
  const saveProductMutation = useMutation({
    mutationFn: async (productData: {
      name: string;
      price: number;
      description?: string;
      material?: string;
      width?: string;
      image_url?: string;
      category?: string;
    }) => {
      if (editingProduct) {
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', editingProduct.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('products')
          .insert(productData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] });
      setEditingProduct(null);
      setShowAddForm(false);
      toast({
        title: editingProduct ? 'Produto atualizado' : 'Produto criado',
        description: editingProduct 
          ? 'Produto atualizado com sucesso.' 
          : 'Novo produto adicionado com sucesso.',
      });
    },
    onError: () => {
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar o produto.',
        variant: 'destructive',
      });
    },
  });

  const handleSaveProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const productData = {
      name: formData.get('name') as string,
      price: parseFloat(formData.get('price') as string),
      description: formData.get('description') as string || null,
      material: formData.get('material') as string || null,
      width: formData.get('width') as string || null,
      image_url: formData.get('image_url') as string || null,
      category: formData.get('category') as string || 'Geral',
    };

    saveProductMutation.mutate(productData);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const ProductForm = () => (
    <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-petrol-800 font-serif">
          {editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSaveProduct} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Produto</Label>
              <Input
                id="name"
                name="name"
                defaultValue={editingProduct?.name || ''}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Preço (R$)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                defaultValue={editingProduct?.price || ''}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select name="category" defaultValue={editingProduct?.category || 'Geral'}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="material">Material</Label>
              <Input
                id="material"
                name="material"
                defaultValue={editingProduct?.material || ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Largura</Label>
              <Input
                id="width"
                name="width"
                defaultValue={editingProduct?.width || ''}
              />
            </div>
          </div>

          <ImageUploadComponent 
            productId={editingProduct?.id}
            onImagesChange={setProductImages}
          />

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={editingProduct?.description || ''}
              rows={4}
            />
          </div>

          <div className="flex space-x-2">
            <Button type="submit" disabled={saveProductMutation.isPending}>
              {saveProductMutation.isPending ? 'Salvando...' : 'Salvar'}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => {
                setEditingProduct(null);
                setShowAddForm(false);
              }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-petrol-50 to-antracite-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2 text-petrol-800">Painel Administrativo</h1>
          <p className="text-antracite-600">Gerencie produtos, categorias e usuários da plataforma.</p>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-petrol-50 border border-petrol-200">
            <TabsTrigger value="products" className="flex items-center space-x-2 !text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white">
              <Package className="h-4 w-4" />
              <span>Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="bulk-upload" className="flex items-center space-x-2 !text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white">
              <Upload className="h-4 w-4" />
              <span>Upload em Massa</span>
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center space-x-2 !text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white">
              <Tag className="h-4 w-4" />
              <span>Categorias</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2 !text-petrol-700 hover:!text-petrol-800 data-[state=active]:!bg-petrol-600 data-[state=active]:!text-white">
              <Users className="h-4 w-4" />
              <span>Usuários</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            {(showAddForm || editingProduct) && <ProductForm />}
            
            <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-petrol-800 font-serif">Produtos</CardTitle>
                  <CardDescription className="text-antracite-600">
                    Gerencie o catálogo de produtos da loja.
                  </CardDescription>
                </div>
                <Button 
                  onClick={() => setShowAddForm(true)}
                  disabled={showAddForm || !!editingProduct}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Produto
                </Button>
              </CardHeader>
              <CardContent>
                {productsLoading ? (
                  <div className="text-center py-8">Carregando produtos...</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Preço</TableHead>
                        <TableHead>Material</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products?.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.image_url || '/placeholder.svg'}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-gray-500">
                                  {product.width && `Largura: ${product.width}`}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{product.category || 'Geral'}</Badge>
                          </TableCell>
                          <TableCell>{formatPrice(product.price)}</TableCell>
                          <TableCell>
                            {product.material && (
                              <Badge variant="secondary">{product.material}</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setEditingProduct(product)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteProductMutation.mutate(product.id)}
                                disabled={deleteProductMutation.isPending}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk-upload">
            <BulkImageUpload 
              products={products || []}
              onComplete={() => {
                queryClient.invalidateQueries({ queryKey: ['admin-products'] });
                toast({
                  title: 'Upload concluído',
                  description: 'As imagens foram processadas com sucesso.',
                });
              }}
            />
          </TabsContent>

          <TabsContent value="categories">
            <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-petrol-800 font-serif">Categorias</CardTitle>
                <CardDescription className="text-antracite-600">
                  Gerencie as categorias de produtos da loja.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {categoriesLoading ? (
                  <div className="text-center py-8">Carregando categorias...</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories?.map((category) => (
                      <Card key={category.id} className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{category.name}</h3>
                          <Badge variant="secondary">
                            {products?.filter(p => p.category === category.name).length || 0} produtos
                          </Badge>
                        </div>
                        {category.description && (
                          <p className="text-sm text-gray-600">{category.description}</p>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="bg-white/95 backdrop-blur-sm border-petrol-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-petrol-800 font-serif">Usuários</CardTitle>
                <CardDescription className="text-antracite-600">
                  Lista de usuários registrados na plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {profilesLoading ? (
                  <div className="text-center py-8">Carregando usuários...</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Função</TableHead>
                        <TableHead>Data de Cadastro</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {profiles?.map((profile) => (
                        <TableRow key={profile.id}>
                          <TableCell>{profile.name || 'Não informado'}</TableCell>
                          <TableCell>{profile.email}</TableCell>
                          <TableCell>
                            <Badge variant={profile.role === 'admin' ? 'default' : 'secondary'}>
                              {profile.role === 'admin' ? 'Administrador' : 'Cliente'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(profile.created_at).toLocaleDateString('pt-BR')}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
