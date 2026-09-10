import React from 'react';
import { motion } from 'framer-motion';

export const TheSacralBodySection: React.FC = () => {
  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#0a0502]">
      
      <div className="relative z-10 text-center max-w-5xl px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-orange-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
          >
            Anatomy
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-8 drop-shadow-xl"
          >
            The Sacral Body
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-light leading-relaxed mb-6"
          >
            In modern somatic interpretations, Svādhiṣṭhāna is associated with the <strong className="text-orange-300">pelvic bowl, hips, sacrum, lower back, kidneys, and reproductive organs</strong>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 font-light leading-relaxed"
          >
            Emotional stress can be accompanied by muscular tension or changes in how we hold the body. Gentle movement may help some people notice and work with these sensations; it is not evidence that trauma is physically stored in the hips or fascia.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative"
        >
          {/* Abstract glowing pelvic bowl representation */}
          <div className="w-64 h-64 md:w-96 md:h-96 relative mx-auto">
             <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-orange-500/30" 
             />
             <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-[60%_40%_30%_70%/50%_50%_50%_50%] border-2 border-teal-500/30" 
             />
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.2),transparent_60%)]" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_#f97316] animate-ping" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
