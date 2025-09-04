import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

export interface ProductReview {
  id: string;
  rating: number;
  comment: string | null;
  created_at: string;
  user_name: string | null;
}

export interface ReviewStats {
  average: number;
  total: number;
  distribution: Record<number, number>;
}

export const useProductReviews = (productId?: string) => {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [stats, setStats] = useState<ReviewStats>({ average: 0, total: 0, distribution: {} });
  const [userReview, setUserReview] = useState<ProductReview | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (productId) {
      fetchReviews();
      if (user) {
        fetchUserReview();
      }
    }
  }, [productId, user]);

  const fetchReviews = async () => {
    if (!productId) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('product_reviews')
        .select(`
          id,
          rating,
          comment,
          created_at,
          profiles:user_id (
            name
          )
        `)
        .eq('product_id', productId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const reviewsData: ProductReview[] = data?.map(review => ({
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        created_at: review.created_at,
        user_name: (review.profiles as any)?.name || 'Usuário anônimo'
      })) || [];

      setReviews(reviewsData);

      // Calculate stats
      if (reviewsData.length > 0) {
        const total = reviewsData.length;
        const sum = reviewsData.reduce((acc, review) => acc + review.rating, 0);
        const average = sum / total;
        
        const distribution = reviewsData.reduce((acc, review) => {
          acc[review.rating] = (acc[review.rating] || 0) + 1;
          return acc;
        }, {} as Record<number, number>);

        setStats({ average, total, distribution });
      } else {
        setStats({ average: 0, total: 0, distribution: {} });
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserReview = async () => {
    if (!productId || !user) return;

    try {
      const { data, error } = await supabase
        .from('product_reviews')
        .select('*')
        .eq('product_id', productId)
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setUserReview({
          id: data.id,
          rating: data.rating,
          comment: data.comment,
          created_at: data.created_at,
          user_name: null
        });
      }
    } catch (error) {
      console.error('Error fetching user review:', error);
    }
  };

  const submitReview = async (rating: number, comment?: string) => {
    if (!productId || !user) {
      toast({
        title: "Login necessário",
        description: "Faça login para avaliar produtos.",
        variant: "destructive"
      });
      return;
    }

    try {
      const reviewData = {
        product_id: productId,
        user_id: user.id,
        rating,
        comment: comment || null
      };

      if (userReview) {
        // Update existing review
        const { error } = await supabase
          .from('product_reviews')
          .update(reviewData)
          .eq('id', userReview.id);

        if (error) throw error;

        toast({
          title: "Avaliação atualizada",
          description: "Sua avaliação foi atualizada com sucesso.",
        });
      } else {
        // Create new review
        const { error } = await supabase
          .from('product_reviews')
          .insert(reviewData);

        if (error) throw error;

        toast({
          title: "Avaliação enviada",
          description: "Obrigado pela sua avaliação!",
        });
      }

      await fetchReviews();
      await fetchUserReview();
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a avaliação.",
        variant: "destructive"
      });
    }
  };

  const deleteReview = async () => {
    if (!userReview || !user) return;

    try {
      const { error } = await supabase
        .from('product_reviews')
        .delete()
        .eq('id', userReview.id);

      if (error) throw error;

      toast({
        title: "Avaliação removida",
        description: "Sua avaliação foi removida.",
      });

      setUserReview(null);
      await fetchReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover a avaliação.",
        variant: "destructive"
      });
    }
  };

  return {
    reviews,
    stats,
    userReview,
    loading,
    submitReview,
    deleteReview,
    refetch: fetchReviews
  };
};