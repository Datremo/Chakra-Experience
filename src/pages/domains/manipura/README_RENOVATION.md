# Maṇipūra — 45 World Creative Renovation

This package preserves the finished original Maṇipūra worlds (01–28) and replaces the old ending with a final 45th world. It adds sixteen new cinematic / interactive worlds and places them inside the existing narrative rather than appending a generic block of sections.

## Story spine

spark → jewel city → symbolic fire → power → response → anger → boundaries → control → forge → perfection → attention → sustainability → body → energy → decisions → practice → discernment → journal → fire → light → return to journey

## Added worlds

30 Heat Signal
31 Control Trap
32 Perfectionism Forge
33 Achievement Monument
34 Failure Fragments
35 Shared Power
36 Scattered Energy
37 Fire Budget
38 Digital Heat
39 Decision Chamber
40 Recovery Ember
41 Nourishment Alchemy
42 Effort vs Strain
43 Rāṃ Resonance
44 Fire to Light
45 Ending / Return to Journey

## Image budget: 8 images max

Put these files at:

public/assets/manipura/

01-spark-dawn.webp
02-jewel-city.webp
03-navel-fire.webp
04-inner-forge.webp
05-human-agency.webp
06-ram-chamber.webp
07-inner-sun.webp
08-fire-to-air.webp

The new worlds intentionally reuse those eight environments with different crops, lighting layers, motion, geometry, canvas particles and interactive states. Missing images are tolerated and the animated atmospheric layer still renders.

## Important integration note

The existing sections 01–28 are copied from the attached finished Maṇipūra package and left untouched. The previous 29_Ending.tsx is retained in the package, but is no longer mounted; 45_Ending.tsx is now the actual final world so the Anāhata transition appears only at the end.
