import React from 'react';
import { type ChakraData } from '../data/chakras';
import { Sparkles, Fingerprint, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GatewayOverlayProps {
  activeChakra: ChakraData | null;
  onEnterDomain: () => void;
}

export const GatewayOverlay: React.FC<GatewayOverlayProps> = ({ activeChakra, onEnterDomain }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 md:p-12 lg:p-24 overflow-hidden">
      
      {/* Massive Beej Watermark */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform pointer-events-none -z-10 ${
          activeChakra ? 'opacity-20 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'
        }`}
      >
        {activeChakra && (
          <h1 
            className="font-serif text-[30rem] md:text-[40rem] leading-none select-none mix-blend-screen blur-[2px]"
            style={{ color: activeChakra.hexColor }}
          >
            {activeChakra.sanskritCharacter}
          </h1>
        )}
      </div>

      {/* Top / Main area containing left and right panels */}
      <div className="flex-1 flex justify-between items-center w-full relative z-10">
        {/* Left Side: Name & Identification */}
        <div 
          className={`transition-all duration-1000 transform max-w-sm ${
            activeChakra ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}
        >
          {activeChakra && (
            <div className="flex flex-col space-y-4 relative">
              {/* Decorative line */}
              <div 
                className="absolute -left-6 top-0 bottom-0 w-1 rounded-full opacity-60"
                style={{ backgroundColor: activeChakra.hexColor, boxShadow: `0 0 20px ${activeChakra.hexColor}` }}
              />
              
              <div className="flex items-center space-x-3 text-white/50">
                <Fingerprint size={16} />
                <h3 className="font-sans text-xs tracking-[0.4em] uppercase">
                  {t(`gateway.${activeChakra.id}.resonance`, { defaultValue: `${activeChakra.englishName} Resonance` })}
                </h3>
              </div>

              <h1 
                className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter text-glow drop-shadow-2xl"
                style={{ color: activeChakra.hexColor }}
              >
                {t(`gateway.${activeChakra.id}.name`, { defaultValue: activeChakra.sanskritName })}
              </h1>
              
              {/* Creative element: Glowing pulsing orb/line */}
              <div className="flex items-center space-x-3 pt-4 opacity-70">
                 <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeChakra.hexColor }} />
                 <div className="h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Lore & Sensation panel */}
        <div 
          className={`transition-all duration-1000 transform max-w-md hidden md:block ${
            activeChakra ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          {activeChakra && (
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden text-right border-r-4 shadow-2xl backdrop-blur-md"
                 style={{ borderRightColor: activeChakra.hexColor, backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none transition-colors duration-1000"
                style={{ backgroundColor: activeChakra.hexColor }}
              />
              
              <div className="flex justify-end mb-4 opacity-50" style={{ color: activeChakra.hexColor }}>
                <Sparkles size={24} />
              </div>

              <p className="font-serif italic text-white/90 text-xl mb-6 leading-relaxed">
                "{t(`gateway.${activeChakra.id}.description`, { defaultValue: activeChakra.basicDescription.split('.')[0] + '.' })}"
              </p>
              
              <div className="w-full h-px bg-white/10 my-4" />
              
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-2 text-white/40 mb-2">
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em]">{t('gateway.coreDesireLabel', { defaultValue: 'Core Desire' })}</h4>
                  <Heart size={14} />
                </div>
                <p className="font-sans text-sm text-white/70 leading-relaxed max-w-[280px]">
                  {t(`gateway.${activeChakra.id}.coreDesire`, { defaultValue: activeChakra.coreDesire })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Center: Gateway Hook and Enter Button */}
      <div 
        className={`transition-all duration-1000 transform flex flex-col items-center space-y-8 mt-8 relative z-10 ${
          activeChakra ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {activeChakra && (
          <>
            <h2 className="font-serif text-2xl md:text-3xl italic text-white text-glow text-center max-w-2xl">
              "{t(`gateway.${activeChakra.id}.hook`, { defaultValue: activeChakra.gatewayHook })}"
            </h2>
            <button
              onClick={onEnterDomain}
              className="pointer-events-auto glass-panel px-12 py-6 rounded-full uppercase tracking-[0.3em] text-sm text-white transition-all duration-500 hover:scale-105 group relative overflow-hidden backdrop-blur-md"
              style={{
                boxShadow: `0 0 50px ${activeChakra.hexColor}40`,
                borderColor: `${activeChakra.hexColor}40`,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: activeChakra.hexColor }}
              />
              <span className="relative z-10 font-medium">{t('gateway.enterButton', { defaultValue: 'Enter Deep Dive' })}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
