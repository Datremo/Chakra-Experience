import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S55_EarningALiving: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(55); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-5xl md:text-7xl font-serif text-yellow-600 mb-10 uppercase tracking-widest">
            Earning a Living
        </h3>
        <p className="text-slate-300 text-xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
          Providing for yourself and your dependents is not "unspiritual." 
        </p>
        <div className="w-16 h-1 bg-yellow-900/50 mx-auto my-8" />
        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          It is the very essence of honoring the Earth element and securing your right to exist safely on this plane.
        </p>
      </div>
    </div>
  );
};