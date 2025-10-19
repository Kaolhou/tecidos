import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string | null;
  position: number;
  created_at: string | null;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string | null;
  material: string | null;
  width: string | null;
  stock_quantity: number | null;
  created_at: string | null;
  images?: ProductImage[];
}

export interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export interface UseProductsOptions {
  category?: string;
  limit?: number;
  search?: string;
}

export const useProducts = (options: UseProductsOptions = {}): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('products')
        .select(`
          *,
          images:product_images(
            id,
            product_id,
            image_url,
            alt_text,
            position,
            created_at
          )
        `)
        .order('name', { ascending: true });

      // Aplicar filtros
      if (options.category) {
        query = query.ilike('category', `%${options.category}%`);
      }

      if (options.search) {
        query = query.or(`name.ilike.%${options.search}%,description.ilike.%${options.search}%,category.ilike.%${options.search}%`);
      }

      if (options.limit) {
        query = query.limit(options.limit);
      }

      const { data, error: supabaseError } = await query;

      if (supabaseError) {
        console.error('Erro ao buscar produtos:', supabaseError);
        setError(`Erro Supabase: ${supabaseError.message}`);
        return;
      }

      // Processar produtos para adicionar image_url da primeira imagem se não existir
      const processedProducts = (data || []).map(product => {
        if (!product.image_url && product.images && product.images.length > 0) {
          // Ordenar imagens por position
          const sortedImages = [...product.images].sort((a, b) => a.position - b.position);
          return {
            ...product,
            image_url: sortedImages[0].image_url
          };
        }
        return product;
      });

      setProducts(processedProducts);
    } catch (err) {
      console.error('Erro inesperado:', err);
      setError('Erro inesperado ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [options.category, options.search, options.limit]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('products')
        .select(`
          *,
          images:product_images(
            id,
            product_id,
            image_url,
            alt_text,
            position,
            created_at
          )
        `)
        .eq('id', id)
        .single();

      if (supabaseError) {
        console.error('Erro ao buscar produto:', supabaseError);
        setError(supabaseError.message);
        return;
      }

      // Processar produto para adicionar image_url da primeira imagem se não existir
      if (data && !data.image_url && data.images && data.images.length > 0) {
        const sortedImages = [...data.images].sort((a, b) => a.position - b.position);
        data.image_url = sortedImages[0].image_url;
      }

      setProduct(data);
    } catch (err) {
      console.error('Erro inesperado:', err);
      setError('Erro inesperado ao carregar produto');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  };
};

export const useProductsByCategory = (category?: string) => {
  return useProducts({ category });
};

export const useProductCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('products')
        .select('category')
        .not('category', 'is', null);

      if (supabaseError) {
        console.error('Erro ao buscar categorias:', supabaseError);
        setError(supabaseError.message);
        return;
      }

      // Extrair categorias únicas
      const uniqueCategories = [...new Set(data.map(item => item.category).filter(Boolean))] as string[];
      setCategories(uniqueCategories.sort());
    } catch (err) {
      console.error('Erro inesperado:', err);
      setError('Erro inesperado ao carregar categorias');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
};

// Hook para buscar produtos em destaque (para showcase)
export const useFeaturedProducts = (limit: number = 8) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Buscar produtos com estoque > 0, ordenados alfabeticamente
      const { data, error: supabaseError } = await supabase
        .from('products')
        .select(`
          *,
          images:product_images(
            id,
            product_id,
            image_url,
            alt_text,
            position,
            created_at
          )
        `)
        .gt('stock_quantity', 0)
        .order('name', { ascending: true })
        .limit(limit);

      if (supabaseError) {
        console.error('Erro ao buscar produtos em destaque:', supabaseError);
        setError(supabaseError.message);
        return;
      }

      // Processar produtos para adicionar image_url da primeira imagem se não existir
      const processedProducts = (data || []).map(product => {
        if (!product.image_url && product.images && product.images.length > 0) {
          const sortedImages = [...product.images].sort((a, b) => a.position - b.position);
          return {
            ...product,
            image_url: sortedImages[0].image_url
          };
        }
        return product;
      });

      setFeaturedProducts(processedProducts);
    } catch (err) {
      console.error('Erro inesperado:', err);
      setError('Erro inesperado ao carregar produtos em destaque');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, [limit]);

  return {
    featuredProducts,
    loading,
    error,
    refetch: fetchFeaturedProducts,
  };
};