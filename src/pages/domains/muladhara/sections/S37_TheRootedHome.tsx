import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S37_TheRootedHome: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(37); }, [inView, reachWorld]);

  const [order, setOrder] = useState(50);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative flex flex-col md:flex-row items-center justify-center p-8 bg-black z-10">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="w-full h-full bg-slate-800"
          animate={{ filter: `blur(${Math.max(0, (100 - order) / 10)}px)`, opacity: 0.2 + (order / 200) }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="z-10 w-full md:w-1/2 pr-0 md:pr-12 pointer-events-auto">
        <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full text-xs tracking-widest uppercase text-white/80 bg-black/30 backdrop-blur-sm">
          Modern Interpretation
        </div>
        <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">The Rooted Home</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 bg-black/40 p-6 rounded-xl backdrop-blur-sm border border-white/10">
          Your physical environment directly impacts your nervous system. A chaotic home signals scarcity and danger. A grounded, ordered home signals safety and rest.
        </p>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm text-slate-400 uppercase tracking-widest mb-2 font-bold">
              <span>Chaotic</span>
              <span>Ordered</span>
            </div>
            <input 
              type="range" min="0" max="100" value={order} onChange={(e) => setOrder(Number(e.target.value))}
              className="w-full accent-red-600 cursor-pointer h-2 bg-slate-700 rounded-lg appearance-none"
            />
          </div>
        </div>
      </div>
      
      <div className="z-10 w-full md:w-1/2 h-64 md:h-96 mt-12 md:mt-0 relative flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: 0.8 + (order / 500) }}
          className="w-64 h-64 border-4 border-red-900 rounded-full flex flex-col items-center justify-center bg-black/30 backdrop-blur-xl transition-colors duration-500"
          style={{ borderColor: order > 70 ? '#22c55e' : order < 30 ? '#ef4444' : '#7f1d1d' }}
        >
          <span className="text-white font-serif text-2xl">{order < 40 ? 'Anxiety' : order > 80 ? 'Sanctuary' : 'Neutral'}</span>
          <span className="text-slate-400 text-sm tracking-widest uppercase mt-2">Environment State</span>
        </motion.div>
      </div>

    </div>
  );
};