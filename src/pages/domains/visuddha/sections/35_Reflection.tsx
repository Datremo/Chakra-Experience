import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ReflectionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'experiment' | 'journal'>('profile');

  const content = {
    profile: {
      title: 'Your Voice Profile',
      body: 'Do you lean toward suppression (The Silent Sufferer) or over-expression (The Dominator)? Most people default to one under stress. \n\nThe Silent Sufferer needs to practice stating needs clearly without apology. \nThe Dominator needs to practice asking open-ended questions and waiting 3 seconds before responding.'
    },
    experiment: {
      title: '7-Day Experiment',
      body: 'For the next 7 days, commit to the "No Unnecessary Apologies" rule. \n\nDo not say "sorry" unless you have actually made a mistake. \nInstead of "Sorry I am late," say "Thank you for waiting." \nInstead of "Sorry to bother you," say "Do you have a moment?" \nNotice how this changes your posture and authority.'
    },
    journal: {
      title: 'The Glass Mirror',
      body: 'Get a journal and answer honestly:\n\n1. What is a truth I have known for months but refused to speak?\n2. Who am I trying to protect by staying silent, and is it actually helping them?\n3. When do I speak just to fill the silence?'
    }
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Integration</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Reflection & Reality</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row gap-12">
        
        {/* Navigation */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {(Object.keys(content) as Array<keyof typeof content>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === key ? 'bg-blue-950/40 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-transparent border-white/5 opacity-50 hover:opacity-100 hover:border-blue-900'
              }`}
            >
              <h3 className={`font-sans text-xs tracking-widest uppercase ${activeTab === key ? 'text-blue-400' : 'text-white'}`}>
                {content[key].title}
              </h3>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="w-full md:w-2/3 relative min-h-[300px] bg-black/40 border border-white/10 rounded-[30px] p-8 md:p-12 overflow-hidden flex items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <h2 className="text-2xl font-serif text-blue-300 mb-6">{content[activeTab].title}</h2>
              <div className="text-white/70 font-light leading-relaxed whitespace-pre-line text-lg">
                {content[activeTab].body}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
