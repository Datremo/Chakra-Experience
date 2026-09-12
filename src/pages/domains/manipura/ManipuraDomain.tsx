import React, { useEffect, useRef, createContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

import { Act2_EnergyDial as Zone3_EnergyDial } from './sections/Zone3_EnergyDial';
import { Act4_TruthTemple as Zone5_TruthTemple } from './sections/Zone5_TruthTemple';
import { ReturnToJourneySection } from './sections/45_ReturnToJourney';

export const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

interface DomainProps { chakra: ChakraData; onClose: () => void; }

import { lockScroll, unlockScroll } from '../../../utils/scrollLock';

export const ManipuraDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    lockScroll();
    return () => { unlockScroll(); };
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  // Opacity transforms for the 7 cinematic images
  const op1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [0.6, 0.6, 0]); // Lotus
  const op2 = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 0.6, 0.6, 0]); // Fire Triangle
  const op3 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 0.6, 0.6, 0]); // Solar Plexus Glow
  const op4 = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 0.6, 0.6, 0]); // Inner Forge
  const op5 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 0.6, 0.6, 0]); // Agni Digestion Embers
  const op6 = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 0.6, 0.6, 0]); // Hearth (Energy Dial)
  const op7 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 0.6, 0.6]); // Inner Sun / Truth Temple

  return (
    <ManipuraJourneyProvider>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 text-white overflow-hidden selection:bg-amber-500/40 bg-black"
      >
        {/* Dynamic Background Images */}
        <motion.div style={{ opacity: op1, backgroundImage: 'url(/assets/images/manipura/lotus.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />
        <motion.div style={{ opacity: op2, backgroundImage: 'url(/assets/images/manipura/manipura_fire_triangle_1789221050734.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />
        <motion.div style={{ opacity: op3, backgroundImage: 'url(/assets/images/manipura/manipura_solar_plexus_1789221064801.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />
        <motion.div style={{ opacity: op4, backgroundImage: 'url(/assets/images/manipura/inner_forge.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />
        <motion.div style={{ opacity: op5, backgroundImage: 'url(/assets/images/manipura/manipura_agni_digestion_1789221077996.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />
        <motion.div style={{ opacity: op6, backgroundImage: 'url(/assets/images/manipura/manipura_hearth.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />
        <motion.div style={{ opacity: op7, backgroundImage: 'url(/assets/images/manipura/manipura_inner_sun_1789219379810.jpg)' }} className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out mix-blend-screen" />

        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(250,150,50,0.15)_0%,rgba(200,80,20,0.05)_50%,transparent_80%)]" />
        </div>
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <ManipuraAtmosphere scene="spark" intensity={0.55}/>
        </div>

        <button onClick={onClose} aria-label="Return to journey" className="fixed top-5 left-5 md:top-8 md:left-8 z-[100] inline-flex items-center gap-2 px-3 py-2 rounded-full border border-amber-100/20 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-[.22em] text-amber-100/75 hover:text-amber-50 hover:border-amber-100/40 transition-all mix-blend-difference">
          <X size={14}/> Return
        </button>

        <ScrollContext.Provider value={scrollRef}>
          <div ref={scrollRef} id="manipura-scroll-container" className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
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

            <Zone3_EnergyDial />

            <AgniDigestionSection />
            <FoodAndMovementSection />
            <InnerSunSection />
            <AgniMeditationSection />
            <ActivationSection />
            <SevenDayJourneySection />
            <EvidenceAndMythsSection />
            <JournalSection />

            <Zone5_TruthTemple />

            <ReturnToJourneySection onClose={onClose} chakra={chakra} />
          </div>
        </ScrollContext.Provider>
      </motion.div>
    </ManipuraJourneyProvider>
  );
};
