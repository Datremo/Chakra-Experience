import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S03_WhatIsMuladhara: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(3); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-[100svh] w-full flex flex-col items-center justify-center p-6 md:p-8 bg-transparent z-10 relative">
      <div className="max-w-4xl text-center mt-12 md:mt-0">
        <h3 className="text-red-700 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-sm mb-4 md:mb-6 drop-shadow-lg">The Foundation</h3>
        <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 md:mb-10 tracking-wider md:tracking-widest uppercase drop-shadow-2xl">
            Mūlādhāra
        </h2>
        <div className="w-16 md:w-24 h-1 bg-red-900 mx-auto mb-6 md:mb-10" />
        <p className="text-slate-300 text-lg md:text-3xl font-serif italic leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
            <span className="block md:inline mb-2 md:mb-0">Mūla (Root)</span> 
            <span className="hidden md:inline mx-2">+</span> 
            <span className="block md:inline">Adhāra (Base / Support)</span>
        </p>
        <p className="text-slate-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
            It is the absolute base of the energetic body. The grounding rod. Without it, higher states of consciousness are impossible to sustain. You cannot build a temple without a foundation.
        </p>
      </div>
    </div>
  );
};