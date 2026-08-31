import React from 'react';
import { motion } from 'framer-motion';

export const VayuSection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      {/* Dynamic smoke / air effect in background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center overflow-hidden">
        <motion.div
          className="w-[150vw] h-[150vw] bg-[radial-gradient(ellipse_at_center,rgba(200,200,200,0.05),transparent_50%)]"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-4xl text-center z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Element</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-12">Vāyu (Air)</h1>
        
        <p className="text-xl md:text-2xl font-serif text-white/70 font-light leading-relaxed mb-8">
          The heart centre is associated with the element of air. Air is invisible, ungraspable, and constantly in motion. 
        </p>

        <p className="text-lg text-white/50 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          It represents the breath (Prāṇa) that sustains life and the subtle movement of energy and emotion. You cannot hold air tightly; if you try to grasp it, you lose it. It requires an open container.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-emerald-900/30 rounded-2xl bg-emerald-950/10 backdrop-blur-md"
          >
            <h3 className="font-sans text-emerald-400 tracking-widest text-xs uppercase mb-3">Earth (Root)</h3>
            <p className="font-serif text-white/60 text-sm">Solid, bound, heavy, structural.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 border border-emerald-500/30 rounded-2xl bg-emerald-900/20 backdrop-blur-md"
          >
            <h3 className="font-sans text-emerald-300 tracking-widest text-xs uppercase mb-3">Air (Heart)</h3>
            <p className="font-serif text-emerald-100/80 text-sm">Light, expansive, diffusing, connecting.</p>
          </motion.div>
        </div>

      </div>

    </section>
  );
};
