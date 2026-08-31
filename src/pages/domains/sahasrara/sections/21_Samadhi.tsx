import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const SamadhiSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Triad of Samadhi: Observer, Observing, Object
  // They start far apart and merge into the center at scrollYProgress = 0.5
  
  const observerX = useTransform(scrollYProgress, [0.3, 0.5], ['-150%', '0%']);
  const observerY = useTransform(scrollYProgress, [0.3, 0.5], ['100%', '0%']);
  
  const objectX = useTransform(scrollYProgress, [0.3, 0.5], ['150%', '0%']);
  const objectY = useTransform(scrollYProgress, [0.3, 0.5], ['100%', '0%']);

  const observingY = useTransform(scrollYProgress, [0.3, 0.5], ['-150%', '0%']);

  // When merged, they explode in scale and brightness
  const mergedScale = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [1, 5, 20]);
  const mergedOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);

  // Typography fade in after merge
  const textOpacity = useTransform(scrollYProgress, [0.55, 0.7, 0.8], [0, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0.55, 0.8], [0.8, 1.2]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6 mix-blend-difference">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 21</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* The Observer */}
          <motion.div 
            style={{ x: observerX, y: observerY }}
            className="absolute z-10 flex items-center justify-center"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-blue-500/50 bg-blue-900/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <span className="font-sans text-xs tracking-widest uppercase text-blue-200">The Observer</span>
            </div>
          </motion.div>

          {/* The Object */}
          <motion.div 
            style={{ x: objectX, y: objectY }}
            className="absolute z-10 flex items-center justify-center"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-purple-500/50 bg-purple-900/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <span className="font-sans text-xs tracking-widest uppercase text-purple-200">The Object</span>
            </div>
          </motion.div>

          {/* The Process of Observing */}
          <motion.div 
            style={{ y: observingY }}
            className="absolute z-10 flex items-center justify-center"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/50 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="font-sans text-xs tracking-widest uppercase text-white/80">Observing</span>
            </div>
          </motion.div>

          {/* The Explosion / Samadhi */}
          <motion.div 
            style={{ scale: mergedScale, opacity: mergedOpacity }}
            className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-[0_0_100px_rgba(255,255,255,1)] mix-blend-screen"
          />

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity, scale: textScale }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-[12vw] font-serif font-black text-white tracking-tighter mix-blend-difference drop-shadow-[0_0_20px_black] leading-none mb-6">
              SAMĀDHI
            </h1>
            <p className="font-serif italic text-2xl md:text-4xl text-white/90 drop-shadow-[0_0_10px_black]">
              The dissolution of the triad.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
