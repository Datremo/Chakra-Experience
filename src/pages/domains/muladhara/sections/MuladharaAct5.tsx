import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, DollarSign, Clock, Apple, Activity, Smartphone, Mountain } from 'lucide-react';

/* =========================================================================
   ACT V: MODERN GROUNDING & REAL LIFE (WORLDS 29 - 35)
   ========================================================================= */

// World 29: The Money Vortex
export const World29_TheMoneyVortex: React.FC = () => {
  const [insightRevealed, setInsightRevealed] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0206] via-[#160309] to-[#0d0205] text-white text-center border-b border-red-900/20">
      <div className="max-w-3xl mx-auto z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 29 • Modern Survival
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Money & Currency Vortex
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          In ancient times, root security meant grain silos and cave shelters. Today, it translates directly into financial terror and bank balances.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto mb-8 text-left">
          <div className="flex items-center space-x-3 text-red-400 mb-4">
            <DollarSign size={24} />
            <h3 className="font-serif text-xl sm:text-2xl text-white">Somatic Currency</h3>
          </div>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-6">
            When money feels scarce, the nervous system reacts as if wolves are outside the yurt. Wealth is often chased not for luxury, but as an attempt to quiet a dysregulated root.
          </p>

          <button
            onClick={() => setInsightRevealed(!insightRevealed)}
            className="w-full py-3 rounded-xl bg-red-800/50 hover:bg-red-700/60 border border-red-500/30 text-white font-sans text-xs uppercase tracking-wider transition-all"
          >
            {insightRevealed ? 'Hide Wisdom' : 'Reveal Grounded Wealth Wisdom'}
          </button>

          {insightRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-4 border-t border-red-900/40 text-xs sm:text-sm text-red-200 font-serif italic"
            >
              «True wealth in Mūlādhāra is not having endless millions. It is having an unshakeable nervous system that knows how to build, recover, and persist through any winter.»
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// World 30: Shelter & Hearth
export const World30_ShelterAndHearth: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0205] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 30 • Spatial Safety
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Shelter, Hearth & Nesting
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The animal body cannot fully relax in an ungrounded or chaotic environment. Your physical living space directly mirrors your root stability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
          <div className="p-6 rounded-2xl bg-black/60 border border-red-900/40">
            <h4 className="font-serif text-lg text-red-200 mb-2">Ungrounded Habitat</h4>
            <p className="font-sans text-xs sm:text-sm text-white/60">
              Cluttered floors, broken locks, transient rentals, lack of physical sanctuary where the nervous system can let down its guard.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/60 border border-emerald-500/40">
            <h4 className="font-serif text-lg text-emerald-200 mb-2">Sacred Hearth</h4>
            <p className="font-sans text-xs sm:text-sm text-white/80">
              A clean bed, weighted blanket, solid wood, plants rooted in dirt, and a designated corner of absolute stillness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// World 31: Chronic Rush Syndrome
export const World31_ChronicRushSyndrome: React.FC = () => {
  const [timer, setTimer] = useState(15);
  const [running, setRunning] = useState(false);

  React.useEffect(() => {
    let interval: any = null;
    if (running && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (timer === 0) {
      setRunning(false);
    }
    return () => clearInterval(interval);
  }, [running, timer]);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 31 • Pacing the Nervous System
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Chronic Rush Syndrome
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The modern disease of feeling constantly late, hurried, and short on time is an ungrounded root illusion. Experience a 15-second intentional deceleration.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto mb-6">
          <div className="text-5xl sm:text-6xl font-serif text-red-400 mb-4 font-bold">
            {timer}s
          </div>
          <p className="text-xs font-sans uppercase tracking-widest text-white/60 mb-6">
            {running ? 'Doing nothing. The world continues spinning without your panic.' : timer === 0 ? 'Deceleration Complete. Feel your feet on the floor.' : 'Ready to pause.'}
          </p>

          <button
            onClick={() => { setTimer(15); setRunning(true); }}
            className="px-8 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white font-sans text-xs tracking-widest uppercase transition-all shadow-md"
          >
            {running ? 'Breathe Deeply...' : 'Start 15s Stillness'}
          </button>
        </div>
      </div>
    </section>
  );
};

// World 32: Nutrition of the Soil
export const World32_NutritionOfTheSoil: React.FC = () => {
  const foods = [
    { name: 'Root Vegetables', desc: 'Carrots, beets, sweet potatoes, ginger—grown beneath the soil, packed with grounding minerals.' },
    { name: 'Mineral Salts', desc: 'Unrefined Himalayan pink and Celtic sea salt restoring cellular electrolyte balance.' },
    { name: 'Warm Broths & Stews', desc: 'Slow-simmered collagen, bone broths, and lentils that soothe an agitated vata/wind system.' },
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 32 • Earth Diet
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Nourishment of the Bedrock
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          You cannot meditate your way into grounding if you only consume iced coffee and dry crackers. The root feeds on warmth and density.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          {foods.map(f => (
            <div key={f.name} className="p-6 rounded-2xl bg-black/60 border border-red-900/40">
              <h4 className="font-serif text-xl text-red-200 mb-2">{f.name}</h4>
              <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// World 33: Somatic Tremoring (TRE)
export const World33_NeurogenicTremor: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#090104] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 33 • Somatic Biology
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Neurogenic Tremoring (TRE)
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          When an impala escapes a cheetah, it immediately enters violent involuntary shaking for several minutes to discharge adrenaline before returning to grazing. Humans often suppress this wisdom.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto text-left">
          <h4 className="font-serif text-xl text-red-200 mb-2">Shake Out the Alarm</h4>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-4">
            Shaking the legs, pelvis, and arms for 60 seconds physically discharges trapped charge from the psoas muscle, resetting the central nervous system to safety.
          </p>
          <div className="text-xs font-sans text-red-300">
            ✦ Practice: Stand up, soften knees, and gently bounce through the heels.
          </div>
        </div>
      </div>
    </section>
  );
};

// World 34: Digital Grounding
export const World34_DigitalGrounding: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 34 • Virtual Dissociation
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Digital Dissociation Cure
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Staring at 2D glass screens pulls all your consciousness up into your eyes and prefrontal cortex, creating "floating head syndrome."
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto text-left">
          <h4 className="font-serif text-xl text-red-200 mb-3">The 20-20-Soil Rule</h4>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-4">
            Every 30 minutes of screen interaction, look at the horizon, press your feet firmly against the floor, and feel the physical weight of your body pressing into your chair.
          </p>
        </div>
      </div>
    </section>
  );
};

// World 35: The Mountain Pose (Tāḍāsana)
export const World35_MountainPoseTadasana: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 35 • Asana Stacking
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Tāḍāsana: Standing Like Mount Meru
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The foundation of all 84 classical yoga postures is Tāḍāsana (Mountain Pose). When bones are stacked vertically, muscles do not have to clench to keep you standing.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto text-left">
          <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/80">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Four corners of each foot rooting evenly into soil</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Kneecaps gently lifted, quads engaged, pelvis neutral</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Crown ascending effortlessly without pulling the neck</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
