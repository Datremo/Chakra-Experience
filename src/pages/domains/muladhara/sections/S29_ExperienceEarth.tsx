import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S29_ExperienceEarth: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(29); }, [inView, reachWorld]);

  return (
    <div ref={ref} id="act5" className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto">
      <div className="max-w-3xl text-center">
        <h3 className="text-5xl font-serif text-white mb-6">Experience Earth</h3>
        <p className="text-slate-400 text-xl leading-relaxed mb-12">
          The geometry and symbols are maps. Now, we translate the map into physical, sensory experience.
        </p>
        <div className="w-px h-24 bg-gradient-to-b from-red-500 to-transparent mx-auto" />
      </div>
    </div>
  );
};