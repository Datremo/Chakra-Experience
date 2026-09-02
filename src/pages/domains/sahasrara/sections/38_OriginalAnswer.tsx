import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const OriginalAnswerSection: React.FC = () => {
  const [step, setStep] = useState(0); // 0: input 1, 1: input 2, 2: shattered
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');

  const handleNext = () => {
    if (step === 0 && answer1.trim() !== '') setStep(1);
    else if (step === 1 && answer2.trim() !== '') setStep(2);
  };

  return (
    <section className="h-screen w-full relative bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 38</h2>
      </div>

      <div className="relative w-full max-w-3xl h-full flex flex-col items-center justify-center px-6">
        
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center w-full"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white tracking-widest text-center mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                Who were you when you started?
              </h3>
              <input
                type="text"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                className="w-full bg-transparent border-b-2 border-purple-400/40 text-white text-center text-xl md:text-3xl p-4 outline-none focus:border-purple-300 transition-colors placeholder:text-white/30"
                placeholder="Type your answer..."
              />
              <button
                onClick={handleNext}
                disabled={!answer1.trim()}
                className="mt-8 px-8 py-3 rounded-full bg-purple-600/80 hover:bg-purple-500 disabled:opacity-30 disabled:pointer-events-none text-white font-sans text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center w-full"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white tracking-widest text-center mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                Who are you now?
              </h3>
              <input
                type="text"
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                className="w-full bg-transparent border-b-2 border-purple-400/40 text-white text-center text-xl md:text-3xl p-4 outline-none focus:border-purple-300 transition-colors placeholder:text-white/30"
                placeholder="Type your answer..."
              />
              <button
                onClick={handleNext}
                disabled={!answer2.trim()}
                className="mt-8 px-8 py-3 rounded-full bg-purple-600/80 hover:bg-purple-500 disabled:opacity-30 disabled:pointer-events-none text-white font-sans text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
              >
                Reveal Truth
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              className="flex items-center justify-center relative w-full h-full"
            >
              <motion.div
                initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                animate={{ opacity: 0, filter: "blur(20px)", scale: 2 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="absolute text-5xl md:text-8xl font-serif text-white/50 tracking-tighter"
              >
                {answer1}
              </motion.div>
              <motion.div
                initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                animate={{ opacity: 0, filter: "blur(20px)", scale: 2 }}
                transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                className="absolute text-5xl md:text-8xl font-serif text-white/50 tracking-tighter"
              >
                {answer2}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 2 }}
                className="text-4xl md:text-6xl font-serif text-white tracking-widest text-center z-10 drop-shadow-[0_0_20px_white]"
              >
                THEY ARE BOTH ILLUSIONS.
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
