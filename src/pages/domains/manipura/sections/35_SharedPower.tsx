import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRightLeft } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const tasks = [
  ['reply to the email', 'YOU'],
  ['prepare the slide deck', 'YOU'],
  ['check the numbers', 'YOU'],
  ['ask for a second opinion', 'YOU'],
];

export const SharedPowerSection: React.FC = () => {
  const [owners, setOwners] = useState(tasks.map(() => 'YOU'));
  const shared = owners.filter(x => x === 'SHARED').length;
  return (
    <WorldChrome number="35" eyebrow="POWER / RELATION" title="Shared power is still power." subtitle="Capability does not become smaller when responsibility becomes distributed." image="agency" tone="gold">
      <div className="relative min-h-[600px] rounded-[2rem] border border-amber-200/10 bg-black/35 p-6 md:p-10">
        <div className="flex items-center justify-between mb-8"><div className="flex items-center gap-3 text-amber-100/65"><Users size={17} /><span className="text-[10px] uppercase tracking-[.3em] font-mono">The shared forge</span></div><div className="text-[10px] font-mono tracking-[.2em] text-white/30">{shared} SHARED</div></div>
        <div className="space-y-4">
          {tasks.map(([task], i) => {
            const isShared = owners[i] === 'SHARED';
            return <motion.button key={task} onClick={() => setOwners(v => v.map((x, j) => j === i ? (x === 'YOU' ? 'SHARED' : 'YOU') : x))} whileHover={{ x: 4 }} className="w-full text-left rounded-2xl border border-white/7 bg-white/[.02] px-5 py-5 flex items-center justify-between group">
              <div><div className="text-white/70">{task}</div><div className={`mt-1 text-[9px] uppercase tracking-[.25em] ${isShared ? 'text-emerald-200/60' : 'text-orange-200/45'}`}>{isShared ? 'shared responsibility' : 'carried alone'}</div></div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/35"><span>{owners[i]}</span><ArrowRightLeft size={14} className="group-hover:text-amber-200/70 transition-colors" /></div>
            </motion.button>;
          })}
        </div>
        <div className="mt-10 rounded-3xl border border-amber-200/10 bg-amber-300/[.03] p-6 text-center"><p className="font-serif text-2xl text-amber-50/80">“I do not need to carry everything to prove I can.”</p><p className="mt-3 text-sm text-white/35">Agency includes choosing what to hold — and what to hand over.</p></div>
      </div>
    </WorldChrome>
  );
};
