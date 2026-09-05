import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

// The 68-World Journey State
export interface MuladharaJourneyState {
  // Act III: Mandala
  hasAssembledMandala: boolean;
  hasExploredLam: boolean;
  
  // Act V: Earth
  hasBalancedCairn: boolean;
  
  // Act VI: Human Life
  hasExploredSurvivalLab: boolean;
  hasViewedAncestralRoot: boolean;
  
  // Act VIII & X: Practice & Integration
  hasPracticedRoot: boolean;
  hasAcceptedCovenant: boolean;
  
  // Overall progress tracker (0 to 68)
  furthestWorldReached: number;
  
  // The current world centered in the viewport
  currentWorld: number;
}

interface MuladharaJourneyContextType {
  state: MuladharaJourneyState;
  
  // State Mutators
  completeMandala: () => void;
  exploreLam: () => void;
  balanceCairn: () => void;
  exploreSurvivalLab: () => void;
  viewAncestralRoot: () => void;
  completePractice: () => void;
  acceptCovenant: () => void;
  
  // Progress tracker
  reachWorld: (worldNumber: number) => void;
}

const initialState: MuladharaJourneyState = {
  hasAssembledMandala: false,
  hasExploredLam: false,
  hasBalancedCairn: false,
  hasExploredSurvivalLab: false,
  hasViewedAncestralRoot: false,
  hasPracticedRoot: false,
  hasAcceptedCovenant: false,
  furthestWorldReached: 1,
  currentWorld: 1,
};

const MuladharaJourneyContext = createContext<MuladharaJourneyContextType | undefined>(undefined);

export const MuladharaJourneyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<MuladharaJourneyState>(initialState);

  const completeMandala = useCallback(() => setState(s => ({ ...s, hasAssembledMandala: true })), []);
  const exploreLam = useCallback(() => setState(s => ({ ...s, hasExploredLam: true })), []);
  const balanceCairn = useCallback(() => setState(s => ({ ...s, hasBalancedCairn: true })), []);
  const exploreSurvivalLab = useCallback(() => setState(s => ({ ...s, hasExploredSurvivalLab: true })), []);
  const viewAncestralRoot = useCallback(() => setState(s => ({ ...s, hasViewedAncestralRoot: true })), []);
  const completePractice = useCallback(() => setState(s => ({ ...s, hasPracticedRoot: true })), []);
  const acceptCovenant = useCallback(() => setState(s => ({ ...s, hasAcceptedCovenant: true })), []);
  
  const reachWorld = useCallback((worldNumber: number) => {
    setState(s => {
      // Prevent unnecessary state updates if nothing changed
      if (s.currentWorld === worldNumber && s.furthestWorldReached >= worldNumber) {
        return s;
      }
      return {
        ...s,
        currentWorld: worldNumber,
        furthestWorldReached: Math.max(s.furthestWorldReached, worldNumber)
      };
    });
  }, []);

  return (
    <MuladharaJourneyContext.Provider value={{
      state,
      completeMandala,
      exploreLam,
      balanceCairn,
      exploreSurvivalLab,
      viewAncestralRoot,
      completePractice,
      acceptCovenant,
      reachWorld
    }}>
      {children}
    </MuladharaJourneyContext.Provider>
  );
};

export const useMuladharaJourney = () => {
  const context = useContext(MuladharaJourneyContext);
  if (context === undefined) {
    throw new Error('useMuladharaJourney must be used within a MuladharaJourneyProvider');
  }
  return context;
};
