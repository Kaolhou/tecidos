
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationMap from '@/components/LocationMap';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openWhatsApp = (message: string) => {
    const phoneNumber = "5513996479114";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve. Obrigado!',
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua Itororó, 41', 'Centro Santos', 'Cep 11010-071']
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(13) 996479114', 'WhatsApp disponível', 'Atendimento rápido']
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@lojatecidos.com.br', 'vendas@lojatecidos.com.br', 'suporte@lojatecidos.com.br']
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda a Sexta: 9h às 18h', 'Sábado: 9h às 14h', 'Domingo: Fechado']
    }
  ];

  const faqs = [
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo varia de 5 a 10 dias úteis dependendo da sua localização. Oferecemos frete grátis para compras acima de R$ 200,00.'
    },
    {
      question: 'Vocês fazem atendimento personalizado?',
      answer: 'Sim! Nossa equipe de consultores está disponível para ajudar você a escolher os tecidos ideais para seu projeto.'
    },
    {
      question: 'É possível solicitar amostras?',
      answer: 'Claro! Enviamos amostras dos tecidos para que você possa sentir a qualidade antes de comprar.'
    },
    {
      question: 'Vocês atendem projetos corporativos?',
      answer: 'Sim, trabalhamos com arquitetos, designers e empresas. Oferecemos condições especiais para grandes volumes.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-petrol-800 to-petrol-900 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar os tecidos perfeitos para seus projetos
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-petrol-900">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" name="phone" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" name="subject" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-petrol-100 p-3 rounded-full">
                      <info.icon className="h-5 w-5 text-petrol-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-petrol-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-petrol-900 mb-3 flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Fale conosco agora mesmo e tire suas dúvidas instantaneamente.
                  </p>
                  <Button 
                    onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre os tecidos da Letícia Tecidos.")}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Conversar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-cream-50 border-petrol-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-petrol-900 mb-3 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-petrol-800" />
                    Agendar Visita
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Visite nosso showroom para consultoria especializada.
                  </p>
                  <Button 
                    onClick={() => openWhatsApp("Olá! Gostaria de agendar uma visita ao showroom para consultoria personalizada.")}
                    variant="outline"
                    className="w-full border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white"
                    size="sm"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar pelo WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-petrol-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-petrol-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Map */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-petrol-900">
              Nossa Localização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LocationMap />
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
