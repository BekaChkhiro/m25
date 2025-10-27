import { forwardRef, type InputHTMLAttributes } from 'react'
import { Calendar } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string
  label?: string
  showIcon?: boolean
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, error, label, showIcon = true, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium mb-2 flex items-center gap-2"
          >
            {showIcon && <Calendar className="w-4 h-4 text-brand" />}
            {label}
          </label>
        )}
        <div className="relative group">
          {/* Calendar icon inside input */}
          {showIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
              <Calendar className="w-5 h-5 text-muted group-focus-within:text-brand transition-colors duration-200" />
            </div>
          )}

          <input
            ref={ref}
            type="date"
            id={id}
            className={cn(
              // Base styles from input-field
              'w-full px-4 py-3 bg-card border border-white/10 rounded-xl text-text',
              'focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20',
              'transition-all duration-200',
              // Date-specific enhancements
              showIcon && 'pl-12', // Make room for calendar icon
              // Improved date input styling
              '[color-scheme:dark]', // Native dark mode for calendar picker
              'cursor-pointer',
              // Calendar icon styling (browser-specific)
              '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
              '[&::-webkit-calendar-picker-indicator]:opacity-60',
              '[&::-webkit-calendar-picker-indicator]:hover:opacity-100',
              '[&::-webkit-calendar-picker-indicator]:transition-opacity',
              // Custom focus styles
              'hover:border-brand/30',
              'hover:shadow-[0_0_20px_rgba(251,146,60,0.1)]',
              // Error state
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
            {error}
          </p>
        )}
      </div>
    )
  }
)

DateInput.displayName = 'DateInput'
