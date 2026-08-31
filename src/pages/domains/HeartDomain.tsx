import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../data/chakras';
import { ArrowLeft, Wind, Heart, Leaf } from 'lucide-react';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const HeartDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
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
    <div className="fixed inset-0 z-50 text-white selection:bg-green-500/30 font-serif overflow-hidden bg-[#051a0a]">
      
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#051a0a] via-[#0a2410] to-[#020a04] opacity-90" />

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
            <img src={bgImage} alt="Heart Frame" className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#051a0a]/80 to-[#051a0a]" />
          </div>
          
          <h1 className="relative z-10 text-[12rem] md:text-[20rem] leading-none text-green-500/10 select-none mb-[-10rem] md:mb-[-15rem]">
            {chakra.sanskritCharacter}
          </h1>
          
          <h2 className="relative z-10 font-sans tracking-[0.5em] text-sm md:text-lg uppercase text-green-300 mb-8">
            The Infinite Center
          </h2>
          <h1 className="relative z-10 text-7xl md:text-9xl lg:text-[12rem] tracking-tighter text-green-50 mb-12 drop-shadow-2xl">
            {chakra.sanskritName}
          </h1>
          <p className="relative z-10 text-2xl md:text-4xl text-green-200/80 max-w-4xl italic leading-relaxed">
            "The bridge between the dense earth and the weightless sky. Here, the illusion of separation dissolves."
          </p>

          <div className="absolute bottom-16 flex flex-col items-center animate-bounce opacity-50 z-10">
            <span className="font-sans text-xs uppercase tracking-[0.3em] mb-4 text-green-300">Descend</span>
            <div className="w-px h-24 bg-gradient-to-b from-green-400 to-transparent" />
          </div>
        </section>

        {/* 2. THE HUMAN STRUGGLE (FAQ & RELATABILITY) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="font-sans text-green-400 tracking-[0.3em] uppercase text-sm mb-6">The Human Struggle</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Why do I feel so profoundly lonely?</h2>
              
              <div className="space-y-12 text-2xl md:text-3xl leading-loose text-green-50/80">
                <p>
                  You can be in a room full of people who love you, yet feel an agonizing, invisible wall separating you from them. You hold onto past grievances like armor, terrified that if you let down your guard, you will be destroyed.
                </p>
                <p>
                  This is the armor of a wounded Heart Chakra. When Anāhata is closed, the world becomes a transaction. We give love only to get it, and we withhold it as punishment. The result is total isolation.
                </p>
                <p className="italic text-green-300">
                  Grief is simply love with nowhere to go. It is time to let it out.
                </p>
              </div>
            </div>
            
            <div className="relative h-[800px] rounded-[3rem] overflow-hidden shadow-2xl shadow-green-900/50">
              <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1500&auto=format&fit=crop" 
                alt="Lush green forest"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-3xl text-white mb-4">The Illusion of Separation</h4>
                <p className="text-xl text-white/70 leading-relaxed font-sans">
                  The belief that you are entirely separate from others allows cruelty and loneliness to exist. Opening the heart means realizing that to hurt another is to literally hurt a part of yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE BLUEPRINT (HEALING LIFESTYLE) */}
        <section className="py-32 bg-[#020a04] relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h3 className="font-sans text-green-400 tracking-[0.3em] uppercase text-sm mb-6">The Blueprint</h3>
              <h2 className="text-5xl md:text-7xl mb-8">Nourishing the Heart</h2>
              <div className="w-px h-24 bg-green-500/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Diet */}
              <div className="bg-[#051a0a] p-12 rounded-3xl border border-green-900/30 shadow-2xl">
                <Leaf size={40} className="text-green-500 mb-8" />
                <h3 className="text-4xl mb-6">The Chlorophyll Diet</h3>
                <p className="text-2xl leading-loose text-green-50/70 font-sans font-light">
                  Eat the captured sunlight of the earth. Leafy greens (spinach, kale, chard), broccoli, and green apples. Chlorophyll structurally resembles human blood; consuming it deeply oxygenates and purifies the physical heart and vascular system.
                </p>
              </div>

              {/* Lifestyle */}
              <div className="bg-[#051a0a] p-12 rounded-3xl border border-green-900/30 shadow-2xl">
                <Wind size={40} className="text-green-500 mb-8" />
                <h3 className="text-4xl mb-6">Pranayama (Breath)</h3>
                <p className="text-2xl leading-loose text-green-50/70 font-sans font-light">
                  The element of the heart is Air. Shallow breathing keeps the body in a state of panic (Root). Deep, intentional, slow breathing signals safety, allowing the ribcage to expand and the emotional heart to physically soften and open.
                </p>
              </div>

              {/* Affirmations */}
              <div className="bg-[#051a0a] p-12 rounded-3xl border border-green-900/30 shadow-2xl">
                <Heart size={40} className="text-green-500 mb-8" />
                <h3 className="text-4xl mb-6">Mantras of Compassion</h3>
                <ul className="space-y-6 text-2xl leading-relaxed text-green-50/70 italic">
                  <li>"I forgive myself completely."</li>
                  <li>"I give and receive love effortlessly."</li>
                  <li>"I am inherently worthy of love."</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE AWAKENING (YOGA) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl shadow-green-900/50">
              <img 
                src="https://images.unsplash.com/photo-1593810450967-f9c42734e326?q=80&w=1500&auto=format&fit=crop" 
                alt="Camel Pose Yoga"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-sans text-green-400 tracking-[0.3em] uppercase text-sm mb-6">Somatic Release</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Shattering the Armor</h2>
              
              <div className="space-y-8 text-2xl leading-loose text-green-50/80 font-sans font-light">
                <p>
                  When we are hurt, our physical posture changes. We round our shoulders and cave our chest inward, creating a literal bone-and-muscle shield over the physical heart.
                </p>
                <p>
                  To undo this, we must stretch the front of the body. Poses like <strong className="text-green-300 font-normal">Ustrasana (Camel Pose)</strong> and <strong className="text-green-300 font-normal">Bhujangasana (Cobra Pose)</strong> forcefully open the ribcage. 
                </p>
                <p>
                  These poses can induce profound emotional releases. If you cry while opening your chest, understand that you are finally letting years of trapped grief exit the body.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE ETERNAL PRACTICE (MEDITATION) */}
        <section className="py-40 px-6 text-center relative bg-black">
           <div className="absolute inset-0 bg-green-900/10" />
           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-6xl md:text-8xl mb-12 text-green-500 drop-shadow-lg">The Seed of Love</h2>
             <p className="text-3xl md:text-4xl leading-loose text-white/90 mb-16 italic">
               {chakra.meditationPractice}
             </p>
             <h1 className="text-[12rem] md:text-[18rem] leading-none text-green-600/40 select-none mix-blend-screen blur-[2px]">
               {chakra.sanskritCharacter}
             </h1>
             <p className="font-sans text-green-400 tracking-[0.5em] uppercase mt-8">Bija Mantra: YAM</p>
           </div>
        </section>

      </div>
    </div>
  );
};
