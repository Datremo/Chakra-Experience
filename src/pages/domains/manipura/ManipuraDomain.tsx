import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../../data/chakras';
import { ArrowLeft } from 'lucide-react';
import { FireBackground } from './components/FireBackground';

import { IntroSection } from './sections/01_Intro';
import { WhatIsItSection } from './sections/02_WhatIsIt';
import { NameSection } from './sections/03_Name';
import { LocationSection } from './sections/04_Location';
import { HistoricalOriginSection } from './sections/05_HistoricalOrigin';
import { LotusBuilderSection } from './sections/06_LotusBuilder';
import { TenPetalsSection } from './sections/07_TenPetals';
import { AgniSection } from './sections/08_Agni';
import { FireTriangleSection } from './sections/09_FireTriangle';
import { BijaSection } from './sections/10_Bija';
import { DeitiesSection } from './sections/11_Deities';
import { ModernSolarPlexusSection } from './sections/12_ModernSolarPlexus';
import { PowerDialSection } from './sections/13_PowerDial';
import { ResponseGapSection } from './sections/14_ResponseGap';
import { AngerChainSection } from './sections/15_AngerChain';
import { BoundariesSection } from './sections/16_Boundaries';
import { InnerForgeSection } from './sections/17_InnerForge';
import { AttentionFlameSection } from './sections/18_AttentionFlame';
import { BurnoutSection } from './sections/19_Burnout';
import { ThreeFireModelSection } from './sections/20_ThreeFireModel';
import { AgniDigestionSection } from './sections/21_AgniDigestion';
import { FoodAndMovementSection } from './sections/22_FoodAndMovement';
import { InnerSunSection } from './sections/23_InnerSun';
import { AgniMeditationSection } from './sections/24_AgniMeditation';
import { ActivationSection } from './sections/25_Activation';
import { SevenDayJourneySection } from './sections/26_SevenDayJourney';
import { EvidenceAndMythsSection } from './sections/27_EvidenceAndMyths';
import { JournalSection } from './sections/28_Journal';
import { EndingSection } from './sections/29_Ending';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const ManipuraDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-orange-500/30 bg-[#0D0400]">
      
      <FireBackground />

      <button 
        onClick={onClose}
        className="fixed top-10 left-10 z-[100] flex items-center space-x-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] font-sans text-sm group mix-blend-difference"
      >
        <ArrowLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Ascend to Journey</span>
      </button>

      <div id="manipura-scroll-container" ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <IntroSection />
        <WhatIsItSection />
        <NameSection />
        <LocationSection />
        <HistoricalOriginSection />
        <LotusBuilderSection />
        <TenPetalsSection />
        <AgniSection />
        <FireTriangleSection />
        <BijaSection />
        <DeitiesSection />
        <ModernSolarPlexusSection />
        <PowerDialSection />
        <ResponseGapSection />
        <AngerChainSection />
        <BoundariesSection />
        <InnerForgeSection />
        <AttentionFlameSection />
        <BurnoutSection />
        <ThreeFireModelSection />
        <AgniDigestionSection />
        <FoodAndMovementSection />
        <InnerSunSection />
        <AgniMeditationSection />
        <ActivationSection />
        <SevenDayJourneySection />
        <EvidenceAndMythsSection />
        <JournalSection />
        <EndingSection onClose={onClose} chakra={chakra} />
      </div>
    </div>
  );
};
