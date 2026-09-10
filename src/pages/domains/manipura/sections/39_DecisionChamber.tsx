import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Pause, ShieldCheck, Volume2 } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const choices = [
  { id: 'react', label: 'React', note: 'Fast relief. The room gets hotter.' },
  { id: 'pause', label: 'Pause', note: 'You buy information before you buy a consequence.' },
  { id: 'respond', label: 'Respond', note: 'You choose an action you can stand behind.' },
  { id: 'walk', label: 'Walk away', note: 'Sometimes agency is leaving the heat.' },
];

export const DecisionChamberSection: React.FC = () => {
  const [choice, setChoice] = useState<string | null>(null);
  const chosen = choices.find(c => c.id === choice);
  return (
    <WorldChrome number="39" eyebrow="DECISION / AGENCY" title="The chamber gives you one breath." subtitle="A real-life moment: someone takes credit for work you did. Notice what happens before you choose what to do." image="agency" tone="crimson">
      <div className="relative min-h-[610px] rounded-[2rem] border border-orange-200/10 bg-black/45 overflow-hidden p-6 md:p-10">
        <motion.div animate={{ scale: choice === 'react' ? [1, 1.12, 1] : 1, opacity: choice === 'react' ? .35 : .18 }} transition={{ duration: .6 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500 blur-3xl" />
        <div className="relative z-10 h-full grid md:grid-cols-[1.05fr_.95fr] gap-8 items-center">
          <div className="rounded-3xl border border-white/8 bg-black/35 p-6 md:p-8">
            <div className="flex items-center gap-3 text-white/35 text-[10px] font-mono tracking-[.3em] uppercase mb-6"><Volume2 size={14} /> incoming moment</div>
            <p className="font-serif text-3xl md:text-4xl text-amber-50 leading-tight">“Your colleague is presenting the idea you developed — as if it were theirs.”</p>
            <div className="mt-7 flex items-center gap-3 text-orange-200/55 text-xs uppercase tracking-[.25em]"><Pause size={13} /> notice the heat first</div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">{choices.map(c => <button key={c.id} onClick={() => setChoice(c.id)} className={`min-h-28 rounded-2xl border p-4 text-left transition-all ${choice === c.id ? 'border-amber-200/35 bg-amber-300/[.08]' : 'border-white/8 bg-white/[.02] hover:border-orange-200/20'}`}><div className="font-serif text-xl text-white/80">{c.label}</div><div className="mt-2 text-[10px] text-white/30 leading-4">{c.note}</div></button>)}</div>
            <AnimatePresence mode="wait">{chosen && <motion.div key={chosen.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl border border-amber-200/10 bg-amber-300/[.03] p-5 flex gap-3"><ShieldCheck size={17} className="text-amber-200/55 mt-0.5"/><div><div className="text-[10px] uppercase tracking-[.25em] font-mono text-amber-200/50">your chosen direction</div><p className="mt-2 text-white/60 leading-6">{chosen.note}</p></div></motion.div>}</AnimatePresence>
            <button onClick={() => setChoice(null)} className="mt-7 text-[10px] uppercase tracking-[.25em] text-white/25 hover:text-white/55 flex items-center gap-2">Reset chamber <ArrowUpRight size={12} /></button>
          </div>
        </div>
      </div>
    </WorldChrome>
  );
};
