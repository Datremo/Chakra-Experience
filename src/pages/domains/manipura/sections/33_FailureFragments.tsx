import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

const fragments = [
  ['LESSON','What did reality teach you?'],
  ['SKILL','What can you do now that you could not do before?'],
  ['CONSTRAINT','What limitation became visible?'],
  ['QUESTION','What question became more precise?'],
  ['NEXT MOVE','What changes in the next attempt?'],
];
export const FailureFragmentsSection: React.FC = () => {
  const [picked, setPicked] = useState<string[]>([]);
  const pieces = useMemo(()=>fragments.map((f,i)=>({key:f[0],x:18+i*16,y:30+(i%2)*24,r:-20+i*11})),[]);
  return <WorldFrame eyebrow="18 — FAILURE" title="Let failure fall apart without taking you with it." copy="A failed structure is an event. Break it into usable material, then decide what belongs in the next attempt." scene="forge">
    <div className="relative h-[450px] rounded-[2rem] border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] overflow-hidden">
      {pieces.map((p,i)=><motion.button key={p.key} onClick={()=>setPicked(v=>v.includes(p.key)?v.filter(x=>x!==p.key):[...v,p.key])} className={`absolute w-28 h-20 rounded-xl border text-left p-3 ${picked.includes(p.key)?'border-amber-300/40 bg-amber-200/8':'border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)]'}`} style={{left:`${p.x}%`,top:`${p.y}%`,rotate:p.r}} animate={{ y: picked.includes(p.key)?-8:0, rotate:p.r + (picked.includes(p.key)?4:0) }}>
        <div className="text-[9px] tracking-[.18em] uppercase text-amber-100/50">{p.key}</div><div className="mt-1 text-[11px] text-amber-50/60">{fragments[i][1]}</div>
      </motion.button>)}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 text-center text-xs text-amber-100/35">{picked.length === fragments.length ? 'TRY → LEARN → ADJUST' : 'Choose the fragments worth carrying forward.'}</div>
    </div>
  </WorldFrame>;
};
