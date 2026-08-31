import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AchievementExperimentSection: React.FC = () => {
  const [positions, setPositions] = useState<{x: number, y: number}[]>([{ x: 50, y: 50 }]);
  const [clicks, setClicks] = useState(0);

  const handleClick = (index: number) => {
    setClicks(c => c + 1);
    
    // Create two new buttons that run away
    const newPositions = [...positions];
    // Move the clicked one
    newPositions[index] = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    };
    // Add another one
    newPositions.push({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    });
    
    // Cap at 15 buttons
    if (newPositions.length > 15) {
      newPositions.length = 15;
    }
    
    setPositions(newPositions);
  };

  return (
    <section className="h-screen w-full relative bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 31</h2>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
        {clicks > 5 && (
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-serif text-white/20 tracking-widest text-center px-4"
          >
            YOU CANNOT ACHIEVE IT
          </motion.h1>
        )}
        {clicks > 10 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-xl md:text-2xl font-serif italic text-purple-300 max-w-2xl text-center leading-relaxed px-4"
          >
            Enlightenment is not a trophy. It is not an achievement.<br/>
            The spiritual ego is the ultimate trap.
          </motion.p>
        )}
      </div>

      {positions.map((pos, i) => (
        <motion.button
          key={i}
          onClick={() => handleClick(i)}
          animate={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 px-6 py-3 bg-white text-black font-sans text-xs tracking-widest uppercase rounded-full shadow-[0_0_30px_white] hover:scale-110 active:scale-95 whitespace-nowrap"
        >
          Achieve Enlightenment
        </motion.button>
      ))}
      
    </section>
  );
};
