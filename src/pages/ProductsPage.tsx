import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  product_images?: Array<{
    image_url: string;
    alt_text: string | null;
    position: number;
  }>;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('categoria');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Fetch products with images
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Fetching products from Supabase...');
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images!left (
            image_url,
            alt_text,
            position
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
      
      console.log('Products fetched successfully:', data);
      return data as Product[];
    },
  });

  // Fetch categories
  const { data: categories } = useQuery({
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

  // Filter products based on search and category
  const filteredProducts = products?.filter(product => {
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get product count by category
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === 'all') return products?.length || 0;
    return products?.filter(p => p.category === categoryName).length || 0;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: category });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Carregando produtos...</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.error('Error in ProductsPage:', error);
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Erro ao carregar produtos</h2>
            <p className="text-gray-600 mb-4">
              {error instanceof Error ? error.message : 'Erro desconhecido'}
            </p>
            <Button onClick={() => window.location.reload()}>
              Tentar Novamente
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  console.log('Rendering products:', products);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8 bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">Nossos Produtos</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Descubra nossa coleção exclusiva de tecidos premium. Qualidade excepcional para seus projetos mais especiais.
          </p>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-antracite-300 focus:border-antracite-500 focus:ring-antracite-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-64 border-antracite-300 focus:border-antracite-500 focus:ring-antracite-500">
                  <SelectValue placeholder="Filtrar por categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    Todas as Categorias ({getCategoryCount('all')})
                  </SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name} ({getCategoryCount(category.name)})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange('all')}
            >
              Todos ({getCategoryCount('all')})
            </Button>
            {categories?.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category.name)}
              >
                {category.name} ({getCategoryCount(category.name)})
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredProducts?.length || 0} produto(s) encontrado(s) para "{searchTerm}"
              {selectedCategory !== 'all' && ` na categoria "${selectedCategory}"`}
            </p>
          </div>
        )}

        {filteredProducts && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-white border-antracite-200 hover:border-antracite-400 hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={
                        product.product_images?.[0]?.image_url || 
                        product.image_url || 
                        '/placeholder.svg'
                      }
                      alt={
                        product.product_images?.[0]?.alt_text || 
                        product.name
                      }
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
                    <div className="flex flex-wrap gap-1">
                      {product.category && (
                        <Badge variant="default" className="text-xs">
                          {product.category}
                        </Badge>
                      )}
                      {product.material && (
                        <Badge variant="secondary" className="text-xs">
                          {product.material}
                        </Badge>
                      )}
                    </div>
                    {product.width && (
                      <p className="text-sm text-gray-600">Largura: {product.width}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full" 
                    onClick={() => navigate(`/produto/${product.id}`)}
                  >
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Nenhum produto encontrado' 
                : 'Nenhum produto encontrado'}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Tente ajustar seus filtros de busca ou categoria.'
                : products === null 
                  ? 'Erro ao carregar produtos' 
                  : 'Em breve teremos novos produtos disponíveis.'}
            </p>
            <div className="flex gap-2 justify-center">
              {(searchTerm || selectedCategory !== 'all') && (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    handleCategoryChange('all');
                  }}
                >
                  Limpar Filtros
                </Button>
              )}
              <Button onClick={() => navigate('/admin')} variant="outline">
                {products === null ? 'Tentar Novamente' : 'Adicionar Produtos (Admin)'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
