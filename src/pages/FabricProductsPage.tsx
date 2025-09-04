import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useProducts, useProductCategories } from '@/hooks/useProducts';

const FabricProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todas');
  const [sortBy, setSortBy] = useState('name');

  const { categories, loading: categoriesLoading } = useProductCategories();
  const { 
    products, 
    loading: productsLoading, 
    error 
  } = useProducts({
    category: selectedCategory === 'todas' ? undefined : selectedCategory,
    search: searchTerm || undefined
  });
  
  const sortedProducts = useMemo(() => {
    if (!products) return [];
    
    const sorted = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return (a.category || '').localeCompare(b.category || '');
        default:
          return 0;
      }
    });
    
    return sorted;
  }, [products, sortBy]);

  const isLoading = productsLoading || categoriesLoading;
  const filteredProducts = sortedProducts;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const goToProductDetails = (productId: string) => {
    navigate(`/produto/${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-petrol-900 mb-4">
            Nossa Coleção de Tecidos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção especial de tecidos premium, cuidadosamente organizados por categoria para facilitar sua escolha.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-cream-50 p-6 rounded-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar tecidos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as categorias</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome</SelectItem>
                <SelectItem value="category">Categoria</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Results count */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2">
              <span className="text-petrol-800 font-semibold">
                {filteredProducts.length} tecidos
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(12)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="bg-gray-300 h-64 rounded-t-2xl"></div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
            <Button onClick={() => window.location.reload()} className="bg-petrol-800 hover:bg-petrol-900">
              Tentar Novamente
            </Button>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 rounded-2xl bg-white hover:bg-cream-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image_url || '/products/placeholder.png'}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-antracite-500 text-white">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-petrol-900 font-bold">
                      {formatPrice(product.price)}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Color Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-800">
                      {product.width || 'Largura não informada'}
                    </Badge>
                  </div>
                  
                  {/* Action Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      onClick={() => goToProductDetails(product.id)}
                      size="sm"
                      className="bg-petrol-800 hover:bg-petrol-900 text-white rounded-full shadow-lg"
                    >
                      <ArrowRight size={16} className="mr-1" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-petrol-900 mb-2 group-hover:text-petrol-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {product.material || 'Material não informado'}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.width}
                    </Badge>
                  </div>
                  <Button 
                    onClick={() => goToProductDetails(product.id)}
                    variant="outline" 
                    className="w-full border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white transition-all duration-300"
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-cream-50 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-petrol-900 mb-2">
                Nenhum tecido encontrado
              </h3>
              <p className="text-gray-600 mb-4">
                Tente ajustar seus filtros ou termo de busca.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('todas');
                }}
                className="bg-petrol-800 hover:bg-petrol-900"
              >
                Limpar Filtros
              </Button>
            </div>
          </div>
        )}
        
        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-petrol-900 text-center mb-8">
            Explore por Categoria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              // Encontrar um produto desta categoria para mostrar como imagem
              const categoryProduct = products.find(p => p.category === category);
              // Contar produtos desta categoria
              const categoryCount = products.filter(p => p.category === category).length;
              
              return (
                <Card 
                  key={category}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="relative">
                    <img 
                      src={categoryProduct?.image_url || '/placeholder-fabric.jpg'} 
                      alt={category}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="font-serif font-bold text-lg">{category}</h3>
                        <p className="text-sm opacity-90">{categoryCount} produtos</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FabricProductsPage;