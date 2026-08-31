import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MeditationSection: React.FC = () => {
  const [focus, setFocus] = useState(0); // 0 to 100
  const [isFocusing, setIsFocusing] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isFocusing) {
      interval = setInterval(() => {
        setFocus(prev => Math.min(prev + 2, 100));
      }, 100);
    } else {
      interval = setInterval(() => {
        setFocus(prev => Math.max(prev - 5, 0));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isFocusing]);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000] overflow-hidden select-none">
      
      <div className="text-center z-20 mb-16 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Trāṭaka</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Single Pointed Focus</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Hold click (or tap and hold) on the flame to focus your mind. Watch what happens to the periphery.
        </p>
      </div>

      <div 
        className="w-full max-w-2xl relative z-10 flex flex-col items-center justify-center h-[50vh] cursor-pointer"
        onMouseDown={() => setIsFocusing(true)}
        onMouseUp={() => setIsFocusing(false)}
        onMouseLeave={() => setIsFocusing(false)}
        onTouchStart={(e) => { e.preventDefault(); setIsFocusing(true); }}
        onTouchEnd={() => setIsFocusing(false)}
      >
        
        {/* The Periphery (Distractions) */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 1 - (focus / 100) }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/30 font-serif italic text-sm"
              initial={{ x: 0, y: 0 }}
              animate={{ 
                x: Math.sin(i * 30) * (150 + Math.random() * 100), 
                y: Math.cos(i * 30) * (150 + Math.random() * 100)
              }}
              transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: 'reverse' }}
            >
              {['Did I lock the door?', 'Tomorrow...', 'I should text them.', 'What time is it?', 'My back hurts', 'Hungry...'][i % 6]}
            </motion.div>
          ))}
        </motion.div>

        {/* The Candle Flame */}
        <div className="relative flex items-center justify-center">
          
          {/* Flame Base */}
          <motion.div 
            className="w-4 h-16 bg-amber-200 rounded-[50%] blur-[2px] z-20"
            style={{ 
              boxShadow: `0 0 ${20 + (focus/2)}px ${10 + (focus/5)}px rgba(251, 191, 36, ${0.5 + (focus/200)})`,
              scaleY: 1 + (focus / 200)
            }}
            animate={{ 
              scaleX: isFocusing ? 1 : [1, 1.1, 0.9, 1],
              x: isFocusing ? 0 : [0, 2, -2, 0]
            }}
            transition={{ duration: 0.5, repeat: isFocusing ? 0 : Infinity }}
          />
          
          {/* Flame Core */}
          <div className="absolute bottom-2 w-2 h-6 bg-white rounded-[50%] blur-[1px] z-30" />
          
          {/* Flame Halo (Grows with focus) */}
          <motion.div 
            className="absolute bg-amber-500/20 rounded-full z-10 pointer-events-none"
            style={{ 
              width: 100 + focus * 4,
              height: 100 + focus * 4,
              opacity: focus / 100,
              filter: `blur(${20 + focus/2}px)`
            }}
          />

        </div>

      </div>

      <div className="mt-12 h-16 text-center pointer-events-none">
        <AnimatePresence mode="wait">
          {focus >= 100 && (
            <motion.div key="max" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 font-sans text-xs tracking-widest uppercase">
              Ekāgratā (One-Pointedness) Achieved.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
