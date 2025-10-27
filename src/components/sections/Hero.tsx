import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { Container } from '@components/ui'

export const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Parallax effect for the photo
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  return (
    <section
      ref={ref}
      className="section-spacing min-h-screen flex items-center justify-center relative"
    >
      <Container>
        <div className="flex flex-col items-center justify-center py-20">
          {/* Boxed Photo Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-6xl"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-card/20 backdrop-blur-sm">
              {/* Photo with parallax */}
              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale
                }}
                className="relative aspect-[16/9] overflow-hidden"
              >
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  src="/assets/presentation_p01.jpg"
                  alt="M25 Business Center"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.95) contrast(1.05)'
                  }}
                />

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-brand/20 via-transparent to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-muted cursor-pointer hover:text-text transition-colors"
              onClick={() => {
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
