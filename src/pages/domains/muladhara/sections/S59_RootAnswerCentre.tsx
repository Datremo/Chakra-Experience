import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S59_RootAnswerCentre: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(59); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      <div className="z-10 max-w-5xl w-full">
        <h3 className="text-5xl md:text-6xl font-serif text-white mb-16 text-center tracking-widest uppercase">
            How Do I Activate It?
        </h3>
        
        <div className="space-y-12">
            <div className="border-l-4 border-red-600 pl-8">
                <h4 className="text-2xl font-bold uppercase tracking-widest text-red-500 mb-4">Step 1: Biological Safety</h4>
                <p className="text-slate-300 text-xl font-light leading-relaxed">
                    You cannot access spiritual awakening while your nervous system is in survival mode. The root requires literal physical safety. Pay your bills, eat heavy grounding foods, build a secure community, and sleep deeply.
                </p>
            </div>
            
            <div className="border-l-4 border-yellow-600 pl-8">
                <h4 className="text-2xl font-bold uppercase tracking-widest text-yellow-500 mb-4">Step 2: Psychological Presence</h4>
                <p className="text-slate-300 text-xl font-light leading-relaxed">
                    Once physically safe, you must draw your scattered energy down from the mind and into the body. Practices like the 60-second reset, walking barefoot (The Root Walk), and heavy lifting force your consciousness to anchor into the physical present.
                </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8">
                <h4 className="text-2xl font-bold uppercase tracking-widest text-emerald-500 mb-4">Step 3: Esoteric Concentration</h4>
                <p className="text-slate-300 text-xl font-light leading-relaxed">
                    Only when the body and mind are completely stable can you perform the ancient work. Sit in stillness. Focus your absolute concentration on the perineum (the physical location of Mūlādhāra). Use the Bīja mantra <span className="font-serif italic text-white font-bold text-2xl">LAM</span>. Apply the Mūlabandha (root lock) to direct physical energy upward, striking the sleeping Kuṇḍalinī.
                </p>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}
            className="mt-24 text-center"
        >
            <p className="text-red-400 text-2xl font-serif italic tracking-wider drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                The Root is active when you are unshakable.
            </p>
        </motion.div>
      </div>
    </div>
  );
};