import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card, Badge } from '@components/ui'
import { Coffee, Dumbbell, UtensilsCrossed, Ruler, Users } from 'lucide-react'
import { amenities } from '@data/amenities'

const iconMap = {
  cafe: Coffee,
  gym: Dumbbell,
  restaurant: UtensilsCrossed,
}

export const Amenities = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="amenities" className="section-spacing bg-bg-soft" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Amenities</span>
          <h2 className="mb-6">
            <span className="gradient-text">Premium</span> Facilities
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Everything you need to work, connect, and recharge without leaving the building.
            Our world-class amenities are designed for your comfort and productivity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, index) => {
            const Icon = iconMap[amenity.id as keyof typeof iconMap]
            return (
              <motion.div key={amenity.id} variants={cardVariants}>
                <Card className="h-full group cursor-pointer relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-brand/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-brand" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-center mb-3">{amenity.title}</h3>
                  <p className="text-muted text-center mb-6">{amenity.description}</p>

                  {/* Specs */}
                  <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted">{amenity.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted">{amenity.capacity}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="glass p-8 text-center">
            <h3 className="text-xl font-bold mb-4">More Amenities Available</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge>Meeting Rooms</Badge>
              <Badge>High-Speed WiFi</Badge>
              <Badge>Printing Services</Badge>
              <Badge>24/7 Access</Badge>
              <Badge>Parking</Badge>
              <Badge>Reception Services</Badge>
              <Badge>Event Space</Badge>
              <Badge>Terrace Access</Badge>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
