import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';

export const SymptomsAndHealingSection: React.FC = () => {
  const data = useAnahataData();
  const [activeTab, setActiveTab] = useState<'deficient' | 'excessive' | 'balanced'>('deficient');

  const getThemeClasses = (tab: string) => {
    switch(tab) {
      case 'deficient': return {
        btnActive: 'bg-slate-900/40 border-slate-400 text-slate-100 shadow-[0_0_15px_rgba(148,163,184,0.3)] scale-105',
        container: 'bg-slate-950/10 border-slate-900/30',
        title: 'text-slate-300',
        subtitle: 'text-slate-500',
        dot: 'bg-slate-400/50',
        box: 'bg-slate-900/20 border-slate-500/20'
      };
      case 'excessive': return {
        btnActive: 'bg-rose-900/40 border-rose-400 text-rose-100 shadow-[0_0_15px_rgba(251,113,133,0.3)] scale-105',
        container: 'bg-rose-950/10 border-rose-900/30',
        title: 'text-rose-300',
        subtitle: 'text-rose-500',
        dot: 'bg-rose-400/50',
        box: 'bg-rose-900/20 border-rose-500/20'
      };
      case 'balanced': default: return {
        btnActive: 'bg-emerald-900/40 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(52,211,153,0.3)] scale-105',
        container: 'bg-emerald-950/10 border-emerald-900/30',
        title: 'text-emerald-300',
        subtitle: 'text-emerald-500',
        dot: 'bg-emerald-400/50',
        box: 'bg-emerald-900/20 border-emerald-500/20'
      };
    }
  };

  const theme = getThemeClasses(activeTab);
  const activeData = data.symptoms[activeTab];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Diagnostics</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Symptoms of Imbalance</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          The emotional heart can become misaligned in two primary directions: tightly closed (deficient) or completely unbounded (excessive).
        </p>
      </div>

      <div className="w-full max-w-4xl z-10">
        
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          {(['deficient', 'excessive', 'balanced'] as const).map((tab) => {
            const isActive = activeTab === tab;
            const tabTheme = getThemeClasses(tab);
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full font-sans tracking-[0.2em] text-xs uppercase transition-all duration-300 border ${
                  isActive
                    ? tabTheme.btnActive
                    : `bg-black/30 border-white/5 text-white/40 hover:border-white/20`
                }`}
              >
                {data.symptoms[tab].title.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className={`p-8 md:p-12 rounded-3xl border backdrop-blur-sm transition-colors duration-500 ${theme.container}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              
              <div className="flex flex-col">
                <h3 className={`text-2xl font-serif mb-4 ${theme.title}`}>{activeData.title}</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">{activeData.description}</p>
                
                <h4 className={`font-sans text-xs tracking-widest uppercase mb-4 ${theme.subtitle}`}>Symptoms</h4>
                <ul className="space-y-3">
                  {activeData.symptoms.map((sym, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <div className={`w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 ${theme.dot}`} />
                      <span className="leading-relaxed">{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-2xl border h-fit ${theme.box}`}>
                <h4 className={`font-sans text-xs tracking-widest uppercase mb-4 ${theme.subtitle}`}>
                  {activeTab === 'balanced' ? 'Maintenance' : 'How to Fix It'}
                </h4>
                <ul className="space-y-4">
                  {activeData.howToFix.map((fix, i) => (
                    <li key={i} className="flex gap-3 text-white/80 text-sm">
                      <span className={`font-sans ${theme.subtitle}`}>{i + 1}.</span>
                      <span className="leading-relaxed">{fix}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
