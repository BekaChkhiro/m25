import { Container } from '@components/ui'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Offices', href: '#offices' },
  { label: 'Co-Working', href: '#coworking' },
  { label: 'Virtual Office', href: '#virtual' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-soft border-t border-white/10">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">M25</h3>
            <p className="text-sm text-muted mb-6">
              Premium business center in the heart of Tbilisi, offering flexible office solutions
              for modern companies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card rounded-lg hover:bg-brand/10 hover:text-brand transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="tel:+995514012223" className="text-sm text-muted hover:text-brand">
                  +995 514 01 22 23
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
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-text">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-text">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-text">Closed</span>
              </li>
              <li className="mt-4 pt-4 border-t border-white/10">
                <span className="text-accent">24/7 Access for Tenants</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {currentYear} M25 Business Center. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted hover:text-brand transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted hover:text-brand transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
