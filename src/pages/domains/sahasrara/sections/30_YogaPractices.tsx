import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const YogaPracticesSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Rotation for Headstand (Shirshasana)
  const bodyRotation = useTransform(scrollYProgress, [0.3, 0.5], [0, 180]);
  
  // Energy flow (Prana) moving to the crown (which is now at the bottom because inverted)
  const energyY = useTransform(scrollYProgress, [0.4, 0.6], ['-100%', '100%']);
  const energyOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);

  const crownGlow = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 30</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          <div className="relative flex flex-col items-center">
            {/* Minimalist Body Representation */}
            <motion.div 
              style={{ rotate: bodyRotation }}
              className="relative w-2 h-64 md:h-96 bg-white/20 rounded-full flex flex-col justify-between items-center z-10"
            >
              {/* Head / Crown */}
              <div className="absolute -top-8 w-16 h-16 rounded-full border border-white/50 flex items-center justify-center bg-black">
                <motion.div 
                  style={{ opacity: crownGlow }}
                  className="w-full h-full rounded-full bg-white shadow-[0_0_50px_white]"
                />
              </div>

              {/* Base / Root */}
              <div className="absolute -bottom-4 w-8 h-8 rounded-full border border-red-500/50 flex items-center justify-center bg-black" />

              {/* Flowing Energy inside the central channel */}
              <div className="absolute inset-y-0 w-full overflow-hidden rounded-full">
                <motion.div 
                  style={{ y: energyY, opacity: energyOpacity }}
                  className="w-full h-1/3 bg-white shadow-[0_0_20px_white] rounded-full"
                />
              </div>

            </motion.div>
          </div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6 mix-blend-difference">
              ŚĪRṢĀSANA
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              The King of Asanas.<br/>
              By physically inverting the body, gravity forces the downward-flowing energy (Apana) to reverse course, merging with Prana and flooding the Crown.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
