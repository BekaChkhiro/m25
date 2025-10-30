import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card, Button, GlowingBadge } from '@components/ui'
import { Users, Wifi, Coffee, Calendar, Dumbbell } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Flexible Memberships',
    description: 'Choose from daily, weekly, or monthly plans that fit your schedule and budget.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Lightning-fast fiber connection ensuring seamless video calls and file transfers.',
  },
  {
    icon: Coffee,
    title: 'Complimentary Refreshments',
    description: 'Enjoy unlimited coffee, tea, and snacks throughout your workday.',
  },
  {
    icon: Calendar,
    title: 'Meeting Room Access',
    description: 'Book meeting rooms and private spaces as needed for client presentations.',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center Access',
    description: 'Full access to our premium gym with modern equipment and facilities.',
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
          <span className="badge mb-4">Co-Working Space</span>
          <h2 className="mb-6">
            Work <span className="gradient-text">Collaboratively</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Join a vibrant community of professionals in our modern co-working space.
            Perfect for freelancers, startups, and remote teams seeking flexibility.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex flex-col items-center"
        >
          {/* Glowing availability badge - Centered above card */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            className="mb-6 md:mb-8"
          >
            <div className="relative">
              {/* Glow backdrop for emphasis */}
              <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full scale-150" />
              <GlowingBadge count={10} className="relative" />
            </div>
          </motion.div>

          <Card className="glass text-center p-8 md:p-12 relative overflow-visible w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Starting from <span className="gradient-text">$49/month</span>
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Get access to 60+ workstations, meeting rooms, and premium amenities.
              No long-term contracts required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="secondary" size="lg">View Pricing</Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
