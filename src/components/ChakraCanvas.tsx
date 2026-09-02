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
}

const TOTAL_FRAMES = 568;

export const ChakraCanvas: React.FC<ChakraCanvasProps> = ({ 
  onChakraChange, 
  onIntroChange,
  onLoadingProgress,
  onLoadingComplete 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

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
          // Desktop: preserve existing behavior exactly
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
          // Mobile: Fix the framing of the existing hero image with true aspect-ratio preservation
          // Fill canvas background with black to blend seamlessly with the frame background
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Native frame aspect ratio (1920 / 1080 = 16:9)
          const imgAspect = 16 / 9;

          // In the 16:9 source frames:
          // - Meditating figure spans horizontally from ~27% to ~73% (approx 46% of frame width)
          // - Meditating figure spans vertically from ~14% (topknot) to ~83% (seated legs)
          // - The heart chakra center is at ~46% of frame height
          // Scale frame width to ~1.92x viewport width so both mudra hands and knees fit comfortably (~6% margin)
          const maxDwByHeight = (canvas.height * 0.55) / (0.69 * (9 / 16));
          const dw = Math.min(canvas.width * 1.92, maxDwByHeight);
          const dh = dw / imgAspect;

          // Center horizontally
          const dx = (canvas.width - dw) / 2;

          // Position the chakra at ~43% of mobile viewport height
          // Keeps topknot safely below the top-centered title and seated legs safely above the bottom quote/CTA
          const targetChakraY = canvas.height * 0.43;
          const dy = targetChakraY - (dh * 0.46);

          ctx.drawImage(img, dx, dy, dw, dh);
        }
      }
    };

    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawImage(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Find current frame based on scroll
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

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(self.progress * TOTAL_FRAMES))
          );

          requestAnimationFrame(() => {
            drawImage(frameIndex);

            // Check active chakra
            const currentFrame = frameIndex + 1; // 1-indexed
            const activeChakra = chakras.find(
              c => currentFrame >= c.frameStart && currentFrame <= c.frameEnd
            );
            onChakraChange(activeChakra || null);
            if (onIntroChange) {
              onIntroChange(currentFrame < 26);
            }
          });
        }
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      timeline.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loadedCount, images, onChakraChange]);

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
