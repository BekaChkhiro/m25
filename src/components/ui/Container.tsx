import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'full'
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'default', className, children, ...props }, ref) => {
    const sizeClasses = {
      default: 'container-custom',
      full: 'w-full px-4 sm:px-6 lg:px-8',
    }

    return (
      <div ref={ref} className={cn(sizeClasses[size], className)} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
