import React from 'react';
import { motion } from 'framer-motion';

export const BoundariesInWaterSection: React.FC = () => {
  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-black">
      
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-40">
         <div className="w-[200px] md:w-[400px] h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-[50px] relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500 blur-[2px]" />
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-blue-500 blur-[2px]" />
         </div>
      </div>

      <div className="relative z-10 text-center max-w-3xl px-6 w-full bg-black/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-blue-900/50 shadow-2xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-blue-100 mb-8"
        >
          Banks of the River
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6"
        >
          <p className="text-xl text-blue-200/80 font-serif italic">
            "To be adaptable is not to be a puddle."
          </p>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            People misunderstand the water element. They think flowing means having no boundaries, saying yes to everything, and letting others walk all over them. 
          </p>
          <p className="text-lg text-white/90 font-light leading-relaxed">
            But water without banks is just a swamp—stagnant and shallow. A river only gains speed, power, and direction because it has <strong className="text-blue-400">firm banks</strong> containing it.
          </p>
          <p className="text-xl text-blue-300 font-sans font-medium uppercase tracking-widest mt-8">
            Boundaries create the flow.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
