import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BodyLayersSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'anatomy' | 'traditional' | 'modern'>('traditional');

  const layers = {
    anatomy: {
      title: 'PHYSICAL ANATOMY',
      description: 'The biological structures of the neck: vocal cords, larynx, thyroid gland, and trachea. Tangible, measurable, and studied by medical science.',
      color: 'text-slate-400',
      border: 'border-slate-500/30'
    },
    traditional: {
      title: 'TRADITIONAL SUBTLE BODY',
      description: 'A conceptual focal point used in yogic meditation. Visualized as a 16-petaled lotus at the base of the throat, serving as a locus for subtle sound (Nāda) and the element of space.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    modern: {
      title: 'MODERN VISUALIZATION',
      description: 'A glowing blue energetic sphere mapped onto psychological traits like truth-telling, self-expression, and setting verbal boundaries.',
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#01040a]">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Models</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Three Ways to Look at the Throat</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12 z-10">
        
        {/* Left: Controls */}
        <div className="flex flex-col gap-4 md:w-1/3">
          {(Object.keys(layers) as Array<keyof typeof layers>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveLayer(key)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border ${
                activeLayer === key 
                  ? `bg-black/50 ${layers[key].border}` 
                  : 'bg-transparent border-transparent hover:border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <h3 className={`font-sans text-xs tracking-widest uppercase mb-2 ${layers[key].color}`}>
                {layers[key].title}
              </h3>
            </button>
          ))}
        </div>

        {/* Right: Visualization & Content */}
        <div className="md:w-2/3 relative min-h-[400px] flex items-center justify-center p-8 rounded-3xl border border-white/5 bg-black/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              
              {/* Abstract Visual Representation */}
              <div className="w-48 h-48 relative flex items-center justify-center shrink-0">
                {activeLayer === 'anatomy' && (
                  <div className="text-slate-600">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M8 6h8M6 10h12M8 14h8M10 18h4" />
                    </svg>
                  </div>
                )}
                {activeLayer === 'traditional' && (
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full border border-cyan-500/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-cyan-400/60" />
                    </div>
                    {/* Simulated Petals */}
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute top-1/2 left-1/2 w-1 h-4 bg-cyan-600/30 origin-bottom"
                        style={{ transform: `translate(-50%, -100%) rotate(${i * (360/16)}deg) translateY(-16px)` }}
                      />
                    ))}
                  </div>
                )}
                {activeLayer === 'modern' && (
                  <div className="w-32 h-32 rounded-full bg-blue-500/20 blur-xl shadow-[0_0_50px_rgba(59,130,246,0.5)]" />
                )}
              </div>

              {/* Text Description */}
              <div>
                <h3 className={`text-2xl font-serif mb-4 ${layers[activeLayer].color}`}>
                  {layers[activeLayer].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {layers[activeLayer].description}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      
      <div className="mt-16 text-center z-10">
        <p className="font-serif italic text-white/40 max-w-2xl text-sm">
          "These are different explanatory models and should not be treated as identical. A sore throat is a matter of anatomy, not a lack of spiritual authenticity."
        </p>
      </div>

    </section>
  );
};
