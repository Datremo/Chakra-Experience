import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const GatewayToCrownSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-black overflow-hidden">
      
      {/* Background Starfield effect pulling upward */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none opacity-30">
         <motion.div 
           className="w-[1px] h-[50vh] bg-gradient-to-t from-transparent via-purple-500 to-transparent"
           animate={{ y: [-500, 1000] }}
           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
         />
      </div>

      <motion.div style={{ y, opacity }} className="text-center z-10 max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-8 rotate-90">
          <span className="text-white/40 font-serif">→</span>
        </div>
        
        <h2 className="font-sans text-sm tracking-[0.4em] text-white/50 uppercase mb-8">Beyond Sight</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-8 leading-tight">
          When the watcher and the watched become one.
        </h1>
        
        <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
          Ājñā allows you to see the truth. But as long as you are "seeing," you are still separate from it. To truly know it, you must dissolve the seer entirely.
        </p>
      </motion.div>

    </section>
  );
};
