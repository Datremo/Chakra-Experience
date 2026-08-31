import React from 'react';
import { motion } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const ClassicalBlueprintSection: React.FC = () => {
  const data = useVisuddhaData();

  const elements = [
    data.deities.akasa,
    data.deities.elephant,
    data.deities.sadasiva,
    data.deities.sakini
  ];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Ṣaṭ-Cakra-Nirūpaṇa</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Classical Blueprint</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full z-10">
        
        {/* Left: The Bīja HAṂ inside the Mandala representation */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[400px]">
          {/* Abstract 16 petals base */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-30"
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-48 border border-cyan-500/20 rounded-full origin-bottom"
                style={{ transform: `rotate(${i * (360/16)}deg) translateY(-50%)` }}
              />
            ))}
          </motion.div>

          {/* The White Circular Ākāśa Region */}
          <div className="absolute w-64 h-64 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <div className="w-56 h-56 rounded-full border border-dashed border-white/10 flex items-center justify-center">
              {/* The Bīja HAṂ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="text-center"
              >
                <div className="text-7xl font-serif text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  {data.mandala.bija.sanskrit}
                </div>
                <div className="text-sm font-sans tracking-[0.4em] text-white/60 uppercase mt-4">
                  {data.mandala.bija.transliteration}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: The Breakdown */}
        <div className="w-full lg:w-1/2 space-y-8">
          {elements.map((el, i) => (
            <motion.div 
              key={el.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-l border-cyan-900 pl-6 hover:border-cyan-400 transition-colors"
            >
              <h3 className="text-xl font-serif text-cyan-300 mb-2">{el.title}</h3>
              <p className="text-sm text-white/70 font-light mb-2">{el.traditional}</p>
              <p className="text-xs font-sans tracking-wide text-cyan-500/60 uppercase">{el.meaning}</p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
