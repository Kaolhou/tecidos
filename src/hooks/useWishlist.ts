import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  material: string | null;
}

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('wishlists')
        .select(`
          products:product_id (
            id,
            name,
            price,
            material,
            product_images (
              image_url
            )
          )
        `)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching wishlist:', error);
        return;
      }

      const wishlist: WishlistItem[] = data?.map(item => {
        const product = item.products as any;
        return {
          id: product.id,
          name: product.name,
          price: Number(product.price),
          material: product.material,
          image_url: product.product_images?.[0]?.image_url || null
        };
      }) || [];

      setWishlistItems(wishlist);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (product: { id: string; name: string; price: number; image_url: string | null; material: string | null; }) => {
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Faça login para adicionar à lista de desejos.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('wishlists')
        .insert({
          user_id: user.id,
          product_id: product.id
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Item já na lista",
            description: "Este item já está na sua lista de desejos.",
          });
          return;
        }
        throw error;
      }

      await fetchWishlist();
      toast({
        title: "Adicionado à lista de desejos",
        description: `${product.name} foi adicionado à sua lista de desejos.`,
      });
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast({
        title: "Erro",
        description: "Não foi possível adicionar à lista de desejos.",
        variant: "destructive"
      });
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('wishlists')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;

      await fetchWishlist();
      toast({
        title: "Removido da lista de desejos",
        description: "Item removido da sua lista de desejos.",
      });
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover da lista de desejos.",
        variant: "destructive"
      });
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return {
    wishlistItems,
    loading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    refetch: fetchWishlist
  };
};