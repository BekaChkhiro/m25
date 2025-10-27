import { useScroll, useSpring, type MotionValue } from 'framer-motion'

interface ScrollProgressConfig {
  smooth?: boolean
  stiffness?: number
  damping?: number
}

/**
 * Custom hook for tracking scroll progress with optional smoothing
 *
 * @param config - Configuration options
 * @returns MotionValue representing scroll progress (0 to 1)
 *
 * @example
 * const scrollProgress = useScrollProgress({ smooth: true })
 * <motion.div style={{ scaleX: scrollProgress }} />
 */
export function useScrollProgress(
  config: ScrollProgressConfig = {}
): MotionValue<number> {
  const { smooth = true, stiffness = 100, damping = 30 } = config
  const { scrollYProgress } = useScroll()

  return smooth
    ? useSpring(scrollYProgress, { stiffness, damping })
    : scrollYProgress
}
