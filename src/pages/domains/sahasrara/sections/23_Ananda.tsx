import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const AnandaSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // The Drop falling
  const dropY = useTransform(scrollYProgress, [0.2, 0.5], ['-200%', '0%']);
  const dropScale = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  // The Ripple expanding
  const rippleScale = useTransform(scrollYProgress, [0.5, 0.8], [0, 20]);
  const rippleOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.9], [0, 1, 0]);

  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 23</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* The Drop */}
          <motion.div 
            style={{ y: dropY, scale: dropScale }}
            className="absolute z-20 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]"
          />

          {/* The Ripple (Bliss Expansion) */}
          <motion.div 
            style={{ scale: rippleScale, opacity: rippleOpacity }}
            className="absolute z-10 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(168,85,247,0.5)_50%,transparent_100%)] w-64 h-64 mix-blend-screen"
          />
          <motion.div 
            style={{ scale: useTransform(scrollYProgress, [0.5, 0.9], [0, 25]), opacity: rippleOpacity }}
            className="absolute z-0 rounded-full border border-purple-300 w-64 h-64"
          />

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-[15vw] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-300 tracking-[0.1em] drop-shadow-[0_0_50px_rgba(216,180,254,0.5)] leading-none mb-4">
              ĀNANDA
            </h1>
            <p className="font-serif italic text-2xl md:text-4xl text-purple-200/80 drop-shadow-[0_0_10px_black]">
              The drop becomes the ocean. Pure Bliss.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
