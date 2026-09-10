import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FluidBackground } from "./components/FluidBackground";
import { type ChakraData } from "../../../data/chakras";

import { IntroSection } from "./sections/01_Intro";
import { WhatIsItSection } from "./sections/02_WhatIsIt";
import { NameSection } from "./sections/03_Name";
import { LocationSection } from "./sections/04_Location";
import { TheNatureOfWaterSection } from "./sections/05_TheNatureOfWater";
import { HistoricalOriginSection } from "./sections/06_HistoricalOrigin";
import { TheMakaraMythSection } from "./sections/07_TheMakaraMyth";
import { MandalaExplorerSection } from "./sections/08_MandalaExplorer";
import { WaterElementSection } from "./sections/09_WaterElement";
import { MoonSymbolismSection } from "./sections/10_MoonSymbolism";
import { BijaSection } from "./sections/11_Bija";
import { SacralSoundscapeSection } from "./sections/12_SacralSoundscape";
import { EmotionTideSection } from "./sections/13_EmotionTide";
import { NavigatingJealousySection } from "./sections/14_NavigatingJealousy";
import { GuiltAndShameSection } from "./sections/15_GuiltAndShame";
import { EmotionalSuppressionSection } from "./sections/16_EmotionalSuppression";
import { TheInnerChildSection } from "./sections/17_TheInnerChild";
import { TheArtOfLettingGoSection } from "./sections/18_TheArtOfLettingGo";
import { DesireSection } from "./sections/19_Desire";
import { AddictionVsNourishmentSection } from "./sections/20_AddictionVsNourishment";
import { PleasureSection } from "./sections/21_Pleasure";
import { SensationAndTasteSection } from "./sections/22_SensationAndTaste";
import { SexualitySection } from "./sections/23_Sexuality";
import { IntimacyBeyondSexSection } from "./sections/24_IntimacyBeyondSex";
import { BoundariesInWaterSection } from "./sections/25_BoundariesInWater";
import { RelationshipsSection } from "./sections/26_Relationships";
import { DualitiesSection } from "./sections/27_Dualities";
import { CreativeCurrentSection } from "./sections/28_CreativeCurrent";
import { CreativeBlocksSection } from "./sections/29_CreativeBlocks";
import { TheSacralBodySection } from "./sections/30_TheSacralBody";
import { SymptomsOfImbalanceSection } from "./sections/31_SymptomsOfImbalance";
import { SymptomsOfBalanceSection } from "./sections/32_SymptomsOfBalance";
import { FoodAndMovementSection } from "./sections/33_FoodAndMovement";
import { SacralAestheticsSection } from "./sections/34_SacralAesthetics";
import { FluidMovementSection } from "./sections/35_FluidMovement";
import { ChangeAndImpermanenceSection } from "./sections/36_ChangeAndImpermanence";
import { WaterMeditationSection } from "./sections/37_WaterMeditation";
import { BalanceSection } from "./sections/38_Balance";
import { ActivationSection } from "./sections/39_Activation";
import { RealLifeExperimentSection } from "./sections/40_RealLifeExperiment";
import { EvidenceAndMythsSection } from "./sections/41_EvidenceAndMyths";
import { JournalSection } from "./sections/42_Journal";
import { EndingSection } from "./sections/43_Ending";

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const SvadhisthanaDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  void chakra;
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black text-white font-sans">
      <FluidBackground />

      {/* Exit Deep Dive button — always visible top-left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={onClose}
        className="fixed top-5 left-5 z-[100] flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-orange-500/30 text-orange-200/70 hover:text-white hover:border-orange-400 hover:bg-black/80 transition-all duration-300 backdrop-blur-md font-sans text-xs tracking-widest uppercase group"
      >
        <X size={14} className="group-hover:rotate-90 transition-transform duration-300" />
        Exit Deep Dive
      </motion.button>

      {/* Scroll container — snap-proximity so user can still see partial sections */}
      <div
        id="svadhisthana-scroll-container"
        className="relative z-10 h-full w-full overflow-y-scroll overflow-x-hidden"
      >
        <div><IntroSection /></div>
        <div><WhatIsItSection /></div>
        <div><NameSection /></div>
        <div><LocationSection /></div>
        <div><TheNatureOfWaterSection /></div>
        <div><HistoricalOriginSection /></div>
        <div><TheMakaraMythSection /></div>
        <div><MandalaExplorerSection /></div>
        <div><WaterElementSection /></div>
        <div><MoonSymbolismSection /></div>
        <div><BijaSection /></div>
        <div><SacralSoundscapeSection /></div>
        <div><EmotionTideSection /></div>
        <div><NavigatingJealousySection /></div>
        <div><GuiltAndShameSection /></div>
        <div><EmotionalSuppressionSection /></div>
        <div><TheInnerChildSection /></div>
        <div><TheArtOfLettingGoSection /></div>
        <div><DesireSection /></div>
        <div><AddictionVsNourishmentSection /></div>
        <div><PleasureSection /></div>
        <div><SensationAndTasteSection /></div>
        <div><SexualitySection /></div>
        <div><IntimacyBeyondSexSection /></div>
        <div><BoundariesInWaterSection /></div>
        <div><RelationshipsSection /></div>
        <div><DualitiesSection /></div>
        <div><CreativeCurrentSection /></div>
        <div><CreativeBlocksSection /></div>
        <div><TheSacralBodySection /></div>
        <div><SymptomsOfImbalanceSection /></div>
        <div><SymptomsOfBalanceSection /></div>
        <div><FoodAndMovementSection /></div>
        <div><SacralAestheticsSection /></div>
        <div><FluidMovementSection /></div>
        <div><ChangeAndImpermanenceSection /></div>
        <div><WaterMeditationSection /></div>
        <div><BalanceSection /></div>
        <div><ActivationSection /></div>
        <div><RealLifeExperimentSection /></div>
        <div><EvidenceAndMythsSection /></div>
        <div><JournalSection /></div>
        <div><EndingSection onClose={onClose ?? (() => {})} /></div>
      </div>
    </div>
  );
};
