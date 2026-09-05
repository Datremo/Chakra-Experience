import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S35B_MulaBandha: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  // We use world 35.5 conceptually, but tell the journey we are here
  useEffect(() => { if (inView) reachWorld(35); }, [inView, reachWorld]);

  const [contracted, setContracted] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-transparent z-10 relative overflow-hidden">
      
      {/* Background intensity */}
      <motion.div 
        className="absolute inset-0 z-0 bg-red-950/30"
        animate={{ opacity: contracted ? 1 : 0 }} transition={{ duration: 0.3 }}
      />

      <div className="z-10 max-w-4xl text-center w-full mb-16">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-red-600 mb-4">The Crucial Mechanic</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-widest uppercase">Mūla Bandha</h2>
        <p className="text-slate-300 text-lg font-light leading-relaxed">
            The most important physical technique for the root chakra. Mūla Bandha (the Root Lock) is the physical contraction of the perineum/pelvic floor. It catches the downward-flowing energy and forces it upward to strike the dormant Kuṇḍalinī.
        </p>
      </div>

      <div className="z-10 flex flex-col items-center justify-center w-full max-w-md">
        
        {/* Pelvic Floor Viz */}
        <div className="h-64 flex flex-col justify-end items-center relative w-full mb-12">
            <motion.div 
                className="w-full h-16 border-4 border-red-900 rounded-[100%] absolute bottom-0 flex items-center justify-center bg-black"
                animate={{ 
                    scaleX: contracted ? 0.6 : 1,
                    scaleY: contracted ? 0.5 : 1, 
                    borderColor: contracted ? '#ef4444' : '#450a0a',
                    y: contracted ? -50 : 0
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {/* Rising Energy Orb */}
                <motion.div 
                    className="w-12 h-12 bg-red-500 rounded-full blur-[2px] shadow-[0_0_30px_rgba(239,68,68,0.8)]"
                    animate={{ y: contracted ? -150 : 0, opacity: contracted ? 1 : 0.2 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
            </motion.div>
        </div>

        <button 
            onMouseDown={() => setContracted(true)} onMouseUp={() => setContracted(false)}
            onMouseLeave={() => setContracted(false)}
            onTouchStart={() => setContracted(true)} onTouchEnd={() => setContracted(false)}
            className={`w-full py-8 border-2 rounded-xl uppercase tracking-[0.3em] font-bold text-xl transition-all duration-300 select-none ${
                contracted ? 'bg-red-600 border-red-500 text-white shadow-[0_0_50px_rgba(220,38,38,0.5)]' : 'bg-black border-red-900 text-red-700 hover:bg-red-950/30'
            }`}
        >
            {contracted ? "Holding Root Lock..." : "Hold To Contract"}
        </button>
      </div>

    </div>
  );
};