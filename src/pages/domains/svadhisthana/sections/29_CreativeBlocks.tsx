import React from 'react';
import { motion } from 'framer-motion';

export const CreativeBlocksSection: React.FC = () => {
  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black z-0" />

      <div className="relative z-10 text-center max-w-3xl px-6 pt-10 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          The Dam
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-8 md:mb-10 drop-shadow-xl"
        >
          Creative Blocks
        </motion.h2>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-left"
          >
            <div className="w-16 h-16 rounded-full border border-orange-500/50 flex items-center justify-center shrink-0">
               <span className="text-orange-400 font-sans">01</span>
            </div>
            <div>
               <h3 className="text-2xl text-orange-200 font-serif mb-2">Perfectionism</h3>
               <p className="text-white/60 font-light">The ego demands that what you make is "good." But the sacral chakra just wants you to make *something*. Perfectionism is just fear disguised as high standards.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 text-right md:text-left"
          >
            <div className="w-16 h-16 rounded-full border border-orange-500/50 flex items-center justify-center shrink-0">
               <span className="text-orange-400 font-sans">02</span>
            </div>
            <div>
               <h3 className="text-2xl text-orange-200 font-serif mb-2">Judgment</h3>
               <p className="text-white/60 font-light">"What will people think?" This question instantly freezes the water. True creativity happens in a vacuum, where you are the only audience.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-orange-900/20 backdrop-blur-md p-8 rounded-3xl border border-orange-500/30 mt-12"
          >
             <p className="text-xl text-orange-100 font-serif italic text-center">
               "Make trash. Paint horribly. Sing off-key. Just get the water moving again."
             </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
