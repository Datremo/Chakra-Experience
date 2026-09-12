import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { MobileInfoPopup } from '../components/MobileInfoPopup';

export const FireTriangleSection: React.FC = () => {
  const [activeFace, setActiveFace] = useState(0); // 0, 1, 2
  const [activeAspect, setActiveAspect] = useState<'shape' | 'svastika' | 'dimension'>('shape');
  
  // Motion value for Y rotation
  const rotationY = useMotionValue(0);

  // Determine active face based on rotation (0 to 360 mapped)
  useEffect(() => {
    return rotationY.onChange(v => {
      // Normalize to 0-360 positive
      let normalized = v % 360;
      if (normalized < 0) normalized += 360;
      
      if (normalized > 300 || normalized <= 60) setActiveFace(0);
      else if (normalized > 60 && normalized <= 180) setActiveFace(1); // the right face
      else setActiveFace(2); // the left face
    });
  }, [rotationY]);

  // Auto rotate slowly
  useEffect(() => {
    const controls = animate(rotationY, rotationY.get() - 360, {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    });
    return controls.stop;
  }, [rotationY]);

  const handleDragEnd = (e: any, info: any) => {
    // Stop the manual drag, let it glide a bit
    const current = rotationY.get();
    animate(rotationY, current + info.velocity.x * 0.2, {
      type: "inertia",
      velocity: info.velocity.x,
      power: 0.2
    });
  };

  return (
    <section className="min-h-[100dvh] py-0 lg:py-32 bg-black lg:bg-[#040000] relative flex items-center justify-center overflow-hidden">
      
      <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 relative z-10 h-[100dvh] lg:h-full pointer-events-none lg:pointer-events-auto">
        
        {/* Left: 3D Visualization (Absolute Fullscreen on Mobile) */}
        <div className="absolute inset-0 lg:relative lg:h-[600px] flex items-center justify-center pointer-events-auto" style={{ perspective: 1200 }}>
          
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={handleDragEnd}
            style={{ rotateY: rotationY, transformStyle: "preserve-3d" }}
            className="relative w-64 h-64 cursor-grab active:cursor-grabbing"
          >
            {/* The 3 faces of the prism. 
                Equilateral triangle base. side = 256. 
                Radius of circumscribed circle (distance from center to vertex) = side / sqrt(3) ~ 147.
                Apothem (distance from center to side) = radius / 2 ~ 73.
            */}
            
            {/* Face 0 (Front initially) */}
            <div 
              className="absolute inset-0 flex items-center justify-center border-2 border-red-500/50 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] backdrop-blur-md"
              style={{ transform: 'rotateY(0deg) translateZ(74px)', clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            >
              <div className="text-red-500 font-serif text-2xl -mt-16">I</div>
            </div>

            {/* Face 1 (Right) */}
            <div 
              className="absolute inset-0 flex items-center justify-center border-2 border-orange-500/50 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] backdrop-blur-md"
              style={{ transform: 'rotateY(120deg) translateZ(74px)', clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            >
              <div className="text-orange-500 font-serif text-2xl -mt-16">II</div>
            </div>

            {/* Face 2 (Left) */}
            <div 
              className="absolute inset-0 flex items-center justify-center border-2 border-amber-500/50 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] backdrop-blur-md"
              style={{ transform: 'rotateY(240deg) translateZ(74px)', clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            >
              <div className="text-amber-500 font-serif text-2xl -mt-16">III</div>
            </div>

            {/* Glowing core inside */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
              <div className="w-16 h-16 bg-red-600/50 rounded-full blur-[20px] animate-pulse" />
            </div>

          </motion.div>

          <p className="absolute bottom-40 lg:bottom-10 text-red-500/40 text-[10px] lg:text-xs tracking-[0.2em] uppercase lg:block hidden">Drag to rotate the prism</p>
        </div>

        {/* Right: Interactive Controls (Desktop) */}
        <div className="hidden lg:flex flex-col justify-center">
          {renderContent()}
        </div>

        {/* Mobile Popup Modal */}
        <MobileInfoPopup buttonLabel="GEOMETRY" title="Sacred Geometry">
          {renderContent()}
        </MobileInfoPopup>

      </div>
    </section>
  );

  function renderContent() {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        
        {/* Header - Fixed */}
        <div className="flex-shrink-0 mb-6 lg:mb-8">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-2 lg:mb-4">Sacred Geometry</h2>
          <h1 className="text-3xl lg:text-5xl md:text-6xl font-serif text-amber-50 mb-3 lg:mb-6">The Agni Maṇḍala</h1>
        </div>
        
        {/* Aspect Buttons - Fixed */}
        <div className="flex flex-col gap-2 lg:gap-3 mb-6 lg:mb-8 flex-shrink-0">
          <button
            onClick={() => setActiveAspect('shape')}
            className={`w-full text-left px-4 py-3 lg:px-6 lg:py-4 rounded-xl border transition-all duration-300 flex justify-between items-center
              ${activeAspect === 'shape' 
                ? 'bg-red-900/40 border-red-500/50 text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                : 'bg-[#140600]/80 border-red-900/30 text-white/50 hover:border-red-500/30'
              }`}
          >
            <span className="font-sans tracking-widest text-[10px] lg:text-sm uppercase">1. The Triangle (Shape)</span>
            <span className="text-red-500 font-serif">△</span>
          </button>
          
          <button
            onClick={() => setActiveAspect('svastika')}
            className={`w-full text-left px-4 py-3 lg:px-6 lg:py-4 rounded-xl border transition-all duration-300 flex justify-between items-center
              ${activeAspect === 'svastika' 
                ? 'bg-amber-900/40 border-amber-500/50 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                : 'bg-[#140600]/80 border-amber-900/30 text-white/50 hover:border-amber-500/30'
              }`}
          >
            <span className="font-sans tracking-widest text-[10px] lg:text-sm uppercase">2. T-Shaped Marks (Svāstika)</span>
            <span className="text-amber-500 font-serif">卐</span>
          </button>

          <button
            onClick={() => setActiveAspect('dimension')}
            className={`w-full text-left px-4 py-3 lg:px-6 lg:py-4 rounded-xl border transition-all duration-300 flex justify-between items-center
              ${activeAspect === 'dimension' 
                ? 'bg-orange-900/40 border-orange-500/50 text-orange-100 shadow-[0_0_20px_rgba(249,115,22,0.2)]' 
                : 'bg-[#140600]/80 border-orange-900/30 text-white/50 hover:border-orange-500/30'
              }`}
          >
            <span className="font-sans tracking-widest text-[10px] lg:text-sm uppercase">3. Multidimensionality</span>
            <span className="text-orange-500 font-serif">⬡</span>
          </button>
        </div>

        {/* Dynamic Content - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeAspect === 'shape' && (
              <motion.div key="shape" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="bg-[#140600]/80 backdrop-blur-md border border-red-900/30 p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.05)]">
                  <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <SourceBadge type="TRADITION" />
                  </div>
                  <p className="text-red-100/80 font-light leading-relaxed text-sm lg:text-base">
                    Fire is universally represented by an upward-pointing triangle (trikoṇa). It symbolizes the rising, consuming nature of flame. 
                    In the subtle body, this triangle is the "City of Gems," blazing like a rising sun.
                  </p>
                </div>
              </motion.div>
            )}

            {activeAspect === 'svastika' && (
              <motion.div key="svastika" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="bg-[#140600]/80 backdrop-blur-md border border-amber-900/30 p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                  <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <SourceBadge type="SYMBOLIC" />
                  </div>
                  <p className="text-amber-100/80 font-light leading-relaxed text-sm lg:text-base">
                    The three sides of the triangle are often adorned with T-shaped marks (svastikas), an ancient symbol of auspiciousness and solar movement, reinforcing this center's connection to the sun.
                  </p>
                </div>
              </motion.div>
            )}

            {activeAspect === 'dimension' && (
              <motion.div key="dimension" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="bg-[#140600]/80 backdrop-blur-md border border-orange-900/30 p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.05)]">
                  <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <SourceBadge type="MODERN" />
                  </div>
                  <p className="text-orange-100/80 font-light leading-relaxed text-sm lg:text-base">
                    While drawn as 2D shapes in texts, Tantric visualizations are profoundly spatial. You are not meant to look *at* a flat triangle; you are meant to construct a three-dimensional temple of fire *within* your body.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
};
