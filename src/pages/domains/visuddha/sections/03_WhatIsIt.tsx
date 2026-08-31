import React from 'react';
import { motion } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const WhatIsItSection: React.FC = () => {
  const data = useVisuddhaData();

  const layers = [
    {
      title: 'SIMPLE',
      content: data.whatIsIt.simple,
      color: 'text-white'
    },
    {
      title: 'TRADITION',
      content: data.whatIsIt.tradition,
      color: 'text-cyan-400'
    },
    {
      title: 'MODERN',
      content: data.whatIsIt.modern,
      color: 'text-emerald-400'
    },
    {
      title: 'SCIENCE & EVIDENCE',
      content: data.whatIsIt.evidence,
      color: 'text-slate-400'
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      <div className="max-w-4xl w-full z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-6">Definition</h2>
          <h1 className="text-3xl md:text-5xl font-serif text-white/90">What is Viśuddha?</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <h3 className={`font-sans text-xs tracking-[0.3em] uppercase mb-4 ${layer.color} border-b border-white/10 pb-4`}>
                {layer.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                {layer.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
