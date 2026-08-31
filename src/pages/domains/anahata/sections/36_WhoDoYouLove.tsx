import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhoDoYouLoveSection: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasSelf, setHasSelf] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputValue.trim().toLowerCase();
    
    if (!val) return;

    if (val === 'me' || val === 'myself' || val === 'i') {
      setHasSelf(true);
    } else {
      setNames([...names, inputValue.trim()]);
    }
    
    setInputValue('');
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Final Recipient</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Who Do You Love?</h1>
        <p className="text-white/50 italic font-light leading-relaxed mb-8">
          Type the names of those you love unconditionally. Press Enter after each one.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-12">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={hasSelf}
            placeholder={hasSelf ? "Complete." : "Name..."}
            className="bg-transparent border-b border-emerald-900/50 text-white text-xl font-serif text-center focus:outline-none focus:border-emerald-400 w-64 pb-2 transition-colors disabled:opacity-50"
          />
        </form>

        <div className="flex flex-wrap justify-center gap-3 mb-16 min-h-[50px]">
          <AnimatePresence>
            {names.map((name, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-4 py-2 rounded-full bg-emerald-950/30 border border-emerald-900/30 text-emerald-100/70 font-serif"
              >
                {name}
              </motion.span>
            ))}
            
            {hasSelf && (
              <motion.span
                initial={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1.1, filter: 'blur(0px)' }}
                className="px-6 py-2 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-100 font-serif shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Myself
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="h-32 text-center w-full">
          <AnimatePresence mode="wait">
            {!hasSelf && names.length >= 3 && (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-emerald-500/50 font-sans text-xs tracking-widest uppercase"
              >
                Are you forgetting someone?
              </motion.p>
            )}

            {hasSelf && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-serif text-emerald-300 mb-4">The Circle Closes</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  "If your compassion does not include yourself, it is incomplete." — Jack Kornfield
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
