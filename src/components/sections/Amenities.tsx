import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Card } from '@components/ui'
import { Coffee, Dumbbell, UtensilsCrossed, Sparkles, Flower } from 'lucide-react'
import { amenities } from '@data/amenities'

const iconMap = {
  cafe: Coffee,
  gym: Dumbbell,
  spa: Sparkles,
  yoga: Flower,
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
          <span className="badge mb-4">Facilities</span>
          <h2 className="mb-6 text-white">
            A Balance of Business and Well-Being
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Enjoy the comfort of high-caliber amenities to recharge without leaving the building.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {amenities.map((amenity) => {
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
                  <p className="text-muted text-center">{amenity.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
