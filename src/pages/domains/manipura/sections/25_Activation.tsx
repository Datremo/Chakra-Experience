import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, Activity, Brain } from 'lucide-react';

export const ActivationSection: React.FC = () => {
  const signs = [
    {
      icon: <Activity size={32} className="text-amber-500" />,
      title: "Metabolic Vigor",
      desc: "Efficient digestion, stable blood sugar, and consistent physical energy without extreme spikes or crashes."
    },
    {
      icon: <Brain size={32} className="text-orange-500" />,
      title: "Decisive Action",
      desc: "The ability to make choices without prolonged hesitation. Moving from thought to action seamlessly."
    },
    {
      icon: <Shield size={32} className="text-red-500" />,
      title: "Clear Boundaries",
      desc: "Knowing your capacity. The ability to say 'no' cleanly, without guilt, apology, or resentment."
    },
    {
      icon: <Flame size={32} className="text-yellow-500" />,
      title: "Steady Confidence",
      desc: "Self-assurance that does not require dominating others or constantly seeking external validation."
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-[#030100] relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Integration</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">Signs of Activation</h1>
          <p className="text-xl text-amber-100/60 font-light max-w-2xl mx-auto leading-relaxed italic">
            A balanced Maṇipūra does not look like manic, restless energy. It looks like a quiet, unshakeable center of gravity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {signs.map((sign, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/30 hover:border-amber-700/50 hover:bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                {sign.icon}
              </div>
              <h3 className="text-2xl font-serif text-amber-100 mb-4">{sign.title}</h3>
              <p className="text-amber-100/60 font-light leading-relaxed">
                {sign.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
