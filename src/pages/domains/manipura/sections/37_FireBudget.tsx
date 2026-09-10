import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Moon, BriefcaseBusiness, Heart, Dumbbell, BookOpen } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const areas = [
  { id: 'work', label: 'Work', icon: BriefcaseBusiness },
  { id: 'body', label: 'Body', icon: Dumbbell },
  { id: 'people', label: 'People', icon: Heart },
  { id: 'rest', label: 'Rest', icon: Moon },
  { id: 'learn', label: 'Learn', icon: BookOpen },
];

export const FireBudgetSection: React.FC = () => {
  const [spent, setSpent] = useState<Record<string, number>>({});
  const total = Object.values(spent).reduce((a, b) => a + b, 0);
  const left = Math.max(0, 100 - total);
  const ring = useMemo(() => Array.from({ length: 24 }), []);
  return (
    <WorldChrome number="37" eyebrow="ENERGY / CHOICE" title="Your day has finite heat." subtitle="Before the day spends your attention for you, give your energy a shape." image="agency" tone="gold">
      <div className="relative min-h-[610px] rounded-[2rem] border border-amber-200/10 bg-black/35 p-6 md:p-10">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-center">
          <div className="relative flex items-center justify-center py-8">
            <div className="relative w-60 h-60 rounded-full border border-amber-200/10 p-4"><svg viewBox="0 0 100 100" className="w-full h-full -rotate-90"><circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="7"/><motion.circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,177,56,.8)" strokeWidth="7" strokeLinecap="round" strokeDasharray="276" animate={{ strokeDashoffset: 276 - (left / 100) * 276 }} transition={{ duration: .5 }} /></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-serif text-5xl text-amber-50">{left}</span><span className="font-mono text-[9px] tracking-[.3em] text-white/30 uppercase">heat left</span></div></div>
          </div>
          <div className="space-y-3">
            {areas.map(({ id, label, icon: Icon }) => { const value = spent[id] ?? 0; return <div key={id} className="rounded-2xl border border-white/7 bg-white/[.02] p-4"><div className="flex items-center gap-3 mb-3"><Icon size={15} className="text-amber-200/55"/><span className="text-sm text-white/65 flex-1">{label}</span><span className="font-mono text-[10px] text-white/30">{value}</span></div><input type="range" min="0" max="40" value={value} onChange={(e) => setSpent(v => ({ ...v, [id]: Number(e.target.value) }))} className="w-full accent-amber-400" /></div>; })}
          </div>
        </div>
        {total > 100 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-7 text-center text-orange-200/70 text-xs uppercase tracking-[.25em]">Overdrawn. The body has not agreed to this budget.</motion.div>}
        <div className="hidden">{ring.length}</div>
      </div>
    </WorldChrome>
  );
};
