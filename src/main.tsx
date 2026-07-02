// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initClarity } from './lib/clarity'
import { portfolioConfig } from './config/portfolio'

document.title = portfolioConfig.meta.title
initClarity()

createRoot(document.getElementById('root')!).render(
  <App />
)
