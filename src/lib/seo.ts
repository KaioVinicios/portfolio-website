// ============================================================
// SEO derived from the portfolio config.
//
// This module is imported by vite.config.ts, never by the app: every tag
// below is written into index.html at build time (and in dev, through the
// same transform). That matters because this is a client-rendered SPA —
// social scrapers (LinkedIn, WhatsApp, X, Slack) and most AI crawlers do not
// execute JavaScript, so anything injected at runtime is invisible to them.
//
// Keep this file free of browser and React imports: Vite bundles it as part
// of loading its own config, in Node.
// ============================================================
import type { PortfolioConfig } from "../config/types";

/** Shape of Vite's HtmlTagDescriptor, redeclared so this file stays dependency-free. */
export interface HeadTag {
  tag: string;
  attrs?: Record<string, string>;
  children?: string;
  injectTo: "head";
}

/** Escapes text interpolated straight into markup (the <title>, notably). */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** The site origin without a trailing slash, so joins never double up. */
function origin(config: PortfolioConfig): string {
  return config.meta.siteUrl.replace(/\/+$/, "");
}

/** Makes a site-root path ("/og.png") absolute; leaves full URLs untouched. */
function absolute(pathOrUrl: string, config: PortfolioConfig): string {
  return /^https?:\/\//i.test(pathOrUrl)
    ? pathOrUrl
    : `${origin(config)}/${pathOrUrl.replace(/^\/+/, "")}`;
}

/** "pt-BR" -> "pt_BR": Open Graph wants an underscore, <html lang> a hyphen. */
function ogLocale(language: string): string {
  return language.replace("-", "_");
}

/** "https://x.com/KaioVinicios__" -> "@KaioVinicios__" for twitter:creator. */
function xHandle(url: string): string | undefined {
  try {
    const user = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
    return user ? `@${user}` : undefined;
  } catch {
    return undefined;
  }
}

/**
 * The <head> tags. Ordered the way a reader would scan them: identity first,
 * then crawler directives, then the social cards.
 */
export function buildHeadTags(config: PortfolioConfig): HeadTag[] {
  const { meta, person, links } = config;
  const canonical = `${origin(config)}/`;
  const image = meta.ogImage ? absolute(meta.ogImage, config) : undefined;
  const creator = xHandle(links.x);

  const meta_ = (attrs: Record<string, string>): HeadTag => ({ tag: "meta", attrs, injectTo: "head" });

  return [
    meta_({ name: "description", content: meta.description }),
    meta_({ name: "author", content: person.name }),
    { tag: "link", attrs: { rel: "canonical", href: canonical }, injectTo: "head" },

    // Defaults are index,follow — the value here exists for the preview
    // limits, which let Google show a full-size image and an untruncated
    // snippet instead of its conservative defaults.
    meta_({
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    }),

    meta_({ property: "og:type", content: "website" }),
    meta_({ property: "og:site_name", content: person.name }),
    meta_({ property: "og:title", content: meta.title }),
    meta_({ property: "og:description", content: meta.description }),
    meta_({ property: "og:url", content: canonical }),
    meta_({ property: "og:locale", content: ogLocale(meta.language) }),
    ...(image
      ? [
          meta_({ property: "og:image", content: image }),
          meta_({ property: "og:image:width", content: "1200" }),
          meta_({ property: "og:image:height", content: "630" }),
          meta_({ property: "og:image:alt", content: `${person.name} — ${person.role}` }),
        ]
      : []),

    // summary_large_image only pays off with an image; without one X falls
    // back to a blank card, so the plain summary is the honest choice.
    meta_({ name: "twitter:card", content: image ? "summary_large_image" : "summary" }),
    meta_({ name: "twitter:title", content: meta.title }),
    meta_({ name: "twitter:description", content: meta.description }),
    ...(image ? [meta_({ name: "twitter:image", content: image })] : []),
    ...(creator
      ? [meta_({ name: "twitter:creator", content: creator }), meta_({ name: "twitter:site", content: creator })]
      : []),

    {
      tag: "script",
      attrs: { type: "application/ld+json" },
      // JSON.stringify can emit "</script>", which would close this tag
      // early; escaping "<" as < keeps the payload identical to a parser
      // and inert to the HTML tokenizer.
      children: JSON.stringify(buildStructuredData(config), null, 2).replace(/</g, "\\u003c"),
      injectTo: "head",
    },
  ];
}

/**
 * One JSON-LD @graph rather than three loose blocks, so WebSite, ProfilePage
 * and Person can reference each other by @id and a crawler reads them as one
 * connected entity instead of three unrelated claims.
 */
export function buildStructuredData(config: PortfolioConfig): Record<string, unknown> {
  const { meta, person, links, techStack, education, certifications } = config;
  const site = origin(config);
  const canonical = `${site}/`;
  const personId = `${site}/#person`;
  const image = meta.ogImage ? absolute(meta.ogImage, config) : undefined;

  const schools = [...new Set(education.map((entry) => entry.institution))].map((name) => ({
    "@type": "EducationalOrganization",
    name,
  }));

  const credentials = certifications.map((certification) => ({
    "@type": "EducationalOccupationalCredential",
    name: certification.title,
    url: certification.credentialUrl,
    recognizedBy: { "@type": "Organization", name: certification.institution },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        inLanguage: meta.language,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site}/#webpage`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        inLanguage: meta.language,
        isPartOf: { "@id": `${site}/#website` },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: image } } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        jobTitle: person.role,
        description: person.tagline,
        url: canonical,
        email: `mailto:${links.email}`,
        // sameAs is how a search engine ties this page to the profiles it
        // already knows; every entry must be a profile this person controls.
        sameAs: [links.github, links.linkedin, links.x].filter(Boolean),
        ...(techStack.length ? { knowsAbout: techStack } : {}),
        ...(schools.length ? { alumniOf: schools } : {}),
        ...(credentials.length ? { hasCredential: credentials } : {}),
      },
    ],
  };
}

/**
 * A one-page site gets a one-URL sitemap. It earns its place anyway: it is
 * what Search Console submits against, and it carries the lastmod that tells
 * Google the page changed.
 */
export function buildSitemap(config: PortfolioConfig, lastmod = new Date()): string {
  const date = lastmod.toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin(config)}/</loc>
    <lastmod>${date}</lastmod>
  </url>
</urlset>
`;
}

/**
 * Everything is public, so the only job here is pointing crawlers — search
 * and AI alike — at the sitemap.
 */
export function buildRobotsTxt(config: PortfolioConfig): string {
  return `User-agent: *
Allow: /

Sitemap: ${origin(config)}/sitemap.xml
`;
}
