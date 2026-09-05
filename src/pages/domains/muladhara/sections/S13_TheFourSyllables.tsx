import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S13_TheFourSyllables: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(13); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">The Four Syllables</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          Upon the crimson petals rest four golden Sanskrit syllables: <strong className="text-yellow-400 text-xl font-serif">वं शं षं सं</strong> (Vaṃ, Śaṃ, Ṣaṃ, Saṃ).
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-yellow-900/50 pl-4">
          Tradition: Every chakra is an acoustic chamber. The letters are not arbitrary; they are specific frequencies that vibrate the petals of the subtle matrix.
        </p>
      </div>
    </div>
  );
};