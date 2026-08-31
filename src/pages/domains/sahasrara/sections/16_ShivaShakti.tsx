import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const ShivaShaktiSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const shivaX = useTransform(scrollYProgress, [0.3, 0.6], [-100, 0]);
  const shaktiX = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const combinedOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.8], [0, 1, 1]);
  const combinedScale = useTransform(scrollYProgress, [0.5, 0.7, 1], [0.8, 1, 1.5]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-20 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 16</h2>
        </div>

        {/* Dynamic Typography Background */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-overlay"
        >
          <h1 className="text-[25vw] font-serif text-white/10 font-bold tracking-tighter whitespace-nowrap">
            NON-DUALITY
          </h1>
        </motion.div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Shiva */}
          <motion.div 
            style={{ x: shivaX }}
            className="absolute left-[10%] md:left-1/4 flex flex-col items-center z-10"
          >
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/5 backdrop-blur-md border-r-2 border-white/40 shadow-[-20px_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 overflow-hidden relative">
              <span className="font-serif text-5xl md:text-7xl text-white relative z-10">Śiva</span>
            </div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/50 text-center">
              Pure Consciousness
            </p>
          </motion.div>

          {/* Shakti */}
          <motion.div 
            style={{ x: shaktiX }}
            className="absolute right-[10%] md:right-1/4 flex flex-col items-center z-10"
          >
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-red-500/5 backdrop-blur-md border-l-2 border-red-500/40 shadow-[20px_0_50px_rgba(239,68,68,0.1)] flex items-center justify-center mb-6 overflow-hidden relative">
              <span className="font-serif text-5xl md:text-7xl text-red-200 relative z-10">Śakti</span>
            </div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-red-200/50 text-center">
              Dynamic Energy
            </p>
          </motion.div>

          {/* Union (Eclipse Effect) */}
          <motion.div 
            style={{ opacity: combinedOpacity, scale: combinedScale }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(216,180,254,0.4)_30%,transparent_70%)] mix-blend-screen animate-pulse" />
              <div className="absolute w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] rounded-full bg-white shadow-[0_0_100px_white]" />
              <span className="font-serif text-6xl md:text-9xl text-black relative z-10 tracking-tighter">ONE</span>
            </div>
          </motion.div>

        </div>

        <motion.div 
          style={{ opacity: combinedOpacity }}
          className="absolute bottom-32 max-w-2xl px-6 text-center"
        >
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            In Tantric philosophy, the universe is created by the apparent separation of Śiva (consciousness) and Śakti (energy). When Kuṇḍalinī Śakti rises to the crown, she reunites with her beloved. This union dissolves all duality.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
