import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sliders, Volume2, BookOpen, Layers } from 'lucide-react';

/* =========================================================================
   ACT II: THE ESOTERIC ROOTS & KUNDALINĪ (WORLDS 08 - 14)
   ========================================================================= */

// World 08: The Inverted Triangle (Traipura)
export const World08_TraipuraTriangle: React.FC = () => {
  const [rotated, setRotated] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0206] via-[#160309] to-[#0d0205] text-white text-center border-b border-red-900/20">
      <div className="max-w-3xl mx-auto z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 08 • Sacred Geometry
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Traipura: The Downward Triangle
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Inside the yellow earth square lies a crimson triangle pointing downward. This is Kāmarūpa Yoni—the cosmic gateway through which formless spirit condenses into tangible matter.
        </p>

        {/* Triangle Visualizer */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto flex items-center justify-center mb-8">
          <motion.div
            animate={{ rotate: rotated ? 180 : 0 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-0 h-0 border-l-[90px] border-l-transparent border-r-[90px] border-r-transparent border-t-[160px] border-t-red-600/80 filter drop-shadow-[0_0_30px_rgba(239,68,68,0.6)] cursor-pointer"
            onClick={() => setRotated(!rotated)}
          />
        </div>

        <button
          onClick={() => setRotated(!rotated)}
          className="px-6 py-2.5 rounded-full border border-red-500/40 bg-red-950/40 hover:bg-red-900/40 text-xs font-sans tracking-widest uppercase text-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        >
          {rotated ? 'Restore Inversion (Descent of Shakti)' : 'Flip Upward (Ascent of Shiva)'}
        </button>

        <p className="mt-6 text-xs sm:text-sm text-red-200/60 max-w-md mx-auto italic font-serif">
          «The downward apex indicates condensation, creation, and embodiment. Energy flows downward into manifestation before it can climb back to pure spirit.»
        </p>
      </div>
    </section>
  );
};

// World 09: The Svayambhū Liṅga
export const World09_SvayambhuLinga: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0205] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 09 • The Self-Born Pillar
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Svayambhū Liṅga
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          At the very core of the inverted triangle stands the <i>Svayambhū Liṅga</i>—the "self-born" pillar of smokey quartz. It represents the unmanifest presence of Shiva waiting within the earth.
        </p>

        <div className="p-8 sm:p-12 rounded-3xl bg-black/60 border border-red-900/50 max-w-lg mx-auto text-left shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="w-16 h-36 mx-auto rounded-full bg-gradient-to-b from-stone-400 via-stone-700 to-stone-900 border-2 border-stone-500 shadow-[0_0_30px_rgba(168,85,247,0.2)] mb-8" />
          <h3 className="font-serif text-2xl text-red-200 mb-2 text-center">Smokey Obsidian Consciousness</h3>
          <p className="font-sans text-sm text-white/75 leading-relaxed font-light text-center">
            The ancient texts describe it not as shiny stone, but as dark and smokey like a new raincloud, symbolizing that true consciousness in the root is concealed beneath primordial instincts.
          </p>
        </div>
      </div>
    </section>
  );
};

// World 10: Kundalinī Asleep
export const World10_KundaliniAsleep: React.FC = () => {
  const [breathing, setBreathing] = useState(false);

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0a0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 10 • The Serpent Power
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Kundalinī Asleep (3.5 Coils)
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Coiled three-and-a-half times around the Svayambhū Liṅga, the serpent Kundalinī rests in deep slumber, blocking the entrance to the Sushumnā central channel with her mouth.
        </p>

        {/* Breathing Coil Animation */}
        <div className="relative w-64 h-64 mx-auto flex items-center justify-center mb-8">
          {[1, 2, 3, 3.5].map((coil, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-full border-2 border-red-500/50"
              style={{
                width: `${(idx + 1) * 55}px`,
                height: `${(idx + 1) * 55}px`,
              }}
              animate={breathing ? { scale: [1, 1.08, 1], opacity: [0.4, 0.9, 0.4] } : { scale: 1, opacity: 0.5 }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
            />
          ))}
          <span className="font-serif text-sm text-red-200 z-10">3½ Coils</span>
        </div>

        <button
          onClick={() => setBreathing(!breathing)}
          className="px-8 py-3 rounded-full border border-red-500/50 bg-red-900/30 hover:bg-red-800/40 text-white font-sans text-xs tracking-widest uppercase transition-all shadow-lg"
        >
          {breathing ? 'Rest Breath' : 'Pulse Prāṇa To Feel The Coils'}
        </button>

        <p className="mt-6 text-xs text-white/60 italic font-serif">
          The 3½ coils represent the three states of consciousness (waking, dreaming, deep sleep) plus the half-coil of the transcendent fourth state (Turīya).
        </p>
      </div>
    </section>
  );
};

// World 11: The Bīja Mantra LĀM
export const World11_BijaMantraLam: React.FC = () => {
  const [freq, setFreq] = useState(136.1);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0d0206] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 11 • Sonic Resonance
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Bīja Mantra: LĀM (लाँ)
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          The seed vibration of the earth is LĀM. Intoned from the perineum, its low sonic pressure calms the sympathetic nervous system and signals physical safety.
        </p>

        {/* Mantra Visualizer Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black/60 border border-red-900/60 max-w-lg mx-auto shadow-[0_0_50px_rgba(220,38,38,0.2)]">
          <div className="text-7xl sm:text-8xl font-serif text-red-400 drop-shadow-[0_0_35px_rgba(239,68,68,0.7)] mb-6 animate-pulse">
            लाँ
          </div>

          <div className="flex items-center justify-between text-xs font-sans text-red-300 mb-2">
            <span>Root Tuning</span>
            <span className="font-mono">{freq} Hz (Earth Resonance)</span>
          </div>

          <input
            type="range"
            min="100"
            max="256"
            step="0.1"
            value={freq}
            onChange={e => setFreq(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-red-950 rounded-lg appearance-none cursor-pointer accent-red-500 mb-6"
          />

          <button
            onClick={toggleSound}
            className="w-full py-3.5 rounded-2xl bg-red-700/80 hover:bg-red-600 text-white font-sans text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2"
          >
            <Volume2 size={16} />
            <span>{isPlaying ? 'Silencing Waveform' : 'Intone LĀM Resonance'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// World 12: Brahmā & Ḍākinī
export const World12_BrahmaAndDakini: React.FC = () => {
  const [selectedDeity, setSelectedDeity] = useState<'brahma' | 'dakini'>('brahma');

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#090104] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 12 • Presiding Deities
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          Brahmā & Ḍākinī
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Every chakra in traditional Tantra hosts a male and female deity presiding over the transformation of bodily tissues.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedDeity('brahma')}
            className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
              selectedDeity === 'brahma' ? 'bg-red-600 text-white shadow-lg' : 'bg-black/40 text-white/60 border border-white/10'
            }`}
          >
            Lord Brahmā (Child Form)
          </button>
          <button
            onClick={() => setSelectedDeity('dakini')}
            className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
              selectedDeity === 'dakini' ? 'bg-red-600 text-white shadow-lg' : 'bg-black/40 text-white/60 border border-white/10'
            }`}
          >
            Ḍākinī Devī (Flesh Guardian)
          </button>
        </div>

        <motion.div
          key={selectedDeity}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-black/60 border border-red-900/50 max-w-xl mx-auto text-left"
        >
          {selectedDeity === 'brahma' ? (
            <>
              <h3 className="font-serif text-2xl text-red-200 mb-3">Brahmā: The Primordial Architect</h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-4">
                Depicted as a luminous child with four radiant faces and four arms, seated upon a swan. In the root, creation is not grandiose—it is small, innocent, and foundational, weaving the initial blueprint of physical incarnation.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-serif text-2xl text-red-200 mb-3">Ḍākinī Devī: The Guardian of Flesh (Asthi)</h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-4">
                Red-eyed and fierce, holding a trident, a skull-cup, a shield, and a sword. She governs the bone marrow and bodily tissues (Dhātus). She ensures that raw material truth is honored before spiritual transcendence is attempted.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// World 13: The Five Tattvas Architecture
export const World13_FiveTattvasLab: React.FC = () => {
  const [level, setLevel] = useState(4);

  const tattvas = [
    { name: 'Ākāśa (Space)', quality: 'Pure potentiality & vibration (Śabda)' },
    { name: 'Vāyu (Air)', quality: 'Movement, breath, and touch (Sparśa)' },
    { name: 'Agni (Fire)', quality: 'Heat, light, and visual form (Rūpa)' },
    { name: 'Jala (Water)', quality: 'Fluidity, taste, and emotional cohesion (Rasa)' },
    { name: 'Pṛthvī (Earth)', quality: 'Solid mass, smell, and stable structure (Gandha)' },
  ];

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0b0105] text-white border-b border-red-900/20">
      <div className="max-w-3xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 13 • Element Condensation
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Five Tattvas Ladder
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          How did spirit become physical rock and bone? In Sāṅkhya philosophy, Earth is the final condensation containing the qualities of all preceding four elements.
        </p>

        <div className="flex flex-col space-y-3 max-w-md mx-auto mb-8">
          {tattvas.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setLevel(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                level >= idx
                  ? 'bg-red-950/60 border-red-500/60 text-white'
                  : 'bg-black/30 border-white/5 text-white/30'
              }`}
            >
              <div className="font-serif text-base font-semibold">{t.name}</div>
              <div className="font-sans text-xs text-white/60 font-light">{t.quality}</div>
            </button>
          ))}
        </div>

        <p className="text-xs text-red-300 font-sans tracking-widest uppercase">
          Earth contains all 5 senses: Sound, Touch, Form, Taste, and Smell.
        </p>
      </div>
    </section>
  );
};

// World 14: Historical Text Vault
export const World14_HistoricalTextVault: React.FC = () => {
  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 relative flex flex-col items-center justify-center bg-[#0e0207] text-white border-b border-red-900/20">
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-400/80 mb-3 block">
          World 14 • Primary Sources
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
          The Historical Text Vault
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10">
          Read what the 16th-century text <i>Ṣaṭ-Cakra-Nirūpaṇa</i> actually recorded versus modern commercial New Age distortions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-black/60 border border-emerald-500/30">
            <span className="text-xs font-sans tracking-widest uppercase text-emerald-400 mb-2 block">
              What The Ancient Tantras State
            </span>
            <p className="font-serif text-sm text-white/80 leading-relaxed italic">
              «In the Mūlādhāra is the lotus of four petals... Inside is the golden square of Prithvi, surrounded by eight spears. There shines the triangle of Kāmarūpa, lightning-bright, where sleeps the goddess Kundalinī.»
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black/60 border border-rose-500/30">
            <span className="text-xs font-sans tracking-widest uppercase text-rose-400 mb-2 block">
              Modern Western Myth
            </span>
            <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
              "You must buy red jasper crystals and essential oils to open your root chakra in 5 minutes." <br/><br/>
              Traditional yoga never taught quick material shortcuts; it taught rigorous somatic breathwork and mental stillness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
