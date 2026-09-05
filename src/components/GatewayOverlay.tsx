import React from 'react';
import { type ChakraData } from '../data/chakras';
import { Sparkles, Fingerprint, Heart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GatewayOverlayProps {
  activeChakra: ChakraData | null;
  onEnterDomain: () => void;
}

export const GatewayOverlay: React.FC<GatewayOverlayProps> = ({ activeChakra, onEnterDomain }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12 lg:p-24 overflow-hidden">
      
      {/* Massive Beej Watermark */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform pointer-events-none -z-10 ${
          activeChakra ? 'opacity-20 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'
        }`}
      >
        {activeChakra && (
          <h1 
            className="font-serif text-[15rem] md:text-[30rem] lg:text-[40rem] leading-none select-none mix-blend-screen blur-[2px]"
            style={{ color: activeChakra.hexColor }}
          >
            {activeChakra.sanskritCharacter}
          </h1>
        )}
      </div>

      {/* Top / Main area containing title (centered on mobile, left on desktop) and right lore panel (desktop only) */}
      <div className="flex-1 flex flex-col items-center justify-start pt-12 sm:pt-14 md:pt-0 md:flex-row md:justify-between md:items-center w-full relative z-10">
        {/* Chakra Name & Identification: Centered at top on mobile, Left panel on desktop */}
        <div 
          className={`transition-all duration-1000 transform max-w-sm w-full md:w-auto flex flex-col items-center md:items-start ${
            activeChakra 
              ? 'opacity-100 translate-y-0 md:translate-x-0' 
              : 'opacity-0 -translate-y-8 md:translate-y-0 md:-translate-x-16'
          }`}
        >
          {activeChakra && (
            <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-4 relative px-4 md:px-0 md:pl-8 text-center md:text-left">
              {/* Decorative line (desktop only - on left) */}
              <div 
                className="hidden md:block absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-60"
                style={{ backgroundColor: activeChakra.hexColor, boxShadow: `0 0 20px ${activeChakra.hexColor}` }}
              />
              
              {/* Resonance Eyebrow */}
              <div className="flex items-center justify-center md:justify-start space-x-2.5 md:space-x-3 text-white/60">
                <Fingerprint size={15} className="opacity-70" />
                <h3 className="font-sans text-[11px] md:text-xs tracking-[0.35em] md:tracking-[0.4em] uppercase">
                  {t(`gateway.${activeChakra.id}.resonance`, { defaultValue: `${activeChakra.englishName} Resonance` })}
                </h3>
              </div>

              {/* Title / Sanskrit Name */}
              <h1 
                className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-normal md:tracking-tighter text-glow drop-shadow-2xl"
                style={{ color: activeChakra.hexColor }}
              >
                {t(`gateway.${activeChakra.id}.name`, { defaultValue: activeChakra.sanskritName })}
              </h1>
              
              {/* Creative element: Symmetrical glowing pulsing orb & line on mobile, Left-to-right line on desktop */}
              <div className="flex items-center justify-center md:justify-start pt-1 md:pt-4 opacity-70">
                 {/* Mobile-only left accent line */}
                 <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-white/40 to-transparent md:hidden" />
                 
                 {/* Glowing pulsing orb */}
                 <div className="relative mx-3 md:mx-0 md:mr-3 flex items-center justify-center">
                   <div 
                     className="w-2 h-2 rounded-full animate-ping absolute" 
                     style={{ backgroundColor: activeChakra.hexColor }} 
                   />
                   <div 
                     className="w-2 h-2 rounded-full" 
                     style={{ backgroundColor: activeChakra.hexColor, boxShadow: `0 0 10px ${activeChakra.hexColor}` }} 
                   />
                 </div>

                 {/* Right accent line (both mobile & desktop) */}
                 <div className="h-px w-10 sm:w-14 md:w-32 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Lore & Sensation panel (Desktop only, untouched) */}
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
        className={`transition-all duration-1000 transform flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 absolute bottom-6 md:bottom-10 left-0 w-full z-10 ${
          activeChakra ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        {activeChakra && (
          <>
            <h2 className="font-serif text-lg sm:text-2xl md:text-3xl italic text-white text-glow text-center max-w-2xl px-4 md:px-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              "{t(`gateway.${activeChakra.id}.hook`, { defaultValue: activeChakra.gatewayHook })}"
            </h2>

            {/* Radiant Ambient Aura Behind & Around The Button */}
            <div className="relative flex items-center justify-center mt-1 md:mt-2">
              
              {/* Vibrant Upward Radial Light Well */}
              <div 
                className="absolute w-[250px] sm:w-[400px] md:w-[500px] h-[120px] sm:h-[180px] rounded-full blur-[50px] sm:blur-[70px] pointer-events-none transition-all duration-700 top-1/2 -translate-y-1/2"
                style={{ 
                  backgroundColor: `${activeChakra.hexColor}`,
                  opacity: 0.45
                }}
              />

              {/* Concentric Breathing Energy Rings */}
              <div 
                className="absolute w-[220px] sm:w-[300px] md:w-[360px] h-[70px] sm:h-[90px] md:h-[100px] rounded-[100px] border border-dashed pointer-events-none animate-pulse transition-colors duration-700"
                style={{ 
                  borderColor: `${activeChakra.hexColor}80`,
                  boxShadow: `0 0 30px ${activeChakra.hexColor}40, inset 0 0 20px ${activeChakra.hexColor}20`
                }}
              />
              <div 
                className="absolute w-[260px] sm:w-[360px] md:w-[440px] h-[90px] sm:h-[120px] md:h-[140px] rounded-[120px] border border-dotted pointer-events-none opacity-50 transition-colors duration-700 delay-150"
                style={{ 
                  borderColor: `${activeChakra.hexColor}50`
                }}
              />

              {/* Enhanced Deep Dive Master Button */}
              <button
                onClick={onEnterDomain}
                className="pointer-events-auto relative px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full uppercase tracking-[0.25em] md:tracking-[0.3em] text-[11px] sm:text-sm text-white font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95 group overflow-hidden backdrop-blur-xl border flex items-center space-x-3 sm:space-x-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
                style={{
                  boxShadow: `0 0 50px ${activeChakra.hexColor}70, 0 20px 40px rgba(0,0,0,0.9)`,
                  borderColor: `${activeChakra.hexColor}90`,
                  backgroundColor: 'rgba(5, 1, 10, 0.85)'
                }}
              >
                {/* Glowing Specular Light Sweep Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                {/* Inner Ambient Color Tint */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: activeChakra.hexColor }}
                />

                {/* Sparkling Icon Accent */}
                <div 
                  className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:scale-110 duration-500"
                  style={{ backgroundColor: `${activeChakra.hexColor}40`, boxShadow: `0 0 15px ${activeChakra.hexColor}80` }}
                >
                  <Sparkles size={14} className="text-white drop-shadow-lg" />
                </div>

                <span className="relative z-10 font-bold tracking-[0.25em] drop-shadow-md whitespace-nowrap">
                  {t('gateway.enterButton', { defaultValue: 'Enter Deep Dive' })}
                </span>

                <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500 text-white" />
              </button>
            </div>

            {/* Sacred Subtext Badge */}
            <div className="flex items-center space-x-2 text-[9px] sm:text-[10px] font-sans tracking-[0.3em] uppercase text-white/50 pointer-events-none mt-2">
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: activeChakra.hexColor }} />
              <span>42 Interactive Worlds & Deep Wisdom</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
