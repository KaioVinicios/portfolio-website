---
name: Kaio Dev — Portfolio
description: A single-page developer portfolio; the site is the proof of the engineering it claims.
colors:
  ink: "#18181b"
  ink-foreground: "#fafafa"
  paper: "#ffffff"
  page: "#fafafa"
  wash: "#eeeeee"
  paper-foreground: "#09090b"
  slate-100: "#f4f4f5"
  slate-200: "#e4e4e7"
  slate-500: "#71717a"
  zinc-950: "#09090b"
  zinc-900: "#18181b"
  zinc-800: "#27272a"
  zinc-400: "#a1a1aa"
  alert: "#ef4444"
  alert-dark: "#7f1d1d"
  vignette: "#000000cc"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 4.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.025em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  pill: "24px"
spacing:
  section-y-base: "80px"
  section-y-md: "112px"
  section-y-lg: "128px"
  container-max: "56rem"
  container-x-base: "24px"
  container-x-md: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-foreground}"
    rounded: "{rounded.md}"
    padding: "0 10px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-foreground}"
    rounded: "{rounded.md}"
  badge-secondary:
    backgroundColor: "{colors.slate-100}"
    textColor: "{colors.paper-foreground}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
    height: "20px"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper-foreground}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-foreground}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Kaio Dev — Portfolio

## 1. Overview

**Creative North Star: "The Clean Build"**

The site reads like a passing CI run: a green checkmark, a diff with nothing left to trim. Every visual decision should feel like the output of a careful engineer's review pass, not a decorated brochure — because for this audience (recruiters scanning a full-stack candidate), the craft of the page **is** the evidence of the craft claimed inside it. Restraint is not timidity here; it's the seniority signal. A rough edge — a contrast miss, a wobbly reveal, a template tell — undercuts the pitch more than any missing feature would.

The palette went through a **Committed** phase (a Terminal Cyan accent) and back: the user tried it and asked to revert to a plain neutral, so the system is now deliberately, chosen-not-accidentally grayscale again — see the **Deliberate Neutral Rule** below for what makes this different from where the project started. Primary buttons, focus rings, and the hero's `LetterGlitch` glint are all Ink again; no hue survives anywhere in the token system except the unused destructive red. Distinctiveness now rests entirely on structure and motion, not color: the six content sections no longer share one template (only Projects and Contact keep the small eyebrow kicker, Experience is a vertical timeline, Projects leads with an asymmetric featured card). The type system remains a single family (Inter) differentiated only by size and weight — that axis is still open for a future `typeset` pass.

The former duplicate token definitions (`src/App.css`'s dead OKLCH block vs. `src/index.css`'s effective HSL-turned-OKLCH values) are resolved: `index.css` is now the single source of truth for every token value; `App.css` owns only the `@theme inline` Tailwind-mapping and base font/layer rules.

**Key Characteristics:**
- Single narrow centered column for the entire page (`max-w-4xl`, ~896px) — no asymmetric wide macro-layout at the page level; Projects' featured card and the Experience timeline are the two deliberate departures from pure stacked-section symmetry.
- Flat, single-edge-bordered surfaces. `shadow-xs` is the ceiling; there is no deep elevation anywhere, and cards carry a border only (no doubled ring).
- Zero saturated color, deliberately. The palette is pure grayscale (chroma 0 throughout) plus a destructive red that's unused in shipped UI — see §2's Deliberate Neutral Rule for why this is a choice, not the original accident.
- One typeface, one weight strategy (400 body / 500 label / 700 heading) carrying the entire hierarchy — still a single-voice axis, unlike color and layout.
- Badges-as-metadata is the dominant recurring motif: tech stacks, achievements, years, and periods are all rendered as the same pill badge.
- Only Projects and Contact open with the eyebrow + heading pair now; About, Experience, Skills, and Certificates lead with the heading directly (Certificates pairs its heading with an inline icon). See §3's Named Rule for the full before/after.

## 2. Colors

Deliberately monochrome: every role resolves to a step on a true chroma-0 grayscale, with no hue carrying brand meaning anywhere. This was a Committed accent (Terminal Cyan) for one round, then reverted by explicit request — see the Named Rule below for how this differs from the original, unexamined default.

### Primary
- **Ink** (`#18181b` light-mode value / inverts to `#fafafa` in dark mode): the "invert" role — near-black on white in light mode, near-white on near-black in dark mode. Carries primary buttons, every keyboard focus ring, and a rare glint inside the hero's `LetterGlitch` canvas. The site's only high-contrast anchor color; a neutral, not a brand hue.
- **Ink Soft** (`oklch(0.94 0 0 / 50%)` light / `oklch(0.32 0 0 / 45%)` dark, token `--primary-soft`): a translucent neutral wash for background tints behind marker moments (the featured-project pill, the Experience timeline dot) — the "surface tint instead of a stripe" technique, never a `border-left`/`border-right` accent.

### Neutral
- **Page** (`oklch(0.985 0 0)` light / `oklch(0.145 0 0)` dark, `--background`): the body surface. In light mode this is a true off-white, **not** pure white — see the Separated Ramp Rule below.
- **Paper** (`oklch(1 0 0)` light / `oklch(0.205 0 0)` dark, `--card` / `--popover`): cards, the navbar's contact panel. Sits one step *above* the page in both themes, so a card reads as lifted without any shadow.
- **Wash** (`oklch(0.945 0 0)` light / `oklch(0.185 0 0)` dark, `--surface-wash`): the band behind the alternating sections. Its own token, not an alpha of `--muted` — see §4's Alternating Section Wash Rule.
- **Fill** (`oklch(0.94 0 0)` light / `oklch(0.269 0 0)` dark, `--muted` / `--secondary` / `--accent`): secondary badges and hover states.
- **Stroke** (`oklch(0.885 0 0)` light / `oklch(1 0 0 / 10%)` dark, `--border` / `--input`): border and input stroke color.
- **Slate 500** (`#71717a` light / `#a1a1aa` — "Zinc 400" — dark): `muted-foreground` — the color of every eyebrow, body paragraph, and secondary label on the page. Lightness stays deepened (light mode) from the earlier contrast fix — that AA-margin improvement is independent of the color-strategy reversal and was kept.
- **Alert** (`#ef4444` light / `#7f1d1d` dark): destructive/error role. Defined in the token system but not currently used anywhere in shipped UI.
- **Vignette** (`rgba(0,0,0,0.8)` / `#000000cc`): the hero's center-vignette overlay in dark mode (`LetterGlitch`). Deliberately fixed pure-black, independent of theme — a depth vignette should read as "camera falloff," not carry brand color. Registered here as an intentional token, not drift.

### Named Rules
**The Separated Ramp Rule (light mode).** Every light surface role must be a *distinguishable* step, not a nominally different token. The original ramp had `--background`, `--card` and `--popover` all at L 1.0 with a 0.97 fill applied at 30% alpha, which composited the section band to **L 0.991 against an L 1.0 page — a 0.009 difference, invisible**, while the same classes in dark mode gave 0.145 → 0.184. The light theme effectively had two tones. The ramp is now page 0.985 · wash 0.945 · fill 0.94 · paper 1.0, giving ΔL 0.040 from page to wash in *both* themes and ΔL 0.055 from wash to card. Measured after the change: `muted-foreground` holds 5.81:1 on the wash, 6.54:1 on the page and 6.83:1 on paper — all above AA. **When adding a light surface, state its ΔL against its neighbours before picking the value; "a slightly lighter gray" is how the ramp collapsed the first time.**

**The Deliberate Neutral Rule.** Every token in this system resolves to chroma 0 except Alert. Unlike the project's original "No-Hue" state — which was the unmodified shadcn starter theme, arrived at by not choosing — this is a considered choice made twice: once to add a Committed accent, once to remove it. Distinctiveness now rests on structure (the Experience timeline, Projects' asymmetric featured card) and motion, not color. If a future pass wants to reintroduce an accent, treat it as a fresh `/impeccable colorize` decision, not a partial restore of the old cyan values (which are no longer defined anywhere in the token system).

## 3. Typography

**Body Font:** Inter Variable (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Display Font:** Inter Variable — same family, no second typeface in the pairing.

**Character:** A single geometric-humanist sans carrying every role through weight and size alone. Precise and legible at every scale, but with only one voice — there is currently no contrast axis (no serif/sans or geometric/humanist pairing) to give the display type its own identity apart from "bigger and bolder body text."

Note: `@fontsource-variable/figtree` is imported in `src/index.css` but never referenced by any `@theme` token or utility class — it loads as dead weight (an unused font-face network request) rather than an active part of the type system.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 1.2rem + 4.5vw, 4.5rem)` / 36px→72px, line-height 1.1, tracking -0.025em): the hero `<h1>` — the person's name. The single largest, most committed typographic moment on the page.
- **Headline** (700, `clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)` / 30px→36px, line-height 1.2, tracking -0.025em): every section's `<h3>` heading (About, Experience, Projects, Skills, Certificates, Contact). Consistent type treatment across sections; the *opener* around it now varies (eyebrow present or not, icon or not) per §3's Named Rule.
- **Title** (600, 18px, line-height 1.4): card/entry titles — project names, job titles, education degrees. Certificate rows go one step larger (20px/`text-xl`) because there the institution is the headline, see §5's Ruled-List Rule.
- **Body** (400, 16px, line-height 1.625, `text-muted-foreground` for most instances): paragraph copy — bio, project descriptions, experience descriptions. Effectively capped by the 896px container, well under the 65–75ch guideline.
- **Label** (500, 14px, `text-muted-foreground`): nav links, badge text, metadata lines (company, institution).
- **Eyebrow** (500, 14px, uppercase, tracking-wide `0.025em`, `text-muted-foreground`): the small kicker above every section heading. See Named Rule below.

### Named Rules
**The Repeated Eyebrow Problem (resolved during the layout pass).** Previously all six content sections opened with an identical `eyebrow` + `heading` pair. Now only **Projects** and **Contact** keep the eyebrow (two anchor points of continuity); **About**, **Experience**, **Skills**, and **Certificates** lead with the heading directly — Certificates pairs its heading with an inline icon instead. No two adjacent sections share the same opener treatment anymore. Keep it this way: if a future section needs an eyebrow, check this rule first rather than defaulting to it.

## 4. Elevation

Flat by default, ring-bordered rather than shadowed. The system uses `shadow-xs` (a near-invisible 1px-equivalent shadow) as its ceiling — there is no lifted, floating, or layered surface anywhere on the page. Depth is implied by border/ring contrast and background-tint changes (the `--surface-wash` section band, `bg-card/50` translucent cards), not by shadow. This reads as intentional restraint and matches "quiet and exact" — keep it that way rather than introducing drop shadows as a shortcut to hierarchy.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`, Tailwind's `shadow-xs`): the only shadow value in use. Applied to outline-variant buttons and, implicitly, base `Card`.
- **Border-as-edge** (`border-border/50`, hover `border-border`): the `Card` component's one edge signal. The base primitive previously also carried a `ring-1 ring-foreground/10`, doubling the edge treatment with every consumer's border; the ring was removed from `Card` during the harden pass, so border is now the single source of truth for card edges.

### Named Rules
**The Alternating Section Wash Rule.** The six content sections alternate between the page background and the `bg-surface-wash` band, strictly, in page order: About (bg) · Experience (muted) · Projects (bg) · Certificates (muted) · Skills (bg) · Contact (muted). The Hero sits outside the sequence (it's full-bleed with `LetterGlitch`), and the footer closes on the page background after Contact's wash. The alternation used to break from Certificates onward (Certificates bg → Skills muted → Contact bg gave two plain sections in a row and dropped the rhythm); it was corrected during the contact-menu pass. The band was an alpha of `--muted` until the palette pass; it now has its own `--surface-wash` token, because the two roles need to diverge per theme (in dark the hover fill is far lighter than the band) and the alpha collapsed in light mode. A new section must take whichever tone continues the alternation, not whichever one its content "feels like". Note that `AnimatedBackground`'s blob layer is *not* tied to this wash — it stays mounted on Experience and Skills, one of each tone, and reads correctly on both.

**The Flat-By-Default Rule.** Surfaces sit flush with the page at rest. The only depth cues are a hairline ring (`ring-foreground/10`), a soft translucent tint (`bg-card/50`, `bg-surface-wash`), and, on interactive hover, a small vertical lift (`whileHover: { y: -4 }` on project cards) — never a shadow escalation.

## 5. Components

Quiet and exact: every primitive is legible and correct at rest, and the emphasis lives in small hover confirmations (a border sharpening, a slight lift, an opacity fade-in) rather than in decoration.

### Buttons
- **Shape:** 6px radius (`rounded-md`), height 36px default / 32px sm / 40px lg. The icon-only variant is 44px (`size-11`, bumped from 36px during polish to meet the 44×44px touch-target minimum) — it's the one size where "default" and "icon" diverge.
- **Primary:** Ink background, Ink-foreground text, no shadow; hover fades to `bg-primary/80`. The only saturated-contrast button (by weight, not hue); used sparingly (hero CTA, contact CTA).
- **Outline:** Paper background, 1px `border-border` stroke, `shadow-xs`; hover fills to `bg-muted`. Used for the hero's secondary action (LinkedIn).
- **Ghost:** transparent at rest, `bg-muted` on hover; no border, no shadow. Used for the navbar theme toggle, mobile menu, and project card GitHub/Live links (always visible, on every card).
- **Focus:** `focus-visible:ring-[3px]` at `ring-ring/50` plus a matching border-ring shift — consistent across all variants.

### Badges (the system's signature component)
- **Style:** pill shape (24px radius), 20px height, 12px text, medium weight.
- **Secondary** (the default choice throughout): Slate-100 background, ink text. Used for tech-stack tags, project tech tags, and achievement tags — the single most-repeated element on the page.
- **Outline:** transparent, 1px border. Used for date/period metadata (experience period, certificate year, education year) — a deliberate visual distinction between "what" (secondary badges) and "when" (outline badges).
- **State:** no selected/unselected toggle state exists; badges are always static/display-only in this project (no filter or interactive-chip usage).

### Cards / Containers
- **Corner Style:** 12px radius (`rounded-xl`).
- **Background:** Paper (`bg-card`); Experience-section cards use a translucent `bg-card/50` with `backdrop-blur-sm` over the `AnimatedBackground` blob layer.
- **Shadow Strategy:** see Elevation — hairline ring, `shadow-xs`, no true elevation.
- **Border:** consumers apply `border-border/50` (hover: `border-border`) as the card's one edge signal — the base `Card` primitive no longer duplicates this with its own ring (resolved during the harden pass).
- **Internal Padding:** 24px default (`p-6`). The certificate grid that used `p-5` is gone — see the Ruled-List Rule below.
- **Hover:** project cards lift 4px (`whileHover: { y: -4 }`, spring). Card action links are **always visible** — they used to fade in on desktop hover, which meant every card reserved a row of blank space for something the visitor couldn't see. A card should occupy only space it actually uses.
- **Internal padding — the doubled-padding trap.** `Card` already supplies the vertical padding (`py-6`) and `CardContent` the horizontal (`px-6`). Passing `p-6`/`p-8` to `CardContent` stacks a *second* vertical pass on top, giving 48px top/bottom against 24px left/right — which is what made the project cards read as half-empty. Override only the axis you mean: `px-8` on the content plus `py-8` on the `Card` for the featured card, nothing at all for the grid cards.

### Ruled lists (Education & Certificates — the non-card alternative)
**The Ruled-List Rule.** Education and Certificates carry no `Card` at all: each entry is a `<li>` separated by `border-border` hairlines, sitting directly on the section's `bg-surface-wash` band. A `bg-card` fill on top of that wash turned every credential into a gray box — filler-looking, and the exact "identical card grid" tell §1 warns about — while hairlines give the same grouping with none of the weight. **Reach for this treatment before a card grid whenever entries are short, uniform and list-shaped; cards are for entries with their own internal composition (Projects).**

- **Certificates lead with the institution** (`text-xl font-semibold`) and carry the course title beneath in `text-sm text-muted-foreground`: for a credential, the issuer is what carries the weight, and the list exists to show *whose* name is on it. Only credentials with real institutional standing belong here — the list is deliberately short.
- **Education leads with the degree**, with the institution directly under it at full foreground weight (not muted). The qualification is the subject there; the institution is still promoted out of the muted tier.
- **The whole certificate row is the credential link** — a 44px-plus target rather than the old 16px icon revealed on hover — with `labels.certificates.credentialHint` as `sr-only` text so the accessible name states the destination. Hover paints a soft `bg-foreground/[0.04]` band that bleeds 12px past the rule ends (`-mx-3 px-3`), like a table-row highlight, and nudges the `ArrowUpRight`.
- Years stay outline `Badge`s on both lists, per the "when = outline" distinction above.

### Navigation
- **Style:** fixed top bar, `bg-background/80` with `backdrop-blur-md`, 1px bottom border, 64px height.
- **Typography:** brand wordmark at `text-lg font-semibold tracking-tight`; nav links at Label scale (`text-sm text-muted-foreground`), hovering to full foreground with a 2px upward nudge.
- **Structure (revised during a later layout pass):** a 3-column CSS grid (`grid-cols-[auto_1fr_auto]`: brand / nav links / icon cluster), not the earlier flex-plus-absolute-centering hack. The nav links center *within their own column*, so they're bounded by grid tracks and architecturally cannot overlap the brand or icon cluster — the previous absolute-positioned version centered on the whole bar, which silently collided with the icon cluster once persistent contact icons widened that side (computed collision risk below ~990px of available width, well inside the `md:` range it switched on at).
- **Breakpoint:** the desktop nav switches on at `lg:` (1024px), not `md:` (768px) — below `lg`, mobile treatment applies.
- **Group spacing (revised during the contact-menu pass):** the three grid columns are now separated by `gap-8 lg:gap-10 xl:gap-14`, and the link row breathes at `gap-7 xl:gap-9` (it had been `gap-6` with a `gap-1` icon cluster, which read as one undifferentiated run of brand/links/contact/theme). Collapsing the three persistent contact icons into a single trigger freed the room: measured demand at `lg` is ~720px against `container-narrow`'s 832px of content width, so the wider rhythm fits with slack instead of crowding.
- **Desktop nav items:** the desktop link row drops the `#contact` item (`desktopNavItems` in `Navbar.tsx`) because the ContactMenu on the right serves it and links on to the section from inside its panel — the same word twice in one bar was the alternative. The mobile sheet still lists every section, contact included.
- **States:** mobile/tablet (below `lg`) collapses to a hamburger-triggered accordion panel (`height`/`opacity` animate).
- **Theme toggle:** sun/moon icon swap with a 180° rotate transition, present in both desktop and mobile bars. A hairline `w-px` divider separates it from the contact trigger.
- **Persistent contact:** on desktop this is the `ContactMenu` trigger (below) rather than always-visible icon buttons. The collapsed mobile bar carries only theme + hamburger — the Email shortcut was removed from it, so every channel now lives in one place (the expanded menu's three-channel row, fed by `src/config/contact.ts`) instead of one channel being promoted into the bar.

### Signature Component: `ContactMenu` (desktop contact disclosure)
A single "Contato" trigger at the right of the bar that opens an anchored popover: three channel rows (E-mail with a copy-to-clipboard button, GitHub, LinkedIn — each showing a handle derived from the config URL), a hairline, and a link on to `#contact`.

- **Pattern:** a disclosure, not an ARIA menu — `aria-expanded` + `aria-controls` on the trigger, plain links inside, so Tab order works without arrow-key emulation. Dismissed by Escape (focus returns to the trigger), pointer-down outside, or tabbing past the last row.
- **Surface:** `bg-popover` + `border-border` + `shadow-xs`, 12px radius — the flat, single-edge treatment of §4, not a lifted overlay.
- **Motion (the signature moment):** a top-down `clip-path` wipe (`inset(0% 0% 100% 0%)` → `inset(0% 0% 0% 0%)`) over 380ms on `ease-out-expo`, with rows settling in behind it on a 50ms stagger; exit is 180ms and unstaggered. No layout property is animated. The chevron rotates 180°, and the copy button crossfades Copy → Check with a `role="status"` announcement.
- **Reduced motion:** handled by an explicit `useReducedMotion()` branch, not by the app-wide `<MotionConfig reducedMotion="user">` — that config only suppresses transform and layout animations, so a `clip-path` wipe keeps running under it (verified in-browser). Under `reduce` the panel is a plain opacity crossfade with no wipe, no travel and no stagger.
- **Focus:** the trigger is a raw `<button>`, not the shared `Button` primitive — see the Don't below.

### Contact section (channel hierarchy)
The section states one primary action and one fallback, in that order: the Ink `Button` (mailto) alone, then a labelled rule — a hairline, the word `labels.contact.divider` ("ou") at `text-xs`, a hairline, capped at `18rem` — then the secondary channels (WhatsApp, LinkedIn, X), read straight from `contactChannels` minus email. Email is deliberately absent from that row: it's the primary CTA immediately above, and repeating it made the same action appear twice under two different affordances. The rule's label is lowercase, not a tracked all-caps eyebrow, so it doesn't read as another section kicker (§3's Named Rule).

### Named Rule: Contact channels vs. work links
**GitHub is not a contact channel.** It's where the work lives, not a way to reach a person, so it appears in exactly one place: a compact bordered link sharing the Projects section's header row — heading block left, the link right-aligned to the heading's bottom edge, stacking under it below `sm`. It shows the icon, the derived `@handle` (`githubProfile` in `src/config/contact.ts`) and an `ArrowUpRight` that nudges on hover; `labels.projects.githubCta` rides along as `sr-only` text after the handle so the accessible name states the link's purpose while still containing the visible text (WCAG 2.5.3). Placing it beside the title rather than after the grid makes it a peer of the heading — "the selected work, and everything else" — instead of a step that only appears once you've scrolled past everything. It is absent from the navbar's ContactMenu, the mobile sheet and the Contact section. The contact channels are the four ways to reach a human — E-mail, WhatsApp, LinkedIn, X — in that priority order, defined once in `contactChannels` and consumed by all three surfaces. When adding a channel, ask which of the two lists it belongs to before adding it to both.

- **WhatsApp** is stored in config as digits only (country + area + number, no `+` or separators) because that's the shape `wa.me/<digits>` expects; `formatPhone` renders it as `+55 (79) 98885-3741` for display and falls back to `+<digits>` outside Brazil, since the config is meant to be forked. The href is `https://wa.me/<digits>`, WhatsApp's canonical click-to-chat endpoint (verified: it 302s to `api.whatsapp.com/send`).
- **Icons:** lucide ships neither WhatsApp nor X, so both live in `src/components/icons/BrandIcons.tsx` as official filled marks with a lucide-compatible signature. The X mark is drawn at ~88% inside its slot via a padded viewBox — as a dense solid glyph it otherwise reads heavier than the stroked lucide icons beside it. Any further brand mark should get the same optical check rather than being dropped in at full box size.

### Timeline (Experience — signature structural variant)
Replaces the stacked-card treatment with a vertical connector: a 1px `border`-colored line with small `primary`-filled (Ink) dot markers per entry, content offset to the right (`pl-10`). The connector is **alive**: a 5rem band of ink at 68% opacity glides down it on a continuous 7s linear loop (`.timeline-flow` in `index.css`). It's painted as a `background-image` over the existing `bg-border` colour and animated through `background-position`, so the rule itself never moves, no layout or transform is animated, and the repaint is confined to a 1px-wide strip. Under `prefers-reduced-motion: reduce` both the gradient and the animation are dropped and it falls back to the plain hairline — a CSS media query, not `MotionConfig`, since this one isn't a Framer animation. Entries stagger in with a horizontal fade (`x: -16 → 0`, `staggerChildren: 0.15`) rather than the shared vertical fade-up used elsewhere — deliberately different motion, not just different markup, so the section reads as structurally distinct rather than reskinned. This distinctiveness is now purely structural/motion-driven, not color-driven.

### Projects layout (masonry, not a grid)
The non-featured projects flow through `md:columns-2` with `break-inside-avoid` on each card, not a 2-column grid. A grid stretched every card in a row to the tallest one's height and left an empty slot whenever the count was odd — with five cards, a hole the size of a card. Columns let each card keep its natural height and pack against the one above it, so the block closes up at any count. Verified in-browser: five cards at five different heights (242–381px), every one sitting exactly 24px below its neighbour, no dead space. The trade is reading order — columns run top-to-bottom, then across — which is fine for a set of projects and would not be for a sequence. **Don't reintroduce a fixed grid here without first checking what an odd card count does to the last row.**

### Featured Card (Projects — signature structural variant)
The first project in config order renders as a wide, single-column-or-image-split card above the regular 2-col grid, marked with a small `Star`-icon pill (`bg-primary-soft`, `text-primary` — neutral Ink tones, not colored) reading "Projeto em destaque." Its action links are always visible (not hover-gated like the grid cards below), since it's the one project every visitor should see acted on. Supports an optional `image` (grid splits `md:grid-cols-2` when present) with a graceful text-only fallback when absent — current config ships no images yet, so this renders as a wider text card today.

### Signature Component: Hero Background (`LetterGlitch`)
A canvas-rendered grid of randomly cycling monospace glyphs with per-cell color glitching, plus an optional vignette. Tuned to pure grayscale glitch colors (dark: `#1a1a1a/#363636/#242424`; light: `#f5f5f5/#e2e2e3/#f2f2f2`) — a brief Terminal Cyan glint was added and then removed per the deliberate-neutral reversal, so this component no longer carries any accent hue. Only a center vignette shows in dark mode. PRODUCT.md still flags the underlying matrix-glitch mechanic as a terminal/developer-costume risk; that remains open regardless of palette.

### Signature Component: `AnimatedBackground`
Four blurred, slow-drifting radial-gradient blobs (grayscale `hsl(240±30 5-15% L / low-opacity)`) mounted behind the Experience and Skills sections. Decorative depth layer, `pointer-events-none`, purely ambient — no interaction. Its infinite drift now respects reduced motion via the app-wide `<MotionConfig reducedMotion="user">` wrapper (harden pass); its `hsl` literals remain intentionally undocumented as named DESIGN.md colors (advisory-only per the detector) since they're a decorative one-off, not a reusable token.

## 6. Do's and Don'ts

### Do:
- **Do** treat `index.css` as the single source of truth for all token values going forward; `App.css` now owns only the `@theme inline` Tailwind-mapping and base font/layer rules, not competing `:root`/`.dark` values (resolved during the colorize pass).
- **Do** keep the palette deliberately neutral (The Deliberate Neutral Rule, §2) — if an accent returns, treat it as a fresh `/impeccable colorize` decision, not a partial restore of the old cyan values.
- **Do** keep the flat, single-edge card treatment (border only, no ring — consolidated during the harden pass) and the flat elevation system (Elevation §4); don't reintroduce drop shadows or a second edge signal.
- **Do** keep the single 896px-max centered container (`container-narrow`) as the macro-layout rule — it matches the recruiter-scan job-to-be-done.
- **Do** verify `muted-foreground` hits ≥4.5:1 against its background in both themes before reusing it on any new body-text instance — the light-mode value was deepened during colorize, but always re-verify after further edits.
- **Do** use the `.link-focus` utility (`src/index.css`) on any new raw `<a>` tag — Button/Badge already carry their own focus-visible treatment, but plain anchors don't get one for free.
- **Do** wrap any new component in `<MotionConfig reducedMotion="user">`'s existing scope (already app-wide from `App.tsx`) rather than hand-rolling a new reduced-motion check — canvas/WebGL work (like `LetterGlitch`) is the one exception, since `MotionConfig` only covers Framer Motion, not raw `requestAnimationFrame` loops.

### Don't:
- **Don't** revert to giving every section the same eyebrow + heading + fade-up-on-scroll opener (§3 Named Rule) — resolved during the layout pass (only Projects/Contact keep the eyebrow; Experience is a timeline, Projects is asymmetric); don't let a future edit quietly re-homogenize it.
- **Don't** introduce a saturated accent hue without a fresh `/impeccable colorize` decision — the palette is deliberately monochrome now; adding color ad hoc undoes that decision quietly instead of making a new one on purpose.
- **Don't** treat `LetterGlitch`'s matrix-glitch mechanic as fully resolved just because its palette is neutral again — PRODUCT.md's underlying "terminal/developer costume" concern is about the mechanic itself, independent of color, and remains open for future reconsideration. It does pause off-screen and respect reduced motion, from the harden pass.
- **Don't** introduce gradient text, glassmorphism, or neon accents anywhere — PRODUCT.md's "loud / over-animated" anti-reference rules these out explicitly, and none exist in the current build; keep it that way.
- **Don't** stack a border AND a ring on the same card edge — resolved during the harden pass (base `Card` no longer carries `ring-foreground/10`; border is the one edge signal). Don't reintroduce the ring on top of consumer borders.
- **Don't** use `border-left`/`border-right` accent stripes on any new card, list item, or callout — use `--primary-soft` background washes or full borders instead, per §2's Cyan Soft token.
- **Don't** rely on the shared `Button` primitive's `focus-visible` ring: it resolves to a 0px ring in this project (measured on the theme toggle and on a `Button`-based contact trigger — `--tw-ring-shadow` is set correctly but never composes into `box-shadow`), so keyboard focus is invisible on every `Button` in the app. Until that's fixed at the primitive, any new bar-level control should carry the explicit `focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background` recipe that `.link-focus` uses and that the nav links visibly render. **This is an open defect in `ui/button.tsx`, not a resolved one.**
- **Don't** add a raw `<a>` without `.link-focus` (or an equivalent focus-visible ring) — every anchor in the shipped UI now has one; a new unstyled one would be a regression, not a fresh gap.
