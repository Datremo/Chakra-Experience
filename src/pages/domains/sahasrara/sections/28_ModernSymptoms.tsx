import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ModernSymptomsSection: React.FC = () => {
  const [isCalm, setIsCalm] = useState(false);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#050014]">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 28</h2>
      </div>

      <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center z-10 cursor-pointer" onClick={() => setIsCalm(!isCalm)}>
        
        {/* The Overwhelmed Mind (Blocked Crown) */}
        <AnimatePresence>
          {!isCalm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h1 className="text-5xl md:text-8xl font-serif text-white/90 tracking-tighter mb-4 text-center leading-none">
                <motion.span animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }} transition={{ duration: 0.1, repeat: Infinity }}>A</motion.span>
                <motion.span animate={{ x: [5, -5, 5], y: [5, -5, 5] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}>N</motion.span>
                <motion.span animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.1 }}>X</motion.span>
                <motion.span animate={{ x: [5, -5, 5], y: [5, -5, 5] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.15 }}>I</motion.span>
                <motion.span animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.2 }}>E</motion.span>
                <motion.span animate={{ x: [5, -5, 5], y: [5, -5, 5] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.25 }}>T</motion.span>
                <motion.span animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.3 }}>Y</motion.span>
              </h1>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen opacity-50">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: (Math.random() - 0.5) * window.innerWidth,
                      y: (Math.random() - 0.5) * window.innerHeight,
                      rotate: Math.random() * 360
                    }}
                    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, repeatType: "mirror" }}
                    className="absolute border border-white/30"
                    style={{
                      width: Math.random() * 100 + 20,
                      height: Math.random() * 100 + 20,
                    }}
                  />
                ))}
              </div>

              <div className="absolute bottom-12 text-center">
                <p className="font-sans text-xs tracking-widest uppercase text-white/50 animate-pulse border border-white/20 px-6 py-2 rounded-full">
                  Click to clear the blockage
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Calm Mind (Open Crown) */}
        <AnimatePresence>
          {isCalm && (
            <motion.div 
              initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(168,85,247,0.2)_50%,transparent_100%)] absolute pointer-events-none mix-blend-screen animate-pulse" />
              
              <h1 className="text-4xl md:text-7xl font-serif text-white tracking-widest mb-8 drop-shadow-[0_0_20px_white] z-10 text-center">
                CLARITY
              </h1>
              <p className="font-serif text-xl md:text-2xl text-purple-200/90 text-center max-w-2xl px-6 leading-relaxed z-10">
                A blocked Crown manifests as extreme mental overwhelm, dissociation, or existential dread. An open Crown manifests as deep, unshakable peace.
              </p>

              <div className="absolute bottom-12 text-center z-10">
                <p className="font-sans text-xs tracking-widest uppercase text-white/50 border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                  Click to revert
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
