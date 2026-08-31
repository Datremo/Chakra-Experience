import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ReceivingPracticeSection: React.FC = () => {
  const [isReceived, setIsReceived] = useState(false);
  const [showResistMessage, setShowResistMessage] = useState(false);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Challenge</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Learning to Receive</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          Many find it much easier to give than to receive. Receiving requires lowering the shield.
        </p>
      </div>

      <div className="relative w-full max-w-md h-[400px] flex flex-col items-center justify-center z-10 mb-12">
        
        {/* The Gift (Floating Light) */}
        <AnimatePresence>
          {!isReceived && (
            <motion.button
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1 }
              }}
              onClick={() => setIsReceived(true)}
              onHoverStart={() => setShowResistMessage(true)}
              onHoverEnd={() => setShowResistMessage(false)}
              className="relative w-24 h-24 rounded-full flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-emerald-400 rounded-full blur-[30px] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-8 h-8 bg-white rounded-full shadow-[0_0_20px_#fff]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* The Receiver (The User's Heart) */}
        <motion.div
          className="absolute bottom-10 w-32 h-32 rounded-full border border-emerald-900/50 flex items-center justify-center"
          animate={{ 
            borderColor: isReceived ? 'rgba(16,185,129,0.8)' : 'rgba(2,44,34,0.5)',
            boxShadow: isReceived ? 'inset 0 0 50px rgba(16,185,129,0.4)' : 'none'
          }}
          transition={{ duration: 1 }}
        >
          {isReceived && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
              className="w-16 h-16 bg-emerald-300 rounded-full blur-md"
            />
          )}
        </motion.div>

        {/* Hover/Resist text */}
        <AnimatePresence>
          {showResistMessage && !isReceived && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-10 text-xs font-sans tracking-widest text-emerald-500/70 uppercase"
            >
              Notice the urge to deflect. Just click to receive.
            </motion.p>
          )}
        </AnimatePresence>

      </div>

      <div className="h-32 text-center max-w-xl z-10">
        <AnimatePresence mode="wait">
          {isReceived ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xl font-serif text-emerald-100/90 leading-relaxed italic mb-4">
                "Thank you."
              </p>
              <p className="text-white/60 font-light leading-relaxed">
                You do not need to immediately pay it back. You do not need to diminish the compliment. You can simply say "thank you" and let the warmth in.
              </p>
            </motion.div>
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-sans tracking-widest uppercase text-white/30">
              Click the light to accept it.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
