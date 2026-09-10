import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

export const RamResonanceSection: React.FC = () => {
  const [active,setActive]=useState(false);
  return <WorldFrame eyebrow="27 — BĪJA" title="Let Rāṃ become a focal point." copy="A contemplative resonance chamber. Press and hold to animate the visual field around the traditional bīja. No activation score—just a place to attend." scene="temple">
    <div className="max-w-4xl mx-auto rounded-[2rem] border border-amber-100/10 bg-black/25 min-h-[480px] flex items-center justify-center relative overflow-hidden">
      {Array.from({length:6}).map((_,i)=><motion.div key={i} className="absolute rounded-full border border-amber-200/15" style={{width:120+i*70,height:120+i*70}} animate={active?{scale:[.9,1.08,.9],opacity:[.15,.42,.15],rotate:[0,18,0]}:{scale:1,opacity:.08}} transition={{duration:2.1+i*.15,repeat:Infinity,ease:'easeInOut'}}/>) }
      <button onPointerDown={()=>setActive(true)} onPointerUp={()=>setActive(false)} onPointerCancel={()=>setActive(false)} onPointerLeave={()=>setActive(false)} className="relative z-10 w-48 h-48 rounded-full border border-amber-300/20 bg-black/30 flex flex-col items-center justify-center select-none touch-none">
        <div className="text-7xl font-serif text-amber-100 drop-shadow-[0_0_20px_rgba(255,192,86,.45)]">रं</div>
        <div className="mt-2 text-[9px] tracking-[.32em] uppercase text-amber-100/35">{active?'resonating':'press & hold'}</div>
      </button>
    </div>
  </WorldFrame>;
};
