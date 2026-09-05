import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const SubtleNadiSystem: React.FC = () => {
  const { state } = useMuladharaJourney();
  const w = state.currentWorld;

  // Show during Act IV (Worlds 25 to 28)
  const showNadis = w >= 25 && w <= 28;
  
  const showIda = w >= 25;
  const showPingala = w >= 26;
  const showSushumna = w >= 27;
  const showAscent = w === 28;

  return (
    <AnimatePresence>
      {showNadis && (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Subtle Body Silhouette Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

          <svg viewBox="0 0 400 800" className="w-[400px] h-[800px] max-h-screen overflow-visible drop-shadow-2xl">
            {/* Sushumna (Central) */}
            <motion.path
              d="M 200 700 L 200 100"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: showSushumna ? 1 : 0, 
                opacity: showSushumna ? 1 : 0,
                filter: showAscent ? 'drop-shadow(0 0 20px #f59e0b)' : 'drop-shadow(0 0 5px #f59e0b)'
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Ida (Left/Lunar) */}
            <motion.path
              d="M 200 700 C 100 600, 300 500, 200 400 C 100 300, 300 200, 200 100"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: showIda ? 1 : 0, opacity: showIda ? 0.8 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ filter: 'drop-shadow(0 0 10px #3b82f6)' }}
            />

            {/* Pingala (Right/Solar) */}
            <motion.path
              d="M 200 700 C 300 600, 100 500, 200 400 C 300 300, 100 200, 200 100"
              fill="none"
              stroke="#fca5a5"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: showPingala ? 1 : 0, opacity: showPingala ? 0.8 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }}
            />

            {/* Ascending Light Pulse (World 28) */}
            {showAscent && (
              <motion.circle
                r="12"
                fill="#ffffff"
                style={{ filter: 'drop-shadow(0 0 15px white)' }}
                animate={{
                  cy: [700, 100, 700],
                  cx: 200, // Follows central axis
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
