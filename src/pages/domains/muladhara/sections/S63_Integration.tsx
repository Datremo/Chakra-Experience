import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S63_Integration: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(63); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-black">
      <div className="z-10 text-center">
        <div className="w-px h-32 bg-gradient-to-b from-red-900 to-slate-900 mx-auto mb-12" />
        <h3 className="text-2xl font-serif text-slate-500 tracking-[0.5em] uppercase">Integration Complete</h3>
        <div className="w-px h-32 bg-gradient-to-t from-orange-900 to-slate-900 mx-auto mt-12" />
      </div>
    </div>
  );
};