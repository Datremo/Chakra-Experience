import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const FinalReturnPracticeSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // The Light descends
  const lightY = useTransform(scrollYProgress, [0.2, 0.6], ['-100%', '150%']);
  const lightColor = useTransform(scrollYProgress, [0.3, 0.6], ['rgba(255,255,255,1)', 'rgba(239,68,68,1)']); // White to Red (Root)
  
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 36</h2>
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          
          {/* Central Channel Background */}
          <div className="absolute h-3/4 w-1 bg-white/10 rounded-full z-0" />

          {/* Descending Light */}
          <motion.div 
            style={{ y: lightY, backgroundColor: lightColor }}
            className="absolute z-10 w-16 h-16 rounded-full shadow-[0_0_50px_currentColor]"
          />

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6 mix-blend-difference">
              THE DESCENT
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              You cannot live in the Crown.<br/><br/>
              The energy must return to the Root, bringing the light of awareness down into the densest, most ordinary aspects of daily life.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
