import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, ShieldCheck, Play, Pause, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

/* =========================================================================
   ACT VI: THE AWAKENED BEDROCK & ASCENT (WORLDS 36 - 42)
   ========================================================================= */

// World 36: Symptoms of Imbalance
export const World36_ImbalanceDiagnostics: React.FC = () => {
  const [balanceVal, setBalanceVal] = useState(50);

  const getDiagnostics = () => {
    if (balanceVal < 35) {
      return {
        state: 'Deficient Root (Ungrounded Air)',
        symptoms: 'Restlessness, insomnia, panic attacks, financial disorganization, underweight, chronic fear of abandonment.',
        remedy: 'Warm soups, heavy blankets, somatic walking, physical touch, stability routines.'
      };
    } else if (balanceVal > 65) {
      return {
        state: 'Excessive Root (Inertia & Stagnation)',
        symptoms: 'Lethargy, greed, hoarding, stubborn resistance to change, obesity, emotional numbness.',
        remedy: 'Vigorous aerobic movement, decluttering possessions, fasting, breaking rigid routines.'
      };
    } else {
      return {
        state: 'Sovereign Root Equilibrium',
        symptoms: 'Calm vitality, practical competence, financial stability, comfortable inhabiting physical form, quiet courage.',
        remedy: 'Maintain daily rhythm and prepare foundations for the emotional waters of Svadhisthana.'
      };
    }
  };

  const diag = getDiagnostics();

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0206] via-[#160309] to-[#0d0205] text-white text-center border-b border-red-900/20">
      <div className="max-w-3xl mx-auto z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 36 • Diagnostics
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Spectrum of Root Equilibrium
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Slide between deficient root (floating anxiety) and excessive root (sluggish rigidity) to diagnose where your system sits.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/60 max-w-lg mx-auto mb-6">
          <div className="flex justify-between text-xs font-sans uppercase tracking-widest text-red-300 mb-2">
            <span>Deficient (Float)</span>
            <span>Balanced</span>
            <span>Excessive (Stagnate)</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={balanceVal}
            onChange={e => setBalanceVal(parseInt(e.target.value))}
            className="w-full h-2 bg-red-950 rounded-lg appearance-none cursor-pointer accent-red-500 mb-8"
          />

          <h3 className="font-serif text-2xl text-red-200 mb-3">{diag.state}</h3>
          <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-4">
            <strong>Manifestations:</strong> {diag.symptoms}
          </p>
          <div className="pt-4 border-t border-red-900/40 text-xs font-sans text-emerald-300">
            <strong>Somatic Remedy:</strong> {diag.remedy}
          </div>
        </div>
      </div>
    </section>
  );
};

// World 37: The Ancient Grounding Oath
export const World37_GroundingOath: React.FC = () => {
  const [sworn, setSworn] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0205] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 37 • The Covenant
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Bedrock Covenant
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Seal your agreement with the physical vessel. You do not need to disown matter to realize spirit.
        </p>

        <div className="p-8 sm:p-10 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto text-left mb-8">
          <p className="font-serif text-lg sm:text-xl text-red-100 italic leading-relaxed mb-8">
            «I accept this body of bone, mineral, and blood as my sacred house. I will not abandon matter to chase formless illusions. I plant my feet on this earth and stand sovereign.»
          </p>

          <button
            onClick={() => setSworn(true)}
            className={`w-full py-4 rounded-2xl font-sans text-xs uppercase tracking-widest transition-all ${
              sworn ? 'bg-emerald-600 text-white shadow-lg' : 'bg-red-700 hover:bg-red-600 text-white'
            }`}
          >
            {sworn ? '✓ Covenant Inscribed In Bone' : 'Seal The Bedrock Covenant'}
          </button>
        </div>
      </div>
    </section>
  );
};

// World 38: The Bedrock Meditation
export const World38_TheBedrockMeditation: React.FC = () => {
  const [seconds, setSeconds] = useState(180);
  const [active, setActive] = useState(false);

  React.useEffect(() => {
    let t: any = null;
    if (active && seconds > 0) {
      t = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (seconds === 0) {
      setActive(false);
    }
    return () => clearInterval(t);
  }, [active, seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 38 • 3-Minute Grounding
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Bedrock Stillness Meditation
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Sit with spine upright. Imagine thick, ancient roots sinking from your tailbone deep through floorboards, bedrock, and magma down into the iron core of Earth.
        </p>

        <div className="p-8 sm:p-12 rounded-3xl bg-black/60 border border-red-900/60 max-w-md mx-auto mb-8">
          <div className="text-6xl sm:text-7xl font-serif text-red-300 font-bold mb-6">
            {mins}:{secs < 10 ? `0${secs}` : secs}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActive(!active)}
              className="px-8 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white font-sans text-xs uppercase tracking-widest shadow-md flex items-center space-x-2"
            >
              {active ? <Pause size={16} /> : <Play size={16} />}
              <span>{active ? 'Pause' : 'Commence'}</span>
            </button>
            <button
              onClick={() => { setActive(false); setSeconds(180); }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// World 39: Myths vs Evidence
export const World39_MythsVsEvidence: React.FC = () => {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  const myths = [
    { myth: '"Red crystals unblock your root in minutes."', truth: 'Crystals have zero clinical or traditional evidence for resolving somatic trauma. Real root work requires nervous system regulation and physical lifestyle changes.' },
    { myth: '"Root chakra is dirty and inferior to the third eye."', truth: 'In classical Tantra, the root contains Kundalinī Herself and is revered as the foundation without which higher chakras collapse into psychosis.' },
    { myth: '"Root chakra is only about sex and money."', truth: 'It encompasses bones, survival reflex, ancestry, cellular safety, circadian rhythm, and immune vitality.' },
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 39 • Discernment
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Myths vs Traditional Evidence
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Click any card to dismantle modern commercial distortions and uncover authentic yogic science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          {myths.map((m, idx) => (
            <div
              key={idx}
              onClick={() => setActiveMyth(activeMyth === idx ? null : idx)}
              className="p-6 rounded-2xl bg-black/60 border border-red-900/40 cursor-pointer hover:border-red-500/50 transition-all"
            >
              <h4 className="font-serif text-lg text-red-300 mb-3">{m.myth}</h4>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {activeMyth === idx ? m.truth : 'Tap to reveal traditional reality...'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// World 40: The Kundalinī Catalyst
export const World40_KundaliniCatalyst: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 40 • Warning & Wisdom
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Tree Must Have Roots
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          As Carl Jung noted: <i>«No tree, it is said, can grow to heaven unless its roots reach down to hell.»</i>
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto text-left">
          <p className="font-serif text-lg text-red-200 italic mb-4 leading-relaxed">
            If you try to awaken Kundalinī without solid root stability, the energy does not illuminate—it burns. Mania, derealization, and psychological breakdown occur when high voltage meets ungrounded wires.
          </p>
          <div className="text-xs font-sans text-white/60 tracking-wider uppercase border-t border-red-900/30 pt-4">
            Safety Principle: Ground the base before opening the crown.
          </div>
        </div>
      </div>
    </section>
  );
};

// World 41: Daily Root Rituals
export const World41_DailyRootRituals: React.FC = () => {
  const [checked, setChecked] = useState<number[]>([]);

  const habits = [
    'Drink 500ml warm water with mineral salt upon waking',
    'Walk barefoot on earth or grass for 10 minutes',
    'Perform 3 minutes of deep belly breathing with Mūla Bandha',
    'Eat a warm, dense, root-based meal without screens',
    'Acknowledge 3 tangible physical things that support your life',
  ];

  const toggleHabit = (idx: number) => {
    setChecked(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 41 • Integration Habits
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Daily Root Architecture
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Grounding is not an event; it is a daily hygienic maintenance of your physical vehicle.
        </p>

        <div className="space-y-3 max-w-lg mx-auto text-left mb-8">
          {habits.map((h, idx) => {
            const isDone = checked.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => toggleHabit(idx)}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  isDone ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200' : 'bg-black/50 border-red-900/40 text-white/80'
                }`}
              >
                <span className="font-sans text-xs sm:text-sm font-light">{h}</span>
                <span className="text-xs ml-3">{isDone ? '✓' : '○'}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// World 42: The Ascent to Waters
export const World42_AscentToWaters: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white text-center">
      <div className="max-w-3xl mx-auto z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-amber-400/80 mb-3 block">
          World 42 • The Threshold
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl text-white mb-6">
          The Bedrock Holds. Ascend to the Waters.
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          You have established the foundation. Without this dense earth, the water of Svadhisthana would spill and drown. Now rooted, you may safely flow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onExit}
            className="px-8 sm:px-10 py-4 rounded-full bg-red-700 hover:bg-red-600 text-white font-sans text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={16} />
            <span>Return to Chakra Gateway</span>
          </button>
        </div>
      </div>
    </section>
  );
};
