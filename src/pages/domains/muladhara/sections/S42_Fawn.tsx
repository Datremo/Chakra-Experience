import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S42_Fawn: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(42); }, [inView, reachWorld]);

  const [active, setActive] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Fawn Visualizer: Shield collapsing */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
        initial={false}
      >
        <motion.div 
            className="w-96 h-96 rounded-full border-4 border-purple-500/30"
            animate={{ 
                scale: active ? [1, 1.5] : [1, 1.05, 1], 
                opacity: active ? [0.5, 0] : [0.3, 0.5, 0.3],
                borderWidth: active ? '0px' : '4px'
            }}
            transition={{ duration: active ? 1 : 4, repeat: active ? 0 : Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-6xl md:text-8xl font-serif text-purple-500 mb-8 font-bold uppercase tracking-widest drop-shadow-2xl">
            Fawn
        </h3>
        
        <button 
            onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
            onPointerDown={() => setActive(true)} onPointerUp={() => setActive(false)}
            className="px-8 py-4 mb-12 border border-purple-900 rounded-full text-purple-400 uppercase tracking-[0.3em] text-sm hover:bg-purple-950/50 hover:text-white transition-all cursor-pointer relative overflow-hidden group"
        >
            <span className="relative z-10">Trigger Appeasement</span>
            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        <p className="text-xl md:text-3xl font-light leading-relaxed text-slate-300 mb-12">
          A complex survival response where one abandons their own boundaries to appease the threat. Safety is sought by merging with the aggressor's needs.
        </p>
        
        <div className="p-6 bg-purple-950/30 border border-purple-900/50 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
          <span className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-2 block">Unbalanced Root Manifestation</span>
          <p className="text-slate-400 text-lg">People-pleasing, inability to say no, losing one's own sense of identity to maintain perceived safety.</p>
        </div>
      </div>
    </div>
  );
};