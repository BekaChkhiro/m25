import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'brand'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-accent/10 text-accent border-accent/20',
      brand: 'bg-brand/10 text-brand border-brand/20',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-block px-3 py-1 text-sm font-medium rounded-full border',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
