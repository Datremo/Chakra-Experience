import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageSquare, CalendarClock, Search, Zap } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const sparks = [Bell, MessageSquare, CalendarClock, Search, Zap];

export const ScatteredEnergySection: React.FC = () => {
  const [gathered, setGathered] = useState<number[]>([]);
  useEffect(() => setGathered([]), []);
  return (
    <WorldChrome number="36" eyebrow="ATTENTION / FRAGMENTATION" title="Gather the sparks." subtitle="A nervous system flooded with small demands can make important work feel strangely far away. Watch fragmentation happen, then reverse it." image="agency" tone="neutral" grid>
      <div className="relative min-h-[600px] rounded-[2rem] border border-amber-100/10 bg-black/40 p-6 md:p-10 overflow-hidden">
        <motion.div animate={{ scale: gathered.length === sparks.length ? 1.15 : 1 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(255,246,213,.8),rgba(255,164,40,.4)_24%,rgba(220,72,7,.08)_66%,transparent_70%)] blur-[1px]" />
        {sparks.map((Icon, i) => { const angle = (i / sparks.length) * Math.PI * 2; const radius = gathered.includes(i) ? 0 : 180; return <motion.button key={i} animate={{ x: Math.cos(angle) * radius, y: Math.sin(angle) * radius }} transition={{ type: 'spring', stiffness: 100, damping: 18 }} onClick={() => setGathered(v => v.includes(i) ? v.filter(n => n !== i) : [...v, i])} className="absolute left-1/2 top-1/2 -ml-7 -mt-7 w-14 h-14 rounded-full border border-amber-200/15 bg-black/60 backdrop-blur-md flex items-center justify-center text-amber-100/60 hover:text-amber-100 hover:border-amber-200/40 transition"><Icon size={16} /></motion.button>; })}
        <div className="relative z-10 h-[520px] flex items-end justify-center pb-6 pointer-events-none"><div className="text-center"><div className="font-mono text-[9px] uppercase tracking-[.35em] text-white/25">attention gathered</div><div className="mt-3 font-serif text-4xl text-amber-50">{Math.round((gathered.length / sparks.length) * 100)}%</div></div></div>
        <p className="absolute bottom-6 left-6 right-6 text-center text-[10px] uppercase tracking-[.25em] text-white/25">Tap each spark to bring it back to the centre.</p>
      </div>
    </WorldChrome>
  );
};
