import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const KaivalyaSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Prakriti (Nature/Chaos) fades out and moves away
  const prakritiOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const prakritiScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 2]);

  // Purusha (Pure Consciousness) becomes isolated and shines
  const purushaScale = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 1]);
  const purushaGlow = useTransform(scrollYProgress, [0.4, 0.6], ['0px', '100px']);

  const textOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 22</h2>
        </div>

        {/* Prakriti (Matter/Nature) */}
        <motion.div 
          style={{ opacity: prakritiOpacity, scale: prakritiScale }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          {/* Chaotic concentric rings representing the gunas/matter */}
          <div className="w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] rounded-full border-[20px] border-white/5 animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full border-[10px] border-white/10 animate-[spin_15s_reverse_linear_infinite]" />
          <div className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full border-[2px] border-white/20 border-dashed animate-[spin_10s_linear_infinite]" />
        </motion.div>

        {/* Purusha (Isolated Consciousness) */}
        <motion.div 
          style={{ 
            scale: purushaScale,
            boxShadow: useTransform(() => `0 0 ${purushaGlow.get()} rgba(255,255,255,0.8)`)
          }}
          className="relative z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center pointer-events-none"
        />

        {/* Cinematic Text */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
        >
          <h1 className="text-[12vw] font-serif font-black text-white tracking-[0.1em] drop-shadow-[0_0_30px_white] leading-none mb-6">
            KAIVALYA
          </h1>
          <p className="font-serif italic text-2xl md:text-4xl text-white/70">
            Absolute Isolation. Pure Independence.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
