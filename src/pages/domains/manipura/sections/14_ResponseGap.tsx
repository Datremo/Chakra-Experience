import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FlowState = 'TRIGGER' | 'HEAT' | 'IMPULSE' | 'PAUSE' | 'CHOICE';
type ChoiceAction = 'REACT' | 'SUPPRESS' | 'AVOID' | 'RESPOND';

export const ResponseGapSection: React.FC = () => {
  const [flowState, setFlowState] = useState<FlowState>('TRIGGER');
  const [selectedChoice, setSelectedChoice] = useState<ChoiceAction | null>(null);

  const reset = () => {
    setFlowState('TRIGGER');
    setSelectedChoice(null);
  };

  useEffect(() => {
    let t1: number, t2: number, t3: number;
    
    if (flowState === 'TRIGGER') {
      t1 = setTimeout(() => setFlowState('HEAT'), 1500);
    } else if (flowState === 'HEAT') {
      t2 = setTimeout(() => setFlowState('IMPULSE'), 1500);
    } else if (flowState === 'IMPULSE') {
      // Screen freezes automatically
      t3 = setTimeout(() => setFlowState('PAUSE'), 1500);
    }
    
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [flowState]);

  // Effects based on choice
  const getFireClass = () => {
    if (!selectedChoice) {
      if (flowState === 'HEAT') return 'bg-orange-600 scale-110 blur-md';
      if (flowState === 'IMPULSE') return 'bg-red-600 scale-125 blur-lg';
      if (flowState === 'PAUSE') return 'bg-amber-600 scale-100 blur-sm';
      return 'bg-amber-800 scale-90 blur-sm'; // Trigger
    }
    
    switch (selectedChoice) {
      case 'REACT': return 'bg-red-500 scale-150 blur-xl animate-pulse';
      case 'SUPPRESS': return 'bg-gray-700 scale-50 blur-none';
      case 'AVOID': return 'bg-amber-900/50 scale-100 blur-2xl translate-x-32';
      case 'RESPOND': return 'bg-amber-400 scale-100 blur-sm shadow-[0_0_40px_#f59e0b]';
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#020101] relative flex flex-col items-center justify-center overflow-hidden">
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-6">The Gap</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50">Between Stimulus and Response</h1>
        </div>

        {/* Central Visualization Area */}
        <div className="relative w-full h-64 mb-16 flex flex-col items-center justify-center">
          
          {/* Fire Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-32 h-32 rounded-full transition-all duration-1000 ${getFireClass()}`} />
          </div>

          <AnimatePresence mode="wait">
            {!selectedChoice ? (
              <motion.div
                key={flowState}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute z-10 flex flex-col items-center"
              >
                {flowState === 'TRIGGER' && (
                  <p className="font-sans tracking-[0.4em] uppercase text-xl text-white">TRIGGER</p>
                )}
                {flowState === 'HEAT' && (
                  <div className="text-center">
                    <p className="font-sans tracking-[0.4em] uppercase text-2xl text-orange-200 mb-2">HEAT</p>
                    <p className="text-sm font-light text-orange-200/50">Somatic sensation rises</p>
                  </div>
                )}
                {flowState === 'IMPULSE' && (
                  <div className="text-center">
                    <p className="font-sans tracking-[0.5em] uppercase text-4xl text-red-100 mb-2 font-bold">IMPULSE</p>
                    <p className="text-sm font-light text-red-200/50">The urge to act immediately</p>
                  </div>
                )}
                {flowState === 'PAUSE' && (
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6 bg-black/50 backdrop-blur-md">
                      <div className="flex gap-2">
                        <div className="w-2 h-6 bg-white rounded-sm" />
                        <div className="w-2 h-6 bg-white rounded-sm" />
                      </div>
                    </div>
                    <p className="font-sans tracking-[0.6em] uppercase text-5xl text-white font-black mb-4">PAUSE</p>
                    <button 
                      onClick={() => setFlowState('CHOICE')}
                      className="px-6 py-2 border border-white/30 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors tracking-widest text-sm"
                    >
                      Make a Choice
                    </button>
                  </div>
                )}
                {flowState === 'CHOICE' && (
                  <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-16">
                    <ChoiceBtn action="REACT" onClick={() => setSelectedChoice('REACT')} desc="Immediate explosion" />
                    <ChoiceBtn action="SUPPRESS" onClick={() => setSelectedChoice('SUPPRESS')} desc="Swallow the heat" />
                    <ChoiceBtn action="AVOID" onClick={() => setSelectedChoice('AVOID')} desc="Drift away" />
                    <ChoiceBtn action="RESPOND" onClick={() => setSelectedChoice('RESPOND')} desc="Conscious action" highlight />
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute z-10 flex flex-col items-center bg-black/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
              >
                <h3 className={`text-3xl font-serif mb-4 uppercase tracking-widest
                  ${selectedChoice === 'REACT' ? 'text-red-400' : selectedChoice === 'SUPPRESS' ? 'text-gray-400' : selectedChoice === 'AVOID' ? 'text-amber-700' : 'text-amber-400'}
                `}>
                  {selectedChoice}
                </h3>
                
                <p className="text-white/70 text-lg mb-8 max-w-sm text-center">
                  {selectedChoice === 'REACT' && "Fire explodes. The structure burns. The energy is spent rapidly and destructively."}
                  {selectedChoice === 'SUPPRESS' && "The fire is starved of oxygen. It turns to smoke, lingering internally."}
                  {selectedChoice === 'AVOID' && "The fire drifts unfocused, achieving nothing, warming nothing."}
                  {selectedChoice === 'RESPOND' && "The fire stabilizes. You use the heat to forge a deliberate action."}
                </p>

                <button 
                  onClick={reset}
                  className="text-white/40 hover:text-white tracking-[0.2em] text-xs uppercase underline underline-offset-8 transition-colors"
                >
                  Restart Sequence
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          className="mt-24 text-center border-t border-amber-900/30 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-serif text-amber-200/80 italic">
            "Between stimulus and response, there is a space."
          </p>
          <p className="text-amber-500/50 mt-4 text-sm font-light">
            True power is not the absence of the impulse, but the ability to pause inside it.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

const ChoiceBtn: React.FC<{ action: string, desc: string, onClick: () => void, highlight?: boolean }> = ({ action, desc, onClick, highlight }) => (
  <button 
    onClick={onClick}
    className={`p-4 border rounded-xl text-left transition-all duration-300
      ${highlight ? 'border-amber-500/50 hover:bg-amber-500/20' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}
    `}
  >
    <div className={`font-sans tracking-widest text-sm mb-1 ${highlight ? 'text-amber-400' : 'text-white'}`}>{action}</div>
    <div className="text-xs text-white/40">{desc}</div>
  </button>
);
