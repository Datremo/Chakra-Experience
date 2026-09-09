import React from 'react';

export const ActivationSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center px-6 relative overflow-hidden bg-[#02040a]">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Demystification</h2>
          <h1 className="text-4xl md:text-6xl mb-8 font-serif text-white max-w-4xl mx-auto leading-tight">
            What does "Sacral Activation" actually mean?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-orange-900/10 border border-orange-500/20 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="font-sans text-orange-300 tracking-[0.2em] uppercase text-sm mb-4">Tradition</h3>
            <p className="text-orange-100/70 font-light leading-relaxed">
              In classical systems, "activation" (often through KundalinÄ« awakening) refers to piercing the knot (granthi) at this center, redirecting outward desire inward toward spiritual liberation.
            </p>
          </div>
          
          <div className="bg-teal-900/10 border border-teal-500/20 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="font-sans text-teal-300 tracking-[0.2em] uppercase text-sm mb-4">Modern Interpretation</h3>
            <p className="text-teal-100/70 font-light leading-relaxed">
              In contemporary wellness, "activation" or "opening" usually means achieving a healthy state of emotional intelligence, creative expression, and non-compulsive relationship to pleasure.
            </p>
          </div>
          
          <div className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="font-sans text-blue-300 tracking-[0.2em] uppercase text-sm mb-4">Science</h3>
            <p className="text-blue-100/70 font-light leading-relaxed">
              There is no scientifically validated instrument that measures "Sacral Chakra activation." We cannot quantify an energetic "opening" on a scanner.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-black/40 border border-white/5 p-8 md:p-16 rounded-[3rem]">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-50 mb-6">How long does it take?</h2>
            <p className="text-xl text-orange-200/60 font-light mb-8 italic">
              There is no universal activation timeline.
            </p>
            <div className="space-y-4 text-white/60 font-light leading-relaxed">
              <p>
                Beware of programs promising to "Open Your Sacral Chakra in 7 Days" or assigning a percentage to your chakra health (e.g., "Sacral = 82% open").
              </p>
              <p>
                Developing emotional fluidity, establishing boundaries, and recovering from creative blockages are lifelong human practices, not quick biological switches.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-6 p-6 border-b border-white/10">
              <span className="font-serif text-3xl text-orange-500/50">01</span>
              <span className="font-sans tracking-widest text-lg uppercase text-white/80">Notice.</span>
            </div>
            <div className="flex items-center space-x-6 p-6 border-b border-white/10">
              <span className="font-serif text-3xl text-teal-500/50">02</span>
              <span className="font-sans tracking-widest text-lg uppercase text-white/80">Practice.</span>
            </div>
            <div className="flex items-center space-x-6 p-6 border-b border-white/10">
              <span className="font-serif text-3xl text-blue-500/50">03</span>
              <span className="font-sans tracking-widest text-lg uppercase text-white/80">Reflect.</span>
            </div>
            <div className="flex items-center space-x-6 p-6">
              <span className="font-serif text-3xl text-purple-500/50">04</span>
              <span className="font-sans tracking-widest text-lg uppercase text-white/80">Repeat.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
