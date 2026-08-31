const fs = require('fs');
const path = require('path');

const dir = 'd:/Downloads/Chakras/src/pages/domains/sahasrara/sections';
const files = [
  '02_ThousandPetals.tsx',
  '08_Bindu.tsx',
  '09_TheVoid.tsx',
  '12_IAm.tsx',
  '15_WhatIsLeft.tsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add imports if they don't exist
    if (!content.includes('ScrollContext')) {
      content = content.replace("import React,", "import React, { useContext,");
      content = content.replace("import React from", "import React, { useContext } from");
      if (!content.includes('useContext')) {
        content = content.replace("import { useRef", "import { useRef, useContext");
      }
      content = `import { ScrollContext } from '../SahasraraDomain';\n${content}`;
    }

    // Add useContext hook right after component declaration
    const componentRegex = /(export const \w+: React\.FC.* = \(\) => {)/;
    if (content.match(componentRegex)) {
       content = content.replace(componentRegex, `$1\n  const scrollContainer = useContext(ScrollContext);`);
    }

    // Replace useScroll calls
    content = content.replace(
      /useScroll\(\{\s*target:\s*containerRef,/g, 
      `useScroll({\n    target: containerRef,\n    container: scrollContainer || undefined,`
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});
