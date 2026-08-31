import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DreamTempleSection: React.FC = () => {
  const [dreamInput, setDreamInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(false);

  const handleAnalyze = () => {
    if (!dreamInput.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysis(true);
    }, 2000);
  };

  const reset = () => {
    setDreamInput('');
    setAnalysis(false);
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Subconscious</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Dream Temple</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          The ancients believed dreams were messages from the gods. Modern psychology views them as the brain sorting data. Ājñā views them as symbolic mirrors.
        </p>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        
        <AnimatePresence mode="wait">
          {!analysis ? (
            <motion.div 
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center w-full"
            >
              <textarea 
                value={dreamInput}
                onChange={(e) => setDreamInput(e.target.value)}
                placeholder="Briefly describe a recurring or recent dream..."
                className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80 font-light focus:outline-none focus:border-indigo-500/50 resize-none mb-8"
              />
              
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !dreamInput.trim()}
                className="px-8 py-4 rounded-full border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 font-sans text-xs tracking-widest uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Processing Symbols...' : 'Examine the Mirror'}
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="analysis"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <h3 className="font-sans text-xs tracking-widest text-indigo-400 uppercase mb-8 text-center">Three Ways to See</h3>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">1. The Literal Translation</h4>
                  <p className="text-white/60 font-light text-sm">Your brain is defragmenting. You recently experienced or thought about elements of this dream, and your mind is simply filing away raw data while you sleep.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">2. The Emotional Metaphor</h4>
                  <p className="text-white/60 font-light text-sm">Strip away the literal objects (the house, the monster, the falling). What was the core emotion? Fear? Urgency? Relief? That emotion is real and pointing to something unresolved in your waking life.</p>
                </div>

                <div>
                  <h4 className="text-lg font-serif text-white mb-2">3. The Jungian Shadow</h4>
                  <p className="text-white/60 font-light text-sm">Every character in the dream is a fractured piece of yourself. The villain chasing you is not a prophecy of danger; it is a neglected, angry part of your own psyche demanding integration.</p>
                </div>
              </div>

              <div className="text-center border-t border-white/10 pt-8 mt-8">
                <p className="text-white/80 italic font-serif text-lg mb-8">
                  "Dreams do not predict the future. They reveal the present."
                </p>
                <button 
                  onClick={reset}
                  className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all"
                >
                  Enter Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
