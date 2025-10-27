import { useInView } from 'framer-motion'
import { useRef } from 'react'

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

interface ScrollRevealConfig {
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  margin?: string
}

interface ScrollRevealAnimation {
  ref: React.RefObject<HTMLElement | null>
  initial: Record<string, any>
  animate: Record<string, any>
  transition: Record<string, any>
}

/**
 * Custom hook for scroll-triggered reveal animations
 *
 * @param config - Configuration options
 * @returns Animation props to spread on motion component
 *
 * @example
 * const animation = useScrollReveal({ direction: 'up', delay: 0.2 })
 * <motion.div ref={animation.ref} {...animation}>Content</motion.div>
 */
export function useScrollReveal(config: ScrollRevealConfig = {}): ScrollRevealAnimation {
  const {
    direction = 'up',
    delay = 0,
    duration = 0.6,
    distance = 60,
    once = true,
    margin = '-100px'
  } = config

  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: margin as any })

  const directionVariants: Record<RevealDirection, Record<string, any>> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.8 },
    fade: { opacity: 0 }
  }

  const initial = {
    opacity: 0,
    ...directionVariants[direction]
  }

  const animate = isInView ? {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1
  } : initial

  return {
    ref,
    initial,
    animate,
    transition: {
      duration,
      delay,
      ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number]
    }
  }
}
