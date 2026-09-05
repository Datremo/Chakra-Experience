import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S33_GroundingInModernLife: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(33); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10">
      <div className="max-w-3xl text-center bg-slate-900/80 backdrop-blur-md border border-red-900/30 p-12 rounded-3xl">
        <h3 className="text-3xl font-serif text-white mb-6">Grounding in Modern Life</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          You do not need to sit in a cave to activate Mūlādhāra. 
          It activates when you cook a warm meal, when you sleep deeply, when you feel the steering wheel of your car, or when you manage your finances with clarity.
        </p>
        <p className="text-red-400 font-bold tracking-widest uppercase text-sm">
          Any act that affirms "I have a right to be here" is a root practice.
        </p>
      </div>
    </div>
  );
};