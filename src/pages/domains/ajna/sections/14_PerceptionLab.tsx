import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PerceptionLabSection: React.FC = () => {
  const [activeTest, setActiveTest] = useState<number | null>(null);
  const [testStage, setTestStage] = useState(0);

  const reset = () => {
    setActiveTest(null);
    setTestStage(0);
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-20 mb-12">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Laboratory</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Perception Lab</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {activeTest === null ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <button onClick={() => setActiveTest(1)} className="w-48 h-48 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 flex flex-col items-center justify-center gap-4 transition-all group">
                <div className="w-12 h-12 border-2 border-indigo-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <span className="font-sans text-xs tracking-widest text-white/70 uppercase">Figure / Ground</span>
              </button>

              <button onClick={() => setActiveTest(2)} className="w-48 h-48 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 flex flex-col items-center justify-center gap-4 transition-all group">
                <div className="w-12 h-12 border-2 border-amber-400 rotate-45 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 bg-white -rotate-45" />
                </div>
                <span className="font-sans text-xs tracking-widest text-white/70 uppercase">Relative Color</span>
              </button>
            </motion.div>
          ) : activeTest === 1 ? (
            <motion.div
              key="test1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center"
            >
              {/* Figure / Ground (Rubin Vase concept) */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white flex items-center justify-center overflow-hidden border border-white/20 mb-8 rounded-xl cursor-pointer" onClick={() => setTestStage(s => s === 0 ? 1 : 0)}>
                <motion.div 
                  className="w-32 h-full bg-black relative"
                  animate={{ scaleX: testStage === 1 ? 1.5 : 1 }}
                >
                  <div className="absolute top-10 -left-10 w-20 h-20 bg-white rounded-full" />
                  <div className="absolute top-10 -right-10 w-20 h-20 bg-white rounded-full" />
                  <div className="absolute bottom-20 -left-16 w-32 h-32 bg-white rounded-full" />
                  <div className="absolute bottom-20 -right-16 w-32 h-32 bg-white rounded-full" />
                </motion.div>
              </div>

              <div className="text-center max-w-md">
                <h3 className="text-2xl font-serif text-white mb-2">Two Faces or a Vase?</h3>
                <p className="text-white/50 font-light text-sm mb-6">
                  Click the image. You cannot see both the black faces and the white vase simultaneously. The brain must decide which is the "figure" (the object) and which is the "ground" (the background).
                </p>
                <button onClick={reset} className="text-[10px] uppercase font-sans tracking-widest text-indigo-400 hover:text-white transition-colors">Return to Lab</button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="test2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center"
            >
              {/* Relative Color */}
              <div className="relative w-full max-w-lg h-48 flex mb-8 rounded-xl overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]" onClick={() => setTestStage(s => s === 0 ? 1 : 0)}>
                
                {/* Background splits */}
                <div className="w-1/2 h-full bg-slate-800 flex items-center justify-center relative">
                  {/* Left inner square */}
                  <div className="w-16 h-16 bg-[#808080] z-10" />
                </div>
                <div className="w-1/2 h-full bg-slate-300 flex items-center justify-center relative">
                  {/* Right inner square */}
                  <div className="w-16 h-16 bg-[#808080] z-10" />
                </div>

                {/* The reveal bar */}
                <AnimatePresence>
                  {testStage === 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-16 bg-[#808080] z-20 pointer-events-none" 
                    />
                  )}
                </AnimatePresence>

              </div>

              <div className="text-center max-w-md">
                <h3 className="text-2xl font-serif text-white mb-2">Are the inner squares the same color?</h3>
                <p className="text-white/50 font-light text-sm mb-6">
                  Click the image to reveal a solid bar connecting them. They are the exact same shade of grey. Your brain alters their color based on the contrast of their surroundings.
                </p>
                <button onClick={reset} className="text-[10px] uppercase font-sans tracking-widest text-amber-400 hover:text-white transition-colors">Return to Lab</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
