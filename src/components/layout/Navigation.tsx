import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, ChevronDown } from 'lucide-react'
import { Container, PDFPreviewModal, LanguageSwitcher } from '@components/ui'
import { navigationItems } from '@data/navigation'
import { useScrollSpy } from '@hooks/useScrollSpy'
import { useScrollProgress } from '@hooks/useScrollProgress'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const sectionIds = navigationItems.flatMap(item =>
    item.children ? item.children.map(child => child.id) : item.id
  )
  const activeSection = useScrollSpy(sectionIds, 150)
  const scrollProgress = useScrollProgress({ smooth: true })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-accent to-brand origin-left z-[60]"
        style={{ scaleX: scrollProgress }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <a href="#" className="flex items-center">
                <img
                  src="/assets/m25-logo.png"
                  alt="M25 Business Center"
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation & Language Switcher - Centered */}
            <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.id)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-brand flex items-center gap-1 ${
                          activeSection === item.id ? 'text-brand' : 'text-text'
                        }`}
                      >
                        {t(item.translationKey || item.label)}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 glass rounded-lg shadow-xl overflow-hidden z-50"
                          >
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => {
                                  handleNavClick(child.href)
                                  setOpenDropdown(null)
                                }}
                                className="w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-brand/10 hover:text-brand border-b border-white/5 last:border-b-0"
                              >
                                {t(child.translationKey || child.label)}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-brand"
                    >
                      <span className={activeSection === item.id ? 'text-brand' : 'text-text'}>
                        {t(item.translationKey || item.label)}
                      </span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  )}
                </div>
              ))}

              {/* Language Switcher in Center with Menu */}
              <div className="pl-2 border-l border-white/20">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Brochure Button - Right Side */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setIsPDFModalOpen(true)}
                className="btn btn-primary btn-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('nav.brochure')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text hover:text-brand transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-bg/95 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card border-l border-white/10 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-text hover:text-brand transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation items */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.children ? (
                          <div>
                            <button
                              onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                              className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all flex items-center justify-between ${
                                activeSection === item.id
                                  ? 'bg-brand/10 text-brand border-l-2 border-brand'
                                  : 'text-text hover:bg-white/5'
                              }`}
                            >
                              {t(item.translationKey || item.label)}
                              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {openDropdown === item.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 space-y-1"
                                >
                                  {item.children.map((child) => (
                                    <button
                                      key={child.id}
                                      onClick={() => handleNavClick(child.href)}
                                      className="w-full text-left px-4 py-2 rounded-lg text-base font-medium text-text/80 hover:text-brand hover:bg-white/5 transition-all"
                                    >
                                      {t(child.translationKey || child.label)}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleNavClick(item.href)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                              activeSection === item.id
                                ? 'bg-brand/10 text-brand border-l-2 border-brand'
                                : 'text-text hover:bg-white/5'
                            }`}
                          >
                            {t(item.translationKey || item.label)}
                          </button>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Language Switcher & Brochure button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 space-y-3"
                >
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  <button
                    onClick={() => {
                      setIsPDFModalOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {t('nav.viewBrochure')}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PDF Preview Modal */}
      <PDFPreviewModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="/assets/M25-Exclusive-Business-Center.pdf"
        fileName="M25 Business Center Brochure.pdf"
      />
    </>
  )
}
