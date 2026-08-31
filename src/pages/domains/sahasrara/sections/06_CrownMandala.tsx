import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

const LAYERS = [
  { id: 'lotus', title: 'LOTUS', decode: 'The structure of unfolded awareness.', source: 'Ṣaṭ-Cakra-Nirūpaṇa v. 40', color: 'rgba(255,255,255,0.1)' },
  { id: 'petals', title: 'PETAL FIELD', decode: '1000 petals representing infinite multiplicity.', source: 'Ṣaṭ-Cakra-Nirūpaṇa v. 40', color: 'rgba(200,200,255,0.2)' },
  { id: 'letters', title: 'SANSKRIT LETTERS', decode: 'All sounds and concepts absorbed.', source: 'Ṣaṭ-Cakra-Nirūpaṇa v. 40', color: 'rgba(255,255,200,0.3)' },
  { id: 'moon', title: 'MOON', decode: 'The cooling, nectar-dripping lunar sphere (Candramaṇḍala).', source: 'Ṣaṭ-Cakra-Nirūpaṇa v. 41', color: 'rgba(255,255,255,0.8)' },
  { id: 'bindu', title: 'BINDU', decode: 'The dimensionless point of concentration.', source: 'Kāmakalāvilāsa', color: '#ff0000' },
  { id: 'light', title: 'INNER LIGHT', decode: 'The radiant void where subject and object merge.', source: 'Śiva Saṃhitā', color: 'rgba(255,255,255,1)' },
  { id: 'void', title: 'VOID / SUBTLE SPACE', decode: 'The supreme empty space (Śūnya).', source: 'Vijñānabhairava Tantra', color: '#000000' },
];

export const CrownMandalaSection: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const [showDecode, setShowDecode] = useState(false);
  const [showSource, setShowSource] = useState(false);

  const nextLayer = () => {
    if (activeLayerIndex < LAYERS.length - 1) {
      setActiveLayerIndex(activeLayerIndex + 1);
      setShowDecode(false);
      setShowSource(false);
    }
  };

  const activeLayer = LAYERS[activeLayerIndex];

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-[#0b001a] overflow-hidden">
      
      <div className="absolute top-32 text-center z-20">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4">World 06</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-widest">The Crown Mandala</h3>
      </div>

      {/* Visual Representation */}
      <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center mt-24 z-10 pointer-events-none">
        <AnimatePresence>
          {LAYERS.map((layer, idx) => (
            idx <= activeLayerIndex && (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  width: `${100 - (idx * 12)}%`,
                  height: `${100 - (idx * 12)}%`,
                  border: `1px solid ${layer.color}`,
                  background: idx === activeLayerIndex ? layer.color : 'transparent',
                  mixBlendMode: 'screen',
                  boxShadow: idx === activeLayerIndex ? `0 0 40px ${layer.color}` : 'none'
                }}
              />
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Controls & Information */}
      <div className="absolute bottom-24 w-full max-w-lg px-6 flex flex-col items-center z-20">
        
        <div className="mb-8 text-center h-24 flex flex-col items-center justify-end">
          <h4 className="text-2xl font-serif text-white tracking-widest mb-4">
            {activeLayer.title}
          </h4>
          
          <AnimatePresence mode="wait">
            {showDecode && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white/80 font-light text-sm"
              >
                {activeLayer.decode}
              </motion.p>
            )}
            
            {showSource && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2"
              >
                <p className="text-white/50 font-serif italic text-xs mb-1 flex items-center justify-center gap-2">
                  <SourceBadge type="TRADITION" />
                  {activeLayer.source}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setShowDecode(!showDecode)}
            className="px-6 py-2 border border-purple-400/30 rounded-full text-xs font-sans tracking-widest uppercase text-white/60 hover:text-white hover:bg-purple-500/20 transition-colors"
          >
            {showDecode ? 'Hide Meaning' : 'Decode'}
          </button>
          
          {showDecode && (
            <button 
              onClick={() => setShowSource(!showSource)}
              className="px-6 py-2 border border-purple-400/30 rounded-full text-xs font-sans tracking-widest uppercase text-white/60 hover:text-white hover:bg-purple-500/20 transition-colors"
            >
              {showSource ? 'Hide Source' : 'Source'}
            </button>
          )}
        </div>

        {activeLayerIndex < LAYERS.length - 1 && (
          <button 
            onClick={nextLayer}
            className="text-xs font-sans tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors"
          >
            Next Layer ↓
          </button>
        )}

        {activeLayerIndex === LAYERS.length - 1 && (
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-white/30">
            Scroll to continue
          </p>
        )}

      </div>

    </section>
  );
};
