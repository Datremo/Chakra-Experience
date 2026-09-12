import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';
import { useManipuraJourney } from '../state/ManipuraJourneyContext';

export const RecoveryEmberSection: React.FC = () => {
  const { recovery, setMetric } = useManipuraJourney();
  const [rest,setRest]=useState(0);
  useEffect(()=>{ setMetric('recovery', rest); },[rest,setMetric]);
  return <WorldFrame eyebrow="24 — RECOVERY" title="The fire needs darkness too." copy="Recovery is part of capacity, not a reward for productivity." scene="sun">
    <div className="max-w-4xl mx-auto rounded-[2rem] border border-amber-100/10 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] p-8 md:p-12 text-center">
      <div className="relative h-48 flex items-center justify-center">
        <motion.div className="rounded-full" style={{background:'radial-gradient(circle,#fff1bd 0%,#ffab2b 22%,rgba(255,82,0,.25) 56%,transparent 70%)'}} animate={{width:100+rest*140,height:100+rest*140,opacity:.32+rest*.6}} />
        <div className="absolute text-[9px] tracking-[.28em] uppercase text-amber-100/40">ember</div>
      </div>
      <input aria-label="recovery" type="range" min="0" max="1" step="0.01" value={rest} onChange={e=>setRest(Number(e.target.value))} className="w-full accent-amber-400"/>
      <div className="mt-5 text-sm text-amber-100/50">{recovery < .25 ? 'The fire is working without enough recovery.' : recovery < .7 ? 'Enough dark space for the ember to remain alive.' : 'The system has room to breathe.'}</div>
    </div>
  </WorldFrame>;
};
