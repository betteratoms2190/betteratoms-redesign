# Visual Direction — "Paddo's Playroom in Space"

## Palette
| Role | Hex |
|---|---|
| Night sky (bg deep) | #1B1045 |
| Dusk violet (bg mid) | #3B1E7A |
| Cream (light surfaces) | #FFF7EC |
| Ink (text on light) | #24124F |
| Paddo green (primary) | #5BD66B → #2FA84F |
| Sunset orange (CTA) | #FF8A3D → #FF5E62 |
| Bubblegum pink | #FF7EB6 |
| Sky cyan | #4CC9F0 |
| Butter yellow (stars) | #FFD447 |
Text pairs meet WCAG AA: Ink on Cream 14:1; Cream on Night 15:1; white on #E2502E (CTA bottom) ≥4.5:1 for 18px bold.

## Type
- Display: **Fredoka** (600/700) — rounded, friendly, Pixar-poster feel.
- Body: **Nunito** (400/700) — rounded humanist, very readable.
Self-hosted via next/font (no runtime Google requests).

## 3D motif
"Clay atom": a soft glossy nucleus (sphere, MeshPhysical clearcoat) with three candy-coloured electron rings and orbiting bead electrons, plus a few floating clay planets/stars. Procedural geometry only (no model download). Warm key light (orange) + cool rim (cyan) + hemisphere fill = cinematic Pixar lighting. Soft contact shadow.

## Motion
- Idle: slow float (sine bob 0.15u), electrons orbit, gentle rotation.
- Parallax: scene leans toward pointer (±0.25 rad, damped) and drifts on scroll.
- UI: springy "squish" on buttons (scale 0.96 → 1.04), cards lift + tilt on hover, scroll reveals (fade-up 24px, stagger 80ms), page fade/slide transitions.
- `prefers-reduced-motion`: all animation disabled, 3D renders one static frame.
- Mobile (<768px) / low-power: static CSS clay atom instead of WebGL. 3D canvas loaded lazily after first paint (dynamic import, ssr:false), never over the text/CTA.
