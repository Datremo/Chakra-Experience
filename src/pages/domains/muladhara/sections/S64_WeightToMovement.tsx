import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S64_WeightToMovement: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(64); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* The shift from red to orange begins */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black via-[#1a0500] to-[#2a1000]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
      />
      
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-orange-600 mb-8 drop-shadow-lg">The Final Cinematic Transformation</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 tracking-widest">
            Weight <span className="text-orange-500 italic">to</span> Movement
        </h2>
        <p className="text-slate-300 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            The rigid, unmoving gravity of the root begins to yield. From the solid earth, a spring begins to flow.
        </p>
      </div>
    </div>
  );
};