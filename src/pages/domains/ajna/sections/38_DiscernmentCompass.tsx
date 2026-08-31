import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DiscernmentCompassSection: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  const getMessage = () => {
    if (position.x < 30 && position.y < 30) return "Paranoia (Fear + Intuition without Evidence)";
    if (position.x > 70 && position.y < 30) return "Wishful Thinking (Desire + Intuition)";
    if (position.x > 70 && position.y > 70) return "Cold Calculation (Evidence + Desire)";
    if (position.x < 30 && position.y > 70) return "Cynicism (Evidence + Fear)";
    if (position.x > 40 && position.x < 60 && position.y > 40 && position.y < 60) return "Viveka (True Discernment)";
    return "Searching for balance...";
  };

  const isCentered = position.x > 40 && position.x < 60 && position.y > 40 && position.y < 60;

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103] overflow-hidden select-none">
      
      <div className="text-center z-10 mb-16 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Viveka</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Discernment Compass</h1>
      </div>

      <div className="w-full max-w-lg relative z-10 flex flex-col items-center">
        
        <div 
          className="w-full aspect-square border-2 border-white/10 rounded-full relative bg-[#050505] overflow-hidden cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setPosition({ x: 50, y: 50 })}
        >
          {/* Axis Labels */}
          <div className="absolute top-4 w-full text-center text-xs font-sans tracking-widest uppercase text-indigo-300">Intuition</div>
          <div className="absolute bottom-4 w-full text-center text-xs font-sans tracking-widest uppercase text-amber-300">Evidence</div>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-sans tracking-widest uppercase text-rose-300">Fear</div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-xs font-sans tracking-widest uppercase text-emerald-300">Desire</div>

          {/* Guidelines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/20 rounded-full" />

          {/* The Pointer */}
          <motion.div 
            className={`absolute w-6 h-6 rounded-full -ml-3 -mt-3 shadow-[0_0_20px_currentColor] ${isCentered ? 'bg-white text-white' : 'bg-indigo-500/50 text-indigo-500'}`}
            animate={{ left: `${position.x}%`, top: `${position.y}%` }}
            transition={{ type: 'spring', bounce: 0, duration: 0.1 }}
          />
        </div>

        <div className="mt-12 h-16 text-center">
          <p className={`font-serif text-xl transition-colors ${isCentered ? 'text-white' : 'text-white/50'}`}>
            {getMessage()}
          </p>
        </div>

      </div>

    </section>
  );
};
