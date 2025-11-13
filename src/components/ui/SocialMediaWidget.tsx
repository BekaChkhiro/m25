import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Facebook, Instagram, Linkedin, Mail, X, MessageCircle } from 'lucide-react'

interface SocialLink {
  name: string
  icon: typeof Facebook
  href?: string
  color: string
  whatsappNumbers?: { label: string; number: string }[]
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/m25businesscenter',
    color: '#1877F2'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/m25businesscenter',
    color: '#E4405F'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/m25',
    color: '#0A66C2'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:info@m25.ge',
    color: '#4AA3FF'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    color: '#25D366',
    whatsappNumbers: [
      { label: 'Georgia', number: '995577311043' },
      { label: 'UK', number: '447767701854' }
    ]
  }
]

export const SocialMediaWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Social Links */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-2 items-end"
          >
            {socialLinks.map((link, index) => {
              const isWhatsApp = link.name === 'WhatsApp'

              if (isWhatsApp) {
                return (
                  <div key={link.name} className="flex flex-row items-center justify-end gap-2">
                    {/* WhatsApp Number Selection */}
                    <AnimatePresence>
                      {showWhatsAppMenu && (
                        <motion.div
                          initial={{ opacity: 0, x: -20, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -20, scale: 0.8 }}
                          className="flex flex-row gap-2"
                        >
                          {link.whatsappNumbers?.map((wa, waIndex) => (
                            <motion.a
                              key={wa.number}
                              href={`https://wa.me/${wa.number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ delay: waIndex * 0.05 }}
                              whileHover={{
                                scale: 1.05,
                                boxShadow: '0 8px 30px #25D36640'
                              }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 rounded-full flex items-center gap-2 bg-card border border-white/10 shadow-lg hover:border-[#25D366]/50 transition-all duration-200 whitespace-nowrap"
                              style={{
                                background: 'linear-gradient(135deg, #25D36615, transparent)'
                              }}
                            >
                              <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
                              <span className="text-sm font-medium">{wa.label}</span>
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* WhatsApp Icon Button */}
                    <motion.button
                      onClick={() => setShowWhatsAppMenu(!showWhatsAppMenu)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `0 8px 30px ${link.color}40`
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-card border border-white/10 shadow-lg hover:border-brand/50 transition-all duration-200 flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${link.color}15, transparent)`
                      }}
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5" style={{ color: link.color }} />
                    </motion.button>
                  </div>
                )
              }

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 8px 30px ${link.color}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-card border border-white/10 shadow-lg hover:border-brand/50 transition-all duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${link.color}15, transparent)`
                  }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" style={{ color: link.color }} />
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => {
          setIsExpanded(!isExpanded)
          if (isExpanded) {
            setShowWhatsAppMenu(false)
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isExpanded ? 180 : 0,
          backgroundColor: isExpanded ? 'rgba(74, 163, 255, 0.9)' : 'rgba(74, 163, 255, 0.1)'
        }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-brand/10 border border-brand/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        aria-label={isExpanded ? 'Close social menu' : 'Open social menu'}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Share2 className="w-6 h-6 text-brand" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulsing ring animation when closed */}
      {!isExpanded && (
        <motion.div
          className="absolute w-14 h-14 rounded-full border-2 border-brand/30 pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}
    </div>
  )
}
