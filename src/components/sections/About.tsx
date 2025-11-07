import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card } from '@components/ui'
import { Building2, Shield, Car, Phone, Briefcase, UtensilsCrossed, Heart } from 'lucide-react'
import { stats } from '@data/stats'

const iconMap = {
  gla: Building2,
  parking: Car,
  access: Shield,
  offices: Phone,
}

export const About = () => {
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
    <section id="about" className="section-spacing bg-bg-soft" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge text-xl mb-4">About M25</span>
          <h2 className="mb-6 text-white">
            Your Business Headquarters
          </h2>
          <p className="text-2xl text-muted mx-auto">
          M25 is Tbilisi's exclusive business address with refined offices, wellness & gourmet dining. Our mission is to create a new business culture where excellence and well-being come together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.id as keyof typeof iconMap] || Shield
            return (
              <motion.div key={stat.id} variants={itemVariants}>
                <Card className="text-center">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1 + index * 0.1
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                      className="p-3 bg-brand/10 rounded-xl"
                    >
                      <Icon className="w-8 h-8 text-brand" />
                    </motion.div>
                  </div>
                  <div className="text-lg font-bold gradient-text">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WORKING SPACES</h3>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                <UtensilsCrossed className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">DINING SPACES</h3>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WELLNESS SPACES</h3>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
