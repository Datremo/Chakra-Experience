import React from 'react';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';
import { Droplet } from 'lucide-react';

export const RealLifeExperimentSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#040810]">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.05),transparent_60%)]" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-teal-400 tracking-[0.3em] uppercase text-sm mb-6">Integration</h2>
          <h1 className="text-4xl md:text-6xl mb-6 font-serif text-white">The 24-Hour Flow Experiment</h1>
          <p className="text-xl text-teal-100/60 font-light italic">
            Bring the theory out of the mind and into the current of your day.
          </p>
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-teal-900/30 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          <Droplet size={300} className="absolute -right-20 -bottom-20 text-teal-900/20" />

          <div className="space-y-6 relative z-10 mb-16">
            {svadhisthanaData.realLifeExperiment.map((task: any, i: number) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 rounded-full border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-teal-500/50 hover:bg-teal-400 transition-colors cursor-pointer" />
                </div>
                <p className="text-lg text-white/80 font-light">{task}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-teal-900/40 pt-12 text-center relative z-10">
             <p className="text-2xl text-teal-300 font-serif italic">
               «What changed when you noticed the urge before following it?»
             </p>
          </div>

        </div>

      </div>
    </section>
  );
};
