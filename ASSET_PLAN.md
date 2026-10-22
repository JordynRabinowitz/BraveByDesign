# Asset production plan

**Rule:** Make the interaction work using placeholders, then replace art incrementally. Do not create 50 assets before camera framing and user flow are working.

## Consistent art direction

- Low-poly, soft stylized 3D, warm/neutral classroom palette.
- Text and educational choice panels are 2D HTML for readability and accessibility.
- Low geometry and modest texture sizes so the project runs on laptops and tablets.
- Prefer **.glb** models, compressed textures, and optimized files.

## First art batch

| Priority | Asset | How to begin |
|---|---|---|
| P1 | Student desks and chairs | Keep primitives initially; replace as matching GLBs |
| P1 | Chalk/whiteboard, posters | Use geometry or user-created flat textures |
| P1 | Hallway door | Already a primitive; later make interactive transition |
| P2 | Lockers and bathroom entrance | Build a separate hallway scene; keep hateful graffiti hidden/obscured by default |
| P2 | Bookshelves, plants, windows | Use existing placeholder geometry |
| P3 | Avatars and classroom props | Stylized silhouettes; avoid depicting real students |
| P3 | Audio and ambience | Optional and muted by default |

## Suggested workflow

1. Sketch a layout and choose camera positions before modeling.
2. Find or model one asset (Blender or licensed asset collection).
3. Record creator, URL, license, and attribution in `ASSET_CREDITS.md`.
4. Export/convert to GLB, optimize and save to `public/assets/models/`.
5. Import into A-Frame using `gltf-model` (keeping interaction hotspots independent).
6. Check both desktop and mobile readability/performance.

Asset sources to evaluate: **Kenney** (game assets), **Quaternius** (low-poly packs), **Sketchfab** (model-by-model license verification), and **Poly Pizza** (model-by-model license verification). Never assume every model is free or attribution-free.

## Accessibility and safety

- Provide HTML controls for all essential interactions so gameplay doesn't require 3D navigation.
- Avoid flashing visuals, keyboard traps, and required audio.
- For antisemitism scenes, center educator actions and student care. Include opt-out and minimize potentially distressing graphic content.
