import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeartLanguageSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({
    boundary: '',
    emotion: '',
    need: ''
  });

  const boundaryOptions = [
    "I cannot continue this conversation",
    "I need some space right now",
    "I am not available for this",
    "I love you, but I must say no"
  ];

  const emotionOptions = [
    "because I am feeling overwhelmed.",
    "because I feel disrespected.",
    "because my energy is depleted.",
    "because I am feeling defensive."
  ];

  const needOptions = [
    "I will reconnect with you tomorrow.",
    "Please respect my distance.",
    "Let's talk when we are both calm.",
    "I need to take care of myself first."
  ];

  const handleSelect = (key: 'boundary' | 'emotion' | 'need', value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setSelections({ boundary: '', emotion: '', need: '' });
    setStep(0);
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010302]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Language</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Speaking from the Heart</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          The open heart is not passive. It speaks its truth with clarity and firmness, without attacking the other. Construct a boundary statement.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-emerald-950/10 border border-emerald-900/30 rounded-3xl p-8 md:p-12 z-10 backdrop-blur-md">
        
        {/* The Output Sentence */}
        <div className="min-h-[100px] flex items-center justify-center mb-12 border-b border-emerald-900/30 pb-12">
          <p className="text-2xl md:text-3xl font-serif text-emerald-100 leading-relaxed text-center">
            {selections.boundary && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white">{selections.boundary} </motion.span>}
            {selections.emotion && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-300">{selections.emotion} </motion.span>}
            {selections.need && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-teal-400">{selections.need}</motion.span>}
            {!selections.boundary && <span className="text-white/20 italic">Select a boundary...</span>}
          </p>
        </div>

        {/* The Options */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                <h3 className="text-xs font-sans tracking-widest uppercase text-white/40 mb-2">1. Set the boundary</h3>
                {boundaryOptions.map(opt => (
                  <button key={opt} onClick={() => handleSelect('boundary', opt)} className="text-left px-6 py-4 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-900/20 text-white/70 transition-all">
                    {opt}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                <h3 className="text-xs font-sans tracking-widest uppercase text-emerald-300/60 mb-2">2. Own your experience (without blaming)</h3>
                {emotionOptions.map(opt => (
                  <button key={opt} onClick={() => handleSelect('emotion', opt)} className="text-left px-6 py-4 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-900/20 text-white/70 transition-all">
                    {opt}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                <h3 className="text-xs font-sans tracking-widest uppercase text-teal-400/60 mb-2">3. State the path forward</h3>
                {needOptions.map(opt => (
                  <button key={opt} onClick={() => handleSelect('need', opt)} className="text-left px-6 py-4 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-900/20 text-white/70 transition-all">
                    {opt}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center h-full pt-8">
                <p className="text-emerald-400 font-sans tracking-widest uppercase text-sm mb-6">Statement Complete</p>
                <button onClick={reset} className="px-6 py-2 rounded-full border border-emerald-900/50 text-emerald-100/50 text-xs tracking-widest uppercase hover:bg-emerald-900/30 hover:text-emerald-100 transition-all">
                  Draft Another
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
