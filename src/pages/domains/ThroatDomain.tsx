import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../data/chakras';
import { ArrowLeft, Mic, Sparkles, Volume2 } from 'lucide-react';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const ThroatDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const midFrame = Math.floor((chakra.frameStart + chakra.frameEnd) / 2).toString().padStart(4, '0');
  const bgImage = `/assets/chakra-frames/frame_${midFrame}.jpg`;

  return (
    <div className="fixed inset-0 z-50 text-white selection:bg-cyan-500/30 font-serif overflow-hidden bg-[#000a0f]">
      
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000a0f] via-[#001724] to-[#000508] opacity-90" />

      {/* Floating Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-10 left-10 z-50 flex items-center space-x-3 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] font-sans text-sm group mix-blend-difference"
      >
        <ArrowLeft size={20} className="transform group-hover:-translate-x-2 transition-transform" />
        <span>Ascend to Journey</span>
      </button>

      {/* Scrollable Canvas */}
      <div ref={scrollRef} className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* 1. THE VISION (HERO) */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-6">
          <div className="absolute inset-0 z-0">
            <img src={bgImage} alt="Throat Frame" className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000a0f]/80 to-[#000a0f]" />
          </div>
          
          <h1 className="relative z-10 text-[12rem] md:text-[20rem] leading-none text-cyan-500/10 select-none mb-[-10rem] md:mb-[-15rem]">
            {chakra.sanskritCharacter}
          </h1>
          
          <h2 className="relative z-10 font-sans tracking-[0.5em] text-sm md:text-lg uppercase text-cyan-300 mb-8">
            The Architecture of Resonance
          </h2>
          <h1 className="relative z-10 text-7xl md:text-9xl lg:text-[12rem] tracking-tighter text-cyan-50 mb-12 drop-shadow-2xl">
            {chakra.sanskritName}
          </h1>
          <p className="relative z-10 text-2xl md:text-4xl text-cyan-200/80 max-w-4xl italic leading-relaxed">
            "Purify the self into vibration. Turn thought into frequency. Speak the silent truth."
          </p>

          <div className="absolute bottom-16 flex flex-col items-center animate-bounce opacity-50 z-10">
            <span className="font-sans text-xs uppercase tracking-[0.3em] mb-4 text-cyan-300">Descend</span>
            <div className="w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>
        </section>

        {/* 2. THE HUMAN STRUGGLE (FAQ & RELATABILITY) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="font-sans text-cyan-400 tracking-[0.3em] uppercase text-sm mb-6">The Human Struggle</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Why am I terrified to speak my mind?</h2>
              
              <div className="space-y-12 text-2xl md:text-3xl leading-loose text-cyan-50/80">
                <p>
                  You frequently swallow your words to keep the peace. You feel a literal "lump in your throat" when it is time to set a boundary. You present a highly edited, heavily filtered version of yourself to the world because the real you feels too dangerous to express.
                </p>
                <p>
                  This is the constriction of Viśuddha. When you constantly lie or suppress your authentic voice, you create an energetic bottleneck. The energy of the lower chakras cannot rise, and the inspiration of the higher chakras cannot descend.
                </p>
                <p className="italic text-cyan-300">
                  Keeping the peace by lying to yourself is the loudest form of war.
                </p>
              </div>
            </div>
            
            <div className="relative h-[800px] rounded-[3rem] overflow-hidden shadow-2xl shadow-cyan-900/50">
              <img 
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1500&auto=format&fit=crop" 
                alt="Foggy mountain peak"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-3xl text-white mb-4">The Illusion of Silence</h4>
                <p className="text-xl text-white/70 leading-relaxed font-sans">
                  We often confuse silence with peace. But true silence is a choice, not a prison. If you are quiet because you are afraid, your body is screaming internally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE BLUEPRINT (HEALING LIFESTYLE) */}
        <section className="py-32 bg-[#00131c] relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h3 className="font-sans text-cyan-400 tracking-[0.3em] uppercase text-sm mb-6">The Blueprint</h3>
              <h2 className="text-5xl md:text-7xl mb-8">Unlocking the Voice</h2>
              <div className="w-px h-24 bg-cyan-500/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Diet */}
              <div className="bg-[#000a0f] p-12 rounded-3xl border border-cyan-900/30 shadow-2xl">
                <Sparkles size={40} className="text-cyan-500 mb-8" />
                <h3 className="text-4xl mb-6">The Soothing Diet</h3>
                <p className="text-2xl leading-loose text-cyan-50/70 font-sans font-light">
                  The throat governs the physical vocal cords and thyroid. Consume soothing, hydrating liquids like warm lemon water, honey, and herbal teas. Sea plants (kelp, nori) support thyroid health. Blue foods (blueberries, blackberries) resonate energetically with this center.
                </p>
              </div>

              {/* Lifestyle */}
              <div className="bg-[#000a0f] p-12 rounded-3xl border border-cyan-900/30 shadow-2xl">
                <Mic size={40} className="text-cyan-500 mb-8" />
                <h3 className="text-4xl mb-6">Unfiltered Expression</h3>
                <p className="text-2xl leading-loose text-cyan-50/70 font-sans font-light">
                  Start journaling your thoughts entirely unfiltered. Do not edit yourself. Sing loudly in the car. The physical vibration of your vocal cords physically clears the energetic blockage. Alternatively, practice periods of total, intentional silence (Mauna).
                </p>
              </div>

              {/* Affirmations */}
              <div className="bg-[#000a0f] p-12 rounded-3xl border border-cyan-900/30 shadow-2xl">
                <Volume2 size={40} className="text-cyan-500 mb-8" />
                <h3 className="text-4xl mb-6">Mantras of Truth</h3>
                <ul className="space-y-6 text-2xl leading-relaxed text-cyan-50/70 italic">
                  <li>"My voice matters and my truth is worth hearing."</li>
                  <li>"I express my authentic self with total freedom."</li>
                  <li>"I listen deeply to others and speak with loving clarity."</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE AWAKENING (YOGA) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl shadow-cyan-900/50">
              <img 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1500&auto=format&fit=crop" 
                alt="Throat Yoga Pose"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-sans text-cyan-400 tracking-[0.3em] uppercase text-sm mb-6">Somatic Release</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Releasing the Jaw</h2>
              
              <div className="space-y-8 text-2xl leading-loose text-cyan-50/80 font-sans font-light">
                <p>
                  Unexpressed anger and unspoken words are physically stored in the jaw, the neck, and the upper shoulders. We clench our teeth when we are holding back.
                </p>
                <p>
                  <strong className="text-cyan-300 font-normal">Simhasana (Lion’s Pose)</strong> is the ultimate throat opener. You stick your tongue out forcefully, open your eyes wide, and exhale with a loud "HA" sound. It looks ridiculous, and that is precisely why it works—it shatters the ego's fear of judgment.
                </p>
                <p>
                  Combine this with gentle neck rolls to mechanically release the vocal cords.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE ETERNAL PRACTICE (MEDITATION) */}
        <section className="py-40 px-6 text-center relative bg-black">
           <div className="absolute inset-0 bg-cyan-900/10" />
           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-6xl md:text-8xl mb-12 text-cyan-500 drop-shadow-lg">The Seed of Ether</h2>
             <p className="text-3xl md:text-4xl leading-loose text-white/90 mb-16 italic">
               {chakra.meditationPractice}
             </p>
             <h1 className="text-[12rem] md:text-[18rem] leading-none text-cyan-600/40 select-none mix-blend-screen blur-[2px]">
               {chakra.sanskritCharacter}
             </h1>
             <p className="font-sans text-cyan-400 tracking-[0.5em] uppercase mt-8">Bija Mantra: HAM</p>
           </div>
        </section>

      </div>
    </div>
  );
};
