import { fabricProducts, getAllCategories } from "@/data/fabricProducts";

const ProductShowcaseMinimal = () => {
  // Testar se conseguimos importar os dados
  console.log('fabricProducts:', fabricProducts);
  console.log('getAllCategories:', getAllCategories());
  
  return (
    <section id="produtos" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-petrol-900 mb-4">
            Nossas Criações Premium
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teste: Importação de dados - {fabricProducts.length} produtos encontrados
          </p>
        </div>
        <div className="text-center">
          <p className="text-xl text-petrol-800">
            Categorias: {getAllCategories().join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseMinimal;