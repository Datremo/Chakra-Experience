import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheArtOfLettingGoSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [dissolving, setDissolving] = useState(false);

  const handleDissolve = () => {
    if (inputText.trim() === '') return;
    setDissolving(true);
    setTimeout(() => {
      setInputText('');
      setDissolving(false);
    }, 4000);
  };

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#020508]">
      <div className="relative z-10 text-center max-w-3xl px-6 pt-10 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Ritual
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12"
        >
          The Art of Letting Go
        </motion.h2>

        <p className="text-xl text-white/60 font-light mb-8">
          What are you gripping right now? What are you trying to force? Type it below.
        </p>

        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!dissolving ? (
              <motion.div
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: 50, scale: 1.1 }}
                transition={{ duration: 2 }}
                className="flex flex-col gap-6"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="e.g., I must control this outcome..."
                  className="w-full bg-black/50 border border-blue-900/50 rounded-full px-8 py-5 text-center text-white/80 font-serif italic text-xl focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/20"
                />
                <button
                  onClick={handleDissolve}
                  disabled={!inputText.trim()}
                  className="mx-auto px-10 py-4 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/30 hover:bg-blue-800/50 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed font-sans tracking-widest text-sm uppercase"
                >
                  Drop it into the River
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="dissolved"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.p 
                  initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  animate={{ opacity: 0, scale: 2, filter: 'blur(20px)', y: -100 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="text-3xl font-serif text-blue-300 italic"
                >
                  {inputText}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
