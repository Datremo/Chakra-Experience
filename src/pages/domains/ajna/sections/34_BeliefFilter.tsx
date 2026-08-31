import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BeliefFilterSection: React.FC = () => {
  const [filter, setFilter] = useState<'neutral' | 'fear' | 'desire'>('neutral');

  const sceneText = {
    neutral: "Two people are whispering in the corner of the office.",
    fear: "They are definitely talking about me. I'm going to get fired.",
    desire: "They are planning a surprise party for my birthday."
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103] overflow-hidden">
      
      <div className="text-center z-20 mb-12">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Projection</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Lens of Belief</h1>
      </div>

      <div className="w-full max-w-3xl relative z-10 flex flex-col items-center">
        
        {/* The Scene */}
        <div className="w-full aspect-video md:h-96 relative border border-white/10 rounded-3xl overflow-hidden mb-12 flex items-center justify-center bg-[#050505]">
          
          {/* Neutral Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-32 h-32 flex gap-4">
              <div className="w-12 h-24 bg-white/20 rounded-full" />
              <div className="w-12 h-24 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Filter Overlays */}
          <motion.div 
            className="absolute inset-0 bg-red-900/40 mix-blend-color flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: filter === 'fear' ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black" />
          </motion.div>

          <motion.div 
            className="absolute inset-0 bg-pink-500/30 mix-blend-color flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: filter === 'desire' ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
             <div className="absolute inset-0 blur-sm bg-white/10" />
          </motion.div>

          {/* Scene Text */}
          <div className="z-10 text-center px-8">
            <p className={`text-2xl font-serif transition-colors duration-500 ${
              filter === 'fear' ? 'text-red-400' : 
              filter === 'desire' ? 'text-pink-300' : 
              'text-white'
            }`}>
              {sceneText[filter]}
            </p>
          </div>

        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button 
            onClick={() => setFilter('fear')}
            className={`px-6 py-2 rounded-full border text-xs tracking-widest uppercase transition-all ${filter === 'fear' ? 'border-red-500 bg-red-500/20 text-red-300' : 'border-white/10 text-white/40 hover:text-white'}`}
          >
            Lens of Fear
          </button>
          <button 
            onClick={() => setFilter('neutral')}
            className={`px-6 py-2 rounded-full border text-xs tracking-widest uppercase transition-all ${filter === 'neutral' ? 'border-white bg-white text-black' : 'border-white/10 text-white/40 hover:text-white'}`}
          >
            Clear Sight
          </button>
          <button 
            onClick={() => setFilter('desire')}
            className={`px-6 py-2 rounded-full border text-xs tracking-widest uppercase transition-all ${filter === 'desire' ? 'border-pink-500 bg-pink-500/20 text-pink-300' : 'border-white/10 text-white/40 hover:text-white'}`}
          >
            Lens of Desire
          </button>
        </div>

      </div>

    </section>
  );
};
