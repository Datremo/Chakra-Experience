import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ShieldAlert, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';

/* =========================================================================
   ACT III: THE PSYCHOLOGY OF SURVIVAL (WORLDS 15 - 21)
   ========================================================================= */

// World 15: The Survival Compass
export const World15_SurvivalCompass: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const getReadout = () => {
    if (pos.x < 35 && pos.y < 35) return { title: 'Paranoia (Excess Fear)', desc: 'Seeing predators in shadows that do not exist.' };
    if (pos.x > 65 && pos.y < 35) return { title: 'Hyper-Control (Hoarding)', desc: 'Believing that controlling every variable will eliminate mortality.' };
    if (pos.x > 65 && pos.y > 65) return { title: 'Denial (Spiritual Bypassing)', desc: 'Ignoring physical reality and practical obligations.' };
    if (pos.x < 35 && pos.y > 65) return { title: 'Helplessness (Freeze)', desc: 'Collapsing into lethargy when confronted with reality.' };
    return { title: 'Sovereign Caution (Grounded Root)', desc: 'Alert, relaxed, rooted in present reality, capable of action.' };
  };

  const readout = getReadout();

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#090105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 15 • Survival Psychology
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Survival Compass
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Drag the needle across the survival landscape to map how your nervous system calibrates threat vs reality.
        </p>

        {/* 2D Compass Pad */}
        <div 
          className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-3xl bg-black/70 border-2 border-red-900/60 touch-none cursor-crosshair overflow-hidden mb-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          onMouseMove={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({
              x: Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)),
              y: Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100))
            });
          }}
          onTouchMove={e => {
            if (!e.touches[0]) return;
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({
              x: Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100)),
              y: Math.max(0, Math.min(100, ((e.touches[0].clientY - rect.top) / rect.height) * 100))
            });
          }}
        >
          {/* Axis crosshairs */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-900/40" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-red-900/40" />

          {/* Labels */}
          <span className="absolute top-2 left-2 text-[10px] uppercase font-sans text-red-400/60">Fear</span>
          <span className="absolute top-2 right-2 text-[10px] uppercase font-sans text-red-400/60">Control</span>
          <span className="absolute bottom-2 left-2 text-[10px] uppercase font-sans text-red-400/60">Collapse</span>
          <span className="absolute bottom-2 right-2 text-[10px] uppercase font-sans text-red-400/60">Denial</span>

          {/* Draggable indicator dot */}
          <motion.div
            className="absolute w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_#ef4444] border-2 border-white -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          />
        </div>

        {/* Dynamic Readout Box */}
        <div className="p-6 rounded-2xl bg-black/60 border border-red-500/40 max-w-md mx-auto text-left">
          <h4 className="font-serif text-xl text-red-300 mb-1">{readout.title}</h4>
          <p className="font-sans text-xs sm:text-sm text-white/80">{readout.desc}</p>
        </div>
      </div>
    </section>
  );
};

// World 16: The Scarcity Trap
export const World16_ScarcityTrap: React.FC = () => {
  const [hoarded, setHoarded] = useState(true);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 16 • Scarcity vs Flow
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Scarcity Trap
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          When the root chakra feels endangered, it hoards out of terror that "there will never be enough." Toggle between the two states to observe the energy dynamics.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto mb-8 text-left">
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={() => setHoarded(true)}
              className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
                hoarded ? 'bg-red-600 text-white shadow-md' : 'bg-white/10 text-white/60'
              }`}
            >
              Hoarding Mode
            </button>
            <button
              onClick={() => setHoarded(false)}
              className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
                !hoarded ? 'bg-emerald-600 text-white shadow-md' : 'bg-white/10 text-white/60'
              }`}
            >
              Rhythmic Flow Mode
            </button>
          </div>

          <h3 className="font-serif text-2xl mb-3 text-white">
            {hoarded ? 'Constriction & Stagnation' : 'Organic Circulation'}
          </h3>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light">
            {hoarded
              ? 'Hoarding energy, breath, or money out of panic creates stagnant pools. The body clenches the pelvic floor and restricts oxygen, reinforcing fear.'
              : 'Nature never hoards seasons. Autumn sheds leaves knowing spring will renew the canopy. Grounded roots trust the cycle of renewal.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// World 17: Fight, Flight, Freeze, Fawn
export const World17_FightFlightFreezeFawn: React.FC = () => {
  const [activeF, setActiveF] = useState<number>(0);

  const fResponses = [
    { name: 'Fight (Mobilization)', desc: 'Confronting threat with aggressive posturing and muscular contraction.', organ: 'Adrenal surge, clenched jaw and fists.' },
    { name: 'Flight (Escape)', desc: 'Running away from the situation physically or through chronic distraction.', organ: 'Tense calves, rapid shallow breathing, fidgeting.' },
    { name: 'Freeze (Tonic Immobility)', desc: 'Playing dead when escape seems impossible. Dissociating from the body.', organ: 'Cold extremities, numbed sensation in legs and pelvis.' },
    { name: 'Fawn (Appeasement)', desc: 'Submitting to predators by sacrificing personal boundaries to keep peace.', organ: 'Suppressed gut intuition, chronic people-pleasing fatigue.' },
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 17 • Autonomic Nervous System
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The 4F Threat Responses
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          The autonomic nervous system uses four primary survival adaptations. Which one does your root default to under stress?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
          {fResponses.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => setActiveF(idx)}
              className={`p-4 sm:p-5 rounded-2xl border text-center transition-all ${
                activeF === idx
                  ? 'bg-red-700 border-red-300 text-white shadow-lg scale-105'
                  : 'bg-black/50 border-red-900/40 text-white/60 hover:text-white'
              }`}
            >
              <div className="font-serif text-base sm:text-lg mb-1">{item.name.split(' ')[0]}</div>
              <div className="font-sans text-[10px] tracking-wider uppercase text-white/60">{item.name.split(' ')[1]}</div>
            </button>
          ))}
        </div>

        <motion.div
          key={activeF}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-black/60 border border-red-500/40 max-w-xl mx-auto text-left"
        >
          <h3 className="font-serif text-2xl text-red-200 mb-2">{fResponses[activeF].name}</h3>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-4">{fResponses[activeF].desc}</p>
          <div className="pt-4 border-t border-red-900/40 text-xs font-sans text-red-300">
            <strong>Somatic Manifestation:</strong> {fResponses[activeF].organ}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// World 18: The Ancestral Ledger
export const World18_AncestralLedger: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 18 • Lineage & Roots
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Ancestral Ledger
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Your body carries the cellular memories of famines, migrations, winters, and wars endured by those who came before you.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto text-left mb-6">
          <p className="font-serif text-lg text-red-200 italic mb-4 leading-relaxed">
            «You are not beginning from zero. The endurance that survived plagues, ice ages, and famines lives right now in your blood and marrow.»
          </p>
          <div className="text-xs font-sans text-white/60 tracking-wider uppercase border-t border-red-900/30 pt-4">
            Contemplation: Thank your ancestors for the durability of your physical frame.
          </div>
        </div>
      </div>
    </section>
  );
};

// World 19: The Safety Illusion
export const World19_SafetyIllusion: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#090104] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 19 • Mental Paradigm
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Safety Illusion
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Tap the card to flip between what anxiety demands and what the grounded body actually needs.
        </p>

        <div 
          onClick={() => setFlipped(!flipped)}
          className="relative w-80 sm:w-96 h-56 mx-auto cursor-pointer [perspective:1000px] mb-8"
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="w-full h-full relative [transform-style:preserve-3d]"
          >
            {/* Front: Anxiety Demand */}
            <div className="absolute inset-0 bg-red-950/40 border border-red-500/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
              <span className="text-xs font-sans uppercase tracking-widest text-red-300 mb-2">The Ego's Demand</span>
              <p className="font-serif text-xl text-white">
                "I will only feel safe when I have 100% certainty about the future."
              </p>
              <span className="text-[10px] text-white/40 mt-4 uppercase tracking-widest">(Tap to flip)</span>
            </div>

            {/* Back: Grounded Truth */}
            <div className="absolute inset-0 bg-emerald-950/40 border border-emerald-500/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <span className="text-xs font-sans uppercase tracking-widest text-emerald-300 mb-2">The Grounded Truth</span>
              <p className="font-serif text-xl text-white">
                "Safety is not certainty about tomorrow. Safety is confidence in my ability to handle whatever arrives right now."
              </p>
              <span className="text-[10px] text-emerald-400 mt-4 uppercase tracking-widest">Bedrock Stability</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// World 20: The Belonging Test
export const World20_BelongingTest: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 20 • Existential Grounding
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Belonging Inquiry
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          The root chakra asks one primordial question: <i>"Do I have permission to take up space on this planet?"</i>
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto mb-8">
          <p className="font-serif text-2xl sm:text-3xl text-red-200 mb-8 font-light">
            You do not need to earn your right to occupy physical space. The earth was holding your weight before you learned to speak.
          </p>

          <button
            onClick={() => setAccepted(true)}
            className={`px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all ${
              accepted
                ? 'bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                : 'bg-red-700/80 hover:bg-red-600 text-white'
            }`}
          >
            {accepted ? 'I Claim My Place on Bedrock' : 'Acknowledge Sovereign Presence'}
          </button>
        </div>
      </div>
    </section>
  );
};

// World 21: The Boundary Wall
export const World21_BoundaryWall: React.FC = () => {
  const [boundaryType, setBoundaryType] = useState<'porous' | 'rigid' | 'flexible'>('flexible');

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 21 • Energetic Boundaries
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Energetic Perimeter
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Mūlādhāra establishes the boundary between your physical self and the external environment. Select a perimeter style to inspect its health.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setBoundaryType('porous')}
            className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider ${
              boundaryType === 'porous' ? 'bg-amber-600 text-white' : 'bg-black/40 text-white/60 border border-white/10'
            }`}
          >
            Porous (Sponge)
          </button>
          <button
            onClick={() => setBoundaryType('rigid')}
            className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider ${
              boundaryType === 'rigid' ? 'bg-rose-600 text-white' : 'bg-black/40 text-white/60 border border-white/10'
            }`}
          >
            Rigid (Bunker)
          </button>
          <button
            onClick={() => setBoundaryType('flexible')}
            className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider ${
              boundaryType === 'flexible' ? 'bg-emerald-600 text-white' : 'bg-black/40 text-white/60 border border-white/10'
            }`}
          >
            Healthy (Cell Membrane)
          </button>
        </div>

        <motion.div
          key={boundaryType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-black/60 border border-red-500/30 max-w-xl mx-auto text-left"
        >
          {boundaryType === 'porous' && (
            <p className="text-white/80 font-light text-sm sm:text-base">
              Absorbs other people's chaos, fear, and negativity like a sponge. Lacks structural density.
            </p>
          )}
          {boundaryType === 'rigid' && (
            <p className="text-white/80 font-light text-sm sm:text-base">
              Thick concrete walls. Keeps threats out but locks warmth and nourishment outside as well.
            </p>
          )}
          {boundaryType === 'flexible' && (
            <p className="text-white/80 font-light text-sm sm:text-base">
              Semi-permeable like a living cell membrane. Allows nutrients, love, and wisdom to enter while keeping toxins outside.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
