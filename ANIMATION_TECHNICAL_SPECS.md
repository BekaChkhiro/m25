# M25 Business Center - Animation Technical Specifications

## Table of Contents
1. [Animation System Architecture](#animation-system-architecture)
2. [Reusable Animation Variants](#reusable-animation-variants)
3. [Custom Hooks](#custom-hooks)
4. [Component Examples](#component-examples)
5. [Performance Optimization](#performance-optimization)
6. [Accessibility Implementation](#accessibility-implementation)

---

## Animation System Architecture

### File Structure

```
src/
├── animations/
│   ├── index.ts                    # Export all animations
│   ├── variants/
│   │   ├── index.ts                # Export all variants
│   │   ├── hero.variants.ts        # Hero specific animations
│   │   ├── card.variants.ts        # Card animations
│   │   ├── text.variants.ts        # Text reveal animations
│   │   ├── form.variants.ts        # Form input animations
│   │   └── global.variants.ts      # Shared animations
│   ├── transitions/
│   │   ├── index.ts
│   │   ├── easing.ts               # Custom easing functions
│   │   └── springs.ts              # Spring configurations
│   ├── hooks/
│   │   ├── useParallax.ts          # Parallax effect hook
│   │   ├── use3DTilt.ts            # 3D card tilt hook
│   │   ├── useReducedMotion.ts     # Accessibility hook
│   │   ├── useScrollProgress.ts    # Scroll progress tracking
│   │   └── useMagneticHover.ts     # Magnetic button effect
│   └── components/
│       ├── SplitText.tsx           # Text reveal component
│       ├── AnimatedCounter.tsx     # Enhanced counter
│       ├── MagneticButton.tsx      # Interactive button
│       ├── TiltCard.tsx            # 3D tilt card
│       └── RevealOnScroll.tsx      # Scroll reveal wrapper
```

---

## Reusable Animation Variants

### 1. Global Variants (`src/animations/variants/global.variants.ts`)

```typescript
import type { Variants } from 'framer-motion'

/**
 * Fade and slide up animation
 * Usage: Most common entrance animation
 */
export const fadeSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
}

/**
 * Fade and slide in from direction
 */
export const fadeSlide = (direction: 'up' | 'down' | 'left' | 'right' = 'up'): Variants => {
  const directionMap = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  }

  return {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }
}

/**
 * Scale and fade animation
 */
export const scaleFade: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

/**
 * Stagger container for child animations
 */
export const staggerContainer = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

/**
 * Blur reveal animation
 */
export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}
```

---

### 2. Card Variants (`src/animations/variants/card.variants.ts`)

```typescript
import type { Variants } from 'framer-motion'

/**
 * 3D card flip animation
 */
export const cardFlip: Variants = {
  hidden: {
    rotateY: -90,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      rotateY: { duration: 0.6, ease: 'easeOut' },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
}

/**
 * Card with perspective entrance
 */
export const cardPerspective: Variants = {
  hidden: {
    rotateX: 45,
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
}

/**
 * Card lift animation (for hover)
 */
export const cardLift = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 12px 40px rgba(0, 214, 255, 0.3)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

/**
 * Gradient border animation for featured cards
 */
export const gradientBorder = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

/**
 * Card entrance with spring
 */
export const cardSpring: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
}
```

---

### 3. Text Variants (`src/animations/variants/text.variants.ts`)

```typescript
import type { Variants } from 'framer-motion'

/**
 * Character reveal animation
 */
export const charReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

/**
 * Word reveal animation
 */
export const wordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
}

/**
 * Text reveal with clip path (wipe effect)
 */
export const textWipe: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
}

/**
 * Gradient text animation
 */
export const gradientText = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}
```

---

### 4. Hero Variants (`src/animations/variants/hero.variants.ts`)

```typescript
import type { Variants } from 'framer-motion'

/**
 * Hero heading entrance
 */
export const heroHeading: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
}

/**
 * Hero badge animation
 */
export const heroBadge: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
}

/**
 * Hero CTA buttons
 */
export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 + i * 0.1,
      ease: 'easeOut',
    },
  }),
}

/**
 * Scroll indicator bounce
 */
export const scrollIndicator = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}
```

---

## Custom Hooks

### 1. Parallax Hook (`src/animations/hooks/useParallax.ts`)

```typescript
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { RefObject } from 'react'

interface ParallaxOptions {
  ref?: RefObject<HTMLElement>
  speed?: number
  direction?: 'up' | 'down'
  startOffset?: number
  endOffset?: number
}

/**
 * Creates a parallax effect based on scroll position
 * @param options - Parallax configuration options
 * @returns MotionValue for y-axis transformation
 */
export const useParallax = (options: ParallaxOptions = {}): MotionValue<number> => {
  const {
    ref,
    speed = 0.5,
    direction = 'up',
    startOffset = 0,
    endOffset = 500,
  } = options

  const { scrollY } = useScroll(ref ? { target: ref } : undefined)

  const multiplier = direction === 'up' ? 1 : -1

  return useTransform(
    scrollY,
    [startOffset, endOffset],
    [0, (endOffset - startOffset) * speed * multiplier]
  )
}

/**
 * Creates multi-layer parallax effect
 * @param layers - Array of speed values for each layer
 * @returns Array of MotionValues for each layer
 */
export const useLayeredParallax = (layers: number[]): MotionValue<number>[] => {
  const { scrollY } = useScroll()

  return layers.map(speed =>
    useTransform(scrollY, [0, 1000], [0, 1000 * speed])
  )
}
```

---

### 2. 3D Tilt Hook (`src/animations/hooks/use3DTilt.ts`)

```typescript
import { useState, useEffect, RefObject, MouseEvent } from 'react'

interface TiltOptions {
  maxTilt?: number
  perspective?: number
  scale?: number
  speed?: number
}

interface TiltState {
  transform: string
  transition: string
}

/**
 * Creates a 3D tilt effect that follows the mouse cursor
 * @param ref - Reference to the element to tilt
 * @param options - Tilt configuration
 * @returns Transform styles and event handlers
 */
export const use3DTilt = (
  ref: RefObject<HTMLElement>,
  options: TiltOptions = {}
): {
  tiltStyle: TiltState
  onMouseMove: (e: MouseEvent) => void
  onMouseLeave: () => void
} => {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 400,
  } = options

  const [tiltStyle, setTiltStyle] = useState<TiltState>({
    transform: '',
    transition: '',
  })

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    const rotateY = x * maxTilt
    const rotateX = -y * maxTilt

    setTiltStyle({
      transform: `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(${scale}, ${scale}, ${scale})
      `,
      transition: 'transform 0.1s ease-out',
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: `transform ${speed}ms ease-out`,
    })
  }

  return {
    tiltStyle,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }
}
```

---

### 3. Reduced Motion Hook (`src/animations/hooks/useReducedMotion.ts`)

```typescript
import { useState, useEffect } from 'react'

/**
 * Detects user's motion preference
 * @returns boolean indicating if reduced motion is preferred
 */
export const useReducedMotion = (): boolean => {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Set initial value
    setReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return reducedMotion
}

/**
 * Returns appropriate animation variants based on motion preference
 * @param fullVariants - Full animation variants
 * @param reducedVariants - Simplified variants for reduced motion
 * @returns Appropriate variants based on user preference
 */
export const useAccessibleAnimation = <T,>(
  fullVariants: T,
  reducedVariants: T
): T => {
  const reducedMotion = useReducedMotion()
  return reducedMotion ? reducedVariants : fullVariants
}
```

---

### 4. Magnetic Hover Hook (`src/animations/hooks/useMagneticHover.ts`)

```typescript
import { useState, useEffect, RefObject, MouseEvent } from 'react'
import { useSpring, useMotionValue } from 'framer-motion'

interface MagneticOptions {
  strength?: number
  radius?: number
}

/**
 * Creates a magnetic hover effect where element follows cursor
 * @param ref - Reference to the element
 * @param options - Magnetic effect configuration
 * @returns Motion values for x and y position
 */
export const useMagneticHover = (
  ref: RefObject<HTMLElement>,
  options: MagneticOptions = {}
): { x: any; y: any } => {
  const { strength = 0.3, radius = 100 } = options

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < radius) {
        x.set(distanceX * strength)
        y.set(distanceY * strength)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    element.addEventListener('mousemove', handleMouseMove as any)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as any)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, x, y, strength, radius])

  return { x: springX, y: springY }
}
```

---

## Component Examples

### 1. Split Text Component (`src/animations/components/SplitText.tsx`)

```typescript
import { motion, Variants } from 'framer-motion'
import { useReducedMotion } from '@animations/hooks/useReducedMotion'

interface SplitTextProps {
  text: string
  type?: 'chars' | 'words'
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
}

export const SplitText = ({
  text,
  type = 'chars',
  className = '',
  delay = 0,
  duration = 0.4,
  stagger = 0.03,
}: SplitTextProps) => {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <span className={className}>{text}</span>
  }

  const items = type === 'chars' ? text.split('') : text.split(' ')
  const variants = type === 'chars' ? charVariants : wordVariants

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: stagger,
        delayChildren: delay,
      }}
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          variants={variants}
          transition={{ duration }}
          style={{ display: 'inline-block', whiteSpace: type === 'words' ? 'pre' : 'normal' }}
        >
          {type === 'words' && index > 0 ? ' ' : ''}
          {item}
        </motion.span>
      ))}
    </motion.span>
  )
}
```

---

### 2. Magnetic Button Component (`src/animations/components/MagneticButton.tsx`)

```typescript
import { useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMagneticHover } from '@animations/hooks/useMagneticHover'
import { useReducedMotion } from '@animations/hooks/useReducedMotion'

interface MagneticButtonProps {
  children: ReactNode
  strength?: number
  radius?: number
  className?: string
}

export const MagneticButton = ({
  children,
  strength = 0.3,
  radius = 100,
  className = '',
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { x, y } = useMagneticHover(ref, { strength, radius })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

### 3. Tilt Card Component (`src/animations/components/TiltCard.tsx`)

```typescript
import { useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { use3DTilt } from '@animations/hooks/use3DTilt'
import { useReducedMotion } from '@animations/hooks/useReducedMotion'

interface TiltCardProps {
  children: ReactNode
  maxTilt?: number
  scale?: number
  className?: string
}

export const TiltCard = ({
  children,
  maxTilt = 15,
  scale = 1.05,
  className = '',
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { tiltStyle, onMouseMove, onMouseLeave } = use3DTilt(ref, {
    maxTilt,
    scale,
  })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transform: tiltStyle.transform,
        transition: tiltStyle.transition,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}
```

---

### 4. Enhanced Counter Component (`src/animations/components/AnimatedCounter.tsx`)

```typescript
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'anticipate'
  onComplete?: () => void
}

const easingFunctions = {
  linear: (t: number) => t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 4),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  anticipate: (t: number) => {
    // Overshoot slightly then settle
    const c = 1.70158
    return ((c + 1) * t ** 3 - c * t ** 2)
  },
}

export const AnimatedCounter = ({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  easing = 'easeOut',
  onComplete,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easedProgress = easingFunctions[easing](progress)
      const currentCount = value * easedProgress

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        onComplete?.()
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration, easing, onComplete])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 1 }}
      animate={isInView && count === value ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  )
}
```

---

## Performance Optimization

### 1. Animation Performance Best Practices

```typescript
// ✅ GOOD: Use transform and opacity (GPU accelerated)
<motion.div
  animate={{
    x: 100,
    y: 100,
    scale: 1.2,
    rotate: 45,
    opacity: 0.5
  }}
/>

// ❌ BAD: Animate layout properties (causes reflow)
<motion.div
  animate={{
    width: '100%',
    height: '200px',
    marginLeft: 20,
    padding: 10
  }}
/>

// ✅ GOOD: Use will-change for known animations
<motion.div
  style={{ willChange: 'transform' }}
  whileHover={{ scale: 1.1 }}
/>

// ✅ GOOD: Cleanup animations on unmount
useEffect(() => {
  const controls = animate(/* ... */)
  return () => controls.stop()
}, [])
```

### 2. Conditional Animation Rendering

```typescript
/**
 * Adaptive animation based on device performance
 */
export const useAdaptiveAnimation = () => {
  const [complexity, setComplexity] = useState<'high' | 'medium' | 'low'>('high')

  useEffect(() => {
    // Check device performance indicators
    const connection = (navigator as any).connection
    const memory = (performance as any).memory

    // Check network speed
    const slowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === '3g'

    // Check available memory
    const lowMemory = memory?.jsHeapSizeLimit < 100000000

    // Check CPU performance with simple benchmark
    const start = performance.now()
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i)
    }
    const duration = performance.now() - start

    if (slowConnection || lowMemory || duration > 50) {
      setComplexity('low')
    } else if (duration > 20) {
      setComplexity('medium')
    }
  }, [])

  return complexity
}

// Usage
const complexity = useAdaptiveAnimation()

const variants = {
  high: { /* complex animations */ },
  medium: { /* moderate animations */ },
  low: { /* simple animations */ }
}

<motion.div variants={variants[complexity]} />
```

### 3. Memoization for Performance

```typescript
import { useMemo } from 'react'
import type { Variants } from 'framer-motion'

/**
 * Memoize animation variants to prevent recreation
 */
export const useAnimationVariants = (dependency?: any): Variants => {
  return useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }), [dependency])
}

/**
 * Memoize stagger configuration
 */
export const useStaggerConfig = (delay: number = 0.1) => {
  return useMemo(() => ({
    staggerChildren: delay,
    delayChildren: 0.2
  }), [delay])
}
```

---

## Accessibility Implementation

### 1. Respect Reduced Motion Preference

```typescript
/**
 * Animation wrapper that respects user preferences
 */
import { motion, Variants } from 'framer-motion'
import { useReducedMotion } from '@animations/hooks/useReducedMotion'

interface AccessibleAnimationProps {
  children: React.ReactNode
  variants: Variants
  reducedVariants?: Variants
  [key: string]: any
}

export const AccessibleAnimation = ({
  children,
  variants,
  reducedVariants,
  ...props
}: AccessibleAnimationProps) => {
  const reducedMotion = useReducedMotion()

  // Simplified variants for reduced motion
  const defaultReducedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  }

  const finalVariants = reducedMotion
    ? (reducedVariants || defaultReducedVariants)
    : variants

  return (
    <motion.div variants={finalVariants} {...props}>
      {children}
    </motion.div>
  )
}
```

### 2. Announce Dynamic Content

```typescript
/**
 * Screen reader announcer for animated content changes
 */
import { useEffect, useRef } from 'react'

export const useAriaAnnounce = (message: string, delay: number = 500) => {
  const announcerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!message) return

    const timer = setTimeout(() => {
      if (announcerRef.current) {
        announcerRef.current.textContent = message
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [message, delay])

  return (
    <div
      ref={announcerRef}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  )
}

// Usage in component
const Component = () => {
  const [status, setStatus] = useState('')
  const announcer = useAriaAnnounce(status)

  const handleSubmit = async () => {
    setStatus('Form is submitting...')
    // ... submit logic
    setStatus('Form submitted successfully!')
  }

  return (
    <>
      {announcer}
      {/* rest of component */}
    </>
  )
}
```

---

## Testing Utilities

### Animation Test Helper

```typescript
/**
 * Test utilities for animation components
 */
import { render, waitFor } from '@testing-library/react'
import { MotionConfig } from 'framer-motion'

/**
 * Render component with instant animations for testing
 */
export const renderWithInstantAnimations = (component: React.ReactElement) => {
  return render(
    <MotionConfig transition={{ duration: 0 }}>
      {component}
    </MotionConfig>
  )
}

/**
 * Wait for animation to complete
 */
export const waitForAnimation = async (duration: number = 1000) => {
  await waitFor(() => new Promise(resolve => setTimeout(resolve, duration)))
}
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Create animation variants library
- [ ] Implement useParallax hook
- [ ] Implement useReducedMotion hook
- [ ] Create SplitText component
- [ ] Update Hero section with multi-layer parallax
- [ ] Add text reveal animations
- [ ] Enhance navigation micro-interactions

### Phase 2: Core Sections
- [ ] Implement 3D card animations for About section
- [ ] Add use3DTilt hook
- [ ] Create TiltCard component
- [ ] Enhance Office card hover states
- [ ] Add magnetic button effect
- [ ] Implement gallery masonry reveal
- [ ] Add lightbox transitions

### Phase 3: Interactive Elements
- [ ] Enhance form input animations
- [ ] Add validation feedback animations
- [ ] Create success state animations
- [ ] Implement amenities card interactions
- [ ] Add icon draw animations

### Phase 4: Advanced Effects
- [ ] Implement scroll-linked section transitions
- [ ] Add progress indicators
- [ ] Create loading skeleton states
- [ ] Add gesture support for mobile

### Phase 5: Optimization
- [ ] Implement adaptive animation complexity
- [ ] Add performance monitoring
- [ ] Optimize bundle size
- [ ] Test accessibility
- [ ] Cross-browser testing

---

**Document Version:** 1.0
**Last Updated:** October 24, 2025
**Related:** ANIMATION_ENHANCEMENT_PROJECT_PLAN.md
