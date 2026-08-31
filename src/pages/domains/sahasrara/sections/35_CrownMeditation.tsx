import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const CrownMeditationSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  return (
    <section ref={containerRef} className="h-[200vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 35</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Breathing Rings */}
          <motion.div 
            style={{ scale: ringScale }}
            className="absolute z-10 flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.5)]"
            />
            <motion.div 
              animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border border-purple-300/30"
            />
            <div className="absolute w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_70%)] mix-blend-screen opacity-50 blur-md" />
          </motion.div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif italic text-3xl md:text-5xl text-white drop-shadow-[0_0_20px_white] leading-relaxed"
            >
              Breathe in pure light.<br/>
              Breathe out the self.
            </motion.p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
