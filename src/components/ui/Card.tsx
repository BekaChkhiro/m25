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
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
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
