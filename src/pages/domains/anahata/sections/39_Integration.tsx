import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntegrationSection: React.FC = () => {
  const [isAscending, setIsAscending] = useState(false);

  const handleAscend = () => {
    setIsAscending(true);
    // In a full app, this would trigger a router push or context change after the animation
    setTimeout(() => {
      // Simulate upward movement or close domain
      const closeBtn = document.querySelector('button[aria-label="close-domain"]') as HTMLButtonElement | null;
      if (closeBtn) {
        closeBtn.click();
      } else {
        // Fallback if we can't find the exact button, dispatch a custom event or let the user click the top-left button
      }
    }, 2000);
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#000000] overflow-hidden">
      
      {/* Background Shift on Ascend */}
      <AnimatePresence>
        {isAscending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-[#000000] to-[#000000] z-0 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="text-center z-10 max-w-2xl flex flex-col items-center">
        
        <motion.div
          animate={isAscending ? { scale: 0, opacity: 0, y: -100 } : { scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-8 relative">
            <motion.div
              className="absolute inset-0 rounded-full border border-emerald-400"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-2 h-2 rounded-full bg-emerald-300" />
          </div>

          <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-8">Completion</h2>
          <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-8 leading-tight">
            The Open Heart
          </h1>
          
          <p className="text-xl md:text-2xl font-serif text-white/60 font-light leading-relaxed italic mb-16 max-w-xl mx-auto">
            You are vast enough to hold it all. The grief, the love, the joy, the boundaries. 
          </p>

          <button
            onClick={handleAscend}
            className="group relative px-12 py-4 rounded-full border border-emerald-900/50 hover:border-emerald-500 overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 bg-emerald-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-sans tracking-[0.2em] text-xs uppercase text-emerald-100/70 group-hover:text-emerald-100 flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Return to Journey
            </span>
          </button>
        </motion.div>

        <AnimatePresence>
          {isAscending && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-400 uppercase mb-4">Integration</h2>
              <p className="font-serif text-white/60 italic">Returning to the journey...</p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
