import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S34_TheThreeLenses: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(34); }, [inView, reachWorld]);

  const lenses = [
    { title: 'The Classical Lens', desc: 'A subtle energy center mapping consciousness at the base of the spine. The origin of dormant Kundalini.' },
    { title: 'The Psychological Lens', desc: 'The psychological drive for safety, shelter, boundary, and the fundamental right to exist.' },
    { title: 'The Somatic Lens', desc: 'The physical sensation of gravity, the parasympathetic nervous system down-regulating into rest, and the activation of the pelvic floor.' }
  ];

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10">
      <div className="max-w-5xl w-full">
        <h3 className="text-4xl font-serif text-white mb-12 text-center">Synthesizing the Root</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lenses.map((lens, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}
              className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h4 className="text-red-400 font-serif text-xl mb-4">{lens.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{lens.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};