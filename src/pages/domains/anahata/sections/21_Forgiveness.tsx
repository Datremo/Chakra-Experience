import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const ForgivenessSection: React.FC = () => {
  const [isReleased, setIsReleased] = useState(false);
  
  // Dragging the stone
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]); // Stone fades as it moves away
  const backgroundLight = useTransform(x, [-200, 0, 200], [1, 0, 1]); // Light increases as stone moves away

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setIsReleased(true);
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504] overflow-hidden">
      
      {/* Background illumination that brightens when stone is removed */}
      <motion.div 
        className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
        style={{ opacity: isReleased ? 1 : backgroundLight }}
        animate={isReleased ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Burden</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Forgiveness</h1>
      </div>

      <div className="relative w-full max-w-md h-[300px] flex flex-col items-center justify-center z-10 mb-12">
        
        {!isReleased ? (
          <>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={handleDragEnd}
              style={{ x, opacity }}
              whileTap={{ cursor: 'grabbing' }}
              className="w-32 h-32 bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center cursor-grab border border-slate-700/50 relative z-20"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay" />
              <span className="font-sans text-xs tracking-widest text-slate-400 uppercase">Resentment</span>
            </motion.div>

            <motion.p 
              className="absolute bottom-0 text-[10px] text-white/30 font-sans tracking-widest uppercase mt-8"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Drag the stone away
            </motion.p>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-300 shadow-[0_0_50px_#34d399]" />
          </motion.div>
        )}

      </div>

      <div className="max-w-2xl text-center z-10 min-h-[150px]">
        {isReleased ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-xl font-serif text-emerald-100/90 leading-relaxed italic mb-4">
              Forgiveness is not reconciliation.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              Forgiveness does not mean you must allow someone back into your life. It simply means you choose to put down the heavy stone of resentment so that your heart has space to breathe again.
            </p>
          </motion.div>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg font-serif text-white/40 italic">
            Holding onto resentment is like carrying a heavy stone inside your chest.
          </motion.p>
        )}
      </div>

    </section>
  );
};
