import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { chakras, type ChakraData } from '../data/chakras';

gsap.registerPlugin(ScrollTrigger);

interface ChakraCanvasProps {
  onChakraChange: (chakra: ChakraData | null) => void;
  onIntroChange?: (isIntro: boolean) => void;
  onLoadingProgress?: (progress: number) => void;
  onLoadingComplete?: () => void;
  isFrozen?: boolean;
}

const TOTAL_FRAMES = 568;

export const ChakraCanvas: React.FC<ChakraCanvasProps> = ({ 
  onChakraChange, 
  onIntroChange,
  onLoadingProgress,
  onLoadingComplete,
  isFrozen = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Use refs for callbacks so they don't trigger the GSAP effect to rebuild
  const onChakraChangeRef = useRef(onChakraChange);
  const onIntroChangeRef = useRef(onIntroChange);
  const isFrozenRef = useRef(isFrozen);

  useEffect(() => {
    onChakraChangeRef.current = onChakraChange;
  }, [onChakraChange]);

  useEffect(() => {
    onIntroChangeRef.current = onIntroChange;
  }, [onIntroChange]);

  useEffect(() => {
    isFrozenRef.current = isFrozen;
    
    // Completely disable GSAP's scroll tracking when frozen to prevent scrubbing to 0
    if (timelineRef.current?.scrollTrigger) {
      if (isFrozen) {
        timelineRef.current.scrollTrigger.disable(false); // false = don't reset progress
      } else {
        timelineRef.current.scrollTrigger.enable(false);
      }
    }
  }, [isFrozen]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(4, '0');
      img.src = `/assets/chakra-frames/frame_${paddedIndex}.jpg`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        const percent = Math.round((loaded / TOTAL_FRAMES) * 100);
        onLoadingProgress?.(percent);
        if (loaded === TOTAL_FRAMES) {
          onLoadingComplete?.();
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Setup GSAP and Canvas
  useEffect(() => {
    if (loadedCount < TOTAL_FRAMES || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initial draw
    const drawImage = (index: number) => {
      const img = images[index];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const isMobile = window.innerWidth < 768;

        if (!isMobile) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          const imgAspect = 16 / 9;
          const maxDwByHeight = (canvas.height * 0.55) / (0.69 * (9 / 16));
          const dw = Math.min(canvas.width * 1.92, maxDwByHeight);
          const dh = dw / imgAspect;
          const dx = (canvas.width - dw) / 2;
          const targetChakraY = canvas.height * 0.43;
          const dy = targetChakraY - (dh * 0.46);
          ctx.drawImage(img, dx, dy, dw, dh);
        }
      }
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawImage(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const progress = ScrollTrigger.maxScroll(window) > 0
        ? window.scrollY / ScrollTrigger.maxScroll(window)
        : 0;
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * TOTAL_FRAMES))
      );
      drawImage(frameIndex);
    };

    window.addEventListener('resize', handleResize);

    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          if (isFrozenRef.current) return; // Hard fail-safe against 0-scrubs

          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(self.progress * TOTAL_FRAMES))
          );

          requestAnimationFrame(() => {
            if (isFrozenRef.current) return;
            drawImage(frameIndex);

            const currentFrame = frameIndex + 1; // 1-indexed
            const activeChakra = chakras.find(
              c => currentFrame >= c.frameStart && currentFrame <= c.frameEnd
            );
            onChakraChangeRef.current(activeChakra || null);
            if (onIntroChangeRef.current) {
              onIntroChangeRef.current(currentFrame < 26);
            }
          });
        }
      }
    });

    // Check initial freeze state
    if (isFrozenRef.current && timelineRef.current?.scrollTrigger) {
      timelineRef.current.scrollTrigger.disable(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      timelineRef.current?.kill();
      timelineRef.current = null;
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loadedCount, images]);

  return (
    <>
      <div
        id="scroll-container"
        className="absolute top-0 left-0 w-full"
        style={{ height: '25000px' }}
      />
      <div className="fixed inset-0 w-full h-full z-0 bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
        </div>
      </div>
    </>
  );
};
