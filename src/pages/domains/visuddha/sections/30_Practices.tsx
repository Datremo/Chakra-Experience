import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PracticesSection: React.FC = () => {
  const [activePractice, setActivePractice] = useState<'movement' | 'micro' | 'silence'>('movement');

  const practices = {
    movement: {
      title: 'Physical Release',
      subtitle: 'Neck & Jaw Mobility',
      content: 'Tension in the throat is often physical before it is psychological. \n\n1. Drop your shoulders down and away from your ears.\n2. Gently let your right ear fall toward your right shoulder. Hold for 3 breaths.\n3. Repeat on the left side.\n4. Open your jaw as wide as possible, stretch the tongue out, and exhale forcefully (Lion\'s Breath). This releases the masseter muscles where unspoken words are held.'
    },
    micro: {
      title: '5-Minute Protocol',
      subtitle: 'The Pause Before Speaking',
      content: 'Before a difficult conversation:\n\n1. Arrive: Take three slow breaths.\n2. Relax: Notice the tension in your jaw and throat. consciously soften it.\n3. Notice: What is the actual core truth you need to convey?\n4. Speak: Deliver one honest, necessary, and kind sentence. Stop there.'
    },
    silence: {
      title: 'Silence Practice',
      subtitle: 'Active Listening Lab',
      content: 'For the next hour, do not initiate any conversations.\n\nWhen spoken to, wait a full two seconds after the person stops speaking before you reply.\n\nNotice the urge to fill the space. Notice how much more weight your words carry when they are not rushed.'
    }
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#02050a]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Embodiment</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Viśuddha Practices</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        
        {/* Practice Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(Object.keys(practices) as Array<keyof typeof practices>).map((key) => (
            <button
              key={key}
              onClick={() => setActivePractice(key)}
              className={`px-6 py-3 rounded-full border text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
                activePractice === key
                  ? 'bg-cyan-900/40 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-cyan-500/50'
              }`}
            >
              {practices[key].title}
            </button>
          ))}
        </div>

        {/* Practice Content */}
        <div className="relative min-h-[300px] bg-black/40 border border-white/5 rounded-[40px] p-8 md:p-12 overflow-hidden flex flex-col items-center justify-center text-center">
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePractice}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 max-w-2xl"
            >
              <h3 className="text-2xl font-serif text-cyan-400 mb-2">{practices[activePractice].title}</h3>
              <h4 className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase mb-8">{practices[activePractice].subtitle}</h4>
              
              <div className="text-white/70 font-light leading-relaxed whitespace-pre-line text-lg">
                {practices[activePractice].content}
              </div>
            </motion.div>
          </AnimatePresence>
          
        </div>

      </div>

    </section>
  );
};
