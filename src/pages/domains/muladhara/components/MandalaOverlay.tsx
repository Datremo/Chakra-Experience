import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';
import { ClassicalMandala } from './ClassicalMandala';

export const MandalaOverlay: React.FC = () => {
  const { state } = useMuladharaJourney();
  const w = state.currentWorld;

  // Only show the mandala background if we are in Act III (Worlds 11 to 24)
  const isActIII = w >= 11 && w <= 24;

  return (
    <AnimatePresence>
      {isActIII && (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-20 flex items-center justify-center lg:justify-end lg:pr-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <ClassicalMandala 
            className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] opacity-80"
            showPetals={w >= 12}
            showSyllables={w >= 13}
            showSquare={w >= 14}
            showDirections={w >= 15}
            // 16 is Symbol Becomes Land (just text)
            showBija={w >= 17}
            showAiravata={w >= 19}
            showTriangle={w >= 20}
            showLinga={w >= 21}
            showKundalini={w >= 22}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
