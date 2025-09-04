
import aboutImage from "@/assets/about-fabric-tools.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-petrol-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-petrol-900 mb-4">
              Nossa História
            </h2>
            <p className="text-lg text-gray-600">
              Mais de duas décadas dedicadas à excelência em tecidos
            </p>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold text-petrol-900">
                A Paixão que Nos Move
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nascida da paixão pela arte têxtil, a Leticia Tecidos iniciou sua jornada com um sonho simples: 
                trazer tecidos excepcionais que transformam espaços em verdadeiras obras de arte.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada tecido em nossa coleção é cuidadosamente selecionado, priorizando a qualidade, 
                a originalidade e a sustentabilidade. Trabalhamos com fornecedores que compartilham 
                nossos valores de excelência e responsabilidade social.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje, somos referência em tecidos premium, atendendo arquitetos, designers e pessoas 
                que valorizam a qualidade excepcional em seus projetos.
              </p>
            </div>

            {/* Image */}
            <div className="animate-slide-up">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Ferramentas tradicionais de costura e tecidos"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-900/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade",
                description: "Selecionamos apenas os melhores tecidos do mercado mundial"
              },
              {
                title: "Exclusividade",
                description: "Peças únicas e coleções limitadas para projetos especiais"
              },
              {
                title: "Sustentabilidade",
                description: "Compromisso com práticas responsáveis e materiais eco-friendly"
              }
            ].map((value, index) => (
              <div 
                key={value.title} 
                className="text-center p-6 rounded-2xl bg-white shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-serif font-semibold text-petrol-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
