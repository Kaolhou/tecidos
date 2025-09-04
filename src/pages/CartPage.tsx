import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShippingCalculator from '@/components/ShippingCalculator';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface ShippingOption {
  service: string;
  serviceName: string;
  price: number;
  deadline: number;
}

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [selectedShipping, setSelectedShipping] = React.useState<ShippingOption | null>(null);
  const [isProcessingCheckout, setIsProcessingCheckout] = React.useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de finalizar a compra.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessingCheckout(true);
    
    try {
      const subtotal = getCartTotal();
      const shippingCost = selectedShipping?.price || 0;
      const total = subtotal + shippingCost;

      navigate('/checkout', {
        state: {
          cartItems,
          selectedShipping,
          subtotal,
          shippingCost,
          total
        }
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao processar checkout. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsProcessingCheckout(false);
    }
  };

  const subtotal = getCartTotal();
  const shippingCost = selectedShipping?.price || 0;
  const total = subtotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto text-center py-12 bg-white border-petrol-200">
            <CardContent>
              <ShoppingBag className="mx-auto h-16 w-16 text-petrol-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-petrol-900">Seu carrinho está vazio</h3>
              <p className="text-antracite-600 mb-6">Adicione alguns produtos para começar suas compras</p>
              <Button onClick={() => navigate('/produtos')} className="bg-petrol-600 hover:bg-petrol-700">
                Continuar Comprando
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-petrol-900">Carrinho de Compras</h1>
          <p className="text-antracite-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="bg-white border-petrol-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image_url || '/placeholder.svg'}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-petrol-900">{item.name}</h3>
                      {item.material && (
                        <Badge variant="secondary" className="mt-1">
                          {item.material}
                        </Badge>
                      )}
                      <p className="text-2xl font-bold text-petrol-700 mt-2">
                        {formatPrice(item.price)}/metro
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 min-w-[2rem] text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-petrol-200">
                    <span className="text-sm text-antracite-600">
                      {item.quantity} {item.quantity === 1 ? 'metro' : 'metros'}
                    </span>
                    <span className="text-xl font-bold text-petrol-900">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-petrol-200">
              <CardHeader>
                <CardTitle className="text-petrol-900">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-antracite-700">Subtotal</span>
                  <span className="text-antracite-900">{formatPrice(subtotal)}</span>
                </div>
                
                {/* Shipping Calculator */}
                <div className="space-y-4">
                  <h4 className="font-medium text-petrol-900">Calcular Frete:</h4>
                  <ShippingCalculator 
                    items={cartItems}
                    onShippingSelected={setSelectedShipping}
                    selectedShipping={selectedShipping}
                  />
                </div>

                <div className="flex justify-between">
                  <span className="text-antracite-700">Frete</span>
                  <span className="text-antracite-900">
                    {selectedShipping 
                      ? formatPrice(selectedShipping.price)
                      : shippingCost === 0 ? 'Grátis' : formatPrice(shippingCost)
                    }
                  </span>
                </div>
                {shippingCost === 0 && !selectedShipping && (
                  <p className="text-sm text-green-600">
                    🎉 Frete grátis para compras acima de R$ 200,00
                  </p>
                )}
                {selectedShipping && (
                  <p className="text-sm text-antracite-600">
                    {selectedShipping.serviceName} - Entrega em {selectedShipping.deadline} dia{selectedShipping.deadline > 1 ? 's' : ''} úteis
                  </p>
                )}

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span className="text-antracite-900">Total</span>
                  <span className="text-petrol-900">{formatPrice(total)}</span>
                </div>
                
                <Button 
                  className="w-full bg-petrol-600 hover:bg-petrol-700 text-white"
                  onClick={handleCheckout}
                  disabled={isProcessingCheckout || cartItems.length === 0}
                >
                  {isProcessingCheckout ? "Processando..." : "Finalizar Compra"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-petrol-300 text-petrol-700 hover:bg-petrol-50"
                  onClick={() => navigate('/produtos')}
                >
                  Continuar Comprando
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;