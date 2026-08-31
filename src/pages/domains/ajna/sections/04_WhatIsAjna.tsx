import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatIsAjnaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simple' | 'classical' | 'modern'>('simple');

  const definitions = {
    simple: {
      title: "Simple",
      subtitle: "The Point of Perception",
      content: "Ājñā is a subtle-body energy center located in the brow region, associated with the mind, perception, and insight."
    },
    classical: {
      title: "Classical",
      subtitle: "The Seat of Manas (Mind)",
      content: "In tantric and yogic traditions (like the Ṣaṭ-Cakra-Nirūpaṇa), Ājñā is a moon-white, two-petaled lotus located between the eyebrows. It is the seat of the mind (Manas) and the deity Hākinī. It is the space where dualities begin to dissolve before reaching the crown."
    },
    modern: {
      title: "Modern",
      subtitle: "The 'Third Eye'",
      content: "In contemporary spirituality, it is widely referred to as the 'Third Eye,' deeply associated with intuition, psychic perception, and imaginative vision. These interpretations often blend Eastern concepts with Western esoteric (Theosophical) and New Age overlays."
    }
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-8 md:mb-16"
      >
        <h2 className="font-sans text-xs md:text-sm tracking-[0.4em] text-indigo-400/80 uppercase mb-4 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">Definition</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 tracking-wide">What exactly is Ājñā?</h1>
      </motion.div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
        
        {/* Navigation */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {(Object.keys(definitions) as Array<keyof typeof definitions>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-left p-4 md:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                activeTab === key ? 'bg-indigo-950/60 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'bg-black/30 border-white/10 opacity-60 hover:opacity-100 hover:border-indigo-500/50'
              }`}
            >
              <h3 className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${activeTab === key ? 'text-indigo-200 drop-shadow-[0_0_5px_rgba(129,140,248,0.8)]' : 'text-white group-hover:text-indigo-100'}`}>
                {definitions[key].title}
              </h3>
              {activeTab === key && (
                <motion.div 
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent pointer-events-none"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="w-full md:w-2/3 relative min-h-[300px] bg-black/60 backdrop-blur-md border border-indigo-300/10 rounded-3xl p-8 md:p-12 overflow-hidden flex items-start md:items-center shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-indigo-100 mb-4 drop-shadow-md">{definitions[activeTab].subtitle}</h2>
              <div className="w-16 h-px bg-gradient-to-r from-indigo-400 to-transparent mb-6 md:mb-8" />
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                {definitions[activeTab].content}
              </p>

              {activeTab === 'modern' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 p-4 md:p-6 bg-rose-950/20 border border-rose-900/30 rounded-xl"
                >
                  <p className="text-rose-300 text-xs font-sans uppercase tracking-[0.2em] mb-3">Important Distinction</p>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    These three frameworks should not be treated as identical. Classical texts do not promise psychic superpowers; they describe states of deep meditative absorption and the nature of the mind.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mystic Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.05)_0%,_transparent_50%)] pointer-events-none" />
        </div>

      </div>

    </section>
  );
};
