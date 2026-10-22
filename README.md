# GGH — complete website source

Latest MagicPath GGH build, exported 22 October 2026. Includes every GGH page, imagery, animated hero and seals, responsive navigation, reveal animations, and the five-country interactive map.

## Open in Cursor
1. Extract this ZIP and open this folder in Cursor.
2. Install Node.js 22 or newer.
3. Run `npm install`, then `npm run dev`.
4. Open the local address printed in the terminal.

## Build
`npm run build` creates `dist/`; `npm run preview` previews that production output. Generated output and node_modules are deliberately excluded from this ZIP.

## Structure
- `src/components/generated/GGHCompleteWebsite.tsx` — all GGH pages and interactions.
- `src/components/generated/GGHCompleteWebsite.css` — site styling and responsive rules.
- `src/components/generated/GGHRegionalMap.tsx` — map geometry, selectors, region highlights and pins.
- `public/assets/` — bundled images and brand SVGs.

## Behaviour and handoff
Routes use URL hashes, so static hosting needs no special route rewrites. The enquiry form prepares an email draft; it does not send through a backend. Configure a form service if direct submissions are required. External links retain the existing company destinations. Google Fonts requires internet access; system font fallbacks remain available. The Poppins seal lettering is outlined in its SVG.

This package contains the complete GGH holding website currently being edited, not the separate Globtek marketing site or pitch deck. No live site has been deployed or changed by this export.

Map pins for Namibia, Mozambique, Zimbabwe and Nigeria indicate countries, not verified office addresses; Durban marks the headquarters.
