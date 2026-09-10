import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

const labels = ['PROMOTION', 'PRAISE', 'MONEY', 'FITNESS', 'DEGREE', 'STATUS'];
export const AchievementMonumentSection: React.FC = () => {
  const [added, setAdded] = useState<string[]>([]);
  const [stripped, setStripped] = useState(false);
  const toggle = (label: string) => setAdded(v => v.includes(label) ? v.filter(x=>x!==label) : [...v, label]);
  return <WorldFrame eyebrow="17 — IDENTITY" title="What happens when achievement becomes identity?" copy="Build a monument from outcomes. Then remove the labels and see what remains." scene="human">
    <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-5 items-stretch">
      <div className="rounded-[2rem] border border-amber-100/10 bg-black/25 p-6">
        <div className="text-[10px] tracking-[.3em] uppercase text-amber-100/40">ADD A LAYER</div>
        <div className="grid grid-cols-2 gap-3 mt-5">{labels.map(label => <button key={label} onClick={()=>toggle(label)} className={`rounded-xl border px-3 py-3 text-xs tracking-[.12em] ${added.includes(label)?'border-amber-300/35 bg-amber-200/8 text-amber-50':'border-amber-100/10 text-amber-100/45'}`}>{label}</button>)}</div>
        <button onClick={()=>setStripped(v=>!v)} className="mt-7 w-full rounded-full border border-amber-200/20 py-3 text-[10px] tracking-[.25em] uppercase text-amber-100/70 hover:bg-amber-100/5">{stripped?'Restore labels':'Remove the labels'}</button>
      </div>
      <div className="relative rounded-[2rem] border border-amber-100/10 bg-black/30 min-h-[440px] overflow-hidden flex items-end justify-center p-10">
        <div className="absolute bottom-0 w-64 h-20 bg-amber-900/10 blur-2xl" />
        <motion.div layout className="relative w-44 rounded-t-[3rem] bg-gradient-to-t from-amber-950/80 to-amber-300/20 border border-amber-200/10 flex flex-col-reverse items-center justify-end gap-1 p-3" style={{height: `${150 + added.length*34}px`, filter: stripped ? 'saturate(.45)' : 'none'}}>
          <div className="text-[9px] tracking-[.2em] text-amber-50/55 pb-1">{stripped ? 'YOU' : 'OUTCOME'}</div>
          {added.map((x,i)=><motion.div key={x} layout className="w-full rounded-lg border border-amber-100/10 bg-black/15 py-2 text-center text-[9px] text-amber-50/55">{x}</motion.div>)}
        </motion.div>
        {stripped && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="absolute top-9 text-center font-serif text-2xl text-amber-50/80 max-w-md">The monument changed. You did not disappear.</motion.p>}
      </div>
    </div>
  </WorldFrame>;
};
