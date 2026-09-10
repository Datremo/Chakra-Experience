import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, ShieldAlert } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

export const EffortVsStrainSection: React.FC = () => {
  const [effort, setEffort] = useState(48);
  const strain = Math.max(0, effort - 72);
  const state = effort < 28 ? 'UNDER-LOADED' : strain > 0 ? 'STRAIN' : 'USEFUL EFFORT';
  return (
    <WorldChrome number="42" eyebrow="BODY / EFFORT" title="Feel the edge." subtitle="Effort can build capacity. Strain is a different signal. Learn to notice the transition before form or safety deteriorates." image="navel" tone="crimson" grid>
      <div className="relative min-h-[580px] rounded-[2rem] border border-orange-200/10 bg-black/40 p-6 md:p-10 overflow-hidden">
        <motion.div animate={{ rotate: effort * 2.2 }} className="absolute left-1/2 top-1/2 w-[430px] h-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-200/10" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 text-orange-100/45 text-[10px] uppercase tracking-[.3em] font-mono"><Gauge size={14} /> effort monitor</div>
          <div className="mt-6 text-5xl font-serif text-amber-50">{effort}</div>
          <div className={`mt-2 text-[10px] uppercase tracking-[.3em] font-mono ${state === 'STRAIN' ? 'text-red-200/70' : 'text-amber-200/45'}`}>{state}</div>
          <div className="w-full max-w-xl mt-10"><input type="range" min="0" max="100" value={effort} onChange={(e) => setEffort(Number(e.target.value))} className="w-full accent-orange-400"/><div className="flex justify-between mt-3 text-[9px] uppercase tracking-[.2em] text-white/20"><span>too little</span><span>useful</span><span>too much</span></div></div>
          <motion.div animate={{ width: `${effort}%` }} className="mt-9 h-3 rounded-full bg-gradient-to-r from-amber-300/20 via-orange-300/60 to-red-400/70" />
          <p className="max-w-lg mt-8 text-white/45 leading-7">The point is not finding a magic number. It is building a habit of listening to the signal that says “adjust.”</p>
          {state === 'STRAIN' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 flex items-center gap-2 text-red-200/65 text-xs uppercase tracking-[.22em]"><ShieldAlert size={14} /> Back off when safety or form deteriorates.</motion.div>}
        </div>
      </div>
    </WorldChrome>
  );
};
