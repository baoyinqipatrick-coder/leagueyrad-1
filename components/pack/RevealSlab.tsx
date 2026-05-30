'use client';

import { motion } from 'framer-motion';
import type { Card } from '@/lib/cardDatabase';

export default function RevealSlab({ card, onClose }: { card: Card; onClose?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.55, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.75, type: 'spring' }}
      className={`mx-auto max-w-sm rounded-[44px] p-[2px] bg-gradient-to-br ${card.accent} shadow-gold`}
    >
      <div className="relative overflow-hidden rounded-[42px] bg-black border border-white/10">
        <div className="h-14 bg-gradient-to-r from-red-600 via-blue-600 to-yellow-400 flex items-center justify-center text-xs font-black tracking-[0.32em] text-white">
          {card.slab}
        </div>
        <div className="relative p-5">
          <div className="absolute inset-0 holo opacity-30" />
          <img src={card.image} alt={card.title} className="relative h-[390px] w-full rounded-[28px] object-cover border border-white/10" />
        </div>
        <div className="px-7 pb-7">
          <div className="flex items-center justify-between text-sm text-zinc-400">
            <span>{card.franchise}</span>
            <span>{card.rarity}</span>
          </div>
          <h2 className="mt-2 text-3xl font-black leading-tight">{card.title}</h2>
          <div className="mt-4 text-5xl font-black text-yellow-400">${card.value.toLocaleString()}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">Simulated market value</div>
          {onClose && (
            <button onClick={onClose} className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 font-black text-black hover:bg-yellow-300">
              CONTINUE
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
