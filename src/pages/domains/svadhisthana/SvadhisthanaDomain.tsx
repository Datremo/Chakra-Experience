import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FluidBackground } from "./components/FluidBackground";

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
  onClose?: () => void;
}

export const SvadhisthanaDomain: React.FC<DomainProps> = ({ onClose }) => {
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
        style={{ scrollSnapType: "y proximity" }}
      >
        <div style={{ scrollSnapAlign: "start" }}><IntroSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><WhatIsItSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><NameSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><LocationSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><TheNatureOfWaterSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><HistoricalOriginSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><TheMakaraMythSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><MandalaExplorerSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><WaterElementSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><MoonSymbolismSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><BijaSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><SacralSoundscapeSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><EmotionTideSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><NavigatingJealousySection /></div>
        <div style={{ scrollSnapAlign: "start" }}><GuiltAndShameSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><EmotionalSuppressionSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><TheInnerChildSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><TheArtOfLettingGoSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><DesireSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><AddictionVsNourishmentSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><PleasureSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><SensationAndTasteSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><SexualitySection /></div>
        <div style={{ scrollSnapAlign: "start" }}><IntimacyBeyondSexSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><BoundariesInWaterSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><RelationshipsSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><DualitiesSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><CreativeCurrentSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><CreativeBlocksSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><TheSacralBodySection /></div>
        <div style={{ scrollSnapAlign: "start" }}><SymptomsOfImbalanceSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><SymptomsOfBalanceSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><FoodAndMovementSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><SacralAestheticsSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><FluidMovementSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><ChangeAndImpermanenceSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><WaterMeditationSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><BalanceSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><ActivationSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><RealLifeExperimentSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><EvidenceAndMythsSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><JournalSection /></div>
        <div style={{ scrollSnapAlign: "start" }}><EndingSection onClose={onClose ?? (() => {})} /></div>
      </div>
    </div>
  );
};
