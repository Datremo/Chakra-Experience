import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

const tasks = ['Schedule', 'Research', 'Prepare', 'Decide', 'Execute'];
export const SharedPowerSection: React.FC = () => {
  const [assigned, setAssigned] = useState<Record<string,string>>({});
  const assign = (task:string) => setAssigned(v => ({...v,[task]: v[task] ? '' : 'shared'}));
  const shared = Object.values(assigned).filter(Boolean).length;
  return <WorldFrame eyebrow="19 — CAPACITY" title="Shared power is still power." copy="You do not have to carry every task to prove that you are capable." scene="human">
    <div className="grid md:grid-cols-5 gap-3 max-w-6xl mx-auto">{tasks.map((task,i)=><motion.button key={task} onClick={()=>assign(task)} whileTap={{scale:.98}} className={`relative min-h-[190px] rounded-[1.6rem] border p-4 text-left overflow-hidden ${assigned[task]?'border-emerald-200/25 bg-emerald-200/5':'border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)]'}`}>
      <div className="text-[9px] tracking-[.2em] uppercase text-amber-100/35">0{i+1}</div><div className="mt-4 font-serif text-xl text-amber-50">{task}</div><div className="absolute bottom-4 left-4 right-4 text-[10px] text-amber-100/40">{assigned[task]?'shared → released':'hold'}</div>
    </motion.button>)}</div>
    <div className="mt-6 text-center text-sm text-amber-100/45">{shared === tasks.length ? 'The forge kept burning. You stopped proving that you had to hold everything.' : `${shared} task${shared===1?'':'s'} shared`}</div>
  </WorldFrame>;
};
