import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useProduct, useProductsByCategory } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { toast } from '@/hooks/use-toast';

// Mock reviews para cada produto
const generateMockReviews = (productName: string) => [
  {
    id: 1,
    name: 'Maria Silva',
    rating: 5,
    comment: `Excelente qualidade! O ${productName.toLowerCase()} superou minhas expectativas. A textura é perfeita para o projeto que eu tinha em mente.`,
    date: '2024-12-15',
    verified: true
  },
  {
    id: 2,
    name: 'Ana Costa',
    rating: 4,
    comment: 'Tecido bonito e de boa qualidade. A cor ficou exatamente como esperava. Recomendo!',
    date: '2024-12-10',
    verified: true
  },
  {
    id: 3,
    name: 'João Santos',
    rating: 5,
    comment: 'Perfeito para confecção. O caimento é excelente e a entrega foi rápida.',
    date: '2024-12-05',
    verified: false
  }
];

const FabricProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { product, loading, error } = useProduct(id || '');
  const { products: allRelatedProducts, loading: relatedLoading } = useProductsByCategory(product?.category);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-petrol-800 mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando produto...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Erro ao carregar produto</h2>
            <p className="text-gray-600 mb-4">{error}</p>
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

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Produto não encontrado</h2>
            <p className="text-gray-600 mb-4">O tecido que você está procurando não existe.</p>
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

  const reviews = generateMockReviews(product.name);
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const relatedProductsFiltered = allRelatedProducts?.filter(p => p.id !== product.id).slice(0, 4) || [];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleShare = async () => {
    if (navigator.share) {
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
      // Copiar para área de transferência
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado!",
          description: "O link do produto foi copiado para a área de transferência.",
        });
      } catch (error) {
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar o link.",
          variant: "destructive"
        });
      }
    }
  };

  const handleWhatsAppQuote = () => {
    const phoneNumber = "5513996479114";
    const message = `Olá! Gostaria de solicitar um orçamento para o produto:\n\n*${product.name}*\nQuantidade: ${quantity} metro(s)\nPreço unitário: ${formatPrice(product.price)}/metro\nTotal: ${formatPrice(product.price * quantity)}\n\nPoderia me enviar mais informações?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = () => {
    if (!product) return;

    // Garantir que sempre temos uma imagem válida
    let imageUrl = product.image_url;

    // Se não houver image_url, tentar pegar da primeira imagem
    if (!imageUrl && product.images && product.images.length > 0) {
      const sortedImages = [...product.images].sort((a, b) => a.position - b.position);
      imageUrl = sortedImages[0].image_url;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: imageUrl,
      material: product.material
    }, quantity);
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    // Garantir que sempre temos uma imagem válida
    let imageUrl = product.image_url;

    // Se não houver image_url, tentar pegar da primeira imagem
    if (!imageUrl && product.images && product.images.length > 0) {
      const sortedImages = [...product.images].sort((a, b) => a.position - b.position);
      imageUrl = sortedImages[0].image_url;
    }

    // Se já está na wishlist, remove; senão, adiciona
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: imageUrl,
        material: product.material
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/produtos')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Tecidos
          </Button>
          <span className="text-gray-400">/</span>
          <Button
            variant="ghost"
            onClick={() => navigate(`/produtos?categoria=${product.category}`)}
            className="text-petrol-600 hover:text-petrol-800"
          >
            {product.category}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <img
                src={product.image_url || '/products/placeholder.png'}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-petrol-900">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(Math.round(averageRating))}
                  <span className="text-gray-600 ml-2">
                    ({reviews.length} avaliações)
                  </span>
                </div>
              </div>
              
              <p className="text-4xl font-bold text-petrol-800 mb-6">
                {formatPrice(product.price)}/metro
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-petrol-800 text-white">
                  {product.category}
                </Badge>
                {product.width && (
                  <Badge variant="secondary">
                    {product.width}
                  </Badge>
                )}
                {product.material && (
                  <Badge variant="outline">
                    {product.material}
                  </Badge>
                )}
                <Badge variant="outline">
                  Largura: {product.width}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-petrol-900">Descrição</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Quantidade (metros)</label>
                <div className="flex items-center gap-3 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(0.5, quantity - 0.5))}
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 border rounded-md min-w-[80px] text-center">
                    {quantity}m
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 0.5)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-petrol-800 hover:bg-petrol-900 text-white"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleToggleWishlist}
                  className={`border-petrol-600 hover:bg-petrol-600 hover:text-white ${
                    isInWishlist(product.id) ? 'bg-petrol-600 text-white' : 'text-petrol-700'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleShare}
                  className="border-petrol-600 text-petrol-700 hover:bg-petrol-600 hover:text-white"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppQuote}
                className="w-full border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white"
              >
                Entrar em Contato para Orçamento
              </Button>
            </div>

            {/* Total Price */}
            <div className="bg-cream-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total:</span>
                <span className="text-2xl font-bold text-petrol-800">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-cream-50 p-4 rounded-lg border border-antracite-200">
              <h4 className="font-semibold mb-2 text-petrol-900">Informações de Entrega</h4>
              <p className="text-sm text-gray-600">
                Entrega em todo o Brasil. Prazo de 5-10 dias úteis.
                Frete grátis para compras acima de R$ 200,00.
              </p>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <Tabs defaultValue="especificacoes" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-cream-50">
            <TabsTrigger value="especificacoes">Especificações</TabsTrigger>
            <TabsTrigger value="cuidados">Cuidados</TabsTrigger>
            <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
          </TabsList>

          <TabsContent value="especificacoes" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-petrol-900 mb-4">
                  Especificações Técnicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.material && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Material:</span>
                      <span className="text-gray-900">{product.material}</span>
                    </div>
                  )}
                  {product.width && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Largura:</span>
                      <span className="text-gray-900">{product.width}</span>
                    </div>
                  )}
                  {product.category && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Categoria:</span>
                      <span className="text-gray-900">{product.category}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Preço por metro:</span>
                    <span className="text-gray-900">{formatPrice(product.price)}</span>
                  </div>
                  {product.stock_quantity !== null && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Estoque:</span>
                      <span className="text-gray-900">{product.stock_quantity} metros</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Descrição</h4>
                  <p className="text-gray-600">
                    {product.description || 'Tecido de alta qualidade, perfeito para diversos projetos de costura e decoração.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cuidados" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-petrol-900 mb-4">
                  Instruções de Cuidado
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-petrol-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Lavar em água fria ou morna</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-petrol-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Não usar alvejante</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-petrol-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Passar a ferro em temperatura adequada para o material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-petrol-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Evitar exposição prolongada ao sol direto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="avaliacoes" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif font-semibold text-petrol-900">
                    Avaliações dos Clientes
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {renderStars(Math.round(averageRating))}
                    </div>
                    <span className="text-gray-600">
                      {averageRating.toFixed(1)} ({reviews.length} avaliações)
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Compra Verificada
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProductsFiltered.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-petrol-900 text-center mb-8">
              Produtos Relacionados - {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProductsFiltered.map((relatedProduct) => (
                <Card 
                  key={relatedProduct.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate(`/produto/${relatedProduct.id}`)}
                >
                  <img 
                    src={relatedProduct.image_url || '/products/placeholder.png'} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-petrol-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-petrol-700 font-bold">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FabricProductDetailsPage;