import { useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, type RefObject } from 'react'

interface ParallaxConfig {
  speed?: number
  direction?: 'vertical' | 'horizontal'
  clamp?: boolean
}

/**
 * Custom hook for creating parallax scroll effects
 *
 * @param config - Configuration options
 * @returns [ref, motionValue] - Ref to attach to element and motion value for animation
 *
 * @example
 * const [ref, y] = useParallax({ speed: 0.5 })
 * <motion.div ref={ref} style={{ y }}>Content</motion.div>
 */
export function useParallax<T extends HTMLElement>(
  config: ParallaxConfig = {}
): [RefObject<T>, MotionValue<number>] {
  const { speed = 0.5, direction = 'vertical', clamp = true } = config
  const ref = useRef<T>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const range = 200 * speed
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    clamp ? [0, range] : [-range, range]
  )

  return [ref, transform]
}
