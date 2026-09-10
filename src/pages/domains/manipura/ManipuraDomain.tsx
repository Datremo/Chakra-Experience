import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../../data/chakras';
import { X } from 'lucide-react';
import { ManipuraAtmosphere } from './components/ManipuraAtmosphere';
import { ManipuraJourneyProvider } from './state/ManipuraJourneyContext';

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

import { FireThresholdSection } from './sections/29_FireThreshold';
import { HeatIsInformationSection } from './sections/30_HeatIsInformation';
import { ControlFieldSection } from './sections/31_ControlField';
import { AchievementMonumentSection } from './sections/32_AchievementMonument';
import { FailureFragmentsSection } from './sections/33_FailureFragments';
import { SharedPowerSection } from './sections/34_SharedPower';
import { ScatteredEnergySection } from './sections/35_ScatteredEnergy';
import { FireBudgetSection } from './sections/36_FireBudget';
import { DigitalHeatSection } from './sections/37_DigitalHeat';
import { DecisionChamberSection } from './sections/38_DecisionChamber';
import { RecoveryEmberSection } from './sections/39_RecoveryEmber';
import { FuelLabSection } from './sections/40_FuelLab';
import { EffortVsStrainSection } from './sections/41_EffortVsStrain';
import { RamResonanceSection } from './sections/42_RamResonance';
import { TruthEngineWorldSection } from './sections/43_TruthEngineWorld';
import { FireToLightSection } from './sections/44_FireToLight';
import { ReturnToJourneySection } from './sections/45_ReturnToJourney';

interface DomainProps { chakra: ChakraData; onClose: () => void; }

export const ManipuraDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <ManipuraJourneyProvider>
      <div className="fixed inset-0 z-50 bg-[#070200] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none"><ManipuraAtmosphere scene="spark" intensity={0.55}/></div>
        <button onClick={onClose} aria-label="Return to journey" className="fixed top-5 left-5 md:top-8 md:left-8 z-[100] inline-flex items-center gap-2 px-3 py-2 rounded-full border border-amber-100/10 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-[.22em] text-amber-100/55 hover:text-amber-50 hover:border-amber-100/25 transition-all">
          <X size={14}/> Return
        </button>
        <div ref={scrollRef} id="manipura-scroll-container" className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
          {/* ACT I — ENTRY + CLASSICAL DISCOVERY */}
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
          <FireThresholdSection />
          <HeatIsInformationSection />
          <ControlFieldSection />
          {/* ACT II — POWER → RESPONSE → BOUNDARY */}
          <PowerDialSection />
          <ResponseGapSection />
          <AngerChainSection />
          <BoundariesSection />
          <AchievementMonumentSection />
          <FailureFragmentsSection />
          <InnerForgeSection />
          {/* ACT III — FORGE → ATTENTION → CAPACITY */}
          <SharedPowerSection />
          <ScatteredEnergySection />
          <AttentionFlameSection />
          <BurnoutSection />
          <RecoveryEmberSection />
          <ThreeFireModelSection />
          <FireBudgetSection />
          <DigitalHeatSection />
          <DecisionChamberSection />
          {/* ACT IV — BODY → PRACTICE */}
          <AgniDigestionSection />
          <FoodAndMovementSection />
          <FuelLabSection />
          <EffortVsStrainSection />
          <InnerSunSection />
          <AgniMeditationSection />
          <RamResonanceSection />
          <ActivationSection />
          <SevenDayJourneySection />
          {/* ACT V — DISCERNMENT → INTEGRATION */}
          <EvidenceAndMythsSection />
          <TruthEngineWorldSection />
          <JournalSection />
          <FireToLightSection />
          <ReturnToJourneySection onClose={onClose} chakra={chakra} />
        </div>
      </div>
    </ManipuraJourneyProvider>
  );
};
