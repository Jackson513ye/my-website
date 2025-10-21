# Repo & Project background prompts (SVG)

This site’s repo and project cards use lightweight, hand-authored SVG covers with brand‑consistent gradients, a subtle hatch/texture overlay, and centered titles. You can regenerate matching backgrounds with the prompt templates below.

- Where they live:
  - Project covers: `public/images/projects/*.svg`
  - Repo covers: `public/images/repos/*.svg`
- Why SVG: Crisp at any size, tiny file size, color‑theming via gradients, and easy text edits.
- Canvas used: 1200×630 (OpenGraph style). Cards downscale (e.g., 544×306) without quality loss.

---

## Visual recipe (what “matching style” means)

- Base: diagonal gradient (2–3 stops) with soft contrast.
- Overlay: subtle diagonal hatch/lines at low opacity (5–10%), or a light radial vignette.
- Title: centered, large, semi‑bold; high contrast (white) with faint shadow for legibility.
- Optional tag: small, subtle label (e.g., “PROJECT” or “REPO”) for consistency.
- Safe margins: keep text within ~10% insets on all sides.

Suggested palettes (pick one)
- Teal → Indigo: `#06B6D4` → `#4F46E5`
- Sky → Violet: `#0EA5E9` → `#9333EA`
- Lime → Emerald: `#A3E635` → `#10B981`
- Orange → Pink: `#F59E0B` → `#EC4899`

Typography
- Family: system UI fallbacks are fine in SVG: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`
- Title size: ~64–84 px at 1200px width; letter‑spacing 1–2px
- Weight: 600–700; center aligned via `text-anchor="middle"`

---

## Prompt template — Project cover

Use this with your code LLM or SVG‑capable generator. Replace placeholders in braces.

```
You are a designer generating a single, clean SVG (no HTML wrapper).
Produce an SVG 1200×630 with this style:
- Smooth diagonal gradient background using the PALETTE below
- Subtle diagonal hatch pattern overlay at ~6–10% opacity
- Centered, high-contrast title text with faint shadow
- Optional small label “PROJECT” below title
- No external images or fonts, embed everything as pure SVG
- Optimize output size: minimal whitespace, no metadata, no comments

PARAMETERS
- TITLE: {TITLE}
- PALETTE: {PALETTE}  (e.g., Sky→Violet: #0EA5E9 → #9333EA)
- ACCENT: {ACCENT}    (e.g., #FFFFFF for text)

Constraints
- ViewBox 0 0 1200 630
- Gradient angle ≈ 30–45deg
- Hatch lines 2–3px stroke, 16–24px spacing, low opacity
- Title centered at x=600, y≈320; font-size≈72; weight 700; letter-spacing≈1px
- Add a faint text shadow via duplicated text layer with opacity≈0.15 and small blur or offset
- Optional sublabel “PROJECT” at y≈380 in smaller size (≈22–28)

Return only the SVG markup.
```

Example parameter fill
- TITLE: Spatial LLM for 3D Scans
- PALETTE: Sky→Violet (#0EA5E9 → #9333EA)
- ACCENT: #FFFFFF

---

## Prompt template — Repo cover

```
Generate a single SVG (1200×630) matching this visual system:
- Diagonal gradient background (use the palette)
- Subtle noise/hatch overlay (very low opacity)
- Large centered repo title (uppercase allowed), faint shadow for legibility
- Small top-left label “REPO” in a rounded pill (low-contrast white/alpha)
- No external images or fonts; pure SVG; optimize size

PARAMETERS
- TITLE: {REPO_NAME}
- PALETTE: {PALETTE}
- PILL_BG: {PILL_BG}  (e.g., white with 15% opacity via rgba/hsla)

Constraints
- ViewBox 0 0 1200 630
- Title centered at x=600, y≈330; font-size≈76; weight 700; fill #FFF
- Shadow via duplicate text with opacity≈0.12 and slight vertical offset
- Pill at (60, 60), radius≈10, padding≈14×8, text-size≈20, medium weight
- Hatch lines: stroke≈2px, spacing≈20px, opacity≈0.06

Return only the SVG markup.
```

Parameter examples
- REPO_NAME: LM2PCG
- PALETTE: Teal→Indigo (#06B6D4 → #4F46E5)
- PILL_BG: hsla(0, 0%, 100%, 0.15)

---

## Quick-edit SVG base (manual fallback)

If you prefer not to use prompts, start from this minimal template and edit text/colors:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#9333EA"/>
    </linearGradient>
    <pattern id="hatch" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="24" stroke="#FFFFFF" stroke-opacity="0.06" stroke-width="2" />
    </pattern>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#hatch)"/>
  <text x="600" y="330" text-anchor="middle" fill="#FFF" font-size="72" font-weight="700" style="letter-spacing:1px" filter="url(#shadow)">
    YOUR TITLE HERE
  </text>
  <!-- Optional: small sublabel
  <text x="600" y="380" text-anchor="middle" fill="#FFF" opacity="0.85" font-size="24" font-weight="600">PROJECT</text>
  -->
</svg>
```

---

## Workflow tips

- Export as `.svg` and save under:
  - Project: `public/images/projects/{slug}.svg`
  - Repo: `public/images/repos/{repo}.svg`
- Keep files under ~50KB for instant loads.
- Prefer high contrast titles; if the left half is bright, consider aligning title slightly right (x≈640) for balance.
- Consistency matters more than exact colors—stick to one or two palettes per section (projects vs repos).
