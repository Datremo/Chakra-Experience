import { ScrollContext } from '../SahasraraDomain';
import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const WhatIsLeftSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const threadHeight = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '100%', '100%']);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-[#040010]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-20 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-purple-300/50 mb-4">World 15</h2>
        </div>

        {/* The Thread */}
        <motion.div 
          style={{ height: threadHeight }}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-purple-300 to-transparent shadow-[0_0_15px_#d8b4fe] z-10 top-0"
        />

        {/* Geometric Burst */}
        <motion.div
          className="absolute z-10 flex items-center justify-center pointer-events-none"
          style={{
            scale: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.5]),
            opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
            rotate: useTransform(scrollYProgress, [0.3, 0.7], [0, 90])
          }}
        >
          {/* Multiple rotating borders */}
          <div className="w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] absolute border border-white/20 rotate-45" />
          <div className="w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] absolute border border-purple-500/30 rotate-[60deg]" />
          <div className="w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] absolute border border-white/5 rounded-full" />
          <div className="w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] bg-white/5 backdrop-blur-md absolute rotate-[20deg]" />
        </motion.div>

        {/* The Question */}
        <motion.div
          style={{ opacity: textOpacity, scale: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 1.2]) }}
          className="absolute z-20 px-6 max-w-4xl text-center pointer-events-none"
        >
          <h3 className="text-4xl md:text-7xl font-serif text-white leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
            If you are <span className="italic">everything</span>,<br/>
            how do you live as <span className="italic text-purple-300">something</span>?
          </h3>
        </motion.div>

      </div>

    </section>
  );
};
