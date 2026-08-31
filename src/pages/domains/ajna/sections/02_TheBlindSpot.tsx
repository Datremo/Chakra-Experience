import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheBlindSpotSection: React.FC = () => {
  const [found, setFound] = useState(false);
  const [stars, setStars] = useState<{ id: number, x: number, y: number, isTarget: boolean }[]>([]);

  useEffect(() => {
    // Generate a field of stars
    const newStars = Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 80 + 10,
      isTarget: i === 150 // One golden point
    }));
    setStars(newStars);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#010205]">
      
      <div className="absolute top-20 text-center z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          {!found ? (
            <motion.div
              key="task"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-black/50 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md"
            >
              <p className="font-sans text-xs tracking-[0.3em] text-white/70 uppercase">
                Find the golden point
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="found"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <p className="font-sans text-sm tracking-[0.3em] text-amber-200/70 uppercase mb-4">
                You found it.
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">But how much did you miss?</h2>
              <p className="text-white/50 font-light max-w-lg mx-auto text-center px-6">
                Attention is selective. When the mind decides what it is looking for, it becomes blind to everything else in the room.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-10">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full transition-all duration-1000 ${
              star.isTarget 
                ? 'w-2 h-2 cursor-pointer z-50' 
                : found ? 'w-8 h-8 flex items-center justify-center border border-white/10' : 'w-1 h-1 bg-white/40'
            }`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              backgroundColor: star.isTarget && !found ? '#fbbf24' : star.isTarget && found ? '#fbbf24' : 'transparent',
              boxShadow: star.isTarget && !found ? '0 0 10px #fcd34d' : 'none'
            }}
            onClick={() => {
              if (star.isTarget) setFound(true);
            }}
          >
            {/* Reveal hidden shapes once found */}
            {found && !star.isTarget && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: Math.random() * 2 + 1 }}
                className={`w-full h-full ${Math.random() > 0.5 ? 'rounded-full' : 'rotate-45'} border ${Math.random() > 0.5 ? 'border-indigo-400' : 'border-emerald-400'}`}
              />
            )}
          </div>
        ))}
      </div>

      {found && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-20 z-20 text-center"
        >
          <p className="font-sans text-[10px] tracking-widest text-white/30 uppercase animate-pulse">
            Scroll to continue
          </p>
        </motion.div>
      )}

    </section>
  );
};
