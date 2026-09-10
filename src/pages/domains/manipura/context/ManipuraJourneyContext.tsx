import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type FireTone = 'ember' | 'flame' | 'forge' | 'sun' | 'light';
interface Value { reachedWorlds:number[]; fireTone:FireTone; reachWorld:(world:number)=>void; hasReached:(world:number)=>boolean; }
const Ctx=createContext<Value|null>(null);
const tone=(w:number):FireTone=>w>=73?'light':w>=57?'sun':w>=39?'forge':w>=19?'flame':'ember';
export const ManipuraJourneyProvider:React.FC<React.PropsWithChildren>=({children})=>{
 const [reachedWorlds,setReached]=useState<number[]>([]); const [fireTone,setTone]=useState<FireTone>('ember');
 const reachWorld=useCallback((w:number)=>{setReached(v=>v.includes(w)?v:[...v,w].sort((a,b)=>a-b));setTone(v=>{const a=['ember','flame','forge','sun','light']; return a.indexOf(tone(w))>a.indexOf(v)?tone(w):v;});},[]);
 const hasReached=useCallback((w:number)=>reachedWorlds.includes(w),[reachedWorlds]);
 return <Ctx.Provider value={{reachedWorlds,fireTone,reachWorld,hasReached}}>{children}</Ctx.Provider>;
};
export const useManipuraJourney=()=>{const c=useContext(Ctx);if(!c)throw new Error('useManipuraJourney must be used inside ManipuraJourneyProvider');return c;};
