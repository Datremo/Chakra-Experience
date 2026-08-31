import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SoundExperienceSection: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'voice' | 'breath' | 'heartbeat' | 'silence'>('intro');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const stages: ('voice' | 'breath' | 'heartbeat' | 'silence')[] = ['voice', 'breath', 'heartbeat', 'silence'];
    let currentIdx = 0;

    const interval = setInterval(() => {
      setStage(stages[currentIdx]);
      currentIdx++;
      if (currentIdx >= stages.length) {
        clearInterval(interval);
      }
    }, 6000); // Change stage every 6 seconds

    return () => clearInterval(interval);
  }, [hasStarted]);

  const getVisualizer = () => {
    switch (stage) {
      case 'intro':
        return null;
      case 'voice':
        return (
          <motion.div className="flex gap-2">
            {[1, 2, 3, 2, 1].map((h, i) => (
              <motion.div
                key={`voice-${i}`}
                className="w-1 bg-emerald-400 rounded-full"
                animate={{ height: [10, h * 30, 10] }}
                transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5 }}
              />
            ))}
          </motion.div>
        );
      case 'breath':
        return (
          <motion.div
            className="w-32 h-32 rounded-full border border-emerald-400/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        );
      case 'heartbeat':
        return (
          <motion.div
            className="w-12 h-12 rounded-full bg-emerald-500/20 blur-md"
            animate={{ scale: [1, 1.2, 1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.1, 0.2, 0.4, 1] }}
          />
        );
      case 'silence':
        return (
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-400/50 blur-[1px]"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
        );
    }
  };

  const getText = () => {
    switch (stage) {
      case 'intro': return '';
      case 'voice': return 'VOICE (External)';
      case 'breath': return 'BREATH (Internal)';
      case 'heartbeat': return 'HEARTBEAT (Involuntary)';
      case 'silence': return 'SILENCE (The Unstruck)';
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020604]">
      
      {!hasStarted ? (
        <div className="text-center z-10">
          <motion.button
            onClick={() => {
              setHasStarted(true);
              setStage('voice');
            }}
            className="text-4xl font-sans tracking-[0.5em] text-emerald-400/80 hover:text-emerald-300 uppercase transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LISTEN
          </motion.button>
          <p className="mt-8 font-sans text-xs tracking-[0.3em] text-emerald-100/30 uppercase">
            Enter the quiet chamber
          </p>
        </div>
      ) : (
        <div className="text-center z-10 w-full max-w-2xl flex flex-col items-center justify-center min-h-[400px]">
          
          <div className="h-64 flex items-center justify-center relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {getVisualizer()}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.h3
              key={stage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl font-sans tracking-[0.3em] text-emerald-400/80 uppercase mt-12"
            >
              {getText()}
            </motion.h3>
          </AnimatePresence>

          {stage === 'silence' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 2 }}
              className="mt-12 font-serif text-xl italic text-white/50 leading-relaxed"
            >
              «Can you hear the space where the sound comes from?»
            </motion.p>
          )}
          
        </div>
      )}

      {/* Very faint expanding background circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          className="w-[100vw] h-[100vw] rounded-full border border-emerald-900/10"
          animate={{ scale: [0, 2], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
        <motion.div
          className="w-[100vw] h-[100vw] rounded-full border border-emerald-900/10 absolute"
          animate={{ scale: [0, 2], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear", delay: 7.5 }}
        />
      </div>

    </section>
  );
};
