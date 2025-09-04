import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Globe, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutScissorsImage from '@/assets/about-fabric-tools.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Selecionamos apenas os melhores tecidos de fornecedores renomados mundialmente.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe especializada está sempre pronta para ajudar você a encontrar o tecido perfeito.'
    },
    {
      icon: Globe,
      title: 'Sustentabilidade',
      description: 'Trabalhamos com fornecedores que seguem práticas sustentáveis e responsáveis.'
    },
    {
      icon: Heart,
      title: 'Paixão pelo que Fazemos',
      description: 'Cada tecido é escolhido com carinho e atenção aos detalhes que fazem a diferença.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Produtos Únicos' },
    { number: '10k+', label: 'Clientes Satisfeitos' },
    { number: '25+', label: 'Países Atendidos' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-petrol-800 to-petrol-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Há mais de uma década transformando ambientes através da arte dos tecidos premium
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 bg-white">
        {/* About Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-petrol-900 mb-6">
              A Paixão que nos Move
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada em 2009 por uma família apaixonada por tecidos e design, nossa empresa 
                nasceu do desejo de trazer ao Brasil os mais belos e sofisticados tecidos do mundo.
              </p>
              <p>
                Começamos como uma pequena loja física, mas logo percebemos que nossa missão 
                era maior: democratizar o acesso a tecidos de alta qualidade para designers, 
                arquitetos e pessoas que, como nós, acreditam que cada detalhe importa.
              </p>
              <p>
                Hoje, somos referência no mercado brasileiro de tecidos premium, sempre 
                mantendo nossos valores de qualidade, atendimento personalizado e paixão 
                pelo que fazemos.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutScissorsImage}
              alt="Ferramentas tradicionais de costura e tecidos"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-antracite-500 text-white p-6 rounded-2xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm font-medium">Anos de Tradição</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-petrol-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-petrol-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa empresa e nos conectam com nossos clientes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-petrol-100 p-3 rounded-full">
                      <value.icon className="h-6 w-6 text-petrol-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-petrol-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission */}
        <Card className="bg-gradient-to-r from-petrol-50 to-antracite-50 border-none">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-petrol-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              "Transformar ambientes e realizar sonhos através de tecidos excepcionais, 
              oferecendo qualidade premium, atendimento personalizado e uma experiência 
              única que supera as expectativas de nossos clientes."
            </p>
            <Badge variant="secondary" className="bg-antracite-100 text-antracite-800 px-4 py-2">
              Qualidade • Tradição • Inovação
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
