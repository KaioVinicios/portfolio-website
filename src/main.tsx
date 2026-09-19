// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initClarity } from './lib/clarity'

// The document title, meta tags and JSON-LD are written into index.html at
// build time by the `seo` plugin in vite.config.ts — see src/lib/seo.ts.
initClarity()

createRoot(document.getElementById('root')!).render(
  <App />
)
