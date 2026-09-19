import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { portfolioConfig } from './src/config/portfolio'
import { buildHeadTags, buildRobotsTxt, buildSitemap, escapeHtml } from './src/lib/seo'

/**
 * Writes the SEO surface into the build instead of into the app.
 *
 * The site is a client-rendered SPA, so anything a component sets at runtime
 * is invisible to social scrapers and to crawlers that don't run JavaScript.
 * Deriving the tags here — from the same src/config/portfolio.ts that feeds
 * the UI — keeps one source of truth and still ships static HTML.
 */
function seo(): Plugin {
  const config = portfolioConfig

  return {
    name: 'portfolio-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return {
          html: html
            .replace(/<html([^>]*)\slang="[^"]*"/, `<html$1 lang="${config.meta.language}"`)
            .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(config.meta.title)}</title>`),
          tags: buildHeadTags(config),
        }
      },
    },

    // robots.txt and sitemap.xml can't live in public/ — both need the
    // canonical origin, which only the config knows.
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: buildRobotsTxt(config) })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap(config) })
    },

    // Same two files in `npm run dev`, so what you test locally is what ships.
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const body =
          req.url === '/robots.txt'
            ? { type: 'text/plain', text: buildRobotsTxt(config) }
            : req.url === '/sitemap.xml'
              ? { type: 'application/xml', text: buildSitemap(config) }
              : undefined
        if (!body) return next()
        res.setHeader('Content-Type', `${body.type}; charset=utf-8`)
        res.end(body.text)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
