const fs = require('fs');
const sections = [
  '01_TheGate.tsx',
  '02_TheBody.tsx',
  '03_HistoryMuseum.tsx',
  '04_MandalaChamber.tsx',
  '05_AgniSound.tsx',
  '06_DeitiesKundalini.tsx',
  '07_InnerForge.tsx',
  '08_DisciplinePause.tsx',
  '09_EnergyBudget.tsx',
  '10_SunCycle.tsx',
  '11_Observatory.tsx',
  '12_Integration.tsx'
];
sections.forEach(sec => {
  const name = sec.replace('.tsx', '').substring(3);
  let extraProps = '';
  if (name === 'Integration') extraProps = '({ onClose })';
  else extraProps = '()';
  
  let extraType = '';
  if (name === 'Integration') extraType = '<{ onClose: () => void }>';

  const content = `import React from 'react';

export const ${name}: React.FC${extraType} = ${extraProps} => {
  return (
    <section className='min-h-screen relative flex items-center justify-center snap-start w-full'>
      <h2 className='text-3xl text-amber-500'>${name}</h2>
    </section>
  );
};
`;
  fs.writeFileSync('src/pages/domains/manipura/sections/' + sec, content);
});
