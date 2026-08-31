import React, { useEffect, useRef } from 'react';
import { type ChakraData } from '../../data/chakras';
import { ArrowLeft, Eye, Sparkles, MoonStar } from 'lucide-react';

interface DomainProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const ThirdEyeDomain: React.FC<DomainProps> = ({ chakra, onClose }) => {
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
    <div className="fixed inset-0 z-50 text-white selection:bg-indigo-500/30 font-serif overflow-hidden bg-[#070514]">
      
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#070514] via-[#0d0926] to-[#04030a] opacity-90" />

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
            <img src={bgImage} alt="Third Eye Frame" className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070514]/80 to-[#070514]" />
          </div>
          
          <h1 className="relative z-10 text-[12rem] md:text-[20rem] leading-none text-indigo-500/10 select-none mb-[-10rem] md:mb-[-15rem]">
            {chakra.sanskritCharacter}
          </h1>
          
          <h2 className="relative z-10 font-sans tracking-[0.5em] text-sm md:text-lg uppercase text-indigo-300 mb-8">
            The Seat of Intuition
          </h2>
          <h1 className="relative z-10 text-7xl md:text-9xl lg:text-[12rem] tracking-tighter text-indigo-50 mb-12 drop-shadow-2xl">
            {chakra.sanskritName}
          </h1>
          <p className="relative z-10 text-2xl md:text-4xl text-indigo-200/80 max-w-4xl italic leading-relaxed">
            "Pierce the illusion of duality. Witness the eternal twilight where all truths converge."
          </p>

          <div className="absolute bottom-16 flex flex-col items-center animate-bounce opacity-50 z-10">
            <span className="font-sans text-xs uppercase tracking-[0.3em] mb-4 text-indigo-300">Descend</span>
            <div className="w-px h-24 bg-gradient-to-b from-indigo-400 to-transparent" />
          </div>
        </section>

        {/* 2. THE HUMAN STRUGGLE (FAQ & RELATABILITY) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="font-sans text-indigo-400 tracking-[0.3em] uppercase text-sm mb-6">The Human Struggle</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Why do I feel so disconnected from reality?</h2>
              
              <div className="space-y-12 text-2xl md:text-3xl leading-loose text-indigo-50/80">
                <p>
                  You feel entirely lost, devoid of any overarching vision or purpose for your life. You require hard, logical "proof" for every single decision, trapping yourself in a state of paralyzing over-analysis, completely ignoring your gut feelings.
                </p>
                <p>
                  Alternatively, you might suffer from the opposite: losing yourself entirely in daydreams, fantasies, and chronic nightmares, unable to focus on the physical world right in front of you. 
                </p>
                <p className="italic text-indigo-300">
                  You are viewing the world with only two eyes. It is time to open the third.
                </p>
              </div>
            </div>
            
            <div className="relative h-[800px] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-900/50">
              <img 
                src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1500&auto=format&fit=crop" 
                alt="Galactic starry night"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-3xl text-white mb-4">The Illusion of Duality</h4>
                <p className="text-xl text-white/70 leading-relaxed font-sans">
                  The logical mind categorizes the world into good and bad, light and dark. The Third Eye perceives the underlying unity—the hidden geometry connecting all events and people in your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE BLUEPRINT (HEALING LIFESTYLE) */}
        <section className="py-32 bg-[#0a071f] relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h3 className="font-sans text-indigo-400 tracking-[0.3em] uppercase text-sm mb-6">The Blueprint</h3>
              <h2 className="text-5xl md:text-7xl mb-8">Clearing the Vision</h2>
              <div className="w-px h-24 bg-indigo-500/30 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Diet */}
              <div className="bg-[#070514] p-12 rounded-3xl border border-indigo-900/30 shadow-2xl">
                <MoonStar size={40} className="text-indigo-500 mb-8" />
                <h3 className="text-4xl mb-6">The Clarifying Diet</h3>
                <p className="text-2xl leading-loose text-indigo-50/70 font-sans font-light">
                  The Third Eye corresponds to the pineal gland. Support brain function with dark chocolate, walnuts, and omega-3s. Consume dark purple/indigo foods: eggplant, purple cabbage, blackberries, and grapes. Reduce fluoride and heavily processed chemicals that calcify the pineal gland.
                </p>
              </div>

              {/* Lifestyle */}
              <div className="bg-[#070514] p-12 rounded-3xl border border-indigo-900/30 shadow-2xl">
                <Eye size={40} className="text-indigo-500 mb-8" />
                <h3 className="text-4xl mb-6">Digital Fasting</h3>
                <p className="text-2xl leading-loose text-indigo-50/70 font-sans font-light">
                  The barrage of artificial blue light and endless information keeps the brain trapped in a low-level beta state. Disconnect completely. Keep a dream journal by your bed and write down your dreams immediately upon waking to strengthen the bridge to your subconscious.
                </p>
              </div>

              {/* Affirmations */}
              <div className="bg-[#070514] p-12 rounded-3xl border border-indigo-900/30 shadow-2xl">
                <Sparkles size={40} className="text-indigo-500 mb-8" />
                <h3 className="text-4xl mb-6">Mantras of Insight</h3>
                <ul className="space-y-6 text-2xl leading-relaxed text-indigo-50/70 italic">
                  <li>"I trust my intuition perfectly."</li>
                  <li>"I see the truth beyond physical illusions."</li>
                  <li>"I am deeply connected to my inner wisdom."</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE AWAKENING (YOGA) */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-900/50">
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1500&auto=format&fit=crop" 
                alt="Childs Pose Yoga"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-sans text-indigo-400 tracking-[0.3em] uppercase text-sm mb-6">Somatic Release</h3>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">Grounding the Mind</h2>
              
              <div className="space-y-8 text-2xl leading-loose text-indigo-50/80 font-sans font-light">
                <p>
                  To awaken the Third Eye safely, we actually need to surrender the physical head to the earth. 
                </p>
                <p>
                  <strong className="text-indigo-300 font-normal">Balasana (Child's Pose)</strong> is profoundly effective. As you lower your forehead to the mat, you apply gentle physical pressure directly to the Ājñā chakra. 
                </p>
                <p>
                  Breathe deeply into your lower back and let the racing, analytical mind literally drain into the floor. This physical submission allows true intuition to rise to the surface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE ETERNAL PRACTICE (MEDITATION) */}
        <section className="py-40 px-6 text-center relative bg-black">
           <div className="absolute inset-0 bg-indigo-900/10" />
           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-6xl md:text-8xl mb-12 text-indigo-500 drop-shadow-lg">The Seed of Light</h2>
             <p className="text-3xl md:text-4xl leading-loose text-white/90 mb-16 italic">
               {chakra.meditationPractice}
             </p>
             <h1 className="text-[12rem] md:text-[18rem] leading-none text-indigo-600/40 select-none mix-blend-screen blur-[2px]">
               {chakra.sanskritCharacter}
             </h1>
             <p className="font-sans text-indigo-400 tracking-[0.5em] uppercase mt-8">Bija Mantra: OM</p>
           </div>
        </section>

      </div>
    </div>
  );
};
