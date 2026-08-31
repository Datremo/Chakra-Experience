import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useManipuraData } from '../../../../data/manipuraData';

type DeityKey = 'ram' | 'rudra' | 'lakini' | 'kundalini';

export const DeitiesSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeTab, setActiveTab] = useState<DeityKey>('ram');
  
  // Cinematic Reveal Stages: 0: Silhouette, 1: Form, 2: Radiance
  const [revealStage, setRevealStage] = useState(0);

  useEffect(() => {
    // Reset to silhouette on tab change, then animate through stages
    setRevealStage(0);
    const t1 = setTimeout(() => setRevealStage(1), 1000);
    const t2 = setTimeout(() => setRevealStage(2), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [activeTab]);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#040100] relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-6">The Inhabitants</h2>
          <h1 className="text-4xl md:text-6xl mb-6 font-serif text-amber-50">Forces of the Forge</h1>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['ram', 'rudra', 'lakini', 'kundalini'] as DeityKey[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-amber-900/40 border border-amber-500 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                  : 'bg-black/50 border border-amber-900/30 text-amber-500/50 hover:text-amber-300 hover:border-amber-700'
                }
              `}
            >
              {manipuraData.deities[tab].title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Cinematic Reveal Visual */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-black/40 border border-amber-900/20 rounded-3xl overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Silhouette Stage */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: revealStage === 0 ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black"
                >
                  <div className="w-48 h-48 bg-amber-900/10 rounded-full blur-xl" />
                </motion.div>

                {/* Form Stage */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: revealStage >= 1 ? 1 : 0, scale: revealStage >= 1 ? 1 : 0.9 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  {activeTab === 'ram' && (
                    <div className="text-amber-700/50 font-serif text-[10rem] leading-none">♈︎</div>
                  )}
                  {activeTab === 'rudra' && (
                    <div className="w-32 h-32 border-4 border-blue-900/50 rounded-full flex items-center justify-center rotate-45">
                      <div className="w-24 h-24 border-4 border-blue-900/50 rounded-full" />
                    </div>
                  )}
                  {activeTab === 'lakini' && (
                    <div className="w-32 h-32 rotate-45 bg-red-900/20 border border-red-900/50" />
                  )}
                  {activeTab === 'kundalini' && (
                    <svg viewBox="0 0 100 200" className="w-24 h-48 opacity-50">
                      <path d="M50 180 Q20 150 50 100 T50 20" fill="none" stroke="#f59e0b" strokeWidth="4" />
                      <circle cx="50" cy="100" r="10" fill="none" stroke="#ef4444" strokeWidth="2" />
                    </svg>
                  )}
                </motion.div>

                {/* Radiance Stage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: revealStage === 2 ? 1 : 0 }}
                  transition={{ duration: 2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  {activeTab === 'ram' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.2),transparent_60%)]" />}
                  {activeTab === 'rudra' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />}
                  {activeTab === 'lakini' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15),transparent_60%)]" />}
                  {activeTab === 'kundalini' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.2),transparent_70%)]" />}
                </motion.div>
                
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right: Text Information */}
          <div className="h-[400px] md:h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl md:text-5xl font-serif text-amber-100">
                    {manipuraData.deities[activeTab].title}
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="font-sans text-xs tracking-widest text-amber-500/60 uppercase">Traditional Context</h4>
                      <SourceBadge type="TRADITION" />
                    </div>
                    <p className="text-amber-100/70 font-light leading-relaxed">
                      {manipuraData.deities[activeTab].traditional}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="font-sans text-xs tracking-widest text-amber-500/60 uppercase">Symbolic Meaning</h4>
                      <SourceBadge type="SYMBOLIC" />
                    </div>
                    <p className="text-amber-100/70 font-light leading-relaxed italic">
                      {manipuraData.deities[activeTab].meaning}
                    </p>
                  </div>

                  {(manipuraData.deities[activeTab] as any).modern && (
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <h4 className="font-sans text-xs tracking-widest text-amber-500/60 uppercase">Modern Wellness Lens</h4>
                        <SourceBadge type="MODERN" />
                      </div>
                      <p className="text-amber-100/70 font-light leading-relaxed">
                        {(manipuraData.deities[activeTab] as any).modern}
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
