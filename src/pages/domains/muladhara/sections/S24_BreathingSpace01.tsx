import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S24_BreathingSpace01: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(24); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto">
      <div className="max-w-xl text-center">
        <h3 className="text-3xl font-serif text-slate-500 mb-6">The Completed Mandala</h3>
        <p className="text-slate-600 text-sm tracking-widest uppercase mb-12">Breathe. Observe.</p>
        <p className="text-slate-400">
          This is the traditional visualization geometry of Mūlādhāra. 
          It is an instrument for focus, a map of foundational consciousness.
        </p>
      </div>
    </div>
  );
};