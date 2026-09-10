import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { ChakraData } from '../../../../data/chakras';

interface Props { onClose: () => void; chakra: ChakraData; }

export const ReturnToJourneySection: React.FC<Props> = ({ onClose }) => {
  const [ready,setReady]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setReady(true),1200); return ()=>clearTimeout(t); },[]);
  return <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6">
    <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(255,196,100,.20),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(102,160,82,.16),transparent_44%)]" animate={{opacity:[.6,1,.7]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}/>
    <motion.div className="absolute w-[42vw] h-[42vw] max-w-[620px] max-h-[620px] rounded-full border border-amber-100/10" initial={{scale:.65,opacity:0}} animate={{scale:1,opacity:.85}} transition={{duration:2.2}}/>
    <motion.div className="absolute w-[22vw] h-[22vw] max-w-[320px] max-h-[320px] rounded-full bg-[radial-gradient(circle,#fff8d7 0%,#ffd36d 16%,#e89234 36%,rgba(255,96,20,.16)_62%,transparent_72%)] shadow-[0_0_180px_rgba(255,187,78,.20)]" animate={{scale:[.96,1.04,.96]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}/>
    <div className="relative z-10 max-w-3xl text-center">
      <div className="text-[10px] tracking-[.38em] uppercase text-amber-200/45">MAṆIPŪRA · COMPLETE</div>
      <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}} className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-amber-50 leading-[.9]">THE FIRE IS STEADY.</motion.h2>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8,duration:1}} className="mt-8 text-lg md:text-xl text-amber-100/60 max-w-2xl mx-auto leading-relaxed">You entered with raw heat. You leave with a clearer relationship to force, attention, action and choice.</motion.p>
      <motion.div initial={{opacity:0}} animate={{opacity:ready?1:0}} transition={{duration:1}} className="mt-12">
        <button onClick={onClose} className="inline-flex items-center gap-4 px-7 py-4 rounded-full border border-amber-200/25 bg-black/25 hover:bg-amber-100/5 hover:border-amber-200/45 transition-all text-xs tracking-[.25em] uppercase text-amber-50">
          <ArrowLeft size={16}/> Return to Journey
        </button>
      </motion.div>
    </div>
  </section>;
};
