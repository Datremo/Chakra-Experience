import React, { useEffect, useState, useRef } from 'react';
import { type ChakraData } from '../../../data/chakras';
import { JourneyMap } from './components/JourneyMap';
import { ArrowLeft } from 'lucide-react';

import { IntroSection } from './sections/Intro';
import { WhatIsItSection } from './sections/WhatIsIt';
import { NameSection } from './sections/Name';
import { LocationSection } from './sections/Location';
import { OriginTimelineSection } from './sections/OriginTimeline';
import { MandalaExplorerSection } from './sections/MandalaExplorer';
import { EarthElementSection } from './sections/EarthElement';
import { RootThemesSection } from './sections/RootThemes';
import { RealLifeSection } from './sections/RealLife';
import { PracticeSection } from './sections/Practice';
import { MantraSection } from './sections/Mantra';
import { MeditationSection } from './sections/Meditation';
import { ActivationSection } from './sections/Activation';
import { EvidenceAndMythsSection } from './sections/EvidenceAndMyths';
import { IntegrationSection } from './sections/Integration';
import { EndingSection } from './sections/Ending';

interface MuladharaDomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const MuladharaDomain: React.FC<MuladharaDomainProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: scrollRef.current, threshold: 0.5 }
    );

    const sections = scrollRef.current?.querySelectorAll('section');
    sections?.forEach((section) => observer.observe(section));

    return () => {
      document.body.style.overflow = '';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-red-500/30 font-serif overflow-hidden bg-[#0a0505]">
      
      {/* Dynamic Ambient Background based on section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0202] via-[#1a0505] to-[#050101] opacity-90 transition-colors duration-1000" />

      {/* Persistent Navigation Elements */}
      <button 
        onClick={onClose}
        aria-label="return-to-journey"
        className="fixed top-5 left-5 md:top-10 md:left-10 z-[100] flex items-center space-x-2.5 md:space-x-3 text-white/70 hover:text-white transition-colors uppercase tracking-[0.25em] md:tracking-[0.3em] font-sans text-xs md:text-sm group mix-blend-difference"
      >
        <ArrowLeft size={18} className="transform group-hover:-translate-x-1.5 transition-transform" />
        <span>Return</span>
      </button>

      <JourneyMap activeSection={activeSection} />

      {/* Main Scrollable Canvas */}
      <div ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        <IntroSection />
        <WhatIsItSection />
        <NameSection />
        <LocationSection />
        <OriginTimelineSection />
        <MandalaExplorerSection />
        <EarthElementSection />
        <RootThemesSection />
        <RealLifeSection />
        <PracticeSection />
        <MantraSection />
        <MeditationSection />
        <ActivationSection />
        <EvidenceAndMythsSection />
        <IntegrationSection />
        <EndingSection onExit={onClose} />

      </div>
    </div>
  );
};
