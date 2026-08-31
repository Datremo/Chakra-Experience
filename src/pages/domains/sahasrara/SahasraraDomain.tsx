import React, { useEffect, useRef, createContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type ChakraData } from '../../../data/chakras';

export const ScrollContext = createContext<any>(null);

// Phase 1 Sections
import { TheAscentSection } from './sections/01_TheAscent';
import { ThousandPetalsSection } from './sections/02_ThousandPetals';
// New Phase 1 & 2 Sections
import { EnterThePetalsSection } from './sections/03_EnterThePetals';
import { SacredLibrarySection } from './sections/04_SacredLibrary';
import { VedicSortingSection } from './sections/05_VedicSorting';
import { CrownMandalaSection } from './sections/06_CrownMandala';
import { MoonChamberSection } from './sections/07_MoonChamber';
import { BinduSection } from './sections/08_Bindu';
import { TheVoidSection } from './sections/09_TheVoid';
import { WhoAmISection } from './sections/10_WhoAmI';

// Phase 3 Sections
import { AtmanSection } from './sections/11_AtmanRoom';
import { IAmSection } from './sections/12_IAm';
import { BrahmanSection } from './sections/13_Brahman';
import { UnityVsIndividualitySection } from './sections/14_ParticleField';
import { WhatIsLeftSection } from './sections/15_WhatIsLeft';

// Phase 4 Sections
import { ShivaShaktiSection } from './sections/16_ShivaShakti';
import { KundaliniAscentSection } from './sections/17_KundaliniAscent';
import { ThreeGranthisSection } from './sections/18_ThreeGranthis';
import { WhyTheCrownSection } from './sections/19_WhyTheCrown';
import { MokshaGallerySection } from './sections/20_MokshaGallery';

// Phase 5 Sections
import { SamadhiSection } from './sections/21_Samadhi';
import { KaivalyaSection } from './sections/22_Kaivalya';
import { AnandaSection } from './sections/23_Ananda';
import { BhaktiSection } from './sections/24_Bhakti';
import { InformationVsWisdomSection } from './sections/25_InformationVsWisdom';
// Phase 6 Sections
import { GraspingExperimentSection } from './sections/26_GraspingExperiment';
import { BrainwaveTuningSection } from './sections/27_BrainwaveTuning';
import { ModernSymptomsSection } from './sections/28_ModernSymptoms';
import { FoodsAndDietSection } from './sections/29_FoodsAndDiet';
import { YogaPracticesSection } from './sections/30_YogaPractices';
import { AchievementExperimentSection } from './sections/31_AchievementExperiment';
import { SeekingLoopSection } from './sections/32_SeekingLoop';
import { OpenAwarenessSection } from './sections/33_OpenAwareness';
import { VoidRoomSection } from './sections/34_VoidRoom';
import { CrownMeditationSection } from './sections/35_CrownMeditation';
import { FinalReturnPracticeSection } from './sections/36_FinalReturnPractice';

// Phase 7 Sections
import { ComeBackDownSection } from './sections/37_ComeBackDown';
import { OriginalAnswerSection } from './sections/38_OriginalAnswer';
import { LifeIntegrationSection } from './sections/39_LifeIntegration';
import { OrdinarySacredSection } from './sections/40_OrdinarySacred';
import { MortalitySection } from './sections/41_Mortality';
import { MeaningSection } from './sections/42_Meaning';
import { SevenChakraIntegrationSection } from './sections/43_SevenChakraIntegration';
import { FinalQuestionSection } from './sections/44_FinalQuestion';
import { FinalImageSection } from './sections/45_FinalImage';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const SahasraraDomain: React.FC<DomainProps> = ({ onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // We use a single global scroll progress for the background color shift
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(180deg, rgba(11,0,26,1) 0%, rgba(19,0,38,1) 100%)", // Cosmic Purple
      "linear-gradient(180deg, rgba(19,0,38,1) 0%, rgba(10,0,20,1) 100%)", // Deep Violet
      "linear-gradient(180deg, rgba(10,0,20,1) 0%, rgba(0,0,0,1) 100%)"    // Fading to void
    ]
  );

  useEffect(() => {
    // Force scroll to top on mount
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 text-white font-sans overflow-hidden"
      style={{ background }}
    >
      {/* Cosmic Nebula Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] z-0 pointer-events-none mix-blend-screen opacity-50"
        style={{
          background: 'radial-gradient(circle at center, rgba(192,132,252,0.15) 0%, rgba(126,34,206,0.1) 30%, transparent 70%)',
        }}
      />
      
      {/* Background Starfield / Dust Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen" 
           style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      {/* Exit Button - Moved to top-left */}
      <button 
        onClick={onClose}
        className="absolute top-6 left-6 z-50 text-white/50 hover:text-white p-2 transition-colors mix-blend-difference font-sans text-xs tracking-[0.4em] uppercase"
      >
        RETURN
      </button>

      <ScrollContext.Provider value={scrollContainerRef}>
        <div 
          ref={scrollContainerRef}
          id="sahasrara-scroll-container"
          className="h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth relative z-10"
        >
          <div className="content-visibility-auto"><TheAscentSection /></div>
          <div className="content-visibility-auto"><ThousandPetalsSection /></div>
        
        {/* Worlds 03 - 10 */}
          <div className="content-visibility-auto"><EnterThePetalsSection /></div>
          <div className="content-visibility-auto"><SacredLibrarySection /></div>
          <div className="content-visibility-auto"><VedicSortingSection /></div>
          <div className="content-visibility-auto"><CrownMandalaSection /></div>
          <div className="content-visibility-auto"><MoonChamberSection /></div>
          <div className="content-visibility-auto"><BinduSection /></div>
          <div className="content-visibility-auto"><TheVoidSection /></div>
          <div className="content-visibility-auto"><WhoAmISection /></div>
        
        {/* Worlds 11 - 15 */}
          <div className="content-visibility-auto"><AtmanSection /></div>
          <div className="content-visibility-auto"><IAmSection /></div>
          <div className="content-visibility-auto"><BrahmanSection /></div>
          <div className="content-visibility-auto"><UnityVsIndividualitySection /></div>
          <div className="content-visibility-auto"><WhatIsLeftSection /></div>

        {/* Phase 4 (Worlds 16 - 20) */}
          <div className="content-visibility-auto"><ShivaShaktiSection /></div>
          <div className="content-visibility-auto"><KundaliniAscentSection /></div>
          <div className="content-visibility-auto"><ThreeGranthisSection /></div>
          <div className="content-visibility-auto"><WhyTheCrownSection /></div>
          <div className="content-visibility-auto"><MokshaGallerySection /></div>

        {/* Phase 5 (Worlds 21 - 25) */}
          <div className="content-visibility-auto"><SamadhiSection /></div>
          <div className="content-visibility-auto"><KaivalyaSection /></div>
          <div className="content-visibility-auto"><AnandaSection /></div>
          <div className="content-visibility-auto"><BhaktiSection /></div>
          <div className="content-visibility-auto"><InformationVsWisdomSection /></div>
        {/* Phase 6 (Worlds 26 - 30) */}
          <div className="content-visibility-auto"><GraspingExperimentSection /></div>
          <div className="content-visibility-auto"><BrainwaveTuningSection /></div>
          <div className="content-visibility-auto"><ModernSymptomsSection /></div>
          <div className="content-visibility-auto"><FoodsAndDietSection /></div>
          <div className="content-visibility-auto"><YogaPracticesSection /></div>
          <div className="content-visibility-auto"><AchievementExperimentSection /></div>
          <div className="content-visibility-auto"><SeekingLoopSection /></div>
          <div className="content-visibility-auto"><OpenAwarenessSection /></div>
          <div className="content-visibility-auto"><VoidRoomSection /></div>
          <div className="content-visibility-auto"><CrownMeditationSection /></div>
          <div className="content-visibility-auto"><FinalReturnPracticeSection /></div>

          <div className="content-visibility-auto"><ComeBackDownSection /></div>
          <div className="content-visibility-auto"><OriginalAnswerSection /></div>
          <div className="content-visibility-auto"><LifeIntegrationSection /></div>
          <div className="content-visibility-auto"><OrdinarySacredSection /></div>
          <div className="content-visibility-auto"><MortalitySection /></div>
          <div className="content-visibility-auto"><MeaningSection /></div>
          <div className="content-visibility-auto"><SevenChakraIntegrationSection /></div>
          <div className="content-visibility-auto"><FinalQuestionSection /></div>
          <div className="content-visibility-auto"><FinalImageSection /></div>
        </div>
      </ScrollContext.Provider>
    </motion.div>
  );
};
