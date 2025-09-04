
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = (message: string) => {
    const phoneNumber = "5513996479114";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-petrol-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar o tecido perfeito para seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 rounded-2xl animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-petrol-900 mb-6">
                Fale Conosco
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Seu nome completo"
                      className="rounded-lg border-gray-200 focus:border-petrol-500 focus:ring-petrol-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input 
                     type="tel" 
                      placeholder="(13) 996479114"
                      className="rounded-lg border-gray-200 focus:border-petrol-500 focus:ring-petrol-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="rounded-lg border-gray-200 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={4}
                    className="rounded-lg border-gray-200 focus:border-petrol-500 focus:ring-petrol-500"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-petrol-800 hover:bg-petrol-900 text-white py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-petrol-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Endereço",
                    content: "Rua Itororó, 41\nCentro Santos\nCep 11010-071"
                  },
                  {
                    title: "Telefone",
                    content: "(13) 996479114\nWhatsApp disponível"
                  },
                  {
                    title: "E-mail",
                    content: "contato@leticiatecidos.com.br\nvendas@leticiatecidos.com.br"
                  },
                  {
                    title: "Horário de Funcionamento",
                    content: "Segunda a Sexta: 9h às 18h\nSábado: 9h às 14h\nDomingo: Fechado"
                  }
                ].map((info, index) => (
                  <div key={info.title} className="border-l-4 border-antracite-500 pl-4">
                    <h4 className="font-semibold text-petrol-900 mb-2">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Contact Button */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <h4 className="font-serif font-semibold text-petrol-900 mb-3 flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                Contato Direto
              </h4>
              <p className="text-gray-600 mb-4">
                Fale conosco agora mesmo pelo WhatsApp e tire suas dúvidas instantaneamente.
              </p>
              <Button 
                onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre os tecidos da Letícia Tecidos.")}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full px-6 mb-3"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </Button>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl">
              <h4 className="font-serif font-semibold text-petrol-900 mb-3 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-petrol-800" />
                Atendimento Personalizado
              </h4>
              <p className="text-gray-600 mb-4">
                Oferecemos consultoria especializada para arquitetos e designers. 
                Agende uma visita ao nosso showroom.
              </p>
              <Button 
                onClick={() => openWhatsApp("Olá! Gostaria de agendar uma visita ao showroom para consultoria personalizada.")}
                variant="outline"
                className="w-full border-petrol-800 text-petrol-800 hover:bg-petrol-800 hover:text-white rounded-full px-6"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
