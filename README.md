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
| `meta.title` | Browser tab title, `og:title` and the JSON-LD page name |
| `meta.description` | Meta description and social-card text (~150–160 characters) |
| `meta.siteUrl` | Canonical origin of the deployed site — every absolute URL (canonical, `og:url`, `sitemap.xml`, `robots.txt`, JSON-LD) is derived from it |
| `meta.language` | BCP-47 tag for `<html lang>` and `og:locale` (e.g. `pt-BR`) |
| `meta.ogImage` | Optional 1200×630 social preview image; omit it and no `og:image` is emitted |
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

## SEO

Search and social metadata is derived from the same config and written into
`index.html` **at build time** by the `seo` plugin in `vite.config.ts` (see
`src/lib/seo.ts`). That matters for a client-rendered SPA: social scrapers
(LinkedIn, WhatsApp, X, Slack) and crawlers that don't run JavaScript never
see tags a component sets at runtime.

What ships on every build, without any extra step:

- `<title>`, meta description, author, `<html lang>` and a canonical URL
- Open Graph and Twitter card tags (image tags only when `meta.ogImage` is set)
- A `robots` directive that lifts Google's default preview limits
- JSON-LD `@graph` with `WebSite`, `ProfilePage` and `Person` — the Person node
  picks up `sameAs` from `links`, `knowsAbout` from `techStack`, `alumniOf`
  from `education` and `hasCredential` from `certifications`
- `robots.txt` and `sitemap.xml`, generated into `dist/` and also served by
  `npm run dev`, so local and production behave the same

Set `meta.siteUrl` to your own domain before deploying a fork — it is the one
field the whole SEO surface hangs off.

**Social preview image:** `public/og-image.png` (1200×630) is what LinkedIn,
WhatsApp and X show when the site is shared. Replace it with your own and
point `meta.ogImage` at the new file — or clear the field, and links still
unfurl with a title and description, just no picture.

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
