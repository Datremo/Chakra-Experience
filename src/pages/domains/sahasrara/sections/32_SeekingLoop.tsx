import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const SeekingLoopSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStopped, setHasStopped] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // If they are in the middle of this section
    if (latest > 0.2 && latest < 0.8) {
      setHasStopped(false);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setHasStopped(true);
      }, 2000); // Stop scrolling for 2 seconds to break the loop
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const yPos = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);

  const words = ["MONEY", "POWER", "PEACE", "ENLIGHTENMENT", "MONEY", "POWER", "PEACE", "ENLIGHTENMENT", "MONEY", "POWER", "PEACE", "ENLIGHTENMENT"];

  return (
    <section ref={containerRef} className="h-[400vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 32</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          <motion.div 
            style={{ y: yPos }}
            className={`absolute flex flex-col items-center gap-[30vh] transition-opacity duration-1000 ${hasStopped ? 'opacity-0' : 'opacity-100'}`}
          >
            {words.map((w, i) => (
              <h1 key={i} className="text-[12vw] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 tracking-tighter">
                {w}
              </h1>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: hasStopped ? 1 : 0, scale: hasStopped ? 1 : 0.8 }}
            transition={{ duration: 1 }}
            className="absolute z-20 flex flex-col items-center text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6">
              THE SEEKING LOOP
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] leading-relaxed bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              Replacing a material desire with a spiritual desire is still desire.<br/><br/>
              The loop is only broken when you <span className="text-white font-bold not-italic">stop</span>.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
