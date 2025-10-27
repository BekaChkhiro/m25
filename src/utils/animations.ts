import type { Variants, Transition } from 'framer-motion'

/**
 * Reusable animation variants and easing curves for M25 Business Center
 * @module animations
 */

// ============================================================================
// EASING CURVES
// ============================================================================

export const easing = {
  /** Smooth, luxurious easing - use for premium feel */
  luxury: [0.22, 1, 0.36, 1] as [number, number, number, number],

  /** Standard ease curve */
  ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],

  /** Ease in and out */
  easeInOut: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],

  /** Snappy spring for interactive elements */
  springSnappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30
  } satisfies Transition,

  /** Medium spring for most animations */
  spring: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 25
  } satisfies Transition,

  /** Soft spring for gentle movements */
  springSoft: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20
  } satisfies Transition,
}

// ============================================================================
// CONTAINER VARIANTS (for stagger effects)
// ============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// ============================================================================
// BASIC ENTRANCE ANIMATIONS
// ============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easing.ease },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing.ease },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing.ease },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easing.ease },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easing.ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easing.ease },
  },
}

export const scaleInLarge: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easing.luxury },
  },
}

// ============================================================================
// 3D TRANSFORM ANIMATIONS
// ============================================================================

export const flip3D: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    transformPerspective: 1000
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.8, ease: easing.ease },
  },
}

export const slideIn3D: Variants = {
  hidden: {
    opacity: 0,
    rotateY: -30,
    x: -100,
    transformPerspective: 1000
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: { duration: 0.8, ease: easing.ease },
  },
}

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easing.ease },
  },
}

// ============================================================================
// BLUR EFFECTS
// ============================================================================

export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easing.luxury },
  },
}

export const blurFadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easing.luxury },
  },
}

// ============================================================================
// HOVER EFFECTS
// ============================================================================

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: easing.easeInOut }
  },
}

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: easing.springSnappy
  },
}

export const hoverGlow = {
  rest: {
    boxShadow: '0 0 0 rgba(74, 163, 255, 0)',
  },
  hover: {
    boxShadow: '0 20px 60px rgba(74, 163, 255, 0.4)',
    transition: { duration: 0.3 }
  },
}

// ============================================================================
// CARD ANIMATIONS
// ============================================================================

export const cardEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.luxury
    }
  }
}

export const cardEntranceStaggered: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

// ============================================================================
// SVG PATH ANIMATIONS
// ============================================================================

export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: 'easeInOut' },
      opacity: { duration: 0.5 }
    }
  }
}

// ============================================================================
// MAGNETIC EFFECT HELPER
// ============================================================================

/**
 * Creates a magnetic animation object for cursor-following effects
 * @param x - X offset from element center
 * @param y - Y offset from element center
 * @param strength - Strength of the magnetic effect (0-1)
 */
export const createMagneticAnimation = (
  x: number,
  y: number,
  strength = 0.3
) => ({
  x: x * strength,
  y: y * strength,
  transition: { type: 'spring', stiffness: 150, damping: 15 }
})

// ============================================================================
// FLOAT ANIMATION
// ============================================================================

export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const floatAnimationSlow = {
  y: [0, -15, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

// ============================================================================
// PULSE ANIMATIONS
// ============================================================================

export const pulseScale = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const pulseGlow = {
  boxShadow: [
    '0 0 20px rgba(74, 163, 255, 0.3)',
    '0 0 40px rgba(74, 163, 255, 0.6)',
    '0 0 20px rgba(74, 163, 255, 0.3)'
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}
