import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Container, Card } from '@components/ui'
import { Building2, Shield, Clock, Car } from 'lucide-react'
import { stats } from '@data/stats'

const iconMap = {
  gla: Building2,
  parking: Car,
  access: Clock,
  offices: Building2,
}

const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [completed, setCompleted] = useState(false)
  const targetValue = parseInt(value)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000 // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Enhanced easing with overshoot for bounce effect
      const easeOutBack = (x: number): number => {
        const c1 = 1.70158
        const c3 = c1 + 1
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
      }

      const currentCount = Math.floor(targetValue * easeOutBack(progress))
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetValue) // Ensure final value is exact
        setCompleted(true)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, targetValue])

  return (
    <motion.span
      ref={ref}
      animate={completed ? {
        scale: [1, 1.1, 1],
      } : {}}
      transition={{
        duration: 0.4,
        ease: 'easeOut'
      }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  )
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
          <span className="badge mb-4">About M25</span>
          <h2 className="mb-6">
            Your Business <span className="gradient-text">Headquarters</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            M25 Business Center offers premium office solutions in Tbilisi's prime location.
            From private offices to flexible co-working spaces, we provide everything your
            business needs to thrive.
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
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted">{stat.label}</p>
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
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Location</h3>
                <p className="text-sm text-muted">
                  Located in Mtatsminda, one of Tbilisi's most prestigious business districts
                  with excellent accessibility.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Security</h3>
                <p className="text-sm text-muted">
                  Round-the-clock security and access control ensuring a safe working
                  environment for all tenants.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Terms</h3>
                <p className="text-sm text-muted">
                  Customizable lease terms from short-term to long-term arrangements to
                  suit your business needs.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
