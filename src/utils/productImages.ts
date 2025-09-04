interface ProductImage {
  url: string;
  alt: string;
  type: 'rolo' | 'close' | 'flat_lay';
}

// Mapeamento de imagens dos produtos
const productImageMap: Record<string, ProductImage[]> = {
  // Alfaiataria Mostarda
  'ALFAIATARIA MOSTARDA': [
    {
      url: '/lovable-uploads/1ce87a01-d957-4e82-a852-0b6186ef8b06.png',
      alt: 'Tecido Alfaiataria Mostarda - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  // Malha Crepe Areia
  'CREPE CHANEL AREIA': [
    {
      url: '/lovable-uploads/5c865fb2-2a98-4dc7-bc70-29eed9d90088.png',
      alt: 'Malha Crepe Areia - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  // Oxford Areia
  'OXFORD AREIA': [
    {
      url: '/lovable-uploads/a9ae1b4d-f565-413d-95a4-6b84d0fc5b1b.png',
      alt: 'Tecido Oxford Areia - Vista do rolo',
      type: 'rolo'
    }
  ],

  // Alfaiataria cores adicionais com imagens únicas
  'ALFAIATARIA AMARELO': [
    {
      url: '/lovable-uploads/92719de6-bc2d-451a-b76c-e73440b0cfc3.png',
      alt: 'Tecido Alfaiataria Amarelo - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  'ALFAIATARIA AZUL BEBE': [
    {
      url: '/lovable-uploads/b66bd7b7-d6d3-45f8-83db-34dcffe13586.png',
      alt: 'Tecido Alfaiataria Azul Bebê - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  'ALFAIATARIA BEGE': [
    {
      url: '/lovable-uploads/da3e43d0-e7f0-41eb-9eff-f2938d9b679c.png',
      alt: 'Tecido Alfaiataria Bege - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  'ALFAIATARIA BRANCO': [
    {
      url: '/lovable-uploads/fd27cabd-4b79-45cb-af5c-ed6b4b8b8bf3.png',
      alt: 'Tecido Alfaiataria Branco - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  'ALFAIATARIA MARINHO': [
    {
      url: '/lovable-uploads/1ce87a01-d957-4e82-a852-0b6186ef8b06.png',
      alt: 'Tecido Alfaiataria Marinho - Vista do rolo',
      type: 'rolo'
    }
  ],

  // Manter compatibilidade com nomes antigos (fallback)
  'Tecido Alfaiataria Mostarda': [
    {
      url: '/lovable-uploads/1ce87a01-d957-4e82-a852-0b6186ef8b06.png',
      alt: 'Tecido Alfaiataria Mostarda - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  'Malha Crepe Areia': [
    {
      url: '/lovable-uploads/5c865fb2-2a98-4dc7-bc70-29eed9d90088.png',
      alt: 'Malha Crepe Areia - Vista do rolo',
      type: 'rolo'
    }
  ],
  
  'Tecido Oxford Areia': [
    {
      url: '/lovable-uploads/a9ae1b4d-f565-413d-95a4-6b84d0fc5b1b.png',
      alt: 'Tecido Oxford Areia - Vista do rolo',
      type: 'rolo'
    }
  ],

  // Compatibilidade com nome correto
  'OXFORD': [
    {
      url: '/lovable-uploads/a9ae1b4d-f565-413d-95a4-6b84d0fc5b1b.png',
      alt: 'Tecido Oxford - Vista do rolo',
      type: 'rolo'
    }
  ]
};

export const getProductImages = (productName: string): ProductImage[] => {
  console.log('Buscando imagens para produto:', productName);
  
  // Busca direta pelo nome
  if (productImageMap[productName]) {
    console.log('Imagens encontradas:', productImageMap[productName]);
    return productImageMap[productName];
  }
  
  // Busca por similaridade (normalizada)
  const normalizedName = productName.toLowerCase().trim();
  
  for (const [key, images] of Object.entries(productImageMap)) {
    const normalizedKey = key.toLowerCase().trim();
    
    // Verifica se o nome contém palavras-chave do produto
    if (
      (normalizedName.includes('alfaiataria') && normalizedKey.includes('alfaiataria')) ||
      (normalizedName.includes('crepe') && normalizedKey.includes('crepe')) ||
      (normalizedName.includes('oxford') && normalizedKey.includes('oxford')) ||
      (normalizedName.includes('mostarda') && normalizedKey.includes('mostarda')) ||
      (normalizedName.includes('areia') && normalizedKey.includes('areia'))
    ) {
      console.log('Imagens encontradas por similaridade:', images);
      return images;
    }
  }
  
  console.log('Nenhuma imagem encontrada para:', productName);
  return [];
};

// Função para obter todas as imagens disponíveis
export const getAllProductImages = (): Record<string, ProductImage[]> => {
  return productImageMap;
};

// Função para verificar se um produto tem imagens
export const hasProductImages = (productName: string): boolean => {
  return getProductImages(productName).length > 0;
};
