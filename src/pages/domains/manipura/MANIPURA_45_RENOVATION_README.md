# Maṇipūra — 45-world renovation package

## What this package does

This is a drop-in renovation of the existing Maṇipūra deep dive. The original 01–28 section files and their interaction code are preserved. `29_Ending.tsx` is also preserved on disk but is not mounted, so the old early exit cannot steal the final position.

The mounted experience contains exactly 45 worlds by combining the original completed worlds with 16 new worlds and a new final return world.

### Narrative spine

`ARRIVE → BUILD → ENCOUNTER FIRE → POWER → RESPONSE → BOUNDARY → FORGE → ATTENTION → CAPACITY → BODY → PRACTICE → DISCERNMENT → LIGHT → RETURN`

### New experiential worlds

30 Heat Is Information
31 Control Field
32 Achievement Monument
33 Failure Fragments
34 Shared Power
35 Scattered Energy
36 Fire Budget
37 Digital Heat
38 Decision Chamber
39 Recovery Ember
40 Fuel Lab
41 Effort vs Strain
42 Rāṃ Resonance
43 Truth Engine
44 Fire → Light
45 Return to Journey

## Existing dependencies

This folder assumes the existing project already contains the dependencies used by the original deep dive:

- `react`
- `framer-motion`
- `lucide-react`

No new third-party package is required by the renovation. Canvas, SVG, CSS effects and Framer Motion provide the high-tech interaction layer without increasing dependency risk.

## Integration

Copy/merge the contents of this folder into:

`src/pages/domains/manipura/`

Keep the application's existing `DomainController` and `chakra` routing. `ManipuraDomain` still accepts `{ chakra, onClose }`.

The eight optional image placeholders belong in:

`public/assets/manipura/`

See `assets/README_IMAGES.md`.

## Important behavior

- The old 29th ending remains available as source code but is intentionally not rendered.
- The new final CTA is **RETURN TO JOURNEY**.
- The deep dive's visible top-left return button remains for an immediate escape, while the narrative ending is reserved for World 45.
- The new state context is internal. It does not present a fake “chakra activation score.” It allows visual and interaction feedback to carry forward inside the experience.
- Reduced-motion users receive simplified transitions.
- Pointer interactions use pointer events so touch can participate where practical.

## Design intention

The page is not a sequence of informational cards. The new worlds use interaction as the teaching mechanism:

- heat separates signal from story
- control experiments distinguish agency from domination
- the achievement monument separates outcomes from identity
- failure becomes reusable material
- delegation changes the shape of the forge
- scattered sparks represent fragmented attention
- the fire budget makes finite capacity visible
- digital notifications physically crowd the centre
- the decision chamber creates a response gap
- recovery changes the ember itself
- fuel and effort experiments distinguish steadiness from excess
- Rāṃ is presented as a contemplative focal practice, not a scientific activation meter
- the truth engine makes source literacy interactive
- fire becomes light before the final return
