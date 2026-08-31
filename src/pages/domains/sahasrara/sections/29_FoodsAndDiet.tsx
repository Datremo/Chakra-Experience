import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const FoodsAndDietSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Heavy Food (Plate) dissolves
  const heavyOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);
  const heavyScale = useTransform(scrollYProgress, [0.3, 0.45], [1, 1.5]);

  // Light/Fasting (Sun/Water) emerges
  const lightOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const lightScale = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 1]);
  const lightGlow = useTransform(scrollYProgress, [0.4, 0.6], ['0px', '50px']);

  const textY = useTransform(scrollYProgress, [0.45, 0.6], [50, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 29</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Heavy Matter */}
          <motion.div 
            style={{ opacity: heavyOpacity, scale: heavyScale }}
            className="absolute z-10 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="w-48 h-48 rounded-full border-8 border-[#3E2723] bg-[#5D4037] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <span className="font-serif text-2xl text-[#D7CCC8]">Matter</span>
            </div>
            <p className="mt-8 font-sans text-xs tracking-widest uppercase text-white/50 w-64 text-center">
              The lower chakras require grounding, heavy foods, and material sustenance.
            </p>
          </motion.div>

          {/* Pure Energy (Crown) */}
          <motion.div 
            style={{ 
              opacity: lightOpacity, 
              scale: lightScale,
              boxShadow: useTransform(() => `0 0 ${lightGlow.get()} rgba(255,255,255,0.8)`)
            }}
            className="absolute z-20 w-48 h-48 rounded-full bg-white flex items-center justify-center mix-blend-screen"
          />

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: lightOpacity, y: textY }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-5xl md:text-8xl font-serif text-black tracking-widest mix-blend-difference mb-6">
              FASTING
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              The Crown does not eat matter.<br/>
              It consumes <span className="text-white font-bold not-italic">sunlight, air, and pure water</span>.<br/>
              Fasting clears the dense energy of the lower chakras, allowing Prana to rise unimpeded.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
