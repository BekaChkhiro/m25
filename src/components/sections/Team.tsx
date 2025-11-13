import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Card } from '@components/ui'
import { Linkedin, User } from 'lucide-react'
import { teamMembers } from '@data/team'

export const Team = () => {
  const { t } = useTranslation()
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="team" className="section-spacing bg-bg-soft" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge text-xl mb-4">{t('team.badge')}</span>
          <h2 className="mb-6 text-white">
            {t('team.title')}
          </h2>
          <p className="text-xl text-muted mx-auto">
            {t('team.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants}>
              <Card className="h-full group hover:border-brand/50 transition-all duration-300">
                {/* Profile Image or Placeholder */}
                <div className="flex justify-center mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-brand/20 group-hover:border-brand/40 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand/20 to-accent/20 flex items-center justify-center border-4 border-brand/20 group-hover:border-brand/40 transition-all duration-300">
                      <User className="w-16 h-16 text-brand/50" />
                    </div>
                  )}
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-brand font-medium">
                    {member.roleKey ? t(member.roleKey) : member.role}
                  </p>
                </div>

                {/* Bio */}
                {(member.bio || member.bioKey) && (
                  <p className="text-sm text-muted text-center mb-4">
                    {member.bioKey ? t(member.bioKey) : member.bio}
                  </p>
                )}

                {/* Contact Links */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
                  {/* {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-brand/10 rounded-lg hover:bg-brand/20 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-brand" />
                    </a>
                  )} */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-brand/10 rounded-lg hover:bg-brand/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-brand" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
