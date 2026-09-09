import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FluidMovementSection: React.FC = () => {
  const [activeInstruction, setActiveInstruction] = useState<number | null>(null);

  const instructions = [
    { title: "Swaying", text: "Stand with feet shoulder-width apart. Slowly shift your weight from left to right. Let your arms hang loose. Be seaweed in the ocean." },
    { title: "Hip Circles", text: "Imagine you have a paintbrush attached to your tailbone. Paint large, slow circles on the floor beneath you. Switch directions." },
    { title: "Pelvic Tilts", text: "Lie on your back with knees bent. Slowly press your lower back into the floor, then arch it gently. Move with your breath." }
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#020914]">
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGFwYXRoIGQ9Ik0wIDIwQzEwIDEwIDMwIDEwIDQwIDIwQzMwIDMwIDEwIDMwIDAgMjBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjAsMTg0LDE2NiwwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="relative z-10 text-center max-w-5xl px-6 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-teal-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Somatic Practice
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-xl"
        >
          Fluid Movement
        </motion.h2>

        <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">
          You cannot heal the sacral chakra by thinking about it. You must move the hips. Stop locking your knees. Stop standing rigidly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructions.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              onMouseEnter={() => setActiveInstruction(i)}
              onMouseLeave={() => setActiveInstruction(null)}
              className={`p-8 rounded-3xl border transition-all duration-500 cursor-default ${
                activeInstruction === i 
                  ? 'bg-teal-900/40 border-teal-400 shadow-[0_0_30px_rgba(20,184,166,0.3)] scale-105' 
                  : 'bg-black/50 border-teal-900/30'
              }`}
            >
              <h3 className={`text-2xl font-serif mb-4 transition-colors ${activeInstruction === i ? 'text-teal-300' : 'text-teal-600'}`}>{inst.title}</h3>
              <p className="text-white/70 font-light">{inst.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
