import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const BhaktiSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // The ONE splits into I and THOU
  const ix = useTransform(scrollYProgress, [0.3, 0.5], ['0%', '-50%']);
  const thoux = useTransform(scrollYProgress, [0.3, 0.5], ['0%', '50%']);
  
  const opacitySplit = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 0]);

  const heartOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.8], [0, 1, 0]);
  const heartScale = useTransform(scrollYProgress, [0.45, 0.5, 0.8], [0.5, 1, 1.5]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 24</h2>
        </div>

        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          
          {/* Central Devotion (Heart/Thread) */}
          <motion.div 
            style={{ opacity: heartOpacity, scale: heartScale }}
            className="absolute z-0 flex items-center justify-center"
          >
            <div className="w-64 h-64 bg-[radial-gradient(circle,rgba(236,72,153,0.5)_0%,transparent_70%)] blur-2xl rounded-full" />
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-[0_0_20px_#ec4899]" />
          </motion.div>

          {/* I */}
          <motion.div 
            style={{ x: ix, opacity: opacitySplit }}
            className="absolute z-10 flex flex-col items-center"
          >
            <span className="text-[15vw] md:text-[8vw] font-serif font-black text-white tracking-tighter drop-shadow-[0_0_20px_white]">
              I
            </span>
          </motion.div>

          {/* THOU */}
          <motion.div 
            style={{ x: thoux, opacity: opacitySplit }}
            className="absolute z-10 flex flex-col items-center"
          >
            <span className="text-[15vw] md:text-[8vw] font-serif font-black text-white tracking-tighter drop-shadow-[0_0_20px_white]">
              THOU
            </span>
          </motion.div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: heartOpacity }}
            className="absolute bottom-32 flex flex-col items-center text-center pointer-events-none w-full px-6 z-20"
          >
            <h1 className="text-4xl md:text-7xl font-serif text-white tracking-widest drop-shadow-[0_0_30px_#ec4899] mb-4">
              BHAKTI
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-pink-200/90 max-w-2xl drop-shadow-md">
              "I want to taste sugar; I don't want to become sugar."<br/>
              <span className="text-sm font-sans tracking-widest uppercase mt-4 block text-white/50 not-italic">
                The choice to remain slightly separate, just to experience the ecstasy of Devotion.
              </span>
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
