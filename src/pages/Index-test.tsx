import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcaseMinimal from "@/components/ProductShowcase-minimal";

const IndexTest = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductShowcaseMinimal />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Tecido Luz Brasil - Teste com ProductShowcase
        </h1>
        <p className="text-lg text-center">
          Se você está vendo esta página, o ProductShowcase está funcionando!
        </p>
      </div>
    </div>
  );
};

export default IndexTest;