import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';
import { SourceBadge } from '../../manipura/components/SourceBadge';

export const WhatIsItSection: React.FC = () => {
  const data = useAnahataData();
  const [activeTab, setActiveTab] = useState<'SIMPLE' | 'TRADITION' | 'MODERN' | 'EVIDENCE'>('SIMPLE');

  const tabs = [
    { id: 'SIMPLE', label: 'SIMPLE' },
    { id: 'TRADITION', label: 'TRADITION' },
    { id: 'MODERN', label: 'MODERN' },
    { id: 'EVIDENCE', label: 'EVIDENCE' }
  ] as const;

  const getContent = () => {
    switch (activeTab) {
      case 'SIMPLE': return data.whatIsIt.simple;
      case 'TRADITION': return data.whatIsIt.tradition;
      case 'MODERN': return data.whatIsIt.modern;
      case 'EVIDENCE': return data.whatIsIt.evidence;
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      <div className="max-w-4xl w-full text-center z-10">
        
        <h2 className="text-sm font-sans tracking-[0.3em] text-emerald-400 uppercase mb-16">
          What is Anāhata?
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-emerald-900/60 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-black/30 border-emerald-900/30 text-emerald-100/50 hover:bg-emerald-950/40 hover:border-emerald-700/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl font-serif text-white/80 leading-relaxed font-light"
            >
              {getContent()}
              
              <div className="mt-8 flex justify-center">
                {activeTab === 'TRADITION' && <SourceBadge type="TRADITION" />}
                {activeTab === 'MODERN' && <SourceBadge type="MODERN" />}
                {activeTab === 'EVIDENCE' && <SourceBadge type="EVIDENCE" />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
