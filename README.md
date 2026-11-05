# BraveByDesign — The School Challenge (EDUC 347 rubric update)

An illustrated 2D, point-and-click classroom-climate game for educators. Navigate the **classroom, hallway, and library**, investigate objects, make choices, and reflect on the impact of teacher decisions. The project asks how teachers proactively **build** brave spaces, **respond** to hate and exclusion, and **repair** harm.

## What this version includes

- **Three original picture-based rooms** (`public/rooms/*.svg`) — unchanged from the ZIP you supplied.
- **Ten interactive hotspots**, each with two alternate situations: **20 scenarios total**, ten in each playthrough.
- **Four existing classroom-climate indicators:** Belonging, Student voice, Trust & safety, Equitable access. These are illustrative, not validated assessments.
- Newly guaranteed themes in **every playthrough**: **linguistic diversity in math**, **LGBTQIA+ inclusion**, and **trauma-informed / healing-centered support**. Existing scenarios include antisemitism, identity-based harm, culturally responsive materials, participation, and equitable access.
- **Expandable EDU 347 course connections** after each decision, with a teacher analysis, a proposed practice change, and author-date references.
- **Course notes & references** dialog with an eight-topic rubric map and draft APA list.
- **Build → Respond → Repair** reflection arc below the game.
- Same core visual identity, room artwork, and story mechanics; only a small layout-spacing revision.

## Develop in GitHub Codespaces

From the repository root:

```bash
npm install
npm test
npm run dev
```

Open the forwarded development-server port, usually 5173. To publish to GitHub Pages, the pre-existing workflow and `vite.config.js` already target `/BraveByDesign/`.

## Where to edit

- `src/scenarios.js`: scene situations, answers, scoring impacts, room hotspots and travel.
- `src/research.js`: the teacher's research commentary and syllabus-based references. **Review every citation and interpretation against the assigned reading before submitting.**
- `src/main.js`: navigation, scenarios, score tracker, and references dialog.
- `src/game.js`: saved progress, replay logic, scoring.
- `src/style.css`: original lavender/cream design and small flow improvements.
- `public/rooms/*.svg`: original illustrated room assets.
- `tests/game.test.js`: source data and game-logic tests.

## Important teaching and academic notes

The scenarios are fictional. Always follow local reporting, safeguarding, anti-discrimination, privacy, and discipline procedures. Do not use game scores to assess real students or real teaching quality. The references and course connections were drafted from the **EDUC 347 syllabus** and are original applications, not quotations or definitive summaries of the full texts; verify them against the readings and course discussions. An AI development acknowledgment is included in the references dialog; use the format your instructor requires.

See `CODESPACES_UPDATE.md` for upload instructions.
