import React from 'react';
import { motion } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useManipuraData } from '../../../../data/manipuraData';

export const NameSection: React.FC = () => {
  const manipuraData = useManipuraData();

  return (
    <section className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        
        <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-20">The Name</h2>

        {/* Sanskrit Character */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="mb-16 relative inline-block"
        >
          <h1 className="text-8xl md:text-9xl font-serif text-amber-100/90 leading-none" style={{ textShadow: '0 0 40px rgba(245, 158, 11, 0.3)' }}>
            {manipuraData.header.sanskritName}
          </h1>
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-amber-500/20 blur-3xl -z-10 rounded-full"
          />
        </motion.div>

        {/* Breakdown Equation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16 font-sans text-xl tracking-[0.2em]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-amber-200"
          >
            <span className="text-amber-500 font-serif mr-4 text-3xl">मणि</span>
            MAṆI = JEWEL
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/30 text-2xl"
          >
            +
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-amber-200"
          >
            <span className="text-amber-500 font-serif mr-4 text-3xl">पूर</span>
            PŪRA = CITY
          </motion.div>
        </div>

        {/* Equals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-amber-500/30 mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif text-amber-50 mb-8 tracking-widest">
            {manipuraData.name.combined}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <SourceBadge 
            type="SYMBOLIC" 
            content="A metaphorical description of the center's luminous, transformative quality."
          />
          <p className="mt-6 text-xl md:text-2xl text-amber-100/60 font-light italic leading-relaxed">
            "{manipuraData.name.interpretation}"
          </p>
        </motion.div>

      </div>
    </section>
  );
};
