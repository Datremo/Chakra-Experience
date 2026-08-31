import React, { useEffect, useRef, useState } from 'react';
import { type ChakraData } from '../data/chakras';
import { ArrowLeft, Wind, Flame, Droplets, Mountain, Sparkles, Brain, Eye, Apple, Activity, Heart, Volume2 } from 'lucide-react';

interface ChakraDomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

const getElementIcon = (element: string) => {
  if (element.includes('Earth')) return <Mountain size={24} />;
  if (element.includes('Water')) return <Droplets size={24} />;
  if (element.includes('Fire')) return <Flame size={24} />;
  if (element.includes('Air')) return <Wind size={24} />;
  if (element.includes('Ether') || element.includes('Space')) return <Sparkles size={24} />;
  if (element.includes('Light')) return <Eye size={24} />;
  if (element.includes('Thought')) return <Brain size={24} />;
  return <Sparkles size={24} />;
};

export const ChakraDomain: React.FC<ChakraDomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'diet' | 'practices' | 'affirmations'>('practices');

  // Lock body scroll when mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const midFrame = Math.floor((chakra.frameStart + chakra.frameEnd) / 2).toString().padStart(4, '0');
  const bgImage = `/assets/chakra-frames/frame_${midFrame}.jpg`;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white selection:bg-white/30">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen transition-transform duration-1000 scale-110"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'contrast(1.2) brightness(0.8)'
        }}
      />
      
      {/* Colored Tint Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-60 mix-blend-multiply"
        style={{ backgroundColor: chakra.hexColor }}
      />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Floating Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 left-8 z-50 flex items-center space-x-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] font-sans text-xs group"
      >
        <ArrowLeft size={16} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Return to Journey</span>
      </button>

      {/* Main Scrollable Content */}
      <div 
        ref={scrollRef}
        className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        {/* 1. THE PORTAL (HERO) */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ backgroundColor: chakra.hexColor }} />
          
          <h1 className="font-serif text-[15rem] md:text-[20rem] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" style={{ color: chakra.hexColor }}>
            {chakra.sanskritCharacter}
          </h1>

          <h4 className="font-sans text-sm tracking-[0.5em] uppercase text-white/60 mb-6 drop-shadow-md z-10">
            The {chakra.englishName} Domain
          </h4>
          <h1 
            className="font-serif text-7xl md:text-9xl lg:text-[10rem] tracking-tighter text-glow drop-shadow-2xl mb-8 leading-none z-10"
            style={{ color: chakra.hexColor }}
          >
            {chakra.sanskritName}
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-white/80 max-w-2xl leading-relaxed z-10">
            "{chakra.gatewayHook}"
          </p>
          
          <div className="mt-24 flex flex-col items-center animate-bounce opacity-50 z-10">
            <span className="font-sans text-xs uppercase tracking-[0.3em] mb-2">Descend Deeper</span>
            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-32 space-y-32">
          
          {/* 2. THE AWAKENING (BASIC INFO) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 flex items-center">
                <span className="w-8 h-px bg-white/50 mr-6" />
                The Awakening
              </h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 mb-8">
                {chakra.basicDescription}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Core Desire</h4>
                  <p className="font-serif text-xl" style={{ color: chakra.hexColor }}>{chakra.coreDesire}</p>
                </div>
                <div>
                  <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Development</h4>
                  <p className="font-serif text-xl" style={{ color: chakra.hexColor }}>{chakra.developmentalStage}</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-10 rounded-3xl relative overflow-hidden text-center border-t-2" style={{ borderTopColor: chakra.hexColor }}>
               <div className="absolute inset-0 opacity-10" style={{ backgroundColor: chakra.hexColor }} />
               <div className="flex justify-center mb-6 opacity-80" style={{ color: chakra.hexColor }}>
                 {getElementIcon(chakra.element)}
               </div>
               <h3 className="font-serif text-3xl mb-2">The {chakra.element} Element</h3>
               <p className="font-sans text-white/70">Governs: {chakra.associatedOrgans}</p>
            </div>
          </section>

          {/* 3. THE DIAGNOSIS (IMBALANCE) */}
          <section className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">The Diagnosis</h2>
              <p className="font-sans text-white/50 uppercase tracking-[0.2em] text-sm">Identifying the state of your {chakra.englishName} Chakra</p>
              <div className="w-24 h-px bg-white/20 mx-auto mt-8" />
            </div>

            <div className="glass-panel p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" style={{ backgroundColor: chakra.hexColor }} />
              <h3 className="font-sans text-sm tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full mr-3 bg-white" style={{ backgroundColor: chakra.hexColor, boxShadow: `0 0 10px ${chakra.hexColor}` }} />
                Harmony (Balanced State)
              </h3>
              <p className="font-serif text-2xl leading-relaxed text-white/90 text-center max-w-4xl mx-auto">
                "{chakra.balancedExperience}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel p-10 rounded-3xl border-l-4 border-red-500/50 hover:border-red-500 transition-colors">
                <h3 className="font-sans text-sm tracking-[0.3em] uppercase text-red-400 mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-red-500" />
                  Deficient (Underactive)
                </h3>
                <p className="font-sans text-lg leading-relaxed text-white/70">
                  {chakra.unbalancedUnderactive}
                </p>
              </div>

              <div className="glass-panel p-10 rounded-3xl border-l-4 border-orange-500/50 hover:border-orange-500 transition-colors">
                <h3 className="font-sans text-sm tracking-[0.3em] uppercase text-orange-400 mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-orange-500" />
                  Excessive (Overactive)
                </h3>
                <p className="font-sans text-lg leading-relaxed text-white/70">
                  {chakra.unbalancedOveractive}
                </p>
              </div>
            </div>
          </section>

          {/* 4. THE HEALING PATH (ACTIONABLE) */}
          <section className="pt-16 border-t border-white/10">
            <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">The Healing Path</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-row md:flex-col gap-4 md:w-64 overflow-x-auto pb-4 md:pb-0">
                <button 
                  onClick={() => setActiveTab('practices')}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-sans uppercase tracking-widest text-xs transition-all whitespace-nowrap ${activeTab === 'practices' ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'}`}
                >
                  <Activity size={16} /> <span>Practices</span>
                </button>
                <button 
                  onClick={() => setActiveTab('diet')}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-sans uppercase tracking-widest text-xs transition-all whitespace-nowrap ${activeTab === 'diet' ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'}`}
                >
                  <Apple size={16} /> <span>Healing Diet</span>
                </button>
                <button 
                  onClick={() => setActiveTab('affirmations')}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-sans uppercase tracking-widest text-xs transition-all whitespace-nowrap ${activeTab === 'affirmations' ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'}`}
                >
                  <Heart size={16} /> <span>Affirmations</span>
                </button>
              </div>

              <div className="flex-1 glass-panel p-10 md:p-16 rounded-3xl min-h-[300px]">
                {activeTab === 'practices' && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="font-serif text-2xl mb-8 text-white/90">Lifestyle & Yoga</h3>
                    <ul className="space-y-6">
                      {chakra.healingPractices.map((practice, i) => (
                        <li key={i} className="flex items-start space-x-4">
                          <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: chakra.hexColor }} />
                          <span className="font-sans text-lg text-white/80 leading-relaxed">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'diet' && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="font-serif text-2xl mb-8 text-white/90">Nourishing the {chakra.englishName}</h3>
                    <p className="font-sans text-xl leading-relaxed text-white/80">
                      {chakra.healingDiet}
                    </p>
                  </div>
                )}

                {activeTab === 'affirmations' && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="font-serif text-2xl mb-8 text-white/90">Mantras of Truth</h3>
                    <div className="space-y-6">
                      {chakra.affirmations.map((aff, i) => (
                        <p key={i} className="font-serif text-2xl md:text-3xl italic text-white/80 pl-6 border-l-4" style={{ borderLeftColor: chakra.hexColor }}>
                          "{aff}"
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 5. THE RESONANCE (ADVANCED MEDITATION) */}
          <section className="relative glass-panel p-12 md:p-20 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundColor: chakra.hexColor }} />
            
            <div className="flex justify-center mb-8">
              <Volume2 size={32} style={{ color: chakra.hexColor }} className="opacity-80" />
            </div>
            
            <h2 className="font-serif text-4xl mb-4 relative z-10">The Seed Resonance</h2>
            <p className="font-sans text-white/50 uppercase tracking-[0.2em] text-sm mb-12">Bija Mantra: {chakra.bijaMantra}</p>
            
            <p className="font-sans text-xl md:text-2xl leading-relaxed text-white/90 relative z-10 max-w-3xl mx-auto mb-16">
              {chakra.meditationPractice}
            </p>

            <h1 className="font-serif text-[10rem] md:text-[15rem] leading-none opacity-40 text-glow select-none" style={{ color: chakra.hexColor }}>
              {chakra.sanskritCharacter}
            </h1>
          </section>

          {/* Footer Action */}
          <div className="pt-16 pb-32 flex justify-center">
            <button
              onClick={onClose}
              className="group relative px-12 py-6 overflow-hidden rounded-full font-sans tracking-[0.3em] text-sm uppercase transition-all duration-700 hover:scale-105"
            >
              <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/50 transition-colors duration-500" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: chakra.hexColor }}
              />
              <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-500 flex items-center space-x-3">
                <ArrowLeft size={16} />
                <span>Ascend to Journey</span>
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
