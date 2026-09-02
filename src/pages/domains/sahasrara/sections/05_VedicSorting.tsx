import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X, Sparkles, HelpCircle } from 'lucide-react';

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

const CATEGORIES: { id: Category; label: string; period: string; color: string }[] = [
  { id: 'VEDIC', label: 'Vedic', period: 'c. 1500–1000 BCE', color: 'border-amber-500/40 text-amber-200' },
  { id: 'UPANIṢADIC', label: 'Upaniṣadic', period: 'c. 800–300 BCE', color: 'border-purple-400/40 text-purple-200' },
  { id: 'YOGIC', label: 'Classical Yogic', period: 'c. 200 CE', color: 'border-blue-400/40 text-blue-200' },
  { id: 'TANTRIC', label: 'Tantric / Haṭha', period: 'c. 600–1400 CE', color: 'border-rose-400/40 text-rose-200' },
  { id: 'MODERN', label: 'Modern Overlay', period: '19th–20th Century', color: 'border-emerald-400/40 text-emerald-200' },
  { id: 'UNKNOWN / CONTESTED', label: 'Unknown / Contested', period: 'Scholarly debate', color: 'border-slate-400/40 text-slate-200' }
];

export const VedicSortingSection: React.FC = () => {
  const [concepts, setConcepts] = useState<Concept[]>(INITIAL_CONCEPTS);
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const handleSelectConcept = (concept: Concept) => {
    setSelectedConcept(concept);
    setFeedback(null);
  };

  const handleAssignCategory = (categoryId: Category) => {
    if (!selectedConcept) return;

    const isCorrect = selectedConcept.correctCategory === categoryId;
    const explanation = isCorrect 
      ? `Correct! ${selectedConcept.explanation}` 
      : `Not quite. "${selectedConcept.name}" belongs in ${selectedConcept.correctCategory}. ${selectedConcept.explanation}`;

    setConcepts(prev => prev.map(c => 
      c.id === selectedConcept.id ? { ...c, currentCategory: selectedConcept.correctCategory } : c
    ));

    setFeedback({ isCorrect, text: explanation });
  };

  const handleCloseModal = () => {
    setSelectedConcept(null);
    setFeedback(null);
  };

  const unsortedCount = concepts.filter(c => c.currentCategory === 'UNSORTED').length;

  return (
    <section className="min-h-screen py-24 md:py-32 px-4 sm:px-6 relative flex flex-col items-center bg-gradient-to-b from-[#180033] via-[#220048] to-[#120026]">
      
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-12 md:mb-16 relative z-10 px-4 max-w-3xl">
        <h2 className="text-xs sm:text-sm font-sans tracking-[0.4em] uppercase text-purple-300/80 mb-3 drop-shadow-md">World 05</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide mb-5 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          What Came From The Vedas?
        </h3>
        <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
          Popular culture claims "the Vedas describe the 7 chakras." Tap any concept below to assign it to its authentic historical era.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 relative z-10">
        
        {/* Unsorted Concepts Tray */}
        <div className="lg:col-span-5 bg-[#14002c]/80 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-purple-400/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-400/20">
            <h4 className="font-sans text-xs tracking-[0.3em] text-purple-200 uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400" />
              Unsorted Concepts
            </h4>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
              {unsortedCount} left
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3.5 justify-center flex-grow content-start min-h-[160px]">
            {concepts.filter(c => c.currentCategory === 'UNSORTED').map(concept => (
              <button
                key={concept.id}
                onClick={() => handleSelectConcept(concept)}
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-purple-950/60 hover:bg-purple-800/60 active:scale-95 border border-purple-400/40 hover:border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] rounded-full text-white font-medium text-xs sm:text-sm tracking-wide transition-all cursor-pointer text-center"
              >
                {concept.name}
              </button>
            ))}

            {unsortedCount === 0 && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 size={36} className="text-emerald-400 mb-3" />
                <p className="text-purple-100 font-serif text-lg">All historical concepts mapped!</p>
                <p className="text-white/60 text-xs mt-1">You have pierced the modern myth of the subtle body.</p>
                <button
                  onClick={() => setConcepts(INITIAL_CONCEPTS)}
                  className="mt-5 px-5 py-2 rounded-full border border-purple-400/30 text-xs font-sans tracking-widest text-purple-200 hover:bg-purple-900/30 uppercase transition-all"
                >
                  Reset Exercise
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {CATEGORIES.map(category => {
            const assigned = concepts.filter(c => c.currentCategory === category.id);
            return (
              <div 
                key={category.id} 
                className="bg-[#120028]/70 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-4 sm:p-5 hover:border-purple-400/40 transition-colors shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className={`font-sans text-xs tracking-wider uppercase font-semibold ${category.color.split(' ')[1]}`}>
                      {category.label}
                    </h4>
                    <span className="text-[10px] text-white/50 font-mono">{category.period}</span>
                  </div>
                  <div className="w-full h-px bg-purple-500/20 mb-3" />
                </div>

                <div className="flex flex-wrap gap-2 min-h-[44px] items-center">
                  <AnimatePresence>
                    {assigned.map(concept => (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={concept.id}
                        className="px-3 py-1 bg-purple-900/50 border border-purple-400/50 shadow-[0_0_12px_rgba(192,132,252,0.25)] rounded-full text-white text-xs font-light"
                      >
                        {concept.name}
                      </motion.div>
                    ))}
                    {assigned.length === 0 && (
                      <span className="text-[11px] text-white/30 italic">Empty</span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modern Pop-up / Modal for Concept Assignment & Learning */}
      <AnimatePresence>
        {selectedConcept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#1a0038] border border-purple-400/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(168,85,247,0.35)] z-10 overflow-hidden"
            >
              {/* Top Accent Rim */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-amber-400" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              {!feedback ? (
                <>
                  <div className="text-center mb-6">
                    <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-purple-300">Historical Classification</span>
                    <h3 className="text-3xl sm:text-4xl font-serif text-white mt-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                      {selectedConcept.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-3">
                      Where does this term originate in Indian intellectual history?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleAssignCategory(cat.id)}
                        className={`text-left p-3.5 rounded-xl border bg-purple-950/40 hover:bg-purple-900/60 transition-all hover:scale-[1.02] active:scale-95 group ${cat.color}`}
                      >
                        <div className="font-sans text-xs font-semibold uppercase">{cat.label}</div>
                        <div className="text-[10px] text-white/50 font-mono mt-0.5">{cat.period}</div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-3 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    {feedback.isCorrect ? (
                      <CheckCircle2 size={54} className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]" />
                    ) : (
                      <HelpCircle size={54} className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                    )}
                  </div>

                  <h4 className={`text-xl sm:text-2xl font-serif mb-3 ${feedback.isCorrect ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {feedback.isCorrect ? 'Historically Accurate' : 'Historical Discovery'}
                  </h4>

                  <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md font-light">
                    {feedback.text}
                  </p>

                  <button
                    onClick={handleCloseModal}
                    className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs tracking-widest uppercase rounded-full shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 transition-all"
                  >
                    Continue Journey
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
