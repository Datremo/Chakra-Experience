import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Mountain, Shield, Activity, Compass, Disc, Award } from 'lucide-react';
import { type ChakraData } from '../../../data/chakras';

// Act I: Primordial Foundations (Worlds 01 - 07)
import {
  World01_EarthDescent,
  World02_WhatIsMuladhara,
  World03_EvolutionOfSurvival,
  World04_ThePhysicalAnchor,
  World05_PrithviMandala,
  World06_TheFourPetals,
  World07_AiravataElephant,
} from './sections/MuladharaAct1';

// Act II: Esoteric Roots & Kundalinī (Worlds 08 - 14)
import {
  World08_TraipuraTriangle,
  World09_SvayambhuLinga,
  World10_KundaliniAsleep,
  World11_BijaMantraLam,
  World12_BrahmaAndDakini,
  World13_FiveTattvasLab,
  World14_HistoricalTextVault,
} from './sections/MuladharaAct2';

// Act III: The Psychology of Survival (Worlds 15 - 21)
import {
  World15_SurvivalCompass,
  World16_ScarcityTrap,
  World17_FightFlightFreezeFawn,
  World18_AncestralLedger,
  World19_SafetyIllusion,
  World20_BelongingTest,
  World21_BoundaryWall,
} from './sections/MuladharaAct3';

// Act IV: Somatic Labs & Mini-Games (Worlds 22 - 28)
import {
  World22_GravityBalanceLab,
  World23_TensionDissipationLab,
  World24_BarefootCircuit,
  World25_MulaBandhaLab,
  World26_SenseOfSmell,
  World27_FearDissolver,
  World28_PulseOfTheSoil,
} from './sections/MuladharaAct4';

// Act V: Modern Grounding & Real Life (Worlds 29 - 35)
import {
  World29_TheMoneyVortex,
  World30_ShelterAndHearth,
  World31_ChronicRushSyndrome,
  World32_NutritionOfTheSoil,
  World33_NeurogenicTremor,
  World34_DigitalGrounding,
  World35_MountainPoseTadasana,
} from './sections/MuladharaAct5';

// Act VI: The Awakened Bedrock & Ascent (Worlds 36 - 42)
import {
  World36_ImbalanceDiagnostics,
  World37_GroundingOath,
  World38_TheBedrockMeditation,
  World39_MythsVsEvidence,
  World40_KundaliniCatalyst,
  World41_DailyRootRituals,
  World42_AscentToWaters,
} from './sections/MuladharaAct6';

interface MuladharaDomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const MuladharaDomain: React.FC<MuladharaDomainProps> = ({ onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentAct, setCurrentAct] = useState(1);

  useEffect(() => {
    // Immediate scroll reset so the ascent starts right at World 01
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    const raf = requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const acts = [
    { num: 1, name: 'Foundations', icon: Mountain },
    { num: 2, name: 'Esoteric Roots', icon: Disc },
    { num: 3, name: 'Survival Mind', icon: Compass },
    { num: 4, name: 'Somatic Labs', icon: Activity },
    { num: 5, name: 'Modern Life', icon: Shield },
    { num: 6, name: 'The Bedrock', icon: Award },
  ];

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-red-500/30 font-serif overflow-hidden bg-[#0a0205]">
      {/* Deep Red Cosmic Atmosphere */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0e0207] via-[#1a040b] to-[#080104] pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(220,38,38,0.18),transparent_65%)] pointer-events-none" />

      {/* Top Left Return Button */}
      <button 
        onClick={onClose}
        aria-label="return-to-journey"
        className="fixed top-5 left-5 md:top-10 md:left-10 z-[100] flex items-center space-x-2.5 md:space-x-3 text-white/70 hover:text-white transition-colors uppercase tracking-[0.25em] md:tracking-[0.3em] font-sans text-xs md:text-sm group mix-blend-difference"
      >
        <ArrowLeft size={18} className="transform group-hover:-translate-x-1.5 transition-transform" />
        <span>Return</span>
      </button>

      {/* Bottom Right Floating Act Badge */}
      <div className="fixed bottom-5 right-5 z-[100] hidden sm:flex items-center space-x-2 bg-black/60 border border-red-900/40 px-4 py-2 rounded-full backdrop-blur-md text-[11px] font-sans uppercase tracking-widest text-red-300">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span>Mūlādhāra • 42 Sacred Worlds</span>
      </div>

      {/* Main Scrollable Canvas (All 42 Worlds) */}
      <div 
        ref={scrollRef} 
        className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden"
      >
        {/* ACT I: WORLDS 01 - 07 */}
        <World01_EarthDescent />
        <World02_WhatIsMuladhara />
        <World03_EvolutionOfSurvival />
        <World04_ThePhysicalAnchor />
        <World05_PrithviMandala />
        <World06_TheFourPetals />
        <World07_AiravataElephant />

        {/* ACT II: WORLDS 08 - 14 */}
        <World08_TraipuraTriangle />
        <World09_SvayambhuLinga />
        <World10_KundaliniAsleep />
        <World11_BijaMantraLam />
        <World12_BrahmaAndDakini />
        <World13_FiveTattvasLab />
        <World14_HistoricalTextVault />

        {/* ACT III: WORLDS 15 - 21 */}
        <World15_SurvivalCompass />
        <World16_ScarcityTrap />
        <World17_FightFlightFreezeFawn />
        <World18_AncestralLedger />
        <World19_SafetyIllusion />
        <World20_BelongingTest />
        <World21_BoundaryWall />

        {/* ACT IV: WORLDS 22 - 28 */}
        <World22_GravityBalanceLab />
        <World23_TensionDissipationLab />
        <World24_BarefootCircuit />
        <World25_MulaBandhaLab />
        <World26_SenseOfSmell />
        <World27_FearDissolver />
        <World28_PulseOfTheSoil />

        {/* ACT V: WORLDS 29 - 35 */}
        <World29_TheMoneyVortex />
        <World30_ShelterAndHearth />
        <World31_ChronicRushSyndrome />
        <World32_NutritionOfTheSoil />
        <World33_NeurogenicTremor />
        <World34_DigitalGrounding />
        <World35_MountainPoseTadasana />

        {/* ACT VI: WORLDS 36 - 42 */}
        <World36_ImbalanceDiagnostics />
        <World37_GroundingOath />
        <World38_TheBedrockMeditation />
        <World39_MythsVsEvidence />
        <World40_KundaliniCatalyst />
        <World41_DailyRootRituals />
        <World42_AscentToWaters onExit={onClose} />
      </div>
    </div>
  );
};
