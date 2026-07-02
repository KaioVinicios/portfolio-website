# Portfolio Website

A single-page developer portfolio built with React 19, TypeScript, Vite, and Tailwind CSS. All content — name, bio, projects, experience, certificates, skills, links, and every UI label — lives in **one config file**, so you can fork this repo and make it yours in minutes without touching any component code.

**Live demo:** [kaio-dev.rosetta-solutions.com](https://kaio-dev.rosetta-solutions.com)

<!-- Screenshot: drop an image at docs/screenshot.png and uncomment -->
<!-- ![Screenshot](docs/screenshot.png) -->

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [Framer Motion](https://motion.dev/) animations
- [next-themes](https://github.com/pacocoursey/next-themes) light/dark mode
- Optional [Microsoft Clarity](https://clarity.microsoft.com/) analytics

## Quick start

```bash
git clone https://github.com/KaioVinicios/PortfolioWebsite.git
cd PortfolioWebsite
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Make it yours

Everything you need to change lives in **`src/config/portfolio.ts`** — a single typed object:

| Property | What it controls |
|---|---|
| `meta.title` | Browser tab title |
| `person.name` | Hero heading and footer copyright |
| `person.role` | Small line above your name in the hero |
| `person.tagline` | Hero subtitle paragraph |
| `person.about` | "About me" paragraphs (array of strings) |
| `links` | `email`, `github`, `linkedin` — used by the hero buttons and the Contact section |
| `techStack` | Badge list in the About section |
| `projects` | Project cards — `github`, `live`, and `detail` are optional per project |
| `experiences` | Work experience cards, with `achievements` badges |
| `education` | Education entries in the Certificates section |
| `certifications` | Certificate cards (title, institution, year, credential URL) |
| `skillCategories` | Grouped skill badges in the Skills section |
| `labels` | Every UI string: nav items, section headings, button texts, footer lines — translate these to change the site's language |

The config is fully typed (see `src/config/types.ts`): if you remove a required field or typo a name, `npm run build` fails with a clear TypeScript error pointing at the problem.

**Hiding sections:** leave an array empty and the section disappears along with its navbar link. No certifications yet? Set `education: []` and `certifications: []` and the whole section is gone — no JSX editing needed.

**Favicon:** replace `public/folder-code.svg` (or add your own file and update the `<link rel="icon">` in `index.html`).

## Analytics (optional)

The site supports [Microsoft Clarity](https://clarity.microsoft.com/). It is **disabled by default** — no analytics code loads unless you opt in by setting an environment variable (see `.env.example`):

```bash
# .env.local — do not commit this file
VITE_CLARITY_ID=your_clarity_project_id
```

On Vercel: Project → Settings → Environment Variables → add `VITE_CLARITY_ID`, then redeploy.

## Deploying

1. Fork this repo, edit `src/config/portfolio.ts`, and push.
2. [Import the repo into Vercel](https://vercel.com/new) — the Vite preset works out of the box.
3. (Optional) add the `VITE_CLARITY_ID` environment variable.

Any static host (Netlify, Cloudflare Pages, GitHub Pages) works too: `npm run build` outputs to `dist/`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## License

[MIT](LICENSE)
