import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const ComeBackDownSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0.3, 0.7], ['0%', '100%']);
  const textScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1.2]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md mix-blend-difference">World 37</h2>
        </div>

        {/* The Earth / Ground revealed from bottom */}
        <motion.div 
          style={{ y: yOffset }}
          className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-orange-900/20 to-transparent z-0"
        />

        <div className="relative w-full h-full flex items-center justify-center">
          
          <motion.div
            style={{ opacity: textOpacity, scale: textScale }}
            className="absolute z-20 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-[15vw] font-serif font-black text-white tracking-tighter drop-shadow-[0_0_20px_white] leading-none mix-blend-difference">
              COME BACK
            </h1>
            <h1 className="text-[15vw] font-serif font-black text-white tracking-tighter drop-shadow-[0_0_20px_white] leading-none mix-blend-difference mt-[-5vw]">
              DOWN
            </h1>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
