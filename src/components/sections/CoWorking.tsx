import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card } from '@components/ui'
import { Users, Wifi, Coffee, Calendar, Dumbbell, Phone } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Flexible Memberships',
    description: 'Select daily, weekly, or monthly plans to suit your schedule.',
  },
  {
    icon: Coffee,
    title: 'Complimentary Refreshments',
    description: 'Enjoy unlimited coffee and tea throughout the day.',
  },
  {
    icon: Phone,
    title: 'Phone Booths',
    description: 'Step into soundproof spaces for focused calls.',
  },
  {
    icon: Calendar,
    title: 'Meeting Room',
    description: 'Book private space for meetings or brainstorming.',
  },
  {
    icon: Dumbbell,
    title: 'Wellness Center',
    description: 'Make the most of our premium gym and sauna with modern equipment.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Access reliable fibreoptic connection for smooth online work.',
  },
]

export const CoWorking = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="coworking" className="section-spacing bg-bg-soft" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge text-xl mb-4">CO-WORKING</span>
          <h2 className="mb-6 text-white">
            Built For Collaboration
          </h2>
          <p className="text-xl text-muted mx-auto">
            Join a community of professionals in a modern co-working space.
            <br />
            Ideal for IT specialists, designers, developers, freelancers, and entrepreneurs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand/10 rounded-xl shrink-0">
                    <feature.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
