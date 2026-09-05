import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S38_Fight: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(38); }, [inView, reachWorld]);

  const [active, setActive] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Adrenaline Visualizer Background */}
      <AnimatePresence>
        {active && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0 bg-red-950/20 mix-blend-screen pointer-events-none"
            >
                <motion.div 
                    className="absolute inset-0 bg-[url(/assets/muladhara/texture_stone.jpg)] opacity-10 mix-blend-overlay"
                    animate={{ scale: [1, 1.1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 0.5, repeat: Infinity }}
                />
            </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-6xl md:text-8xl font-serif text-red-600 mb-8 font-bold uppercase tracking-widest drop-shadow-2xl">
            Fight
        </h3>
        
        <button 
            onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
            onPointerDown={() => setActive(true)} onPointerUp={() => setActive(false)}
            className="px-8 py-4 mb-12 border border-red-900 rounded-full text-red-500 uppercase tracking-[0.3em] text-sm hover:bg-red-950/50 hover:text-white transition-all cursor-pointer relative overflow-hidden group"
        >
            <span className="relative z-10">Trigger Sympathetic Arousal</span>
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        <motion.p 
            animate={{ color: active ? '#f87171' : '#94a3b8' }}
            className="text-xl md:text-3xl font-light leading-relaxed mb-12 transition-colors duration-500"
        >
          The sympathetic nervous system floods with adrenaline. Heart rate spikes. Muscles tense. The body prepares to destroy the threat.
        </motion.p>
        
        <div className="p-6 bg-red-950/30 border border-red-900/50 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
          <span className="text-red-500 text-sm font-bold uppercase tracking-widest mb-2 block">Unbalanced Root Manifestation</span>
          <p className="text-slate-400 text-lg">Chronic anger, hostility, and seeing profound threats where none exist.</p>
        </div>
      </div>
    </div>
  );
};