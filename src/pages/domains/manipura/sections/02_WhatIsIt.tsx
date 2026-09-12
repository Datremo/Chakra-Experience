import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useManipuraData } from '../../../../data/manipuraData';

export const WhatIsItSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeTab, setActiveTab] = useState<'SIMPLE' | 'TRADITION' | 'MODERN' | 'SCIENCE'>('SIMPLE');

  return (
    <section id="what-is-it" className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-[#090301]">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-6">The Current</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-serif text-amber-50">What is Maṇipūra?</h1>
          <p className="text-2xl text-amber-200/60 leading-relaxed max-w-3xl mx-auto italic">
            Understand the third chakra from classical tradition, modern psychology, and scientific boundaries.
          </p>
        </div>

        {/* Interactive Surface */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {(['SIMPLE', 'TRADITION', 'MODERN', 'SCIENCE'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 border transition-all duration-500 font-sans tracking-[0.2em] uppercase text-xs rounded-xl
                ${activeTab === tab 
                  ? 'bg-amber-900/40 border-amber-500 text-amber-100 shadow-[0_0_30px_rgba(245,158,11,0.2)] scale-105' 
                  : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border-amber-900/30 text-amber-200/40 hover:border-amber-500/50 hover:text-amber-200/80 hover:bg-amber-900/20'
                }`}
            >
              {tab === 'SCIENCE' ? 'EVIDENCE' : tab}
            </button>
          ))}
        </div>

        {/* Liquid Reveal Container */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            
            {activeTab === 'SIMPLE' && (
              <motion.div
                key="SIMPLE"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#050100]/80 backdrop-blur-md border border-amber-900/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <h3 className="text-3xl md:text-4xl mb-8 text-amber-100 font-serif">The Center of Fire</h3>
                <div className="space-y-6 text-xl leading-loose text-amber-200/70 font-light">
                  <p>{manipuraData.whatIsIt.simple}</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'TRADITION' && (
              <motion.div
                key="TRADITION"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#0f0300]/80 backdrop-blur-md border border-orange-900/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <SourceBadge 
                  type="TRADITION" 
                  content={
                    <div>
                      <p className="font-bold mb-2">Classical Tantric understanding.</p>
                      <p className="text-white/60 text-[10px]">Source: Ṣaṭ-Cakra-Nirūpaṇa (1526 CE)</p>
                    </div>
                  }
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-orange-50 font-serif">The Ten-Petaled Lotus</h3>
                <div className="space-y-6 text-xl leading-loose text-orange-100/70 font-light">
                  <p>{manipuraData.whatIsIt.tradition}</p>
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
                className="bg-[#0d0700]/80 backdrop-blur-md border border-yellow-900/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <SourceBadge 
                  type="MODERN" 
                  content={
                    <div>
                      <p className="font-bold mb-2">Contemporary Western wellness interpretation.</p>
                      <p className="text-white/60 text-[10px]">Source: Jungian psychology and New Age synthesis.</p>
                    </div>
                  }
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-yellow-50 font-serif">The Engine of Will</h3>
                <div className="space-y-6 text-xl leading-loose text-yellow-100/70 font-light">
                  <p>{manipuraData.whatIsIt.modern}</p>
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
                className="bg-[#050608]/80 backdrop-blur-md border border-slate-700/40 p-10 md:p-16 rounded-3xl shadow-2xl"
              >
                <SourceBadge 
                  type="EVIDENCE" 
                  content={
                    <div>
                      <p className="font-bold mb-2">What empirical research supports.</p>
                    </div>
                  }
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-slate-100 font-serif">The Somatic Metaphor</h3>
                <div className="space-y-6 text-xl leading-loose text-slate-300/80 font-light">
                  <p>{manipuraData.whatIsIt.evidence}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
