import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DAYS = [
  { day: 1, title: 'The Heat Check', desc: 'Observe your metabolic and mental fire today. Are you sluggish? Are you burning out? Just record the temperature without trying to change it.' },
  { day: 2, title: 'Physical Agni', desc: 'Eat only when hungry. Do not snack between meals. Notice what it feels like to let the digestive fire fully complete its cycle before adding more fuel.' },
  { day: 3, title: 'The ' + "'No'" + ' Audit', desc: 'Where are you saying "yes" when your body is screaming "no"? Locate one small boundary you can assert today. Assert it cleanly.' },
  { day: 4, title: 'Mental Diet', desc: 'Agni digests information too. Today, fast from all news, social media scrolling, and unnecessary digital input. Notice the mental clarity.' },
  { day: 5, title: 'The Pause', desc: 'When triggered today, do not react immediately. Insert a 5-second pause between the stimulus and your response. Feel the heat of the impulse.' },
  { day: 6, title: 'Core Engagement', desc: 'Do 10 minutes of core-focused physical movement (Navāsana, planks, or Kapālabhāti breath if appropriate). Feel the physical center of gravity.' },
  { day: 7, title: 'The Inner Forge', desc: 'Take one unresolved problem or fear. Mentally drop it into the fire of the solar plexus. What is the very first, smallest actionable step you can take to resolve it?' },
];

export const SevenDayJourneySection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#040100] relative flex items-center justify-center">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Application</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">7-Day Furnace</h1>
          <p className="text-xl text-amber-100/60 font-light max-w-2xl mx-auto leading-relaxed italic">
            Knowledge without action is unlit kindling. Commit to one practice a day to steady the fire.
          </p>
        </div>

        <div className="relative w-full max-w-4xl">
          
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-amber-900/30 -translate-y-1/2 hidden md:block" />

          {/* Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {DAYS.map((dayData, i) => (
              <motion.div
                key={dayData.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center group cursor-pointer"
                onClick={() => setActiveDay(activeDay === dayData.day ? null : dayData.day)}
              >
                
                {/* Day Node */}
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center bg-[#0a0300] z-10 transition-all duration-300
                  ${activeDay === dayData.day 
                    ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]' 
                    : 'border-amber-900/50 group-hover:border-amber-500/50'}
                `}>
                  <span className={`font-serif text-lg ${activeDay === dayData.day ? 'text-amber-400' : 'text-amber-100/50'}`}>
                    {dayData.day}
                  </span>
                </div>

                {/* Day Label (Mobile inline, Desktop top/bottom alternating) */}
                <div className="mt-4 text-center md:absolute md:w-32 md:mt-0 md:-translate-x-1/2 md:left-1/2">
                  <h3 className={`font-sans text-xs tracking-widest uppercase transition-colors
                    ${activeDay === dayData.day ? 'text-amber-400' : 'text-amber-500/60 group-hover:text-amber-200'}
                  `}
                  style={{ top: i % 2 === 0 ? '-40px' : '60px', position: 'relative' }} // Alternating on desktop, CSS handled mostly by JS here for simplicity, but flex-col handles mobile
                  >
                    {dayData.title}
                  </h3>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="mt-16 h-48 md:mt-32">
            <AnimatePresence mode="wait">
              {activeDay !== null ? (
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/50 rounded-2xl p-8 backdrop-blur-md max-w-2xl mx-auto text-center"
                >
                  <h3 className="font-serif text-2xl text-amber-300 mb-4">Day {activeDay}: {DAYS[activeDay - 1].title}</h3>
                  <p className="text-amber-100/80 font-light leading-relaxed">
                    {DAYS[activeDay - 1].desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-full"
                >
                  <p className="text-amber-500/30 font-sans tracking-[0.2em] uppercase text-sm">
                    Select a day to view the practice.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
