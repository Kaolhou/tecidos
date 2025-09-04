import { useProducts } from '@/hooks/useProducts';

const TestProductsPage = () => {
  console.log('🧪 TestProductsPage renderizando...');
  
  const { products, loading, error } = useProducts();
  
  console.log('🧪 Resultados do hook:', {
    products: products?.length || 0,
    loading,
    error
  });

  if (loading) {
    return <div>🔄 Carregando produtos...</div>;
  }

  if (error) {
    return <div>❌ Erro: {error}</div>;
  }

  return (
    <div>
      <h1>🧪 Teste de Produtos</h1>
      <p>Total de produtos: {products.length}</p>
      <ul>
        {products.slice(0, 5).map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - R$ {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestProductsPage;