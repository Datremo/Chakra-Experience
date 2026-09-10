import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Plus, Minus } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const achievements = ['degree', 'promotion', 'praise', 'money', 'skill', 'status'];

export const AchievementMonumentSection: React.FC = () => {
  const [stones, setStones] = useState<string[]>(achievements);
  const shuffled = useMemo(() => achievements.slice().reverse(), []);
  return (
    <WorldChrome number="33" eyebrow="IDENTITY / ACHIEVEMENT" title="Who are you without the monument?" subtitle="Achievement can be meaningful. It becomes brittle when every accomplishment has to prove your worth." image="agency" tone="gold">
      <div className="relative min-h-[610px] rounded-[2rem] border border-amber-200/10 bg-black/35 overflow-hidden p-6 md:p-10">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center_bottom,rgba(255,160,38,.12),transparent_65%)]" />
        <div className="relative z-10 grid md:grid-cols-[1.1fr_.9fr] gap-10 items-end h-full">
          <div className="min-h-[480px] flex flex-col items-center justify-end">
            <AnimatePresence>
              {shuffled.map((id, i) => {
                const present = stones.includes(id);
                if (!present) return null;
                return <motion.div key={id} initial={{ opacity: 0, y: 80, scale: .7 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: .6 }} transition={{ type: 'spring', stiffness: 180, damping: 18 }} className="w-[72%] md:w-[62%] h-12 mb-2 rounded-lg border border-amber-200/15 bg-gradient-to-r from-amber-700/35 via-amber-300/15 to-amber-900/35 flex items-center justify-center text-[10px] font-mono tracking-[.3em] uppercase text-amber-100/65 shadow-[0_0_25px_rgba(245,158,11,.05)]">{id}</motion.div>;
              })}
            </AnimatePresence>
            <div className="w-[78%] md:w-[68%] h-4 bg-white/10 rounded-full" />
            <div className="mt-6 font-serif text-lg text-amber-100/65">The self is not the score.</div>
          </div>
          <div className="rounded-3xl border border-white/7 bg-black/35 p-6 md:p-8">
            <div className="flex items-center gap-3 text-amber-200/70 mb-5"><Crown size={17} /><span className="text-[10px] font-mono tracking-[.3em]">REMOVE A STONE</span></div>
            <p className="text-white/55 leading-7 mb-6">Remove the things that once made you feel most impressive. Notice what remains when the performance gets quieter.</p>
            <div className="space-y-2">
              {achievements.map((id) => <button key={id} onClick={() => setStones(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id])} className={`w-full flex items-center justify-between rounded-xl px-4 py-3 border text-xs uppercase tracking-[.22em] transition ${stones.includes(id) ? 'border-amber-200/15 bg-amber-300/[.04] text-amber-100/65' : 'border-white/5 text-white/25'}`}><span>{id}</span>{stones.includes(id) ? <Minus size={14} /> : <Plus size={14} />}</button>)}
            </div>
            <AnimatePresence>{stones.length === 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-7 text-center font-serif text-2xl text-amber-50">Something still remains.</motion.div>}</AnimatePresence>
          </div>
        </div>
      </div>
    </WorldChrome>
  );
};
