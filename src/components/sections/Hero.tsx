import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ChevronDown, Circle } from 'lucide-react'
import { useRef } from 'react'

export const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Parallax effect for the background
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale
        }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/hero-background.jpg"
            alt="M25 Business Center"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <div className="relative w-full max-w-[1180px] h-full min-h-screen flex flex-col justify-center gap-16 md:gap-24 px-4 md:px-8">
          {/* Top Left - Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <Circle className="w-5 h-5 md:w-6 md:h-6 fill-white text-white flex-shrink-0" />
            <h1 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
              WHERE AMBITION FINDS ITS SPACE...
            </h1>
          </motion.div>

          {/* Bottom Left - Subheading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 md:gap-6"
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">M25</div>
            <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white/90 leading-tight max-w-xs md:max-w-sm">
              MULTIFUNCTIONAL BUSINESS CENTER
            </div>
          </motion.div>

          {/* Scroll indicator - centered at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors"
              onClick={() => {
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
