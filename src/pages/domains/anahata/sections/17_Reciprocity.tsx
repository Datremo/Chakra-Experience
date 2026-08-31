import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ReciprocitySection: React.FC = () => {
  const [giveRate, setGiveRate] = useState(50);
  const [receiveRate, setReceiveRate] = useState(50);
  
  // Calculate internal reserve based on the balance of giving and receiving.
  // 50/50 is perfect balance (reserve stays full). 
  // High give / low receive = drains reserve.
  // Low give / high receive = stagnates (we'll represent visually).
  const balance = receiveRate - giveRate; 
  const reserveLevel = Math.max(10, Math.min(100, 50 + balance));
  
  const getStatusText = () => {
    if (giveRate > 80 && receiveRate < 30) return "Depletion / Over-giving";
    if (receiveRate > 80 && giveRate < 30) return "Stagnation / Withholding";
    if (Math.abs(balance) < 20) return "Healthy Reciprocity";
    return "Imbalanced Flow";
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020705] overflow-hidden">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Exchange</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Reciprocity</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          The heart is a pump. It must pull blood in before it can push blood out. If you only exhale, you run out of breath. If you only give, you run out of self.
        </p>
      </div>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center z-10 mb-16">
        
        {/* Receiving Stream */}
        <div className="flex flex-col items-center">
          <label className="font-sans text-xs tracking-widest uppercase text-teal-400 mb-4">Receiving</label>
          <input 
            type="range" 
            min="0" max="100" 
            value={receiveRate}
            onChange={(e) => setReceiveRate(Number(e.target.value))}
            className="w-32 accent-teal-500"
          />
          <div className="h-32 mt-8 relative w-8 flex justify-center">
            {/* Visual particles flowing IN */}
            <motion.div 
              className="absolute w-2 bg-teal-500/50 rounded-full"
              animate={{ top: ['100%', '0%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2 - (receiveRate/100), repeat: Infinity, ease: "linear" }}
              style={{ height: `${receiveRate}%`, opacity: receiveRate / 100 }}
            />
          </div>
        </div>

        {/* Central Reserve (The Heart) */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-32 h-32 rounded-full border-2 border-emerald-900/50 flex items-center justify-center relative overflow-hidden"
            animate={{ 
              boxShadow: Math.abs(balance) < 20 
                ? '0 0 30px rgba(16,185,129,0.3)' 
                : '0 0 0px rgba(16,185,129,0)'
            }}
          >
            {/* Liquid Fill */}
            <motion.div 
              className={`absolute bottom-0 w-full transition-all duration-500 ${
                balance < -30 ? 'bg-rose-500/50' : balance > 30 ? 'bg-blue-900/80' : 'bg-emerald-500/60'
              }`}
              animate={{ height: `${reserveLevel}%` }}
            />
            {/* Stagnation Overlay */}
            {balance > 30 && (
              <motion.div 
                className="absolute inset-0 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>
          <div className="mt-8 font-sans text-sm tracking-widest uppercase text-white/70 h-6">
            {getStatusText()}
          </div>
        </div>

        {/* Giving Stream */}
        <div className="flex flex-col items-center">
          <label className="font-sans text-xs tracking-widest uppercase text-emerald-400 mb-4">Giving</label>
          <input 
            type="range" 
            min="0" max="100" 
            value={giveRate}
            onChange={(e) => setGiveRate(Number(e.target.value))}
            className="w-32 accent-emerald-500"
          />
          <div className="h-32 mt-8 relative w-8 flex justify-center">
            {/* Visual particles flowing OUT */}
            <motion.div 
              className="absolute w-2 bg-emerald-500/50 rounded-full"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2 - (giveRate/100), repeat: Infinity, ease: "linear" }}
              style={{ height: `${giveRate}%`, opacity: giveRate / 100 }}
            />
          </div>
        </div>

      </div>

    </section>
  );
};
