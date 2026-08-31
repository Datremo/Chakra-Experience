import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../data/chakras';
import { ArrowLeft, Mountain, Leaf, CircleFadingArrowUp } from 'lucide-react';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const RootDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
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
    <div className="fixed inset-0 z-50 text-white selection:bg-red-500/30 font-serif overflow-hidden bg-[#1a0505]">
      
      {/* Soft Ambient Background - Eradicating pure black */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a0505] via-[#2a0808] to-[#0a0000] opacity-90" />

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
            <img src={bgImage} alt="Root Frame" className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0505]/80 to-[#1a0505]" />
          </div>
          
          <h1 className="relative z-10 text-[12rem] md:text-[20rem] leading-none text-red-500/10 select-none mb-[-10rem] md:mb-[-15rem]">
            {chakra.sanskritCharacter}
          </h1>
          
          <h2 className="relative z-10 font-sans tracking-[0.5em] text-sm md:text-lg uppercase text-red-300 mb-8">
            The Foundation of Existence
          </h2>
          <h1 className="relative z-10 text-7xl md:text-9xl lg:text-[12rem] tracking-tighter text-red-50 mb-12 drop-shadow-2xl">
            {chakra.sanskritName}
          </h1>
          <p className="relative z-10 text-2xl md:text-4xl text-red-200/80 max-w-4xl italic leading-relaxed">
            "Before the mind can wander the cosmos, the body must be held by the earth."
          </p>

          <div className="absolute bottom-16 flex flex-col items-center animate-bounce opacity-50 z-10">
            <span className="font-sans text-xs uppercase tracking-[0.3em] mb-4 text-red-300">Descend</span>
            <div className="w-px h-24 bg-gradient-to-b from-red-400 to-transparent" />
          </div>
        </section>

        {/* 2. THE HUMAN STRUGGLE (FAQ & RELATABILITY) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="font-sans text-red-400 tracking-[0.3em] uppercase text-sm mb-6">The Human Struggle</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Why do I feel so entirely lost?</h2>
              
              <div className="space-y-12 text-2xl md:text-3xl leading-loose text-red-50/80">
                <p>
                  You wake up every day with a low-level static of anxiety. It feels as though the ground beneath you might give way at any moment. You cannot commit to a career, a place, or a person, because your subconscious believes that nothing is truly permanent.
                </p>
                <p>
                  This is the shadow of the Root Chakra. When Mūlādhāra is untethered, the psychological anchor is severed. You are a kite in a hurricane with no string connecting you to the earth.
                </p>
                <p className="italic text-red-300">
                  You are not broken. You have simply forgotten how to be held by the world.
                </p>
              </div>
            </div>
            
            <div className="relative h-[800px] rounded-[3rem] overflow-hidden shadow-2xl shadow-red-900/50">
              <img 
                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1500&auto=format&fit=crop" 
                alt="Dark forest mist"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-3xl text-white mb-4">The Illusion of Scarcity</h4>
                <p className="text-xl text-white/70 leading-relaxed font-sans">
                  The belief that there is "not enough" (money, love, time) is a profound distortion of the Root. The Earth is endlessly abundant; it is our perception that is starved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE BLUEPRINT (HEALING LIFESTYLE) */}
        <section className="py-32 bg-[#230606] relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h3 className="font-sans text-red-400 tracking-[0.3em] uppercase text-sm mb-6">The Blueprint</h3>
              <h2 className="text-5xl md:text-7xl mb-8">Nourishing the Foundation</h2>
              <div className="w-px h-24 bg-red-500/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Diet */}
              <div className="bg-[#1a0505] p-12 rounded-3xl border border-red-900/30 shadow-2xl">
                <Mountain size={40} className="text-red-500 mb-8" />
                <h3 className="text-4xl mb-6">Earthen Diet</h3>
                <p className="text-2xl leading-loose text-red-50/70 font-sans font-light">
                  Consume what grows beneath the soil. Potatoes, carrots, beets, and radishes hold the dense, slow-moving energy of the earth. High-quality proteins ground the nervous system, signaling to the body that the famine is over.
                </p>
              </div>

              {/* Lifestyle */}
              <div className="bg-[#1a0505] p-12 rounded-3xl border border-red-900/30 shadow-2xl">
                <Leaf size={40} className="text-red-500 mb-8" />
                <h3 className="text-4xl mb-6">Earthing</h3>
                <p className="text-2xl leading-loose text-red-50/70 font-sans font-light">
                  Remove your shoes. Stand in the grass, the dirt, or the sand. The human body is a highly conductive antenna. By touching the raw earth, you discharge stagnant anxiety directly into the ground, absorbing stabilizing electrons.
                </p>
              </div>

              {/* Affirmations */}
              <div className="bg-[#1a0505] p-12 rounded-3xl border border-red-900/30 shadow-2xl">
                <CircleFadingArrowUp size={40} className="text-red-500 mb-8" />
                <h3 className="text-4xl mb-6">Mantras of Truth</h3>
                <ul className="space-y-6 text-2xl leading-relaxed text-red-50/70 italic">
                  <li>"I am profoundly safe."</li>
                  <li>"I have a right to take up space."</li>
                  <li>"The universe provides for my every need."</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE AWAKENING (YOGA) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl shadow-red-900/50">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1500&auto=format&fit=crop" 
                alt="Yoga Warrior Pose"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-sans text-red-400 tracking-[0.3em] uppercase text-sm mb-6">Somatic Release</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Anchoring the Vessel</h2>
              
              <div className="space-y-8 text-2xl leading-loose text-red-50/80 font-sans font-light">
                <p>
                  Trauma and fear are not just mental concepts; they are physically stored in the body, particularly in the psoas muscle, the hips, and the lower spine.
                </p>
                <p>
                  To unlock the Root, you must demand presence from your legs. Poses like <strong className="text-red-300 font-normal">Virabhadrasana (Warrior I & II)</strong> and <strong className="text-red-300 font-normal">Tadasana (Mountain Pose)</strong> force you to feel the undeniable solidity of the floor. 
                </p>
                <p>
                  Stand still. Feel the four corners of your feet pressing into the mat. You are immovable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE ETERNAL PRACTICE (MEDITATION) */}
        <section className="py-40 px-6 text-center relative bg-black">
           <div className="absolute inset-0 bg-red-900/10" />
           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-6xl md:text-8xl mb-12 text-red-500 drop-shadow-lg">The Seed of Stillness</h2>
             <p className="text-3xl md:text-4xl leading-loose text-white/90 mb-16 italic">
               {chakra.meditationPractice}
             </p>
             <h1 className="text-[12rem] md:text-[18rem] leading-none text-red-600/40 select-none mix-blend-screen blur-[2px]">
               {chakra.sanskritCharacter}
             </h1>
             <p className="font-sans text-red-400 tracking-[0.5em] uppercase mt-8">Bija Mantra: LAM</p>
           </div>
        </section>

      </div>
    </div>
  );
};
