import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntuitionVsAssumptionSection: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [feedback, setFeedback] = useState<'intuition' | 'assumption' | null>(null);

  const scenarios = [
    {
      text: "You meet someone new and instantly feel a knot in your stomach. You decide they are a bad person.",
      isIntuition: false,
      explanation: "Often, an instant negative physical reaction to a stranger is triggered by a micro-expression or trait that reminds your subconscious of someone who hurt you in the past. It's a trauma response, not necessarily a psychic read."
    },
    {
      text: "You are driving your normal route to work, but you suddenly get a quiet, unemotional urge to take the next exit. You do, and later learn there was a massive pileup on your usual route.",
      isIntuition: true,
      explanation: "True intuition is often characterized by a lack of emotional charge. It doesn't scream in panic; it offers a gentle, neutral redirection."
    },
    {
      text: "Your partner is looking at their phone and smiling. You immediately 'know' they are texting someone else.",
      isIntuition: false,
      explanation: "This is an assumption fueled by insecurity or fear. The mind hates uncertainty, so it invents a story to fill the gap, creating a false sense of 'knowing'."
    }
  ];

  const handleGuess = (guessIsIntuition: boolean) => {
    if (guessIsIntuition === scenarios[currentScenario].isIntuition) {
      setFeedback('intuition'); // Used as 'correct' here
    } else {
      setFeedback('assumption'); // Used as 'incorrect' here
    }
  };

  const nextScenario = () => {
    setFeedback(null);
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(c => c + 1);
    } else {
      setCurrentScenario(0); // loop or show end state
    }
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Case Studies</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Intuition or Assumption?</h1>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        
        <AnimatePresence mode="wait">
          {feedback === null ? (
            <motion.div 
              key={`scenario-${currentScenario}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <h3 className="font-sans text-xs tracking-widest text-white/30 uppercase mb-8">Scenario {currentScenario + 1}</h3>
              <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-12">
                "{scenarios[currentScenario].text}"
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleGuess(true)}
                  className="px-8 py-4 rounded-full border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 font-sans text-xs tracking-widest uppercase transition-all"
                >
                  True Intuition
                </button>
                <button 
                  onClick={() => handleGuess(false)}
                  className="px-8 py-4 rounded-full border border-rose-500/50 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 font-sans text-xs tracking-widest uppercase transition-all"
                >
                  Assumption / Fear
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={`feedback-${currentScenario}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className={`border rounded-3xl p-8 md:p-12 text-center ${
                feedback === 'intuition' ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'
              }`}
            >
              <h3 className={`text-2xl font-serif mb-6 ${feedback === 'intuition' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {feedback === 'intuition' ? 'Correct.' : 'Not quite.'}
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-12 text-lg">
                {scenarios[currentScenario].explanation}
              </p>
              
              <button 
                onClick={nextScenario}
                className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all"
              >
                {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'Restart'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
