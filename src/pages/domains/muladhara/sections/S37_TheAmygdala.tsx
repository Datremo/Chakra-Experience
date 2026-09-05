import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S37_TheAmygdala: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(37); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 bg-black overflow-hidden">
      
      <div className="z-10 max-w-2xl text-center md:text-left md:pr-16 mb-12 md:mb-0">
        <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-wider">The Sentinel</h3>
        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed mb-8">
          Deep in the brain sits the <span className="text-red-400 font-serif italic">Amygdala</span>. It is the gatekeeper of the root.
        </p>
        <p className="text-slate-500 text-lg leading-relaxed border-l-2 border-red-500/30 pl-6">
          It constantly scans the environment for threats. When it detects danger, it overrides higher thinking and activates the root's survival mechanics.
        </p>
      </div>

      {/* Amygdala Visualizer */}
      <div className="z-10 flex items-center justify-center w-full md:w-1/2">
        <motion.div 
            className="w-64 h-64 rounded-full border border-red-900/50 flex items-center justify-center relative"
            animate={{ boxShadow: ['0px 0px 0px rgba(255,0,0,0)', '0px 0px 100px rgba(220,38,38,0.2)', '0px 0px 0px rgba(255,0,0,0)'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
            {/* The Node */}
            <motion.div 
                className="w-8 h-8 bg-red-600 rounded-full blur-[2px]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Scanning Radar lines */}
            <motion.div 
                className="absolute inset-0 rounded-full border border-red-500/30"
                animate={{ scale: [1, 2], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
        </motion.div>
      </div>
    </div>
  );
};