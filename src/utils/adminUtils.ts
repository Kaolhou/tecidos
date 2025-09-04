// Utilitários exclusivos para o painel administrativo
// Funções para limpeza e formatação de dados apenas na área admin

/**
 * Limpa e traduz nomes de produtos apenas para exibição no painel admin
 * Remove códigos desnecessários e traduz cores para português
 * 
 * Exemplo:
 * "20250710 1119 Aqua Green Fabric Texture Gen 01jzt0y6a5ffmbzbhh6dr7f6xp" 
 * → "Verde Água"
 */
export const cleanProductNameForAdmin = (name: string): string => {
  if (!name || typeof name !== 'string') {
    return name || '';
  }

  // Etapa 1: Remover prefixo de data e hora (formato: 20250710 1119)
  let cleanName = name.replace(/^[0-9]{8}\s+[0-9]{4}\s+/, '');
  
  // Etapa 2: Remover sufixo " Fabric Texture Gen " e código final
  cleanName = cleanName.replace(/\s+Fabric\s+Texture.*$/i, '');
  
  // Etapa 3: Remover outros padrões comuns de sufixo
  cleanName = cleanName.replace(/\s+Gen\s+[0-9a-zA-Z]+.*$/i, '');
  
  // Etapa 4: Limpar espaços extras
  cleanName = cleanName.trim();
  
  // Se não conseguiu extrair nada, retorna o nome original
  if (!cleanName) {
    return name;
  }
  
  // Etapa 5: Tradução das cores para português
  const colorTranslations: { [key: string]: string } = {
    // Cores compostas específicas
    'Aqua Green': 'Verde Água',
    'Navy Blue': 'Azul Marinho',
    'Deep Red': 'Vermelho Escuro',
    'Sky Blue': 'Azul Céu',
    'Forest Green': 'Verde Floresta',
    'Golden Yellow': 'Amarelo Dourado',
    'Royal Blue': 'Azul Real',
    'Crimson Red': 'Vermelho Carmesim',
    'Emerald Green': 'Verde Esmeralda',
    'Sunset Orange': 'Laranja Pôr do Sol',
    'Rose Pink': 'Rosa',
    'Lavender Purple': 'Roxo Lavanda',
    'Coral Pink': 'Rosa Coral',
    'Turquoise Blue': 'Azul Turquesa',
    'Mint Green': 'Verde Menta',
    'Burgundy Red': 'Vermelho Borgonha',
    'Ivory White': 'Branco Marfim',
    'Charcoal Gray': 'Cinza Carvão',
    'Charcoal Grey': 'Cinza Carvão',
    'Cream White': 'Branco Creme',
    'Peach Orange': 'Laranja Pêssego',
    'Olive Green': 'Verde Oliva',
    'Slate Gray': 'Cinza Ardósia',
    'Slate Grey': 'Cinza Ardósia',
    'Pearl White': 'Branco Pérola',
    'Dusty Rose': 'Rosa Empoeirado',
    'Steel Blue': 'Azul Aço',
    'Wine Red': 'Vermelho Vinho',
    'Sage Green': 'Verde Sálvia',
    'Champagne Gold': 'Dourado Champagne',
    
    // Cores básicas
    'Red': 'Vermelho',
    'Blue': 'Azul',
    'Green': 'Verde',
    'Yellow': 'Amarelo',
    'Orange': 'Laranja',
    'Purple': 'Roxo',
    'Pink': 'Rosa',
    'Brown': 'Marrom',
    'Black': 'Preto',
    'White': 'Branco',
    'Gray': 'Cinza',
    'Grey': 'Cinza',
    'Beige': 'Bege',
    'Tan': 'Bronzeado',
    'Gold': 'Dourado',
    'Silver': 'Prateado',
    'Bronze': 'Bronze',
  };
  
  // Buscar tradução exata primeiro
  if (colorTranslations[cleanName]) {
    return colorTranslations[cleanName];
  }
  
  // Buscar por correspondência parcial (case insensitive)
  for (const [english, portuguese] of Object.entries(colorTranslations)) {
    if (cleanName.toLowerCase().includes(english.toLowerCase())) {
      return portuguese;
    }
  }
  
  // Se não encontrou tradução, retorna o nome limpo
  return cleanName;
};

/**
 * Formatar preço para exibição no admin com símbolo brasileiro
 */
export const formatPriceForAdmin = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

/**
 * Formatar data para exibição no admin
 */
export const formatDateForAdmin = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Truncar texto longo para exibição em tabelas admin
 */
export const truncateForAdmin = (text: string, maxLength: number = 50): string => {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};