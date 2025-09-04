
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, ShoppingCart, CreditCard, Minus, Plus } from "lucide-react";
import FabricCalculator from "@/components/FabricCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("azul");
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: "Linho Premium Francês",
    description: "Tecido de linho premium importado diretamente da França, conhecido por sua textura natural e elegante.",
    price: 89.90,
    colors: [
      { name: "Azul Naval", value: "azul", hex: "#0f172a" },
      { name: "Bege Natural", value: "bege", hex: "#f5f5dc" },
      { name: "Verde Oliva", value: "verde", hex: "#6b7280" }
    ],
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: {
      material: "100% Linho Francês",
      width: "1,40m",
      weight: "280g/m²",
      origin: "França"
    },
    care: [
      "Lavar à mão ou máquina em água fria",
      "Não usar alvejante",
      "Passar a ferro em temperatura média",
      "Não torcer ou esfregar vigorosamente"
    ],
    reviews: [
      {
        id: 1,
        name: "Maria Silva",
        rating: 5,
        comment: "Tecido de qualidade excepcional! Exatamente como esperava.",
        date: "2024-01-15"
      },
      {
        id: 2,
        name: "João Santos",
        rating: 4,
        comment: "Muito bom material, chegou rapidamente e bem embalado.",
        date: "2024-01-10"
      }
    ]
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-primary text-primary" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="text-2xl md:text-3xl font-bold text-primary">
              {formatCurrency(product.price)}/metro
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Cor</Label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.value ? 'border-primary' : 'border-gray-300 hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Quantidade (metros)</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 0.5))}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Minus size={16} />
                </Button>
                <Input
                  type="number"
                  step="0.5"
                  min="0.5"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                  className="w-20 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 0.5)}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <ShoppingCart size={18} className="mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  disabled
                >
                  <Eye size={18} />
                </Button>
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <CreditCard size={18} className="mr-2" />
                Comprar Agora
              </Button>
            </div>

            {/* Total Price */}
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  {formatCurrency(product.price * quantity)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fabric Calculator */}
        <div className="mb-12">
          <FabricCalculator pricePerMeter={product.price} />
        </div>

        {/* Product Information Tabs */}
        <Tabs defaultValue="detalhes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted">
            <TabsTrigger value="detalhes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">Detalhes</TabsTrigger>
            <TabsTrigger value="especificacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">Especificações</TabsTrigger>
            <TabsTrigger value="cuidados" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">Cuidados</TabsTrigger>
            <TabsTrigger value="avaliacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">Avaliações</TabsTrigger>
          </TabsList>

          <TabsContent value="detalhes" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-4">
                  Sobre o Produto
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Este linho premium francês é cuidadosamente selecionado das melhores 
                    tecelagens da França, oferecendo uma experiência tátil única e durabilidade 
                    excepcional.
                  </p>
                  <p>
                    Ideal para projetos de decoração sofisticados, este tecido combina 
                    elegância natural com versatilidade, sendo perfeito para cortinas, 
                    almofadas, roupas de cama e peças de vestuário.
                  </p>
                  <p>
                    A textura natural do linho proporciona um toque suave e fresco, 
                    mantendo suas propriedades mesmo após múltiplas lavagens.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="especificacoes" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-4">
                  Especificações Técnicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700 capitalize">
                        {key === 'material' ? 'Material' : 
                         key === 'width' ? 'Largura' : 
                         key === 'weight' ? 'Gramatura' : 'Origem'}:
                      </span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cuidados" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-4">
                  Instruções de Cuidado
                </h3>
                <ul className="space-y-3">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="avaliacoes" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground">
                    Avaliações dos Clientes
                  </h3>
                  <Badge variant="secondary">
                    {product.reviews.length} avaliações
                  </Badge>
                </div>
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
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
      </div>


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
