import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MeditativeExperiencesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lights' | 'visions' | 'grounding'>('lights');

  const content = {
    lights: {
      title: "Seeing Colors & Lights",
      text: "During deep meditation, it is common to see swirling colors, usually indigo or violet, or a bright white point. While beautiful, tradition warns against becoming attached to these visuals. They are signposts on the road, not the destination itself."
    },
    visions: {
      title: "Visions & Prophecies",
      text: "The subconscious is highly creative. When the waking mind quiets, the brain may generate intense imagery. Treat these as you would a dream—as psychological mirrors, not literal prophecies of the future."
    },
    grounding: {
      title: "The Necessity of Grounding",
      text: "If you experience dizziness, dissociation, or anxiety after third-eye meditation, you are ungrounded. Stop focusing upward. Eat root vegetables, walk barefoot on grass, and reconnect with the Muladhara (Root) chakra."
    }
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Phenomena</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Meditative Experiences</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Navigation */}
        <div className="flex space-x-4 md:space-x-8 mb-12">
          {(['lights', 'visions', 'grounding'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-sans text-xs tracking-widest uppercase transition-all border-b-2 ${
                activeTab === tab ? 'border-indigo-500 text-white' : 'border-transparent text-white/40 hover:text-white/70'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="h-64 flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl px-6"
            >
              <h3 className="text-2xl font-serif text-indigo-300 mb-6">{content[activeTab].title}</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg">
                {content[activeTab].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Visualizer based on tab */}
        <div className="w-full h-32 relative flex justify-center items-center pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'lights' && (
              <motion.div key="lights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-indigo-500/30 rounded-full blur-[20px] animate-pulse" />
              </motion.div>
            )}
            {activeTab === 'visions' && (
              <motion.div key="visions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex justify-center items-center">
                 <div className="w-16 h-16 border-2 border-white/20 rotate-45 animate-spin-slow" />
              </motion.div>
            )}
            {activeTab === 'grounding' && (
              <motion.div key="grounding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex justify-center items-end pb-8">
                 <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
