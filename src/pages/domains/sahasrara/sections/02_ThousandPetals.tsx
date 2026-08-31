import { ScrollContext } from '../SahasraraDomain';
import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThousandPetalCanvas } from '../components/ThousandPetalCanvas';

export const ThousandPetalsSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start start", "end end"] // Track progress across 300vh
  });

  const textOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative z-10 bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <ThousandPetalCanvas scrollYProgress={scrollYProgress} />
        </div>

        <motion.div 
          className="z-10 absolute bottom-16 text-center px-6 max-w-xl bg-black/50 p-6 rounded-2xl backdrop-blur-md border border-white/10"
          style={{ opacity: textOpacity }}
        >
          <h3 className="font-sans text-white/50 tracking-[0.3em] uppercase text-xs mb-4">
            Why 1000?
          </h3>
          <p className="text-sm font-sans text-white/70 leading-relaxed mb-4">
            The traditional <em>Ṣaṭ-Cakra-Nirūpaṇa</em> describes a thousand-petalled lotus (Sahasrāra) radiating above the physical body. 
            The number 1000 represents infinity and absolute completeness, containing all fifty letters of the Sanskrit alphabet multiplied twenty times.
          </p>
          <p className="text-xs font-sans text-white/40 italic">
            This is a subtle-body visualization, not a literal organ in the brain.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};
