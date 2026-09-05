import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S61_RootCovenant: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(61); }, [inView, reachWorld]);

  const [signed, setSigned] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      <div className="z-10 max-w-2xl w-full flex flex-col items-center">
        
        <motion.div 
            animate={{ borderColor: signed ? 'rgba(16, 185, 129, 0.5)' : 'rgba(220, 38, 38, 0.5)' }}
            className="w-full border p-12 text-center rounded-lg transition-colors duration-1000 bg-black/30"
        >
            <h3 className="text-3xl font-serif text-white mb-8 tracking-wider">I Commit To My Foundation</h3>
            <p className="text-slate-400 mb-12 font-light">
                I will honor my animal body. I will secure my biological safety. I will pull my energy down from the chaos of the mind and plant it in the earth.
            </p>
            
            <button 
                onClick={() => setSigned(true)}
                disabled={signed}
                className={`px-12 py-4 border rounded-full tracking-[0.3em] uppercase text-sm transition-all duration-1000 ${
                    signed ? 'bg-emerald-950/50 border-emerald-500 text-emerald-400' : 'bg-red-950/50 border-red-500 text-red-400 hover:bg-red-900'
                }`}
            >
                {signed ? "Root Anchored" : "Anchor Root"}
            </button>
        </motion.div>

      </div>
    </div>
  );
};