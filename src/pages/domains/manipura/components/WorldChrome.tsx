import React from 'react';
import { motion } from 'framer-motion';
import { CinematicBackdrop, type ManipuraImageKey } from './CinematicBackdrop';

interface WorldChromeProps {
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  image?: ManipuraImageKey;
  tone?: 'ember' | 'gold' | 'crimson' | 'neutral';
  grid?: boolean;
  className?: string;
}

export const WorldChrome: React.FC<WorldChromeProps> = ({
  number, eyebrow, title, subtitle, children, image, tone = 'ember', grid = false, className = '',
}) => (
  <section className={`min-h-screen w-full relative overflow-hidden flex items-center justify-center px-5 md:px-8 py-24 bg-[#080201] ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,145,25,.04),transparent_48%)]" />
    {image && <CinematicBackdrop image={image} tone={tone} grid={grid} vignette={0.93} />}
    <div className="relative z-10 w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[.8fr_1.8fr] gap-10 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28 self-start">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-15%' }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] md:text-xs font-mono tracking-[.3em] text-amber-400/60">{number}</span>
              <span className="h-px w-10 bg-amber-400/25" />
              <span className="text-[10px] md:text-xs uppercase tracking-[.3em] text-amber-200/45">{eyebrow}</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[.95] text-amber-50 drop-shadow-[0_0_30px_rgba(245,158,11,.14)]">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-sm md:text-base leading-7 text-white/50">{subtitle}</p>
          </motion.div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  </section>
);
