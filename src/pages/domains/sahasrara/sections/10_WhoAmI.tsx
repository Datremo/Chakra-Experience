import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IDENTITY_LAYERS = [
  'NAME', 'BODY', 'AGE', 'FAMILY', 'CAREER', 
  'ACHIEVEMENT', 'FAILURE', 'MEMORY', 'PERSONALITY', 
  'BELIEF', 'DESIRE', 'FEAR', 'RELATIONSHIP', 'SPIRITUAL IDENTITY'
];

export const WhoAmISection: React.FC = () => {
  const [layers, setLayers] = useState(IDENTITY_LAYERS);
  const [answer, setAnswer] = useState('');
  const [saved, setSaved] = useState(false);

  const handleDragEnd = (event: any, info: any, layer: string) => {
    // If dragged far enough in any direction, remove it
    const distance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    if (distance > 100) {
      setLayers(prev => prev.filter(l => l !== layer));
    }
  };

  const handleSave = () => {
    if (answer.trim()) {
      localStorage.setItem('sahasrara_who_am_i', answer);
      setSaved(true);
    }
  };

  const isComplete = layers.length === 0;

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-[#0f0026] overflow-hidden">
      
      <div className="text-center mb-16 z-20 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/30 mb-4">World 10</h2>
        {!isComplete ? (
          <>
            <p className="text-white/70 font-light max-w-xl mx-auto mb-4">
              In the Sahasrāra, the individual identity dissolves. If you are not your body, and not your memories, what remains?
            </p>
            <p className="text-purple-300/80 font-sans tracking-widest text-xs uppercase animate-pulse">
              Drag away everything that is temporary.
            </p>
          </>
        ) : (
          <p className="text-white/40 font-light italic">When all labels are removed, the core is revealed.</p>
        )}
      </div>

      <div className="relative w-full max-w-2xl h-[500px] flex items-center justify-center">
        
        {/* Silhouette / The "I" */}
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div 
              key="silhouette"
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Abstract human shape / subtle light */}
              <div className="w-32 h-64 bg-purple-500/10 rounded-[100%] blur-xl" />
            </motion.div>
          ) : (
            <motion.div 
              key="who"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-30"
            >
              <h3 className="text-6xl md:text-8xl font-serif text-white tracking-[0.2em] mb-12 drop-shadow-[0_0_20px_white]">
                I
              </h3>
              <h4 className="text-2xl md:text-4xl font-serif text-white/50 tracking-widest mb-12">
                WHO?
              </h4>
              
              {!saved ? (
                <div className="w-full max-w-md px-6 flex flex-col items-center">
                  <input 
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Write..."
                    className="w-full bg-transparent border-b border-purple-400/30 text-white text-center py-4 font-serif text-xl focus:outline-none focus:border-white/60 mb-8"
                  />
                  <button 
                    onClick={handleSave}
                    className="px-8 py-3 border border-purple-400/30 rounded-full text-xs font-sans tracking-[0.3em] uppercase text-white/60 hover:text-white hover:border-white transition-colors"
                  >
                    Keep
                  </button>
                </div>
              ) : (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/40 font-light italic"
                >
                  Recorded in the self.
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Layers */}
        <AnimatePresence>
          {!isComplete && layers.map((layer, idx) => {
            // Distribute them in a circle
            const angle = (idx / IDENTITY_LAYERS.length) * Math.PI * 2;
            const radius = 150;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={layer}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onDragEnd={(e, info) => handleDragEnd(e, info, layer)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                exit={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
                whileHover={{ scale: 1.1, color: 'white' }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-white/40 cursor-grab active:cursor-grabbing select-none px-4 py-2 bg-[#0b001a]/50 backdrop-blur-sm border border-purple-500/20 rounded-full"
              >
                {layer}
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>

    </section>
  );
};
