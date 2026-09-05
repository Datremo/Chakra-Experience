import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S17_TheBija: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(17); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">The Bīja Mantra</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          At the center of the earth square vibrates the seed syllable: <strong className="text-yellow-400 text-3xl font-serif">लं</strong> (LAM).
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-yellow-500/50 pl-4">
          Tradition: A Bīja (seed) contains the entire energetic potential of the chakra. Chanting "LAM" internally is said to awaken the density and stability of the root.
        </p>
      </div>
    </div>
  );
};