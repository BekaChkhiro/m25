import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card, Button, Badge } from '@components/ui'
import { MapPin, Mail, Phone, FileText, Check } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Prestigious Business Address',
    description: 'Use our Mtatsminda address for your business registration and correspondence.',
  },
  {
    icon: Mail,
    title: 'Mail Handling',
    description: 'Receive, scan, and forward your mail securely with our professional team.',
  },
  {
    icon: Phone,
    title: 'Phone Answering Service',
    description: 'Dedicated phone line with professional call answering in your company name.',
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    description: 'Assistance with business registration and compliance documentation.',
  },
]

const benefits = [
  'Professional business address',
  'Mail and package receiving',
  'Phone answering service',
  'Meeting room credits',
  'Access to co-working space',
  'Administrative support',
]

export const VirtualOffice = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

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
            <span className="gradient-text">Professional Presence</span> Anywhere
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Establish your business in Tbilisi without the overhead of a physical office.
            Perfect for remote teams and international companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full">
                  <div className="p-3 bg-accent/10 rounded-xl w-fit mb-3">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                  <p className="text-xs text-muted">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass p-8">
              <Badge variant="brand" className="mb-4">Most Popular</Badge>
              <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold gradient-text">$99</span>
                <span className="text-muted">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg">Get Started</Button>
            </Card>
          </motion.div>
        </div>

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
