import { useState, useEffect } from 'react';
import { ChakraCanvas } from './components/ChakraCanvas';
import { GatewayOverlay } from './components/GatewayOverlay';
import { DomainController } from './pages/DomainController';
import { IntroOverlay } from './components/IntroOverlay';
import { type ChakraData } from './data/chakras';

function App() {
  const [activeChakra, setActiveChakra] = useState<ChakraData | null>(null);
  const [domainChakra, setDomainChakra] = useState<ChakraData | null>(null);
  const [domainOpen, setDomainOpen] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lock background body scroll while a deep-dive domain is open.
  // Restore the exact previous scroll position when the domain closes.
  useEffect(() => {
    if (!domainOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      window.scrollTo(0, scrollY);
    };
  }, [domainOpen]);

  const handleChakraChange = (chakra: ChakraData | null) => {
    // Ignore background chakra changes while a deep-dive domain is open.
    if (!domainOpen && activeChakra?.id !== chakra?.id) {
      setActiveChakra(chakra);
    }
  };

  const handleEnterDomain = () => {
    if (!activeChakra) return;

    // Freeze the selected chakra so scrolling inside the deep dive
    // cannot cause the domain to unmount or switch.
    setDomainChakra(activeChakra);
    setDomainOpen(true);
  };

  const handleCloseDomain = () => {
    setDomainOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30">
      {/*
        The canvas handles its own scroll logic.
        It reports which chakra is currently active.
      */}
      <ChakraCanvas
        onChakraChange={handleChakraChange}
        onIntroChange={setIsIntro}
        onLoadingProgress={setLoadingProgress}
        onLoadingComplete={() => setIsLoaded(true)}
      />

      {/*
        Intro overlay is hidden while a deep-dive domain is open.
      */}
      <IntroOverlay
        isIntro={isIntro && !domainOpen}
        loadingProgress={loadingProgress}
        isLoaded={isLoaded}
      />

      {/*
        Gateway overlay is shown only while the main chakra experience
        is active and no deep-dive domain is open.
      */}
      {!domainOpen && (
        <GatewayOverlay
          activeChakra={activeChakra}
          onEnterDomain={handleEnterDomain}
        />
      )}

      {/*
        Deep-dive domain is decoupled from activeChakra.
        Once opened, scrolling the background chakra canvas cannot
        change or unmount the selected domain.
      */}
      {domainOpen && domainChakra && (
        <DomainController
          chakra={domainChakra}
          onClose={handleCloseDomain}
        />
      )}
    </div>
  );
}

export default App;