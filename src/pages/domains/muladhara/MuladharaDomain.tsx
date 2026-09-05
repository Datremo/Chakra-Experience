import React, {
  useEffect,
  useRef,
  createContext,
} from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { type ChakraData } from '../../../data/chakras';
import { ArrowLeft } from 'lucide-react';

import { EarthParticleField } from './components/EarthParticleField';
import { PersistentRootSystem } from './components/PersistentRootSystem';
import { MandalaOverlay } from './components/MandalaOverlay';
import { SubtleNadiSystem } from './components/SubtleNadiSystem';
import { MuladharaJourneyProvider } from './context/MuladharaJourneyContext';

import { S01_TheCinematicEntry } from './sections/S01_TheCinematicEntry';
import { S02_TheGravitationalFall } from './sections/S02_TheGravitationalFall';
import { S03_WhatIsMuladhara } from './sections/S03_WhatIsMuladhara';
import { S04_TheSovereignVessel } from './sections/S04_TheSovereignVessel';
import { S05_TheArchitecture } from './sections/S05_TheArchitecture';

import { S06_TheBodyAxis } from './sections/S06_TheBodyAxis';
import { S07_WhereExactly } from './sections/S07_WhereExactly';
import { S08_TheTwoMaps } from './sections/S08_TheTwoMaps';
import { S09_TheRootLens } from './sections/S09_TheRootLens';
import { S10_QuickRootReference } from './sections/S10_QuickRootReference';

import { S11_TheEmptyAltar } from './sections/S11_TheEmptyAltar';
import { S12_TheFourPetals } from './sections/S12_TheFourPetals';
import { S13_TheFourSyllables } from './sections/S13_TheFourSyllables';
import { S14_TheEarthSquare } from './sections/S14_TheEarthSquare';
import { S15_TheEightDirections } from './sections/S15_TheEightDirections';
import { S16_TheSymbolBecomesLand } from './sections/S16_TheSymbolBecomesLand';
import { S17_TheBija } from './sections/S17_TheBija';
import { S19_Airavata } from './sections/S19_Airavata';
import { S20_TheDownwardTriangle } from './sections/S20_TheDownwardTriangle';
import { S21_SvayambhuLinga } from './sections/S21_SvayambhuLinga';
import { S22_Kundalini } from './sections/S22_Kundalini';
import { S23_ThreeHalfCoils } from './sections/S23_ThreeHalfCoils';
import { S24_BreathingSpace01 } from './sections/S24_BreathingSpace01';

import { S25_Ida } from './sections/S25_Ida';
import { S26_Pingala } from './sections/S26_Pingala';
import { S27_Sushumna } from './sections/S27_Sushumna';
import { S28_TheAscendingCurrent } from './sections/S28_TheAscendingCurrent';
import { S28B_ApanaVayu } from './sections/S28B_ApanaVayu';

import { S29_ExperienceEarth } from './sections/S29_ExperienceEarth';
import { S30_LivingEarth } from './sections/S30_LivingEarth';
import { S31_TheFiveSenses } from './sections/S31_TheFiveSenses';
import { S32_TheRootWalk } from './sections/S32_TheRootWalk';
import { S33_TheCairn } from './sections/S33_TheCairn';
import { S34_TheWindTree } from './sections/S34_TheWindTree';
import { S35_BreathingSpace02 } from './sections/S35_BreathingSpace02';
import { S35B_MulaBandha } from './sections/S35B_MulaBandha';

import { S36_TheSurvivalLab } from './sections/S36_TheSurvivalLab';
import { S37_TheAmygdala } from './sections/S37_TheAmygdala';
import { S38_Fight } from './sections/S38_Fight';
import { S39_Flight } from './sections/S39_Flight';
import { S40_TheWindowOfTolerance } from './sections/S40_TheWindowOfTolerance';
import { S41_Freeze } from './sections/S41_Freeze';
import { S42_Fawn } from './sections/S42_Fawn';
import { S43_TheGroundedResponse } from './sections/S43_TheGroundedResponse';

import { S44_ScarcityVsStability } from './sections/S44_ScarcityVsStability';
import { S45_TheAnchorScale } from './sections/S45_TheAnchorScale';
import { S46_FinancialGrounding } from './sections/S46_FinancialGrounding';
import { S47_PhysicalHealthAsAnchor } from './sections/S47_PhysicalHealthAsAnchor';
import { S47B_TheRootKitchen } from './sections/S47B_TheRootKitchen';
import { S48_Belonging } from './sections/S48_Belonging';
import { S49_GenerationalRoots } from './sections/S49_GenerationalRoots';
import { S50_TheTiltedRoot } from './sections/S50_TheTiltedRoot';

import { S51_OneMinuteRootReset } from './sections/S51_OneMinuteRootReset';
import { S52_HeavyLifting } from './sections/S52_HeavyLifting';
import { S53_DigitalBoundaries } from './sections/S53_DigitalBoundaries';
import { S54_SleepAsSacred } from './sections/S54_SleepAsSacred';
import { S55_EarningALiving } from './sections/S55_EarningALiving';
import { S56_WhatMightIExperience } from './sections/S56_WhatMightIExperience';

import { S57_TraditionSorter } from './sections/S57_TraditionSorter';
import { S58_SourceVault } from './sections/S58_SourceVault';
import { S59_RootAnswerCentre } from './sections/S59_RootAnswerCentre';

import { S60_MyRootPractice } from './sections/S60_MyRootPractice';
import { S61_RootCovenant } from './sections/S61_RootCovenant';
import { S62_TheEvolvingRootNetwork } from './sections/S62_TheEvolvingRootNetwork';

import { S64_WeightToMovement } from './sections/S64_WeightToMovement';
import { S65_StoneToWater } from './sections/S65_StoneToWater';
import { S66_SquareToFluidGeometry } from './sections/S66_SquareToFluidGeometry';
import { S67_FourPetalsToSixPetals } from './sections/S67_FourPetalsToSixPetals';
import { S68_TheFinalTransformation } from './sections/S68_TheFinalTransformation';

export const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(
  null,
);

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const MuladharaDomain: React.FC<DomainProps> = ({
  chakra,
  onClose,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  /*
   * Keep the selected chakra available to the domain.
   * This also preserves the existing DomainController contract.
   */
  void chakra;

  /*
   * Narrative colour progression.
   *
   * This is intentionally atmospheric rather than literal "theme changes":
   * dawn → earth → crimson → warmth → living green → integration cream.
   */
  const background = useTransform(
    scrollYProgress,
    [0, 0.14, 0.30, 0.48, 0.68, 0.84, 1],
    [
      'linear-gradient(180deg, rgba(30,41,59,1) 0%, rgba(15,23,42,1) 52%, rgba(2,6,23,1) 100%)',
      'linear-gradient(180deg, rgba(70,45,30,1) 0%, rgba(48,28,16,1) 52%, rgba(18,8,3,1) 100%)',
      'linear-gradient(180deg, rgba(126,32,27,1) 0%, rgba(87,18,12,1) 52%, rgba(36,6,4,1) 100%)',
      'linear-gradient(180deg, rgba(177,58,26,1) 0%, rgba(112,30,10,1) 52%, rgba(48,9,2,1) 100%)',
      'linear-gradient(180deg, rgba(55,73,42,1) 0%, rgba(25,40,22,1) 52%, rgba(8,18,8,1) 100%)',
      'linear-gradient(180deg, rgba(76,67,50,1) 0%, rgba(43,39,29,1) 52%, rgba(14,12,9,1) 100%)',
      'linear-gradient(180deg, rgba(214,198,168,1) 0%, rgba(128,107,77,1) 52%, rgba(43,31,21,1) 100%)',
    ],
  );

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    container.scrollTop = 0;

    const raf = requestAnimationFrame(() => {
      container.scrollTop = 0;
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <MuladharaJourneyProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
        }}
        className="fixed inset-0 z-50 overflow-hidden font-sans text-white selection:bg-red-900/40"
        style={{ background }}
      >
        {/* Atmospheric sunrise/root glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[80vh] w-[160vw] -translate-x-1/2 mix-blend-screen opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(220,50,30,0.15) 0%, rgba(127,20,10,0.05) 50%, transparent 80%)',
          }}
        />

        {/* Global Earth atmosphere */}
        <EarthParticleField />

        {/* Return to the main Chakra journey */}
        <button
          onClick={onClose}
          aria-label="Return to chakra journey"
          className="group fixed left-5 top-5 z-[100] flex items-center space-x-2.5 text-xs uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white md:left-10 md:top-10 md:space-x-3 md:tracking-[0.3em] md:text-sm mix-blend-difference"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1.5"
          />
          <span>Return</span>
        </button>

        <ScrollContext.Provider value={scrollContainerRef}>
          {/* The Living Root remains behind the entire journey */}
          <PersistentRootSystem />
          <MandalaOverlay />
          <SubtleNadiSystem />

          <div
            ref={scrollContainerRef}
            id="muladhara-scroll-container"
            className="relative z-10 h-full w-full overflow-x-hidden overflow-y-auto overscroll-contain scroll-smooth"
          >
            {/* =========================================================
                ACT I — ARRIVE & DESCEND
            ========================================================= */}
            <S01_TheCinematicEntry />
            <S02_TheGravitationalFall />
            <S03_WhatIsMuladhara />
            <S04_TheSovereignVessel />
            <S05_TheArchitecture />

            {/* =========================================================
                ACT II — FIND THE ROOT
            ========================================================= */}
            <S06_TheBodyAxis />
            <S07_WhereExactly />
            <S08_TheTwoMaps />
            <S09_TheRootLens />
            <S10_QuickRootReference />

            {/* =========================================================
                ACT III — CLASSICAL MANDALA
            ========================================================= */}
            <S11_TheEmptyAltar />
            <S12_TheFourPetals />
            <S13_TheFourSyllables />
            <S14_TheEarthSquare />
            <S15_TheEightDirections />
            <S16_TheSymbolBecomesLand />
            <S17_TheBija />
                        <S19_Airavata />
            <S20_TheDownwardTriangle />
            <S21_SvayambhuLinga />
            <S22_Kundalini />
            <S23_ThreeHalfCoils />
            <S24_BreathingSpace01 />

            {/* =========================================================
                ACT IV — SUBTLE PATH
            ========================================================= */}
            
            <S25_Ida />
            <S26_Pingala />
            <S27_Sushumna />
            <S28_TheAscendingCurrent />
            <S28B_ApanaVayu />

            {/* =========================================================
                ACT V — EXPERIENCE EARTH
            ========================================================= */}
            <S29_ExperienceEarth />
            <S30_LivingEarth />
            <S31_TheFiveSenses />
            <S32_TheRootWalk />
            <S33_TheCairn />
            <S34_TheWindTree />
            <S35_BreathingSpace02 />
            <S35B_MulaBandha />

            {/* =========================================================
                ACT VI — THE SURVIVAL RESPONSE LAB
            ========================================================= */}
            <S36_TheSurvivalLab />
            <S37_TheAmygdala />
            <S40_TheWindowOfTolerance />
            <S38_Fight />
            <S39_Flight />
                        <S41_Freeze />
            <S42_Fawn />
            <S43_TheGroundedResponse />
            
            {/* =========================================================
                ACT VII — SCARCITY VS STABILITY
            ========================================================= */}
            <S44_ScarcityVsStability />
            <S45_TheAnchorScale />
            <S46_FinancialGrounding />
            <S47_PhysicalHealthAsAnchor />
            <S47B_TheRootKitchen />
            <S48_Belonging />
            <S49_GenerationalRoots />
            <S50_TheTiltedRoot />

            {/* =========================================================
                ACT VIII — MODERN ROOT PRACTICES
            ========================================================= */}
            <S51_OneMinuteRootReset />
            <S52_HeavyLifting />
            <S53_DigitalBoundaries />
            <S54_SleepAsSacred />
            <S55_EarningALiving />
            <S56_WhatMightIExperience />

            {/* =========================================================
                ACT IX — TRUTH & KNOWLEDGE
            ========================================================= */}
            <S57_TraditionSorter />
            <S58_SourceVault />
            <S59_RootAnswerCentre />

            {/* =========================================================
                ACT X — INTEGRATION
            ========================================================= */}
            <S60_MyRootPractice />
            <S61_RootCovenant />
            <S62_TheEvolvingRootNetwork />
            
            {/* =========================================================
                FINAL CINEMATIC TRANSFORMATION
                EARTH → WATER
            ========================================================= */}
            <S64_WeightToMovement />
            <S65_StoneToWater />
            <S66_SquareToFluidGeometry />
            <S67_FourPetalsToSixPetals />
            <S68_TheFinalTransformation onClose={onClose} />
          </div>
        </ScrollContext.Provider>
      </motion.div>
    </MuladharaJourneyProvider>
  );
};