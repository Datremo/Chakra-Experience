import React from 'react';
import { motion } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';
import { SourceBadge } from '../../manipura/components/SourceBadge';

export const NameSection: React.FC = () => {
  const data = useAnahataData();

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      <div className="max-w-3xl w-full text-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-7xl md:text-9xl font-serif text-emerald-400/90 mb-8 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            {data.header.sanskritName}
          </h2>
          <div className="flex justify-center items-center gap-6 font-sans text-xl md:text-2xl tracking-[0.4em] text-emerald-200/60 uppercase">
            <span>{data.name.an}</span>
            <span className="text-emerald-500/40 text-sm">+</span>
            <span>{data.name.ahata}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="relative"
        >
          <h3 className="text-3xl md:text-5xl font-serif text-white/90 mb-8 tracking-widest uppercase">
            {data.name.combined}
          </h3>
          
          <div className="flex justify-center mb-6">
            <SourceBadge type="TRADITION" />
          </div>

          <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed italic max-w-2xl mx-auto">
            {data.name.interpretation}
          </p>

          <p className="mt-8 text-xs font-sans tracking-[0.2em] uppercase text-emerald-500/40">
            * A contemplative metaphor, not a scientifically measurable acoustic vibration.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
