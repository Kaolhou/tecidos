// Dados dos produtos de tecidos - Coleção Completa (424 produtos)
// Todos os produtos têm imagens definidas
export interface FabricProduct {
  id: string;
  name: string;
  category: string;
  color: string;
  price: number;
  image: string;
  description: string;
  material: string;
  width: string;
  weight: string;
  care: string[];
  applications: string[];
  specifications: {
    material: string;
    width: string;
    weight: string;
    origin: string;
  };
}

export const fabricProducts: FabricProduct[] = [
  {
    "id": "alfaiataria-preto-1",
    "name": "alfaiataria Preto",
    "category": "alfaiataria",
    "color": "Preto",
    "price": 69.16,
    "image": "/products/ alfaiataria /alfaiataria  preto .png",
    "description": "alfaiataria preto de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-branco-2",
    "name": "alfaiataria Branco",
    "category": "alfaiataria",
    "color": "Branco",
    "price": 71.12,
    "image": "/products/ alfaiataria /alfaiataria off-white.png",
    "description": "alfaiataria branco de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-ros--3",
    "name": "alfaiataria Rosé",
    "category": "alfaiataria",
    "color": "Rosé",
    "price": 66.06,
    "image": "/products/ alfaiataria /alfaiataria rose.png",
    "description": "alfaiataria rosé de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-salm-o-4",
    "name": "alfaiataria Salmão",
    "category": "alfaiataria",
    "color": "Salmão",
    "price": 61.24,
    "image": "/products/ alfaiataria /alfaiataria salmon.png",
    "description": "alfaiataria salmão de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-natural-5",
    "name": "alfaiataria Natural",
    "category": "alfaiataria",
    "color": "Natural",
    "price": 77.32,
    "image": "/products/ alfaiataria /alfaiataria vermelha.png",
    "description": "alfaiataria natural de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-azul-6",
    "name": "alfaiataria Azul",
    "category": "alfaiataria",
    "color": "Azul",
    "price": 70.59,
    "image": "/products/ alfaiataria /tecido azul Tiffany para alfaiataria.png",
    "description": "alfaiataria azul de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-bege-7",
    "name": "alfaiataria Bege",
    "category": "alfaiataria",
    "color": "Bege",
    "price": 65.66,
    "image": "/products/ alfaiataria /tecido bege para alfaiataria.png",
    "description": "alfaiataria bege de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-azul-8",
    "name": "alfaiataria Azul",
    "category": "alfaiataria",
    "color": "Azul",
    "price": 76.73,
    "image": "/products/ alfaiataria /tecido de alfaiataria azul-bebê.png",
    "description": "alfaiataria azul de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-cinza-9",
    "name": "alfaiataria Cinza",
    "category": "alfaiataria",
    "color": "Cinza",
    "price": 71.46,
    "image": "/products/ alfaiataria /tecido de alfaiataria cinza-escuro.png",
    "description": "alfaiataria cinza de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-verde-10",
    "name": "alfaiataria Verde",
    "category": "alfaiataria",
    "color": "Verde",
    "price": 75.18,
    "image": "/products/ alfaiataria /tecido de alfaiataria verde-limão.png",
    "description": "alfaiataria verde de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-verde-11",
    "name": "alfaiataria Verde",
    "category": "alfaiataria",
    "color": "Verde",
    "price": 68.52,
    "image": "/products/ alfaiataria /tecido de alfaiataria verde-musgo .png",
    "description": "alfaiataria verde de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-natural-12",
    "name": "alfaiataria Natural",
    "category": "alfaiataria",
    "color": "Natural",
    "price": 62.85,
    "image": "/products/ alfaiataria /tecido laranja para alfaiataria.png",
    "description": "alfaiataria natural de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-lil-s-13",
    "name": "alfaiataria Lilás",
    "category": "alfaiataria",
    "color": "Lilás",
    "price": 64.11,
    "image": "/products/ alfaiataria /tecido lilás para alfaiataria.png",
    "description": "alfaiataria lilás de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-rosa-14",
    "name": "alfaiataria Rosa",
    "category": "alfaiataria",
    "color": "Rosa",
    "price": 60.95,
    "image": "/products/ alfaiataria /tecido rosa para alfaiataria.png",
    "description": "alfaiataria rosa de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "alfaiataria-natural-15",
    "name": "alfaiataria Natural",
    "category": "alfaiataria",
    "color": "Natural",
    "price": 71.63,
    "image": "/products/ alfaiataria /tecido turquesa para alfaiataria.png",
    "description": "alfaiataria natural de alta qualidade. Composição em 65% Poliéster, 35% Viscose para máximo conforto e durabilidade.",
    "material": "65% Poliéster, 35% Viscose",
    "width": "1,50m",
    "weight": "240g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "65% Poliéster, 35% Viscose",
      "width": "1,50m",
      "weight": "240g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-creme-16",
    "name": "chiffon Creme",
    "category": "chiffon",
    "color": "Creme",
    "price": 39.43,
    "image": "/products/ chiffon/Chiffon creme.png",
    "description": "chiffon creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-azul-17",
    "name": "chiffon Azul",
    "category": "chiffon",
    "color": "Azul",
    "price": 37.55,
    "image": "/products/ chiffon/chiffon  azul.png",
    "description": "chiffon azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-verde-18",
    "name": "chiffon Verde",
    "category": "chiffon",
    "color": "Verde",
    "price": 37.19,
    "image": "/products/ chiffon/chiffon  verde agua.png",
    "description": "chiffon verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-natural-19",
    "name": "chiffon Natural",
    "category": "chiffon",
    "color": "Natural",
    "price": 44.33,
    "image": "/products/ chiffon/chiffon amarello.png",
    "description": "chiffon natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-azul-20",
    "name": "chiffon Azul",
    "category": "chiffon",
    "color": "Azul",
    "price": 35.53,
    "image": "/products/ chiffon/chiffon azul.png",
    "description": "chiffon azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-branco-21",
    "name": "chiffon Branco",
    "category": "chiffon",
    "color": "Branco",
    "price": 33.22,
    "image": "/products/ chiffon/chiffon branco.png",
    "description": "chiffon branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-creme-22",
    "name": "chiffon Creme",
    "category": "chiffon",
    "color": "Creme",
    "price": 36.22,
    "image": "/products/ chiffon/chiffon creme.png",
    "description": "chiffon creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-natural-23",
    "name": "chiffon Natural",
    "category": "chiffon",
    "color": "Natural",
    "price": 36.66,
    "image": "/products/ chiffon/chiffon de petróleo.png",
    "description": "chiffon natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-rosa-24",
    "name": "chiffon Rosa",
    "category": "chiffon",
    "color": "Rosa",
    "price": 38.4,
    "image": "/products/ chiffon/chiffon rosa.png",
    "description": "chiffon rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-azul-royal-25",
    "name": "chiffon Azul Royal",
    "category": "chiffon",
    "color": "Azul Royal",
    "price": 44.42,
    "image": "/products/ chiffon/chiffon royal azul.png",
    "description": "chiffon azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-salm-o-26",
    "name": "chiffon Salmão",
    "category": "chiffon",
    "color": "Salmão",
    "price": 36.98,
    "image": "/products/ chiffon/chiffon salmão.png",
    "description": "chiffon salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-vermelho-27",
    "name": "chiffon Vermelho",
    "category": "chiffon",
    "color": "Vermelho",
    "price": 39.74,
    "image": "/products/ chiffon/chiffon vermelho.png",
    "description": "chiffon vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "chiffon-rosa-28",
    "name": "chiffon Rosa",
    "category": "chiffon",
    "color": "Rosa",
    "price": 44.71,
    "image": "/products/ chiffon/hiffon de seda rosa.png",
    "description": "chiffon rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "60g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "60g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-vermelho-29",
    "name": "linho sarja Vermelho",
    "category": "linho sarja",
    "color": "Vermelho",
    "price": 50.47,
    "image": "/products/ linho sarja /inho sarja vermelho.png",
    "description": "linho sarja vermelho de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-amarelo-30",
    "name": "linho sarja Amarelo",
    "category": "linho sarja",
    "color": "Amarelo",
    "price": 51.88,
    "image": "/products/ linho sarja /linho sarja amarelo.png",
    "description": "linho sarja amarelo de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-rosa-31",
    "name": "linho sarja Rosa",
    "category": "linho sarja",
    "color": "Rosa",
    "price": 49.39,
    "image": "/products/ linho sarja /linho sarja rosa claro.png",
    "description": "linho sarja rosa de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-rosa-32",
    "name": "linho sarja Rosa",
    "category": "linho sarja",
    "color": "Rosa",
    "price": 61.22,
    "image": "/products/ linho sarja /linho sarja rosa.png",
    "description": "linho sarja rosa de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-verde-33",
    "name": "linho sarja Verde",
    "category": "linho sarja",
    "color": "Verde",
    "price": 57.82,
    "image": "/products/ linho sarja /linho sarja verde-agua.png",
    "description": "linho sarja verde de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-verde-34",
    "name": "linho sarja Verde",
    "category": "linho sarja",
    "color": "Verde",
    "price": 56.36,
    "image": "/products/ linho sarja /linho sarja verde-jade.png",
    "description": "linho sarja verde de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-sarja-verde-35",
    "name": "linho sarja Verde",
    "category": "linho sarja",
    "color": "Verde",
    "price": 53.02,
    "image": "/products/ linho sarja /linho sarja verde-oliva.png",
    "description": "linho sarja verde de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-preto-36",
    "name": "Bengaline Preto",
    "category": "Bengaline",
    "color": "Preto",
    "price": 51.1,
    "image": "/products/Bengaline/bengaline  preto.png",
    "description": "Bengaline preto de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-amarelo-37",
    "name": "Bengaline Amarelo",
    "category": "Bengaline",
    "color": "Amarelo",
    "price": 53.94,
    "image": "/products/Bengaline/bengaline amarelo dourado.png",
    "description": "Bengaline amarelo de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-azul-38",
    "name": "Bengaline Azul",
    "category": "Bengaline",
    "color": "Azul",
    "price": 54.19,
    "image": "/products/Bengaline/bengaline azul marinho.png",
    "description": "Bengaline azul de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-branco-39",
    "name": "Bengaline Branco",
    "category": "Bengaline",
    "color": "Branco",
    "price": 50.62,
    "image": "/products/Bengaline/bengaline branco.png",
    "description": "Bengaline branco de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-cinza-40",
    "name": "Bengaline Cinza",
    "category": "Bengaline",
    "color": "Cinza",
    "price": 53.83,
    "image": "/products/Bengaline/bengaline cinza carvao.png",
    "description": "Bengaline cinza de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-creme-41",
    "name": "Bengaline Creme",
    "category": "Bengaline",
    "color": "Creme",
    "price": 51.05,
    "image": "/products/Bengaline/bengaline creme.png",
    "description": "Bengaline creme de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-marrom-42",
    "name": "Bengaline Marrom",
    "category": "Bengaline",
    "color": "Marrom",
    "price": 52.55,
    "image": "/products/Bengaline/bengaline marrom.png",
    "description": "Bengaline marrom de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-marsala-43",
    "name": "Bengaline Marsala",
    "category": "Bengaline",
    "color": "Marsala",
    "price": 48.74,
    "image": "/products/Bengaline/bengaline marsala.png",
    "description": "Bengaline marsala de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-salm-o-44",
    "name": "Bengaline Salmão",
    "category": "Bengaline",
    "color": "Salmão",
    "price": 49.55,
    "image": "/products/Bengaline/bengaline salmon.png",
    "description": "Bengaline salmão de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-tiffany-45",
    "name": "Bengaline Tiffany",
    "category": "Bengaline",
    "color": "Tiffany",
    "price": 46.14,
    "image": "/products/Bengaline/bengaline tiffany.png",
    "description": "Bengaline tiffany de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-verde-46",
    "name": "Bengaline Verde",
    "category": "Bengaline",
    "color": "Verde",
    "price": 51.72,
    "image": "/products/Bengaline/bengaline verde.png",
    "description": "Bengaline verde de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bengaline-vermelho-47",
    "name": "Bengaline Vermelho",
    "category": "Bengaline",
    "color": "Vermelho",
    "price": 46.64,
    "image": "/products/Bengaline/bengaline vermelho.png",
    "description": "Bengaline vermelho de alta qualidade. Composição em 97% Poliéster, 3% Elastano para máximo conforto e durabilidade.",
    "material": "97% Poliéster, 3% Elastano",
    "width": "1,50m",
    "weight": "220g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "97% Poliéster, 3% Elastano",
      "width": "1,50m",
      "weight": "220g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-branco-48",
    "name": "Cetim Branco",
    "category": "Cetim",
    "color": "Branco",
    "price": 49.88,
    "image": "/products/Cetim/Cetim branco.png",
    "description": "Cetim branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-natural-49",
    "name": "Cetim Natural",
    "category": "Cetim",
    "color": "Natural",
    "price": 51.19,
    "image": "/products/Cetim/Cetim roxo.png",
    "description": "Cetim natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-amarelo-50",
    "name": "Cetim Amarelo",
    "category": "Cetim",
    "color": "Amarelo",
    "price": 56.5,
    "image": "/products/Cetim/cetim amarelo dourado.png",
    "description": "Cetim amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-marsala-51",
    "name": "Cetim Marsala",
    "category": "Cetim",
    "color": "Marsala",
    "price": 53.36,
    "image": "/products/Cetim/cetim marsala.png",
    "description": "Cetim marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-bucol-branco-52",
    "name": "Cetim bucol Branco",
    "category": "Cetim bucol",
    "color": "Branco",
    "price": 54.29,
    "image": "/products/Cetim bucol/Cetim bucol  branco.png",
    "description": "Cetim bucol branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-bucol-creme-53",
    "name": "Cetim bucol Creme",
    "category": "Cetim bucol",
    "color": "Creme",
    "price": 50.69,
    "image": "/products/Cetim bucol/Cetim bucol creme .png",
    "description": "Cetim bucol creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-54",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 47.05,
    "image": "/products/Cetim com elastano/Cetim com elastano Magenta.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-azul-55",
    "name": "Cetim com elastano Azul",
    "category": "Cetim com elastano",
    "color": "Azul",
    "price": 50.08,
    "image": "/products/Cetim com elastano/Cetim com elastano azul bebe.png",
    "description": "Cetim com elastano azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-bege-56",
    "name": "Cetim com elastano Bege",
    "category": "Cetim com elastano",
    "color": "Bege",
    "price": 59.63,
    "image": "/products/Cetim com elastano/Cetim com elastano bege.png",
    "description": "Cetim com elastano bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-57",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 50.7,
    "image": "/products/Cetim com elastano/Cetim com elastano chumbo.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-58",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 40.25,
    "image": "/products/Cetim com elastano/Cetim com elastano coral goiaba.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-creme-59",
    "name": "Cetim com elastano Creme",
    "category": "Cetim com elastano",
    "color": "Creme",
    "price": 43.77,
    "image": "/products/Cetim com elastano/Cetim com elastano creme.png",
    "description": "Cetim com elastano creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-dourado-60",
    "name": "Cetim com elastano Dourado",
    "category": "Cetim com elastano",
    "color": "Dourado",
    "price": 58.64,
    "image": "/products/Cetim com elastano/Cetim com elastano dourado.png",
    "description": "Cetim com elastano dourado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-61",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 49.5,
    "image": "/products/Cetim com elastano/Cetim com elastano ferrugem.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-62",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 53.74,
    "image": "/products/Cetim com elastano/Cetim com elastano laranja.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-lil-s-63",
    "name": "Cetim com elastano Lilás",
    "category": "Cetim com elastano",
    "color": "Lilás",
    "price": 53.24,
    "image": "/products/Cetim com elastano/Cetim com elastano lilás.png",
    "description": "Cetim com elastano lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-marrom-64",
    "name": "Cetim com elastano Marrom",
    "category": "Cetim com elastano",
    "color": "Marrom",
    "price": 49.15,
    "image": "/products/Cetim com elastano/Cetim com elastano marrom .png",
    "description": "Cetim com elastano marrom de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-marsala-65",
    "name": "Cetim com elastano Marsala",
    "category": "Cetim com elastano",
    "color": "Marsala",
    "price": 53.67,
    "image": "/products/Cetim com elastano/Cetim com elastano marsala .png",
    "description": "Cetim com elastano marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-prateado-66",
    "name": "Cetim com elastano Prateado",
    "category": "Cetim com elastano",
    "color": "Prateado",
    "price": 42.53,
    "image": "/products/Cetim com elastano/Cetim com elastano prata.png",
    "description": "Cetim com elastano prateado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-preto-67",
    "name": "Cetim com elastano Preto",
    "category": "Cetim com elastano",
    "color": "Preto",
    "price": 58.61,
    "image": "/products/Cetim com elastano/Cetim com elastano preto.png",
    "description": "Cetim com elastano preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-rosa-68",
    "name": "Cetim com elastano Rosa",
    "category": "Cetim com elastano",
    "color": "Rosa",
    "price": 45.73,
    "image": "/products/Cetim com elastano/Cetim com elastano rosa.png",
    "description": "Cetim com elastano rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-ros--69",
    "name": "Cetim com elastano Rosé",
    "category": "Cetim com elastano",
    "color": "Rosé",
    "price": 51.2,
    "image": "/products/Cetim com elastano/Cetim com elastano rose.png",
    "description": "Cetim com elastano rosé de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-salm-o-70",
    "name": "Cetim com elastano Salmão",
    "category": "Cetim com elastano",
    "color": "Salmão",
    "price": 50.97,
    "image": "/products/Cetim com elastano/Cetim com elastano salmon.png",
    "description": "Cetim com elastano salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-71",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 42.78,
    "image": "/products/Cetim com elastano/Cetim com elastano vemelho .png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-verde-72",
    "name": "Cetim com elastano Verde",
    "category": "Cetim com elastano",
    "color": "Verde",
    "price": 54.81,
    "image": "/products/Cetim com elastano/Cetim com elastano verde bandeira.png",
    "description": "Cetim com elastano verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-verde-73",
    "name": "Cetim com elastano Verde",
    "category": "Cetim com elastano",
    "color": "Verde",
    "price": 56.99,
    "image": "/products/Cetim com elastano/Cetim com elastano verde limão.png",
    "description": "Cetim com elastano verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-verde-74",
    "name": "Cetim com elastano Verde",
    "category": "Cetim com elastano",
    "color": "Verde",
    "price": 42.41,
    "image": "/products/Cetim com elastano/Cetim com elastano verde pistache.png",
    "description": "Cetim com elastano verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-75",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 57.24,
    "image": "/products/Cetim com elastano/Cetim com elastano vinho.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-rosa-beb--76",
    "name": "Cetim com elastano Rosa Bebê",
    "category": "Cetim com elastano",
    "color": "Rosa Bebê",
    "price": 57.63,
    "image": "/products/Cetim com elastano/cetim com elastano rosa bebe.png",
    "description": "Cetim com elastano rosa bebê de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-verde-77",
    "name": "Cetim com elastano Verde",
    "category": "Cetim com elastano",
    "color": "Verde",
    "price": 59.13,
    "image": "/products/Cetim com elastano/cetim com elastano verde claro.png",
    "description": "Cetim com elastano verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cetim-com-elastano-natural-78",
    "name": "Cetim com elastano Natural",
    "category": "Cetim com elastano",
    "color": "Natural",
    "price": 49.36,
    "image": "/products/Cetim com elastano/cetim roxo com textura de elastano.png",
    "description": "Cetim com elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "120g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "120g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "courinho-branco-79",
    "name": "Courinho Branco",
    "category": "Courinho",
    "color": "Branco",
    "price": 37.57,
    "image": "/products/Courinho/Courinho branco.png",
    "description": "Courinho branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "courinho-natural-80",
    "name": "Courinho Natural",
    "category": "Courinho",
    "color": "Natural",
    "price": 42.55,
    "image": "/products/Courinho/Courinho caramelo.png",
    "description": "Courinho natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "courinho-ros--81",
    "name": "Courinho Rosé",
    "category": "Courinho",
    "color": "Rosé",
    "price": 34.15,
    "image": "/products/Courinho/Courinho rose.png",
    "description": "Courinho rosé de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salm-o-82",
    "name": "Crepe Salmão",
    "category": "Crepe",
    "color": "Salmão",
    "price": 36.97,
    "image": "/products/Crepe/Crepe Salmon.png",
    "description": "Crepe salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-83",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 47.37,
    "image": "/products/Crepe/Crepe Verde musgo.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-areia-84",
    "name": "Crepe Areia",
    "category": "Crepe",
    "color": "Areia",
    "price": 37.71,
    "image": "/products/Crepe/Crepe areia.png",
    "description": "Crepe areia de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-branco-85",
    "name": "Crepe Branco",
    "category": "Crepe",
    "color": "Branco",
    "price": 37.32,
    "image": "/products/Crepe/Crepe branco.png",
    "description": "Crepe branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-lil-s-86",
    "name": "Crepe Lilás",
    "category": "Crepe",
    "color": "Lilás",
    "price": 45.09,
    "image": "/products/Crepe/Crepe lilas .png",
    "description": "Crepe lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-lil-s-87",
    "name": "Crepe Lilás",
    "category": "Crepe",
    "color": "Lilás",
    "price": 36.46,
    "image": "/products/Crepe/Crepe lilas.png",
    "description": "Crepe lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-88",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 36.33,
    "image": "/products/Crepe/Crepe magenta.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-branco-89",
    "name": "Crepe Branco",
    "category": "Crepe",
    "color": "Branco",
    "price": 42.59,
    "image": "/products/Crepe/Crepe off white.png",
    "description": "Crepe branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-prateado-90",
    "name": "Crepe Prateado",
    "category": "Crepe",
    "color": "Prateado",
    "price": 43.84,
    "image": "/products/Crepe/Crepe prateado.png",
    "description": "Crepe prateado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-preto-91",
    "name": "Crepe Preto",
    "category": "Crepe",
    "color": "Preto",
    "price": 37.46,
    "image": "/products/Crepe/Crepe preto.png",
    "description": "Crepe preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-rosa-beb--92",
    "name": "Crepe Rosa Bebê",
    "category": "Crepe",
    "color": "Rosa Bebê",
    "price": 45.77,
    "image": "/products/Crepe/Crepe rosa bebe.png",
    "description": "Crepe rosa bebê de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-rosa-93",
    "name": "Crepe Rosa",
    "category": "Crepe",
    "color": "Rosa",
    "price": 46.8,
    "image": "/products/Crepe/Crepe rosa musgo.png",
    "description": "Crepe rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-rosa-94",
    "name": "Crepe Rosa",
    "category": "Crepe",
    "color": "Rosa",
    "price": 46.9,
    "image": "/products/Crepe/Crepe rosa.png",
    "description": "Crepe rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-ros--95",
    "name": "Crepe Rosé",
    "category": "Crepe",
    "color": "Rosé",
    "price": 38.1,
    "image": "/products/Crepe/Crepe rose.png",
    "description": "Crepe rosé de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-96",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 47.65,
    "image": "/products/Crepe/Crepe verde agua.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-97",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 48.12,
    "image": "/products/Crepe/Crepe verde bandeira.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-creme-98",
    "name": "Crepe Creme",
    "category": "Crepe",
    "color": "Creme",
    "price": 43.82,
    "image": "/products/Crepe/cambraia creme.png",
    "description": "Crepe creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-amarelo-99",
    "name": "Crepe Amarelo",
    "category": "Crepe",
    "color": "Amarelo",
    "price": 42.57,
    "image": "/products/Crepe/crepe amarelo dourado.png",
    "description": "Crepe amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-amarelo-100",
    "name": "Crepe Amarelo",
    "category": "Crepe",
    "color": "Amarelo",
    "price": 43.19,
    "image": "/products/Crepe/crepe amarelo.png",
    "description": "Crepe amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-azul-101",
    "name": "Crepe Azul",
    "category": "Crepe",
    "color": "Azul",
    "price": 43.87,
    "image": "/products/Crepe/crepe azul Tiffany.png",
    "description": "Crepe azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-azul-102",
    "name": "Crepe Azul",
    "category": "Crepe",
    "color": "Azul",
    "price": 38.5,
    "image": "/products/Crepe/crepe azul marinho.png",
    "description": "Crepe azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-azul-103",
    "name": "Crepe Azul",
    "category": "Crepe",
    "color": "Azul",
    "price": 42.39,
    "image": "/products/Crepe/crepe azul-bebê .png",
    "description": "Crepe azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-azul-104",
    "name": "Crepe Azul",
    "category": "Crepe",
    "color": "Azul",
    "price": 43.61,
    "image": "/products/Crepe/crepe azul.png",
    "description": "Crepe azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-branco-105",
    "name": "Crepe Branco",
    "category": "Crepe",
    "color": "Branco",
    "price": 49.13,
    "image": "/products/Crepe/crepe branco.png",
    "description": "Crepe branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-106",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 45.93,
    "image": "/products/Crepe/crepe coral.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-creme-107",
    "name": "Crepe Creme",
    "category": "Crepe",
    "color": "Creme",
    "price": 39.29,
    "image": "/products/Crepe/crepe creme kiwi.png",
    "description": "Crepe creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-amarelo-108",
    "name": "Crepe Amarelo",
    "category": "Crepe",
    "color": "Amarelo",
    "price": 47.56,
    "image": "/products/Crepe/crepe de musgo amarelo dourado.png",
    "description": "Crepe amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-109",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 46.09,
    "image": "/products/Crepe/crepe de petróleo.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-dourado-110",
    "name": "Crepe Dourado",
    "category": "Crepe",
    "color": "Dourado",
    "price": 45.07,
    "image": "/products/Crepe/crepe dourado.png",
    "description": "Crepe dourado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-111",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 41.36,
    "image": "/products/Crepe/crepe ferrugem.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-112",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 43.94,
    "image": "/products/Crepe/crepe laranja.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-113",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 39.76,
    "image": "/products/Crepe/crepe madame-mousseline.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-marrom-114",
    "name": "Crepe Marrom",
    "category": "Crepe",
    "color": "Marrom",
    "price": 40.46,
    "image": "/products/Crepe/crepe marrom.png",
    "description": "Crepe marrom de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-marsala-115",
    "name": "Crepe Marsala",
    "category": "Crepe",
    "color": "Marsala",
    "price": 45.51,
    "image": "/products/Crepe/crepe marsala.png",
    "description": "Crepe marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-116",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 36.33,
    "image": "/products/Crepe/crepe marsla.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-117",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 45.46,
    "image": "/products/Crepe/crepe mostarda .png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-azul-royal-118",
    "name": "Crepe Azul Royal",
    "category": "Crepe",
    "color": "Azul Royal",
    "price": 37.63,
    "image": "/products/Crepe/crepe musgo azul royal.png",
    "description": "Crepe azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-119",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 41.21,
    "image": "/products/Crepe/crepe musgo laranja.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-preto-120",
    "name": "Crepe Preto",
    "category": "Crepe",
    "color": "Preto",
    "price": 44.37,
    "image": "/products/Crepe/crepe preto  .png",
    "description": "Crepe preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-preto-121",
    "name": "Crepe Preto",
    "category": "Crepe",
    "color": "Preto",
    "price": 42.52,
    "image": "/products/Crepe/crepe preto.png",
    "description": "Crepe preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-rosa-122",
    "name": "Crepe Rosa",
    "category": "Crepe",
    "color": "Rosa",
    "price": 43.37,
    "image": "/products/Crepe/crepe rosa.png",
    "description": "Crepe rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-ros--123",
    "name": "Crepe Rosé",
    "category": "Crepe",
    "color": "Rosé",
    "price": 38.78,
    "image": "/products/Crepe/crepe rose.png",
    "description": "Crepe rosé de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-124",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 47.65,
    "image": "/products/Crepe/crepe terracota.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-natural-125",
    "name": "Crepe Natural",
    "category": "Crepe",
    "color": "Natural",
    "price": 43.6,
    "image": "/products/Crepe/crepe turquesa.png",
    "description": "Crepe natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-126",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 41.43,
    "image": "/products/Crepe/crepe verde bandeira.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-127",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 44.92,
    "image": "/products/Crepe/crepe verde musgo.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-128",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 43.43,
    "image": "/products/Crepe/crepe verde pistache.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-129",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 46.35,
    "image": "/products/Crepe/crepe verde-bandeira.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-verde-130",
    "name": "Crepe Verde",
    "category": "Crepe",
    "color": "Verde",
    "price": 39.79,
    "image": "/products/Crepe/crepe verde-musgo.png",
    "description": "Crepe verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-vermelho-131",
    "name": "Crepe Vermelho",
    "category": "Crepe",
    "color": "Vermelho",
    "price": 46.53,
    "image": "/products/Crepe/crepe vermelho.png",
    "description": "Crepe vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-dourado-132",
    "name": "Crepe Dourado",
    "category": "Crepe",
    "color": "Dourado",
    "price": 47.34,
    "image": "/products/Crepe/lo de crepe dourado .png",
    "description": "Crepe dourado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-dayane-branco-133",
    "name": "Crepe Dayane Branco",
    "category": "Crepe Dayane",
    "color": "Branco",
    "price": 44.45,
    "image": "/products/Crepe Dayane/Crepe Dayane branco.png",
    "description": "Crepe Dayane branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-chanel-amarelo-134",
    "name": "Crepe chanel Amarelo",
    "category": "Crepe chanel",
    "color": "Amarelo",
    "price": 38.31,
    "image": "/products/Crepe chanel/Crepe chanel  amarelo.png",
    "description": "Crepe chanel amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-chanel-lil-s-135",
    "name": "Crepe chanel Lilás",
    "category": "Crepe chanel",
    "color": "Lilás",
    "price": 43.43,
    "image": "/products/Crepe chanel/Crepe chanel  lilas.png",
    "description": "Crepe chanel lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-chanel-cinza-136",
    "name": "Crepe chanel Cinza",
    "category": "Crepe chanel",
    "color": "Cinza",
    "price": 39.83,
    "image": "/products/Crepe chanel/Crepe chanel cinza claro.png",
    "description": "Crepe chanel cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-chanel-vermelho-137",
    "name": "Crepe chanel Vermelho",
    "category": "Crepe chanel",
    "color": "Vermelho",
    "price": 35.84,
    "image": "/products/Crepe chanel/crepe chanel vermelho.png",
    "description": "Crepe chanel vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-lil-s-138",
    "name": "Crepe georgete Lilás",
    "category": "Crepe georgete",
    "color": "Lilás",
    "price": 38.43,
    "image": "/products/Crepe georgete/Crepe georgete lilas.png",
    "description": "Crepe georgete lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-rosa-139",
    "name": "Crepe georgete Rosa",
    "category": "Crepe georgete",
    "color": "Rosa",
    "price": 36.01,
    "image": "/products/Crepe georgete/Crepe georgete rosa.png",
    "description": "Crepe georgete rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-natural-140",
    "name": "Crepe georgete Natural",
    "category": "Crepe georgete",
    "color": "Natural",
    "price": 44.49,
    "image": "/products/Crepe georgete/Crepe georgete roxo.png",
    "description": "Crepe georgete natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-verde-141",
    "name": "Crepe georgete Verde",
    "category": "Crepe georgete",
    "color": "Verde",
    "price": 44.16,
    "image": "/products/Crepe georgete/Crepe georgete verde.png",
    "description": "Crepe georgete verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-vermelho-142",
    "name": "Crepe georgete Vermelho",
    "category": "Crepe georgete",
    "color": "Vermelho",
    "price": 46.21,
    "image": "/products/Crepe georgete/Crepe georgete vermelho.png",
    "description": "Crepe georgete vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-amarelo-143",
    "name": "Crepe georgete Amarelo",
    "category": "Crepe georgete",
    "color": "Amarelo",
    "price": 40.39,
    "image": "/products/Crepe georgete/crepe georgette amarelo.png",
    "description": "Crepe georgete amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-bege-144",
    "name": "Crepe georgete Bege",
    "category": "Crepe georgete",
    "color": "Bege",
    "price": 43.24,
    "image": "/products/Crepe georgete/crepe georgette bege.png",
    "description": "Crepe georgete bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-natural-145",
    "name": "Crepe georgete Natural",
    "category": "Crepe georgete",
    "color": "Natural",
    "price": 41.48,
    "image": "/products/Crepe georgete/crepe georgette laranja.png",
    "description": "Crepe georgete natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-preto-146",
    "name": "Crepe georgete Preto",
    "category": "Crepe georgete",
    "color": "Preto",
    "price": 36.6,
    "image": "/products/Crepe georgete/crepe georgette preto.png",
    "description": "Crepe georgete preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-rosa-147",
    "name": "Crepe georgete Rosa",
    "category": "Crepe georgete",
    "color": "Rosa",
    "price": 38.56,
    "image": "/products/Crepe georgete/crepe georgette rosa.png",
    "description": "Crepe georgete rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-salm-o-148",
    "name": "Crepe georgete Salmão",
    "category": "Crepe georgete",
    "color": "Salmão",
    "price": 37.36,
    "image": "/products/Crepe georgete/crepe georgette salmão.png",
    "description": "Crepe georgete salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-georgete-natural-149",
    "name": "Crepe georgete Natural",
    "category": "Crepe georgete",
    "color": "Natural",
    "price": 36.96,
    "image": "/products/Crepe georgete/crepe georgette turquesa .png",
    "description": "Crepe georgete natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-branco-150",
    "name": "Crepe imaculado Branco",
    "category": "Crepe imaculado",
    "color": "Branco",
    "price": 46.27,
    "image": "/products/Crepe imaculado/crepe branco imaculado.png",
    "description": "Crepe imaculado branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-amarelo-151",
    "name": "Crepe imaculado Amarelo",
    "category": "Crepe imaculado",
    "color": "Amarelo",
    "price": 44.47,
    "image": "/products/Crepe imaculado/crepe imaculado amarelo.png",
    "description": "Crepe imaculado amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-bege-152",
    "name": "Crepe imaculado Bege",
    "category": "Crepe imaculado",
    "color": "Bege",
    "price": 48.28,
    "image": "/products/Crepe imaculado/crepe imaculado bege.png",
    "description": "Crepe imaculado bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-cinza-153",
    "name": "Crepe imaculado Cinza",
    "category": "Crepe imaculado",
    "color": "Cinza",
    "price": 45.83,
    "image": "/products/Crepe imaculado/crepe imaculado cinza e prata.png",
    "description": "Crepe imaculado cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-natural-154",
    "name": "Crepe imaculado Natural",
    "category": "Crepe imaculado",
    "color": "Natural",
    "price": 45.03,
    "image": "/products/Crepe imaculado/crepe imaculado magenta.png",
    "description": "Crepe imaculado natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-rosa-155",
    "name": "Crepe imaculado Rosa",
    "category": "Crepe imaculado",
    "color": "Rosa",
    "price": 49.33,
    "image": "/products/Crepe imaculado/crepe imaculado rosa.png",
    "description": "Crepe imaculado rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-imaculado-tiffany-156",
    "name": "Crepe imaculado Tiffany",
    "category": "Crepe imaculado",
    "color": "Tiffany",
    "price": 39.29,
    "image": "/products/Crepe imaculado/crepe imaculado tiffany.png",
    "description": "Crepe imaculado tiffany de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-marroquino-verde-157",
    "name": "Crepe marroquino Verde",
    "category": "Crepe marroquino",
    "color": "Verde",
    "price": 40.96,
    "image": "/products/Crepe marroquino/Crepe marroquino verde bandeira.png",
    "description": "Crepe marroquino verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-marroquino-prateado-158",
    "name": "Crepe marroquino Prateado",
    "category": "Crepe marroquino",
    "color": "Prateado",
    "price": 46.48,
    "image": "/products/Crepe marroquino/Crepe prateado.png",
    "description": "Crepe marroquino prateado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-marroquino-marsala-159",
    "name": "Crepe marroquino Marsala",
    "category": "Crepe marroquino",
    "color": "Marsala",
    "price": 46.58,
    "image": "/products/Crepe marroquino/crepe marroquino marsala.png",
    "description": "Crepe marroquino marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "gabardine-cinza-160",
    "name": "Gabardine Cinza",
    "category": "Gabardine",
    "color": "Cinza",
    "price": 43.76,
    "image": "/products/Gabardine/gabardine cinza.png",
    "description": "Gabardine cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "gabardine-preto-161",
    "name": "Gabardine Preto",
    "category": "Gabardine",
    "color": "Preto",
    "price": 42.12,
    "image": "/products/Gabardine/gabardine preto.png",
    "description": "Gabardine preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "gabardine-verde-162",
    "name": "Gabardine Verde",
    "category": "Gabardine",
    "color": "Verde",
    "price": 44.78,
    "image": "/products/Gabardine/gabardine verde-musgo.png",
    "description": "Gabardine verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "hambret-cinza-163",
    "name": "Hambret Cinza",
    "category": "Hambret",
    "color": "Cinza",
    "price": 40.01,
    "image": "/products/Hambret/Hambret cinza.png",
    "description": "Hambret cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "jackard-preto-164",
    "name": "Jackard Preto",
    "category": "Jackard",
    "color": "Preto",
    "price": 38.91,
    "image": "/products/Jackard/Jackard preto .png",
    "description": "Jackard preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "jackard-vermelho-165",
    "name": "Jackard Vermelho",
    "category": "Jackard",
    "color": "Vermelho",
    "price": 44.63,
    "image": "/products/Jackard/Jackard vermelho.png",
    "description": "Jackard vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-amarelo-166",
    "name": "Liocel Amarelo",
    "category": "Liocel",
    "color": "Amarelo",
    "price": 39.17,
    "image": "/products/Liocel/Liocel amarelo dourado.png",
    "description": "Liocel amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-azul-royal-167",
    "name": "Liocel Azul Royal",
    "category": "Liocel",
    "color": "Azul Royal",
    "price": 46.93,
    "image": "/products/Liocel/Liocel azul royal.png",
    "description": "Liocel azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-branco-168",
    "name": "Liocel Branco",
    "category": "Liocel",
    "color": "Branco",
    "price": 30.07,
    "image": "/products/Liocel/Liocel branco.png",
    "description": "Liocel branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-lil-s-169",
    "name": "Liocel Lilás",
    "category": "Liocel",
    "color": "Lilás",
    "price": 32.02,
    "image": "/products/Liocel/Liocel lilás.png",
    "description": "Liocel lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-preto-170",
    "name": "Liocel Preto",
    "category": "Liocel",
    "color": "Preto",
    "price": 32.88,
    "image": "/products/Liocel/Liocel preto.png",
    "description": "Liocel preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-verde-171",
    "name": "Liocel Verde",
    "category": "Liocel",
    "color": "Verde",
    "price": 33.19,
    "image": "/products/Liocel/Liocel verde bandeira.png",
    "description": "Liocel verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "liocel-vermelho-172",
    "name": "Liocel Vermelho",
    "category": "Liocel",
    "color": "Vermelho",
    "price": 39.02,
    "image": "/products/Liocel/Liocel vermelho.png",
    "description": "Liocel vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-natural-173",
    "name": "Malha Natural",
    "category": "Malha",
    "color": "Natural",
    "price": 34.55,
    "image": "/products/Malha/malha amarela.png",
    "description": "Malha natural de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-azul-174",
    "name": "Malha Azul",
    "category": "Malha",
    "color": "Azul",
    "price": 38.78,
    "image": "/products/Malha/malha azul bebê .png",
    "description": "Malha azul de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-azul-175",
    "name": "Malha Azul",
    "category": "Malha",
    "color": "Azul",
    "price": 27.42,
    "image": "/products/Malha/malha azul petróleo.png",
    "description": "Malha azul de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-azul-royal-176",
    "name": "Malha Azul Royal",
    "category": "Malha",
    "color": "Azul Royal",
    "price": 38.97,
    "image": "/products/Malha/malha azul royal .png",
    "description": "Malha azul royal de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-natural-177",
    "name": "Malha Natural",
    "category": "Malha",
    "color": "Natural",
    "price": 32.34,
    "image": "/products/Malha/malha cor de goiaba.png",
    "description": "Malha natural de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-lil-s-178",
    "name": "Malha Lilás",
    "category": "Malha",
    "color": "Lilás",
    "price": 34.27,
    "image": "/products/Malha/malha lilás.png",
    "description": "Malha lilás de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-natural-179",
    "name": "Malha Natural",
    "category": "Malha",
    "color": "Natural",
    "price": 39.61,
    "image": "/products/Malha/malha pink.png",
    "description": "Malha natural de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-rosa-beb--180",
    "name": "Malha Rosa Bebê",
    "category": "Malha",
    "color": "Rosa Bebê",
    "price": 27.24,
    "image": "/products/Malha/malha rosa bebê.png",
    "description": "Malha rosa bebê de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-rosa-181",
    "name": "Malha Rosa",
    "category": "Malha",
    "color": "Rosa",
    "price": 28.86,
    "image": "/products/Malha/malha rosa.png",
    "description": "Malha rosa de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-verde-182",
    "name": "Malha Verde",
    "category": "Malha",
    "color": "Verde",
    "price": 39.4,
    "image": "/products/Malha/malha verde bandeira.png",
    "description": "Malha verde de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "malha-verde-183",
    "name": "Malha Verde",
    "category": "Malha",
    "color": "Verde",
    "price": 35.72,
    "image": "/products/Malha/malha verde-água.png",
    "description": "Malha verde de alta qualidade. Composição em 95% Algodão, 5% Elastano para máximo conforto e durabilidade.",
    "material": "95% Algodão, 5% Elastano",
    "width": "1,50m",
    "weight": "180g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "95% Algodão, 5% Elastano",
      "width": "1,50m",
      "weight": "180g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-branco-184",
    "name": "Neoprene Branco",
    "category": "Neoprene",
    "color": "Branco",
    "price": 34.5,
    "image": "/products/Neoprene/Neopreme branco.png",
    "description": "Neoprene branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-amarelo-185",
    "name": "Neoprene Amarelo",
    "category": "Neoprene",
    "color": "Amarelo",
    "price": 34.55,
    "image": "/products/Neoprene/neopreme amarelo.png",
    "description": "Neoprene amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-azul-186",
    "name": "Neoprene Azul",
    "category": "Neoprene",
    "color": "Azul",
    "price": 39.89,
    "image": "/products/Neoprene/neopreme azul bebe.png",
    "description": "Neoprene azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-cinza-187",
    "name": "Neoprene Cinza",
    "category": "Neoprene",
    "color": "Cinza",
    "price": 48.88,
    "image": "/products/Neoprene/neopreme cinza tecido.png",
    "description": "Neoprene cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-cinza-188",
    "name": "Neoprene Cinza",
    "category": "Neoprene",
    "color": "Cinza",
    "price": 33.66,
    "image": "/products/Neoprene/neopreme cinza.png",
    "description": "Neoprene cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-rosa-189",
    "name": "Neoprene Rosa",
    "category": "Neoprene",
    "color": "Rosa",
    "price": 30.77,
    "image": "/products/Neoprene/neopreme rosa.png",
    "description": "Neoprene rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "neoprene-vermelho-190",
    "name": "Neoprene Vermelho",
    "category": "Neoprene",
    "color": "Vermelho",
    "price": 34.76,
    "image": "/products/Neoprene/neopreme vermelho.png",
    "description": "Neoprene vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "oxford-bege-191",
    "name": "Oxford Bege",
    "category": "Oxford",
    "color": "Bege",
    "price": 28.55,
    "image": "/products/Oxford /Oxford bege.png",
    "description": "Oxford bege de alta qualidade. Composição em 100% Algodão para máximo conforto e durabilidade.",
    "material": "100% Algodão",
    "width": "1,50m",
    "weight": "200g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Algodão",
      "width": "1,50m",
      "weight": "200g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "oxford-natural-192",
    "name": "Oxford Natural",
    "category": "Oxford",
    "color": "Natural",
    "price": 27.61,
    "image": "/products/Oxford /Oxford cor de ferrugem.png",
    "description": "Oxford natural de alta qualidade. Composição em 100% Algodão para máximo conforto e durabilidade.",
    "material": "100% Algodão",
    "width": "1,50m",
    "weight": "200g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Algodão",
      "width": "1,50m",
      "weight": "200g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "oxford-rosa-193",
    "name": "Oxford Rosa",
    "category": "Oxford",
    "color": "Rosa",
    "price": 26.33,
    "image": "/products/Oxford /Oxford rosa.png",
    "description": "Oxford rosa de alta qualidade. Composição em 100% Algodão para máximo conforto e durabilidade.",
    "material": "100% Algodão",
    "width": "1,50m",
    "weight": "200g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Algodão",
      "width": "1,50m",
      "weight": "200g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "sarja-elastano-cinza-194",
    "name": "Sarja Elastano Cinza",
    "category": "Sarja Elastano",
    "color": "Cinza",
    "price": 48.69,
    "image": "/products/Sarja Elastano/Sarja Elastano cinza claro.png",
    "description": "Sarja Elastano cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "sarja-elastano-marrom-195",
    "name": "Sarja Elastano Marrom",
    "category": "Sarja Elastano",
    "color": "Marrom",
    "price": 41.26,
    "image": "/products/Sarja Elastano/Sarja Elastano marrom.png",
    "description": "Sarja Elastano marrom de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "sarja-elastano-natural-196",
    "name": "Sarja Elastano Natural",
    "category": "Sarja Elastano",
    "color": "Natural",
    "price": 30.15,
    "image": "/products/Sarja Elastano/Sarja Elastano tiggany.png",
    "description": "Sarja Elastano natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "sarja-elastano-verde-197",
    "name": "Sarja Elastano Verde",
    "category": "Sarja Elastano",
    "color": "Verde",
    "price": 37.85,
    "image": "/products/Sarja Elastano/Sarja Elastano verde abacate.png",
    "description": "Sarja Elastano verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "sarja-elastano-verde-198",
    "name": "Sarja Elastano Verde",
    "category": "Sarja Elastano",
    "color": "Verde",
    "price": 36.7,
    "image": "/products/Sarja Elastano/Sarja Elastano verde erva doce.png",
    "description": "Sarja Elastano verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "suplex-lil-s-199",
    "name": "Suplex Lilás",
    "category": "Suplex",
    "color": "Lilás",
    "price": 49.47,
    "image": "/products/Suplex/suplex lilas.png",
    "description": "Suplex lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-natural-200",
    "name": "TNT Natural",
    "category": "TNT",
    "color": "Natural",
    "price": 22.33,
    "image": "/products/TNT/TNT Ouro.png",
    "description": "TNT natural de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-azul-201",
    "name": "TNT Azul",
    "category": "TNT",
    "color": "Azul",
    "price": 22.08,
    "image": "/products/TNT/TNT azul bebe .png",
    "description": "TNT azul de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-branco-202",
    "name": "TNT Branco",
    "category": "TNT",
    "color": "Branco",
    "price": 21.74,
    "image": "/products/TNT/TNT branco.png",
    "description": "TNT branco de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-natural-203",
    "name": "TNT Natural",
    "category": "TNT",
    "color": "Natural",
    "price": 15.96,
    "image": "/products/TNT/TNT laranja.png",
    "description": "TNT natural de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-marrom-204",
    "name": "TNT Marrom",
    "category": "TNT",
    "color": "Marrom",
    "price": 21.71,
    "image": "/products/TNT/TNT marrom.png",
    "description": "TNT marrom de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-preto-205",
    "name": "TNT Preto",
    "category": "TNT",
    "color": "Preto",
    "price": 23.11,
    "image": "/products/TNT/TNT preto.png",
    "description": "TNT preto de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-natural-206",
    "name": "TNT Natural",
    "category": "TNT",
    "color": "Natural",
    "price": 19.89,
    "image": "/products/TNT/TNT turquesa.png",
    "description": "TNT natural de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-verde-207",
    "name": "TNT Verde",
    "category": "TNT",
    "color": "Verde",
    "price": 22.96,
    "image": "/products/TNT/TNT verde.png",
    "description": "TNT verde de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tnt-vermelho-208",
    "name": "TNT Vermelho",
    "category": "TNT",
    "color": "Vermelho",
    "price": 16.13,
    "image": "/products/TNT/TNT vermelho.png",
    "description": "TNT vermelho de alta qualidade. Composição em 100% Polipropileno para máximo conforto e durabilidade.",
    "material": "100% Polipropileno",
    "width": "1,50m",
    "weight": "40g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Polipropileno",
      "width": "1,50m",
      "weight": "40g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-leonilda-cinza-209",
    "name": "Tafeta leonilda Cinza",
    "category": "Tafeta leonilda",
    "color": "Cinza",
    "price": 37.43,
    "image": "/products/Tafeta leonilda /Tafeta leonilda cinza.png",
    "description": "Tafeta leonilda cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-azul-210",
    "name": "Tulle Azul",
    "category": "Tulle",
    "color": "Azul",
    "price": 34.13,
    "image": "/products/Tulle/Tulle azul.png",
    "description": "Tulle azul de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-preto-211",
    "name": "Tulle Preto",
    "category": "Tulle",
    "color": "Preto",
    "price": 25.76,
    "image": "/products/Tulle/Tulle preto.png",
    "description": "Tulle preto de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-rosa-beb--212",
    "name": "Tulle Rosa Bebê",
    "category": "Tulle",
    "color": "Rosa Bebê",
    "price": 34.62,
    "image": "/products/Tulle/Tulle rosa bebe.png",
    "description": "Tulle rosa bebê de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-rosa-213",
    "name": "Tulle Rosa",
    "category": "Tulle",
    "color": "Rosa",
    "price": 32.2,
    "image": "/products/Tulle/Tulle rosa.png",
    "description": "Tulle rosa de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-verde-214",
    "name": "Tulle Verde",
    "category": "Tulle",
    "color": "Verde",
    "price": 28.56,
    "image": "/products/Tulle/Tulle verde fluorescente.png",
    "description": "Tulle verde de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-verde-215",
    "name": "Tulle Verde",
    "category": "Tulle",
    "color": "Verde",
    "price": 29.71,
    "image": "/products/Tulle/Tulle verde turquesa.png",
    "description": "Tulle verde de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-marrom-216",
    "name": "Tulle Marrom",
    "category": "Tulle",
    "color": "Marrom",
    "price": 28.41,
    "image": "/products/Tulle/tulle marrom.png",
    "description": "Tulle marrom de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-preto-217",
    "name": "Tulle Preto",
    "category": "Tulle",
    "color": "Preto",
    "price": 27.34,
    "image": "/products/Tulle/tulle preto tecido.png",
    "description": "Tulle preto de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tulle-vermelho-218",
    "name": "Tulle Vermelho",
    "category": "Tulle",
    "color": "Vermelho",
    "price": 24.29,
    "image": "/products/Tulle/tulle vermelho.png",
    "description": "Tulle vermelho de alta qualidade. Composição em 100% Nylon para máximo conforto e durabilidade.",
    "material": "100% Nylon",
    "width": "1,50m",
    "weight": "50g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Nylon",
      "width": "1,50m",
      "weight": "50g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "two-way-bege-219",
    "name": "Two way Bege",
    "category": "Two way",
    "color": "Bege",
    "price": 44.62,
    "image": "/products/Two way/Two way bege.png",
    "description": "Two way bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "two-way-ros--220",
    "name": "Two way Rosé",
    "category": "Two way",
    "color": "Rosé",
    "price": 37.94,
    "image": "/products/Two way/Two way rose.png",
    "description": "Two way rosé de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "two-way-verde-221",
    "name": "Two way Verde",
    "category": "Two way",
    "color": "Verde",
    "price": 40.95,
    "image": "/products/Two way/Two way verde claro.png",
    "description": "Two way verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "veludo-azul-222",
    "name": "Veludo Azul",
    "category": "Veludo",
    "color": "Azul",
    "price": 56.52,
    "image": "/products/Veludo/Veludo azul marinho.png",
    "description": "Veludo azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "300g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "300g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "veludo-preto-223",
    "name": "Veludo Preto",
    "category": "Veludo",
    "color": "Preto",
    "price": 55.02,
    "image": "/products/Veludo/veludo preto.png",
    "description": "Veludo preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "300g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "300g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "veludo-vermelho-224",
    "name": "Veludo Vermelho",
    "category": "Veludo",
    "color": "Vermelho",
    "price": 56.08,
    "image": "/products/Veludo/veludo vermelho.png",
    "description": "Veludo vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "300g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "300g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "vinil-azul-225",
    "name": "Vinil Azul",
    "category": "Vinil",
    "color": "Azul",
    "price": 40.92,
    "image": "/products/Vinil/vinil azul bebe.png",
    "description": "Vinil azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "vinil-natural-226",
    "name": "Vinil Natural",
    "category": "Vinil",
    "color": "Natural",
    "price": 31.06,
    "image": "/products/Vinil/vinil marinho.png",
    "description": "Vinil natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "vinil-verde-227",
    "name": "Vinil Verde",
    "category": "Vinil",
    "color": "Verde",
    "price": 31.01,
    "image": "/products/Vinil/vinil verde.png",
    "description": "Vinil verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "vinil-natural-228",
    "name": "Vinil Natural",
    "category": "Vinil",
    "color": "Natural",
    "price": 31.65,
    "image": "/products/Vinil/vinil vinho.png",
    "description": "Vinil natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "vinil-natural-229",
    "name": "Vinil Natural",
    "category": "Vinil",
    "color": "Natural",
    "price": 45.7,
    "image": "/products/Vinil/vinil.png",
    "description": "Vinil natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-230",
    "name": "Viscose Azul",
    "category": "Viscose",
    "color": "Azul",
    "price": 44.01,
    "image": "/products/Viscose/Viscone azul marinho.png",
    "description": "Viscose azul de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-cinza-231",
    "name": "Viscose Cinza",
    "category": "Viscose",
    "color": "Cinza",
    "price": 41.08,
    "image": "/products/Viscose/Viscone cinza.png",
    "description": "Viscose cinza de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-creme-232",
    "name": "Viscose Creme",
    "category": "Viscose",
    "color": "Creme",
    "price": 38.56,
    "image": "/products/Viscose/Viscone creme.png",
    "description": "Viscose creme de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-natural-233",
    "name": "Viscose Natural",
    "category": "Viscose",
    "color": "Natural",
    "price": 39.56,
    "image": "/products/Viscose/Viscone laranja tecido.png",
    "description": "Viscose natural de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-lil-s-234",
    "name": "Viscose Lilás",
    "category": "Viscose",
    "color": "Lilás",
    "price": 37.73,
    "image": "/products/Viscose/Viscone lilas tecido.png",
    "description": "Viscose lilás de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-marrom-235",
    "name": "Viscose Marrom",
    "category": "Viscose",
    "color": "Marrom",
    "price": 44.2,
    "image": "/products/Viscose/Viscone marrom.png",
    "description": "Viscose marrom de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-marsala-236",
    "name": "Viscose Marsala",
    "category": "Viscose",
    "color": "Marsala",
    "price": 39.09,
    "image": "/products/Viscose/Viscone marsala.png",
    "description": "Viscose marsala de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-rosa-beb--237",
    "name": "Viscose Rosa Bebê",
    "category": "Viscose",
    "color": "Rosa Bebê",
    "price": 43.36,
    "image": "/products/Viscose/Viscone rosa bebe.png",
    "description": "Viscose rosa bebê de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-rosa-238",
    "name": "Viscose Rosa",
    "category": "Viscose",
    "color": "Rosa",
    "price": 39.49,
    "image": "/products/Viscose/Viscone rosa.png",
    "description": "Viscose rosa de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-ros--239",
    "name": "Viscose Rosé",
    "category": "Viscose",
    "color": "Rosé",
    "price": 38.57,
    "image": "/products/Viscose/Viscone rose.png",
    "description": "Viscose rosé de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-royal-240",
    "name": "Viscose Azul Royal",
    "category": "Viscose",
    "color": "Azul Royal",
    "price": 42.08,
    "image": "/products/Viscose/Viscose Royal azul.png",
    "description": "Viscose azul royal de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-amarelo-241",
    "name": "Viscose Amarelo",
    "category": "Viscose",
    "color": "Amarelo",
    "price": 40.72,
    "image": "/products/Viscose/Viscose amarelo ouro.png",
    "description": "Viscose amarelo de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-242",
    "name": "Viscose Azul",
    "category": "Viscose",
    "color": "Azul",
    "price": 36.61,
    "image": "/products/Viscose/Viscose azul petroleo.png",
    "description": "Viscose azul de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-bege-243",
    "name": "Viscose Bege",
    "category": "Viscose",
    "color": "Bege",
    "price": 43.2,
    "image": "/products/Viscose/Viscose bege.png",
    "description": "Viscose bege de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-natural-244",
    "name": "Viscose Natural",
    "category": "Viscose",
    "color": "Natural",
    "price": 41.67,
    "image": "/products/Viscose/Viscose laranja.png",
    "description": "Viscose natural de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-lil-s-245",
    "name": "Viscose Lilás",
    "category": "Viscose",
    "color": "Lilás",
    "price": 40.66,
    "image": "/products/Viscose/Viscose lilas roxo.png",
    "description": "Viscose lilás de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-natural-246",
    "name": "Viscose Natural",
    "category": "Viscose",
    "color": "Natural",
    "price": 39.78,
    "image": "/products/Viscose/Viscose mostarda.png",
    "description": "Viscose natural de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-rosa-247",
    "name": "Viscose Rosa",
    "category": "Viscose",
    "color": "Rosa",
    "price": 41.65,
    "image": "/products/Viscose/Viscose rosa chiclete.png",
    "description": "Viscose rosa de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-rosa-248",
    "name": "Viscose Rosa",
    "category": "Viscose",
    "color": "Rosa",
    "price": 41.44,
    "image": "/products/Viscose/Viscose rosa.png",
    "description": "Viscose rosa de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-verde-249",
    "name": "Viscose Verde",
    "category": "Viscose",
    "color": "Verde",
    "price": 37.96,
    "image": "/products/Viscose/Viscose verde..png",
    "description": "Viscose verde de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-verde-250",
    "name": "Viscose Verde",
    "category": "Viscose",
    "color": "Verde",
    "price": 40.01,
    "image": "/products/Viscose/Viscose verde.png",
    "description": "Viscose verde de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-vermelho-251",
    "name": "Viscose Vermelho",
    "category": "Viscose",
    "color": "Vermelho",
    "price": 38.48,
    "image": "/products/Viscose/Viscose vermelho tecido.png",
    "description": "Viscose vermelho de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-vermelho-252",
    "name": "Viscose Vermelho",
    "category": "Viscose",
    "color": "Vermelho",
    "price": 35.04,
    "image": "/products/Viscose/Viscose vermelho.png",
    "description": "Viscose vermelho de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-preto-253",
    "name": "Viscose Preto",
    "category": "Viscose",
    "color": "Preto",
    "price": 36.37,
    "image": "/products/Viscose/tulle preto.png",
    "description": "Viscose preto de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-254",
    "name": "Viscose Azul",
    "category": "Viscose",
    "color": "Azul",
    "price": 44.6,
    "image": "/products/Viscose/viscone azul pertoleo tecido.png",
    "description": "Viscose azul de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-rosa-255",
    "name": "Viscose Rosa",
    "category": "Viscose",
    "color": "Rosa",
    "price": 37.8,
    "image": "/products/Viscose/viscone rosa tecido.png",
    "description": "Viscose rosa de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-256",
    "name": "Viscose Azul",
    "category": "Viscose",
    "color": "Azul",
    "price": 36.25,
    "image": "/products/Viscose/viscose azul .png",
    "description": "Viscose azul de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-257",
    "name": "Viscose Azul",
    "category": "Viscose",
    "color": "Azul",
    "price": 43.35,
    "image": "/products/Viscose/viscose azul Tiffany.png",
    "description": "Viscose azul de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-azul-258",
    "name": "Viscose Azul",
    "category": "Viscose",
    "color": "Azul",
    "price": 37.62,
    "image": "/products/Viscose/viscose azul-bebê.png",
    "description": "Viscose azul de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-cinza-259",
    "name": "Viscose Cinza",
    "category": "Viscose",
    "color": "Cinza",
    "price": 39.11,
    "image": "/products/Viscose/viscose cinza claro.png",
    "description": "Viscose cinza de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-natural-260",
    "name": "Viscose Natural",
    "category": "Viscose",
    "color": "Natural",
    "price": 38.81,
    "image": "/products/Viscose/viscose turquesa.png",
    "description": "Viscose natural de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-verde-261",
    "name": "Viscose Verde",
    "category": "Viscose",
    "color": "Verde",
    "price": 41.15,
    "image": "/products/Viscose/viscose verde-água.png",
    "description": "Viscose verde de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "voal-azul-262",
    "name": "Voal Azul",
    "category": "Voal",
    "color": "Azul",
    "price": 39.09,
    "image": "/products/Voal/voal azul bebe.png",
    "description": "Voal azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "voal-natural-263",
    "name": "Voal Natural",
    "category": "Voal",
    "color": "Natural",
    "price": 42.05,
    "image": "/products/Voal/voal mostarda .png",
    "description": "Voal natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "atoalhado-branco-264",
    "name": "atoalhado Branco",
    "category": "atoalhado",
    "color": "Branco",
    "price": 40.31,
    "image": "/products/atoalhado/atoalhado branco.png",
    "description": "atoalhado branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "atoalhado-preto-265",
    "name": "atoalhado Preto",
    "category": "atoalhado",
    "color": "Preto",
    "price": 48.13,
    "image": "/products/atoalhado/atoalhado preto.png",
    "description": "atoalhado preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "atoalhado-rosa-beb--266",
    "name": "atoalhado Rosa Bebê",
    "category": "atoalhado",
    "color": "Rosa Bebê",
    "price": 35.1,
    "image": "/products/atoalhado/atoalhado rosa bebe.png",
    "description": "atoalhado rosa bebê de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "atoalhado-rosa-267",
    "name": "atoalhado Rosa",
    "category": "atoalhado",
    "color": "Rosa",
    "price": 43.43,
    "image": "/products/atoalhado/atoalhado rosa.png",
    "description": "atoalhado rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "bidirecional-natural-268",
    "name": "bidirecional Natural",
    "category": "bidirecional",
    "color": "Natural",
    "price": 39.02,
    "image": "/products/bidirecional/elástico bidirecional cor de goiaba.png",
    "description": "bidirecional natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cambraia-amarelo-269",
    "name": "cambraia Amarelo",
    "category": "cambraia",
    "color": "Amarelo",
    "price": 31.76,
    "image": "/products/cambraia /cambraia amarelo-dourado.png",
    "description": "cambraia amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "cambraia-natural-270",
    "name": "cambraia Natural",
    "category": "cambraia",
    "color": "Natural",
    "price": 31.71,
    "image": "/products/cambraia /cambraia turquesa.png",
    "description": "cambraia natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "canelada-natural-271",
    "name": "canelada Natural",
    "category": "canelada",
    "color": "Natural",
    "price": 40.93,
    "image": "/products/canelada/branca canelada .png",
    "description": "canelada natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "canelada-bege-272",
    "name": "canelada Bege",
    "category": "canelada",
    "color": "Bege",
    "price": 43.2,
    "image": "/products/canelada/malha canelada bege .png",
    "description": "canelada bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "canelada-natural-273",
    "name": "canelada Natural",
    "category": "canelada",
    "color": "Natural",
    "price": 32.03,
    "image": "/products/canelada/malha canelada magenta.png",
    "description": "canelada natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "canelada-natural-274",
    "name": "canelada Natural",
    "category": "canelada",
    "color": "Natural",
    "price": 35.3,
    "image": "/products/canelada/malha canelada preta.png",
    "description": "canelada natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "canelada-verde-275",
    "name": "canelada Verde",
    "category": "canelada",
    "color": "Verde",
    "price": 42.71,
    "image": "/products/canelada/malha canelada verde.png",
    "description": "canelada verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-haya-amarelo-276",
    "name": "crepe haya Amarelo",
    "category": "crepe haya",
    "color": "Amarelo",
    "price": 43.05,
    "image": "/products/crepe haya/Crepe haya elastano amarelo.png",
    "description": "crepe haya amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-irizado-amarelo-277",
    "name": "crepe irizado Amarelo",
    "category": "crepe irizado",
    "color": "Amarelo",
    "price": 45.71,
    "image": "/products/crepe irizado/Crepe irizado amarelo.png",
    "description": "crepe irizado amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-irizado-verde-278",
    "name": "crepe irizado Verde",
    "category": "crepe irizado",
    "color": "Verde",
    "price": 36.29,
    "image": "/products/crepe irizado/Crepe irizado verde pistache.png",
    "description": "crepe irizado verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-amarelo-279",
    "name": "crepe salina Amarelo",
    "category": "crepe salina",
    "color": "Amarelo",
    "price": 46.24,
    "image": "/products/crepe salina /crepe amarelo salina.png",
    "description": "crepe salina amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-preto-280",
    "name": "crepe salina Preto",
    "category": "crepe salina",
    "color": "Preto",
    "price": 41.65,
    "image": "/products/crepe salina /crepe preto salina.png",
    "description": "crepe salina preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-azul-281",
    "name": "crepe salina Azul",
    "category": "crepe salina",
    "color": "Azul",
    "price": 37.27,
    "image": "/products/crepe salina /crepe salina azul Tiffany.png",
    "description": "crepe salina azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-branco-282",
    "name": "crepe salina Branco",
    "category": "crepe salina",
    "color": "Branco",
    "price": 49.66,
    "image": "/products/crepe salina /crepe salina branco.png",
    "description": "crepe salina branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-rosa-283",
    "name": "crepe salina Rosa",
    "category": "crepe salina",
    "color": "Rosa",
    "price": 45.02,
    "image": "/products/crepe salina /crepe salina rosa.png",
    "description": "crepe salina rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-natural-284",
    "name": "crepe salina Natural",
    "category": "crepe salina",
    "color": "Natural",
    "price": 40.61,
    "image": "/products/crepe salina /crepe salina roxo.png",
    "description": "crepe salina natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-verde-285",
    "name": "crepe salina Verde",
    "category": "crepe salina",
    "color": "Verde",
    "price": 35.56,
    "image": "/products/crepe salina /crepe salina verde-bandeira .png",
    "description": "crepe salina verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-verde-286",
    "name": "crepe salina Verde",
    "category": "crepe salina",
    "color": "Verde",
    "price": 39.05,
    "image": "/products/crepe salina /crepe salina verde-água .png",
    "description": "crepe salina verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-salina-vermelho-287",
    "name": "crepe salina Vermelho",
    "category": "crepe salina",
    "color": "Vermelho",
    "price": 43.25,
    "image": "/products/crepe salina /crepe salina vermelho.png",
    "description": "crepe salina vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-natural-288",
    "name": "crepe sarja Natural",
    "category": "crepe sarja",
    "color": "Natural",
    "price": 43.54,
    "image": "/products/crepe sarja /crepe coral sarja.png",
    "description": "crepe sarja natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-azul-289",
    "name": "crepe sarja Azul",
    "category": "crepe sarja",
    "color": "Azul",
    "price": 43.27,
    "image": "/products/crepe sarja /crepe sarja azul Tiffany.png",
    "description": "crepe sarja azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-azul-290",
    "name": "crepe sarja Azul",
    "category": "crepe sarja",
    "color": "Azul",
    "price": 43.71,
    "image": "/products/crepe sarja /crepe sarja azul-bebê.png",
    "description": "crepe sarja azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-azul-291",
    "name": "crepe sarja Azul",
    "category": "crepe sarja",
    "color": "Azul",
    "price": 39.65,
    "image": "/products/crepe sarja /crepe sarja azul-marinho.png",
    "description": "crepe sarja azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-azul-royal-292",
    "name": "crepe sarja Azul Royal",
    "category": "crepe sarja",
    "color": "Azul Royal",
    "price": 47.35,
    "image": "/products/crepe sarja /crepe sarja azul-royal.png",
    "description": "crepe sarja azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-branco-293",
    "name": "crepe sarja Branco",
    "category": "crepe sarja",
    "color": "Branco",
    "price": 39.58,
    "image": "/products/crepe sarja /crepe sarja branco.png",
    "description": "crepe sarja branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-natural-294",
    "name": "crepe sarja Natural",
    "category": "crepe sarja",
    "color": "Natural",
    "price": 41.54,
    "image": "/products/crepe sarja /crepe sarja ferrugem.png",
    "description": "crepe sarja natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-lil-s-295",
    "name": "crepe sarja Lilás",
    "category": "crepe sarja",
    "color": "Lilás",
    "price": 42.44,
    "image": "/products/crepe sarja /crepe sarja lilás.png",
    "description": "crepe sarja lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-preto-296",
    "name": "crepe sarja Preto",
    "category": "crepe sarja",
    "color": "Preto",
    "price": 35.95,
    "image": "/products/crepe sarja /crepe sarja preto .png",
    "description": "crepe sarja preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-rosa-297",
    "name": "crepe sarja Rosa",
    "category": "crepe sarja",
    "color": "Rosa",
    "price": 45.94,
    "image": "/products/crepe sarja /crepe sarja rosa .png",
    "description": "crepe sarja rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-rosa-298",
    "name": "crepe sarja Rosa",
    "category": "crepe sarja",
    "color": "Rosa",
    "price": 47.14,
    "image": "/products/crepe sarja /crepe sarja rosa.png",
    "description": "crepe sarja rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-salm-o-299",
    "name": "crepe sarja Salmão",
    "category": "crepe sarja",
    "color": "Salmão",
    "price": 42.99,
    "image": "/products/crepe sarja /crepe sarja salmão.png",
    "description": "crepe sarja salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-verde-300",
    "name": "crepe sarja Verde",
    "category": "crepe sarja",
    "color": "Verde",
    "price": 35.43,
    "image": "/products/crepe sarja /crepe sarja verde-bandeira.png",
    "description": "crepe sarja verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-verde-301",
    "name": "crepe sarja Verde",
    "category": "crepe sarja",
    "color": "Verde",
    "price": 42.72,
    "image": "/products/crepe sarja /crepe sarja verde-água .png",
    "description": "crepe sarja verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "crepe-sarja-vermelho-302",
    "name": "crepe sarja Vermelho",
    "category": "crepe sarja",
    "color": "Vermelho",
    "price": 49.29,
    "image": "/products/crepe sarja /crepe sarja vermelho.png",
    "description": "crepe sarja vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "etamine-branco-303",
    "name": "etamine Branco",
    "category": "etamine",
    "color": "Branco",
    "price": 34.27,
    "image": "/products/etamine /Etamine branco.png",
    "description": "etamine branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "feltro-azul-royal-304",
    "name": "feltro Azul Royal",
    "category": "feltro",
    "color": "Azul Royal",
    "price": 32.2,
    "image": "/products/feltro/feltro azul royal.png",
    "description": "feltro azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "feltro-rosa-beb--305",
    "name": "feltro Rosa Bebê",
    "category": "feltro",
    "color": "Rosa Bebê",
    "price": 42.25,
    "image": "/products/feltro/feltro rosa bebê.png",
    "description": "feltro rosa bebê de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "flanela-natural-306",
    "name": "flanela Natural",
    "category": "flanela",
    "color": "Natural",
    "price": 39.42,
    "image": "/products/flanela/flanela branca.png",
    "description": "flanela natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "flanela-creme-307",
    "name": "flanela Creme",
    "category": "flanela",
    "color": "Creme",
    "price": 34.35,
    "image": "/products/flanela/flanela creme.png",
    "description": "flanela creme de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "helanca-bege-308",
    "name": "helanca Bege",
    "category": "helanca",
    "color": "Bege",
    "price": 42.84,
    "image": "/products/helanca /helanca bege.png",
    "description": "helanca bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "helanca-natural-309",
    "name": "helanca Natural",
    "category": "helanca",
    "color": "Natural",
    "price": 48.8,
    "image": "/products/helanca /helanca coral.png",
    "description": "helanca natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "helanca-salm-o-310",
    "name": "helanca Salmão",
    "category": "helanca",
    "color": "Salmão",
    "price": 34.45,
    "image": "/products/helanca /helanca salmão.png",
    "description": "helanca salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "helanca-verde-311",
    "name": "helanca Verde",
    "category": "helanca",
    "color": "Verde",
    "price": 46.01,
    "image": "/products/helanca /helanca verde-musgo.png",
    "description": "helanca verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "hydrangea-azul-312",
    "name": "hydrangea Azul",
    "category": "hydrangea",
    "color": "Azul",
    "price": 37.63,
    "image": "/products/hydrangea/hydrangea azul.png",
    "description": "hydrangea azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-natural-313",
    "name": "lame Natural",
    "category": "lame",
    "color": "Natural",
    "price": 31.07,
    "image": "/products/lame/lame pink .png",
    "description": "lame natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-verde-314",
    "name": "lame Verde",
    "category": "lame",
    "color": "Verde",
    "price": 43.35,
    "image": "/products/lame/lame verde bandeira .png",
    "description": "lame verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-vermelho-315",
    "name": "lame Vermelho",
    "category": "lame",
    "color": "Vermelho",
    "price": 37.49,
    "image": "/products/lame/lame vermelho.png",
    "description": "lame vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-azul-royal-316",
    "name": "lame brilho Azul Royal",
    "category": "lame brilho",
    "color": "Azul Royal",
    "price": 34.64,
    "image": "/products/lame brilho/lame brilho azul royal.png",
    "description": "lame brilho azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-dourado-317",
    "name": "lame brilho Dourado",
    "category": "lame brilho",
    "color": "Dourado",
    "price": 43.23,
    "image": "/products/lame brilho/lame brilho dourado.png",
    "description": "lame brilho dourado de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-rosa-318",
    "name": "lame brilho Rosa",
    "category": "lame brilho",
    "color": "Rosa",
    "price": 38.41,
    "image": "/products/lame brilho/lame brilho rosa .png",
    "description": "lame brilho rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-natural-319",
    "name": "lame brilho Natural",
    "category": "lame brilho",
    "color": "Natural",
    "price": 34.2,
    "image": "/products/lame brilho/lame brilho roxo.png",
    "description": "lame brilho natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-natural-320",
    "name": "lame brilho Natural",
    "category": "lame brilho",
    "color": "Natural",
    "price": 34.04,
    "image": "/products/lame brilho/lame brilho turquesa.png",
    "description": "lame brilho natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-verde-321",
    "name": "lame brilho Verde",
    "category": "lame brilho",
    "color": "Verde",
    "price": 37.75,
    "image": "/products/lame brilho/lame brilho verde.png",
    "description": "lame brilho verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lame-brilho-vermelho-322",
    "name": "lame brilho Vermelho",
    "category": "lame brilho",
    "color": "Vermelho",
    "price": 44.68,
    "image": "/products/lame brilho/lame brilho vermelho.png",
    "description": "lame brilho vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "laminado-real-azul-323",
    "name": "laminado real Azul",
    "category": "laminado real",
    "color": "Azul",
    "price": 33,
    "image": "/products/laminado real/laminado real azul.png",
    "description": "laminado real azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-bege-324",
    "name": "linho Bege",
    "category": "linho",
    "color": "Bege",
    "price": 59.86,
    "image": "/products/linho /linho puro bege.png",
    "description": "linho bege de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-natural-325",
    "name": "linho Natural",
    "category": "linho",
    "color": "Natural",
    "price": 56.82,
    "image": "/products/linho /linho roxo.png",
    "description": "linho natural de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-grosso-amarelo-326",
    "name": "linho grosso Amarelo",
    "category": "linho grosso",
    "color": "Amarelo",
    "price": 47.1,
    "image": "/products/linho grosso/linho grosso amarelo-dourado.png",
    "description": "linho grosso amarelo de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-bege-327",
    "name": "linho misto Bege",
    "category": "linho misto",
    "color": "Bege",
    "price": 57.02,
    "image": "/products/linho misto/inho misto bege.png",
    "description": "linho misto bege de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-branco-328",
    "name": "linho misto Branco",
    "category": "linho misto",
    "color": "Branco",
    "price": 47.59,
    "image": "/products/linho misto/linho branco misto.png",
    "description": "linho misto branco de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-amarelo-329",
    "name": "linho misto Amarelo",
    "category": "linho misto",
    "color": "Amarelo",
    "price": 46.68,
    "image": "/products/linho misto/linho misto amarelo.png",
    "description": "linho misto amarelo de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-azul-330",
    "name": "linho misto Azul",
    "category": "linho misto",
    "color": "Azul",
    "price": 59.59,
    "image": "/products/linho misto/linho misto azul Tiffany.png",
    "description": "linho misto azul de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-azul-331",
    "name": "linho misto Azul",
    "category": "linho misto",
    "color": "Azul",
    "price": 50.39,
    "image": "/products/linho misto/linho misto azul marinho.png",
    "description": "linho misto azul de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-natural-332",
    "name": "linho misto Natural",
    "category": "linho misto",
    "color": "Natural",
    "price": 52.55,
    "image": "/products/linho misto/linho misto laranja.png",
    "description": "linho misto natural de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-lil-s-333",
    "name": "linho misto Lilás",
    "category": "linho misto",
    "color": "Lilás",
    "price": 46.35,
    "image": "/products/linho misto/linho misto lilás.png",
    "description": "linho misto lilás de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-preto-334",
    "name": "linho misto Preto",
    "category": "linho misto",
    "color": "Preto",
    "price": 46.77,
    "image": "/products/linho misto/linho misto preto.png",
    "description": "linho misto preto de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-rosa-beb--335",
    "name": "linho misto Rosa Bebê",
    "category": "linho misto",
    "color": "Rosa Bebê",
    "price": 46.74,
    "image": "/products/linho misto/linho misto rosa-bebê.png",
    "description": "linho misto rosa bebê de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-rosa-336",
    "name": "linho misto Rosa",
    "category": "linho misto",
    "color": "Rosa",
    "price": 48.55,
    "image": "/products/linho misto/linho misto rosa-goiaba.png",
    "description": "linho misto rosa de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-natural-337",
    "name": "linho misto Natural",
    "category": "linho misto",
    "color": "Natural",
    "price": 49.28,
    "image": "/products/linho misto/linho misto roxo.png",
    "description": "linho misto natural de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-natural-338",
    "name": "linho misto Natural",
    "category": "linho misto",
    "color": "Natural",
    "price": 59.31,
    "image": "/products/linho misto/linho misto terracota.png",
    "description": "linho misto natural de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "linho-misto-verde-339",
    "name": "linho misto Verde",
    "category": "linho misto",
    "color": "Verde",
    "price": 45.82,
    "image": "/products/linho misto/linho misto verde-oliva.png",
    "description": "linho misto verde de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lourex-amarelo-340",
    "name": "lourex Amarelo",
    "category": "lourex",
    "color": "Amarelo",
    "price": 32.83,
    "image": "/products/lourex/lourex amarelo dourado.png",
    "description": "lourex amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lourex-vermelho-341",
    "name": "lourex Vermelho",
    "category": "lourex",
    "color": "Vermelho",
    "price": 37.15,
    "image": "/products/lourex/lourex vermelho.png",
    "description": "lourex vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "lurex-rosa-342",
    "name": "lurex Rosa",
    "category": "lurex",
    "color": "Rosa",
    "price": 34.67,
    "image": "/products/lurex/lurex rosa.png",
    "description": "lurex rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "melange-azul-343",
    "name": "melange Azul",
    "category": "melange",
    "color": "Azul",
    "price": 48.99,
    "image": "/products/melange /melange azul petróleo.png",
    "description": "melange azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "melange-bege-344",
    "name": "melange Bege",
    "category": "melange",
    "color": "Bege",
    "price": 33.62,
    "image": "/products/melange /melange bege.png",
    "description": "melange bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "melange-cinza-345",
    "name": "melange Cinza",
    "category": "melange",
    "color": "Cinza",
    "price": 47.71,
    "image": "/products/melange /melange cinza claro .png",
    "description": "melange cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "musselina-natural-346",
    "name": "musselina Natural",
    "category": "musselina",
    "color": "Natural",
    "price": 38.17,
    "image": "/products/musselina/musselina laranja.png",
    "description": "musselina natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "organza-branco-347",
    "name": "organza Branco",
    "category": "organza",
    "color": "Branco",
    "price": 47.06,
    "image": "/products/organza/organza branco.png",
    "description": "organza branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "organza-vermelho-348",
    "name": "organza Vermelho",
    "category": "organza",
    "color": "Vermelho",
    "price": 30.34,
    "image": "/products/organza/organza vermelho.png",
    "description": "organza vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "percal-branco-349",
    "name": "percal Branco",
    "category": "percal",
    "color": "Branco",
    "price": 30.46,
    "image": "/products/percal/Parcal branco.png",
    "description": "percal branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "percal-verde-350",
    "name": "percal Verde",
    "category": "percal",
    "color": "Verde",
    "price": 49.71,
    "image": "/products/percal/Parcal verde menta.png",
    "description": "percal verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "percal-salm-o-351",
    "name": "percal Salmão",
    "category": "percal",
    "color": "Salmão",
    "price": 37.53,
    "image": "/products/percal/Percal salmon 1,50 fios.png",
    "description": "percal salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "percal-amarelo-352",
    "name": "percal Amarelo",
    "category": "percal",
    "color": "Amarelo",
    "price": 38.75,
    "image": "/products/percal/parcal amarelo.png",
    "description": "percal amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "percal-azul-353",
    "name": "percal Azul",
    "category": "percal",
    "color": "Azul",
    "price": 42.71,
    "image": "/products/percal/percal azul.png",
    "description": "percal azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "piquet-azul-354",
    "name": "piquet Azul",
    "category": "piquet",
    "color": "Azul",
    "price": 39.9,
    "image": "/products/piquet/piquet  azul bebe.png",
    "description": "piquet azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "piquet-branco-355",
    "name": "piquet Branco",
    "category": "piquet",
    "color": "Branco",
    "price": 33.37,
    "image": "/products/piquet/piquet branco.png",
    "description": "piquet branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "piquet-cinza-356",
    "name": "piquet Cinza",
    "category": "piquet",
    "color": "Cinza",
    "price": 38.22,
    "image": "/products/piquet/piquet cinza.png",
    "description": "piquet cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "piquet-lil-s-357",
    "name": "piquet Lilás",
    "category": "piquet",
    "color": "Lilás",
    "price": 31.63,
    "image": "/products/piquet/piquet lilás.png",
    "description": "piquet lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "piquet-rosa-358",
    "name": "piquet Rosa",
    "category": "piquet",
    "color": "Rosa",
    "price": 49.15,
    "image": "/products/piquet/piquet rosa.png",
    "description": "piquet rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "solft-cinza-359",
    "name": "solft Cinza",
    "category": "solft",
    "color": "Cinza",
    "price": 34.08,
    "image": "/products/solft /solf cinza.png",
    "description": "solft cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "solft-marsala-360",
    "name": "solft Marsala",
    "category": "solft",
    "color": "Marsala",
    "price": 36.63,
    "image": "/products/solft /solf marsala.png",
    "description": "solft marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "solft-rosa-361",
    "name": "solft Rosa",
    "category": "solft",
    "color": "Rosa",
    "price": 44.82,
    "image": "/products/solft /solf rosa.png",
    "description": "solft rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "solft-verde-362",
    "name": "solft Verde",
    "category": "solft",
    "color": "Verde",
    "price": 48.42,
    "image": "/products/solft /solf verde.png",
    "description": "solft verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "suede-natural-363",
    "name": "suede Natural",
    "category": "suede",
    "color": "Natural",
    "price": 38.97,
    "image": "/products/suede/suede Mostarda.png",
    "description": "suede natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "suede-natural-364",
    "name": "suede Natural",
    "category": "suede",
    "color": "Natural",
    "price": 45.98,
    "image": "/products/suede/suede marinho.png",
    "description": "suede natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "suede-cinza-365",
    "name": "suede Cinza",
    "category": "suede",
    "color": "Cinza",
    "price": 42.82,
    "image": "/products/suede/suplex cinza .png",
    "description": "suede cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-branco-366",
    "name": "tactel Branco",
    "category": "tactel",
    "color": "Branco",
    "price": 45.3,
    "image": "/products/tactel/tactel  branco.png",
    "description": "tactel branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-preto-367",
    "name": "tactel Preto",
    "category": "tactel",
    "color": "Preto",
    "price": 41.93,
    "image": "/products/tactel/tactel  preto tecido.png",
    "description": "tactel preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-natural-368",
    "name": "tactel Natural",
    "category": "tactel",
    "color": "Natural",
    "price": 33.49,
    "image": "/products/tactel/tactel de malha laranja.png",
    "description": "tactel natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-verde-369",
    "name": "tactel Verde",
    "category": "tactel",
    "color": "Verde",
    "price": 43.34,
    "image": "/products/tactel/tactel de malha verde Tiffany.png",
    "description": "tactel verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-verde-370",
    "name": "tactel Verde",
    "category": "tactel",
    "color": "Verde",
    "price": 45.55,
    "image": "/products/tactel/tactel de malha verde-água.png",
    "description": "tactel verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-preto-371",
    "name": "tactel Preto",
    "category": "tactel",
    "color": "Preto",
    "price": 35,
    "image": "/products/tactel/tactel preto.png",
    "description": "tactel preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tactel-natural-372",
    "name": "tactel Natural",
    "category": "tactel",
    "color": "Natural",
    "price": 30.2,
    "image": "/products/tactel/tecido tactel turquesa.png",
    "description": "tactel natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-natural-373",
    "name": "tafeta Natural",
    "category": "tafeta",
    "color": "Natural",
    "price": 37,
    "image": "/products/tafeta/afeta comum  bronze .png",
    "description": "tafeta natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-natural-374",
    "name": "tafeta Natural",
    "category": "tafeta",
    "color": "Natural",
    "price": 47.98,
    "image": "/products/tafeta/afeta comum laranja.png",
    "description": "tafeta natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-natural-375",
    "name": "tafeta Natural",
    "category": "tafeta",
    "color": "Natural",
    "price": 38.89,
    "image": "/products/tafeta/afeta comum royal.png",
    "description": "tafeta natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-tiffany-376",
    "name": "tafeta Tiffany",
    "category": "tafeta",
    "color": "Tiffany",
    "price": 43.55,
    "image": "/products/tafeta/afeta comum tiffany.png",
    "description": "tafeta tiffany de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-verde-377",
    "name": "tafeta Verde",
    "category": "tafeta",
    "color": "Verde",
    "price": 40.9,
    "image": "/products/tafeta/afeta comum verde musgo.png",
    "description": "tafeta verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tafeta-cinza-378",
    "name": "tafeta Cinza",
    "category": "tafeta",
    "color": "Cinza",
    "price": 48.12,
    "image": "/products/tafeta/tafeta comum cinza.png",
    "description": "tafeta cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tecido-panama-natural-379",
    "name": "tecido panama Natural",
    "category": "tecido panama",
    "color": "Natural",
    "price": 32.51,
    "image": "/products/tecido panama/tecido Panamá.png",
    "description": "tecido panama natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "textolen-amarelo-380",
    "name": "textolen Amarelo",
    "category": "textolen",
    "color": "Amarelo",
    "price": 44.88,
    "image": "/products/textolen/textolen amarelo.png",
    "description": "textolen amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "textolen-branco-381",
    "name": "textolen Branco",
    "category": "textolen",
    "color": "Branco",
    "price": 46.11,
    "image": "/products/textolen/textolen branco.png",
    "description": "textolen branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "textolen-cinza-382",
    "name": "textolen Cinza",
    "category": "textolen",
    "color": "Cinza",
    "price": 31.1,
    "image": "/products/textolen/textolen cinza fosco.png",
    "description": "textolen cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "textolen-cinza-383",
    "name": "textolen Cinza",
    "category": "textolen",
    "color": "Cinza",
    "price": 38.57,
    "image": "/products/textolen/textolen cinza.png",
    "description": "textolen cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "textolen-verde-384",
    "name": "textolen Verde",
    "category": "textolen",
    "color": "Verde",
    "price": 47.35,
    "image": "/products/textolen/textolen verde menta.png",
    "description": "textolen verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-cinza-385",
    "name": "tricoline Cinza",
    "category": "tricoline",
    "color": "Cinza",
    "price": 40.43,
    "image": "/products/tricoline/Tricoline Mista Cinza Chumbo.png",
    "description": "tricoline cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-marsala-386",
    "name": "tricoline Marsala",
    "category": "tricoline",
    "color": "Marsala",
    "price": 36.18,
    "image": "/products/tricoline/Tricoline Mista marsala.png",
    "description": "tricoline marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-areia-387",
    "name": "tricoline Areia",
    "category": "tricoline",
    "color": "Areia",
    "price": 30.61,
    "image": "/products/tricoline/tricoline areia.png",
    "description": "tricoline areia de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-azul-388",
    "name": "tricoline Azul",
    "category": "tricoline",
    "color": "Azul",
    "price": 33.12,
    "image": "/products/tricoline/tricoline azul claro.png",
    "description": "tricoline azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-azul-389",
    "name": "tricoline Azul",
    "category": "tricoline",
    "color": "Azul",
    "price": 47.71,
    "image": "/products/tricoline/tricoline azul motorista.png",
    "description": "tricoline azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-azul-royal-390",
    "name": "tricoline Azul Royal",
    "category": "tricoline",
    "color": "Azul Royal",
    "price": 47.17,
    "image": "/products/tricoline/tricoline azul royal .png",
    "description": "tricoline azul royal de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-cinza-391",
    "name": "tricoline Cinza",
    "category": "tricoline",
    "color": "Cinza",
    "price": 43.62,
    "image": "/products/tricoline/tricoline cinza chumbo tecido.png",
    "description": "tricoline cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-cinza-392",
    "name": "tricoline Cinza",
    "category": "tricoline",
    "color": "Cinza",
    "price": 37.74,
    "image": "/products/tricoline/tricoline cinza chumbo.png",
    "description": "tricoline cinza de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-natural-393",
    "name": "tricoline Natural",
    "category": "tricoline",
    "color": "Natural",
    "price": 48.65,
    "image": "/products/tricoline/tricoline goiaba.png",
    "description": "tricoline natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-lil-s-394",
    "name": "tricoline Lilás",
    "category": "tricoline",
    "color": "Lilás",
    "price": 44.56,
    "image": "/products/tricoline/tricoline lilas.png",
    "description": "tricoline lilás de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-marsala-395",
    "name": "tricoline Marsala",
    "category": "tricoline",
    "color": "Marsala",
    "price": 39.24,
    "image": "/products/tricoline/tricoline marsala vinho .png",
    "description": "tricoline marsala de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-preto-396",
    "name": "tricoline Preto",
    "category": "tricoline",
    "color": "Preto",
    "price": 43.43,
    "image": "/products/tricoline/tricoline mista preto.png",
    "description": "tricoline preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-preto-397",
    "name": "tricoline Preto",
    "category": "tricoline",
    "color": "Preto",
    "price": 38.18,
    "image": "/products/tricoline/tricoline preto.png",
    "description": "tricoline preto de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-rosa-398",
    "name": "tricoline Rosa",
    "category": "tricoline",
    "color": "Rosa",
    "price": 41.48,
    "image": "/products/tricoline/tricoline rosa claro.png",
    "description": "tricoline rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-rosa-399",
    "name": "tricoline Rosa",
    "category": "tricoline",
    "color": "Rosa",
    "price": 48.33,
    "image": "/products/tricoline/tricoline rosa.png",
    "description": "tricoline rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-verde-400",
    "name": "tricoline Verde",
    "category": "tricoline",
    "color": "Verde",
    "price": 37.96,
    "image": "/products/tricoline/tricoline verde musgo.png",
    "description": "tricoline verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-natural-401",
    "name": "tricoline Natural",
    "category": "tricoline",
    "color": "Natural",
    "price": 32.58,
    "image": "/products/tricoline/tricoline vinho.png",
    "description": "tricoline natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "tricoline-natural-402",
    "name": "tricoline Natural",
    "category": "tricoline",
    "color": "Natural",
    "price": 41.41,
    "image": "/products/tricoline/tricoline violeta.png",
    "description": "tricoline natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "vagonite-branco-403",
    "name": "vagonite Branco",
    "category": "vagonite",
    "color": "Branco",
    "price": 38.03,
    "image": "/products/vagonite/vagonite branco.png",
    "description": "vagonite branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "veludo-cotelete-rosa-404",
    "name": "veludo cotelete Rosa",
    "category": "veludo cotelete",
    "color": "Rosa",
    "price": 61.41,
    "image": "/products/veludo cotelete /Veludo cotele  rosa .png",
    "description": "veludo cotelete rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "300g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "300g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "veludo-cotelete-vermelho-405",
    "name": "veludo cotelete Vermelho",
    "category": "veludo cotelete",
    "color": "Vermelho",
    "price": 59.61,
    "image": "/products/veludo cotelete /Veludo cotele  vermelho.png",
    "description": "veludo cotelete vermelho de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "300g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "300g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-branco-406",
    "name": "viscolinho Branco",
    "category": "viscolinho",
    "color": "Branco",
    "price": 55.64,
    "image": "/products/viscolinho/Viscolinho  branco.png",
    "description": "viscolinho branco de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-azul-407",
    "name": "viscolinho Azul",
    "category": "viscolinho",
    "color": "Azul",
    "price": 45.93,
    "image": "/products/viscolinho/Viscolinho azul marinho.png",
    "description": "viscolinho azul de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-preto-408",
    "name": "viscolinho Preto",
    "category": "viscolinho",
    "color": "Preto",
    "price": 50.25,
    "image": "/products/viscolinho/Viscolinho preto role.png",
    "description": "viscolinho preto de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-preto-409",
    "name": "viscolinho Preto",
    "category": "viscolinho",
    "color": "Preto",
    "price": 48.11,
    "image": "/products/viscolinho/Viscolinho preto.png",
    "description": "viscolinho preto de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-natural-410",
    "name": "viscolinho Natural",
    "category": "viscolinho",
    "color": "Natural",
    "price": 54.35,
    "image": "/products/viscolinho/Viscolinho roxo.png",
    "description": "viscolinho natural de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-natural-411",
    "name": "viscolinho Natural",
    "category": "viscolinho",
    "color": "Natural",
    "price": 47.13,
    "image": "/products/viscolinho/viscolinho caramello.png",
    "description": "viscolinho natural de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-marsala-412",
    "name": "viscolinho Marsala",
    "category": "viscolinho",
    "color": "Marsala",
    "price": 60.23,
    "image": "/products/viscolinho/viscolinho marsala.png",
    "description": "viscolinho marsala de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-verde-413",
    "name": "viscolinho Verde",
    "category": "viscolinho",
    "color": "Verde",
    "price": 58.79,
    "image": "/products/viscolinho/viscolinho verde.png",
    "description": "viscolinho verde de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolinho-vermelho-414",
    "name": "viscolinho Vermelho",
    "category": "viscolinho",
    "color": "Vermelho",
    "price": 53.13,
    "image": "/products/viscolinho/viscolinho vermelho.png",
    "description": "viscolinho vermelho de alta qualidade. Composição em 100% Linho para máximo conforto e durabilidade.",
    "material": "100% Linho",
    "width": "1,50m",
    "weight": "160g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Linho",
      "width": "1,50m",
      "weight": "160g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-bege-415",
    "name": "viscolycra Bege",
    "category": "viscolycra",
    "color": "Bege",
    "price": 32.95,
    "image": "/products/viscolycra /Viscolycra bege.png",
    "description": "viscolycra bege de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-salm-o-416",
    "name": "viscolycra Salmão",
    "category": "viscolycra",
    "color": "Salmão",
    "price": 48.42,
    "image": "/products/viscolycra /Viscolycra na cor salmão.png",
    "description": "viscolycra salmão de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-amarelo-417",
    "name": "viscolycra Amarelo",
    "category": "viscolycra",
    "color": "Amarelo",
    "price": 44.9,
    "image": "/products/viscolycra /viscolycra amarelo dourado.png",
    "description": "viscolycra amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-azul-418",
    "name": "viscolycra Azul",
    "category": "viscolycra",
    "color": "Azul",
    "price": 45.6,
    "image": "/products/viscolycra /viscolycra azul marinho.png",
    "description": "viscolycra azul de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-branco-419",
    "name": "viscolycra Branco",
    "category": "viscolycra",
    "color": "Branco",
    "price": 38.02,
    "image": "/products/viscolycra /viscolycra branco.png",
    "description": "viscolycra branco de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-natural-420",
    "name": "viscolycra Natural",
    "category": "viscolycra",
    "color": "Natural",
    "price": 41.29,
    "image": "/products/viscolycra /viscolycra laranja.png",
    "description": "viscolycra natural de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscolycra-verde-421",
    "name": "viscolycra Verde",
    "category": "viscolycra",
    "color": "Verde",
    "price": 34.11,
    "image": "/products/viscolycra /viscolycra verde.png",
    "description": "viscolycra verde de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "viscose-mista-cinza-422",
    "name": "viscose mista Cinza",
    "category": "viscose mista",
    "color": "Cinza",
    "price": 39.56,
    "image": "/products/viscose mista/viscose mista cinza-escuro.png",
    "description": "viscose mista cinza de alta qualidade. Composição em 100% Viscose para máximo conforto e durabilidade.",
    "material": "100% Viscose",
    "width": "1,50m",
    "weight": "140g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Viscose",
      "width": "1,50m",
      "weight": "140g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "voile-amarelo-423",
    "name": "voile Amarelo",
    "category": "voile",
    "color": "Amarelo",
    "price": 38.91,
    "image": "/products/voile/voile amarelo.png",
    "description": "voile amarelo de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  },
  {
    "id": "voile-rosa-424",
    "name": "voile Rosa",
    "category": "voile",
    "color": "Rosa",
    "price": 48.47,
    "image": "/products/voile/voile rosa.png",
    "description": "voile rosa de alta qualidade. Composição em 100% Poliéster para máximo conforto e durabilidade.",
    "material": "100% Poliéster",
    "width": "1,50m",
    "weight": "150g/m²",
    "care": [
      "Lavar conforme instruções da etiqueta",
      "Passar a ferro em temperatura adequada",
      "Não usar alvejante",
      "Secar à sombra"
    ],
    "applications": [
      "Roupas casuais",
      "Peças formais",
      "Artesanato",
      "Decoração"
    ],
    "specifications": {
      "material": "100% Poliéster",
      "width": "1,50m",
      "weight": "150g/m²",
      "origin": "Brasil"
    }
  }
];

// Função para obter produtos por categoria
export const getProductsByCategory = (category: string): FabricProduct[] => {
  return fabricProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

// Função para obter todas as categorias
export const getAllCategories = (): string[] => {
  const categories = fabricProducts.map(product => product.category);
  return [...new Set(categories)].sort();
};

// Função para obter produto por ID
export const getProductById = (id: string): FabricProduct | undefined => {
  return fabricProducts.find(product => product.id === id);
};

// Função para buscar produtos por nome ou descrição
export const searchProducts = (query: string): FabricProduct[] => {
  const searchTerm = query.toLowerCase();
  return fabricProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.color.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};
