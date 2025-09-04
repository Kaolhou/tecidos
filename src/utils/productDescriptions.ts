interface ProductInfo {
  name: string;
  category?: string | null;
  material?: string | null;
  width?: string | null;
}

interface TecidoTemplate {
  description: string;
  features: string[];
  applications: string[];
  care: string[];
  composition?: string;
  weight?: string;
}

const tecidoTemplates: Record<string, TecidoTemplate> = {
  alfaiataria: {
    description: "Tecido de alfaiataria premium com textura refinada e caimento impecável. Ideal para peças estruturadas que exigem elegância e sofisticação.",
    features: [
      "Textura lisa e uniforme",
      "Excelente caimento e estrutura",
      "Resistente a rugas",
      "Toque suave e agradável"
    ],
    applications: [
      "Blazers e ternos",
      "Calças sociais",
      "Saias estruturadas",
      "Vestidos de alfaiataria"
    ],
    care: [
      "Lavagem a seco recomendada",
      "Passar com ferro morno",
      "Armazenar em cabides",
      "Evitar exposição direta ao sol"
    ],
    composition: "Mista de alta qualidade",
    weight: "Médio a pesado"
  },
  malha: {
    description: "Malha premium com elasticidade e conforto excepcionais. Perfeita para peças que combinam estilo e praticidade no dia a dia.",
    features: [
      "Alta elasticidade",
      "Toque macio e confortável",
      "Respirabilidade superior",
      "Fácil manutenção"
    ],
    applications: [
      "Camisetas e tops",
      "Vestidos casuais",
      "Roupas esportivas",
      "Peças de loungewear"
    ],
    care: [
      "Lavável em máquina (água fria)",
      "Secar à sombra",
      "Ferro baixo se necessário",
      "Não usar alvejante"
    ],
    composition: "Blend de fibras naturais e sintéticas",
    weight: "Leve a médio"
  },
  oxford: {
    description: "Tecido Oxford clássico com durabilidade e versatilidade incomparáveis. Ideal para peças casuais e semi-formais com toque contemporâneo.",
    features: [
      "Textura característica entrelaçada",
      "Alta durabilidade",
      "Versatilidade de uso",
      "Fácil manutenção"
    ],
    applications: [
      "Camisas casuais",
      "Camisas sociais",
      "Vestidos shirt",
      "Peças unissex"
    ],
    care: [
      "Lavável em máquina",
      "Ferro quente para melhor acabamento",
      "Pode ser passado a vapor",
      "Secagem natural ou máquina"
    ],
    composition: "100% algodão ou misto",
    weight: "Médio"
  },
  crepe: {
    description: "Malha crepe sofisticada com textura única e drapeado elegante. Perfeita para peças que exigem movimento e fluidez.",
    features: [
      "Textura crepe característica",
      "Drapeado fluido",
      "Elasticidade confortável",
      "Resistente a rugas"
    ],
    applications: [
      "Vestidos fluidos",
      "Blusas elegantes",
      "Saias com movimento",
      "Peças de festa"
    ],
    care: [
      "Lavagem delicada",
      "Secar na horizontal",
      "Ferro baixo com tecido",
      "Evitar torcer ou esfregar"
    ],
    composition: "Poliéster com elastano",
    weight: "Leve a médio"
  }
};

const colorDescriptions: Record<string, string> = {
  mostarda: "em tom mostarda vibrante que adiciona personalidade e sofisticação a qualquer look",
  areia: "em tom areia neutro e versátil, perfeito para combinações elegantes e atemporais",
  branco: "em branco puro e clássico, essencial para qualquer guarda-roupa",
  preto: "em preto elegante e versátil, perfeito para looks sofisticados",
  azul: "em azul clássico que transmite confiança e elegância",
  vermelho: "em vermelho vibrante que faz uma declaração de estilo",
  verde: "em verde natural que traz frescor e modernidade"
};

export const generateProductDescription = (product: ProductInfo): {
  description: string;
  features: string[];
  applications: string[];
  care: string[];
  specifications: { composition?: string; weight?: string; width?: string; };
} => {
  console.log('Gerando descrição para produto:', product.name);
  
  const normalizedName = product.name.toLowerCase();
  
  // Determinar tipo de tecido - ajustado para nomes do banco
  let tecidoType = 'alfaiataria'; // default
  
  if (normalizedName.includes('crepe')) {
    tecidoType = 'crepe';
  } else if (normalizedName.includes('malha')) {
    tecidoType = 'malha';
  } else if (normalizedName.includes('oxford')) {
    tecidoType = 'oxford';
  } else if (normalizedName.includes('alfaiataria')) {
    tecidoType = 'alfaiataria';
  }
  
  // Determinar cor
  let colorDescription = '';
  Object.keys(colorDescriptions).forEach(color => {
    if (normalizedName.includes(color)) {
      colorDescription = colorDescriptions[color];
    }
  });
  
  const template = tecidoTemplates[tecidoType];
  
  // Personalizar descrição com cor
  let description = template.description;
  if (colorDescription) {
    description = description.replace('.', ` ${colorDescription}.`);
  }
  
  return {
    description,
    features: template.features,
    applications: template.applications,
    care: template.care,
    specifications: {
      composition: template.composition,
      weight: template.weight,
      width: product.width || undefined
    }
  };
};

export const generateSEOData = (product: ProductInfo) => {
  const normalizedName = product.name.toLowerCase();
  
  let keywords = ['tecido', 'premium', 'qualidade'];
  
  if (normalizedName.includes('alfaiataria')) {
    keywords.push('alfaiataria', 'blazer', 'terno', 'social');
  }
  if (normalizedName.includes('malha') || normalizedName.includes('crepe')) {
    keywords.push('malha', 'crepe', 'confortável', 'elástico');
  }
  if (normalizedName.includes('oxford')) {
    keywords.push('oxford', 'camisa', 'casual', 'durável');
  }
  
  // Adicionar cores
  Object.keys(colorDescriptions).forEach(color => {
    if (normalizedName.includes(color)) {
      keywords.push(color);
    }
  });
  
  return {
    title: `${product.name} | Leticia Tecidos Premium`,
    description: `${product.name} de alta qualidade. Tecido premium para suas criações mais especiais. Compre online na Leticia Tecidos.`,
    keywords: keywords.join(', '),
    canonical: `/produto/${product.name.toLowerCase().replace(/\s+/g, '-')}`
  };
};
