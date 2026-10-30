# Bay Area Kings cricket website

One site for **Bay Area Kings**: the team, our journey, the tournaments we've played, and **CalCup 2027**, the T10 tournament we're hosting in the Bay Area on March 20–21, 2027.

This merges the earlier [Bay Area Kings site](https://bay-area-kings.pages.dev/) (content, results, photos) with the CalCup 2027 website (design, Astro setup). The look comes from the CalCup brand in the `calcup` design repo.

Built with [Astro](https://astro.build) and Tailwind CSS. It's a fully static site. Every push to `main` deploys to GitHub Pages:
**https://murtzdhulz.github.io/bay_area_kings_cricket_website/**

## Quick start

You need [Node.js](https://nodejs.org/) 22.23 or newer (`node -v`).

```bash
npm install      # once
npm run dev      # live preview at http://localhost:4321/bay_area_kings_cricket_website/
```

To see it on your phone, run `npm run dev -- --host` and open the **Network** URL on the same Wi-Fi. `npm run build` makes the production site in `dist/`.

## Site map

| Page | URL |
|---|---|
| Home (with CalCup banner) | `/` |
| Team roster | `/team/` |
| Our journey (timeline) | `/journey/` |
| Tournaments | `/tournaments/` |
| One page per past tournament | `/tournaments/chicago-2025/` etc. |
| Gallery | `/gallery/` |
| Support / sponsorship | `/support/` |
| CalCup 2027 section | `/tournaments/calcup-2027/` + `schedule/`, `teams/`, `format/`, `info/`, `register/` |

Pages inside the CalCup section get a second CalCup menu row and are titled "… · CalCup 2027".

## Edit the content

| File | What it controls |
|---|---|
| `src/data/site.ts` | Club details (Zelle, contact, sponsor tiers, preview strip), CalCup details (dates, fees, deadline, countdown) and both menus |
| `src/content/tournaments/<slug>.json` | One file per tournament. `status` is `past`, `hosting` or `upcoming`. Past ones get a page at `/tournaments/<slug>/`. Add paragraphs to `story` to replace the "write-up coming soon" box |
| `src/data/journey.ts` | The Journey timeline. Steps marked `draft: true` show "details to confirm" |
| `src/data/players.json` | Kings roster (from CricTrack) |
| `src/data/gallery.ts` | Gallery photos and captions. Photos live in `src/assets/kings/` |
| `src/content/teams/<slug>.json` | CalCup teams. `kings.json` links to our Team page via `clubPage` |
| `src/content/matches.json` | CalCup schedule |
| `src/data/rules.ts`, `src/data/faqs.ts` | CalCup format, rules and FAQs (draft) |

If a content file has a mistake (missing field, misspelt status), `npm run build` stops and says which file and field.

### Adding a tournament

Copy a file in `src/content/tournaments/`, rename it (e.g. `dallas-2027.json`), and fill in the fields. To add a photo, put it in `src/assets/kings/` and set `"image": "../../assets/kings/<file>"` plus `imageAlt`. When an upcoming tournament is done, change `status` to `past` and add `result`, `outcome` and `honours`.

## Content rules carried over from the Kings site

- The Bay Area Dawoodi Bohra cricket association is a **proposed** next step. Don't describe it as official or incorporated.
- Houston 2026: Bay Area Kings players competed as **Taheri Royals**.
- Chicago 2026: the group photo includes **Bay Area Knights** players.
- Results are team-reported. Award names follow the approved sponsor flyer (v4.1).
- Team photos: web use confirmed by Aziz Khilawala on October 5, 2026.

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. In the GitHub repo, **Settings → Pages → Source** must be set to **GitHub Actions** (one time).

For a custom domain later, set `site` in `astro.config.mjs` to the domain and remove `base`.
