import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S07_WhereExactly: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(7); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 relative">
      <div className="max-w-4xl text-center bg-black/30 p-16 rounded-[3rem] border border-red-900/40 backdrop-blur-xl shadow-2xl">
        <h2 className="text-5xl font-serif text-white mb-12 tracking-widest uppercase">Where Exactly?</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-12 text-slate-300 text-xl font-light leading-relaxed">
            <div className="flex-1">
                <span className="block text-red-500 font-bold uppercase tracking-widest mb-2 text-sm">Men</span>
                Between the anus and the genitals (the perineum).
            </div>
            <div className="w-px bg-white/10 hidden md:block" />
            <div className="flex-1">
                <span className="block text-red-500 font-bold uppercase tracking-widest mb-2 text-sm">Women</span>
                At the posterior side of the cervix.
            </div>
        </div>
        
        <p className="mt-12 text-lg text-slate-400 italic font-serif">
            It is the very base of the pelvic floor, the literal bottom of the torso.
        </p>
      </div>
    </div>
  );
};