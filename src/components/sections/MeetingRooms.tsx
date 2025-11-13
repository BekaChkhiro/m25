import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Card, Button, TiltCard } from '@components/ui'
import { Users, Briefcase } from 'lucide-react'
import { conferenceRooms } from '@data/conferenceRooms'

const iconMap = {
  Users,
  Briefcase,
}

export const MeetingRooms = () => {
  const { t } = useTranslation()
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
    <section id="meeting-rooms" className="section-spacing" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge text-xl mb-4">{t('meetingRooms.badge')}</span>
          <h2 className="mb-6 text-white">
            {t('meetingRooms.title')}
          </h2>
          <p className="text-xl text-muted mx-auto">
            {t('meetingRooms.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {conferenceRooms.map((room, index) => (
            <motion.div key={room.id} variants={cardVariants}>
              <TiltCard tiltStrength={15} enableGlow>
                <Card className="h-full flex flex-col relative overflow-hidden group">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/20 to-accent/20 rounded-full blur-3xl -z-10" />

                  <div className="mb-4">
                    {/* Icon Display */}
                    {room.icon && iconMap[room.icon as keyof typeof iconMap] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          delay: 0.2 + index * 0.1,
                          duration: 0.8
                        }}
                        className="mb-4 w-fit p-4 bg-gradient-to-br from-brand/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-brand/20"
                      >
                        {(() => {
                          const IconComponent = iconMap[room.icon as keyof typeof iconMap]
                          return <IconComponent className="w-8 h-8 text-brand" />
                        })()}
                      </motion.div>
                    )}

                    <h3 className="text-xl font-bold mb-2">
                      {room.translationKey ? t(`${room.translationKey}.name`) : room.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold gradient-text">{room.seats}</span>
                      <span className="text-muted">{t('meetingRooms.people')}</span>
                    </div>
                  </div>

                  <p className="text-muted mb-6 flex-grow text-sm">
                    {room.translationKey ? t(`${room.translationKey}.description`) : room.description}
                  </p>

                  <Button
                    variant="secondary"
                    className="w-full mt-auto"
                  >
                    {t('meetingRooms.bookRoom')}
                  </Button>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
