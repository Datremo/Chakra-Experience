import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GRANTHIS = [
  { 
    id: 'brahma', 
    name: 'BRAHMA',
    title: 'The Knot of Survival',
    color: 'from-red-500 to-red-900',
    borderColor: 'border-red-500',
    shadow: 'shadow-[0_0_50px_rgba(239,68,68,0.8)]'
  },
  { 
    id: 'vishnu', 
    name: 'VIṢṆU', 
    title: 'The Knot of Emotion',
    color: 'from-blue-500 to-blue-900',
    borderColor: 'border-blue-500',
    shadow: 'shadow-[0_0_50px_rgba(59,130,246,0.8)]'
  },
  { 
    id: 'rudra', 
    name: 'RUDRA', 
    title: 'The Knot of Illusion',
    color: 'from-purple-500 to-purple-900',
    borderColor: 'border-purple-500',
    shadow: 'shadow-[0_0_50px_rgba(168,85,247,0.8)]'
  }
];

export const ThreeGranthisSection: React.FC = () => {
  const [currentKnotIndex, setCurrentKnotIndex] = useState(0);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [isPierced, setIsPierced] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isHolding && !isPierced) {
      interval = window.setInterval(() => {
        setHoldProgress(prev => {
          if (prev >= 100) {
            setIsPierced(true);
            return 100;
          }
          return prev + 2; // Takes ~50 ticks (about 1 second to break)
        });
      }, 20);
    } else if (!isHolding && holdProgress > 0 && !isPierced) {
      // Rapidly cool down if let go
      interval = window.setInterval(() => {
        setHoldProgress(prev => Math.max(0, prev - 5));
      }, 20);
    }
    return () => clearInterval(interval);
  }, [isHolding, holdProgress, isPierced]);

  const handleNext = () => {
    setHoldProgress(0);
    setIsPierced(false);
    setCurrentKnotIndex(prev => Math.min(prev + 1, GRANTHIS.length));
  };

  const isComplete = currentKnotIndex === GRANTHIS.length;
  const currentGranthi = GRANTHIS[currentKnotIndex];

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-black overflow-hidden select-none">
      
      {!isComplete && currentGranthi && (
        <div className="absolute top-12 text-center w-full z-20 px-6 pointer-events-none">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-2">World 18</h2>
          <h3 className="text-xl md:text-2xl font-serif text-white/80 tracking-widest uppercase">
            Pierce {currentGranthi.title}
          </h3>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isComplete && currentGranthi ? (
          <motion.div
            key={currentGranthi.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.5 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center w-full h-full absolute inset-0 z-10"
          >
            {/* The Knot Visual */}
            <motion.div
              onPointerDown={() => setIsHolding(true)}
              onPointerUp={() => setIsHolding(false)}
              onPointerLeave={() => setIsHolding(false)}
              animate={{
                scale: isHolding ? 0.9 : 1,
                rotate: isHolding ? (Math.random() - 0.5) * (holdProgress / 5) : 0, // Violent shake
              }}
              className="relative cursor-pointer touch-none flex items-center justify-center"
            >
              {/* Outer Rings (The Bindings) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10 - (holdProgress / 10), repeat: Infinity, ease: "linear" }}
                className={`w-64 h-64 md:w-96 md:h-96 rounded-full border-4 ${currentGranthi.borderColor} absolute opacity-50 border-dashed`}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15 - (holdProgress / 10), repeat: Infinity, ease: "linear" }}
                className={`w-56 h-56 md:w-80 md:h-80 rounded-full border-2 ${currentGranthi.borderColor} absolute opacity-70`}
              />
              
              {/* Core */}
              <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${currentGranthi.color} ${holdProgress > 20 ? currentGranthi.shadow : ''} flex items-center justify-center relative overflow-hidden transition-all duration-75`}>
                <div 
                  className="absolute bottom-0 w-full bg-white mix-blend-overlay transition-all duration-75"
                  style={{ height: `${holdProgress}%` }}
                />
                <span className="font-serif text-3xl text-white relative z-10 opacity-50 mix-blend-difference pointer-events-none">
                  HOLD
                </span>
              </div>
            </motion.div>

            {/* Pierced Overlay */}
            <AnimatePresence>
              {isPierced && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1.5, 1], opacity: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 100 }}
                  >
                    <h1 className="text-7xl md:text-[150px] font-serif font-bold text-white tracking-tighter mix-blend-difference">
                      PIERCED.
                    </h1>
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    onClick={handleNext}
                    className="mt-12 px-8 py-4 bg-white text-black font-sans text-sm tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                  >
                    Continue Ascent
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center w-full h-full"
          >
            <h1 className="text-5xl md:text-8xl font-serif text-white tracking-[0.2em] font-light text-center leading-tight">
              THE PATH <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0">IS CLEAR</span>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
