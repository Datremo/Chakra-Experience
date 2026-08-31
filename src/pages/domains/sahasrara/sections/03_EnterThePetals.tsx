import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SANSKRIT_LETTERS = [
  "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ए", "ऐ", "ओ", "औ", "अं", "अः",
  "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण",
  "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म",
  "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ"
];

export const EnterThePetalsSection: React.FC = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const handleInteraction = (letter: string) => {
    setActiveLetter(letter);
    // In a real implementation, we would play a subtle tone here using the Web Audio API
  };

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center overflow-hidden bg-[#0b001a] select-none">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-24 opacity-80">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4">World 03</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white tracking-widest">Enter the Petals</h3>
        </div>

        {/* Petal Field */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          {SANSKRIT_LETTERS.map((letter, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, color: "#fff", textShadow: "0 0 20px rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleInteraction(letter)}
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-serif text-white/40 cursor-pointer transition-colors duration-300 rounded-full border border-white/5 hover:bg-purple-500/10"
            >
              {letter}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b001a]/90 backdrop-blur-md p-6"
            onClick={() => setActiveLetter(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="max-w-md w-full flex flex-col items-center text-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-[12rem] font-serif text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] leading-none mb-12">
                {activeLetter}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-sans tracking-[0.3em] text-white/40 uppercase mb-2">TRADITION</h4>
                  <p className="text-white/80 font-light">Tantric/Yogic (Ṣaṭ-Cakra-Nirūpaṇa)</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-sans tracking-[0.3em] text-white/40 uppercase mb-2">SYMBOLIC READING</h4>
                  <p className="text-white/80 font-light leading-relaxed">
                    The 50 letters of the Sanskrit alphabet are repeated 20 times to form the 1000 petals. It symbolizes the totality of all sound, language, and conceptual thought resting in the highest center.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-sans tracking-[0.3em] text-white/40 uppercase mb-2">SOURCE</h4>
                  <p className="text-white/60 font-serif italic text-sm">
                    "Its petals are formed by the fifty letters of the alphabet, which are here repeated twenty times." (v. 40)
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setActiveLetter(null)}
                className="mt-16 text-xs font-sans tracking-[0.3em] text-white/50 uppercase hover:text-white transition-colors"
              >
                [ CLOSE ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
