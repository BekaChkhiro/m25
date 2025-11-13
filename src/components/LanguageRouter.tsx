import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface LanguageWrapperProps {
  children: React.ReactNode
}

const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    // Validate language
    const supportedLanguages = ['en', 'ka']
    if (lang && supportedLanguages.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang)
      }
    } else if (lang) {
      // Invalid language, redirect to English
      navigate('/en', { replace: true })
    }
  }, [lang, i18n, navigate])

  return <>{children}</>
}

interface LanguageRouterProps {
  children: React.ReactNode
}

export const LanguageRouter = ({ children }: LanguageRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /en */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Language-based routes */}
        <Route
          path="/:lang"
          element={
            <LanguageWrapper>
              {children}
            </LanguageWrapper>
          }
        />

        {/* Catch all - redirect to /en */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
