import React, { useEffect, useRef, createContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type ChakraData } from '../../../data/chakras';
import { ArrowLeft } from 'lucide-react';

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
  
  // Single global scroll progress for radiant background color shift
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(180deg, rgba(26,8,56,1) 0%, rgba(42,12,82,1) 50%, rgba(18,4,42,1) 100%)", // Luminous Cosmic Purple
      "linear-gradient(180deg, rgba(42,12,82,1) 0%, rgba(28,6,58,1) 50%, rgba(14,2,32,1) 100%)", // Deep Royal Amethyst
      "linear-gradient(180deg, rgba(28,6,58,1) 0%, rgba(16,2,36,1) 60%, rgba(6,0,16,1) 100%)"     // Cosmic Void with Violet Resonance
    ]
  );

  useEffect(() => {
    // Immediate scroll reset on mount
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    const raf = requestAnimationFrame(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 text-white font-sans overflow-hidden"
      style={{ background }}
    >
      {/* Radiant Cosmic Nebula Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160vw] h-[160vw] md:w-[110vw] md:h-[110vw] z-0 pointer-events-none mix-blend-screen opacity-65"
        style={{
          background: 'radial-gradient(circle at center, rgba(216,180,254,0.3) 0%, rgba(168,85,247,0.2) 30%, rgba(107,33,168,0.12) 60%, transparent 80%)',
        }}
      />
      
      {/* Background Starfield / Dust Effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen" 
        style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '48px 48px' }} 
      />

      {/* Standardized Responsive Return Button */}
      <button 
        onClick={onClose}
        aria-label="return-to-journey"
        className="fixed top-5 left-5 md:top-10 md:left-10 z-[100] flex items-center space-x-2.5 md:space-x-3 text-white/70 hover:text-white transition-colors uppercase tracking-[0.25em] md:tracking-[0.3em] font-sans text-xs md:text-sm group mix-blend-difference"
      >
        <ArrowLeft size={18} className="transform group-hover:-translate-x-1.5 transition-transform" />
        <span>Return</span>
      </button>

      <ScrollContext.Provider value={scrollContainerRef}>
        <div 
          ref={scrollContainerRef}
          id="sahasrara-scroll-container"
          className="h-full w-full overflow-y-auto overflow-x-hidden relative z-10"
        >
          <TheAscentSection />
          <ThousandPetalsSection />
        
          {/* Worlds 03 - 10 */}
          <EnterThePetalsSection />
          <SacredLibrarySection />
          <VedicSortingSection />
          <CrownMandalaSection />
          <MoonChamberSection />
          <BinduSection />
          <TheVoidSection />
          <WhoAmISection />
        
          {/* Worlds 11 - 15 */}
          <AtmanSection />
          <IAmSection />
          <BrahmanSection />
          <UnityVsIndividualitySection />
          <WhatIsLeftSection />

          {/* Phase 4 (Worlds 16 - 20) */}
          <ShivaShaktiSection />
          <KundaliniAscentSection />
          <ThreeGranthisSection />
          <WhyTheCrownSection />
          <MokshaGallerySection />

          {/* Phase 5 (Worlds 21 - 25) */}
          <SamadhiSection />
          <KaivalyaSection />
          <AnandaSection />
          <BhaktiSection />
          <InformationVsWisdomSection />

          {/* Phase 6 (Worlds 26 - 30) */}
          <GraspingExperimentSection />
          <BrainwaveTuningSection />
          <ModernSymptomsSection />
          <FoodsAndDietSection />
          <YogaPracticesSection />
          <AchievementExperimentSection />
          <SeekingLoopSection />
          <OpenAwarenessSection />
          <VoidRoomSection />
          <CrownMeditationSection />
          <FinalReturnPracticeSection />

          {/* Phase 7 (Worlds 37 - 45) */}
          <ComeBackDownSection />
          <OriginalAnswerSection />
          <LifeIntegrationSection />
          <OrdinarySacredSection />
          <MortalitySection />
          <MeaningSection />
          <SevenChakraIntegrationSection />
          <FinalQuestionSection />
          <FinalImageSection />
        </div>
      </ScrollContext.Provider>
    </motion.div>
  );
};
