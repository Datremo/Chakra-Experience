import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HowDoYouKnowSection: React.FC = () => {
  const [stage, setStage] = useState(0);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Certainty</h2>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div 
              key="stage0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-12">
                "I just know."
              </h1>
              
              <p className="text-white/50 font-light max-w-md mb-12">
                We often confuse strong emotion with deep intuition. When you feel absolutely, undeniably certain about something without evidence...
              </p>

              <button 
                onClick={() => setStage(1)}
                className="w-48 h-48 rounded-full border-2 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400 flex items-center justify-center group transition-all"
              >
                <span className="font-sans text-xs tracking-widest text-indigo-300 uppercase group-hover:scale-110 transition-transform">
                  How do you know?
                </span>
              </button>
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div 
              key="stage1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center w-full"
            >
              <h3 className="text-2xl font-serif text-white mb-12">Which of these is speaking?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <button onClick={() => setStage(2)} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-left group">
                  <h4 className="font-sans text-xs tracking-widest text-amber-400 uppercase mb-2">Past Trauma</h4>
                  <p className="text-white/50 font-light text-sm group-hover:text-white/70 transition-colors">"I recognize this pattern. I need to protect myself before it happens again."</p>
                </button>
                
                <button onClick={() => setStage(2)} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-left group">
                  <h4 className="font-sans text-xs tracking-widest text-rose-400 uppercase mb-2">Deep Desire</h4>
                  <p className="text-white/50 font-light text-sm group-hover:text-white/70 transition-colors">"I want this to be true so badly that I am convinced it is destiny."</p>
                </button>

                <button onClick={() => setStage(2)} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-left group">
                  <h4 className="font-sans text-xs tracking-widest text-emerald-400 uppercase mb-2">Social Conditioning</h4>
                  <p className="text-white/50 font-light text-sm group-hover:text-white/70 transition-colors">"This is what I was taught is right, so anything else feels inherently wrong."</p>
                </button>

                <button onClick={() => setStage(2)} className="p-6 border border-indigo-500/30 rounded-2xl bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors text-left group relative overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h4 className="font-sans text-xs tracking-widest text-indigo-300 uppercase mb-2 relative z-10">True Intuition</h4>
                  <p className="text-white/50 font-light text-sm group-hover:text-white/70 transition-colors relative z-10">"A quiet, neutral knowing. It doesn't shout. It isn't frantic. It just is."</p>
                </button>
              </div>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div 
              key="stage2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center max-w-lg"
            >
              <div className="w-16 h-16 border border-indigo-400/50 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <div className="w-2 h-2 bg-indigo-300 rounded-full" />
              </div>
              
              <h3 className="text-2xl font-serif text-white mb-6">The Quiet Witness</h3>
              <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                True intuition is rarely dramatic. It does not carry the electric charge of fear, nor the desperate pull of desire. 
                <br/><br/>
                If the voice in your head is frantic, it is usually just your survival instinct wearing a spiritual mask.
              </p>
              
              <button 
                onClick={() => setStage(0)}
                className="text-[10px] uppercase font-sans tracking-widest text-white/30 hover:text-white transition-colors"
              >
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>

    </section>
  );
};
