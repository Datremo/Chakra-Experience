import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

const choices=['respond','schedule','silence','remove'];
export const DigitalHeatSection: React.FC = () => {
  const [choice,setChoice]=useState('');
  const impact={respond:1,schedule:.65,silence:.25,remove:.1};
  return <WorldFrame eyebrow="22 — BOUNDARIES" title="Not every notification deserves your heat." copy="Digital attention is still attention. Decide what reaches the centre." scene="human">
    <div className="relative max-w-4xl mx-auto h-[430px] rounded-[2rem] border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] overflow-hidden">
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff0b4,rgba(255,150,40,.6)_25%,rgba(255,65,0,.22)_58%,transparent_72%)] shadow-[0_0_100px_rgba(255,112,20,.2)]" animate={{width:160+140*(impact[choice as keyof typeof impact]??.55),height:160+140*(impact[choice as keyof typeof impact]??.55)}}/>
      <div className="absolute top-8 left-8 right-8 flex justify-between text-[9px] tracking-[.22em] uppercase text-amber-100/35"><span>inbox heat</span><span>{choice || 'waiting'}</span></div>
      {Array.from({length:14}).map((_,i)=><motion.div key={i} className="absolute w-2 h-2 rounded-full bg-amber-200/45" style={{left:`${10+(i*19)%80}%`,top:`${16+(i*31)%66}%`}} animate={choice?{x:'-50%',y:'-50%',opacity:.25}:{x:0,y:0,opacity:[.2,.8,.2]}} transition={{duration:1.4+i*.06,repeat:Infinity,delay:i*.03}}/>) }
      <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2 justify-center">{choices.map(c=><button key={c} onClick={()=>setChoice(c)} className={`px-4 py-2 rounded-full border text-[9px] tracking-[.2em] uppercase ${choice===c?'border-amber-300/40 bg-amber-200/8 text-amber-50':'border-amber-100/10 text-amber-100/45'}`}>{c}</button>)}</div>
    </div>
  </WorldFrame>;
};
