import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S04_TheSovereignVessel: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  useEffect(() => { if (inView) reachWorld(4); }, [inView, reachWorld]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const leftX = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [-100, 0, 100]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [100, 0, -100]);
  const combinedOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const combinedScale = useTransform(scrollYProgress, [0.5, 0.6], [1, 1.2]);

  return (
    <div ref={containerRef} className="h-[200vh] w-full relative bg-slate-950">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex items-center space-x-12 mb-8">
          <motion.div style={{ x: leftX }} className="flex flex-col items-end text-right">
            <span className="text-7xl md:text-9xl font-serif text-white/20">मूल</span>
            <span className="text-xl md:text-3xl text-red-500/50 uppercase tracking-widest mt-2">Mūla (Root)</span>
          </motion.div>
          <motion.div style={{ opacity: combinedOpacity, scale: combinedScale }} className="absolute text-5xl md:text-7xl font-bold text-red-600">+</motion.div>
          <motion.div style={{ x: rightX }} className="flex flex-col items-start text-left">
            <span className="text-7xl md:text-9xl font-serif text-white/20">आधार</span>
            <span className="text-xl md:text-3xl text-red-500/50 uppercase tracking-widest mt-2">Ādhāra (Support)</span>
          </motion.div>
        </div>
        
        <motion.div style={{ opacity: combinedOpacity }} className="mt-16 text-center max-w-lg px-6">
          <h3 className="text-2xl font-serif text-white mb-4">The Sovereign Vessel</h3>
          <p className="text-slate-400">The root support. The foundation upon which the entire subtle architecture rests.</p>
        </motion.div>
      </div>
    </div>
  );
};