import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const MortalitySection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const clockRotation = useTransform(scrollYProgress, [0.2, 0.8], [0, 720]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 41</h2>
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          
          {/* Ticking Clock Visual */}
          <div className="absolute z-10 w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/20 flex items-center justify-center">
            <motion.div 
              style={{ rotate: clockRotation }}
              className="w-1 h-32 md:h-48 origin-bottom bg-white/50 absolute top-0 shadow-[0_0_10px_white]"
            />
            <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]" />
          </div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6 mix-blend-difference">
              MORTALITY
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              The body will end.<br/>
              The mind will end.<br/>
              But what looks through your eyes was never born, and will never die.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
