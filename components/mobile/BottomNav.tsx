'use client';

import { Home, Package2, Trophy } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden safe-bottom">
      <div className="flex gap-2 rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-2 shadow-2xl backdrop-blur-xl">
        <a href="/" className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-3 text-sm font-black text-black"><Home size={16}/> Packs</a>
        <a href="/inventory" className="flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-zinc-300"><Package2 size={16}/> Bag</a>
        <a href="/leaderboard" className="flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-zinc-300"><Trophy size={16}/> Rank</a>
      </div>
    </div>
  );
}
