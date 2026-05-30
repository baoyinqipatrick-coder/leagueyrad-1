export type Rarity = 'COMMON' | 'RARE' | 'SR' | 'SSR' | 'GOD';

export type Card = {
  id: string;
  title: string;
  franchise: 'One Piece' | 'NBA';
  rarity: Rarity;
  value: number;
  weight: number;
  slab: string;
  image: string;
  accent: string;
};

export const cards: Card[] = [
  {
    id: 'op-gear5-manga',
    title: 'Gear 5 Manga Luffy',
    franchise: 'One Piece',
    rarity: 'GOD',
    value: 12000,
    weight: 1,
    slab: 'PSA GEM MT 10',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-red-500 via-yellow-400 to-orange-500'
  },
  {
    id: 'nba-jordan-rookie',
    title: 'Jordan Rookie Grail',
    franchise: 'NBA',
    rarity: 'GOD',
    value: 25000,
    weight: 1,
    slab: 'BGS PRISTINE 10',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-red-500 via-yellow-400 to-orange-500'
  },
  {
    id: 'op-shanks-alt',
    title: 'Shanks Alternate Art',
    franchise: 'One Piece',
    rarity: 'SSR',
    value: 4200,
    weight: 4,
    slab: 'PSA GEM MT 10',
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-yellow-400 via-orange-500 to-red-500'
  },
  {
    id: 'nba-wemby-gold',
    title: 'Wembanyama Gold Prizm',
    franchise: 'NBA',
    rarity: 'SSR',
    value: 3600,
    weight: 4,
    slab: 'PSA GEM MT 10',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-yellow-400 via-orange-500 to-red-500'
  },
  {
    id: 'op-boa-sp',
    title: 'Boa Hancock SP',
    franchise: 'One Piece',
    rarity: 'SR',
    value: 950,
    weight: 12,
    slab: 'PSA 10',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-purple-500 via-pink-500 to-fuchsia-400'
  },
  {
    id: 'nba-lebron-kaboom',
    title: 'LeBron Kaboom',
    franchise: 'NBA',
    rarity: 'SR',
    value: 1100,
    weight: 12,
    slab: 'PSA 10',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-purple-500 via-pink-500 to-fuchsia-400'
  },
  {
    id: 'op-zoro-holo',
    title: 'Zoro Holo Parallel',
    franchise: 'One Piece',
    rarity: 'RARE',
    value: 260,
    weight: 25,
    slab: 'RAW MINT',
    image: 'https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-blue-500 via-cyan-400 to-sky-500'
  },
  {
    id: 'nba-curry-splash',
    title: 'Curry Splash Holo',
    franchise: 'NBA',
    rarity: 'RARE',
    value: 320,
    weight: 25,
    slab: 'RAW MINT',
    image: 'https://images.unsplash.com/photo-1505666287802-931dc83a2fe4?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-blue-500 via-cyan-400 to-sky-500'
  },
  {
    id: 'common-rookie',
    title: 'Base Rookie Parallel',
    franchise: 'NBA',
    rarity: 'COMMON',
    value: 35,
    weight: 60,
    slab: 'RAW',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-zinc-700 via-zinc-500 to-zinc-700'
  }
];
