import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

export const WhatIsItSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'TRADITION' | 'MODERN' | 'SCIENCE'>('TRADITION');

  return (
    <section id="what-is-it" className="min-h-screen py-32 px-6 flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Foundation</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">What Exactly is Mūlādhāra?</h1>
          <p className="text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto italic">
            Before diving into complex symbols, understand the core concept from three distinct perspectives.
          </p>
        </div>

        {/* Interactive Doors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {(['TRADITION', 'MODERN', 'SCIENCE'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-6 border transition-all duration-500 font-sans tracking-[0.2em] uppercase text-sm
                ${activeTab === tab 
                  ? 'bg-red-900/20 border-red-500 text-red-100 shadow-[0_0_30px_rgba(220,38,38,0.15)]' 
                  : 'bg-black/50 border-white/5 text-white/40 hover:border-white/20 hover:text-white/80'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Explanation Container */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'TRADITION' && (
              <motion.div
                key="TRADITION"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0f0404] border border-red-900/30 p-10 md:p-16 rounded-2xl"
              >
                <SourceBadge 
                  type="TRADITION" 
                  text="Classical Tantric and Yogic understanding." 
                  sourceText="Ṣaṭ-cakra-nirūpaṇa (1526 CE)"
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-amber-50">The Subtle Foundation</h3>
                <div className="space-y-6 text-xl leading-loose text-white/70">
                  <p>
                    In classical Tantric yoga, Mūlādhāra is the lowest of the six main subtle-body centers (chakras). It is not a physical organ, but a focal point for meditation and visualization located near the base of the spine.
                  </p>
                  <p>
                    It is considered the resting place of Kundalinī—a dormant, coiled spiritual energy. The primary purpose of Mūlādhāra in tradition is to act as the starting point for this energy to ascend toward the crown, leading to spiritual liberation.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'MODERN' && (
              <motion.div
                key="MODERN"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#050f08] border border-emerald-900/30 p-10 md:p-16 rounded-2xl"
              >
                <SourceBadge 
                  type="MODERN" 
                  text="Contemporary Western wellness interpretation." 
                  sourceText="Jungian psychology and New Age synthesis (20th Century)"
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-emerald-50">The Psychological Anchor</h3>
                <div className="space-y-6 text-xl leading-loose text-white/70">
                  <p>
                    Modern wellness systems have heavily psychologized the chakras. Today, Mūlādhāra is widely interpreted as the center of basic survival needs, emotional security, and physical groundedness.
                  </p>
                  <p>
                    If you struggle with anxiety, financial fear, or feeling disconnected from your physical body, modern practitioners often describe this as a "blocked" Root Chakra. Balancing it is associated with feeling safe and present in the material world.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'SCIENCE' && (
              <motion.div
                key="SCIENCE"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#050a0f] border border-blue-900/30 p-10 md:p-16 rounded-2xl"
              >
                <SourceBadge 
                  type="EVIDENCE" 
                  text="What empirical research actually supports." 
                />
                <h3 className="text-3xl md:text-4xl mt-6 mb-8 text-blue-50">The Nervous System</h3>
                <div className="space-y-6 text-xl leading-loose text-white/70">
                  <p>
                    There is no scientific instrument that can detect, measure, or photograph a chakra. Chakras do not physically exist as spinning wheels of light or energy inside anatomical tissue.
                  </p>
                  <p>
                    However, the <em>practices</em> associated with grounding—such as slow breathing, body-awareness meditation, and reducing mental rumination—are scientifically proven to down-regulate the sympathetic nervous system (fight-or-flight). What tradition calls "balancing the root," science observes as shifting the body into a state of parasympathetic safety.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
