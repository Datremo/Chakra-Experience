import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BodyMap } from '../../../../components/BodyMap';

export const LocationSection: React.FC = () => {
  const [position, setPosition] = useState(0); // 0 (Root) to 100 (Crown)

  // Map slider value to specific chakra points for text readout
  let activeChakra = "Mūlādhāra (Root)";
  if (position > 15) activeChakra = "Svādhiṣṭhāna (Sacral)";
  if (position > 35) activeChakra = "Maṇipūra (Navel)";
  if (position > 55) activeChakra = "Anāhata (Heart)";
  if (position > 75) activeChakra = "Viśuddha (Throat)";
  if (position >= 90 && position < 98) activeChakra = "Ājñā (Brow)";
  if (position >= 98) activeChakra = "Sahasrāra (Crown)";

  const isAjna = position >= 90 && position < 98;

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-8 md:mb-16"
      >
        <h2 className="font-sans text-xs md:text-sm tracking-[0.4em] text-indigo-400/80 uppercase mb-4 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">Location</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 tracking-wide">Bhrūmadhya</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Move the marker to locate the center.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Slider Controls */}
        <div className="w-full md:w-1/3 flex flex-col items-center order-2 md:order-1">
          <div className="h-48 md:h-64 relative flex items-center justify-center mb-4 md:mb-8">
            <div className={`absolute w-1 h-64 rounded-full transition-colors duration-500 ${isAjna ? 'bg-indigo-900/50 shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'bg-white/5'}`} />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={position}
              onChange={(e) => setPosition(parseInt(e.target.value))}
              className="w-64 h-2 bg-transparent appearance-none cursor-crosshair outline-none -rotate-90 origin-center z-10"
              style={{
                accentColor: isAjna ? '#818cf8' : '#ffffff'
              }}
            />
          </div>
          <div className="text-center h-16">
            <motion.p 
              key={activeChakra}
              initial={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${isAjna ? 'text-indigo-300 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]' : 'text-white/60'}`}
            >
              {activeChakra}
            </motion.p>
          </div>
        </div>

        {/* Visual Map */}
        <div className="w-full md:w-1/3 flex justify-center relative h-[350px] md:h-[500px] order-1 md:order-2">
          <div className="absolute inset-0 pointer-events-none">
            <BodyMap activeChakra={isAjna ? 'ajna' : 'none'} />
          </div>
          
          <div className="absolute inset-0 pointer-events-none flex justify-center items-end pb-8">
            {/* The traveling point */}
            <motion.div
              className={`absolute w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${isAjna ? 'bg-indigo-500/20 shadow-[0_0_30px_#818cf8] border border-indigo-400' : 'bg-white/10 border border-white/30'}`}
              style={{
                bottom: `${position}%`,
                left: '50%',
                x: '-50%'
              }}
            >
              <div className={`w-2 h-2 rounded-full ${isAjna ? 'bg-white shadow-[0_0_10px_white]' : 'bg-white/50'}`} />
            </motion.div>

            {/* Target Ring */}
            <div 
              className={`absolute w-12 h-12 rounded-full border-2 border-dashed transition-all duration-500 ${isAjna ? 'border-indigo-400 rotate-180 scale-110' : 'border-white/10 scale-100'}`}
              style={{
                bottom: '92%',
                left: '50%',
                x: '-50%',
                y: '50%'
              }}
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 text-center md:text-left h-32 order-3">
          {isAjna ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-serif text-indigo-300 mb-4 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">Between the Eyebrows</h3>
              <p className="text-white/70 font-light text-sm md:text-base leading-relaxed">
                The classical texts locate Ājñā at the 'Bhrūmadhya'—the space between the eyebrows. It is not located inside the physical brain, nor at the top of the head.
              </p>
            </motion.div>
          ) : (
            <div className="opacity-30 transition-opacity duration-300">
              <h3 className="text-2xl font-serif text-white mb-4">Search Higher</h3>
              <p className="text-white font-light text-sm md:text-base leading-relaxed">
                Move the focus upward through the subtle body.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
