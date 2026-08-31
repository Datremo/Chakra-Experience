import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const TheNameSection: React.FC = () => {
  const data = useVisuddhaData();
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      
      <div className="max-w-3xl w-full z-10 flex flex-col items-center">
        
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-24">The Name</h2>

        {/* Interactive Sanskrit Deconstruction */}
        <div className="relative h-64 w-full flex items-center justify-center mb-16 cursor-pointer" onClick={() => setPhase((p) => (p + 1) % 3 as 0 | 1 | 2)}>
          
          <AnimatePresence mode="wait">
            
            {phase === 0 && (
              <motion.div
                key="full"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="text-7xl md:text-9xl font-serif text-white/90 mb-6">विशुद्ध</div>
                <div className="text-xl md:text-2xl font-sans tracking-[0.5em] text-cyan-400/80 uppercase">Viśuddha</div>
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div
                key="split"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-8 md:gap-16"
              >
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-serif text-cyan-300 mb-4">वि</div>
                  <div className="text-sm font-sans tracking-widest text-cyan-500/60 uppercase mb-2">Vi</div>
                  <div className="text-xs font-sans text-white/40 uppercase">{data.name.vi}</div>
                </div>
                
                <div className="text-3xl text-white/20">+</div>
                
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-serif text-cyan-300 mb-4">शुद्ध</div>
                  <div className="text-sm font-sans tracking-widest text-cyan-500/60 uppercase mb-2">śuddha</div>
                  <div className="text-xs font-sans text-white/40 uppercase">{data.name.shuddha}</div>
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="meaning"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-xl"
              >
                <h3 className="text-3xl font-serif text-white/90 mb-6">{data.name.combined}</h3>
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  {data.name.interpretation}
                </p>
              </motion.div>
            )}

          </AnimatePresence>

          <div className="absolute bottom-0 text-[10px] font-sans tracking-widest text-white/20 uppercase">
            Click to deconstruct
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-serif italic text-cyan-100/70">
            What would "clear expression" mean in your life?
          </p>
        </motion.div>

      </div>
    </section>
  );
};
