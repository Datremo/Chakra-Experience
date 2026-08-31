import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const VoiceToCosmosSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [sent, setSent] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      setSent(true);
    }
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000103] overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black" />

      <div className="text-center z-20 mb-16 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-blue-500/70 uppercase mb-4">The Final Word</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Release</h1>
      </div>

      <div className="relative z-20 w-full max-w-xl h-64 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <p className="text-center text-white/50 font-light text-sm mb-8">
                Type the truth you have been holding back. When you press Enter, it will be released into the Ākāśa (Space).
              </p>
              <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="I..."
                className="w-full bg-transparent border-b border-blue-500/50 px-6 py-4 text-blue-100 font-serif text-2xl tracking-wider placeholder-blue-900/50 focus:outline-none focus:border-blue-300 transition-all text-center"
              />
            </motion.div>
          ) : (
            <motion.div
              key="sent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-4 h-4 bg-white rounded-full mx-auto mb-8 shadow-[0_0_30px_#fff]"
              />
              <p className="font-serif text-3xl text-blue-200 mb-4 tracking-wider">It is spoken.</p>
              <p className="text-white/40 font-light font-sans text-xs tracking-widest uppercase">The space has received it.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
