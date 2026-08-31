import { ScrollContext } from '../SahasraraDomain';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BinduSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Scale the point up as we approach, then collapse it
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.6, 0.7],
    [1, 50, 0, 0]
  );

  // Background light burst when it collapses
  const lightOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-[#0b001a]">
      
      {/* Sticky container for the visual */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Title */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [1, 0]) }}
          className="absolute top-32 text-center"
        >
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/30 mb-4">World 08</h2>
          <h3 className="text-3xl font-serif text-white tracking-[1em]">BINDU</h3>
        </motion.div>

        {/* The Point */}
        <motion.div
          style={{ scale }}
          className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white] z-20"
        />

        {/* The Light Burst */}
        <motion.div
          style={{ opacity: lightOpacity }}
          className="absolute inset-0 bg-white z-10"
        />

      </div>

    </section>
  );
};
