import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card, Button } from '@components/ui'
import { MapPin, Mail, Phone, Building2, HeadphonesIcon } from 'lucide-react'

const benefits = [
  {
    icon: MapPin,
    text: 'Prestigious business address',
  },
  {
    icon: Mail,
    text: 'Secured management of your correspondence',
  },
  {
    icon: Phone,
    text: 'Professional call handling under your company name',
  },
  {
    icon: Building2,
    text: 'Preferential rates for meeting rooms & co-working spaces',
  },
  {
    icon: HeadphonesIcon,
    text: 'Hands-on administrative support for day to day business needs',
  },
]

export const VirtualOffice = () => {
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
          <span className="badge mb-4">Virtual Office</span>
          <h2 className="mb-6">
            <span className="gradient-text">A smart solution</span> for professional presence
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Register your business address in Tbilisi without the cost of a physical office.
            Ideal for remote executives, international companies & growing businesses.
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
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold gradient-text">$49</span>
              <span className="text-muted">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                    <benefit.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm leading-relaxed pt-0.5">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full" size="lg">Get Started</Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted">
            All packages include a prestigious Tbilisi business address and professional support
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
