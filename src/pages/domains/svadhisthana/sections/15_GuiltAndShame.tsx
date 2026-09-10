import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GuiltAndShameSection: React.FC = () => {
  const [holding, setHolding] = useState(false);
  const [cleared, setCleared] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startPress = () => {
    if (cleared) return;
    if (pressTimer.current) clearTimeout(pressTimer.current);
    setHolding(true);
    pressTimer.current = setTimeout(() => {
      setCleared(true);
      setHolding(false);
      pressTimer.current = null;
    }, 2000);
  };

  const cancelPress = () => {
    if (cleared) return;
    setHolding(false);
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  useEffect(() => () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
  }, []);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-black px-5 py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.10),transparent_46%)] pointer-events-none" />
      <div className="relative z-10 text-center max-w-4xl px-4 w-full">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
          className="text-orange-300 font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">
          A Modern Interpretation
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white mb-5 drop-shadow-xl">
          Guilt &amp; Shame
        </motion.h2>
        <p className="text-white/55 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Guilt can point to an action you want to repair. Shame can turn that action into a verdict about your whole identity. Notice the difference before you decide what to do next.
        </p>

        <AnimatePresence mode="wait">
          {!cleared ? (
            <motion.div key="before" exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
              <div className="mb-6 text-white/65 font-serif italic text-lg md:text-xl">
                “I made a mistake” <span className="text-orange-300/50">is not the same as</span> “I am a mistake.”
              </div>
              <motion.button
                type="button"
                onMouseDown={startPress}
                onMouseUp={cancelPress}
                onMouseLeave={cancelPress}
                onTouchStart={startPress}
                onTouchEnd={cancelPress}
                animate={{ scale: holding ? 0.95 : 1 }}
                className="relative w-44 h-44 md:w-48 md:h-48 rounded-full border border-orange-400/35 bg-black/40 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.10)] select-none touch-none"
              >
                <motion.div className="absolute inset-x-0 bottom-0 bg-orange-500/40" animate={{ height: holding ? '100%' : '0%' }} transition={{ duration: 2, ease: 'linear' }} />
                <span className="relative z-10 text-orange-100 font-sans tracking-[0.16em] text-[10px] uppercase">
                  {holding ? 'Stay with it…' : 'Press & Hold'}
                </span>
                <span className="relative z-10 mt-2 text-white/35 text-[9px]">2 seconds</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div key="after" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-3 bg-orange-900/15 backdrop-blur-xl p-7 md:p-10 rounded-[2rem] border border-orange-500/25 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-orange-200 mb-4">Make room for repair</h3>
              <p className="text-base md:text-lg text-white/75 leading-relaxed font-light">
                The practice is not to erase the past. It is to separate the action from the identity, learn what needs learning, and choose what happens next.
              </p>
              <button type="button" onClick={() => setCleared(false)} className="mt-6 text-[10px] uppercase tracking-[0.2em] text-orange-200/55 hover:text-orange-100 transition-colors">
                Begin again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
