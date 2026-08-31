import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../../data/chakras';
import { ArrowLeft } from 'lucide-react';
import { SoundField } from './components/SoundField';

import { IntroSection } from './sections/01_Intro';
import { SpeakFirstSection } from './sections/02_SpeakFirst';
import { WhatIsItSection } from './sections/03_WhatIsIt';
import { TheNameSection } from './sections/04_TheName';
import { LocationSection } from './sections/05_Location';
import { BodyLayersSection } from './sections/06_BodyLayers';
import { HistoryWaveSection } from './sections/07_HistoryWave';
import { ClassicalBlueprintSection } from './sections/08_ClassicalBlueprint';
import { TheSoundWheelSection } from './sections/09_TheSoundWheel';
import { VowelEngineSection } from './sections/10_VowelEngine';
import { CymaticsSection } from './sections/11_Cymatics';
import { AkasaSpaceSection } from './sections/12_AkasaSpace';
import { SilenceInteractionSection } from './sections/13_SilenceInteraction';
import { TheBijaSection } from './sections/14_TheBija';
import { VoiceToWorldLabSection } from './sections/15_VoiceToWorldLab';
import { WordLabSection } from './sections/16_WordLab';
import { TruthSpectrumSection } from './sections/17_TruthSpectrum';
import { HonestyVsHarmSection } from './sections/18_HonestyVsHarm';
import { SpeakingVsOverSpeakingSection } from './sections/19_SpeakingVsOverSpeaking';
import { ListeningSection } from './sections/20_Listening';
import { MisunderstandingSection } from './sections/21_Misunderstanding';
import { TheUnspokenSection } from './sections/22_TheUnspoken';
import { BoundariesGateSection } from './sections/23_BoundariesGate';
import { AuthenticitySection } from './sections/24_Authenticity';
import { SocialMaskSection } from './sections/25_SocialMask';
import { BlockedThroatSection } from './sections/26_BlockedThroat';
import { VoiceMixerSection } from './sections/27_VoiceMixer';
import { WhoAreYouSection } from './sections/28_WhoAreYou';
import { FoodAndVoiceCareSection } from './sections/29_FoodAndVoiceCare';
import { PracticesSection } from './sections/30_Practices';
import { ReflectionSection } from './sections/35_Reflection';
import { VoiceToCosmosSection } from './sections/39_VoiceToCosmos';
import { IntegrationSection } from './sections/40_Integration';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const VisuddhaDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-cyan-500/30 bg-[#020813]">
      
      <SoundField />

      <button 
        onClick={onClose}
        aria-label="close-domain"
        className="fixed top-10 left-10 z-[100] flex items-center space-x-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] font-sans text-sm group mix-blend-difference"
      >
        <ArrowLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Ascend to Journey</span>
      </button>

      <div id="visuddha-scroll-container" ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <IntroSection />
        <SpeakFirstSection />
        <WhatIsItSection />
        <TheNameSection />
        <LocationSection />
        <BodyLayersSection />
        <HistoryWaveSection />
        <ClassicalBlueprintSection />
        <TheSoundWheelSection />
        <VowelEngineSection />
        <CymaticsSection />
        <AkasaSpaceSection />
        <SilenceInteractionSection />
        <TheBijaSection />
        <VoiceToWorldLabSection />
        <WordLabSection />
        <TruthSpectrumSection />
        <HonestyVsHarmSection />
        <SpeakingVsOverSpeakingSection />
        <ListeningSection />
        <MisunderstandingSection />
        <TheUnspokenSection />
        <BoundariesGateSection />
        <AuthenticitySection />
        <SocialMaskSection />
        <BlockedThroatSection />
        <VoiceMixerSection />
        <WhoAreYouSection />
        <FoodAndVoiceCareSection />
        <PracticesSection />
        <ReflectionSection />
        <VoiceToCosmosSection />
        <IntegrationSection onClose={onClose} />
      </div>
    </div>
  );
};
