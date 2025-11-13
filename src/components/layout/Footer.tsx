import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/ui'
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import { navigationItems } from '@data/navigation'

export const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id)
  }

  return (
    <footer className="bg-bg-soft border-t border-white/10">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img
              src="/assets/m25-logo.png"
              alt="M25 Business Center"
              className="h-10 w-auto mb-4"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className="flex items-center justify-start gap-2 w-full text-sm text-muted hover:text-brand transition-colors py-1"
                      >
                        <span>{item.translationKey ? t(item.translationKey) : item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openSubmenu === item.id && (
                        <ul className="ml-3 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <a
                                href={child.href}
                                className="block text-sm text-muted hover:text-brand transition-colors py-1"
                              >
                                {child.translationKey ? t(child.translationKey) : child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-sm text-muted hover:text-brand transition-colors py-1"
                    >
                      {item.translationKey ? t(item.translationKey) : item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.badge')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="tel:+995577311043" className="text-sm text-muted hover:text-brand">
                  +995 577 311 043
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="tel:+995514012223" className="text-sm text-muted hover:text-brand">
                  +995 514 012 223
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@m25.ge" className="text-sm text-muted hover:text-brand">
                  info@m25.ge
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted">Mtatsminda N 25, Tbilisi</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.info.hours')}</h4>
            <div className="text-sm">
              <span className="text-accent text-xl font-semibold">24/7</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {currentYear} M25 Business Center. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted">
            Created By{' '}
            <a
              href="https://infinity.ge/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              Infinity Solutions
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
