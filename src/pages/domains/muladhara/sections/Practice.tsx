import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

export const PracticeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FOOD' | 'MOVEMENT' | 'NATURE'>('FOOD');

  return (
    <section id="practice" className="min-h-screen py-32 px-6 relative bg-[#020101]">
      
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Embodiment</h2>
          <h1 className="text-5xl md:text-7xl mb-8 text-white">The Practice</h1>
        </div>

        {/* Practice Nav */}
        <div className="flex justify-center space-x-4 mb-16">
          {(['FOOD', 'MOVEMENT', 'NATURE'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 border rounded-full font-sans tracking-[0.2em] transition-all duration-300 text-sm uppercase
                ${activeTab === tab 
                  ? 'bg-red-900/30 border-red-500 text-red-100 shadow-[0_0_20px_rgba(220,38,38,0.2)]' 
                  : 'bg-black/50 border-white/10 text-white/40 hover:text-white/80 hover:border-white/30'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[600px] relative">
          <AnimatePresence mode="wait">
            
            {/* FOOD TAB */}
            {activeTab === 'FOOD' && (
              <motion.div
                key="FOOD"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#120505] p-10 md:p-16 rounded-[2rem] border border-red-900/30"
              >
                <div className="mb-12">
                  <h2 className="text-4xl text-white mb-6">The Earth Table</h2>
                  <SourceBadge 
                    type="EVIDENCE" 
                    text="There is no scientifically established food that automatically 'activates' Mūlādhāra. Grounding comes from the consistency and nourishment of the meals, not magical ingredients." 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {name: 'Root Vegetables', img: '🍠'},
                    {name: 'Whole Grains', img: '🌾'},
                    {name: 'Legumes & Nuts', img: '🥜'},
                    {name: 'Hydration', img: '💧'}
                  ].map((item) => (
                    <div key={item.name} className="bg-black/50 p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center space-y-4 hover:border-red-500/50 transition-colors">
                      <div className="text-5xl mb-2 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{item.img}</div>
                      <h3 className="text-lg text-red-100 font-sans uppercase tracking-widest">{item.name}</h3>
                    </div>
                  ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-emerald-900/10 p-8 rounded-2xl border-l-4 border-emerald-500">
                    <h3 className="text-emerald-400 font-sans tracking-widest uppercase mb-4">Supportive for Grounding</h3>
                    <ul className="space-y-3 text-white/70">
                      <li>• Regular, nourishing meal times</li>
                      <li>• Adequate hydration</li>
                      <li>• Minimally processed whole foods</li>
                      <li>• Culturally appropriate comfort foods</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/10 p-8 rounded-2xl border-l-4 border-red-500">
                    <h3 className="text-red-400 font-sans tracking-widest uppercase mb-4">Avoid Extremes</h3>
                    <ul className="space-y-3 text-white/70">
                      <li>• Aggressive fasting / starvation</li>
                      <li>• Punishing "detoxes"</li>
                      <li>• Restrictive chakra diets</li>
                      <li>• Fear-based food rules</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* MOVEMENT TAB */}
            {activeTab === 'MOVEMENT' && (
              <motion.div
                key="MOVEMENT"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#120505] p-10 md:p-16 rounded-[2rem] border border-red-900/30 text-center"
              >
                <h2 className="text-4xl text-white mb-6">The Movement Wheel</h2>
                <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto">
                  Do not claim a movement mechanically "opens" the root. These are simply practices oriented towards bodily presence.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { title: 'Walking', desc: 'Notice the strike of the heel.' },
                    { title: 'Standing', desc: 'Tadasana. Feel the four corners of the feet.' },
                    { title: 'Squatting', desc: 'Malasana. Opening the pelvic floor.' },
                    { title: 'Seated', desc: 'Feel the sit bones anchor into the chair.' }
                  ].map((move) => (
                    <div key={move.title} className="w-64 h-64 bg-black/50 border border-white/10 rounded-full flex flex-col justify-center items-center p-8 transition-transform hover:scale-105 hover:border-red-500/50">
                      <h3 className="text-red-400 font-sans tracking-widest uppercase mb-4">{move.title}</h3>
                      <p className="text-white/60 text-sm">{move.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* NATURE TAB */}
            {activeTab === 'NATURE' && (
              <motion.div
                key="NATURE"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative h-[600px] rounded-[2rem] border border-red-900/30 overflow-hidden flex flex-col items-center justify-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1500&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-center">
                  <h2 className="text-4xl text-white mb-12">The Digital Grounding Chamber</h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    {['LOOK', 'TOUCH', 'WALK', 'LISTEN', 'BREATHE', 'NOTICE'].map(action => (
                      <button key={action} className="px-6 py-2 border border-white/20 rounded-full text-white/70 font-sans tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
