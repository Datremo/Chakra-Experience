import React from 'react';
import { motion } from 'framer-motion';

export const InnerSwanSection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Witness</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-8">Haṃsa / Jīvātman</h1>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center mb-16 z-10">
        <motion.div 
          className="absolute inset-0 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* The Steady Flame */}
        <motion.div
          className="w-16 h-16 rotate-45 bg-gradient-to-tr from-amber-400 to-yellow-100 shadow-[0_0_40px_#fef3c7]"
          style={{ borderRadius: '50% 0 50% 50%' }}
        />
      </div>

      <div className="max-w-3xl text-center z-10">
        <p className="text-xl md:text-3xl font-serif text-white/80 font-light leading-relaxed mb-8 italic">
          "Like the steady flame of a lamp in a windless place."
        </p>

        <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          Below the lotus, traditional texts describe the Haṃsa (the swan), representing the individual soul (Jīvātman). It is the untouched witness residing in the deepest chamber of the heart, quiet and undisturbed by the winds of emotion.
        </p>
      </div>

    </section>
  );
};
