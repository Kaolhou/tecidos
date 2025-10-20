import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string | null;
  material: string | null;
}

const CART_STORAGE_KEY = 'fabric_store_cart';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync with database when user logs in
  useEffect(() => {
    if (user) {
      syncCartWithDatabase();
    }
  }, [user]);

  const syncCartWithDatabase = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // Get cart items from database
      const { data: dbCartItems, error } = await supabase
        .from('cart_items')
        .select(`
          quantity,
          products:product_id (
            id,
            name,
            price,
            material,
            image_url,
            product_images (
              image_url,
              position
            )
          )
        `)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching cart from database:', error);
        return;
      }

      // Convert database format to cart format
      const dbCart: CartItem[] = dbCartItems?.map(item => {
        const product = item.products as any;

        // Priorizar image_url do produto, depois a primeira imagem de product_images
        let imageUrl = product.image_url;
        if (!imageUrl && product.product_images && product.product_images.length > 0) {
          const sortedImages = [...product.product_images].sort((a, b) => a.position - b.position);
          imageUrl = sortedImages[0].image_url;
        }

        return {
          id: product.id,
          name: product.name,
          price: Number(product.price),
          quantity: item.quantity,
          material: product.material,
          image_url: imageUrl || null
        };
      }) || [];

      // Merge localStorage cart with database cart
      const mergedCart = mergeCartItems([...cartItems, ...dbCart]);
      
      // Update database with merged cart
      for (const item of mergedCart) {
        await upsertCartItem(item.id, item.quantity);
      }

      setCartItems(mergedCart);
    } catch (error) {
      console.error('Error syncing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const mergeCartItems = (items: CartItem[]): CartItem[] => {
    const merged = new Map<string, CartItem>();
    
    items.forEach(item => {
      const existing = merged.get(item.id);
      if (existing) {
        merged.set(item.id, {
          ...existing,
          quantity: existing.quantity + item.quantity
        });
      } else {
        merged.set(item.id, item);
      }
    });

    return Array.from(merged.values());
  };

  const upsertCartItem = async (productId: string, quantity: number) => {
    if (!user) return;

    const { error } = await supabase
      .from('cart_items')
      .upsert({
        user_id: user.id,
        product_id: productId,
        quantity
      });

    if (error) {
      console.error('Error updating cart in database:', error);
    }
  };

  const addToCart = async (product: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    // Check stock before adding to cart
    try {
      const { data: productData, error } = await supabase
        .from('products')
        .select('stock_quantity')
        .eq('id', product.id)
        .single();

      if (error) {
        console.error('Error checking stock:', error);
        toast({
          title: "Erro",
          description: "Não foi possível verificar o estoque.",
          variant: "destructive"
        });
        return;
      }

      const existingItem = cartItems.find(item => item.id === product.id);
      const currentCartQuantity = existingItem ? existingItem.quantity : 0;
      const totalQuantity = currentCartQuantity + quantity;

      if (totalQuantity > productData.stock_quantity) {
        toast({
          title: "Estoque insuficiente",
          description: `Apenas ${productData.stock_quantity} unidades disponíveis. Você já tem ${currentCartQuantity} no carrinho.`,
          variant: "destructive"
        });
        return;
      }

      if (existingItem) {
        updateQuantity(product.id, totalQuantity);
      } else {
        const newItem: CartItem = { ...product, quantity };
        setCartItems(prev => [...prev, newItem]);
        
        if (user) {
          await upsertCartItem(product.id, quantity);
        }
      }
      
      toast({
        title: "Item adicionado ao carrinho",
        description: `${product.name} foi adicionado ao carrinho.`,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Erro",
        description: "Não foi possível adicionar o item ao carrinho.",
        variant: "destructive"
      });
    }
  };

  const updateQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    // Check stock before updating quantity
    try {
      const { data: productData, error } = await supabase
        .from('products')
        .select('stock_quantity')
        .eq('id', productId)
        .single();

      if (error) {
        console.error('Error checking stock:', error);
        return;
      }

      if (newQuantity > productData.stock_quantity) {
        toast({
          title: "Estoque insuficiente",
          description: `Apenas ${productData.stock_quantity} unidades disponíveis.`,
          variant: "destructive"
        });
        return;
      }

      setCartItems(prev => 
        prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: newQuantity }
            : item
        )
      );

      if (user) {
        await upsertCartItem(productId, newQuantity);
      }
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const removeFromCart = async (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    
    if (user) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) {
        console.error('Error removing item from database:', error);
      }
    }

    toast({
      title: "Item removido",
      description: "Item removido do carrinho.",
    });
  };

  const clearCart = async () => {
    setCartItems([]);
    
    if (user) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id);

      if (error) {
        console.error('Error clearing cart in database:', error);
      }
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };
};