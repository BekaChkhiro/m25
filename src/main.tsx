import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageRouter } from './components/LanguageRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageRouter>
      <App />
    </LanguageRouter>
  </StrictMode>,
)
