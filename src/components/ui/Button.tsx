import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', animate = true, className, children, ...props }, ref) => {
    const baseClasses = 'rounded-xl font-bold border shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2'

    const variantClasses = {
      primary: 'bg-brand text-[#001324] border-white/5 hover:shadow-glow',
      secondary: 'bg-transparent text-text border-white/15 hover:border-brand hover:bg-brand/10',
    }

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    if (animate) {
      const MotionButton = motion.button as any
      return (
        <MotionButton
          ref={ref}
          className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
          whileHover={{
            scale: 1.05,
            boxShadow: variant === 'primary'
              ? '0 10px 40px rgba(74, 163, 255, 0.4)'
              : '0 10px 40px rgba(74, 163, 255, 0.2)',
            y: -2
          }}
          whileTap={{
            scale: 0.95,
            y: 0
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 17
          }}
          {...props}
        >
          {children}
        </MotionButton>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
