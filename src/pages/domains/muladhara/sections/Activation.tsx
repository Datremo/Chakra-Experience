import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ActivationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'TRADITION' | 'MODERN' | 'SCIENCE'>('TRADITION');

  return (
    <section id="activation" className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-[#120505]">
      
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">The Goal</h2>
          <h1 className="text-5xl md:text-7xl mb-8 text-white">Can you "Activate" the Root?</h1>
          <div className="bg-red-900/20 border border-red-500/50 p-6 max-w-2xl mx-auto rounded-xl mt-8">
            <p className="text-red-200/80 font-sans tracking-widest text-sm">
              Spoiler: Chakra activation is not a scientifically validated measurable state. You cannot be "72% activated."
            </p>
          </div>
        </div>

        {/* Interactive Doors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {(['TRADITION', 'MODERN', 'SCIENCE'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-6 border rounded-lg transition-all duration-500 font-sans tracking-[0.2em] uppercase text-sm
                ${activeTab === tab 
                  ? 'bg-red-900/40 border-red-500 text-red-100 shadow-[0_0_30px_rgba(220,38,38,0.15)]' 
                  : 'bg-black/50 border-white/5 text-white/40 hover:border-white/20 hover:text-white/80'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[300px] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'TRADITION' && (
              <motion.div
                key="TRADITION"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#0f0404] border border-red-900/30 p-10 md:p-16 rounded-2xl"
              >
                <h3 className="text-3xl md:text-4xl mb-6 text-amber-50">Awakening Kundalinī</h3>
                <p className="text-xl leading-loose text-white/70">
                  In classical texts, "activation" refers specifically to the awakening of Kundalinī Shakti. This is not described as a subtle psychological shift, but an overwhelming, life-altering spiritual event requiring intense, supervised yogic practices over many years. It is the beginning of enlightenment, not a wellness hack.
                </p>
              </motion.div>
            )}

            {activeTab === 'MODERN' && (
              <motion.div
                key="MODERN"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#050f08] border border-emerald-900/30 p-10 md:p-16 rounded-2xl"
              >
                <h3 className="text-3xl md:text-4xl mb-6 text-emerald-50">Psychological Grounding</h3>
                <p className="text-xl leading-loose text-white/70">
                  Modern spirituality often uses "activation" to mean psychological healing. In this context, an "activated" root chakra means you have processed trauma, established healthy boundaries, and feel a deep sense of belonging and financial security. It is viewed as a lifelong therapeutic journey rather than a mystical switch.
                </p>
              </motion.div>
            )}

            {activeTab === 'SCIENCE' && (
              <motion.div
                key="SCIENCE"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#050a0f] border border-blue-900/30 p-10 md:p-16 rounded-2xl"
              >
                <h3 className="text-3xl md:text-4xl mb-6 text-blue-50">Nervous System Regulation</h3>
                <p className="text-xl leading-loose text-white/70">
                  There is no universal, scientifically established timeline for "activation" because there is no biological entity to activate. However, neuroplasticity dictates that repeatedly practicing grounding techniques will literally rewire the brain to default to a parasympathetic (calm) state over time. 
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl text-white mb-8">How long does it take?</h2>
          <div className="flex items-center justify-center space-x-6 text-red-400 font-sans tracking-widest uppercase text-sm">
            <span className="line-through opacity-50">Not a Timer</span>
            <span>→</span>
            <span className="text-red-500 font-bold scale-110">A Lifelong Practice</span>
          </div>
        </div>

      </div>
    </section>
  );
};
