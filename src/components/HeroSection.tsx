
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-weaving-loom.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-gradient absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Cada tecido tem uma{" "}
            <span className="antracite-accent block">história</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up font-light">
            Descubra o toque que transforma ambientes em experiências únicas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              onClick={() => navigate('/produtos')}
              className="bg-antracite-500 hover:bg-antracite-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
