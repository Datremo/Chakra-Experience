import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

export const EffortVsStrainSection: React.FC = () => {
  const [force,setForce]=useState(.35);
  const label=force<.35?'UNDER-LOADED':force<.72?'USEFUL EFFORT':'STRAIN';
  const ring=useMemo(()=>Math.round(force*100),[force]);
  return <WorldFrame eyebrow="26 — BODY" title="Feel the difference between effort and strain." copy="Push with enough force to act. Notice when more force stops producing better results." scene="human">
    <div className="max-w-5xl mx-auto rounded-[2rem] border border-amber-100/10 bg-black/25 p-7 md:p-10">
      <div className="flex flex-col md:flex-row md:items-end gap-8">
        <div className="flex-1"><div className="text-[10px] tracking-[.28em] uppercase text-amber-100/35">force</div><input aria-label="effort" type="range" min="0" max="1" step="0.01" value={force} onChange={e=>setForce(Number(e.target.value))} className="w-full mt-6 accent-amber-400"/><div className="mt-4 text-xs text-amber-100/35">low ← controlled effort → excessive force</div></div>
        <div className="w-40 h-40 rounded-full border border-amber-100/10 flex items-center justify-center"><motion.div className="text-center" animate={{scale:1+force*.08}}><div className="text-4xl font-serif text-amber-50">{ring}</div><div className="text-[9px] tracking-[.28em] uppercase text-amber-100/35">{label}</div></motion.div></div>
      </div>
    </div>
  </WorldFrame>;
};
