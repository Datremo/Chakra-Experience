import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../../data/chakras';
import { ArrowLeft } from 'lucide-react';
import { BreathField } from './components/BreathField';

import { IntroSection } from './sections/01_Intro';
import { BreathFieldSection } from './sections/02_BreathFieldSection';
import { WhatIsItSection } from './sections/03_WhatIsIt';
import { WhatIsLoveSection } from './sections/04_WhatIsLove';
import { NameSection } from './sections/05_Name';
import { SoundExperienceSection } from './sections/06_SoundExperience';
import { LocationSection } from './sections/07_Location';
import { HeartDistinctionSection } from './sections/08_HeartDistinction';
import { HistoricalOriginSection } from './sections/09_HistoricalOrigin';
import { ClassicalBlueprintSection } from './sections/10_ClassicalBlueprint';
import { VayuSection } from './sections/11_Vayu';
import { InnerSwanSection } from './sections/12_InnerSwan';
import { TransitionSection } from './sections/13_Transition';
import { ModernRepresentationSection } from './sections/14_ModernRepresentation';
import { LoveVsAttachmentSection } from './sections/15_LoveVsAttachment';
import { ConnectionNetworkSection } from './sections/16_ConnectionNetwork';
import { ReciprocitySection } from './sections/17_Reciprocity';
import { BoundariesSection } from './sections/18_Boundaries';
import { VulnerabilitySection } from './sections/19_Vulnerability';
import { GriefSection } from './sections/20_Grief';
import { ForgivenessSection } from './sections/21_Forgiveness';
import { CompassionSection } from './sections/22_Compassion';
import { LoveIsNotWarmSection } from './sections/23_LoveIsNotWarm';
import { BalanceEcosystemSection } from './sections/24_BalanceEcosystem';
import { SymptomsAndHealingSection } from './sections/24b_SymptomsAndHealing';
import { RelationshipMirrorSection } from './sections/25_RelationshipMirror';
import { HeartLanguageSection } from './sections/26_HeartLanguage';
import { GratitudeConstellationSection } from './sections/27_GratitudeConstellation';
import { LoveWithoutFixingSection } from './sections/28_LoveWithoutFixing';
import { BreathAndHeartSection } from './sections/29_BreathAndHeart';
import { PracticesSection } from './sections/30_Practices';
import { ActivationAndMythsSection } from './sections/31_ActivationAndMyths';
import { FoodSection } from './sections/32_Food';
import { DailyLifeSection } from './sections/33_DailyLife';
import { ReceivingPracticeSection } from './sections/34_ReceivingPractice';
import { CompassionLimitSection } from './sections/35_CompassionLimit';
import { WhoDoYouLoveSection } from './sections/36_WhoDoYouLove';
import { JournalAndMirrorSection } from './sections/37_JournalAndMirror';
import { JourneyAndExperimentSection } from './sections/38_JourneyAndExperiment';
import { IntegrationSection } from './sections/39_Integration';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const AnahataDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-emerald-500/30 bg-[#05120C]">
      
      <BreathField />

      <button 
        onClick={onClose}
        aria-label="close-domain"
        className="fixed top-10 left-10 z-[100] flex items-center space-x-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] font-sans text-sm group mix-blend-difference"
      >
        <ArrowLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Ascend to Journey</span>
      </button>

      <div id="anahata-scroll-container" ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <IntroSection />
        <BreathFieldSection />
        <WhatIsItSection />
        <WhatIsLoveSection />
        <NameSection />
        <SoundExperienceSection />
        <LocationSection />
        <HeartDistinctionSection />
        <HistoricalOriginSection />
        <ClassicalBlueprintSection />
        <VayuSection />
        <InnerSwanSection />
        <TransitionSection />
        <ModernRepresentationSection />
        <LoveVsAttachmentSection />
        <ConnectionNetworkSection />
        <ReciprocitySection />
        <BoundariesSection />
        <VulnerabilitySection />
        <GriefSection />
        <ForgivenessSection />
        <CompassionSection />
        <LoveIsNotWarmSection />
        <BalanceEcosystemSection />
        <SymptomsAndHealingSection />
        <RelationshipMirrorSection />
        <HeartLanguageSection />
        <GratitudeConstellationSection />
        <LoveWithoutFixingSection />
        <BreathAndHeartSection />
        <PracticesSection />
        <ActivationAndMythsSection />
        <FoodSection />
        <DailyLifeSection />
        <ReceivingPracticeSection />
        <CompassionLimitSection />
        <WhoDoYouLoveSection />
        <JournalAndMirrorSection />
        <JourneyAndExperimentSection />
        <IntegrationSection />
      </div>
    </div>
  );
};
