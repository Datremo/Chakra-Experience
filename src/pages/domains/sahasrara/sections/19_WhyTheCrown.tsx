import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PERSPECTIVES = [
  {
    id: 'metaphor',
    title: 'The Spatial Metaphor',
    content: 'In almost every human culture, "up" represents the divine, the sky, the heavens, and higher consciousness. The crown is simply the highest point of the human body, pointing toward the infinite.'
  },
  {
    id: 'anatomy',
    title: 'The Brain & Nervous System',
    content: 'The brain is the physical seat of consciousness, sensory processing, and cognition. It is natural that ancient meditators mapped the ultimate center of awareness to the head.'
  },
  {
    id: 'modern',
    title: 'The Pineal Gland',
    content: 'Modern New Age movements often equate the Crown (or Third Eye) with the pineal gland. While popular, there is no historical evidence that ancient yogis knew of the pineal gland or its function in producing melatonin/DMT.'
  },
  {
    id: 'tantric',
    title: 'The Exit Door (Brahmarandhra)',
    content: 'Tantric texts describe a subtle aperture at the top of the head (the Brahmarandhra). It is said that if consciousness exits the body through this door at the moment of death, the soul achieves liberation (Mokṣa) instead of rebirth.'
  }
];

export const WhyTheCrownSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-transparent overflow-hidden">
      
      <div className="text-center mb-16 z-20 px-6 pointer-events-none">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 19</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-6 drop-shadow-[0_0_20px_white]">Why The Crown?</h3>
        {!activeId && (
          <p className="text-white/60 font-sans tracking-widest text-xs uppercase animate-pulse">
            Select a sphere
          </p>
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Luminous Center */}
        <div className="w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center z-10">
        
        <AnimatePresence mode="wait">
          {!activeId ? (
            <motion.div 
              key="orbs"
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {PERSPECTIVES.map((p, idx) => {
                const angle = (idx / PERSPECTIVES.length) * Math.PI * 2;
                const radius = 250;
                // Calculate position around the circle
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, x, y }}
                    transition={{ type: 'spring', damping: 15, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    className="absolute cursor-pointer"
                    onClick={() => setActiveId(p.id)}
                  >
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(0,0,0,0.8))] shadow-[0_10px_30px_rgba(255,255,255,0.2)] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all">
                        {/* Shimmer */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="mt-4 font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
                        {p.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              key="expanded"
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              {PERSPECTIVES.map(p => p.id === activeId && (
                <div key={p.id} className="max-w-3xl text-center flex flex-col items-center">
                  <div className="w-48 h-48 mb-12 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),rgba(255,255,255,0))] blur-xl opacity-30 absolute pointer-events-none" />
                  
                  <h4 className="text-4xl md:text-7xl font-serif text-white mb-8 tracking-wide drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] z-10">
                    {p.title}
                  </h4>
                  <p className="text-white/80 font-light leading-loose text-xl md:text-2xl z-10 max-w-2xl bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {p.content}
                  </p>

                  <button 
                    onClick={() => setActiveId(null)}
                    className="mt-16 px-8 py-4 border border-white/20 rounded-full text-xs font-sans tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] z-10"
                  >
                    Return to Orbit
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
