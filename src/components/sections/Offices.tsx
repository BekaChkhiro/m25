import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card, Button, Badge, TiltCard } from '@components/ui'
import { Check, Building2, Users, Building } from 'lucide-react'
import { officeSizes } from '@data/offices'

const iconMap = {
  Building2,
  Users,
  Building
}

export const Offices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number] },
    },
  }

  return (
    <section id="offices" className="section-spacing" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Office Spaces</span>
          <h2 className="mb-6">
            <span className="gradient-text">Offices for Rent</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Choose from a variety of office sizes designed to accommodate teams of all scales.
            Each space is fully equipped and ready to move in.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {officeSizes.map((office, index) => (
            <motion.div key={office.id} variants={cardVariants}>
              <TiltCard tiltStrength={index === 1 ? 20 : 15} enableGlow>
                <Card className="h-full flex flex-col relative overflow-hidden group">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/20 to-accent/20 rounded-full blur-3xl -z-10" />

                  <div className="mb-4">
                    {index === 1 && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          delay: 0.3
                        }}
                      >
                        <Badge variant="brand" className="mb-3">
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}

                    {/* Icon Display */}
                    {office.icon && iconMap[office.icon as keyof typeof iconMap] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          delay: 0.2,
                          duration: 0.8
                        }}
                        className="mb-4 w-fit p-4 bg-gradient-to-br from-brand/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-brand/20"
                      >
                        {(() => {
                          const IconComponent = iconMap[office.icon as keyof typeof iconMap]
                          return <IconComponent className="w-8 h-8 text-brand" />
                        })()}
                      </motion.div>
                    )}

                    <h3 className="text-2xl font-bold mb-2 capitalize">{office.id}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold gradient-text">{office.size}</span>
                    </div>
                  </div>

                  <p className="text-muted mb-6 flex-grow">{office.description}</p>

                  <ul className="space-y-3 mb-8">
                    {office.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 0.3 + featureIndex * 0.1,
                          duration: 0.4
                        }}
                        className="flex items-start gap-2"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{
                            delay: 0.3 + featureIndex * 0.1,
                            type: 'spring',
                            stiffness: 200
                          }}
                          className="mt-1 shrink-0"
                        >
                          <Check className="w-5 h-5 text-accent" />
                        </motion.div>
                        <span className="text-sm text-muted">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant={index === 1 ? 'primary' : 'secondary'}
                    className="w-full mt-auto"
                  >
                    View Details
                  </Button>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-6">
            All offices include high-speed internet, climate control, and access to shared amenities
          </p>
          <Button size="lg">Schedule a Tour</Button>
        </motion.div>
      </Container>
    </section>
  )
}
