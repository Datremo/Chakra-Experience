import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../../data/chakras';
import { ArrowLeft } from 'lucide-react';
import { FluidBackground } from './components/FluidBackground';

import { IntroSection } from './sections/Intro';
import { WhatIsItSection } from './sections/WhatIsIt';
import { NameSection } from './sections/Name';
import { LocationSection } from './sections/Location';
import { HistoricalOriginSection } from './sections/HistoricalOrigin';
import { MandalaExplorerSection } from './sections/MandalaExplorer';
import { WaterElementSection } from './sections/WaterElement';
import { MoonSymbolismSection } from './sections/MoonSymbolism';
import { BijaSection } from './sections/Bija';
import { DesireSection } from './sections/Desire';
import { EmotionTideSection } from './sections/EmotionTide';
import { PleasureSection } from './sections/Pleasure';
import { SexualitySection } from './sections/Sexuality';
import { CreativeCurrentSection } from './sections/CreativeCurrent';
import { RelationshipsSection } from './sections/Relationships';
import { BalanceSection } from './sections/Balance';
import { FoodAndMovementSection } from './sections/FoodAndMovement';
import { WaterMeditationSection } from './sections/WaterMeditation';
import { ActivationSection } from './sections/Activation';
import { RealLifeExperimentSection } from './sections/RealLifeExperiment';
import { EvidenceAndMythsSection } from './sections/EvidenceAndMyths';
import { JournalSection } from './sections/Journal';
import { EndingSection } from './sections/Ending';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const SvadhisthanaDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-orange-500/30 bg-[#060B19]">
      
      <FluidBackground />

      {/* Global Background Mandala/Bīja */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03] mix-blend-screen overflow-hidden">
        <div className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] animate-spin-slow flex items-center justify-center">
          <svg viewBox="0 0 500 500" className="w-full h-full text-orange-400">
            {/* Outer Lotus Petals */}
            {[0, 60, 120, 180, 240, 300].map(angle => (
              <path key={angle} d="M250,50 C300,150 350,250 250,450 C150,250 200,150 250,50 Z" fill="none" stroke="currentColor" strokeWidth="2" transform={`rotate(${angle} 250 250)`} />
            ))}
            {/* Inner Concentric Circles */}
            <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="250" cy="250" r="100" fill="none" stroke="currentColor" strokeWidth="4" />
            {/* VAM Bīja Mantra symbol in the center */}
            <text x="250" y="290" fontFamily="serif" fontSize="120" textAnchor="middle" fill="currentColor">वँ</text>
          </svg>
        </div>
      </div>

      <button 
        onClick={onClose}
        className="fixed top-10 left-10 z-[100] flex items-center space-x-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] font-sans text-sm group mix-blend-difference"
      >
        <ArrowLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Ascend to Journey</span>
      </button>

      <div id="svadhisthana-scroll-container" ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <IntroSection />
        <WhatIsItSection />
        <NameSection />
        <LocationSection />
        <HistoricalOriginSection />
        <MandalaExplorerSection />
        <WaterElementSection />
        <MoonSymbolismSection />
        <BijaSection />
        <DesireSection />
        <EmotionTideSection />
        <PleasureSection />
        <SexualitySection />
        <CreativeCurrentSection />
        <RelationshipsSection />
        <BalanceSection />
        <FoodAndMovementSection />
        <WaterMeditationSection />
        <ActivationSection />
        <RealLifeExperimentSection />
        <EvidenceAndMythsSection />
        <JournalSection />
        <EndingSection onClose={onClose} chakra={chakra} />
      </div>
    </div>
  );
};
