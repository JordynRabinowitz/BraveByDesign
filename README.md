# Brave by Design

**Creating belonging. Confronting hate. Building community.**

An early playable prototype for an EDUC 347 classroom-climate final project. Built with **A-Frame, Vite, vanilla JavaScript, and CSS**. The classroom uses low-poly primitive shapes as temporary assets, so the game is functional before custom models are ready.

## Run it on your computer

Install [Node.js](https://nodejs.org/) (current LTS), then:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## What to test first

1. Open the page and choose **Enter the classroom**.
2. Pick a teaching response and read the feedback.
3. Return to the classroom. Click the other chapter cards or glowing objects.
4. Use your keyboard to try the chapter cards without interacting with 3D.
5. Click **About the project** to reset progress.

## File layout

- `index.html` — A-Frame classroom and overlays, currently built from simple primitives.
- `src/main.js` — user interactions, opening panels, progress, keyboard support.
- `src/scenarios.js` — editable educational scenarios, feedback, reflection, citation placeholders.
- `src/style.css` — page and game UI design.
- `public/assets/` — add custom models, illustrations, textures, audio here.
- `ASSET_PLAN.md` — priorities and asset workflow.
- `ASSET_CREDITS.md` — track downloaded assets and permissions.

## Next development milestones

- Polish classroom navigation and furniture using licensed low-poly GLB models.
- Create the hallway location for the **Respond** chapter.
- Add a content-warning/skip gate for sensitive incidents.
- Add more course-specific experiences: culturally responsive instruction, LGBTQIA+ inclusion, linguistic diversity, trauma-informed practices, equitable participation and classroom design.
- Replace all course-research placeholders with **actual readings, guest lectures, and APA citations**.
- Create an accessible references screen, add a save-free summary/reflection at the end, and test on mobile.

## Deploy to GitHub Pages

Copy all repository starter files into the root of your `BraveByDesign` repo (not as a nested folder). Push to `main`. Then in GitHub **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included workflow will build and deploy the Vite site.

The expected deployment address will be `https://jordynrabinowitz.github.io/BraveByDesign/` after GitHub Pages reports a successful deployment. It is **not live yet**.

## Ethical note

This is a **fictional teaching simulation**, not a substitute for district reporting procedures. It does not depict actual students or reproduce hate symbols. Any school hate incident should be addressed using applicable school policy, student supports, and appropriate reporting. Do not force targeted students to narrate harm, and do not equate protected identities with a debate to be won.
