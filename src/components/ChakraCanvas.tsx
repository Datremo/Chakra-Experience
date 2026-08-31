import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { chakras, type ChakraData } from '../data/chakras';

gsap.registerPlugin(ScrollTrigger);

interface ChakraCanvasProps {
  onChakraChange: (chakra: ChakraData | null) => void;
  onIntroChange?: (isIntro: boolean) => void;
}

const TOTAL_FRAMES = 568;

export const ChakraCanvas: React.FC<ChakraCanvasProps> = ({ onChakraChange, onIntroChange }) => {
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
        // We use object-cover via tailwind on the canvas element itself,
        // so we just draw the image filling the canvas coordinate space
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
        {loadedCount < TOTAL_FRAMES && (
          <div className="absolute inset-0 flex items-center justify-center flex-col z-50 bg-black text-white">
            <h1 className="font-serif text-3xl tracking-widest mb-4 uppercase text-glow">Awakening</h1>
            <div className="w-64 h-1 bg-white/20 rounded overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
            <p className="mt-4 font-sans text-white/50 text-sm">
              {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
            </p>
          </div>
        )}
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
