import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type InputType = 'FOOD' | 'INFORMATION' | 'EMOTION' | 'EXPERIENCE';

export const AgniDigestionSection: React.FC = () => {
  const [digesting, setDigesting] = useState<InputType | null>(null);
  const [completed, setCompleted] = useState<InputType[]>([]);
  const stomachRef = useRef<HTMLDivElement>(null);

  const inputs = [
    { id: 'FOOD', label: 'Physical Food' },
    { id: 'INFORMATION', label: 'News / Media' },
    { id: 'EMOTION', label: 'Unprocessed Anger' },
    { id: 'EXPERIENCE', label: 'A Difficult Conversation' },
  ];

  const handleDragEnd = (e: any, info: any, type: InputType) => {
    if (!stomachRef.current) return;
    
    const rect = stomachRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    
    if (dist < 120 && !digesting) {
      setDigesting(type);
      
      // Simulate digestion process
      setTimeout(() => {
        setDigesting(null);
        if (!completed.includes(type)) {
          setCompleted(prev => [...prev, type]);
        }
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#040100] relative flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Interactive Area */}
        <div className="flex-1 w-full relative h-[600px] flex flex-col items-center justify-between">
          
          <div className="text-center w-full">
            <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Metabolism</h2>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-2">We Digest Everything</h1>
            <p className="text-amber-200/50 font-light italic">
              Drag inputs into the solar plexus.
            </p>
          </div>

          {/* Inputs Row */}
          <div className="flex flex-wrap justify-center gap-4 w-full z-20">
            {inputs.map(input => {
              const isProcessing = digesting === input.id;
              const isDone = completed.includes(input.id as InputType) && !isProcessing;
              
              return (
                <motion.div
                  key={input.id}
                  drag={!digesting}
                  dragSnapToOrigin
                  onDragEnd={(e, info) => handleDragEnd(e, info, input.id as InputType)}
                  className={`px-4 py-2 rounded-full border text-sm font-sans tracking-widest uppercase cursor-grab active:cursor-grabbing transition-all
                    ${isProcessing ? 'opacity-0 scale-50' : 
                      isDone ? 'bg-amber-900/20 border-amber-500/30 text-amber-500/50 line-through' :
                      'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border-amber-500/50 text-amber-200 hover:bg-amber-900/30'}
                  `}
                  style={{ touchAction: "none" }}
                >
                  {input.label}
                </motion.div>
              );
            })}
          </div>

          {/* Stomach/Digestive Fire Area */}
          <div 
            ref={stomachRef}
            className="relative w-64 h-64 mt-12 flex items-center justify-center"
          >
            {/* The Fire */}
            <motion.div 
              animate={{ 
                scale: digesting ? [1, 1.2, 0.9, 1.1] : [1, 1.05, 1],
                filter: digesting ? 'blur(15px)' : 'blur(5px)',
                backgroundColor: digesting ? '#ea580c' : '#d97706'
              }}
              transition={{ duration: digesting ? 0.3 : 2, repeat: Infinity }}
              className="absolute w-48 h-48 rounded-full opacity-60 mix-blend-screen"
            />
            
            {/* Silhouetted body context (abstract) */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
              <path d="M50 0 C50 50 20 100 50 200 M150 0 C150 50 180 100 150 200" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" />
            </svg>

            {/* Digestion Status */}
            <AnimatePresence>
              {digesting && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 2 }}
                  className="absolute font-serif text-2xl text-white tracking-widest uppercase"
                >
                  Processing...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right: Explanation Panel */}
        <div className="flex-1 w-full flex flex-col justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            {!digesting && completed.length === 0 ? (
              <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-2xl font-serif text-amber-200/80 italic leading-relaxed mb-6">
                  "Agni is not merely stomach acid. It is the intelligence that transforms the external into the internal."
                </p>
                <p className="text-amber-100/60 font-light leading-relaxed">
                  Ayurveda and Yoga teach that we do not just metabolize food. We metabolize everything we take in through the senses.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={digesting || 'done'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/50 p-8 rounded-3xl backdrop-blur-sm"
              >
                {digesting === 'FOOD' && (
                  <>
                    <h3 className="text-3xl font-serif text-amber-400 mb-4">Physical Digestion</h3>
                    <p className="text-amber-100/80 font-light leading-relaxed">
                      Extracting nutrients and discarding waste. When Agni is weak, food becomes toxic (Ama). When balanced, it builds vital tissue.
                    </p>
                  </>
                )}
                {digesting === 'INFORMATION' && (
                  <>
                    <h3 className="text-3xl font-serif text-orange-400 mb-4">Mental Digestion</h3>
                    <p className="text-amber-100/80 font-light leading-relaxed">
                      Every article, doom-scroll, and news alert must be processed. Information overload extinguishes the mental fire, leading to brain fog and overwhelm.
                    </p>
                  </>
                )}
                {digesting === 'EMOTION' && (
                  <>
                    <h3 className="text-3xl font-serif text-red-400 mb-4">Emotional Digestion</h3>
                    <p className="text-amber-100/80 font-light leading-relaxed">
                      Unexpressed anger and grief settle in the body. The solar plexus tightens. Strong Agni allows us to feel, process, and release heavy emotions.
                    </p>
                  </>
                )}
                {digesting === 'EXPERIENCE' && (
                  <>
                    <h3 className="text-3xl font-serif text-yellow-400 mb-4">Experiential Digestion</h3>
                    <p className="text-amber-100/80 font-light leading-relaxed">
                      Extracting wisdom from life events. When we fail to 'digest' an experience, we repeat the same patterns. When digested, experience becomes insight.
                    </p>
                  </>
                )}
                {!digesting && completed.length > 0 && (
                  <>
                    <h3 className="text-3xl font-serif text-amber-500 mb-4">Integration</h3>
                    <p className="text-amber-100/80 font-light leading-relaxed mb-4">
                      The fire in the belly handles it all. Protect your fire by being mindful of what you put into it.
                    </p>
                    <p className="font-sans text-xs tracking-widest text-amber-500/50 uppercase">
                      Feed the fire what it can burn.
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
