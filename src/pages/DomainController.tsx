import React from 'react';
import { type ChakraData } from '../data/chakras';
import { MuladharaDomain } from './domains/muladhara/MuladharaDomain';
import { SvadhisthanaDomain } from './domains/svadhisthana/SvadhisthanaDomain';
import { ManipuraDomain } from './domains/manipura/ManipuraDomain';
import { AnahataDomain } from './domains/anahata/AnahataDomain';
import { VisuddhaDomain } from './domains/visuddha/VisuddhaDomain';
import { AjnaDomain } from './domains/ajna/AjnaDomain';
import { SahasraraDomain } from './domains/sahasrara/SahasraraDomain';
import { ChakraDomain as FallbackDomain } from '../components/ChakraDomain';

interface DomainControllerProps {
  chakra: ChakraData;
  onClose: () => void;
}

export const DomainController: React.FC<DomainControllerProps> = ({ chakra, onClose }) => {
  switch (chakra.id) {
    case 'root':
      return <MuladharaDomain chakra={chakra} onClose={onClose} />;
    case 'sacral':
      return <SvadhisthanaDomain chakra={chakra} onClose={onClose} />;
    case 'solar':
      return <ManipuraDomain chakra={chakra} onClose={onClose} />;
    case 'heart':
      return <AnahataDomain chakra={chakra} onClose={onClose} />;
    case 'throat':
      return <VisuddhaDomain chakra={chakra} onClose={onClose} />;
    case 'thirdeye':
      return <AjnaDomain chakra={chakra} onClose={onClose} />;
    case 'crown':
      return <SahasraraDomain chakra={chakra} onClose={onClose} />;
    default:
      return <FallbackDomain chakra={chakra} onClose={onClose} />;
  }
};
