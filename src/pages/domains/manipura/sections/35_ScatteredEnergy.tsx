import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

const sparks = ['notification','unfinished task','worry','comparison','open tab','urge'];
export const ScatteredEnergySection: React.FC = () => {
  const [gathered,setGathered]=useState<string[]>([]);
  const spots=useMemo(()=>sparks.map((s,i)=>({s,x:12+(i*14)%76,y:20+(i*27)%55})),[]);
  return <WorldFrame eyebrow="20 — ATTENTION" title="Gather the sparks." copy="Attention fragments across notifications, worries, tasks and tabs. Bring the sparks back to one fire." scene="forge">
    <div className="relative h-[460px] rounded-[2rem] border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[radial-gradient(circle,#fff1b1,rgba(255,135,25,.65)_25%,rgba(255,68,0,.2)_55%,transparent_72%)] shadow-[0_0_80px_rgba(255,112,20,.18)]" />
      {spots.map(({s,x,y})=><motion.button key={s} onClick={()=>setGathered(v=>v.includes(s)?v.filter(x=>x!==s):[...v,s])} className={`absolute w-20 h-20 rounded-full border text-[9px] tracking-[.1em] uppercase ${gathered.includes(s)?'border-amber-300/15 text-amber-100/15':'border-amber-100/10 text-amber-100/45'}`} style={{left:`${x}%`,top:`${y}%`}} animate={gathered.includes(s)?{x:'-50%',y:'-50%',scale:.4,opacity:.2}:{x:0,y:0,scale:1,opacity:1}} transition={{type:'spring',stiffness:55,damping:12}}>{s}</motion.button>)}
      <div className="absolute bottom-5 left-0 right-0 text-center text-xs text-amber-100/35">{gathered.length===sparks.length?'One point. One flame.':'Tap each spark to gather it.'}</div>
    </div>
  </WorldFrame>;
};
