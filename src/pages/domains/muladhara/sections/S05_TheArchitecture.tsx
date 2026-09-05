import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S05_TheArchitecture: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(5); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 relative">
      <div className="max-w-4xl text-center bg-black/40 p-16 rounded-3xl border border-red-900/30 backdrop-blur-md shadow-2xl">
        <h3 className="text-red-500 font-bold tracking-[0.5em] uppercase text-sm mb-6">The Architecture</h3>
        <h2 className="text-5xl font-serif text-white mb-10 tracking-widest uppercase">
            A Spiritual Base Structure
        </h2>
        <p className="text-slate-300 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
            The root chakra is not just an energy center. It is a highly specific structural architecture that grounds consciousness into physical matter.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            It operates as a massive energetic anchor, pulling the erratic winds of the mind down into the density of the earth.
        </p>
      </div>
    </div>
  );
};