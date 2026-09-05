import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S28_TheAscendingCurrent: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(28); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto">
      <div className="max-w-xl text-center">
        <h3 className="text-3xl font-serif text-white mb-6">The Ascending Current</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          The root is not a static foundation; it is a launchpad. The ultimate purpose of grounding in Mūlādhāra is to allow consciousness to rise safely through the central axis.
        </p>
      </div>
    </div>
  );
};