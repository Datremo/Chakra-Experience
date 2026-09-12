import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

export const FuelLabSection: React.FC = () => {
  const [fuel,setFuel]=useState(.45);
  const state=fuel<.28?'TOO LITTLE':fuel>.72?'TOO MUCH':'JUST RIGHT';
  return <WorldFrame eyebrow="25 — FUEL" title="Find the fire that can keep going." copy="Change the fuel. Watch the system move from weak, to steady, to overwhelming." scene="forge">
    <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-6 max-w-6xl mx-auto items-center">
      <div className="relative h-[360px] rounded-[2rem] border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute rounded-[50%]" animate={{width:100+fuel*180,height:100+fuel*180}} style={{background:'radial-gradient(circle,#fff6c7 0%,#ffb52e 25%,rgba(255,78,0,.2) 60%,transparent 70%)'}}/>
        <div className="relative text-center"><div className="text-[9px] tracking-[.3em] uppercase text-amber-100/35">fuel state</div><div className="mt-2 font-serif text-3xl text-amber-50">{state}</div></div>
      </div>
      <div className="rounded-[2rem] border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] p-7"><div className="flex justify-between text-xs text-amber-100/45"><span>less</span><span>steady</span><span>more</span></div><input aria-label="fuel" type="range" min="0" max="1" step="0.01" value={fuel} onChange={e=>setFuel(Number(e.target.value))} className="w-full mt-6 accent-amber-400"/><p className="mt-7 text-base leading-relaxed text-amber-50/65">The goal is not maximum flame. It is a fire that transforms without consuming its own future.</p></div>
    </div>
  </WorldFrame>;
};
