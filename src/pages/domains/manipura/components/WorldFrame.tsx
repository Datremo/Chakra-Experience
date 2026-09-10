import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ManipuraAtmosphere } from './ManipuraAtmosphere';

type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  scene?: 'spark' | 'temple' | 'forge' | 'human' | 'sun';
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export const WorldFrame: React.FC<Props> = ({ eyebrow, title, copy, scene = 'forge', children, align = 'center', className = '' }) => {
  const reduced = useReducedMotion();
  return (
    <section className={`relative min-h-[92vh] overflow-hidden flex items-center px-5 md:px-8 lg:px-12 py-20 ${className}`}>
      <ManipuraAtmosphere scene={scene} />
      <div className={`relative z-10 w-full max-w-7xl mx-auto ${align === 'left' ? '' : 'text-center'}`}>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 22 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className={align === 'center' ? 'max-w-4xl mx-auto mb-12' : 'max-w-3xl mb-12'}
        >
          <div className="text-[10px] md:text-xs uppercase tracking-[0.38em] text-amber-300/60 mb-5">{eyebrow}</div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.96] text-amber-50 tracking-tight">{title}</h2>
          {copy && <p className="mt-6 text-base md:text-lg text-amber-50/65 leading-relaxed max-w-2xl mx-auto">{copy}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
