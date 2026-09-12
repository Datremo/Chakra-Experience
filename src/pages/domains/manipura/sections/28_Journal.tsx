import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const JournalSection: React.FC = () => {
  const [text, setText] = useState('');
  const [isBurning, setIsBurning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [prompt, setPrompt] = useState("What are you currently trying to force, rather than forge?");

  useEffect(() => {
    const savedTheme = localStorage.getItem('manipura_core_theme');
    if (savedTheme === 'boundaries') setPrompt("Where do you need to draw a cleaner line today?");
    if (savedTheme === 'burnout') setPrompt("What fuel are you burning right now that you cannot sustain?");
    if (savedTheme === 'action') setPrompt("What is one clear, decisive action you have been delaying?");
  }, []);

  const handleBurn = () => {
    if (!text.trim()) return;
    setIsBurning(true);
    
    // Simulate burning time
    setTimeout(() => {
      setIsBurning(false);
      setIsDone(true);
    }, 2500);
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#020101] relative flex items-center justify-center overflow-hidden">
      
      {/* Background glow when burning */}
      <AnimatePresence>
        {isBurning && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.2),transparent_60%)] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Reflection</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">The Offering</h1>
          <p className="text-xl text-amber-100/60 font-light max-w-xl mx-auto italic">
            In the Vedic tradition, Agni is the messenger. What is put into the fire is transformed and carried upward.
          </p>
        </div>

        <div className="w-full bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div 
                key="writing"
                className="relative"
                animate={isBurning ? { filter: 'blur(8px)', scale: 0.95, opacity: 0 } : {}}
                transition={{ duration: 2 }}
              >
                <h3 className="text-2xl font-serif text-amber-300 mb-8 text-center">{prompt}</h3>
                
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={isBurning}
                  placeholder="Write freely. This will not be saved."
                  className="w-full h-48 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/50 rounded-xl p-6 text-amber-100 font-serif text-lg leading-relaxed focus:outline-none focus:border-amber-500/50 resize-none placeholder:text-amber-900/50"
                />

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleBurn}
                    disabled={!text.trim() || isBurning}
                    className={`px-8 py-4 rounded-full font-sans tracking-[0.2em] text-sm uppercase transition-all duration-300
                      ${!text.trim() 
                        ? 'opacity-50 border border-amber-900/50 text-amber-900 cursor-not-allowed' 
                        : 'bg-amber-900/20 border border-amber-500 text-amber-400 hover:bg-red-900/40 hover:border-red-500 hover:text-red-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]'}
                    `}
                  >
                    Commit to the Fire
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-3xl font-serif text-amber-200 mb-4">Consumed</h3>
                <p className="text-amber-100/60 font-light italic">The material has been transformed.</p>
                
                <button 
                  onClick={() => { setText(''); setIsDone(false); }}
                  className="mt-12 text-xs font-sans tracking-widest text-amber-500/50 hover:text-amber-400 uppercase underline underline-offset-4"
                >
                  Write Another Offering
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Burning Animation Overlay */}
          <AnimatePresence>
            {isBurning && (
              <motion.div 
                initial={{ opacity: 0, bottom: -100 }}
                animate={{ opacity: 1, bottom: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none flex items-end justify-center"
              >
                {/* CSS Fire effect over the text area */}
                <div className="w-full h-full bg-gradient-to-t from-red-600 via-orange-500 to-transparent mix-blend-color-dodge opacity-80" />
                <div className="absolute bottom-0 w-full h-32 bg-red-500 blur-xl animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
