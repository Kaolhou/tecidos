
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye } from "lucide-react";
import { useFeaturedProducts } from "@/hooks/useProducts";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const { featuredProducts, loading: isLoading, error } = useFeaturedProducts(16);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };


  const goToProductDetails = (productId: string) => {
    console.log('Navegando para produto:', productId);
    navigate(`/produto/${productId}`);
  };

  if (isLoading) {
    return (
      <section id="produtos" className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-petrol-900 mb-4">
              Nossas Criações Premium
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada tecido é cuidadosamente selecionado para trazer elegância e sofisticação aos seus projetos mais especiais
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto">
            {[...Array(16)].map((_, index) => (
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
        </div>
      </section>
    );
  }

  return (
    <section id="produtos" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-petrol-900 mb-4">
            Nossas Criações Premium
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada tecido é cuidadosamente selecionado para trazer elegância e sofisticação aos seus projetos mais especiais
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto">
          {featuredProducts && featuredProducts.length > 0 ? (
            featuredProducts.map((product, index) => {
              
              return (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 rounded-2xl bg-white hover:bg-cream-50" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image_url || '/placeholder.svg'}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== '/placeholder.svg') {
                          target.src = '/placeholder.svg';
                        }
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-antracite-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-petrol-900 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => goToProductDetails(product.id)}
                          size="sm"
                          className="bg-white/90 text-petrol-800 hover:bg-white rounded-full shadow-lg flex-1"
                        >
                          <Eye size={16} className="mr-1" />
                          Ver Detalhes
                        </Button>
                        <Button
                          onClick={() => goToProductDetails(product.id)}
                          size="sm"
                          className="bg-petrol-800 hover:bg-petrol-900 text-white rounded-full shadow-lg flex-1"
                        >
                          <ArrowRight size={16} className="mr-1" />
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-petrol-900 mb-2 group-hover:text-petrol-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => goToProductDetails(product.id)}
                        variant="outline" 
                        className="flex-1 border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white transition-all duration-300"
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-600 mb-4">Erro ao carregar produtos: {error}</p>
              <Button 
                onClick={() => navigate('/produtos')}
                className="bg-petrol-800 hover:bg-petrol-900"
              >
                Ver Todos os Produtos
              </Button>
            </div>
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 mb-4">Nenhum produto encontrado.</p>
              <Button 
                onClick={() => navigate('/produtos')}
                className="bg-petrol-800 hover:bg-petrol-900"
              >
                Ver Todos os Produtos
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <p className="text-gray-600 max-w-md mx-auto">
            Explore nossa coleção completa com mais de 200 tecidos premium organizados por categoria
          </p>
          <Button
            onClick={() => navigate('/produtos')}
            size="lg"
            className="bg-petrol-800 hover:bg-petrol-900 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;
