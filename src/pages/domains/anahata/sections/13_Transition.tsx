import React from 'react';
import { motion } from 'framer-motion';

export const TransitionSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403]">
      
      <div className="max-w-3xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-emerald-500/50 to-transparent mx-auto mb-12" />
          
          <p className="text-xl md:text-2xl font-serif text-white/50 font-light leading-relaxed mb-12 italic">
            This is where the classical map ends.<br/>
            And where the modern emotional landscape begins.
          </p>

          <p className="text-sm font-sans tracking-widest text-emerald-500/40 uppercase">
            Scroll to enter the Modern Heart
          </p>

        </motion.div>
      </div>

    </section>
  );
};
