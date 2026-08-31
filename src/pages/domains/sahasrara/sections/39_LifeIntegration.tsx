import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const LifeIntegrationSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Shapes representing ordinary tasks (Square = Wood, Circle = Water)
  const squareX = useTransform(scrollYProgress, [0.3, 0.5], ['-100%', '0%']);
  const circleX = useTransform(scrollYProgress, [0.3, 0.5], ['100%', '0%']);
  
  const mergedGlow = useTransform(scrollYProgress, [0.5, 0.6], ['0px', '50px']);

  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 39</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Ordinary Shapes merging */}
          <div className="absolute z-10 flex items-center justify-center">
            
            <motion.div 
              style={{ x: squareX }}
              className="w-32 h-32 md:w-48 md:h-48 bg-[#8D6E63] flex flex-col items-center justify-center mr-[-64px] mix-blend-screen"
            >
              <span className="font-serif text-sm tracking-widest text-[#3E2723] uppercase">Wood</span>
            </motion.div>

            <motion.div 
              style={{ 
                x: circleX,
                boxShadow: useTransform(() => `0 0 ${mergedGlow.get()} rgba(255,255,255,0.8)`)
              }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#4FC3F7] flex flex-col items-center justify-center ml-[-64px] mix-blend-screen relative z-10"
            >
              <span className="font-serif text-sm tracking-widest text-[#01579B] uppercase">Water</span>
            </motion.div>

          </div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6">
              INTEGRATION
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              The sacred is not found by escaping the ordinary.<br/>
              The sacred is found by fully occupying the ordinary.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
