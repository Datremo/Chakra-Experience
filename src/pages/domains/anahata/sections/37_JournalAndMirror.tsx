import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';

export const JournalAndMirrorSection: React.FC = () => {
  const data = useAnahataData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.journalPrompts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.journalPrompts.length) % data.journalPrompts.length);
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      {/* Glassy Mirror Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-emerald-900/10 to-teal-900/10 blur-3xl opacity-50" />
      </div>

      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Reflection</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">The Inner Mirror</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          Take a moment. Read the prompt. Notice the immediate, unfiltered reaction in your chest before your mind creates a story.
        </p>
      </div>

      <div className="relative w-full max-w-2xl h-[300px] flex items-center justify-center z-10">
        
        {/* Navigation Left */}
        <button onClick={handlePrev} className="absolute left-0 p-4 text-emerald-500/50 hover:text-emerald-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* Prompt Container */}
        <div className="w-full max-w-lg text-center px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(5px)' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-emerald-100/90 leading-relaxed mb-8">
                "{data.journalPrompts[currentIndex]}"
              </h3>
              <p className="font-sans text-[10px] tracking-widest text-emerald-500/40 uppercase">
                Prompt {currentIndex + 1} of {data.journalPrompts.length}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Right */}
        <button onClick={handleNext} className="absolute right-0 p-4 text-emerald-500/50 hover:text-emerald-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

      </div>

    </section>
  );
};
