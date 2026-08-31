import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';
import { FireCanvas } from '../components/FireCanvas';

export const AgniSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeTab, setActiveTab] = useState<'TRADITIONAL' | 'METAPHOR' | 'MODERN'>('METAPHOR');
  const [mouseIntensity, setMouseIntensity] = useState(1);
  const [stage, setStage] = useState<'WOOD' | 'EMBER' | 'FLAME' | 'ASH'>('FLAME');

  // React to mouse movement to change fire intensity
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (0 = at center, 1 = at edge)
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    const maxDist = Math.hypot(rect.width / 2, rect.height / 2);
    
    // Closer to center = higher intensity (1.5 max)
    const normalized = 1 - Math.min(dist / maxDist, 1);
    setMouseIntensity(0.5 + normalized * 1.5);
  };

  const handleMouseLeave = () => {
    setMouseIntensity(0.5); // Settles to an ember
  };

  // Cycle the transformation metaphor
  useEffect(() => {
    if (activeTab !== 'METAPHOR') return;
    
    const cycle = ['WOOD', 'EMBER', 'FLAME', 'ASH'] as const;
    const interval = setInterval(() => {
      setStage(prev => {
        const nextIdx = (cycle.indexOf(prev) + 1) % cycle.length;
        return cycle[nextIdx];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section 
      className="min-h-screen py-32 px-6 bg-black relative flex flex-col items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Background Interactive Fire Canvas */}
      <div className="absolute inset-0 z-0">
        <FireCanvas intensity={mouseIntensity} colorMode="orange" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-6">The Element</h2>
          <h1 className="text-7xl md:text-9xl mb-2 font-serif text-amber-100 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
            AGNI
          </h1>
          <p className="text-2xl text-amber-200/60 font-light italic">Fire</p>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-12">
          {(['TRADITIONAL', 'METAPHOR', 'MODERN'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-amber-600/30 border border-amber-500 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                  : 'bg-black/50 border border-amber-900/50 text-amber-500/50 hover:text-amber-300 hover:border-amber-700'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full bg-black/60 backdrop-blur-xl border border-amber-900/40 rounded-3xl p-8 md:p-12 min-h-[300px]">
          <AnimatePresence mode="wait">
            
            {activeTab === 'TRADITIONAL' && (
              <motion.div key="TRADITIONAL" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <h3 className="text-3xl font-serif text-amber-300 mb-6">The Ritual Witness</h3>
                <p className="text-xl text-amber-100/80 leading-relaxed font-light">
                  {manipuraData.agni.traditional}
                </p>
              </motion.div>
            )}

            {activeTab === 'METAPHOR' && (
              <motion.div key="METAPHOR" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center">
                <h3 className="text-3xl font-serif text-orange-400 mb-6">The Process of Alchemy</h3>
                <p className="text-xl text-orange-100/80 leading-relaxed font-light text-center mb-12 max-w-2xl">
                  {manipuraData.agni.metaphor}
                </p>

                {/* Animated Process Strip */}
                <div className="flex items-center justify-between w-full max-w-2xl border-t border-orange-900/50 pt-8 relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                  
                  {(['WOOD', 'EMBER', 'FLAME', 'ASH'] as const).map((s, i) => (
                    <div key={s} className="flex flex-col items-center transition-all duration-500">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 mb-4
                        ${stage === s ? 'bg-orange-900/50 border-orange-500 scale-125 shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-black/50 border-orange-900/30 scale-100'}
                        border
                      `}>
                        {i === 0 && <span className="text-orange-900">▤</span>}
                        {i === 1 && <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_5px_red]" />}
                        {i === 2 && <div className="w-4 h-4 bg-orange-500 rounded-full blur-[2px] animate-pulse" />}
                        {i === 3 && <div className="w-4 h-4 bg-gray-500/50 rounded-full blur-[1px]" />}
                      </div>
                      <span className={`font-sans text-xs tracking-widest uppercase transition-colors duration-500
                        ${stage === s ? 'text-orange-400' : 'text-orange-900/60'}
                      `}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'MODERN' && (
              <motion.div key="MODERN" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                <h3 className="text-3xl font-serif text-yellow-400 mb-6">The Metabolic Drive</h3>
                <p className="text-xl text-yellow-100/80 leading-relaxed font-light">
                  {manipuraData.agni.modern}
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        <div className="mt-16 text-center pointer-events-none">
          <p className="text-amber-500/40 text-xs tracking-[0.2em] uppercase font-sans mb-2">Notice</p>
          <p className="text-amber-200/60 italic font-light">Move closer to the center to increase the heat.</p>
        </div>

      </div>
    </section>
  );
};
