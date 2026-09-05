import React from 'react';
import { motion } from 'framer-motion';

interface JourneyMapProps {
  activeSection: string;
}

const SECTIONS = [
  { id: 'intro', label: 'Understand' },
  { id: 'origin', label: 'Origin' },
  { id: 'location', label: 'Location' },
  { id: 'symbol', label: 'Symbol' },
  { id: 'earth', label: 'Earth' },
  { id: 'lam', label: 'Lāṃ' },
  { id: 'kundalini', label: 'Kundalinī' },
  { id: 'themes', label: 'Root Themes' },
  { id: 'practice', label: 'Practice' },
  { id: 'activation', label: 'Activation' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'integration', label: 'Integration' }
];

export const JourneyMap: React.FC<JourneyMapProps> = ({ activeSection }) => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col space-y-4 font-sans mix-blend-difference">
      {SECTIONS.map((section, idx) => {
        const isActive = activeSection === section.id;
        const passed = SECTIONS.findIndex(s => s.id === activeSection) > idx;

        return (
          <div key={section.id} className="flex items-center group cursor-pointer" onClick={() => {
            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <div className="relative flex items-center justify-center w-4 h-4 mr-4">
              {/* The Line connecting dots */}
              {idx !== SECTIONS.length - 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/20" />
              )}
              
              {/* The Dot */}
              <motion.div 
                animate={{
                  scale: isActive ? 1.5 : 1,
                  backgroundColor: isActive ? '#ef4444' : passed ? '#fca5a5' : '#ffffff20',
                  boxShadow: isActive ? '0 0 10px #ef4444' : 'none'
                }}
                className="w-1.5 h-1.5 rounded-full"
              />
            </div>
            
            {/* Label */}
            <span className={`text-lg md:text-xl tracking-[0.2em] uppercase transition-all duration-300 ${
              isActive ? 'text-red-400 font-bold translate-x-2' : 'text-white/30 group-hover:text-white/60 group-hover:translate-x-1'
            }`}>
              {section.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
