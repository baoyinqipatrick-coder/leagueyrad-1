'use client';

import { useEffect, useState } from 'react';
import BottomNav from '@/components/mobile/BottomNav';
import type { Card } from '@/lib/cardDatabase';

export default function InventoryPage() {
  const [inventory, setInventory] = useState<Card[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('leagueyrad_inventory');
    if (saved) setInventory(JSON.parse(saved));
  }, []);

  return (
    <main className="min-h-screen bg-black px-5 py-8 text-white md:px-10">
      <a href="/" className="text-yellow-400">← Back</a>
      <h1 className="mt-8 text-5xl font-black">YOUR INVENTORY</h1>
      <p className="mt-3 text-zinc-500">Saved locally in browser. Firebase sync is ready to connect when you add keys.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {inventory.length === 0 && <div className="col-span-full rounded-3xl border border-dashed border-zinc-800 p-16 text-center text-zinc-500">No cards yet. Go rip a pack.</div>}
        {inventory.map((card, i) => (
          <div key={`${card.id}-${i}`} className={`rounded-[30px] bg-gradient-to-br ${card.accent} p-[1px]`}>
            <div className="rounded-[29px] bg-black p-4">
              <img src={card.image} className="h-60 w-full rounded-3xl object-cover" alt={card.title} />
              <div className="mt-4 text-xs text-zinc-500">{card.rarity} • {card.slab}</div>
              <div className="mt-2 text-xl font-black">{card.title}</div>
              <div className="mt-2 text-2xl font-black text-yellow-400">${card.value.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </main>
  );
}
