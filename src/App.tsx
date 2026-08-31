import { useState } from 'react';
import { ChakraCanvas } from './components/ChakraCanvas';
import { GatewayOverlay } from './components/GatewayOverlay';
import { DomainController } from './pages/DomainController';
import { IntroOverlay } from './components/IntroOverlay';
import { type ChakraData } from './data/chakras';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  const [activeChakra, setActiveChakra] = useState<ChakraData | null>(null);
  const [domainOpen, setDomainOpen] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  const handleChakraChange = (chakra: ChakraData | null) => {
    // Only update if it's different to prevent unnecessary renders
    if (activeChakra?.id !== chakra?.id) {
      setActiveChakra(chakra);
    }
  };

  return (
    <div className="relative bg-black min-h-screen text-white font-sans selection:bg-white/30">
      
      <LanguageSwitcher />

      {/* 
        The canvas handles its own scroll logic.
        We just pass a callback to receive the currently active chakra based on scroll.
      */}
      <ChakraCanvas 
        onChakraChange={handleChakraChange} 
        onIntroChange={setIsIntro}
      />
      
      <IntroOverlay isIntro={isIntro && !domainOpen} />

      {/* 
        The Gateway overlay is fixed on top of the canvas.
        It fades in the text and button when a chakra is active.
        It hides itself completely if the domain is open.
      */}
      {!domainOpen && (
        <GatewayOverlay 
          activeChakra={activeChakra}
          onEnterDomain={() => setDomainOpen(true)}
        />
      )}

      {/*
        The Domain is a full-screen deep dive that overlays everything.
        It locks scroll when open.
      */}
      {domainOpen && activeChakra && (
        <DomainController 
          chakra={activeChakra}
          onClose={() => setDomainOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
