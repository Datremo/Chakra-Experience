import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const InformationVsWisdomSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Information (Text Wall) fades and scales down
  const infoOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);
  const infoScale = useTransform(scrollYProgress, [0.2, 0.45], [1, 0.5]);

  // Wisdom (Pure Light/Drop) emerges
  const wisdomScale = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const wisdomOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 25</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Information Wall */}
          <motion.div 
            style={{ opacity: infoOpacity, scale: infoScale }}
            className="absolute inset-0 z-0 flex flex-wrap items-center justify-center overflow-hidden pointer-events-none opacity-20"
          >
            {/* Generate a wall of tiny text */}
            {Array.from({ length: 50 }).map((_, i) => (
              <p key={i} className="text-[8px] md:text-xs font-mono text-white/30 m-1 text-justify w-full leading-none">
                Brahman is the ultimate reality in the universe. In major schools of Hindu philosophy, it is the material, efficient, formal and final cause of all that exists. It is the pervasive, infinite, eternal truth and bliss which does not change, yet is the cause of all changes. Brahman as a metaphysical concept refers to the single binding unity behind diversity in all that exists in the universe.
              </p>
            ))}
          </motion.div>

          {/* Central Wisdom (The Drop/Light) */}
          <motion.div 
            style={{ opacity: wisdomOpacity, scale: wisdomScale }}
            className="absolute z-10 flex flex-col items-center justify-center"
          >
            <div className="w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(168,85,247,0.8)_30%,transparent_70%)] blur-md" />
            <div className="absolute w-16 h-16 rounded-full bg-white shadow-[0_0_50px_white]" />
          </motion.div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6">
              WISDOM &gt; INFORMATION
            </h1>
            <p className="font-serif italic text-2xl md:text-4xl text-purple-200/90 max-w-3xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              Reading the word "water" will not quench your thirst.<br/>
              The Crown is not about acquiring more knowledge.<br/>
              It is about <span className="text-white font-bold not-italic">direct experience</span>.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
