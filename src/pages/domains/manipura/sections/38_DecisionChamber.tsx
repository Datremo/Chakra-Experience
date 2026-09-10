import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';
import { useManipuraJourney } from '../state/ManipuraJourneyContext';

const options=[['speak','Speak up calmly'],['observe','Wait and observe'],['confront','Confront directly'],['letgo','Let it go']];
export const DecisionChamberSection: React.FC = () => {
  const { recordChoice } = useManipuraJourney();
  const [picked,setPicked]=useState('');
  const choose=(key:string)=>{setPicked(key);recordChoice('credit',key)};
  return <WorldFrame eyebrow="23 — CHOICE" title="Between stimulus and response lies space." copy="A real-life choice: someone takes credit for your work. Notice the impulse, then choose the response you can own." scene="human">
    <div className="max-w-5xl mx-auto">
      <div className="rounded-[2rem] border border-amber-100/10 bg-black/25 p-8 md:p-10">
        <div className="text-[10px] tracking-[.3em] uppercase text-amber-100/35">THE MOMENT</div>
        <div className="mt-4 font-serif text-2xl md:text-4xl text-amber-50">“Your colleague is taking credit for work you did.”</div>
        <div className="grid md:grid-cols-4 gap-3 mt-8">{options.map(([key,label])=><button key={key} onClick={()=>choose(key)} className={`rounded-2xl border p-4 text-left ${picked===key?'border-amber-300/40 bg-amber-200/8':'border-amber-100/10 bg-black/20'}`}><div className="text-sm text-amber-50/80">{label}</div><div className="mt-2 text-[10px] tracking-[.16em] uppercase text-amber-100/35">choose</div></button>)}</div>
        {picked && <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mt-7 flex items-center gap-4 rounded-2xl border border-amber-100/10 bg-black/20 p-5"><div className="w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(255,190,75,.65)]"/><p className="text-sm text-amber-100/55">The point is not the “right” answer. The point is that the impulse did not get to become the only answer.</p></motion.div>}
      </div>
    </div>
  </WorldFrame>;
};
