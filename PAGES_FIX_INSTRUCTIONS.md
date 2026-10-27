# BraveByDesign GitHub Pages Publishing Fix

This patch fixes the unstyled/plain-text published website. It does not replace the scenarios, room SVGs, or scoring logic.

## What changed

- `vite.config.js`: sets the GitHub Pages subpath `/BraveByDesign/`.
- `src/main.js`: uses the Vite base URL exactly as required so room illustrations are loaded under that subpath.
- `.github/workflows/deploy.yml`: builds with Vite and publishes `dist/`, rather than serving the development HTML directly.

## Install in your existing Codespace

1. Commit your current work first for a backup.
2. Upload `BraveByDesign-GitHub-Pages-Fix.zip` into the repository's root (the folder with `index.html` and `package.json`).
3. In the Codespaces terminal run:

    unzip -o BraveByDesign-GitHub-Pages-Fix.zip
    git add .github/workflows/deploy.yml vite.config.js src/main.js
    git commit -m "Fix GitHub Pages deployment for BraveByDesign"
    git push

4. On GitHub, go to the **BraveByDesign** repository, then **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
5. Open **Actions** → **Deploy BraveByDesign to GitHub Pages**. The latest run should show a green check. If no run started, use **Run workflow**.
6. Visit `https://jordynrabinowitz.github.io/BraveByDesign/`. Refresh if cached.

Note: The action is configured for a branch called `main`. If your default branch has a different name, update `branches: [main]` in the workflow.

The workflow installs dependencies on GitHub's runner, so you do not need to commit `node_modules` or the `dist` folder.
