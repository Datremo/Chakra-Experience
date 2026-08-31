import React from 'react';
import { motion } from 'framer-motion';

export const IntegrationSection: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden px-6">
      
      {/* Intense background glow focusing upward */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-950/20 to-cyan-900/10" />

      <div className="text-center z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-sans text-xs tracking-[0.5em] text-blue-500 uppercase mb-8">Ascension</h2>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            The Space is Cleared.
          </h1>
          <p className="text-lg md:text-xl text-blue-100/70 font-light leading-relaxed mb-16">
            You have journeyed from the solid earth of Mūlādhāra, through the waters of Svādhiṣṭhāna, the fire of Maṇipūra, and the air of Anāhata. 
            <br/><br/>
            Here, in the Ākāśa of Viśuddha, you have found the empty canvas. The voice is pure. The truth is spoken.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <p className="font-sans text-sm tracking-[0.2em] text-white/50 uppercase mb-12">
            The mind now looks upward.
          </p>
          
          <button 
            onClick={onClose}
            className="group relative px-12 py-6 rounded-full border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 transition-all duration-500 overflow-hidden"
          >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="relative z-10 font-sans tracking-[0.4em] text-sm text-cyan-300 group-hover:text-white uppercase transition-colors">
              Return to Journey
            </span>
          </button>
        </motion.div>
      </div>

    </section>
  );
};
