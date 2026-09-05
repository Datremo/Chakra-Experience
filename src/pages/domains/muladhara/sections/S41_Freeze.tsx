import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S41_Freeze: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(41); }, [inView, reachWorld]);

  const [active, setActive] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Freeze Visualizer */}
      <AnimatePresence>
        {active && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0 bg-blue-950/80 pointer-events-none backdrop-blur-xl"
            />
        )}
      </AnimatePresence>

      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-6xl md:text-8xl font-serif text-blue-500 mb-8 font-bold uppercase tracking-widest drop-shadow-2xl">
            Freeze
        </h3>
        
        <button 
            onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
            onPointerDown={() => setActive(true)} onPointerUp={() => setActive(false)}
            className="px-8 py-4 mb-12 border border-blue-900 rounded-full text-blue-400 uppercase tracking-[0.3em] text-sm hover:bg-blue-950/50 hover:text-white transition-all cursor-pointer relative overflow-hidden group"
        >
            <span className="relative z-10">Trigger Dorsal Vagal Shutdown</span>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        <motion.p 
            animate={{ color: active ? '#93c5fd' : '#94a3b8', filter: active ? 'blur(1px)' : 'blur(0px)' }}
            className="text-xl md:text-3xl font-light leading-relaxed mb-12 transition-all duration-1000"
        >
          When fight or flight fail, the system shuts down. Heart rate drops. Numbness sets in. The body plays dead to survive.
        </motion.p>
        
        <div className="p-6 bg-blue-950/30 border border-blue-900/50 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2 block">Unbalanced Root Manifestation</span>
          <p className="text-slate-400 text-lg">Depression, dissociation, chronic fatigue, and feeling utterly disconnected from the physical body.</p>
        </div>
      </div>
    </div>
  );
};