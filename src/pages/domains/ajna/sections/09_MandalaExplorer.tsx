import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MandalaExplorerSection: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { label: "The Two Petals", desc: "The two petals represent the duality of human experience—sun and moon, logic and intuition, pingala and ida." },
    { label: "Ha", desc: "The syllable 'Ha' on the right petal, associated with Shiva/Sun." },
    { label: "Kṣa", desc: "The syllable 'Kṣa' on the left petal, associated with Shakti/Moon." },
    { label: "The Central Space", desc: "The moon-white pericarp. The seat of the mind (Manas), prior to physical manifestation." },
    { label: "Hākinī", desc: "The six-faced, white-skinned deity holding a drum, skull, mala, and book, gesturing granting boons and dispelling fear." }
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-20 mb-8 md:mb-12"
      >
        <h2 className="font-sans text-xs md:text-sm tracking-[0.4em] text-indigo-400/80 uppercase mb-4 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">Anatomy</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90">The Classical Lotus</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Reconstruct the Ṣaṭ-Cakra-Nirūpaṇa visualization.
        </p>
      </motion.div>

      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center z-10 mb-8 md:mb-12">
        
        {/* Step 1: Petals */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              className="absolute flex items-center justify-center gap-4 md:gap-16 drop-shadow-[0_0_30px_rgba(79,70,229,0.4)]"
            >
              {/* Left Petal */}
              <div className="w-32 h-32 md:w-48 md:h-48 border border-indigo-300/30 rounded-full bg-indigo-900/20 backdrop-blur-md -mr-16 md:-mr-24 shadow-[inset_0_0_20px_rgba(129,140,248,0.2)]" style={{ borderRadius: '100% 0 100% 0', transform: 'rotate(45deg)' }} />
              {/* Right Petal */}
              <div className="w-32 h-32 md:w-48 md:h-48 border border-indigo-300/30 rounded-full bg-indigo-900/20 backdrop-blur-md -ml-16 md:-ml-24 shadow-[inset_0_0_20px_rgba(129,140,248,0.2)]" style={{ borderRadius: '100% 0 100% 0', transform: 'rotate(45deg)' }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2 & 3: Letters */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-12 md:right-24 text-4xl md:text-5xl font-serif text-indigo-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              ह
            </motion.div>
          )}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute left-12 md:left-24 text-4xl md:text-5xl font-serif text-indigo-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              क्ष
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: Central Space */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-[0_0_60px_rgba(255,255,255,0.9),inset_0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center overflow-hidden"
            >
              {/* Step 5: Hakini (Mystical majestic representation) */}
              <AnimatePresence>
                {step >= 5 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Glowing Aura Rings */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div 
                        key={`aura-${i}`}
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                        className="absolute w-full h-full border border-indigo-200/50 rounded-full mix-blend-multiply"
                        style={{ borderStyle: i % 2 === 0 ? 'dashed' : 'solid', transform: `scale(${0.7 + i * 0.15})` }}
                      />
                    ))}
                    {/* Geometric Faces (6 faces of Hakini) */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div 
                        key={`face-${i}`}
                        className="absolute w-16 h-16 md:w-24 md:h-24 border border-violet-300/40 rounded-full mix-blend-multiply"
                        style={{ transform: `rotate(${i * 60}deg) translateY(12px)` }}
                        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                    <div className="absolute text-5xl md:text-6xl font-serif text-indigo-950 z-10 drop-shadow-md">ॐ</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Placeholder if empty */}
        {step === 0 && (
          <div className="absolute w-24 h-24 md:w-32 md:h-32 border border-dashed border-indigo-300/20 rounded-full animate-[spin_10s_linear_infinite] opacity-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-indigo-400/50 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
          </div>
        )}

      </div>

      <div className="text-center z-10 h-32 max-w-xl px-6 flex flex-col justify-center">
        {step > 0 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl md:text-2xl font-serif text-indigo-200 mb-2">{steps[step - 1].label}</h3>
            <p className="text-white/70 font-light text-sm md:text-base">{steps[step - 1].desc}</p>
          </motion.div>
        )}
      </div>

      <div className="z-10 mt-8">
        {step < steps.length ? (
          <button 
            onClick={() => setStep(s => s + 1)}
            className="px-8 py-3 rounded-full bg-indigo-600/20 border border-indigo-400/50 text-indigo-200 hover:bg-indigo-500/40 hover:text-white font-sans text-xs tracking-[0.2em] uppercase transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]"
          >
            Reveal Next
          </button>
        ) : (
          <button 
            onClick={() => setStep(0)}
            className="px-8 py-3 rounded-full border border-white/20 text-white/50 hover:text-white font-sans text-xs tracking-widest uppercase transition-all"
          >
            Reset
          </button>
        )}
      </div>

    </section>
  );
};
