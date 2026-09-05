import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S45_TheAnchorScale: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(45); }, [inView, reachWorld]);

  const [fears, setFears] = useState(0);
  const [anchors, setAnchors] = useState(0);

  // Calculate tilt: -45 (fear) to +45 (anchor)
  const net = anchors - fears;
  const tilt = Math.max(-45, Math.min(45, net * 10));

  const shakeAnimation = net < -3 ? { x: [-5, 5, -5, 5, 0], transition: { repeat: Infinity, duration: 0.5 } } : {};

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto bg-black overflow-hidden relative">
      
      {/* Background intensity based on fear */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ backgroundColor: net < 0 ? `rgba(100, 0, 0, ${Math.min(0.5, Math.abs(net) * 0.1)})` : 'rgba(0,0,0,0)' }}
        transition={{ duration: 0.5 }}
      />

      <div className="max-w-6xl w-full flex flex-col items-center z-10">
        <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-widest uppercase text-center">The Anchor Scale</h3>
        <p className="text-slate-400 text-lg md:text-xl font-light mb-16 max-w-2xl text-center leading-relaxed">
          In modern life, scarcity is rarely about immediate predators. It is about bills, isolation, and uncertainty. Stack the scale to see the effect on your foundation.
        </p>

        <div className="flex gap-8 md:gap-16 w-full justify-center mb-32">
            <button 
              onClick={() => setFears(f => f + 1)} 
              className="px-8 py-4 bg-red-950/40 text-red-400 border border-red-900/50 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-red-900/60 transition-all shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]"
            >
                + Add Fear
            </button>
            <button 
              onClick={() => setAnchors(a => a + 1)} 
              className="px-8 py-4 bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-emerald-900/60 transition-all shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]"
            >
                + Add Anchor
            </button>
        </div>

        {/* The Scale Visualization */}
        <motion.div className="relative w-full max-w-3xl h-64 flex flex-col items-center justify-end" animate={shakeAnimation}>
            
            {/* The Beam */}
            <motion.div 
                className="w-full h-2 bg-gradient-to-r from-red-900 via-slate-600 to-emerald-900 rounded-full relative z-10 shadow-2xl"
                animate={{ rotate: tilt }}
                transition={{ type: 'spring', bounce: 0.6, damping: 10 }}
            >
                {/* Left Pan (Fears) */}
                <div className="absolute left-0 -top-8 w-32 h-32 border-b border-red-500/50 rounded-b-[4rem] flex flex-wrap gap-2 items-end justify-center pb-4 -translate-x-1/2">
                    {Array.from({length: fears}).map((_, i) => (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} key={`f-${i}`} className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                    ))}
                </div>
                {/* Right Pan (Anchors) */}
                <div className="absolute right-0 -top-8 w-32 h-32 border-b border-emerald-500/50 rounded-b-[4rem] flex flex-wrap gap-2 items-end justify-center pb-4 translate-x-1/2">
                    {Array.from({length: anchors}).map((_, i) => (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} key={`a-${i}`} className="w-6 h-6 rounded-sm bg-emerald-500 shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
                    ))}
                </div>
            </motion.div>
            
            {/* The Fulcrum */}
            <div className="w-24 h-24 bg-black border border-slate-700 rotate-45 transform translate-y-12 z-0 shadow-2xl flex items-center justify-center">
                <div className="w-12 h-12 border border-slate-800 rotate-45" />
            </div>
            
        </motion.div>
        
        <button onClick={() => { setFears(0); setAnchors(0); }} className="mt-24 text-slate-500 text-xs tracking-widest uppercase hover:text-white transition-colors">Reset Scale</button>
      </div>
    </div>
  );
};