import React from 'react';
import { motion } from 'framer-motion';

interface ClassicalMandalaProps {
  showPetals?: boolean;
  showSyllables?: boolean;
  showSquare?: boolean;
  showDirections?: boolean;
  showBija?: boolean;
  showAiravata?: boolean;
  showTriangle?: boolean;
  showLinga?: boolean;
  showKundalini?: boolean;
  className?: string;
}

export const ClassicalMandala: React.FC<ClassicalMandalaProps> = ({
  showPetals = false,
  showSyllables = false,
  showSquare = false,
  showDirections = false,
  showBija = false,
  showAiravata = false,
  showTriangle = false,
  showLinga = false,
  showKundalini = false,
  className = ""
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[500px] max-h-[500px]">
        
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 1. Four Petals (Crimson) */}
        {showPetals && (
          <motion.g 
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            fill="rgba(153, 27, 27, 0.4)" stroke="#ef4444" strokeWidth="2"
            filter="url(#glow)"
          >
            {/* Top */}
            <path d="M200 50 C240 130, 260 170, 200 200 C140 170, 160 130, 200 50 Z" />
            {/* Right */}
            <path d="M350 200 C270 240, 230 260, 200 200 C230 140, 270 160, 350 200 Z" />
            {/* Bottom */}
            <path d="M200 350 C160 270, 140 230, 200 200 C260 230, 240 270, 200 350 Z" />
            {/* Left */}
            <path d="M50 200 C130 160, 170 140, 200 200 C170 260, 130 240, 50 200 Z" />
          </motion.g>
        )}

        {/* 2. Four Syllables (Gold text on petals) */}
        {showSyllables && (
          <motion.g 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            fill="#fbbf24" fontSize="24" fontFamily="serif" textAnchor="middle"
          >
            <text x="200" y="90">वं</text>
            <text x="310" y="210">शं</text>
            <text x="200" y="325">षं</text>
            <text x="90" y="210">सं</text>
          </motion.g>
        )}

        {/* 3. Earth Square (Yellow/Gold) */}
        {showSquare && (
          <motion.rect
            x="120" y="120" width="160" height="160"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            fill="rgba(234, 179, 8, 0.1)" stroke="#eab308" strokeWidth="3"
            filter="url(#glow)"
          />
        )}

        {/* 4. Eight Directions (Spears on the square) */}
        {showDirections && (
          <motion.g 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            stroke="#eab308" strokeWidth="2" fill="none"
          >
            {/* Top Right */}
            <path d="M280 120 L295 105 M295 105 L285 105 M295 105 L295 115" />
            {/* Bottom Right */}
            <path d="M280 280 L295 295 M295 295 L285 295 M295 295 L295 285" />
            {/* Bottom Left */}
            <path d="M120 280 L105 295 M105 295 L115 295 M105 295 L105 285" />
            {/* Top Left */}
            <path d="M120 120 L105 105 M105 105 L115 105 M105 105 L105 115" />
            
            {/* Top Center */}
            <path d="M200 120 L200 100 M200 100 L195 105 M200 100 L205 105" />
            {/* Right Center */}
            <path d="M280 200 L300 200 M300 200 L295 195 M300 200 L295 205" />
            {/* Bottom Center */}
            <path d="M200 280 L200 300 M200 300 L195 295 M200 300 L205 295" />
            {/* Left Center */}
            <path d="M120 200 L100 200 M100 200 L105 195 M100 200 L105 205" />
          </motion.g>
        )}

        {/* 5. Airavata (The 7-Trunked Elephant) - Abstract Representation */}
        {showAiravata && (
          <motion.g 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            stroke="#9ca3af" strokeWidth="1.5" fill="none"
          >
            {/* Abstract elephant head silhouette */}
            <path d="M180 220 Q200 200 220 220 Q230 250 210 260 Q200 270 190 260 Q170 250 180 220 Z" fill="rgba(156, 163, 175, 0.1)" />
            {/* 7 Trunks (Abstract lines) */}
            <path d="M190 255 L180 270 M195 258 L190 275 M200 260 L200 280 M205 258 L210 275 M210 255 L220 270" strokeWidth="1" />
          </motion.g>
        )}

        {/* 6. Downward Triangle (Traipura) */}
        {showTriangle && (
          <motion.polygon
            points="160,180 240,180 200,240"
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"
            filter="url(#glow)"
          />
        )}

        {/* 7. Svayambhu Linga */}
        {showLinga && (
          <motion.path
            d="M195 230 C195 200, 205 200, 205 230"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1.5 }}
            fill="rgba(168, 162, 158, 0.8)" stroke="#d6d3d1" strokeWidth="1"
          />
        )}

        {/* 8. Kundalini (3.5 Coils around Linga) */}
        {showKundalini && (
          <motion.path
            d="M195 230 C180 220, 220 220, 205 230 C180 220, 220 220, 195 230 C180 220, 220 220, 205 230 M205 230 C200 210, 195 210, 200 200"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            fill="none" stroke="#fcd34d" strokeWidth="1.5"
            filter="url(#glow)"
          />
        )}

        {/* 9. Bīja Mantra LAM */}
        {showBija && (
          <motion.text
            x="200" y="160"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            fill="#facc15" fontSize="36" fontFamily="serif" textAnchor="middle"
            filter="url(#glow)"
          >
            लं
          </motion.text>
        )}

      </svg>
    </div>
  );
};
