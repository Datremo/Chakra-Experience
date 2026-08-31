import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhoAreYouSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [stars, setStars] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const newStar = {
        id: Date.now(),
        text: inputText,
        x: 10 + Math.random() * 80, // Avoid absolute edges
        y: 10 + Math.random() * 80
      };
      setStars([...stars, newStar]);
      setInputText('');
    }
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000205] overflow-hidden">
      
      <div className="text-center z-20 mb-8 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Identity</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-4">Who Are You?</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Every true statement you make about yourself forms a constellation. Type "I am..."
        </p>
      </div>

      {/* The Constellation Field */}
      <div className="absolute inset-0 z-0">
        
        {/* Draw lines between stars */}
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          {stars.map((star, i) => {
            if (i === 0) return null;
            const prev = stars[i - 1];
            return (
              <motion.line
                key={`line-${star.id}`}
                x1={`${prev.x}%`}
                y1={`${prev.y}%`}
                x2={`${star.x}%`}
                y2={`${star.y}%`}
                stroke="#22d3ee"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            );
          })}
        </svg>

        {/* The Stars */}
        <AnimatePresence>
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute group flex flex-col items-center justify-center cursor-crosshair"
              style={{ left: `${star.x}%`, top: `${star.y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <div className="w-2 h-2 bg-cyan-100 rounded-full shadow-[0_0_15px_#22d3ee]" />
              <div className="absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-3 py-1 rounded border border-cyan-900/50 text-cyan-200 font-serif text-sm">
                {star.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-20 mt-64 w-full max-w-lg px-6">
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="I am..."
          className="w-full bg-cyan-950/40 border border-cyan-500/30 rounded-full px-6 py-4 text-cyan-100 font-serif text-lg tracking-wider placeholder-cyan-700/50 focus:outline-none focus:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all text-center"
        />
        {stars.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 font-serif text-cyan-300/70"
          >
            The pattern is uniquely yours.
          </motion.div>
        )}
      </div>

    </section>
  );
};
