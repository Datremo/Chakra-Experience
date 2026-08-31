import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const VoiceToWorldLabSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [waves, setWaves] = useState<{ id: number, size: number, text: string }[]>([]);
  const [waveCounter, setWaveCounter] = useState(0);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const newWave = {
        id: waveCounter,
        size: Math.max(1, inputText.length / 5), // Size based on length
        text: inputText
      };
      setWaves(prev => [...prev, newWave]);
      setWaveCounter(prev => prev + 1);
      setInputText('');

      // Remove wave after animation
      setTimeout(() => {
        setWaves(prev => prev.filter(w => w.id !== newWave.id));
      }, 4000);
    }
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative bg-[#01040a] overflow-hidden">
      
      <div className="text-center z-20 mb-8 pointer-events-none px-6">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Bridge</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Voice to World</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Type a word or sentence and press Enter to release it into the space.
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <AnimatePresence>
          {waves.map((wave) => (
            <motion.div
              key={wave.id}
              className="absolute border border-cyan-400/30 rounded-full flex items-center justify-center bg-cyan-900/10"
              initial={{ width: 0, height: 0, opacity: 1, borderWidth: '4px' }}
              animate={{ 
                width: 500 * wave.size, 
                height: 500 * wave.size, 
                opacity: 0, 
                borderWidth: '1px' 
              }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <motion.span 
                className="font-serif text-cyan-100/50 whitespace-nowrap"
                initial={{ scale: 1 }}
                animate={{ scale: 2 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                {wave.text}
              </motion.span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Ambient static background rings */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-white/5 border-dashed opacity-30" />
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-white/5 opacity-10" />
      </div>

      <div className="relative z-20 mt-64 w-full max-w-md px-6">
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type here and press enter..."
          className="w-full bg-cyan-950/40 border border-cyan-500/30 rounded-full px-6 py-4 text-cyan-100 font-sans tracking-wider placeholder-cyan-700/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all text-center"
        />
      </div>

    </section>
  );
};
