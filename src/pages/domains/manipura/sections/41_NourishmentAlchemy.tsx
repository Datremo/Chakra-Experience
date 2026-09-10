import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, Wheat, Fish, Droplets, Leaf, Flame } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const foods = [
  { id: 'protein', label: 'Protein', icon: Fish },
  { id: 'carb', label: 'Carbohydrate', icon: Wheat },
  { id: 'veg', label: 'Vegetables', icon: Leaf },
  { id: 'fat', label: 'Healthy fat', icon: Apple },
  { id: 'water', label: 'Hydration', icon: Droplets },
];

export const NourishmentAlchemySection: React.FC = () => {
  const [plate, setPlate] = useState<string[]>([]);
  const balanced = ['protein', 'carb', 'veg'].every(x => plate.includes(x)) && plate.length >= 4;
  return (
    <WorldChrome number="41" eyebrow="BODY / NOURISHMENT" title="Build steady fuel." subtitle="This is not “chakra food.” It is a visual exploration of ordinary nourishment, energy and balance." image="navel" tone="ember">
      <div className="relative min-h-[600px] rounded-[2rem] border border-amber-200/10 bg-black/45 p-6 md:p-10">
        <div className="grid lg:grid-cols-[1fr_.9fr] gap-10 items-center h-full">
          <div className="relative mx-auto w-72 h-72 rounded-full border border-amber-200/15 bg-black/30 p-4 shadow-[0_0_80px_rgba(245,158,11,.06)]"><div className="w-full h-full rounded-full border border-dashed border-amber-200/10 grid grid-cols-2 grid-rows-2 overflow-hidden">{foods.slice(0,4).map(({id}, i) => <div key={id} className={`flex items-center justify-center text-[9px] uppercase tracking-[.2em] transition-all ${plate.includes(id) ? 'bg-amber-300/[.1] text-amber-100/60' : 'bg-white/[.01] text-white/10'}`}>{plate.includes(id) ? id : 'add'}</div>)}</div><motion.div animate={{ scale: balanced ? [1, 1.12, 1] : 1 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[radial-gradient(circle,rgba(255,250,230,.85),rgba(255,164,35,.4),transparent_72%)] flex items-center justify-center"><Flame size={15} className="text-amber-100/65" /></motion.div></div>
          <div className="space-y-3">{foods.map(({id,label,icon:Icon}) => <button key={id} onClick={() => setPlate(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id])} className={`w-full rounded-2xl border p-4 flex items-center gap-4 text-left transition ${plate.includes(id) ? 'border-amber-200/25 bg-amber-300/[.05]' : 'border-white/7 bg-white/[.02]'}`}><Icon size={16} className={plate.includes(id) ? 'text-amber-200/80' : 'text-white/30'} /><span className="text-sm text-white/60 flex-1">{label}</span><span className="text-[9px] uppercase tracking-[.2em] text-white/25">{plate.includes(id) ? 'on plate' : 'add'}</span></button>)}
          <div className="pt-4 text-center text-sm font-serif text-amber-100/70">{balanced ? 'Looks balanced enough to eat.' : 'Compose a plate, not a prescription.'}</div></div>
        </div>
      </div>
    </WorldChrome>
  );
};
