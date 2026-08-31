import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const OrdinarySacredSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const text1Opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 0]);
  
  const textScale = useTransform(scrollYProgress, [0.2, 0.9], [0.8, 1.2]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 40</h2>
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
          
          <motion.div
            style={{ opacity: text1Opacity, scale: textScale }}
            className="absolute z-10 text-center"
          >
            <h1 className="text-3xl md:text-6xl font-serif text-white/70 tracking-widest leading-relaxed">
              Before Enlightenment:<br/>
              <span className="text-white font-black">Chop wood, carry water.</span>
            </h1>
          </motion.div>

          <motion.div
            style={{ opacity: text2Opacity, scale: textScale }}
            className="absolute z-20 text-center"
          >
            <h1 className="text-4xl md:text-7xl font-serif text-white tracking-widest leading-relaxed drop-shadow-[0_0_30px_white]">
              After Enlightenment:<br/>
              <span className="text-purple-300 font-black">Chop wood, carry water.</span>
            </h1>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
