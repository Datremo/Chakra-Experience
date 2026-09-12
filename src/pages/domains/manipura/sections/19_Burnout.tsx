import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BurnoutSection: React.FC = () => {
  const [extinguishLevel, setExtinguishLevel] = useState(0); // 0 to 100
  const [isPressing, setIsPressing] = useState(false);
  const [fullyExtinguished, setFullyExtinguished] = useState(false);

  const requestRef = useRef<number>(0);

  const updateLevel = () => {
    if (isPressing) {
      setExtinguishLevel(prev => {
        const next = Math.min(100, prev + 0.8);
        if (next === 100) setFullyExtinguished(true);
        return next;
      });
    } else {
      setExtinguishLevel(prev => {
        if (prev === 100) return 100; // Stays extinguished if it reached the end
        return Math.max(0, prev - 2); // Cool down rapidly if let go early
      });
    }
    requestRef.current = requestAnimationFrame(updateLevel);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateLevel);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isPressing]);

  const words = ["HUSTLE", "PUSH", "GRIND", "MORE", "FASTER", "ACHIEVE", "OPTIMIZE", "WIN", "CRUSH IT", "NEVER STOP", "MAXIMIZE", "RELENTLESS", "OUTPUT", "EFFICIENCY"];

  // Colors map based on extinguish level: 0 (blinding white/yellow) -> 100 (dark charcoal/embers)
  const bgOpacity = 1 - (extinguishLevel / 100);
  const blurAmount = extinguishLevel / 10;
  
  return (
    <section className="min-h-screen py-32 px-6 bg-[#020100] relative flex items-center justify-center overflow-hidden select-none">
      
      {/* Intense Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-100"
        style={{ opacity: bgOpacity, backgroundColor: '#fef08a' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1),rgba(253,224,71,1)_40%,rgba(245,158,11,1)_100%)] animate-pulse" />
      </div>

      {/* Grid of intense words */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none flex flex-wrap content-start justify-center gap-4 p-8 opacity-40 mix-blend-multiply"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <span 
            key={i} 
            className="font-black text-4xl md:text-6xl text-white uppercase tracking-tighter"
            style={{ 
              opacity: Math.random() * 0.5 + 0.5,
              transform: `scale(${Math.random() * 0.5 + 0.8}) rotate(${(Math.random() - 0.5) * 10}deg)`
            }}
          >
            {words[i % words.length]}
          </span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center h-[500px]">
        
        <AnimatePresence mode="wait">
          {!fullyExtinguished ? (
            <motion.div 
              key="burning"
              className="flex flex-col items-center h-full justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              <div 
                className="mb-16 text-center"
                style={{ opacity: Math.max(0.2, bgOpacity) }}
              >
                <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mix-blend-difference drop-shadow-[0_0_20px_white]">
                  BURNOUT
                </h1>
                <p className="text-2xl font-bold text-amber-900 mt-4 uppercase tracking-[0.2em] mix-blend-difference">
                  The Toxic Solar Plexus
                </p>
              </div>

              {/* Interaction Button */}
              <button
                onMouseDown={() => setIsPressing(true)}
                onMouseUp={() => setIsPressing(false)}
                onMouseLeave={() => setIsPressing(false)}
                onTouchStart={() => setIsPressing(true)}
                onTouchEnd={() => setIsPressing(false)}
                className="relative w-48 h-48 rounded-full flex items-center justify-center border-4 border-black/20 group"
              >
                <div 
                  className="absolute bottom-0 left-0 w-full bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] rounded-full transition-all duration-100"
                  style={{ height: `${extinguishLevel}%` }}
                />
                <span className="relative z-10 font-sans tracking-[0.3em] font-bold text-black uppercase group-hover:scale-105 transition-transform mix-blend-overlay">
                  Hold to Extinguish
                </span>
              </button>
              
              <div className="mt-8 text-black/50 font-sans tracking-widest text-xs uppercase mix-blend-difference font-bold">
                Level: {Math.floor(extinguishLevel)}%
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="extinguished"
              className="flex flex-col items-center justify-center h-full text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className="w-16 h-16 rounded-full bg-amber-900/30 border border-amber-900/50 mb-12 flex items-center justify-center shadow-[inset_0_0_15px_black]">
                <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_5px_red]" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-amber-200 mb-8">
                Fire Needs Fuel.<br/>And It Needs Rest.
              </h2>
              
              <p className="text-xl text-amber-500/60 font-light italic max-w-2xl leading-relaxed">
                A fire that burns without pause consumes the house. The modern obsession with relentless productivity is a distortion of Maṇipūra. True agency includes the power to stop.
              </p>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
