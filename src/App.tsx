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
  const [savedScrollY, setSavedScrollY] = useState(0);
  const [isIntro, setIsIntro] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lock background body scroll when deep dive domain is active
  useEffect(() => {
    if (domainOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [domainOpen]);

  const handleChakraChange = (chakra: ChakraData | null) => {
    // Only update if it's different and domain is NOT currently open
    if (!domainOpen && activeChakra?.id !== chakra?.id) {
      setActiveChakra(chakra);
    }
  };

  const handleEnterDomain = () => {
    if (activeChakra) {
      setSavedScrollY(window.scrollY);
      setDomainChakra(activeChakra);
      setDomainOpen(true);
    }
  };

  const handleCloseDomain = () => {
    setDomainOpen(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Restore exact scroll position seamlessly
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      setTimeout(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 60);
    });
  };

  return (
    <div className="relative bg-black min-h-screen text-white font-sans selection:bg-white/30">
      
      {/* 
        The canvas handles its own scroll logic.
        We just pass a callback to receive the currently active chakra based on scroll.
      */}
      <ChakraCanvas 
        onChakraChange={handleChakraChange} 
        onIntroChange={setIsIntro}
        onLoadingProgress={setLoadingProgress}
        onLoadingComplete={() => setIsLoaded(true)}
      />
      
      <IntroOverlay 
        isIntro={isIntro && !domainOpen} 
        loadingProgress={loadingProgress}
        isLoaded={isLoaded}
      />

      {/* 
        The Gateway overlay is fixed on top of the canvas.
        It fades in the text and button when a chakra is active.
        It hides itself completely if the domain is open.
      */}
      {!domainOpen && (
        <GatewayOverlay 
          activeChakra={activeChakra}
          onEnterDomain={handleEnterDomain}
        />
      )}

      {/*
        The Domain is a full-screen deep dive that overlays everything.
        Decoupled from activeChakra so scroll changes during deep dive never unmount it.
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
