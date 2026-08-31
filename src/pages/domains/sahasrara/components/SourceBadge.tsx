import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type SourceType = 'TRADITION' | 'MODERN' | 'EVIDENCE' | 'SYMBOLIC';

interface SourceExplorerProps {
  type: SourceType;
  content?: React.ReactNode;
}

export const SourceBadge: React.FC<SourceExplorerProps> = ({ type, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    TRADITION: 'bg-amber-900 text-amber-200 border-amber-700',
    MODERN: 'bg-orange-800 text-orange-200 border-orange-600',
    EVIDENCE: 'bg-slate-800 text-slate-300 border-slate-600',
    SYMBOLIC: 'bg-teal-900 text-teal-200 border-teal-700'
  };

  return (
    <div className="relative inline-block ml-2 align-middle">
      <button 
        onClick={() => content && setIsOpen(!isOpen)}
        className={`px-2 py-0.5 rounded text-[9px] font-sans uppercase tracking-widest border transition-colors ${content ? 'hover:brightness-125 cursor-pointer' : 'cursor-default'} ${colors[type]}`}
      >
        {type}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-4 bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-2xl z-50 text-left"
          >
            <div className="text-gray-300 font-sans text-xs font-light leading-relaxed">
              {content}
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 text-[10px] text-gray-500 hover:text-gray-300 uppercase tracking-widest w-full text-center"
            >
              Close
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
