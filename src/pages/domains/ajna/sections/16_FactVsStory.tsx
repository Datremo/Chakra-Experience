import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FactVsStorySection: React.FC = () => {
  const [selectedStatement, setSelectedStatement] = useState<number | null>(null);
  
  const statements = [
    { id: 1, text: "They haven't texted back in 4 hours.", type: 'fact', explanation: "A measurable observation." },
    { id: 2, text: "They are probably busy at work.", type: 'inference', explanation: "A logical deduction based on past behavior or time of day, but not proven." },
    { id: 3, text: "They are avoiding me because they are mad.", type: 'assumption', explanation: "A story projected onto reality, fueled by insecurity." },
    { id: 4, text: "I feel a tightness in my chest.", type: 'fact', explanation: "A direct somatic experience." },
    { id: 5, text: "My intuition says they are lying.", type: 'assumption', explanation: "Often, what we call 'intuition' is just fear or trauma trying to protect us." }
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Discernment</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Fact vs. Story</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          The mind is a relentless meaning-making machine. It constantly weaves raw data into narratives. True sight requires separating the two.
        </p>
      </div>

      <div className="w-full max-w-5xl relative z-10 flex flex-col md:flex-row items-start justify-center gap-12">
        
        {/* Statements List */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="font-sans text-xs tracking-widest text-white/30 uppercase mb-4 text-center md:text-left">The Data</h3>
          {statements.map(stmt => (
            <button
              key={stmt.id}
              onClick={() => setSelectedStatement(stmt.id)}
              className={`p-4 text-left border rounded-xl transition-all duration-300 ${
                selectedStatement === stmt.id 
                  ? 'border-indigo-400 bg-indigo-500/10 text-white' 
                  : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <p className="font-light">{stmt.text}</p>
            </button>
          ))}
        </div>

        {/* Analysis Panel */}
        <div className="w-full md:w-1/2 min-h-[300px] border border-white/10 rounded-2xl bg-white/5 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400 opacity-20" />

          {selectedStatement ? (
            <motion.div 
              key={selectedStatement}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase mb-6 ${
                statements.find(s => s.id === selectedStatement)?.type === 'fact' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                statements.find(s => s.id === selectedStatement)?.type === 'inference' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}>
                {statements.find(s => s.id === selectedStatement)?.type}
              </div>
              
              <h4 className="text-xl font-serif text-white mb-4">
                "{statements.find(s => s.id === selectedStatement)?.text}"
              </h4>
              
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {statements.find(s => s.id === selectedStatement)?.explanation}
              </p>
            </motion.div>
          ) : (
            <div className="text-center text-white/30 font-light">
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif italic">?</span>
              </div>
              Select a statement to analyze its nature.
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
