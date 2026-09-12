import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileInfoPopupProps {
  buttonLabel: string;
  title: string;
  children: React.ReactNode;
}

export const MobileInfoPopup: React.FC<MobileInfoPopupProps> = ({ buttonLabel, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button (Mobile Only) */}
      <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-amber-600/90 hover:bg-amber-500 backdrop-blur-md rounded-full text-black font-bold tracking-widest text-xs shadow-[0_0_30px_rgba(245,158,11,0.5)] border border-amber-300/50 flex items-center gap-2 transition-transform active:scale-95"
        >
          {buttonLabel}
          <span className="text-lg leading-none">↑</span>
        </button>
      </div>

      {/* Full Screen Modal (Mobile Only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[100] flex items-end justify-center pointer-events-auto"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full h-[85dvh] bg-[#050100]/95 border-t border-amber-500/30 rounded-t-[2rem] shadow-[0_-10px_50px_rgba(245,158,11,0.15)] flex flex-col relative"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-amber-900/30 flex-shrink-0">
                <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-xs">{title}</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-500 flex items-center justify-center text-xl pb-1 hover:bg-amber-500 hover:text-black transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar pb-12">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
