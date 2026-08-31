import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

const STAGES = [
  { id: 'STONE', color: '#1a1a1a', image: 'https://images.unsplash.com/photo-1516803623512-eb7ff8676d54?q=80&w=1500&auto=format&fit=crop', text: 'Inertia. Dense, unbreakable form.' },
  { id: 'SOIL', color: '#2d1810', image: 'https://images.unsplash.com/photo-1574621100236-d26bbecb0bb0?q=80&w=1500&auto=format&fit=crop', text: 'Fertility. The dark matrix of potential.' },
  { id: 'ROOTS', color: '#3d1c04', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1500&auto=format&fit=crop', text: 'Anchorage. Reaching downward to stand upward.' },
  { id: 'MOUNTAIN', color: '#1a1f24', image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1500&auto=format&fit=crop', text: 'Immovability. Weathering all storms.' },
  { id: 'BODY', color: '#4a2511', image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1500&auto=format&fit=crop', text: 'Flesh. Bone. The earth expressing itself as you.' }
];

export const EarthElementSection: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const stage = STAGES[activeStageIdx];

  return (
    <section id="earth" className="min-h-screen py-32 px-6 flex items-center justify-center relative overflow-hidden transition-colors duration-1000" style={{ backgroundColor: stage.color }}>
      
      {/* Background Image Transition */}
      <AnimatePresence>
        <motion.img 
          key={stage.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          src={stage.image} 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="font-sans text-yellow-500 tracking-[0.3em] uppercase text-sm mb-6">Pṛthvī</h2>
          <h1 className="text-5xl md:text-7xl mb-12 text-white">The Earth Element</h1>
          
          <SourceBadge 
            type="TRADITION" 
            text="In the classical elemental sequence (Tattvas), Mūlādhāra governs the Earth element—the densest state of matter." 
          />

          <div className="mt-12 bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-yellow-900/30">
            <h3 className="text-yellow-400 font-sans tracking-widest uppercase text-xs mb-6">What this symbol invites you to reflect on</h3>
            <ul className="space-y-4 font-serif text-xl text-white/80">
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> <span>Stability</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> <span>Support</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> <span>Embodiment</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> <span>Foundation</span></li>
              <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> <span>Groundedness</span></li>
            </ul>
            <div className="mt-6 text-xs text-white/40 font-sans">
              * Note: These are symbolic / contemporary interpretations of the Earth element.
            </div>
          </div>
        </div>

        {/* Interactive Earth Simulator */}
        <div className="flex flex-col items-center">
          
          {/* The Yellow Square */}
          <div className="relative w-64 h-64 border-[6px] border-yellow-500 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.2)] mb-12 overflow-hidden bg-yellow-900/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center p-6"
              >
                <h3 className="text-3xl font-sans tracking-widest text-yellow-50 mb-4">{stage.id}</h3>
                <p className="text-yellow-200/70">{stage.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex space-x-4">
            {STAGES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStageIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStageIdx === idx ? 'bg-yellow-400 scale-150' : 'bg-white/20 hover:bg-white/50'}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
