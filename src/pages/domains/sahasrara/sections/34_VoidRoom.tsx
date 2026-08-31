import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const VoidRoomSection: React.FC = () => {
  const [isPressing, setIsPressing] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPressing) {
      controls.start({
        scale: [1, 100],
        opacity: [0, 1],
        transition: { duration: 3, ease: "easeIn" }
      });
    } else {
      controls.start({
        scale: 1,
        opacity: 0,
        transition: { duration: 1, ease: "easeOut" }
      });
    }
  }, [isPressing, controls]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsPressing(true);
  };

  const handlePointerUp = () => {
    setIsPressing(false);
  };

  return (
    <section 
      ref={containerRef} 
      className="h-screen w-full relative bg-black overflow-hidden flex flex-col items-center justify-center touch-none"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown as any}
      onTouchEnd={handlePointerUp}
      onTouchCancel={handlePointerUp}
    >
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md mix-blend-difference">World 34</h2>
      </div>

      {/* The Void / Fullness Light */}
      <motion.div
        animate={controls}
        className="absolute z-10 w-4 h-4 rounded-full bg-white shadow-[0_0_100px_white]"
      />

      <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1 
          animate={{ opacity: isPressing ? 0 : 1 }}
          className="text-4xl md:text-7xl font-serif text-white/20 tracking-widest text-center"
        >
          THE VOID
        </motion.h1>
        
        <motion.p 
          animate={{ opacity: isPressing ? 0 : 1 }}
          className="mt-8 font-sans text-xs tracking-widest uppercase text-white/50 animate-pulse border border-white/20 px-6 py-2 rounded-full"
        >
          Hold to see what is inside
        </motion.p>
      </div>

      {/* Reveal Text when fully pressed */}
      <motion.div
        animate={{ opacity: isPressing ? 1 : 0 }}
        transition={{ delay: isPressing ? 2.5 : 0, duration: 1 }}
        className="absolute z-30 flex flex-col items-center text-center pointer-events-none px-6 mix-blend-difference"
      >
        <h1 className="text-4xl md:text-7xl font-serif text-black tracking-widest mb-6">
          ŚŪNYATĀ
        </h1>
        <p className="font-serif italic text-2xl md:text-4xl text-black">
          The void is not empty.<br/>
          It is pregnant with everything.
        </p>
      </motion.div>
      
    </section>
  );
};
