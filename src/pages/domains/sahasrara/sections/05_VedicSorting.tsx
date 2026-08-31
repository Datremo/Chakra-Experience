import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';

type Category = 'VEDIC' | 'UPANIṢADIC' | 'YOGIC' | 'TANTRIC' | 'MODERN' | 'UNKNOWN / CONTESTED' | 'UNSORTED';

interface Concept {
  id: string;
  name: string;
  correctCategory: Category;
  explanation: string;
  currentCategory: Category;
}

const INITIAL_CONCEPTS: Concept[] = [
  { id: '1', name: 'Ātman', correctCategory: 'UPANIṢADIC', explanation: 'The concept of the individual self as ultimate reality was solidified in the Upaniṣads.', currentCategory: 'UNSORTED' },
  { id: '2', name: 'Brahman', correctCategory: 'UPANIṢADIC', explanation: 'While the word appears in the Vedas (as prayer/sacred utterance), it became the absolute cosmic principle in the Upaniṣads.', currentCategory: 'UNSORTED' },
  { id: '3', name: 'prāṇa', correctCategory: 'VEDIC', explanation: 'Breath/vital life force is an ancient concept present in the earliest Vedic hymns.', currentCategory: 'UNSORTED' },
  { id: '4', name: 'cakra', correctCategory: 'TANTRIC', explanation: 'The detailed inner energetic centers (chakras) were mapped out in later Tantric texts.', currentCategory: 'UNSORTED' },
  { id: '5', name: 'Kundalinī', correctCategory: 'TANTRIC', explanation: 'The goddess as a coiled serpent energy at the base of the spine is a Tantric revelation.', currentCategory: 'UNSORTED' },
  { id: '6', name: 'Sahasrāra', correctCategory: 'TANTRIC', explanation: 'The 1,000-petalled lotus is a feature of the Tantric/Yogic subtle body map.', currentCategory: 'UNSORTED' },
  { id: '7', name: 'seven-chakra rainbow system', correctCategory: 'MODERN', explanation: 'Assigning the 7 colors of the rainbow to the chakras was a 20th-century Western invention (e.g., Christopher Hills).', currentCategory: 'UNSORTED' },
  { id: '8', name: 'Pineal Gland = Crown', correctCategory: 'MODERN', explanation: 'Equating the crown or third eye directly with the physical pineal gland is a modern anatomical overlay.', currentCategory: 'UNSORTED' },
  { id: '9', name: 'mokṣa', correctCategory: 'UPANIṢADIC', explanation: 'The goal of liberation from the cycle of rebirth became central during the Upaniṣadic and Śramaṇa period.', currentCategory: 'UNSORTED' }
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'VEDIC', label: 'Vedic (c. 1500–1000 BCE)' },
  { id: 'UPANIṢADIC', label: 'Upaniṣadic (c. 800–300 BCE)' },
  { id: 'YOGIC', label: 'Classical Yogic (c. 200 CE)' },
  { id: 'TANTRIC', label: 'Tantric / Haṭha (c. 600–1400 CE)' },
  { id: 'MODERN', label: 'Modern (19th–20th Century)' },
  { id: 'UNKNOWN / CONTESTED', label: 'Unknown / Contested' }
];

export const VedicSortingSection: React.FC = () => {
  const [concepts, setConcepts] = useState<Concept[]>(INITIAL_CONCEPTS);
  const [activeExplanation, setActiveExplanation] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, conceptId: string) => {
    // Simple hit detection based on Y coordinate for categories
    // In a real app, use getBoundingClientRect, but for a vertically stacked list, we can estimate
    // or just let them click to sort if drag fails.
  };

  const handleSort = (conceptId: string, categoryId: Category) => {
    const concept = concepts.find(c => c.id === conceptId);
    if (!concept) return;
    
    setConcepts(prev => prev.map(c => 
      c.id === conceptId ? { ...c, currentCategory: categoryId } : c
    ));

    if (concept.correctCategory === categoryId) {
      setActiveExplanation(`Correct! ${concept.explanation}`);
    } else {
      setActiveExplanation(`Not quite. ${concept.name} actually belongs in ${concept.correctCategory}. ${concept.explanation}`);
      // Revert after showing explanation
      setTimeout(() => {
        setConcepts(prev => prev.map(c => 
          c.id === conceptId ? { ...c, currentCategory: concept.correctCategory } : c
        ));
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center bg-[#1a0033]" ref={containerRef}>
      
      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 05</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-widest mb-6 drop-shadow-[0_0_15px_white]">What Came From The Vedas?</h3>
        <p className="text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
          It is common to hear that "the Vedas describe the 7 chakras." Tap a concept to trace it back to its actual historical era.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Unsorted Concepts */}
        <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[400px] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50" />
          <h4 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-8 text-center">Unsorted Concepts</h4>
          <div className="flex flex-wrap gap-4 justify-center flex-grow content-start">
            {concepts.filter(c => c.currentCategory === 'UNSORTED').map(concept => (
              <div 
                key={concept.id}
                className="group relative"
              >
                <div className="px-5 py-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-full text-white/90 text-sm font-light cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all">
                  {concept.name}
                </div>
                {/* Dropdown for sorting */}
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => handleSort(concept.id, cat.id)}
                      className="w-full text-left px-5 py-3 text-xs font-sans tracking-wide text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {concepts.filter(c => c.currentCategory === 'UNSORTED').length === 0 && (
              <p className="text-white/30 text-sm font-light italic mt-10">All concepts sorted.</p>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CATEGORIES.map(category => (
            <div key={category.id} className="bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
              <h4 className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4 border-b border-white/10 pb-3">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2 min-h-[40px] items-start">
                <AnimatePresence>
                  {concepts.filter(c => c.currentCategory === category.id).map(concept => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      key={concept.id}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] rounded-full text-white/90 text-xs font-light"
                    >
                      {concept.name}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Explanation Toast */}
      <AnimatePresence>
        {activeExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 max-w-lg w-[90%] bg-black/80 backdrop-blur-xl border border-white/20 text-white p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 text-center"
          >
            <p className="font-serif text-lg leading-relaxed text-white/90">{activeExplanation}</p>
            <button 
              onClick={() => setActiveExplanation(null)}
              className="mt-6 px-6 py-2 border border-white/20 rounded-full text-xs font-sans tracking-widest uppercase text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
