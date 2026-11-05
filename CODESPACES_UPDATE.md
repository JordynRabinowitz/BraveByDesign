# BraveByDesign — rubric-aligned update (v2.1)

This update was based on the ZIP of the **picture-based 2D game**. It preserves all three SVG room images, existing interactive scenes, lavender-and-cream CSS, the score tracker, and replay functionality.

## What changed

- Expanded from **7 to 10** clickable locations (20 replayable scenarios in pairs).
- New stations: **Math & language** (conceptual understanding and translanguaging), **Identity & books** (LGBTQIA+ belonging), **Support corner** (trauma-informed support and repair).
- Every feedback screen now has an expandable **EDUC 347 course connection**: teacher analysis, a concrete practice to change, and author–date in-text citations.
- **Course notes & references** button opens a rubric-coverage map and a draft APA reference list.
- Added a Build → Respond → Repair narrative section below the game; softened spacing while keeping the original palette and CSS style.
- Preserved the score tracker (still illustrative, not a validated assessment).

## Upload on iPad Codespaces (safe route)

1. **Make a backup branch** or commit a clean baseline before overwriting files.
2. Upload the new update ZIP into the root of your Codespace.
3. In the Codespaces terminal run:

   ```bash
   unzip -o BraveByDesign-rubric-update.zip
   npm install
   npm test
   npm run dev
   ```

   The archive contains `index.html`, `src`, `public`, etc. at its root — not an extra enclosing folder.
4. Refresh the forwarded port preview. Test a classroom hotspot, a hallway hotspot, the three new stations, research panels, and **Course notes & references**.
5. Commit only after you're happy with the preview.

## Academic review checklist

The citation list was assembled from the **EDUC 347 syllabus**. The individual research connections are *original applications* of those sources to fictional classroom moments, **not quotations or verified summaries of the full readings**. Before final submission, check the full course texts, adjust any interpretations, verify APA bibliographic details and DOI fields, and follow Professor Gyles's AI-use citation/disclosure guidance.

The 10 playable situations will vary with each new playthrough. The three new station pairs each address their core rubric topic, ensuring that linguistic diversity, LGBTQIA+ inclusion, and trauma-informed practice appear in every playthrough.
