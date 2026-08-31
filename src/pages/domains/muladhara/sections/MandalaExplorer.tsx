import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

const LAYERS = [
  { id: 1, title: 'Four Petals', desc: 'The four petals represent the four vrittis (mental states) originating here: greatest joy, natural pleasure, delight in controlling passion, and blissfulness in concentration.' },
  { id: 2, title: 'Petal Letters', desc: 'The Sanskrit syllables वं (Vaṃ), शं (Śaṃ), षं (Ṣaṃ), and सं (Saṃ). Sound is considered the physical manifestation of divine energy.' },
  { id: 3, title: 'Earth Square', desc: 'The yellow square represents Prithvi (Earth). The four sides represent stability, solidity, and the physical plane of existence.' },
  { id: 4, title: 'Earth Bīja', desc: 'The central seed syllable is लं (Laṃ), the vibrational frequency of the Earth element.' },
  { id: 5, title: 'Airāvata', desc: 'The vehicle of the Bīja is Airāvata, the seven-trunked elephant of Indra, symbolizing the immense, heavy, solid strength of the Earth.' },
  { id: 6, title: 'Brahmā', desc: 'The presiding deity is the child Brahmā, the creator, representing the dawn of consciousness and the beginning of the spiritual journey.' },
  { id: 7, title: 'Ḍākinī', desc: 'The presiding Goddess (Shakti) is Ḍākinī, a fierce guardian energy with multiple arms, holding the pure essence of spiritual power.' },
  { id: 8, title: 'Inner Triangle', desc: 'The downward-pointing red triangle represents the Yoni (the cosmic womb), the origin of all creation and the seat of the Goddess.' },
  { id: 9, title: 'Svayaṃbhu Liṅga', desc: 'Inside the triangle is the Svayaṃbhu (self-originated) Liṅga, representing the absolute, unmanifested consciousness of Shiva.' },
  { id: 10, title: 'Kundalinī', desc: 'Coiled three and a half times around the Liṅga is Kundalinī Shakti, the dormant spiritual energy waiting to be awakened.' },
  { id: 11, title: 'Complete Mandala', desc: 'This is not a picture to be looked at; it is a schematic diagram to be built internally through focused meditation.' }
];

export const MandalaExplorerSection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<number>(1);

  const activeLayer = LAYERS.find(l => l.id === activeLayerId)!;

  return (
    <section id="symbol" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#030101]">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">The Classical Mandala</h2>
        <h1 className="text-5xl md:text-6xl mb-8 leading-tight max-w-4xl">Decoding the Map</h1>
        <SourceBadge type="TRADITION" text="Iconography derived from the Ṣaṭ-cakra-nirūpaṇa" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Mandala Visualization (CSS/SVG Construction) */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[700px] flex items-center justify-center">
          
          <AnimatePresence>
            {/* Layer 1: Four Petals (Red) */}
            {activeLayerId >= 1 && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="absolute w-80 h-80 border-4 border-red-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.3)]"
              >
                {/* 4 Petals abstracted as overlapping circles */}
                <div className="absolute -top-12 w-40 h-40 bg-red-900/40 rounded-full blur-[2px]" />
                <div className="absolute -bottom-12 w-40 h-40 bg-red-900/40 rounded-full blur-[2px]" />
                <div className="absolute -left-12 w-40 h-40 bg-red-900/40 rounded-full blur-[2px]" />
                <div className="absolute -right-12 w-40 h-40 bg-red-900/40 rounded-full blur-[2px]" />
              </motion.div>
            )}

            {/* Layer 2: Petal Letters */}
            {activeLayerId >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute w-80 h-80">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-red-400 text-2xl font-serif">वं</span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-red-400 text-2xl font-serif">शं</span>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400 text-2xl font-serif">षं</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 text-2xl font-serif">सं</span>
              </motion.div>
            )}

            {/* Layer 3: Earth Square (Yellow) */}
            {activeLayerId >= 3 && (
              <motion.div 
                initial={{ scale: 0, rotate: 90 }} animate={{ scale: 1, rotate: 0 }}
                className="absolute w-48 h-48 border-4 border-yellow-500 bg-yellow-900/20 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              />
            )}

            {/* Layer 4: Earth Bija (Lam) */}
            {activeLayerId >= 4 && activeLayerId < 11 && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="absolute z-20">
                <span className="text-6xl text-yellow-500 font-serif">लं</span>
              </motion.div>
            )}

            {/* Layer 5: Airavata (Elephant silhouette) */}
            {activeLayerId >= 5 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.5, y: 0 }} className="absolute z-10 mt-20">
                 {/* Placeholder for Elephant. In a real app, an SVG */}
                <div className="w-24 h-16 bg-gray-600 rounded-full blur-[4px]" />
              </motion.div>
            )}

            {/* Layer 6 & 7: Brahma & Dakini */}
            {activeLayerId >= 6 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute z-10 -ml-24 mt-12">
                <div className="w-8 h-8 bg-amber-500/50 rounded-full blur-[2px]" />
              </motion.div>
            )}
            {activeLayerId >= 7 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute z-10 ml-24 mt-12">
                <div className="w-8 h-8 bg-red-500/50 rounded-full blur-[2px]" />
              </motion.div>
            )}

            {/* Layer 8: Inner Triangle */}
            {activeLayerId >= 8 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
                className="absolute w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[70px] border-t-red-600/80 z-30 mb-8"
              />
            )}

            {/* Layer 9: Linga */}
            {activeLayerId >= 9 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute z-30 mb-12">
                <div className="w-6 h-12 bg-gray-400 rounded-t-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </motion.div>
            )}

            {/* Layer 10: Kundalini */}
            {activeLayerId >= 10 && (
              <motion.div initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1 }} className="absolute z-40 mb-12">
                {/* Coiled snake representation */}
                <div className="w-8 h-8 border-2 border-amber-300 rounded-full border-t-transparent border-r-transparent animate-spin" style={{ animationDuration: '3s' }} />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Controls & Explanation */}
        <div className="lg:col-span-5 bg-[#120505] p-10 rounded-[2rem] border border-red-900/30">
          <div className="mb-8 flex justify-between items-center text-red-500 font-sans text-sm tracking-widest">
            <span>Layer {activeLayerId} of 11</span>
            <div className="flex space-x-2">
              <button 
                disabled={activeLayerId === 1}
                onClick={() => setActiveLayerId(prev => prev - 1)}
                className="p-2 border border-red-900/50 rounded disabled:opacity-30 hover:bg-red-900/20"
              >
                Prev
              </button>
              <button 
                disabled={activeLayerId === 11}
                onClick={() => setActiveLayerId(prev => prev + 1)}
                className="p-2 border border-red-900/50 rounded disabled:opacity-30 hover:bg-red-900/20"
              >
                Next
              </button>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl mb-6 text-white">
            {activeLayer.title}
          </h2>
          <p className="text-xl leading-relaxed text-white/70 min-h-[120px]">
            {activeLayer.desc}
          </p>

          {/* Quick jump dots */}
          <div className="flex flex-wrap gap-2 mt-8">
            {LAYERS.map(layer => (
              <button 
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-3 h-3 rounded-full transition-colors ${activeLayerId >= layer.id ? 'bg-red-500' : 'bg-white/10'}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
