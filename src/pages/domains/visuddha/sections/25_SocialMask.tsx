import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SocialMaskSection: React.FC = () => {
  const [layersRemoved, setLayersRemoved] = useState(0);

  const layers = [
    { name: "Professional Mask", text: "Best regards. Let's touch base.", color: "bg-slate-800", borderColor: "border-slate-600" },
    { name: "Polite Mask", text: "I'm doing fine, thanks. You?", color: "bg-blue-900", borderColor: "border-blue-600" },
    { name: "People Pleaser", text: "Whatever you want to do is fine with me.", color: "bg-indigo-900", borderColor: "border-indigo-600" },
    { name: "The Core", text: "I am exhausted and need a day to myself.", color: "bg-cyan-500", borderColor: "border-cyan-300" }
  ];

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Vulnerability</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Social Mask</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          We layer our expression to protect our core. Click to peel away the layers.
        </p>
      </div>

      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center z-10 cursor-pointer" onClick={() => setLayersRemoved(prev => Math.min(prev + 1, layers.length - 1))}>
        
        <AnimatePresence>
          {layers.map((layer, index) => {
            // Only render if it hasn't been removed yet
            if (index < layersRemoved) return null;

            const isCore = index === layers.length - 1;
            const isTop = index === layersRemoved;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1 - (index * 0.05),
                  zIndex: 50 - index
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 1.5,
                  filter: 'blur(10px)',
                  transition: { duration: 0.5 }
                }}
                className={`absolute inset-0 rounded-full border-4 flex flex-col items-center justify-center text-center p-8 transition-colors duration-500 ${
                  isTop ? `${layer.color} ${layer.borderColor} shadow-[0_0_30px_rgba(0,0,0,0.5)]` : 'bg-black border-white/5'
                } ${isCore ? 'shadow-[0_0_50px_rgba(6,182,212,0.6)] border-none' : ''}`}
              >
                <div className={`font-sans text-[10px] tracking-widest uppercase mb-4 ${isCore ? 'text-cyan-950' : 'text-white/50'}`}>
                  {layer.name}
                </div>
                <div className={`font-serif text-xl md:text-2xl ${isCore ? 'text-black' : 'text-white'}`}>
                  "{layer.text}"
                </div>
                
                {isTop && !isCore && (
                  <div className="absolute bottom-8 text-[9px] font-sans tracking-[0.2em] text-white/30 uppercase animate-pulse">
                    Click to remove
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>

      {layersRemoved === layers.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center z-10"
        >
          <p className="text-cyan-200 font-light max-w-sm leading-relaxed mb-6">
            The core truth is often the most simple, and the most terrifying to speak.
          </p>
          <button 
            onClick={(e) => { e.stopPropagation(); setLayersRemoved(0); }}
            className="px-6 py-2 border border-cyan-500/30 rounded-full text-[10px] font-sans tracking-[0.2em] text-cyan-400/50 hover:text-cyan-400 hover:border-cyan-400 transition-colors uppercase"
          >
            Rebuild Masks
          </button>
        </motion.div>
      )}

    </section>
  );
};
