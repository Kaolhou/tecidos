
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  created_at: string;
  profile_image?: string | null;
  bio?: string | null;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updatePassword: (password: string) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);
  const { toast } = useToast();

  const fetchProfile = async (userId: string, retryCount = 0) => {
    // Prevent multiple simultaneous fetches
    if (isFetchingProfile && retryCount === 0) {
      console.log('⏸️ Profile fetch already in progress, skipping...');
      return;
    }

    setIsFetchingProfile(true);

    try {
      console.log('🔍 [FETCH PROFILE] Starting for user:', userId, 'retry:', retryCount);

      // STEP 1: Fetch profile data
      console.log('📝 [STEP 1/2] Fetching from profiles table...');
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileError) {
        console.error('❌ Profile fetch error:', profileError);
        throw profileError;
      }

      console.log('✅ Profile data fetched:', profileData);

      // STEP 2: Fetch user role from user_roles table with retry
      console.log('🔐 [STEP 2/2] Fetching role from user_roles table...');

      let roleData = null;
      let roleError = null;
      let roleRetryCount = 0;
      const maxRoleRetries = 3;

      while (roleRetryCount < maxRoleRetries) {
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', userId)
          .single();

        if (!error) {
          roleData = data;
          roleError = null;
          break;
        }

        roleError = error;
        roleRetryCount++;

        if (roleRetryCount < maxRoleRetries) {
          console.warn(`⚠️ Role fetch attempt ${roleRetryCount} failed, retrying in ${roleRetryCount * 500}ms...`, error);
          await new Promise(resolve => setTimeout(resolve, roleRetryCount * 500));
        }
      }

      if (roleError) {
        console.error('❌ Role fetch failed after', maxRoleRetries, 'attempts:', roleError);
        console.warn('⚠️ Using default role "user"');
      }

      const userRole = roleData?.role || 'user';
      console.log('✅ Final user role:', userRole);

      // STEP 3: Combine profile with role
      const completeProfile = {
        ...profileData,
        role: userRole
      };

      console.log('✅ ========================================');
      console.log('✅ COMPLETE PROFILE WITH ROLE:');
      console.log('✅', JSON.stringify(completeProfile, null, 2));
      console.log('✅ ========================================');

      setProfile(completeProfile);
      setIsFetchingProfile(false);
    } catch (error) {
      console.error('❌ Error fetching profile:', error);

      // Retry logic - try up to 3 times for profile fetch
      if (retryCount < 2) {
        const delay = 1000 * (retryCount + 1);
        console.log(`🔄 Retrying entire profile fetch in ${delay}ms... (attempt ${retryCount + 1}/3)`);
        setIsFetchingProfile(false);
        setTimeout(() => {
          fetchProfile(userId, retryCount + 1);
        }, delay);
      } else {
        console.error('💥 Max retries reached for profile fetch');
        // Set a minimal profile to prevent infinite loading
        setProfile({
          id: userId,
          name: null,
          email: user?.email || null,
          created_at: new Date().toISOString(),
          profile_image: null,
          bio: null,
          role: 'user' // Default role
        });
        setIsFetchingProfile(false);
      }
    }
  };

  useEffect(() => {
    console.log('🚀 [INIT] Setting up auth state listener');

    let isInitialLoad = true;

    // Get initial session FIRST (before setting up listener)
    console.log('🔍 [INIT] Checking for existing session...');
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('📋 [INIT] Initial session check:', session?.user?.email || 'No session');
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        console.log('👤 [INIT] User found, fetching profile...');
        fetchProfile(session.user.id);
      } else {
        console.log('👤 [INIT] No user found');
        setProfile(null);
      }

      setLoading(false);
      isInitialLoad = false;
    });

    // Set up auth state listener for future changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('🔄 [AUTH CHANGE] Event:', event, 'User:', session?.user?.email);

        // Skip if this is the initial SIGNED_IN event (already handled above)
        if (isInitialLoad && event === 'INITIAL_SESSION') {
          console.log('⏭️ [AUTH CHANGE] Skipping initial session (already processed)');
          return;
        }

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          console.log('👤 [AUTH CHANGE] User authenticated, fetching profile...');
          fetchProfile(session.user.id);
        } else {
          console.log('👤 [AUTH CHANGE] User logged out, clearing profile');
          setProfile(null);
          setIsFetchingProfile(false);
        }

        setLoading(false);
      }
    );

    return () => {
      console.log('🔌 [CLEANUP] Unsubscribing from auth listener');
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      toast({
        title: "Erro no login",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo de volta.",
      });
    }
    
    return { error };
  };

  const signUp = async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          name: name,
        },
      },
    });

    if (error) {
      toast({
        title: "Erro no cadastro",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Conta criada com sucesso!",
        description: "Verifique seu email para confirmar a conta.",
      });
    }

    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
    toast({
      title: "Logout realizado",
      description: "Até mais!",
    });
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: 'Usuário não autenticado' };

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (!error) {
      await fetchProfile(user.id);
      toast({
        title: "Perfil atualizado",
        description: "Suas informações foram atualizadas com sucesso.",
      });
    }

    return { error };
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      toast({
        title: "Erro ao enviar email",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Email enviado!",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      });
    }

    return { error };
  };

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      toast({
        title: "Erro ao atualizar senha",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Senha atualizada",
        description: "Sua senha foi atualizada com sucesso.",
      });
    }

    return { error };
  };

  const value = {
    user,
    session,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
    resetPassword,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
