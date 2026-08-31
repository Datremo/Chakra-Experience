import React from 'react';
import { motion } from 'framer-motion';

export const LoveIsNotWarmSection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="max-w-4xl text-center z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-8">The Fierce Heart</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-12">Love is Not Always Warm</h1>
        
        <p className="text-xl md:text-2xl font-serif text-white/70 font-light leading-relaxed mb-16 italic">
          There is a pervasive myth that an open heart is always sweet, accommodating, and smiling. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-emerald-900/30 rounded-2xl bg-emerald-950/10 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-sans text-emerald-400 tracking-widest text-xs uppercase mb-4">The "No"</h3>
            <p className="font-serif text-white/60 text-sm leading-relaxed">
              Saying "no" to protect your energy or someone else's well-being is an act of profound love. It is the boundary that allows the heart to remain safe.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-emerald-900/30 rounded-2xl bg-emerald-950/10 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-sans text-emerald-400 tracking-widest text-xs uppercase mb-4">Fierce Anger</h3>
            <p className="font-serif text-white/60 text-sm leading-relaxed">
              Anger in defense of the vulnerable, or in response to injustice, is the protective fire of the heart. Love does not passively accept harm.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 border border-emerald-900/30 rounded-2xl bg-emerald-950/10 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-sans text-emerald-400 tracking-widest text-xs uppercase mb-4">Distance</h3>
            <p className="font-serif text-white/60 text-sm leading-relaxed">
              Walking away from a toxic dynamic is an act of self-love. You can love someone deeply and still recognize that you cannot be near them.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
