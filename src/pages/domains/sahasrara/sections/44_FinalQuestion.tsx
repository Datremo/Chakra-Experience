import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FinalQuestionSection: React.FC = () => {
  const [answered, setAnswered] = useState(false);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 44</h2>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              exit={{ opacity: 0, y: -50 }}
              className="flex flex-col items-center text-center w-full"
            >
              <h3 className="text-3xl md:text-5xl font-serif text-white tracking-widest mb-16 drop-shadow-[0_0_20px_white]">
                Are you ready to return to the world?
              </h3>
              
              <div className="flex gap-8">
                <button
                  onClick={() => setAnswered(true)}
                  className="px-8 py-4 bg-white/10 border border-white/30 text-white font-sans text-sm tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all hover:shadow-[0_0_30px_white]"
                >
                  Yes
                </button>
                <button
                  onClick={() => setAnswered(true)}
                  className="px-8 py-4 bg-transparent border border-white/10 text-white/50 font-sans text-sm tracking-[0.3em] uppercase rounded-full hover:text-white hover:border-white/50 transition-all"
                >
                  No
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center w-full"
            >
              <h3 className="text-4xl md:text-6xl font-serif text-purple-300 tracking-widest mb-8 drop-shadow-[0_0_20px_rgba(216,180,254,0.5)]">
                It doesn't matter.
              </h3>
              <p className="font-serif italic text-xl md:text-3xl text-white/80 max-w-2xl leading-relaxed">
                You never left.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
