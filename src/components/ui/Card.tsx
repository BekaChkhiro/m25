import { forwardRef, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean
  glass?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ animate = true, glass = false, className, children, ...props }, ref) => {
    const baseClasses = 'rounded-card p-6 transition-all duration-300'
    const glassClasses = glass
      ? 'glass'
      : 'bg-card border border-white/10 shadow-card hover:border-brand/30 hover:shadow-glow hover:-translate-y-1'

    if (animate) {
      const MotionDiv = motion.div as any
      return (
        <MotionDiv
          ref={ref}
          className={cn(baseClasses, glassClasses, className)}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: '0 20px 60px rgba(74, 163, 255, 0.15)',
            borderColor: 'rgba(74, 163, 255, 0.3)'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
          {...props}
        >
          {children}
        </MotionDiv>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, glassClasses, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
