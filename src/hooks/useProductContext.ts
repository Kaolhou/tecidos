
import { useState, useEffect } from 'react';

interface ProductContextData {
  productName: string;
  productCategory?: string | null;
  productPrice: number;
  productFeatures: string[];
  productApplications: string[];
}

export const useProductContext = (productData?: ProductContextData) => {
  const [contextualPrompts, setContextualPrompts] = useState<string[]>([]);

  useEffect(() => {
    if (productData) {
      const prompts = generateContextualPrompts(productData);
      setContextualPrompts(prompts);
    }
  }, [productData]);

  const generateContextualPrompts = (data: ProductContextData): string[] => {
    const basePrompt = `Você está atendendo um cliente interessado no produto "${data.productName}" que custa ${formatPrice(data.productPrice)}.`;
    
    let contextPrompt = basePrompt;
    
    if (data.productCategory) {
      contextPrompt += ` Este produto pertence à categoria ${data.productCategory}.`;
    }
    
    if (data.productFeatures.length > 0) {
      contextPrompt += ` As principais características são: ${data.productFeatures.join(', ')}.`;
    }
    
    if (data.productApplications.length > 0) {
      contextPrompt += ` Este tecido é ideal para: ${data.productApplications.join(', ')}.`;
    }
    
    contextPrompt += ` Seja prestativo e forneça informações detalhadas sobre este produto específico, suas aplicações, cuidados e como pode atender às necessidades do cliente.`;

    const suggestedQuestions = [
      `Como cuidar do ${data.productName}?`,
      `Qual a metragem recomendada para uma blusa?`,
      `Este tecido é adequado para iniciantes?`,
      `Vocês têm outras cores deste produto?`,
      `Qual a diferença entre este e outros tecidos similares?`,
    ];

    return [contextPrompt, ...suggestedQuestions];
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getProductContext = () => {
    return contextualPrompts[0] || '';
  };

  const getSuggestedQuestions = () => {
    return contextualPrompts.slice(1);
  };

  return {
    getProductContext,
    getSuggestedQuestions,
    hasContext: contextualPrompts.length > 0
  };
};
