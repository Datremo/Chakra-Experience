import React, { useEffect, useRef } from 'react';

import { ArrowLeft } from 'lucide-react';
import { type ChakraData } from '../../../data/chakras';
import { ObservatoryField } from './components/ObservatoryField';

import { IntroSection } from './sections/01_Intro';
import { TheBlindSpotSection } from './sections/02_TheBlindSpot';
import { TheThirdEyeOpensSection } from './sections/03_TheThirdEyeOpens';
import { WhatIsAjnaSection } from './sections/04_WhatIsAjna';
import { TheNameSection } from './sections/05_TheName';
import { LocationSection } from './sections/06_Location';
import { BodyComparisonSection } from './sections/07_BodyComparison';
import { HistoricalObservatorySection } from './sections/08_HistoricalObservatory';
import { MandalaExplorerSection } from './sections/09_MandalaExplorer';
import { TheTwoPetalsSection } from './sections/10_TheTwoPetals';
import { HakiniRevealSection } from './sections/11_HakiniReveal';

// Batch 2
import { ThirdEyeRoomSection } from './sections/12_ThirdEyeRoom';
import { SeeingExperimentSection } from './sections/13_SeeingExperiment';
import { PerceptionLabSection } from './sections/14_PerceptionLab';
import { TheLensSection } from './sections/15_TheLens';
import { FactVsStorySection } from './sections/16_FactVsStory';
import { HowDoYouKnowSection } from './sections/17_HowDoYouKnow';
import { IntuitionVsAssumptionSection } from './sections/18_IntuitionVsAssumption';
import { IntuitionLedgerSection } from './sections/19_IntuitionLedger';
import { SignalNoiseSection } from './sections/20_SignalNoise';
import { PatternDetectorSection } from './sections/21_PatternDetector';
import { SynchronicitySection } from './sections/22_Synchronicity';
import { DreamTempleSection } from './sections/23_DreamTemple';

// Batch 3
import { BlockedThirdEyeSection } from './sections/24_BlockedThirdEye';
import { TheBijaMantraSection } from './sections/25_TheBijaMantra';
import { MeditationSection } from './sections/26_Meditation';
import { DailyPracticesSection } from './sections/27_DailyPractices';

// Batch 4 (The Missing Modules)
import { InnerObserverSection } from './sections/30_InnerObserver';
import { MeditativeExperiencesSection } from './sections/31_MeditativeExperiences';
import { ThoughtBeliefActionSection } from './sections/32_ThoughtBeliefAction';
import { MemoryMirrorSection } from './sections/33_MemoryMirror';
import { BeliefFilterSection } from './sections/34_BeliefFilter';
import { VisualizationPracticeSection } from './sections/35_VisualizationPractice';
import { StillnessChamberSection } from './sections/36_StillnessChamber';
import { TheUnknownSection } from './sections/37_TheUnknown';
import { DiscernmentCompassSection } from './sections/38_DiscernmentCompass';
import { ActivationAndMythsSection } from './sections/39_ActivationAndMyths';
import { GatewayToCrownSection } from './sections/40_GatewayToCrown';
import { IntegrationSection } from './sections/41_Integration';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const AjnaDomain: React.FC<DomainProps> = ({ onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-indigo-500/30 bg-black">
      
      <ObservatoryField />

      <button 
        onClick={onClose}
        aria-label="close-domain"
        className="fixed top-10 left-10 z-[100] flex items-center space-x-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] font-sans text-sm group mix-blend-difference"
      >
        <ArrowLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Return to Journey</span>
      </button>

      <div id="ajna-scroll-container" ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="relative"><IntroSection /></div>
        <div className="relative"><TheBlindSpotSection /></div>
        <div className="relative"><TheThirdEyeOpensSection /></div>
        <div className="relative"><WhatIsAjnaSection /></div>
        <div className="relative"><TheNameSection /></div>
        <div className="relative"><LocationSection /></div>
        <div className="relative"><BodyComparisonSection /></div>
        <div className="relative"><HistoricalObservatorySection /></div>
        <div className="relative"><MandalaExplorerSection /></div>
        <div className="relative"><TheTwoPetalsSection /></div>
        <div className="relative"><HakiniRevealSection /></div>
        
        {/* Batch 2 */}
        <div className="relative"><ThirdEyeRoomSection /></div>
        <div className="relative"><SeeingExperimentSection /></div>
        <div className="relative"><PerceptionLabSection /></div>
        <div className="relative"><TheLensSection /></div>
        <div className="relative"><FactVsStorySection /></div>
        <div className="relative"><HowDoYouKnowSection /></div>
        <div className="relative"><IntuitionVsAssumptionSection /></div>
        <div className="relative"><IntuitionLedgerSection /></div>
        <div className="relative"><SignalNoiseSection /></div>
        <div className="relative"><PatternDetectorSection /></div>
        <div className="relative"><SynchronicitySection /></div>
        <div className="relative"><DreamTempleSection /></div>

        {/* Batch 3 & 4 */}
        <div className="relative"><BlockedThirdEyeSection /></div>
        <div className="relative"><TheBijaMantraSection /></div>
        <div className="relative"><MeditationSection /></div>
        <div className="relative"><DailyPracticesSection /></div>
        
        {/* The Missing Modules */}
        <div className="relative"><InnerObserverSection /></div>
        <div className="relative"><MeditativeExperiencesSection /></div>
        <div className="relative"><ThoughtBeliefActionSection /></div>
        <div className="relative"><MemoryMirrorSection /></div>
        <div className="relative"><BeliefFilterSection /></div>
        <div className="relative"><VisualizationPracticeSection /></div>
        <div className="relative"><StillnessChamberSection /></div>
        <div className="relative"><TheUnknownSection /></div>
        <div className="relative"><DiscernmentCompassSection /></div>
        <div className="relative"><ActivationAndMythsSection /></div>

        <div className="relative"><GatewayToCrownSection /></div>
        <div className="relative"><IntegrationSection onClose={onClose} /></div>
      </div>
    </div>
  );
};
