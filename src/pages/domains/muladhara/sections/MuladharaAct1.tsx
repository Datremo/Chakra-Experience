import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Compass, ArrowDown, Check, Volume2 } from 'lucide-react';

/* =========================================================================
   ACT I: PRIMORDIAL FOUNDATIONS (WORLDS 01 - 07)
   ========================================================================= */

// World 01: The Gravitational Fall
export const World01_EarthDescent: React.FC = () => {
  const [descended, setDescended] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0206] via-[#1a0408] to-[#0d0205] text-white text-center overflow-hidden border-b border-red-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_70%)] pointer-events-none" />

      {/* Floating Earth Dust Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-red-400"
            style={{
              left: `${(i * 17) % 95}%`,
              top: `${(i * 23) % 90}%`,
            }}
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full border border-red-500/40 bg-red-950/40 text-red-300 font-sans text-xs tracking-[0.3em] uppercase mb-6 backdrop-blur-md">
          World 01 • Act I: Primordial Foundations
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-wide text-white drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] mb-6">
          The Gravitational Fall
        </h1>
        <p className="font-sans text-sm sm:text-base md:text-lg text-red-100/75 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          Before consciousness can expand toward the sky, it must first dare to land. In the Mūlādhāra, the ethereal spirit meets the immovable density of bedrock.
        </p>

        <button
          onClick={() => setDescended(prev => !prev)}
          className="px-8 sm:px-10 py-4 rounded-full border border-red-500/50 bg-red-900/30 hover:bg-red-800/40 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95 flex items-center space-x-3 mx-auto"
        >
          <ArrowDown size={16} className={`transform transition-transform ${descended ? 'rotate-180' : ''}`} />
          <span>{descended ? 'Rising To Subtle Form' : 'Anchor Into Soil'}</span>
        </button>

        <AnimatePresence>
          {descended && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 p-6 rounded-2xl bg-black/60 border border-red-600/30 backdrop-blur-md max-w-md mx-auto"
            >
              <p className="text-red-200/90 italic font-serif text-base">
                «Weight is not a prison. Weight is your sacred permission to exist here in physical spacetime.»
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// World 02: What Is Mūlādhāra?
export const World02_WhatIsMuladhara: React.FC = () => {
  const [activeRoot, setActiveRoot] = useState<number | null>(null);

  const roots = [
    { label: 'MŪLA (Root)', meaning: 'The origin, bedrock, ancestral taproot, and primal seed from which the entire cosmic tree (Aśvattha) springs.' },
    { label: 'ĀDHĀRA (Vessel)', meaning: 'The receptacle, structural foundation, pedestal, and sacred basin holding the coiled serpent power (Kundalinī).' },
    { label: 'PRITHVI (Earth)', meaning: 'The densest of the five great cosmic elements (Mahābhūtas), holding olfactory scent, physical mass, and structural memory.' },
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0205] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/70 mb-3 block">
          World 02 • Etymology & Concept
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-md">
          Mūlādhāra: The Sovereign Vessel
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-12">
          In Sanskrit, this energy center is not called the "base chakra." It is the Taproot and the Vessel. Tap each pillar to absorb its ancient meaning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {roots.map((r, i) => (
            <motion.div
              key={r.label}
              whileHover={{ y: -4 }}
              onClick={() => setActiveRoot(activeRoot === i ? null : i)}
              className={`p-6 sm:p-8 rounded-2xl border cursor-pointer transition-all duration-300 backdrop-blur-md ${
                activeRoot === i
                  ? 'bg-red-950/60 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)]'
                  : 'bg-black/40 border-red-900/40 hover:border-red-500/40'
              }`}
            >
              <h3 className="font-serif text-xl sm:text-2xl text-red-200 mb-3 flex items-center justify-between">
                <span>{r.label}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-red-900/40 border border-red-700/40 font-sans">
                  0{i + 1}
                </span>
              </h3>
              <p className="font-sans text-sm text-white/75 leading-relaxed font-light">
                {r.meaning}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// World 03: The Evolution of Survival
export const World03_EvolutionOfSurvival: React.FC = () => {
  const [epoch, setEpoch] = useState(0);

  const epochs = [
    { title: '500M Years Ago: Cellular Boundary', desc: 'The primordial birth of self vs non-self. The membrane decides what enters and what is kept out. The foundation of biological safety.' },
    { title: '200M Years Ago: The Reptilian Brainstem', desc: 'The emergence of the autonomic fight, flight, and freeze reflex. Pure instinctive speed to prevent being consumed.' },
    { title: 'Present Day: Cortisol in Concrete', desc: 'The modern nervous system fires life-or-death survival alarms over emails, rent bills, and social rejection. Mūlādhāra re-grounds this misfired electricity.' }
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0b0106] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/70 mb-3 block">
          World 03 • Biological Timeline
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Evolutionary Arc of Safety
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Your root chakra is not an abstract concept. It is 500 million years of biological survival wisdom encoded in your nervous system.
        </p>

        {/* Epoch Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-8">
          {epochs.map((ep, idx) => (
            <button
              key={idx}
              onClick={() => setEpoch(idx)}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all ${
                epoch === idx
                  ? 'bg-red-600 text-white font-semibold shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                  : 'bg-black/50 text-white/50 border border-white/10 hover:text-white'
              }`}
            >
              Stage 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Display Active Epoch Card */}
        <motion.div
          key={epoch}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-red-950/30 border border-red-500/30 backdrop-blur-lg text-left"
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-red-200 mb-4">
            {epochs[epoch].title}
          </h3>
          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light">
            {epochs[epoch].desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// World 04: The Physical Anchor
export const World04_ThePhysicalAnchor: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>('perineum');

  const zones: Record<string, { title: string; desc: string; function: string }> = {
    perineum: {
      title: 'The Perineum (Kanda / Center)',
      desc: 'The anatomical focal point midway between the anus and genitals, where 72,000 energetic channels (nāḍīs) originate.',
      function: 'Gateway of Mūla Bandha and root stabilization.'
    },
    coccyx: {
      title: 'The Coccyx (Spinal Root)',
      desc: 'The tailbone tip terminating the Sushumnā nāḍī. It acts as the electrical grounding pin for the nervous system.',
      function: 'Structural load transmission while seated in meditation.'
    },
    bones: {
      title: 'The Skeletal Matrix (Asthi Dhātu)',
      desc: 'The dense calcium lattice holding your form upright against 9.8 m/s² planetary gravitational pull.',
      function: 'Bone mineral density and constitutional resilience.'
    }
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0e0207] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/70 mb-3 block">
          World 04 • Somatic Anatomy
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Bodily Anchor Points
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Where does Mūlādhāra live in the physical body? Tap each anatomical gateway to inspect its function.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {Object.keys(zones).map(k => (
            <button
              key={k}
              onClick={() => setSelectedZone(k)}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs uppercase tracking-wider transition-all ${
                selectedZone === k
                  ? 'bg-red-600/90 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400'
                  : 'bg-black/50 text-white/50 border border-white/10 hover:text-white'
              }`}
            >
              {zones[k].title.split(' (')[0]}
            </button>
          ))}
        </div>

        {selectedZone && (
          <motion.div
            key={selectedZone}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-black/60 border border-red-500/40 backdrop-blur-xl text-left max-w-2xl mx-auto"
          >
            <h3 className="font-serif text-2xl text-red-200 mb-3">
              {zones[selectedZone].title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-4">
              {zones[selectedZone].desc}
            </p>
            <div className="pt-4 border-t border-red-900/40 flex items-center space-x-2 text-xs font-sans text-red-300">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span>Somatic Function: {zones[selectedZone].function}</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// World 05: The Yellow Square (Pṛthvī Maṇḍala)
export const World05_PrithviMandala: React.FC = () => {
  const [activeGate, setActiveGate] = useState<string | null>(null);

  const gates: Record<string, { label: string; wisdom: string }> = {
    north: { label: 'North Gate: Nourishment', wisdom: 'The capacity of the earth to generate food, shelter, and material sustenance.' },
    south: { label: 'South Gate: Bones & Form', wisdom: 'The enduring structural architecture that outlasts temporary storms.' },
    east: { label: 'East Gate: Origin & Lineage', wisdom: 'The thousands of generations that survived trials so you could draw breath.' },
    west: { label: 'West Gate: Dissolution', wisdom: 'Returning back to clay; the absolute certainty that gives urgency to life.' },
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-amber-400/80 mb-3 block">
          World 05 • Sacred Geometry
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Pṛthvī Maṇḍala: The Golden Square
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          In ancient Tantra, the element Earth is represented by a solid yellow square with eight spears (Aṣṭa-Śūla). Touch each cardinal gate of stability.
        </p>

        {/* Square Diagram */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto border-4 border-amber-400/60 bg-amber-950/20 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.15)] mb-8">
          <div className="absolute inset-4 border border-dashed border-amber-400/30 rounded-xl" />
          
          {/* North Gate */}
          <button 
            onClick={() => setActiveGate('north')} 
            className="absolute -top-5 px-3 py-1 rounded-full bg-amber-500 text-black font-sans text-xs uppercase font-bold shadow-md hover:scale-105 transition-transform"
          >
            North
          </button>
          {/* South Gate */}
          <button 
            onClick={() => setActiveGate('south')} 
            className="absolute -bottom-5 px-3 py-1 rounded-full bg-amber-500 text-black font-sans text-xs uppercase font-bold shadow-md hover:scale-105 transition-transform"
          >
            South
          </button>
          {/* West Gate */}
          <button 
            onClick={() => setActiveGate('west')} 
            className="absolute -left-5 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-amber-500 text-black font-sans text-xs uppercase font-bold shadow-md hover:scale-105 transition-transform"
          >
            West
          </button>
          {/* East Gate */}
          <button 
            onClick={() => setActiveGate('east')} 
            className="absolute -right-5 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-amber-500 text-black font-sans text-xs uppercase font-bold shadow-md hover:scale-105 transition-transform"
          >
            East
          </button>

          <div className="text-center">
            <span className="font-serif text-3xl sm:text-4xl text-amber-300 font-bold block mb-1">Pṛthvī</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-amber-200/60">Earth Element</span>
          </div>
        </div>

        {activeGate && (
          <motion.div
            key={activeGate}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-black/60 border border-amber-500/40 text-left max-w-md mx-auto"
          >
            <h4 className="font-serif text-lg text-amber-300 mb-1">{gates[activeGate].label}</h4>
            <p className="font-sans text-sm text-white/80">{gates[activeGate].wisdom}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// World 06: The Crimson Four Petals
export const World06_TheFourPetals: React.FC = () => {
  const [selectedPetal, setSelectedPetal] = useState<number>(0);

  const petals = [
    { syllable: 'वं (Vaṁ)', name: 'Supreme Joy (Paramānanda)', desc: 'The primal delight of embodiment. Rejoicing in the simple reality of physical form.' },
    { syllable: 'शं (Śaṁ)', name: 'Natural Pleasure (Sahajānanda)', desc: 'The innate ease when the nervous system down-regulates from survival terror into peace.' },
    { syllable: 'षं (Ṣaṁ)', name: 'Heroic Delight (Vīrānanda)', desc: 'The courage of standing ground against adversity without running away.' },
    { syllable: 'सं (Saṁ)', name: 'Union Joy (Yogānanda)', desc: 'The realization that your flesh is indivisible from the soil of the cosmos.' },
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0b0105] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 06 • Tantric Anatomy
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Four Crimson Petals
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          The four lotus petals of Mūlādhāra bear the Sanskrit syllables <i>Vaṁ</i>, <i>Śaṁ</i>, <i>Ṣaṁ</i>, and <i>Saṁ</i>. Touch each petal to awaken its resonant state.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          {petals.map((p, idx) => (
            <button
              key={p.syllable}
              onClick={() => setSelectedPetal(idx)}
              className={`p-6 rounded-2xl border transition-all flex flex-col items-center ${
                selectedPetal === idx
                  ? 'bg-red-600 border-red-300 text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] scale-105'
                  : 'bg-black/50 border-red-900/40 text-red-200/60 hover:text-white'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-serif mb-2">{p.syllable.split(' ')[0]}</span>
              <span className="text-[11px] font-sans tracking-widest uppercase">{p.syllable.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={selectedPetal}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-black/60 border border-red-500/30 max-w-xl mx-auto text-left"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Volume2 size={18} className="text-red-400" />
            <h3 className="font-serif text-2xl text-red-200">{petals[selectedPetal].name}</h3>
          </div>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light">
            {petals[selectedPetal].desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// World 07: The Seven-Trunked Elephant (Airāvata)
export const World07_AiravataElephant: React.FC = () => {
  const [groundedWeight, setGroundedWeight] = useState(1);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0e0207] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 07 • The Vehicle (Vāhana)
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Airāvata: The Seven-Trunked Elephant
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The animal vehicle of the root chakra is not a predator. It is the mighty elephant Airāvata with seven trunks, symbolizing the immense capacity to bear gravity and cosmic density without strain.
        </p>

        {/* Interactive Load-Bearing Simulator */}
        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto mb-8">
          <div className="text-sm font-sans uppercase tracking-widest text-red-300 mb-4">
            Grounding Capacity: {groundedWeight * 100} Tons
          </div>

          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-6">
            <motion.div 
              className="bg-gradient-to-r from-red-600 via-amber-500 to-red-400 h-full rounded-full"
              animate={{ width: `${(groundedWeight / 5) * 100}%` }}
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setGroundedWeight(w => Math.min(w + 1, 5))}
              className="px-6 py-2.5 rounded-full bg-red-800/60 hover:bg-red-700 text-white font-sans text-xs tracking-wider uppercase border border-red-500/30"
            >
              Anchor More Load (+1)
            </button>
            <button
              onClick={() => setGroundedWeight(1)}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 font-sans text-xs tracking-wider uppercase"
            >
              Reset
            </button>
          </div>

          <p className="mt-6 text-xs text-white/60 italic font-serif">
            {groundedWeight === 5 
              ? '«Like the elephant, the rooted mind does not panic under gravity; it leans into the earth and becomes immovable.»'
              : 'Add weight to test how the root stabilizes heavy psychological loads.'}
          </p>
        </div>
      </div>
    </section>
  );
};
