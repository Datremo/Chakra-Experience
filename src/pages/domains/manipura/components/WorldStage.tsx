import React, { type PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MANIPURA_IMAGES } from './manipuraImages';

export type ImageKey = keyof typeof MANIPURA_IMAGES;

type Props = PropsWithChildren<{ eyebrow?: string; title: string; subtitle?: string; image?: ImageKey; tone?: 'ember'|'gold'|'red'|'night'|'light'; className?: string; world?: number; }>; 

const tones = {
  ember: { accent: 'text-amber-300', glow: 'rgba(245,158,11,.28)', line: 'border-amber-500/20', bg: 'from-[#170a02] via-[#0e0602] to-[#050302]' },
  gold: { accent: 'text-yellow-200', glow: 'rgba(250,204,21,.26)', line: 'border-yellow-500/20', bg: 'from-[#171006] via-[#0d0804] to-[#050302]' },
  red: { accent: 'text-orange-200', glow: 'rgba(239,68,68,.24)', line: 'border-red-500/20', bg: 'from-[#190402] via-[#0e0503] to-[#050201]' },
  night: { accent: 'text-orange-100', glow: 'rgba(251,146,60,.18)', line: 'border-orange-500/15', bg: 'from-[#0d0704] via-[#070403] to-[#020201]' },
  light: { accent: 'text-amber-100', glow: 'rgba(253,230,138,.22)', line: 'border-amber-200/20', bg: 'from-[#24180b] via-[#130d07] to-[#080603]' },
};

export const WorldStage: React.FC<Props> = ({ eyebrow, title, subtitle, image, tone='ember', className='', world, children }) => {
  const reduce = useReducedMotion();
  const [imageReady,setImageReady] = useState(true);
  const t=tones[tone];
  return <section className={`relative min-h-[92vh] py-20 md:py-28 px-5 md:px-10 lg:px-16 flex items-center overflow-hidden ${className}`}>
    {image && <div className="absolute inset-0 opacity-45">
      <img src={MANIPURA_IMAGES[image]} alt="" className="w-full h-full object-cover scale-105" onError={()=>setImageReady(false)} style={{display:imageReady?'block':'none'}} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050302]/35 via-[#050302]/72 to-[#050302]" />
    </div>}
    <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${t.bg}`} />
    <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(circle at 52% 42%, ${t.glow}, transparent 38%), radial-gradient(circle at 12% 82%, rgba(255,255,255,.025), transparent 28%)`}} />
    <div className="absolute inset-0 pointer-events-none opacity-25" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,200,100,.25) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(255,120,40,.18) 0 1px, transparent 1.5px)', backgroundSize:'120px 120px, 170px 170px'}} />
    <motion.div initial={reduce?{opacity:1}:{opacity:0,y:24}} whileInView={reduce?undefined:{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.8,ease:'easeOut'}} className="relative z-10 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>{eyebrow && <div className={`text-[11px] tracking-[.38em] uppercase ${t.accent} mb-3`}>{eyebrow}</div>}<h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[.95] max-w-5xl">{title}</h2>{subtitle && <p className="mt-5 max-w-2xl text-base md:text-xl text-white/62 leading-relaxed">{subtitle}</p>}</div>
        {world && <div className="hidden md:block text-[10px] tracking-[.35em] text-white/25">{String(world).padStart(2,'0')} / 74</div>}
      </div>
      {children}
    </motion.div>
  </section>
};

export const GlowOrb: React.FC<{size?:number; active?:boolean; className?:string}> = ({size=160,active=true,className=''}) => <motion.div animate={active?{scale:[1,1.04,1], opacity:[.85,1,.85]}:{}} transition={{duration:3, repeat:Infinity, ease:'easeInOut'}} className={`rounded-full ${className}`} style={{width:size,height:size,background:'radial-gradient(circle, rgba(255,247,198,.95) 0 4%, rgba(251,191,36,.9) 12%, rgba(245,158,11,.42) 34%, rgba(239,68,68,.15) 55%, transparent 72%)', filter:'blur(.2px)', boxShadow:'0 0 70px rgba(245,158,11,.35)'}} />;

export const HeatLine: React.FC<{count?:number; horizontal?:boolean}> = ({count=8,horizontal=false}) => <div className={`flex ${horizontal?'flex-row':'flex-col'} gap-2 opacity-70`}>{Array.from({length:count}).map((_,i)=><motion.div key={i} className="rounded-full bg-gradient-to-r from-amber-200 via-orange-400 to-transparent" style={{height:horizontal?2:Math.max(2,10-i),width:horizontal?'100%':Math.max(40,130-i*10)}} animate={{opacity:[.18,.75,.18],x:horizontal?[0,6,0]:[0,-3,0]}} transition={{duration:1.4+i*.1,repeat:Infinity,delay:i*.08}} />)}</div>;

export const ChoicePill: React.FC<{children:React.ReactNode; active?:boolean; onClick?:()=>void}> = ({children,active,onClick}) => <button onClick={onClick} className={`px-5 py-3 rounded-full border transition ${active?'border-amber-300/60 bg-amber-300/10 text-amber-100':'border-white/10 bg-white/[.025] text-white/60 hover:text-white hover:border-amber-300/30'}`}>{children}</button>;

export const ImagePlaceholder: React.FC<{label:string; path?:string}> = ({label,path}) => <div className="rounded-2xl border border-dashed border-amber-200/15 bg-black/20 p-4 text-[10px] tracking-[.22em] uppercase text-white/30">IMAGE PLACEHOLDER · {label}{path?` · ${path}`:''}</div>;
