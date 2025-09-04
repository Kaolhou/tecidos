import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart, Eye, Share2, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductSpecifications from '@/components/ProductSpecifications';
import RelatedProducts from '@/components/RelatedProducts';
import ProductChatBot from '@/components/ProductChatBot';
import ProductReviews from '@/components/ProductReviews';
import { getProductImages } from '@/utils/productImages';
import { generateProductDescription, generateSEOData } from '@/utils/productDescriptions';
import { useProductContext } from '@/hooks/useProductContext';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useState, useEffect } from 'react';

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

const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) throw new Error('Product ID is required');
      
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
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      return data as Product;
    },
    enabled: !!id,
  });

  // Generate enhanced product information
  const productInfo = product ? generateProductDescription({
    name: product.name,
    category: product.category,
    material: product.material,
    width: product.width
  }) : null;

  const seoData = product ? generateSEOData({
    name: product.name,
    category: product.category,
    material: product.material,
    width: product.width
  }) : null;

  // Product context for chatbot
  const { getProductContext, getSuggestedQuestions } = useProductContext(
    product && productInfo ? {
      productName: product.name,
      productCategory: product.category,
      productPrice: product.price,
      productFeatures: productInfo.features,
      productApplications: productInfo.applications
    } : undefined
  );

  // Update document title and meta tags
  useEffect(() => {
    if (product && seoData) {
      document.title = seoData.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = seoData.description;
        document.head.appendChild(newMeta);
      }
    }
  }, [product, seoData]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleShare = async () => {
    if (navigator.share && product) {
      try {
        await navigator.share({
          title: product.name,
          text: `Confira este tecido premium: ${product.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // Here you could show a toast notification
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-300 aspect-square rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Produto não encontrado</h2>
            <p className="text-gray-600 mb-4">O produto que você está procurando não existe ou foi removido.</p>
            <Button onClick={() => navigate('/produtos')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Produtos
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get product images from database or fallback to static mapping
  const dbImages = product.product_images
    ?.sort((a, b) => a.position - b.position)
    .map(img => ({
      url: img.image_url,
      alt: img.alt_text || product.name,
      type: 'rolo' as const
    })) || [];
  
  const staticImages = getProductImages(product.name);
  const productImages = dbImages.length > 0 ? dbImages : staticImages;
  const mainImage = productImages.length > 0 ? productImages[0] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8 bg-white">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/produtos')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Produtos
          </Button>
          {product.category && (
            <>
              <span className="text-gray-400">/</span>
              <Button
                variant="ghost"
                onClick={() => navigate(`/produtos?categoria=${product.category}`)}
                className="text-primary hover:text-primary/80"
              >
                {product.category}
              </Button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image Gallery */}
          <div className="order-2 lg:order-1">
            <ProductImageGallery 
              productName={product.name}
              images={productImages}
            />
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-petrol-900">{product.name}</h1>
              <p className="text-3xl lg:text-4xl font-bold text-petrol-800 mb-4">
                {formatPrice(product.price)}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {product.category && (
                  <Badge variant="default" className="text-sm bg-petrol-800">
                    {product.category}
                  </Badge>
                )}
                {product.material && (
                  <Badge variant="secondary" className="text-sm">
                    Material: {product.material}
                  </Badge>
                )}
                {product.width && (
                  <Badge variant="outline" className="text-sm">
                    Largura: {product.width}
                  </Badge>
                )}
              </div>
            </div>

            {/* Enhanced Description */}
            {productInfo && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-petrol-900">Descrição</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description || productInfo.description}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 bg-petrol-800 hover:bg-petrol-900 text-white"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image_url: mainImage?.url || null,
                    material: product.material
                  })}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-petrol-600 text-petrol-700 hover:bg-petrol-600 hover:text-white"
                  disabled
                >
                  <Eye className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Ver Galeria</span>
                  <span className="sm:hidden">Galeria</span>
                </Button>
                <Button
                  onClick={() => {
                    if (isInWishlist(product.id)) {
                      removeFromWishlist(product.id);
                    } else {
                      addToWishlist({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image_url: mainImage?.url || null,
                        material: product.material
                      });
                    }
                  }}
                  size="lg"
                  variant="outline"
                  className="border-petrol-600 text-petrol-700 hover:bg-petrol-600 hover:text-white"
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  onClick={handleShare}
                  size="lg"
                  variant="outline"
                  className="border-petrol-600 text-petrol-700 hover:bg-petrol-600 hover:text-white"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="outline" size="lg" className="w-full border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white">
                Entrar em Contato
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-cream-50 p-4 rounded-lg border border-antracite-200">
              <h4 className="font-semibold mb-2 text-petrol-900">Informações de Entrega</h4>
              <p className="text-sm text-muted-foreground">
                Entrega em todo o Brasil. Prazo de 5-10 dias úteis.
                Frete grátis para compras acima de R$ 200,00.
              </p>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        {productInfo && (
          <div className="mb-12">
            <ProductSpecifications
              specifications={productInfo.specifications}
              features={productInfo.features}
              applications={productInfo.applications}
              care={productInfo.care}
            />
          </div>
        )}

        {/* Product Reviews */}
        <div className="mb-12">
          <ProductReviews productId={product.id} />
        </div>

        {/* Related Products */}
        <RelatedProducts
          currentProductId={product.id}
          currentProductCategory={product.category}
          currentProductName={product.name}
        />
      </div>


      {/* Contextual ChatBot */}
      <ProductChatBot
        productName={product.name}
        productContext={getProductContext()}
        suggestedQuestions={getSuggestedQuestions()}
      />

      <Footer />
    </div>
  );
};

export default SingleProductPage;
