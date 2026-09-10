import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PROMPTS = [
  'When did I last feel genuinely creative? What happened?',
  'What desire am I suppressing right now, and why?',
  'In which relationships do I give freely? Which drain me?',
  'What emotion have I been avoiding? What does it feel like in my body?',
  'If I let myself want what I actually want, what would that be?',
];

export const JournalSection: React.FC = () => {
  const [promptIdx, setPromptIdx] = useState(0);
  const [text, setText] = useState('');

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#030508]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center gap-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs"
        >
          Sacred Reflection
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white text-center"
        >
          The Water Journal
        </motion.h2>

        {/* Prompt area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full bg-orange-900/10 border border-orange-500/20 rounded-2xl p-6 text-center"
        >
          <p className="text-white/50 text-xs font-sans uppercase tracking-widest mb-3">Today's Prompt</p>
          <p className="text-white/90 text-lg md:text-xl font-serif italic leading-relaxed">
            {PROMPTS[promptIdx]}
          </p>
          <button
            onClick={() => { setPromptIdx((promptIdx + 1) % PROMPTS.length); setText(''); }}
            className="mt-4 text-orange-400/60 text-xs font-sans uppercase tracking-widest hover:text-orange-300 transition-colors"
          >
            Next prompt →
          </button>
        </motion.div>

        {/* Text area */}
        <motion.textarea
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Let it flow without judgment..."
          rows={5}
          className="w-full bg-black/50 border border-orange-900/30 rounded-2xl px-6 py-4 text-white/80 font-serif text-base focus:outline-none focus:border-orange-500/50 placeholder:text-white/20 resize-none leading-relaxed"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/25 text-xs font-sans italic text-center"
        >
          Your words remain private. Writing activates the sacral center.
        </motion.p>

      </div>
    </section>
  );
};
