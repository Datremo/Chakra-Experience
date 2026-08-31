import React from 'react';
import { motion } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const LocationSection: React.FC = () => {
  const data = useVisuddhaData();

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col md:flex-row items-center justify-center relative gap-16 max-w-6xl mx-auto">
      
      {/* Left: Silhouette and Marker */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center h-[600px]">
        {/* Abstract human silhouette (front facing) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjUwIj48cGF0aCBkPSJNNTAgMTBDMzkgMTAgMzAgMTkgMzAgMzBTMzkgNTAgNTAgNTBTNzAgNDEgNzAgMzBTNjEgMTAgNTAgMTBaTTMwIDYwQzIwIDYwIDEwIDcwIDEwIDgwVjE1MEMxMCAxNTYgMTQgMTYwIDIwIDE2MFMyNiAxNTYgMjYgMTUwVjgwaDEyVjI0MEMzOCAyNDYgNDIgMjUwIDQ2IDI1MFM1NCAyNDYgNTQgMjQwVjE0MEg1NlYyNDBDNTYgMjQ2 NjAgMjUw NjQgMjUwUzcyIDI0NiA3MiAyNDBWMzBIODRWMTUwQzg0IDE1NiA4OCAxNjAgOTQgMTYwUzk4IDE1NiA5OCAxNTBWODBDOTggNzAgODggNjAgNzggNjBIMzBaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] bg-contain bg-center bg-no-repeat opacity-50" />
        
        {/* The ascending line */}
        <div className="absolute top-1/4 bottom-1/4 left-1/2 -translate-x-1/2 w-px bg-white/10" />

        {/* The ascending glowing marker */}
        <motion.div
          initial={{ top: '80%' }} // Starts near Root
          whileInView={{ top: '35%' }} // Rises to Throat base
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <div className="w-12 h-12 rounded-full border border-cyan-400/50 flex items-center justify-center bg-cyan-950/50 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <motion.div 
              className="w-3 h-3 rounded-full bg-cyan-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Labels passing by */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-full pointer-events-none">
          {/* We only show the active label once the marker arrives */}
          <motion.div 
            className="absolute top-[35%] left-[60%] whitespace-nowrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 4 }}
          >
            <div className="text-cyan-400 font-sans tracking-[0.3em] text-xs uppercase flex items-center gap-4">
              <div className="w-8 h-px bg-cyan-400/50" />
              Throat / Kaṇṭha-mūla
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 z-10 space-y-12">
        <div>
          <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Location</h2>
          <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">The Gateway of Space</h1>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            {data.location.traditional}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-900/30">
          <h3 className="font-sans text-xs tracking-widest text-cyan-500 uppercase mb-3">Modern Misconception</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {data.location.anatomical} Do not place it over the mouth or represent it strictly as the biological thyroid gland.
          </p>
        </div>
      </div>

    </section>
  );
};
