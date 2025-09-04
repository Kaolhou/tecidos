
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { getProductImages } from '@/utils/productImages';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string | null;
  material: string | null;
  product_images?: Array<{
    image_url: string;
    alt_text: string | null;
    position: number;
  }>;
}

interface RelatedProductsProps {
  currentProductId: string;
  currentProductCategory?: string | null;
  currentProductName: string;
}

const RelatedProducts = ({ 
  currentProductId, 
  currentProductCategory, 
  currentProductName 
}: RelatedProductsProps) => {
  const navigate = useNavigate();

  const { data: relatedProducts, isLoading } = useQuery({
    queryKey: ['related-products', currentProductId, currentProductCategory],
    queryFn: async () => {
      console.log('Buscando produtos relacionados para:', currentProductName);
      
      // Primeiro tenta buscar por categoria
      if (currentProductCategory) {
        const { data: categoryProducts } = await supabase
          .from('products')
          .select(`
            id, name, price, category, material,
            product_images!left (image_url, alt_text, position)
          `)
          .neq('id', currentProductId)
          .eq('category', currentProductCategory)
          .limit(6);
        
        if (categoryProducts && categoryProducts.length > 0) {
          return categoryProducts;
        }
      }

      // Se não há categoria ou poucos produtos na categoria, busca por similaridade de nome
      const normalizedCurrentName = currentProductName.toLowerCase();
      let keywords: string[] = [];
      
      if (normalizedCurrentName.includes('malha')) keywords.push('malha');
      if (normalizedCurrentName.includes('alfaiataria')) keywords.push('alfaiataria');
      if (normalizedCurrentName.includes('oxford')) keywords.push('oxford');
      if (normalizedCurrentName.includes('crepe')) keywords.push('crepe');
      if (normalizedCurrentName.includes('areia')) keywords.push('areia');
      if (normalizedCurrentName.includes('mostarda')) keywords.push('mostarda');

      if (keywords.length > 0) {
        const { data: similarProducts } = await supabase
          .from('products')
          .select(`
            id, name, price, category, material,
            product_images!left (image_url, alt_text, position)
          `)
          .neq('id', currentProductId)
          .or(keywords.map(keyword => `name.ilike.%${keyword}%`).join(','))
          .limit(6);
        
        if (similarProducts && similarProducts.length > 0) {
          return similarProducts;
        }
      }

      // Fallback: produtos aleatórios
      const { data: randomProducts } = await supabase
        .from('products')
        .select(`
          id, name, price, category, material,
          product_images!left (image_url, alt_text, position)
        `)
        .neq('id', currentProductId)
        .limit(6);

      return randomProducts || [];
    },
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-petrol-900">
          Produtos Relacionados
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <CardContent className="p-4">
                <div className="bg-gray-300 h-32 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-petrol-900">
        Produtos Relacionados
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedProducts.map((product) => {
          // Use database images first, then fallback to static mapping
          const dbImage = product.product_images?.[0];
          const staticImages = getProductImages(product.name);
          const mainImage = dbImage ? {
            url: dbImage.image_url,
            alt: dbImage.alt_text || product.name
          } : (staticImages.length > 0 ? staticImages[0] : null);

          return (
            <Card 
              key={product.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/produto/${product.id}`)}
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={mainImage?.url || '/placeholder.svg'}
                    alt={mainImage?.alt || product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-petrol-900 line-clamp-2 group-hover:text-petrol-700 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-lg font-bold text-petrol-800">
                    {formatPrice(product.price)}
                  </p>
                  <div className="flex gap-2">
                    {product.category && (
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    )}
                    {product.material && (
                      <Badge variant="outline" className="text-xs">
                        {product.material}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="text-center">
        <Button 
          variant="outline" 
          onClick={() => navigate('/produtos')}
          className="border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white"
        >
          Ver Todos os Produtos
        </Button>
      </div>
    </div>
  );
};

export default RelatedProducts;
