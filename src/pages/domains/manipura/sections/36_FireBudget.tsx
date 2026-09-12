import React, { useMemo, useState } from 'react';
import { WorldFrame } from '../components/WorldFrame';

const items = ['work','body','people','learning','rest'];
export const FireBudgetSection: React.FC = () => {
  const [weights,setWeights]=useState<Record<string,number>>(()=>Object.fromEntries(items.map(i=>[i,0.2])));
  const total=useMemo(()=>Object.values(weights).reduce((a,b)=>a+b,0),[weights]);
  const normalized=items.map(i=>weights[i]/total);
  return <WorldFrame eyebrow="21 — ENERGY" title="Your day has finite heat." copy="Allocate attention before the day allocates it for you." scene="human">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-6 items-center max-w-6xl mx-auto">
      <div className="relative mx-auto w-72 h-72 rounded-full border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] flex items-center justify-center">
        {items.map((item,i)=>{const angle=i/5*Math.PI*2-Math.PI/2; return <div key={item} className="absolute left-1/2 top-1/2 w-2 h-[46%] origin-top rounded-full" style={{transform:`rotate(${angle}rad) translateX(-50%)`,background:`linear-gradient(to bottom, rgba(255,220,130,.7), rgba(255,90,0,${0.08+normalized[i]*.5}))`,opacity:.3+normalized[i]*.7}}/>})}
        <div className="text-center"><div className="font-serif text-4xl text-amber-50">24</div><div className="text-[9px] tracking-[.3em] uppercase text-amber-100/40">hours</div></div>
      </div>
      <div className="space-y-4">{items.map(item=><label key={item} className="block"><div className="flex justify-between text-xs text-amber-50/55"><span>{item}</span><span>{Math.round((weights[item]/total)*100)}%</span></div><input type="range" min="0.04" max="0.8" step="0.01" value={weights[item]} onChange={e=>setWeights(v=>({...v,[item]:Number(e.target.value)}))} className="w-full mt-2 accent-amber-400"/></label>)}</div>
    </div>
  </WorldFrame>;
};
