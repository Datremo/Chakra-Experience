import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheUnspokenSection: React.FC = () => {
  const [swallowedWords, setSwallowedWords] = useState([
    { id: 1, text: "I need help.", x: 20, y: 30, color: "text-cyan-200" },
    { id: 2, text: "No.", x: 70, y: 20, color: "text-red-300" },
    { id: 3, text: "I'm hurt.", x: 40, y: 60, color: "text-blue-300" },
    { id: 4, text: "I'm sorry.", x: 80, y: 70, color: "text-indigo-300" },
    { id: 5, text: "I don't know.", x: 10, y: 80, color: "text-slate-300" }
  ]);

  const speakWord = (id: number) => {
    setSwallowedWords(prev => prev.filter(w => w.id !== id));
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-20 mb-16 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Suppression</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Unspoken</h1>
        <p className="text-white/50 font-light mt-4 text-sm">
          Click a word to release it from the throat.
        </p>
      </div>

      <div className="w-full max-w-2xl relative h-[400px] flex items-center justify-center z-10 border border-white/5 rounded-[40px] bg-white/[0.02]">
        
        {/* The abstract throat container */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

        <AnimatePresence>
          {swallowedWords.map(word => (
            <motion.button
              key={word.id}
              onClick={() => speakWord(word.id)}
              className={`absolute font-serif text-2xl md:text-3xl tracking-wide ${word.color} hover:text-white transition-colors cursor-pointer`}
              style={{ left: `${word.x}%`, top: `${word.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.7, 
                scale: 1,
                y: [0, -10, 0], // Floating effect
              }}
              exit={{ 
                opacity: 0, 
                scale: 2, 
                y: -100, // Flies up and out
                filter: 'blur(10px)',
                transition: { duration: 1, ease: "easeOut" }
              }}
              transition={{
                y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
            >
              {word.text}
            </motion.button>
          ))}
        </AnimatePresence>

        {swallowedWords.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center"
          >
            <h3 className="text-xl font-serif text-cyan-400 mb-2">The space is clear.</h3>
            <p className="text-white/50 font-light text-sm">Unspoken truths become physical tension.</p>
          </motion.div>
        )}

      </div>

    </section>
  );
};
