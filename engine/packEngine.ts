import { cards, type Card } from '@/lib/cardDatabase';

export function openPack(): Card {
  const totalWeight = cards.reduce((sum, card) => sum + card.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const card of cards) {
    roll -= card.weight;
    if (roll <= 0) return card;
  }

  return cards[cards.length - 1];
}

export function getOdds() {
  const totalWeight = cards.reduce((sum, card) => sum + card.weight, 0);
  return cards.map((card) => ({
    id: card.id,
    title: card.title,
    rarity: card.rarity,
    chance: Number(((card.weight / totalWeight) * 100).toFixed(2))
  }));
}
