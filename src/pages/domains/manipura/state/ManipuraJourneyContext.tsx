import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type FireState = {
  temperature: number;
  coherence: number;
  agency: number;
  attention: number;
  recovery: number;
  choices: Record<string, string>;
};

type ManipuraJourneyContextValue = FireState & {
  setMetric: (key: keyof Omit<FireState, 'choices'>, value: number) => void;
  recordChoice: (id: string, value: string) => void;
};

const defaultState: FireState = {
  temperature: 0.42,
  coherence: 0.42,
  agency: 0.5,
  attention: 0.5,
  recovery: 0.5,
  choices: {},
};

const Context = createContext<ManipuraJourneyContextValue | null>(null);

export const ManipuraJourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const setMetric = useCallback((key: keyof Omit<FireState, 'choices'>, value: number) => {
    setState(prev => ({ ...prev, [key]: Math.max(0, Math.min(1, value)) }));
  }, []);

  const recordChoice = useCallback((id: string, value: string) => {
    setState(prev => ({ ...prev, choices: { ...prev.choices, [id]: value } }));
  }, []);

  const value = useMemo<ManipuraJourneyContextValue>(() => ({
    ...state,
    setMetric,
    recordChoice,
  }), [state, setMetric, recordChoice]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useManipuraJourney() {
  const value = useContext(Context);
  if (!value) throw new Error('useManipuraJourney must be used inside ManipuraJourneyProvider');
  return value;
}
