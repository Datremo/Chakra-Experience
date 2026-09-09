import React from 'react';
import { motion } from 'framer-motion';

export const SacralAestheticsSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#ff5500]">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500] via-[#8c1c00] to-black opacity-80" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,150,0,0.5),transparent_70%)]"
      />

      <div className="relative z-10 text-center max-w-4xl px-6 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-200 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Aesthetics
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-serif text-white mb-12 drop-shadow-2xl"
        >
          Twilight & Orange
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-black/20 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/10 max-w-3xl mx-auto shadow-2xl"
        >
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-6">
            The color of SvÄdhiá¹£á¹­hÄna is a deep, glowing <strong className="font-serif italic text-orange-300">Orange</strong>.
          </p>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            It is the color of sunset, twilight, and autumn. It represents the boundary between day (conscious) and night (subconscious). Immersing yourself in warm, low lighting, candlelight, and sunset colors naturally stimulates this energy center.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
