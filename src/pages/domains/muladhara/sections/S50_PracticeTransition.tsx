import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S50_PracticeTransition: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  useEffect(() => { if (inView) reachWorld(50); }, [inView, reachWorld]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const darkness = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-[200vh] w-full relative z-10">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: darkness }} className="absolute inset-0 bg-stone-950" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-8"
        >
          <p className="text-slate-600 tracking-[0.5em] uppercase text-xs mb-8">Act VIII</p>
          <motion.h3
            style={{ opacity: darkness }}
            className="text-6xl md:text-8xl font-serif text-stone-300"
          >
            Practice.
          </motion.h3>
          <motion.p style={{ opacity: darkness }} className="text-stone-500 mt-8 text-lg max-w-md mx-auto leading-relaxed">
            The learning is complete. Now there is only doing.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};