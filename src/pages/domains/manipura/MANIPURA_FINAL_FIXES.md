# Maṇipūra Final Fix

This package fixes the duplicate-import parse errors in `ManipuraDomain.tsx` by aliasing the repeated exports used by Worlds 41, 62, and 63:

- `AttentionFlameSection` from `41_AttentionFlame` → `AttentionFlameAdvancedSection`
- `InnerSunSection` from `62_InnerSun` → `InnerSunAdvancedSection`
- `ActivationSection` from `63_Activation` → `ActivationAdvancedSection`

The original Worlds 18, 23, and 25 component names remain unchanged.
