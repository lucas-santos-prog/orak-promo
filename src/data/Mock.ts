// Tipos
export interface Group {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  banner: string;
  whatsappLink: string;
  instagramLink: string;
  stores: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

// Categorias
export const categories: Category[] = [
  { id: "tecnologia", name: "Tecnologia", icon: "💻" },
  { id: "automoveis", name: "Automóveis Seminovos", icon: "🚗" },
  { id: "roupas", name: "Roupas e Moda", icon: "👗" },
  { id: "esportes", name: "Esportes", icon: "⚽" },
  { id: "casa", name: "Casa e Decoração", icon: "🏠" },
  { id: "beleza", name: "Beleza", icon: "💄" },
];

// Grupos
export const groups: Group[] = [
  {
    id: 1,
    name: "Tech Deals Brasil",
    slug: "tech-deals-brasil",
    category: "tecnologia",
    description:
      "Grupo focado em ofertas de eletrônicos, smartphones, notebooks, periféricos e gadgets. Trabalhamos apenas com lojas confiáveis e verificamos cada oferta antes de compartilhar. Ofertas diárias com descontos reais de até 70%!",
    banner:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Amazon", "Kabum", "Pichau", "Terabyte", "Magazine Luiza"],
  },
  {
    id: 2,
    name: "Carros & Motos Ofertas",
    slug: "carros-motos-ofertas",
    category: "automoveis",
    description:
      "Encontre os melhores seminovos com procedência garantida. Divulgamos ofertas de concessionárias parceiras e particulares verificados. Financiamento facilitado e entrada reduzida!",
    banner:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Localiza Seminovos", "Webmotors", "iCarros", "OLX Autos"],
  },
  {
    id: 3,
    name: "Moda & Estilo",
    slug: "moda-estilo",
    category: "roupas",
    description:
      "As melhores ofertas de roupas, calçados e acessórios das principais marcas. Cupons exclusivos e promoções relâmpago todos os dias!",
    banner:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Renner", "C&A", "Zara", "Shein", "Dafiti"],
  },
  {
    id: 4,
    name: "Esporte Total",
    slug: "esporte-total",
    category: "esportes",
    description:
      "Tudo para seu esporte favorito! Equipamentos, roupas esportivas, suplementos e acessórios com os melhores preços do mercado.",
    banner:
      "https://images.unsplash.com/photo-1461896836934- voices-rising-cover?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Netshoes", "Centauro", "Decathlon", "Nike", "Adidas"],
  },
  {
    id: 5,
    name: "Casa & Lar",
    slug: "casa-lar",
    category: "casa",
    description:
      "Móveis, eletrodomésticos e decoração para transformar sua casa. Ofertas verificadas das melhores lojas do Brasil!",
    banner:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Tok&Stok", "Etna", "MadeiraMadeira", "Mobly", "Casas Bahia"],
  },
  {
    id: 6,
    name: "Beleza em Oferta",
    slug: "beleza-em-oferta",
    category: "beleza",
    description:
      "Cosméticos, perfumes, maquiagens e produtos de skincare com descontos incríveis. Apenas produtos originais de lojas autorizadas!",
    banner:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: [
      "Sephora",
      "O Boticário",
      "Natura",
      "Beleza na Web",
      "Época Cosméticos",
    ],
  },
  {
    id: 7,
    name: "Gamer Zone",
    slug: "gamer-zone",
    category: "tecnologia",
    description:
      "Ofertas exclusivas para gamers! Consoles, jogos, periféricos, cadeiras gamer e muito mais. Promoções das principais lojas especializadas.",
    banner:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Kabum", "Pichau", "Terabyte", "Amazon Games", "Nuuvem"],
  },
  {
    id: 8,
    name: "Fitness & Suplementos",
    slug: "fitness-suplementos",
    category: "esportes",
    description:
      "Suplementos, equipamentos de academia e acessórios fitness com os melhores preços. Produtos originais e lojas verificadas!",
    banner:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
    whatsappLink: "https://wa.me/11913521810",
    instagramLink: "https://www.instagram.com/orakpromo/",
    stores: ["Growth", "Max Titanium", "Integral Médica", "Netshoes", "Amazon"],
  },
];

// Funções para simular operações do CMS
export function getAllGroups(): Group[] {
  return groups;
}

export function getGroupBySlug(slug: string): Group | undefined {
  return groups.find((group) => group.slug === slug);
}

export function getGroupsByCategory(category: string): Group[] {
  if (!category || category === "todos") {
    return groups;
  }
  return groups.filter((group) => group.category === category);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function searchGroups(query: string): Group[] {
  const lowerQuery = query.toLowerCase();
  return groups.filter(
    (group) =>
      group.name.toLowerCase().includes(lowerQuery) ||
      group.description.toLowerCase().includes(lowerQuery) ||
      group.stores.some((store) => store.toLowerCase().includes(lowerQuery)),
  );
}
