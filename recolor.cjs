const fs = require('fs');
const path = require('path');

const dir = 'd:/Downloads/Chakras/src/pages/domains/sahasrara/sections';
const files = [
  '01_TheAscent.tsx',
  '03_EnterThePetals.tsx',
  '04_SacredLibrary.tsx',
  '05_VedicSorting.tsx',
  '06_CrownMandala.tsx',
  '07_MoonChamber.tsx',
  '08_Bindu.tsx',
  '09_TheVoid.tsx',
  '10_WhoAmI.tsx',
  '11_AtmanRoom.tsx'
];

const colorMap = {
  'bg-black': 'bg-[#0b001a]',
  'bg-[#010102]': 'bg-[#0f0026]',
  'bg-[#020202]': 'bg-[#130026]',
  'bg-[#030303]': 'bg-[#0f0026]',
  'bg-[#050505]': 'bg-[#1a0033]',
  'bg-[#000000]': 'bg-[#0a001a]'
};

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace exact background colors
    for (const [oldColor, newColor] of Object.entries(colorMap)) {
      content = content.split(oldColor).join(newColor);
    }
    
    // Replace text-white/50 with something a bit more vibrant/purple tinted
    // content = content.replace(/text-white\/30/g, 'text-purple-300/50');
    // content = content.replace(/text-white\/40/g, 'text-purple-200/60');
    // content = content.replace(/text-white\/50/g, 'text-purple-100/70');
    
    // Replace some bg-white/5 to bg-purple-500/10
    content = content.replace(/bg-white\/5/g, 'bg-purple-500/10');
    content = content.replace(/bg-white\/10/g, 'bg-purple-500/20');
    content = content.replace(/border-white\/10/g, 'border-purple-500/20');
    content = content.replace(/border-white\/20/g, 'border-purple-400/30');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
