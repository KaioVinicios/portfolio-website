# Product

## Register

brand

## Users

Primary: **tech recruiters and hiring managers / engineering leads** evaluating Kaio Vinícios for a full-stack role. They arrive from LinkedIn or a job application, often on mobile, and spend well under a minute on the first pass. They are scanning — not reading — for a fast, credible answer to three questions: *what does he build, what's his stack, and is he any good?* Content is in Brazilian Portuguese (pt-BR), so the primary audience is the Brazilian tech market.

Secondary: freelance/agency clients and dev peers who may follow project and GitHub links deeper.

The job to be done: let a recruiter form a confident "worth a call" judgment in one scroll, and give them the exact links (GitHub, LinkedIn, live projects, email) to act on it.

## Product Purpose

A single-page personal portfolio that presents Kaio's experience, selected projects, education, certifications, and skills, and routes interested visitors to contact. Success is a recruiter reaching out or opening a project/GitHub link — the site converts a scan into a contact.

This repo doubles as a **fork-and-configure template**: all content lives in `src/config/portfolio.ts`, so others can make it theirs without touching component code. That constraint is real, but it does not lower the bar — the shipped default must be a strong, opinionated design in its own right, not a neutral skeleton. Design decisions serve Kaio's version first; the config seam is what makes it reusable.

## Brand Personality

**Precise · engineered · quietly confident.** Three words: *meticulous, calm, credible.*

The voice is that of a senior engineer who lets the work speak — no hype, no buzzwords, no shouting. Tone is direct and understated. The design itself is the argument: if the portfolio is crafted, fast, and detail-perfect, it *is* the evidence of the engineering ability it claims. Restraint here is not timidity — it is a deliberate signal of seniority. Every rough edge (misalignment, contrast miss, janky motion) actively undercuts the pitch, so polish is non-negotiable.

## Anti-references

- **The generic AI/template developer portfolio.** The single most important thing to escape. Tells to avoid: monochrome shadcn-default (zinc) palette used as-is, a tiny uppercase tracked eyebrow above every section, uniform fade-up-on-scroll on every block, identical icon-card grids. If a recruiter could think "AI made that," the credibility argument is lost.
- **Terminal/matrix "developer" costume.** Green-on-black, matrix rain, monospace-everything as lazy shorthand for "technical." The current `LetterGlitch` background leans this way and should be reconsidered, not treated as fixed identity.
- **Loud / over-animated.** Gradient text, glassmorphism, neon, motion-for-motion's-sake. Style over substance reads as junior and contradicts "precise & engineered."

## Design Principles

1. **The site is the proof.** Craft, speed, and pixel-level correctness are the actual portfolio piece. Practice what the copy preaches.
2. **Recruiter-first scannability.** Optimize the first fold and the vertical scan: who he is, what he builds, the stack, and how to reach him should land in seconds, mobile included.
3. **Distinctiveness over safety.** A precise design still needs one committed, memorable decision (color, type, or a single motion moment) so it does not dissolve into the template sea. Restraint ≠ default.
4. **Restraint as a seniority signal.** Say less, more exactly. Remove before adding. Confidence is shown by what's left out.
5. **Strong default, clean seam.** Ship an opinionated, on-brand default while keeping content config-driven so the template stays forkable. The abstraction must never water down the design.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**: body text ≥4.5:1 contrast (large text ≥3:1), visible keyboard focus, semantic landmarks, and meaningful labels/alt text. Support both light and dark themes at AA in each. Honor `prefers-reduced-motion` with a genuine reduced alternative (crossfade or instant) for every animation — especially the animated background and scroll reveals. (Default assumption; refine if specific user needs surface.)
