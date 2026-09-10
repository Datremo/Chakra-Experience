import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface EndingSectionProps {
  onClose: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onClose }) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-[100svh] w-full flex items-center justify-center relative ">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/svadhisthana/svadhisthana_balanced_aura_1788973173552.jpg"
          alt="Balanced sacral aura"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        {/* Orange glow from below */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[80px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 pt-10 w-full">

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Sacral symbol */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-full border-2 border-orange-500/60 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)]"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/80 shadow-[0_0_20px_#f97316]" />
              </motion.div>

              {/* Closing mantra */}
              <div className="space-y-3">
                {[
                  { text: 'LET YOURSELF FEEL.', delay: 0 },
                  { text: 'LET YOURSELF MOVE.', delay: 0.3 },
                  { text: 'LET YOURSELF CREATE.', delay: 0.6 },
                  { text: 'LET YOURSELF CHOOSE.', delay: 0.9, orange: true },
                ].map(({ text, delay, orange }) => (
                  <motion.p
                    key={text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay, duration: 0.8 }}
                    className={`font-serif text-2xl md:text-4xl tracking-wide ${orange ? 'text-orange-400' : 'text-white'}`}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Closing message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="mt-4 border-t border-white/10 pt-8 max-w-xl mx-auto"
              >
                <p className="text-lg md:text-xl text-white/60 font-serif italic leading-relaxed">
                  "Flow is not the absence of boundaries.<br />
                  It is the ability to move <em>within</em> them."
                </p>
                <p className="mt-6 text-sm text-white/30 font-sans tracking-widest uppercase">
                  Svādhiṣṭhāna — complete. The river carries you forward.
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mt-6"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('svadhisthana-scroll-container');
                    if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-3 px-7 py-4 bg-white/5 border border-white/20 text-white/60 rounded-full hover:bg-white/10 hover:text-white transition-all font-sans tracking-widest text-sm uppercase"
                >
                  <RotateCcw size={16} />
                  Revisit Svādhiṣṭhāna
                </button>

                <button
                  onClick={onClose}
                  className="flex items-center justify-center gap-3 px-7 py-4 bg-orange-900/40 border border-orange-500/50 text-orange-100 rounded-full hover:bg-orange-800/60 shadow-[0_0_30px_rgba(249,115,22,0.25)] transition-all font-sans tracking-widest text-sm uppercase"
                >
                  Return to Journey
                  <ArrowRight size={16} />
                </button>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
