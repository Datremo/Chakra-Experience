import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PracticalTab = 'DIET' | 'ASANA' | 'BREATH';

export const FoodAndMovementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PracticalTab>('DIET');

  const content = {
    DIET: {
      title: "Fueling the Furnace",
      subtitle: "Ayurvedic Dietary Principles",
      items: [
        { label: "Warm Foods", desc: "Cold drinks and raw foods extinguish digestive fire. Favor warm, cooked meals." },
        { label: "Spices", desc: "Ginger, black pepper, cumin, and fennel gently stimulate Agni without overheating the system." },
        { label: "Spacing", desc: "Eating before the previous meal is digested (Adhyashana) creates Ama (toxins). Give the fire time to burn clean." }
      ],
      icon: "🔥"
    },
    ASANA: {
      title: "Generating Heat",
      subtitle: "Core-Focused Postures",
      items: [
        { label: "Navāsana (Boat Pose)", desc: "Directly engages the abdominal wall, building physical heat and endurance." },
        { label: "Ardha Matsyendrāsana (Twist)", desc: "Spinal twists are traditionally said to 'wring out' the abdominal organs and stimulate digestive fire." },
        { label: "Sūrya Namaskāra (Sun Salutations)", desc: "The rhythmic movement generates systemic heat and connects breath to movement." }
      ],
      icon: "🧘"
    },
    BREATH: {
      title: "Stoking the Embers",
      subtitle: "Prāṇāyāma for Maṇipūra",
      items: [
        { label: "Kapālabhāti", desc: "'Skull Shining Breath'. Rapid, forceful exhalations pump the abdomen, aggressively stoking internal heat." },
        { label: "Bhastrikā", desc: "'Bellows Breath'. Forceful inhalation and exhalation. Extremely heating and energizing." },
        { label: "Caution", desc: "These practices should be avoided by those with high blood pressure, extreme anxiety, or active inflammation." }
      ],
      icon: "💨"
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#030100] relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Practical Application</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50">Tending the Fire</h1>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-12">
          
          {/* Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {(['DIET', 'ASANA', 'BREATH'] as PracticalTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300
                  ${activeTab === tab 
                    ? 'bg-amber-900/40 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
                    : 'bg-black/50 border-amber-900/30 hover:border-amber-700/50 hover:bg-black/80'
                  }
                `}
              >
                <div className="text-3xl mb-2">{content[tab].icon}</div>
                <h3 className={`text-xl font-serif ${activeTab === tab ? 'text-amber-400' : 'text-amber-100/70'}`}>
                  {content[tab].title}
                </h3>
                <p className="text-xs font-sans tracking-widest uppercase text-amber-500/50 mt-2">
                  {content[tab].subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/40 border border-amber-900/50 rounded-3xl p-8 md:p-12 h-full"
              >
                <h2 className="text-3xl font-serif text-amber-200 mb-8">{content[activeTab].title}</h2>
                
                <div className="space-y-8">
                  {content[activeTab].items.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-l-2 border-amber-500/30 pl-6"
                    >
                      <h4 className="text-lg font-serif text-amber-400 mb-2">{item.label}</h4>
                      <p className="text-amber-100/70 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
