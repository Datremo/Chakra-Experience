import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S09_TheRootLens: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(9); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10 text-center">
      <div className="max-w-2xl">
        <h3 className="text-3xl font-serif text-white mb-6">Looking Through the Lens</h3>
        <p className="text-slate-400 text-lg">
          We will proceed using only the Subtle Map. From here on, everything you see—the petals, the animals, the geometry—is an internal visualization, a technology for focusing consciousness, not a literal physical object.
        </p>
      </div>
    </div>
  );
};