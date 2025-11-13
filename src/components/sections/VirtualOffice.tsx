import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Card, Button } from '@components/ui'
import { MapPin, Mail, Phone, Building2, HeadphonesIcon } from 'lucide-react'

const benefits = [
  {
    icon: MapPin,
    text: 'Prestigious business address',
    translationKey: 'virtual.benefits.address'
  },
  {
    icon: Mail,
    text: 'Secured management of your correspondence',
    translationKey: 'virtual.benefits.correspondence'
  },
  {
    icon: Phone,
    text: 'Professional call handling under your company name',
    translationKey: 'virtual.benefits.callHandling'
  },
  {
    icon: Building2,
    text: 'Preferential rates for meeting rooms & co-working spaces',
    translationKey: 'virtual.benefits.preferentialRates'
  },
  {
    icon: HeadphonesIcon,
    text: 'Hands-on administrative support for day to day business needs',
    translationKey: 'virtual.benefits.adminSupport'
  },
]

export const VirtualOffice = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="virtual" className="section-spacing" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge text-xl mb-4">{t('virtual.badge')}</span>
          <h2 className="mb-6 text-white">
            {t('virtual.title')}
          </h2>
          <p className="text-xl text-muted mx-auto">
            {t('virtual.description')}
          </p>
        </motion.div>

        {/* Premium Package - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold mb-2">{t('virtual.title')}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold gradient-text">{t('virtual.price')}</span>
              <span className="text-muted">{t('virtual.perMonth')}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                    <benefit.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm leading-relaxed pt-0.5">
                    {benefit.translationKey ? t(benefit.translationKey) : benefit.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              size="lg"
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  const offset = 80
                  const elementPosition = contactSection.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              {t('common.getStarted')}
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted">
            {t('virtual.features.address')}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
