import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlockedThroatSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'withholding' | 'fear' | 'over_explaining'>('withholding');

  const blocks = {
    withholding: {
      title: 'Withholding',
      desc: 'You know the truth, but you refuse to speak it.',
      symptom: 'Tightness in the throat, jaw clenching, chronic people-pleasing, resentment.',
      cure: 'Start small. Say "no" to one minor thing today. Speak one small preference aloud.'
    },
    fear: {
      title: 'Fear of Judgment',
      desc: 'You silence yourself because you are afraid of how you will be perceived.',
      symptom: 'Stammering, trailing off at the end of sentences, changing your opinion to match the room.',
      cure: 'Notice the physical sensation of shrinking. Take a deep breath and finish your sentence, even if it feels risky.'
    },
    over_explaining: {
      title: 'Over-Explaining',
      desc: 'You speak too much because you don\'t believe you were heard or understood the first time.',
      symptom: 'Repeating yourself, defensive justification, exhausting conversations.',
      cure: 'State your truth once. Then, close your mouth. Let the silence do the heavy lifting.'
    }
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#01040a]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Obstructions</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Reframing "Blocks"</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row gap-12">
        
        {/* Navigation */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {(Object.keys(blocks) as Array<keyof typeof blocks>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === key ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'bg-transparent border-white/5 opacity-50 hover:opacity-100 hover:border-cyan-900'
              }`}
            >
              <h3 className={`font-sans text-xs tracking-widest uppercase ${activeTab === key ? 'text-cyan-400' : 'text-white'}`}>
                {blocks[key].title}
              </h3>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="w-full md:w-2/3 relative min-h-[300px] bg-black/40 border border-white/10 rounded-3xl p-8 overflow-hidden flex items-center">
          
          {/* Abstract Throat Knot visual */}
          <div className="absolute -right-20 -top-20 w-64 h-64 border-[20px] border-cyan-900/20 rounded-full blur-xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-serif text-white/90 mb-4">{blocks[activeTab].title}</h2>
              <p className="text-lg text-white/70 font-light mb-8">{blocks[activeTab].desc}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest text-red-400 uppercase mb-2">How it manifests</h4>
                  <p className="text-sm text-white/50">{blocks[activeTab].symptom}</p>
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest text-emerald-400 uppercase mb-2">The Antidote</h4>
                  <p className="text-sm text-cyan-100/70">{blocks[activeTab].cure}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
