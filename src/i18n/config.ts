import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './locales/en.json'
import kaTranslations from './locales/ka.json'

// Custom path language detector
const pathLanguageDetector = {
  name: 'path',
  lookup() {
    const path = window.location.pathname
    const langMatch = path.match(/^\/(en|ka)/)
    return langMatch ? langMatch[1] : undefined
  }
}

const languageDetector = new LanguageDetector()
languageDetector.addDetector(pathLanguageDetector)

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ka: {
        translation: kaTranslations
      }
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
