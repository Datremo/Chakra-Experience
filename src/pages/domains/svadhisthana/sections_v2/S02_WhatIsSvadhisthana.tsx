import React from 'react';
import { motion } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const S02_WhatIsSvadhisthana: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();

  return (
    <section className="bg-black text-white relative">
      
      {/* Intro Hook */}
      <div className="min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center px-6 text-center relative z-10 py-24">
        <h2 className="font-sans text-orange-500/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-8 drop-shadow-md">The Current</h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-8 leading-tight font-serif text-orange-50 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          What is Svādhiṣṭhāna?
        </h1>
        <p className="text-xl md:text-3xl text-orange-100/70 leading-relaxed max-w-3xl mx-auto italic font-light px-4">
          Understand the second chakra through classical tradition, modern psychology, and scientific boundaries.
        </p>
      </div>

      {/* Tradition Block */}
      <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2000&auto=format&fit=crop" 
            alt="Abstract mandala art" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0a00]/80 to-black" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl w-full bg-black/60 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] border border-orange-900/40 shadow-[0_0_50px_rgba(249,115,22,0.1)]"
        >
          <SourceBadge 
            type="TRADITION" 
            text="Classical Tantric and Yogic understanding." 
            sourceText="Ṣaṭ-cakra-nirūpaṇa (1526 CE)"
          />
          <h3 className="text-3xl md:text-5xl mt-8 mb-8 text-orange-100 font-serif leading-tight">The Six-Petaled Lotus</h3>
          <div className="space-y-6 text-lg md:text-xl leading-loose text-orange-50/80 font-light">
            <p>{svadhisthanaData.whatIsIt.tradition}</p>
          </div>
        </motion.div>
      </div>

      {/* Modern Block */}
      <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Abstract fluid flow" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001111]/80 to-black" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl w-full bg-black/60 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] border border-teal-900/40 shadow-[0_0_50px_rgba(20,184,166,0.1)]"
        >
          <SourceBadge 
            type="MODERN" 
            text="Contemporary Western wellness interpretation." 
            sourceText="Jungian psychology and New Age synthesis"
          />
          <h3 className="text-3xl md:text-5xl mt-8 mb-8 text-teal-100 font-serif leading-tight">The Engine of Emotion</h3>
          <div className="space-y-6 text-lg md:text-xl leading-loose text-teal-50/80 font-light">
            <p>{svadhisthanaData.whatIsIt.modern}</p>
          </div>
        </motion.div>
      </div>

      {/* Science Block */}
      <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Neural networks and biology" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00081a]/80 to-black" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl w-full bg-black/60 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] border border-blue-900/40 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        >
          <SourceBadge 
            type="EVIDENCE" 
            text="What empirical research supports." 
          />
          <h3 className="text-3xl md:text-5xl mt-8 mb-8 text-blue-100 font-serif leading-tight">The Somatic Map</h3>
          <div className="space-y-6 text-lg md:text-xl leading-loose text-blue-50/80 font-light">
            <p>{svadhisthanaData.whatIsIt.evidence}</p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
