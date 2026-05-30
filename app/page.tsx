'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3, Flame, ShieldCheck, Volume2, Zap } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import PackOpening3D from '@/components/pack/PackOpening3D';
import RevealSlab from '@/components/pack/RevealSlab';
import BottomNav from '@/components/mobile/BottomNav';
import Leaderboard from '@/components/leaderboard/Leaderboard';
import { cards, type Card } from '@/lib/cardDatabase';

export default function HomePage() {
  const [opening, setOpening] = useState(false);
  const [revealed, setRevealed] = useState<Card | null>(null);
  const [inventory, setInventory] = useState<Card[]>([]);
  const [sound, setSound] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('leagueyrad_inventory');
    if (saved) setInventory(JSON.parse(saved));
  }, []);

  function play(type: 'click' | 'reveal' | 'jackpot') {
    if (!sound) return;
    const urls = {
      click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
      reveal: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
      jackpot: 'https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3'
    };
    const audio = new Audio(urls[type]);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }

  async function ripPack() {
    setOpening(true);
    setRevealed(null);
    play('click');

    const res = await fetch('/api/open-pack', { method: 'POST' });
    const data = await res.json();

    setTimeout(() => {
      setOpening(false);
      setRevealed(data.card);
      const next = [data.card, ...inventory];
      setInventory(next);
      localStorage.setItem('leagueyrad_inventory', JSON.stringify(next));
      play(data.card.rarity === 'GOD' ? 'jackpot' : 'reveal');
    }, 2600);
  }

  const totalValue = useMemo(() => inventory.reduce((sum, card) => sum + card.value, 0), [inventory]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed left-0 top-0 h-[640px] w-[640px] bg-yellow-400/20 blur-[180px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[520px] w-[520px] bg-orange-500/10 blur-[160px]" />

      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/70 px-5 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <div className="text-2xl font-black tracking-[0.3em] text-yellow-400 md:text-3xl">LEAGUEYRAD</div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Digital Pack Experience</div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setSound(!sound)} className="grid h-11 w-11 place-items-center rounded-full border border-zinc-700 hover:border-yellow-400"><Volume2 size={18}/></button>
            <a href="/inventory" className="hidden rounded-full border border-zinc-700 px-5 py-3 font-bold hover:border-yellow-400 md:block">Inventory</a>
            <a href="/leaderboard" className="hidden rounded-full border border-zinc-700 px-5 py-3 font-bold hover:border-yellow-400 md:block">Leaderboard</a>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-2 md:px-10 md:py-16">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
            <Zap size={14}/> Free Beta • No Wallet Needed
          </div>
          <h1 className="text-6xl font-black leading-none md:text-8xl">RIP.<br/>REVEAL.<br/>COLLECT.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">A Courtyard-inspired free digital ripping simulator for One Piece and NBA chase-card packs, with WebGL pack motion, PSA slab reveals, live odds and local inventory.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={ripPack} className="rounded-full bg-yellow-400 px-9 py-5 text-lg font-black text-black shadow-gold hover:bg-yellow-300">
              {opening ? 'RIPPING...' : 'RIP DIGITAL PACK'}
            </button>
            <a href="#odds" className="rounded-full border border-zinc-700 px-9 py-5 font-black hover:border-yellow-400">VIEW LIVE ODDS</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-4"><div className="text-2xl font-black text-yellow-400">{inventory.length}</div><div className="text-xs text-zinc-500">SLABS</div></div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-4"><div className="text-2xl font-black text-yellow-400">${totalValue.toLocaleString()}</div><div className="text-xs text-zinc-500">VALUE</div></div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-4"><div className="text-2xl font-black text-yellow-400">1%</div><div className="text-xs text-zinc-500">GOD</div></div>
          </div>
        </div>
        <PackOpening3D opening={opening} />
      </section>

      <section id="odds" className="relative z-10 mx-auto grid max-w-7xl gap-6 px-5 pb-12 md:grid-cols-3 md:px-10">
        <div className="rounded-[34px] border border-zinc-800 bg-zinc-950/85 p-7 backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-3"><BarChart3 className="text-yellow-400"/><h2 className="text-2xl font-black">LIVE ODDS</h2></div>
          <div className="space-y-3 text-sm">
            {['COMMON 60%', 'RARE 25%', 'SR 12%', 'SSR 4%', 'GOD 1%'].map((row) => <div key={row} className="flex justify-between rounded-2xl bg-black/50 p-3"><span className="text-zinc-400">{row.split(' ')[0]}</span><span className="font-bold">{row.split(' ')[1]}</span></div>)}
          </div>
        </div>
        <div className="rounded-[34px] border border-zinc-800 bg-zinc-950/85 p-7 backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-3"><Flame className="text-orange-400"/><h2 className="text-2xl font-black">HOT CHASES</h2></div>
          <div className="space-y-3 text-sm">
            {cards.slice(0, 4).map((card) => <div key={card.id} className="flex justify-between rounded-2xl bg-black/50 p-3"><span className="text-zinc-400">{card.title}</span><span className="font-bold text-yellow-400">${card.value.toLocaleString()}</span></div>)}
          </div>
        </div>
        <Leaderboard />
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-36 md:px-10">
        <div className="mb-6 flex items-center gap-3"><ShieldCheck className="text-yellow-400"/><h2 className="text-3xl font-black">CHASE CARD DATABASE</h2></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.slice(0, 8).map((card) => (
            <motion.div whileHover={{ y: -8 }} key={card.id} className={`rounded-[30px] bg-gradient-to-br ${card.accent} p-[1px]`}>
              <div className="h-full rounded-[29px] bg-black p-4">
                <img src={card.image} alt={card.title} className="h-52 w-full rounded-3xl object-cover" />
                <div className="mt-4 flex justify-between text-xs text-zinc-500"><span>{card.rarity}</span><span>{card.slab}</span></div>
                <div className="mt-2 text-lg font-black leading-tight">{card.title}</div>
                <div className="mt-2 font-black text-yellow-400">${card.value.toLocaleString()}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-xl">
            <RevealSlab card={revealed} onClose={() => setRevealed(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </main>
  );
}
