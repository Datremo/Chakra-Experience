import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DailyPracticesSection: React.FC = () => {
  const [activePractice, setActivePractice] = useState<number | null>(null);

  const practices = [
    {
      id: 1,
      title: "Digital Fasting",
      description: "The Third Eye is overwhelmed by constant, rapid-fire imagery (scrolling). Spend the first and last hour of your day without screens to let your mind process its own imagery."
    },
    {
      id: 2,
      title: "First Instinct Tracking",
      description: "When faced with a minor choice (what to eat, which route to take), act immediately on your first neutral instinct before logic can argue with it. Build trust in the quiet voice."
    },
    {
      id: 3,
      title: "Notice the Observer",
      description: "When you are angry, say 'I am observing anger' instead of 'I am angry.' This simple linguistic shift creates the necessary space between the seer and the seen."
    },
    {
      id: 4,
      title: "Pineal Care (Sleep)",
      description: "The physical anchor of the brow center regulates circadian rhythms. Prioritize absolute darkness while sleeping to optimize melatonin production and deep REM sleep."
    }
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Integration</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Daily Sight</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Opening the third eye is not a mystical event; it is a daily habit of clarity, boundary-setting, and rest.
        </p>
      </div>

      <div className="w-full max-w-4xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {practices.map(practice => (
          <div 
            key={practice.id}
            className={`border rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${activePractice === practice.id ? 'bg-indigo-900/20 border-indigo-500/50' : 'bg-white/5 border-white/10 hover:border-indigo-500/30'}`}
            onClick={() => setActivePractice(activePractice === practice.id ? null : practice.id)}
          >
            <div className="p-6 md:p-8 flex items-center justify-between">
              <h3 className={`text-xl font-serif transition-colors ${activePractice === practice.id ? 'text-indigo-300' : 'text-white/80'}`}>
                {practice.title}
              </h3>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${activePractice === practice.id ? 'border-indigo-400 text-indigo-400' : 'border-white/20 text-white/40'}`}>
                {activePractice === practice.id ? '−' : '+'}
              </div>
            </div>
            
            <AnimatePresence>
              {activePractice === practice.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-8 md:px-8"
                >
                  <p className="text-white/60 font-light leading-relaxed text-sm">
                    {practice.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

      </div>

    </section>
  );
};
