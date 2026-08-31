import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HakiniRevealSection: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000] overflow-hidden">
      
      <div className="text-center z-20 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Deity</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Hākinī</h1>
      </div>

      <div className="relative w-full max-w-lg aspect-square flex flex-col items-center justify-center z-10 mb-8 cursor-pointer group" onClick={() => setRevealed(true)}>
        
        {/* Subtle background pulse */}
        <div className="absolute inset-0 bg-indigo-900/10 rounded-full blur-3xl group-hover:bg-indigo-800/20 transition-colors duration-1000" />

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="w-2 h-2 bg-indigo-300 rounded-full shadow-[0_0_15px_rgba(165,180,252,0.8)] animate-pulse" />
              </div>
              <p className="text-white/30 font-sans text-xs tracking-[0.3em] uppercase">
                Approach the center
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              
              {/* Abstract Hakini Representation */}
              <div className="relative w-64 h-64">
                {/* 6 Faces (abstracted as overlapping circles/halos) */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 + 0.5, duration: 2 }}
                    className="absolute inset-0 border-[0.5px] border-white/20 rounded-full mix-blend-screen"
                    style={{ 
                      transform: `rotate(${i * 60}deg) translateX(${i % 2 === 0 ? '10px' : '-10px'})`,
                    }}
                  />
                ))}

                {/* Central Body/Aura */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 2 }}
                  className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                >
                  <div className="text-4xl font-serif text-white/90">ह</div>
                </motion.div>

                {/* The 6 Arms (abstracted as radiating points/items) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 2.5, duration: 2 }}
                  className="absolute inset-[-40px] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[8px] text-white/50">D</div> {/* Drum */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[8px] text-white/50">S</div> {/* Skull */}
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[8px] text-white/50">B</div> {/* Book */}
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[8px] text-white/50">M</div> {/* Mala */}
                </motion.div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-64 max-w-2xl text-center px-6 z-20">
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <h3 className="text-2xl font-serif text-white mb-6">The Six-Faced Goddess</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                In the Ṣaṭ-Cakra-Nirūpaṇa, Hākinī resides in the white lotus of Ājñā. She has six faces (representing omniscience or the six faculties of the mind), and six arms holding a drum, a skull, a mala, a book, and forming the mudras of granting boons and dispelling fear.
              </p>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left">
                <span className="text-[10px] font-sans tracking-widest text-indigo-400 uppercase mb-1 block">Context</span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  She is not a generic "goddess of intuition." She is a highly specific esoteric deity representing the mastery of the mind (Manas) prior to dissolution in the crown. Modern Third Eye culture often strips away this rich iconography in favor of simplified psychology.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
