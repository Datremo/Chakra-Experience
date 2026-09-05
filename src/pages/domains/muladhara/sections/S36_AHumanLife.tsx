import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S36_AHumanLife: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  useEffect(() => { if (inView) reachWorld(36); }, [inView, reachWorld]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const transition = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-[200vh] w-full relative z-10">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Nature fading out */}
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.3, 0.6], [1, 0]) }} className="absolute inset-0 bg-gradient-to-b from-stone-900 to-black" />

        {/* Modern interior fading in */}
        <motion.div style={{ opacity: transition }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          {/* Interior lines suggesting room */}
          <div className="absolute inset-0 border-b border-slate-700/30" style={{ top: '60%' }} />
          <div className="absolute border-r border-slate-700/20 h-full" style={{ left: '15%' }} />
          <div className="absolute border-l border-slate-700/20 h-full" style={{ right: '15%' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(80,60,40,0.2) 0%, transparent 70%)' }} />
        </motion.div>

        <motion.div style={{ opacity: transition }} className="relative z-10 text-center px-8 max-w-2xl">
          <p className="text-slate-500 tracking-[0.5em] uppercase text-xs mb-4">Act VI</p>
          <h3 className="text-6xl font-serif text-white mb-6">A Human Life</h3>
          <p className="text-slate-300 text-xl leading-relaxed">
            From mountains and mandalas, we descend into the modern human world. How do the themes of Mūlādhāra — foundation, support, safety, nourishment — manifest in everyday life?
          </p>
        </motion.div>
      </div>
    </div>
  );
};