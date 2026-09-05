import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S39_Flight: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(39); }, [inView, reachWorld]);

  const [active, setActive] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Flight Visualizer Background */}
      <AnimatePresence>
        {active && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            >
                {/* Wind/Speed lines */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div 
                        key={i}
                        className="absolute h-px bg-orange-500/40"
                        style={{ top: `${Math.random() * 100}%`, left: '-10%', width: `${Math.random() * 30 + 10}%` }}
                        animate={{ x: ['0vw', '120vw'] }}
                        transition={{ duration: Math.random() * 1 + 0.5, repeat: Infinity, ease: 'linear', delay: Math.random() }}
                    />
                ))}
            </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-6xl md:text-8xl font-serif text-orange-500 mb-8 font-bold uppercase tracking-widest drop-shadow-2xl">
            Flight
        </h3>
        
        <button 
            onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
            onPointerDown={() => setActive(true)} onPointerUp={() => setActive(false)}
            className="px-8 py-4 mb-12 border border-orange-900 rounded-full text-orange-500 uppercase tracking-[0.3em] text-sm hover:bg-orange-950/50 hover:text-white transition-all cursor-pointer relative overflow-hidden group"
        >
            <span className="relative z-10">Trigger Escape Response</span>
            <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        <motion.p 
            animate={{ color: active ? '#fb923c' : '#94a3b8' }}
            className="text-xl md:text-3xl font-light leading-relaxed mb-12 transition-colors duration-500"
        >
          The same sympathetic arousal, but directed toward escape. The body prepares to run, to avoid, to abandon the space.
        </motion.p>
        
        <div className="p-6 bg-orange-950/30 border border-orange-900/50 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-2 block">Unbalanced Root Manifestation</span>
          <p className="text-slate-400 text-lg">Chronic anxiety, avoidance, and the inability to commit or stay present in the body.</p>
        </div>
      </div>
    </div>
  );
};