import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S60_MyRootPractice: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(60); }, [inView, reachWorld]);

  return (
    <div ref={ref} id="act10" className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-slate-500 mb-8 drop-shadow-lg">Act X : Integration</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 uppercase tracking-widest">
            The Covenant
        </h2>
        <div className="bg-black/40 p-12 rounded-3xl border border-red-900/30 backdrop-blur-md">
            <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed mb-8">
                You cannot build a house on an earthquake. 
            </p>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                Before you journey into the emotional waters of the Sacral chakra, or the blazing fire of the Solar Plexus, you must commit to maintaining your foundation. The root is never "finished." It is a daily practice of gravity.
            </p>
        </div>
      </div>
    </div>
  );
};