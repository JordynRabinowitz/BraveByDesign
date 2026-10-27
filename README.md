# BraveByDesign v2 — The School Challenge

A lightweight, 2D point-and-click scenario game for educators. Three original SVG rooms replace the previous single classroom: **classroom**, **hallway**, and **library**. Players move through illustrated doors or choose room tabs, respond to seven moments, and collect seven keys to unlock a final reflection.

## What's new

- **Three illustrated locations:** the image and clickable objects change whenever you enter a new space.
- **14 written scenarios, seven per run:** each of seven hotspots randomly draws **one of two** scenarios. A new playthrough guarantees an alternate scenario at each hotspot, so the next game has seven different situations.
- **Shuffled answer buttons:** the strongest choice isn't always labeled A. Choice feedback remains linked to the right answer.
- **Saved progress:** changing rooms or refreshing the browser does not discard choices. The v2 save is separate from the old version.
- **Same four reflection metrics:** Belonging, Student Voice, Trust & Safety, and Equitable Access. Scores start at 50 and are illustrative, not validated measures of a real classroom.
- **Accessible ways to navigate:** clickable doors **and** labeled room tabs; tappable objects **and** text shortcuts below the illustration.
- **No A-Frame and no external art download:** room backgrounds are editable SVG files.

## Install in your existing Codespace

1. Commit your current code so you have a backup (or create a new Git branch).
2. Download the ZIP and upload it to the **repository root** in Codespaces, where `package.json` lives.
3. Open the terminal and run:

   ```bash
   unzip -o BraveByDesign-2D-v2.zip
   npm install
   npm run dev
   ```

4. Open the forwarded port (typically 5173). Test entering the hallway and library and trying a new playthrough.
5. Once it works, commit the new files. You can delete unused A-Frame code and assets later, but there is no need to do it immediately.

**Important:** Uploading a ZIP to the repository alone does not make GitHub or Codespaces unpack it automatically. Run the `unzip` command above. The ZIP is built with project files at the top level so it merges into the existing project rather than creating a nested folder. If you unzip first on your device and upload individual files, you don't need to run `unzip` in Codespaces.

## Edit or expand the game

- `src/scenarios.js`: `SCENARIOS` has the titles, situations, choices, impacts and feedback. `SLOTS` maps pairs of scenario IDs to seven clickable objects. `ROOMS` describes each space. `TRAVEL` links the rooms.
- `public/rooms/classroom.svg`, `hallway.svg`, `library.svg`: illustrated room backgrounds. Any SVG editor can modify them.
- `src/main.js`: builds the scene, changes rooms, shows scenarios, saves progress and opens the final reflection.
- `src/game.js`: randomized run selection, validation, progress and scoring logic.
- `src/style.css`: site layout, room tabs, hotspot styling, mobile styles.

Each location has `x` and `y` percentages for the glowing hotspot position. To add a third scenario possibility at one location, add a new object in `SCENARIOS`, then list its ID in that location's `scenarioIds` array in `SLOTS`. The next playthrough will avoid repeating the last scenario when there is another option available.

## Run tests

```bash
npm test
npm run build
```

The Vite config uses `base: './'` for hosting under a GitHub Pages repository subpath. Build output goes to `dist/`.

## Safeguards

All situations are fictional reflection exercises, not recipes for handling a real incident. Policies on documentation, mandated reporting, discrimination and safety vary; educators must follow local procedures. Do not use numerical scores to evaluate teachers, student identities or actual safety outcomes.
