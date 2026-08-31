import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PatternDetectorSection: React.FC = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const generateSequence = () => {
    setIsPlaying(true);
    setSequence([]);
    
    // Generate 6 random dots
    let i = 0;
    const interval = setInterval(() => {
      setSequence(prev => [...prev, Math.floor(Math.random() * 9)]);
      i++;
      if (i >= 6) {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 500);
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Apophenia</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Pattern Detector</h1>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        
        <div className="grid grid-cols-3 gap-4 mb-12">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-16 h-16 md:w-20 md:h-20 border rounded-xl flex items-center justify-center transition-all duration-300 ${
                sequence[sequence.length - 1] === i ? 'bg-indigo-500 border-indigo-400 scale-110 shadow-[0_0_20px_rgba(99,102,241,0.5)]' : 
                sequence.includes(i) ? 'bg-indigo-500/20 border-indigo-500/30' : 'bg-white/5 border-white/10'
              }`}
            >
              {sequence.includes(i) && (
                <span className="font-sans text-xs text-indigo-200">
                  {sequence.indexOf(i) + 1}
                </span>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={generateSequence}
          disabled={isPlaying}
          className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all disabled:opacity-50 mb-12"
        >
          {isPlaying ? 'Generating...' : 'Generate Random Sequence'}
        </button>

        <div className="text-center max-w-md px-6">
          <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
            Even though the sequence above is entirely random, your brain immediately attempts to find a rule, a shape, or a hidden meaning in the numbers. 
          </p>
          <p className="text-white/40 font-light text-xs italic">
            Apophenia is the human tendency to perceive meaningful patterns within random data. True sight requires knowing when a pattern is real, and when you are just connecting the dots you want to see.
          </p>
        </div>

      </div>

    </section>
  );
};
