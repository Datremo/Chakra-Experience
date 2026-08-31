const fs = require('fs');
const path = require('path');
const dir = 'src/pages/domains/svadhisthana/sections';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Check if it imports svadhisthanaData
    if (content.includes('svadhisthanaData')) {
      // Replace import
      content = content.replace(/import\s+\{\s*svadhisthanaData\s*\}\s+from\s+['"].*?svadhisthanaData['"];/g, 
        'import { useSvadhisthanaData } from \'../../../../data/svadhisthanaData\';');
        
      // Insert hook at start of component
      content = content.replace(/(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{)/g, '$1\n  const svadhisthanaData = useSvadhisthanaData();');
      
      fs.writeFileSync(path.join(dir, file), content);
      console.log('Updated ' + file);
    }
  }
});
