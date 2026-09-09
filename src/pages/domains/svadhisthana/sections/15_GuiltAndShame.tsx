import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GuiltAndShameSection: React.FC = () => {
  const [holding, setHolding] = useState(false);
  const [cleared, setCleared] = useState(false);

  // Press and hold logic
  let pressTimer: NodeJS.Timeout;

  const startPress = () => {
    if (cleared) return;
    setHolding(true);
    pressTimer = setTimeout(() => {
      setCleared(true);
      setHolding(false);
    }, 2000); // Hold for 2 seconds
  };

  const cancelPress = () => {
    if (cleared) return;
    setHolding(false);
    clearTimeout(pressTimer);
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-600 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          The Demon of SvÄdhiá¹£á¹­hÄna
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-xl"
        >
          Guilt
        </motion.h2>

        <AnimatePresence mode="wait">
          {!cleared ? (
            <motion.div 
              key="guilt"
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl text-white/50 font-serif italic mb-12 max-w-2xl mx-auto">
                Guilt says, "I made a mistake."<br/>
                Shame says, "I am a mistake."<br/>
                Both paralyze the flow of water.
              </p>

              <motion.button
                onMouseDown={startPress}
                onMouseUp={cancelPress}
                onMouseLeave={cancelPress}
                onTouchStart={startPress}
                onTouchEnd={cancelPress}
                animate={{ scale: holding ? 0.9 : 1, backgroundColor: holding ? 'rgba(249,115,22,0.2)' : 'rgba(0,0,0,0.5)' }}
                className="w-48 h-48 rounded-full border border-orange-500/30 flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className={`absolute bottom-0 left-0 right-0 bg-orange-500/50 transition-all duration-[2000ms] ease-linear ${holding ? 'h-full' : 'h-0'}`} />
                <span className="relative z-10 text-orange-200 font-sans tracking-widest text-sm uppercase">
                  {holding ? "Dissolving..." : "Press & Hold to Forgive"}
                </span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              key="cleared"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 bg-orange-900/20 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.1)] max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-serif text-orange-300 mb-6">The Current Resumes</h3>
              <p className="text-lg text-white/80 font-sans font-light leading-relaxed">
                You cannot change the past, but you can allow the river to carry it away. Forgiveness is not about condoning actions; it is about restoring your own energetic flow.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
