import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const WhatIsItSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [activeTab, setActiveTab] = useState<'TRADITION' | 'MODERN' | 'SCIENCE'>('TRADITION');

  return (
    <section id="what-is-it" className="min-h-[100svh] w-full flex items-center justify-center px-6 relative ">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">The Current</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-serif text-orange-50">What is Svādhiṣṭhāna?</h1>
          <p className="text-2xl text-orange-100/60 leading-relaxed max-w-3xl mx-auto italic">
            Understand the second chakra from classical tradition, modern psychology, and scientific boundaries.
          </p>
        </div>

        {/* Interactive Surface */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-10">
          {(['TRADITION', 'MODERN', 'SCIENCE'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-6 border transition-all duration-500 font-sans tracking-[0.2em] uppercase text-sm rounded-xl
                ${activeTab === tab 
                  ? 'bg-orange-900/40 border-orange-500 text-orange-100 shadow-[0_0_30px_rgba(249,115,22,0.2)] scale-105' 
                  : 'bg-black/30 border-orange-900/30 text-orange-200/40 hover:border-orange-500/50 hover:text-orange-200/80 hover:bg-orange-900/20'
                }`}
            >
              {tab === 'SCIENCE' ? 'EVIDENCE' : tab}
            </button>
          ))}
        </div>

        {/* Liquid Reveal Container */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'TRADITION' && (
              <motion.div
                key="TRADITION"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#0f0704]/80 backdrop-blur-md border border-orange-900/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <SourceBadge 
                  type="TRADITION" 
                  text="Classical Tantric and Yogic understanding." 
                  sourceText="Ṣaṭ-Cakra-Nirūpaṇa (16th-century text)"
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-orange-50 font-serif">The Six-Petaled Lotus</h3>
                <div className="space-y-6 text-xl leading-loose text-orange-100/70">
                  <p>{svadhisthanaData.whatIsIt.tradition}</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'MODERN' && (
              <motion.div
                key="MODERN"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#040c0f]/80 backdrop-blur-md border border-teal-900/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <SourceBadge 
                  type="MODERN" 
                  text="Contemporary Western wellness interpretation." 
                  sourceText="Jungian psychology and New Age synthesis"
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-teal-50 font-serif">The Engine of Emotion</h3>
                <div className="space-y-6 text-xl leading-loose text-teal-100/70">
                  <p>{svadhisthanaData.whatIsIt.modern}</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'SCIENCE' && (
              <motion.div
                key="SCIENCE"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#04060f]/80 backdrop-blur-md border border-blue-900/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <SourceBadge 
                  type="EVIDENCE" 
                  text="What empirical research supports." 
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-blue-50 font-serif">The Somatic Map</h3>
                <div className="space-y-6 text-xl leading-loose text-blue-100/70">
                  <p>{svadhisthanaData.whatIsIt.evidence}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
