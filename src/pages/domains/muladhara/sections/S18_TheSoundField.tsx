import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S18_TheSoundField: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(18); }, [inView, reachWorld]);

  const [strikes, setStrikes] = useState(0);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-stretch bg-transparent z-10 relative">
      <div className="w-1/2 flex flex-col justify-center p-16 bg-transparent z-10">
        <h3 className="text-6xl font-serif text-white mb-6 uppercase tracking-widest drop-shadow-lg">The Acoustic Chamber</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          The Bīja is not just a letter. It is an acoustic frequency.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed">
          When LAM is chanted, it creates a specific vibratory field in the physical body, vibrating the pelvic floor and signaling absolute safety to the brainstem. Strike the chamber.
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center p-12 bg-black/40 backdrop-blur-sm border-l border-red-900/30 z-10 relative overflow-hidden">
        
        {/* Pulsing rings */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full border border-red-500/20 mix-blend-screen"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={strikes > 0 ? {
                    width: [100, 800 + i*200],
                    height: [100, 800 + i*200],
                    opacity: [0.8, 0],
                    borderWidth: [10, 1]
                } : {}}
                transition={{
                    duration: 3,
                    ease: "easeOut",
                    repeat: strikes > 0 ? Infinity : 0,
                    repeatDelay: 1,
                    delay: i * 0.4
                }}
            />
        ))}

        <button 
            onClick={() => setStrikes(s => s + 1)}
            className="w-48 h-48 rounded-full border-4 border-red-800 flex items-center justify-center bg-black/80 hover:bg-red-950/40 transition-colors z-10 shadow-[0_0_100px_rgba(220,38,38,0.2)] hover:scale-105 duration-300"
        >
            <span className="text-red-500 tracking-[0.4em] font-bold text-2xl uppercase">{strikes === 0 ? "Strike" : "Resonating"}</span>
        </button>
      </div>
    </div>
  );
};