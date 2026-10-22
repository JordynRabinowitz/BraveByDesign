# Brave by Design v0.2 update — iPad Codespaces

This update adds a **classroom climate dashboard** with four simulated indicators: belonging, student voice, trust & safety, and equitable access. Each selected response produces a reversible, illustrative shift; selecting another choice in the same chapter replaces its effect. A Reset choices button returns the baseline.

It also adds a direct stylesheet link in index.html to address the earlier unstyled-page symptom if A-Frame JavaScript fails to load. This doesn't itself fix a missing A-Frame dependency.

## Apply in your existing Codespace

1. In Codespaces, use the Explorer upload control to upload `BraveByDesign-v0.2-update.zip` to the **root** of your project (same level as `package.json`).
2. In the Terminal, run:

```sh
unzip -o BraveByDesign-v0.2-update.zip
npm install
npm run dev -- --host 0.0.0.0
```

3. Open the forwarded 5173 port. Refresh Safari. Choose a chapter, select a response, and watch the bars change. Try a different response in the same chapter to see the effect replaced.

4. When working, commit and push:

```sh
git add index.html src/main.js src/scenarios.js src/style.css
# Optional: also add UPDATE_IN_CODESPACES.md
git commit -m "Add simulated classroom climate tracker"
git push
```

If the page still shows plain HTML, screenshot the Codespaces **terminal output and browser console**. Confirm that Vite shows no unresolved import errors.

## Design caveat

These numbers are fictional mechanics for reflecting on decisions. They are **not evidence-based effect sizes** or a measure of actual student outcomes, safety, or belonging. The feedback is the educational content; the dashboard is only a visual metaphor. Genuine research citations still need to be added before the final project.
