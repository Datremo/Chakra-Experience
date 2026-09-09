import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const EmotionTideSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [selectedEmotion, setSelectedEmotion] = useState<{ label: string, id: string, color: string } | null>(null);
  const [tidePhase, setTidePhase] = useState<'ARRIVAL' | 'RISING' | 'PEAK' | 'FALLING' | 'PASSING' | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!selectedEmotion) return;

    const isFast = ['anger', 'excitement', 'jealousy'].includes(selectedEmotion.id);
    const multiplier = isFast ? 0.5 : (selectedEmotion.id === 'sadness' ? 1.5 : 1.0);

    const seq0 = setTimeout(() => setTidePhase('ARRIVAL'), 0);
    const seq1 = setTimeout(() => setTidePhase('RISING'), 2000 * multiplier);
    const seq2 = setTimeout(() => setTidePhase('PEAK'), 4000 * multiplier);
    const seq3 = setTimeout(() => setTidePhase('FALLING'), 6000 * multiplier);
    const seq4 = setTimeout(() => setTidePhase('PASSING'), 8000 * multiplier);

    return () => {
      clearTimeout(seq0);
      clearTimeout(seq1);
      clearTimeout(seq2);
      clearTimeout(seq3);
      clearTimeout(seq4);
    };
  }, [selectedEmotion]);

  // Masterpiece Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedEmotion || tidePhase === 'PASSING') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: any[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Physics parameters based on emotion
    const config = {
      count: 200,
      gravity: 0,
      speedBase: 1,
      turbulence: 0.1,
      size: 5
    };

    switch (selectedEmotion.id) {
      case 'anger':
        config.speedBase = 8;
        config.turbulence = 2;
        config.size = 3;
        config.count = 400;
        break;
      case 'sadness':
        config.gravity = 0.5; // falling tears
        config.speedBase = 0;
        config.turbulence = 0.05;
        config.size = 8;
        break;
      case 'joy':
        config.gravity = -0.5; // floating bubbles
        config.speedBase = 2;
        config.turbulence = 0.5;
        config.size = 12;
        config.count = 150;
        break;
      case 'jealousy':
      case 'excitement':
        config.speedBase = 5;
        config.turbulence = 1.5;
        config.count = 300;
        break;
      case 'loneliness':
        config.speedBase = 0.5;
        config.turbulence = 0.01;
        config.count = 50; // sparse
        break;
      default:
        break;
    }

    // Phase scaling
    let phaseIntensity = 0.2;
    if (tidePhase === 'RISING') phaseIntensity = 0.6;
    if (tidePhase === 'PEAK') phaseIntensity = 1.0;
    if (tidePhase === 'FALLING') phaseIntensity = 0.4;

    // Initialize particles
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        vx: (Math.random() - 0.5) * config.speedBase,
        vy: (Math.random() - 0.5) * config.speedBase - (config.gravity === 0 ? 2 : 0), // Base upward flow if no gravity
        life: Math.random(),
        size: Math.random() * config.size + 1
      });
    }

    const draw = () => {

      particles.forEach(p => {
        // Apply physics
        p.x += p.vx + (Math.random() - 0.5) * config.turbulence * phaseIntensity * 10;
        p.y += p.vy + config.gravity * phaseIntensity * 10;

        // Reset if out of bounds
        if (p.y < 0 || p.y > canvas.height || p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
          p.y = config.gravity > 0 ? 0 : canvas.height;
        }

        ctx.beginPath();
        ctx.fillStyle = selectedEmotion.color;
        ctx.globalAlpha = 0.6;
        ctx.arc(p.x, p.y, p.size * phaseIntensity, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [selectedEmotion, tidePhase]);


  return (
    <section className="h-screen w-full flex items-center justify-center px-4 md:px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_stormy_ocean_1788966683966.jpg" 
          alt="Stormy Ocean Emotion Tide" 
          className="w-full h-full object-cover opacity-50 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010308] via-[#010308]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010308] via-[#010308]/60 to-transparent" />
      </div>

      {/* Masterpiece Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-1000 z-0 ${tidePhase === 'PASSING' ? 'opacity-0' : 'opacity-100'}`}
      />

      <div className="relative z-10 max-w-5xl w-full text-center">
        
        <h2 className="font-sans text-blue-400 tracking-[0.3em] uppercase text-sm mb-6">Movement</h2>
        <h1 className="text-4xl md:text-6xl mb-8 font-serif text-white max-w-3xl mx-auto drop-shadow-lg">
          {svadhisthanaData.themes.emotion.headline}
        </h1>

        {!selectedEmotion ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 bg-black/40 p-12 rounded-[3rem] border border-white/5 backdrop-blur-md">
            <p className="text-2xl text-white/80 mb-12 italic font-light">Select an emotion to observe its tide.</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {Object.entries(svadhisthanaData.themes.emotion.tideOptions).map(([id, label]) => {
                const colors: Record<string, string> = {
                  anger: '#EF4444',
                  sadness: '#3B82F6',
                  joy: '#F59E0B',
                  jealousy: '#10B981',
                  excitement: '#F97316',
                  loneliness: '#6366F1',
                  longing: '#A855F7'
                };
                const opt = { id, label: label as string, color: colors[id] || '#FFFFFF' };
                return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedEmotion(opt)}
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all font-sans tracking-widest text-sm uppercase text-white/90 shadow-lg"
                  style={{ textShadow: `0 0 10px ${opt.color}` }}
                >
                  {opt.label}
                </button>
              )})}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 h-[400px] flex flex-col items-center justify-center">
            
            <h3 className="text-6xl md:text-8xl font-serif mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-colors duration-1000" style={{ color: selectedEmotion.color }}>
              {selectedEmotion.label}
            </h3>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-8 mb-12 font-sans tracking-wider sm:tracking-widest text-[11px] sm:text-xs md:text-sm uppercase bg-black/60 px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)] max-w-full">
              {['ARRIVAL', 'RISING', 'PEAK', 'FALLING', 'PASSING'].map(phase => (
                <div 
                  key={phase} 
                  className={`transition-all duration-500 ${tidePhase === phase ? 'text-white font-bold scale-110 md:scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,1)]' : 'text-white/30'}`}
                >
                  {phase}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {tidePhase === 'PASSING' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-black/80 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/10 max-w-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                >
                  <p className="text-4xl text-white/90 font-serif italic mb-8">
                    «Emotions move.»
                  </p>
                  <p className="text-xl text-white/70 font-sans font-light leading-relaxed mb-10">
                    You can notice an emotion without immediately becoming it or acting on it. It arises, peaks, and inevitably passes back into the ocean.
                  </p>
                  <button 
                    onClick={() => setSelectedEmotion(null)}
                    className="px-10 py-4 rounded-full border border-blue-500/50 text-blue-200 bg-blue-900/30 hover:bg-blue-800/50 hover:text-white hover:scale-105 font-sans tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    Observe another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
          </motion.div>
        )}

      </div>
    </section>
  );
};
