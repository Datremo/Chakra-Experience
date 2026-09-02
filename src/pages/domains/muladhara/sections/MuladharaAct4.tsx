import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Heart, RefreshCw, Feather, Flame } from 'lucide-react';

/* =========================================================================
   ACT IV: SOMATIC LABS & MINI-GAMES (WORLDS 22 - 28)
   ========================================================================= */

// World 22: Gravity Balance Lab
export const World22_GravityBalanceLab: React.FC = () => {
  const [stones, setStones] = useState([3, 2, 1]); // widths

  const addStone = () => {
    if (stones.length < 5) {
      setStones([...stones, Math.max(1, 4 - stones.length)]);
    }
  };

  const resetStones = () => {
    setStones([3, 2, 1]);
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0206] via-[#160309] to-[#0d0205] text-white text-center border-b border-red-900/20">
      <div className="max-w-3xl mx-auto z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 22 • Somatic Mini-Game
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Cairn of Equilibrium
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          In high winds, a stone cairn stands only if each rock's center of gravity is aligned with the center of the Earth. Stack stones to test stability.
        </p>

        {/* Cairn Stacking Tower */}
        <div className="h-64 sm:h-72 w-64 mx-auto flex flex-col-reverse items-center justify-start border-b-4 border-amber-600/70 mb-8 pb-1">
          {stones.map((w, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-10 my-1 rounded-2xl bg-gradient-to-r from-stone-600 via-stone-400 to-stone-700 border border-stone-300/40 shadow-lg"
              style={{ width: `${w * 50 + 60}px` }}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={addStone}
            disabled={stones.length >= 5}
            className="px-6 py-2.5 rounded-full bg-red-700 hover:bg-red-600 disabled:opacity-30 text-white font-sans text-xs uppercase tracking-wider transition-all shadow-md"
          >
            Stack Stone ({stones.length}/5)
          </button>
          <button
            onClick={resetStones}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 font-sans text-xs uppercase tracking-wider"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

// World 23: Tension Dissipation Simulator
export const World23_TensionDissipationLab: React.FC = () => {
  const [clearedNodes, setClearedNodes] = useState<string[]>([]);

  const nodes = [
    { id: 'jaw', name: 'Clenched Jaw (Bite Reflex)' },
    { id: 'shoulders', name: 'Elevated Trapezius (Armor)' },
    { id: 'diaphragm', name: 'Constricted Diaphragm' },
    { id: 'pelvis', name: 'Gripped Pelvic Floor' },
  ];

  const toggleNode = (id: string) => {
    if (clearedNodes.includes(id)) {
      setClearedNodes(clearedNodes.filter(n => n !== id));
    } else {
      setClearedNodes([...clearedNodes, id]);
    }
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0205] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 23 • Somatic Discharge
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Tension Grounding Circuit
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The body stores unexpressed survival mobilization as chronic muscle contraction. Tap each zone to discharge its voltage into the earth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
          {nodes.map(node => {
            const isDischarged = clearedNodes.includes(node.id);
            return (
              <button
                key={node.id}
                onClick={() => toggleNode(node.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isDischarged
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-red-950/40 border-red-800/40 text-red-200 hover:border-red-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif text-base">{node.name}</span>
                  <span className="text-xs">{isDischarged ? '✓ Grounded' : '⚡ Charged'}</span>
                </div>
                <span className="text-[11px] text-white/50 block font-sans">
                  {isDischarged ? 'Tension dissipated to soil' : 'Tap to discharge down spine'}
                </span>
              </button>
            );
          })}
        </div>

        {clearedNodes.length === 4 && (
          <p className="text-emerald-300 text-sm font-sans tracking-widest uppercase animate-pulse">
            ✦ All somatic tension circuits grounded into bedrock ✦
          </p>
        )}
      </div>
    </section>
  );
};

// World 24: The Barefoot Circuit
export const World24_BarefootCircuit: React.FC = () => {
  const [grounded, setGrounded] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 24 • Biophysics of Earthing
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Barefoot Electron Circuit
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The Earth holds a negative electrical surface charge. When bare human skin contacts soil, grass, or rock, free electrons neutralize positive static buildup and quench cellular inflammation.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto mb-8">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 bg-red-950/50 border border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <Zap size={36} className={grounded ? 'text-emerald-400' : 'text-amber-400'} />
          </div>

          <div className="text-xs uppercase font-sans tracking-widest text-white/60 mb-6">
            Circuit Status: {grounded ? 'Connected to Earth (Free Electron Flow)' : 'Insulated by Rubber Soles'}
          </div>

          <button
            onClick={() => setGrounded(!grounded)}
            className={`px-8 py-3 rounded-full font-sans text-xs uppercase tracking-widest transition-all ${
              grounded ? 'bg-emerald-600 text-white' : 'bg-red-700 text-white'
            }`}
          >
            {grounded ? 'Step Off Soil' : 'Touch Barefoot to Ground'}
          </button>
        </div>
      </div>
    </section>
  );
};

// World 25: Root Lock (Mūla Bandha)
export const World25_MulaBandhaLab: React.FC = () => {
  const [engaged, setEngaged] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 25 • Yogic Lock (Bandha)
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Mūla Bandha: The Root Lock
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          By subtly engaging the perineal center, the downward-flowing Apāna energy is redirected upward into the central canal (Sushumnā), igniting the internal fire.
        </p>

        {/* Visualizer Ring */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center mb-8">
          <motion.div
            animate={{ scale: engaged ? 0.7 : 1, borderColor: engaged ? '#10b981' : '#ef4444' }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 rounded-full border-4 border-dashed flex items-center justify-center"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-white/80">
              {engaged ? 'Apāna Locked Upward' : 'Pelvic Ring Relaxed'}
            </span>
          </motion.div>
        </div>

        <button
          onClick={() => setEngaged(!engaged)}
          className="px-8 py-3 rounded-full bg-red-800/80 hover:bg-red-700 text-white font-sans text-xs tracking-widest uppercase transition-all shadow-md"
        >
          {engaged ? 'Release Lock' : 'Gently Draw Up Perineum'}
        </button>
      </div>
    </section>
  );
};

// World 26: The Sense of Smell (Gandha)
export const World26_SenseOfSmell: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#090104] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 26 • The Olfactory Tanmātra
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Gandha: Petrichor & Clay
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The sense organ associated with Mūlādhāra is the nose (Ghrāṇa), and its subtle element is smell (Gandha). Nothing triggers primitive memory faster than the scent of damp earth after rain (petrichor).
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto text-left">
          <h4 className="font-serif text-xl text-red-200 mb-2">The Earth Molecule: Geosmin</h4>
          <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-4">
            Human olfactory receptors can detect geosmin—the scent released by soil bacteria—at a concentration of 5 parts per trillion. We are evolutionary tuned to seek moist soil for life.
          </p>
          <div className="text-xs font-sans text-red-300">
            ✦ Practice: Inhale the smell of wet soil or cedarwood to ground immediately.
          </div>
        </div>
      </div>
    </section>
  );
};

// World 27: The Fear Dissolver
export const World27_FearDissolver: React.FC = () => {
  const [fearInput, setFearInput] = useState('');
  const [dissolved, setDissolved] = useState(false);

  const handleDissolve = () => {
    if (fearInput.trim()) {
      setDissolved(true);
    }
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 27 • Emotional Alchemy
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Fear Dissolver
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          Type your deepest root fear into the bedrock slab. Watch the soil absorb and compost it into inert mineral fertilizer.
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/60 max-w-lg mx-auto mb-6">
          {!dissolved ? (
            <>
              <input
                type="text"
                value={fearInput}
                onChange={e => setFearInput(e.target.value)}
                placeholder="Type your root fear (e.g., losing home, poverty)..."
                className="w-full bg-transparent border-b-2 border-red-500/40 text-white text-center py-3 text-base sm:text-lg focus:outline-none focus:border-red-400 placeholder:text-white/30 mb-6 font-serif"
              />
              <button
                onClick={handleDissolve}
                disabled={!fearInput.trim()}
                className="px-8 py-3 rounded-full bg-red-700 hover:bg-red-600 disabled:opacity-30 text-white font-sans text-xs uppercase tracking-widest transition-all shadow-md"
              >
                Compost Into Soil
              </button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h4 className="font-serif text-2xl text-emerald-300 mb-2">Decomposed into Fertility</h4>
              <p className="font-sans text-sm text-white/80 mb-6">
                «"{fearInput}" has returned to the soil. The earth takes all decay and turns it into life.»
              </p>
              <button
                onClick={() => { setFearInput(''); setDissolved(false); }}
                className="text-xs font-sans uppercase tracking-widest text-red-300 hover:text-white"
              >
                Dissolve Another Fear
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// World 28: Pulse of the Soil (Schumann Resonance)
export const World28_PulseOfTheSoil: React.FC = () => {
  const [taps, setTaps] = useState<number[]>([]);
  const [bpm, setBpm] = useState<number | null>(null);

  const handleTap = () => {
    const now = Date.now();
    const newTaps = [...taps.slice(-3), now];
    setTaps(newTaps);

    if (newTaps.length >= 2) {
      const diffs = [];
      for (let i = 1; i < newTaps.length; i++) {
        diffs.push(newTaps[i] - newTaps[i - 1]);
      }
      const avgDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length;
      setBpm(Math.round(60000 / avgDiff));
    }
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 28 • Planetary Pulse
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The 7.83 Hz Heartbeat
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
          The cavity between Earth's surface and the ionosphere rings at an electromagnetic fundamental frequency of 7.83 Hz (The Schumann Resonance).
        </p>

        <div className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-md mx-auto mb-6">
          <button
            onClick={handleTap}
            className="w-32 h-32 rounded-full bg-red-900/40 hover:bg-red-800/60 border-2 border-red-500/50 flex items-center justify-center text-xs uppercase font-sans tracking-wider mx-auto mb-4 active:scale-95 transition-transform"
          >
            Tap Rhythm
          </button>
          <div className="text-xs font-sans text-white/60">
            {bpm ? `Your Rhythm: ~${bpm} BPM` : 'Tap to find your somatic tempo'}
          </div>
        </div>
      </div>
    </section>
  );
};
