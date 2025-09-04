import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Clock, Package } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  material: string | null;
}

interface ShippingOption {
  service: string;
  serviceName: string;
  price: number;
  deadline: number;
}

interface ShippingCalculatorProps {
  items: CartItem[];
  onShippingSelected?: (option: ShippingOption) => void;
  selectedShipping?: ShippingOption | null;
}

export const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({ 
  items, 
  onShippingSelected,
  selectedShipping 
}) => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [address, setAddress] = useState<any>(null);

  const formatCep = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/^(\d{5})(\d)/, '$1-$2');
    return formatted.slice(0, 9);
  };

  const calculateWeight = (items: CartItem[]) => {
    // Estimativa: 0.3kg por metro de tecido
    return items.reduce((total, item) => total + (item.quantity * 0.3), 0);
  };

  const calculateShipping = async () => {
    if (!cep || cep.replace(/\D/g, '').length !== 8) {
      toast.error('Por favor, insira um CEP válido');
      return;
    }

    setLoading(true);
    try {
      const weight = calculateWeight(items);
      
      const { data, error } = await supabase.functions.invoke('calculate-shipping', {
        body: {
          cep: cep.replace(/\D/g, ''),
          weight,
          items: items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))
        }
      });

      if (error) throw error;

      if (data.success) {
        setShippingOptions(data.shippingOptions);
        setAddress(data.address);
        toast.success('Opções de frete calculadas!');
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast.error(error.message || 'Erro ao calcular frete');
      console.error('Shipping calculation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDeadline = (days: number) => {
    return `${days} dia${days > 1 ? 's' : ''} ${days === 1 ? 'útil' : 'úteis'}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(formatCep(e.target.value))}
          className="flex-1"
          maxLength={9}
        />
        <Button 
          onClick={calculateShipping}
          disabled={loading}
          className="whitespace-nowrap"
        >
          {loading ? 'Calculando...' : 'Calcular Frete'}
        </Button>
      </div>

      {address && (
        <div className="text-sm text-muted-foreground">
          <Package className="inline h-4 w-4 mr-1" />
          Entrega para: {address.city}/{address.state}
        </div>
      )}

      {shippingOptions.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Opções de Frete:</h4>
          {shippingOptions.map((option) => (
            <Card 
              key={option.service} 
              className={`cursor-pointer transition-colors ${
                selectedShipping?.service === option.service 
                  ? 'ring-2 ring-primary' 
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => onShippingSelected?.(option)}
            >
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">{option.serviceName}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {formatDeadline(option.deadline)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatPrice(option.price)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {shippingOptions.length === 0 && cep && !loading && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Digite um CEP válido e clique em "Calcular Frete" para ver as opções disponíveis.
        </p>
      )}
    </div>
  );
};

export default ShippingCalculator;