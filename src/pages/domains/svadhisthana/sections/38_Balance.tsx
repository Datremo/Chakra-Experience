import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const BalanceSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [level, setLevel] = useState<'LOW' | 'BALANCED' | 'HIGH'>('BALANCED');

  const getWaterConfig = () => {
    switch (level) {
      case 'LOW': 
        return { 
          height: '20%', 
          color: 'rgba(59, 130, 246, 0.4)', // Blue
          animation: '4s',
          offset: 'translateY(10px)'
        };
      case 'BALANCED': 
        return { 
          height: '50%', 
          color: 'rgba(20, 184, 166, 0.6)', // Teal
          animation: '2s',
          offset: 'translateY(0px)'
        };
      case 'HIGH': 
        return { 
          height: '90%', 
          color: 'rgba(249, 115, 22, 0.8)', // Orange
          animation: '0.8s',
          offset: 'translateY(-10px)'
        };
    }
  };

  const getTextContent = () => {
    switch (level) {
      case 'LOW': return svadhisthanaData.balance.tooLittle;
      case 'BALANCED': return svadhisthanaData.balance.balanced;
      case 'HIGH': return svadhisthanaData.balance.tooMuch;
    }
  };

  const config = getWaterConfig();

  return (
    <section className="h-screen w-full flex items-center justify-center px-6 flex flex-col items-center justify-center relative bg-[#040810]">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-sans text-teal-400 tracking-[0.3em] uppercase text-sm mb-6">Equilibrium</h2>
        <h1 className="text-4xl md:text-6xl mb-8 font-serif text-white drop-shadow-md">The State of the River</h1>
        <p className="text-xl text-white/60 italic font-light max-w-2xl mx-auto">
          Balance is not maximum sensation. It is the ability to adapt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl relative z-10 mb-16">
        <button 
          onClick={() => setLevel('LOW')}
          className={`p-5 rounded-2xl border font-sans tracking-widest text-sm uppercase transition-all duration-300 ${
            level === 'LOW' ? 'bg-blue-900/40 border-blue-500 text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105' : 'bg-black/40 border-white/10 text-white/40 hover:border-white/30'
          }`}
        >
          <span className="block mb-2 text-xl">ðŸ’§</span>
          Too Little Flow<br/><span className="text-[10px] text-white/50">(Stuck)</span>
        </button>
        <button 
          onClick={() => setLevel('BALANCED')}
          className={`p-5 rounded-2xl border font-sans tracking-widest text-sm uppercase transition-all duration-300 ${
            level === 'BALANCED' ? 'bg-teal-900/40 border-teal-500 text-teal-100 shadow-[0_0_20px_rgba(20,184,166,0.3)] scale-105' : 'bg-black/40 border-white/10 text-white/40 hover:border-white/30'
          }`}
        >
          <span className="block mb-2 text-xl">ðŸŒŠ</span>
          Balanced Flow<br/><span className="text-[10px] text-white/50">(Adaptable)</span>
        </button>
        <button 
          onClick={() => setLevel('HIGH')}
          className={`p-5 rounded-2xl border font-sans tracking-widest text-sm uppercase transition-all duration-300 ${
            level === 'HIGH' ? 'bg-orange-900/40 border-orange-500 text-orange-100 shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-105' : 'bg-black/40 border-white/10 text-white/40 hover:border-white/30'
          }`}
        >
          <span className="block mb-2 text-xl">ðŸŒªï¸</span>
          Too Much Flow<br/><span className="text-[10px] text-white/50">(Flooded)</span>
        </button>
      </div>

      <div className="relative w-full max-w-4xl h-96 rounded-[3rem] border border-white/10 bg-[#010203] overflow-hidden flex flex-col justify-end p-8 shadow-[inset_0_0_50px_rgba(0,0,0,1)]">
        
        {/* Interactive Waves */}
        <div 
          className="absolute bottom-0 left-0 right-0 w-full transition-all duration-1000 ease-in-out" 
          style={{ height: config.height }}
        >
          {/* Base fill */}
          <div className="absolute top-10 bottom-0 left-0 right-0 transition-colors duration-1000" style={{ backgroundColor: config.color }} />
          
          {/* Wave 1 */}
          <div className="absolute top-0 left-0 right-0 w-[200%] h-20 -ml-[50%] flex items-end">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320" style={{ animation: `spin ${config.animation} linear infinite`, animationDirection: 'reverse' }}>
              <path fill={config.color} fillOpacity="0.4" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Wave 2 */}
          <div className="absolute top-0 left-0 right-0 w-[200%] h-20 flex items-end opacity-70">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320" style={{ animation: `spin ${config.animation} linear infinite` }}>
              <path fill={config.color} fillOpacity="0.8" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,149.3C672,139,768,149,864,176C960,203,1056,245,1152,240C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <style>{`
          @keyframes spin {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        
        <div className="relative z-10 flex flex-wrap gap-4 justify-center pb-8">
          <AnimatePresence mode="popLayout">
            {getTextContent().map((item: any, i: number) => (
              <motion.div
                key={`${level}-${item}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="px-6 py-3 rounded-full bg-black/60 border border-white/20 text-white/90 font-sans tracking-widest text-sm uppercase backdrop-blur-xl shadow-lg"
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <p className="mt-8 text-xs text-white/30 font-sans tracking-widest uppercase">
        *Metaphorical representation. Not a medical or diagnostic score.
      </p>

    </section>
  );
};
