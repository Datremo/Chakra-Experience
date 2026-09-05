import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S26_Pingala: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(26); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">Piṅgalā Nādī</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          Rising from the right is Piṅgalā, the red, solar channel.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-red-400/50 pl-4">
          Tradition: Piṅgalā governs heating energy, the sympathetic nervous system, action, extroversion, and masculine (Shiva) polarity.
        </p>
      </div>
    </div>
  );
};