import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S17B_TheBijaResonance: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(17); }, [inView, reachWorld]);

  const [resonating, setResonating] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 relative overflow-hidden group">
      
      <motion.div 
        className="absolute inset-0 z-0 bg-yellow-900/20 mix-blend-screen pointer-events-none"
        animate={{ opacity: resonating ? [0.3, 0.7, 0.3] : 0, scale: resonating ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />

      <div className="z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 uppercase tracking-widest">
                The Acoustic Root
            </h3>
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-12">
                Mantras are not words; they are specific acoustic frequencies. Chanting <span className="font-bold text-yellow-400">LAM</span> physically vibrates the pelvic floor.
            </p>

            <button 
                onMouseDown={() => setResonating(true)} onMouseUp={() => setResonating(false)}
                onMouseLeave={() => setResonating(false)}
                onTouchStart={() => setResonating(true)} onTouchEnd={() => setResonating(false)}
                className="px-12 py-6 border-2 border-yellow-600 rounded-full text-yellow-500 uppercase tracking-widest font-bold hover:bg-yellow-950/50 hover:text-yellow-300 transition-all active:scale-95"
            >
                Hold To Resonate
            </button>
        </div>

        <div className="flex justify-center items-center h-96 relative">
            <motion.div 
                className="text-[12rem] font-serif font-bold text-yellow-500 select-none"
                animate={{
                    x: resonating ? [-8, 8, -8, 8, 0] : 0,
                    y: resonating ? [-3, 3, -3, 3, 0] : 0,
                    textShadow: resonating ? '0 0 100px rgba(234,179,8,1)' : '0 0 20px rgba(234,179,8,0.2)'
                }}
                transition={{ duration: 0.05, repeat: Infinity }}
            >
                लं
            </motion.div>
        </div>
        
      </div>
    </div>
  );
};