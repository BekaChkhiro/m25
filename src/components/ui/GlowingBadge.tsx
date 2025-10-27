import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

interface GlowingBadgeProps {
  count: number
  text?: string
  className?: string
}

export const GlowingBadge = ({
  count,
  text = 'spaces left',
  className
}: GlowingBadgeProps) => {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 20px rgba(251, 146, 60, 0.4), 0 10px 30px rgba(251, 146, 60, 0.2)',
          '0 0 40px rgba(251, 146, 60, 0.7), 0 20px 40px rgba(251, 146, 60, 0.3)',
          '0 0 20px rgba(251, 146, 60, 0.4), 0 10px 30px rgba(251, 146, 60, 0.2)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 50px rgba(251, 146, 60, 0.8), 0 25px 50px rgba(251, 146, 60, 0.4)'
      }}
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full',
        'bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20',
        'border-2 border-orange-500/60',
        'backdrop-blur-sm',
        'cursor-default',
        className
      )}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <AlertCircle className="w-5 h-5 text-orange-400 fill-orange-400/20" />
      </motion.div>
      <span className="text-orange-300 font-bold text-sm whitespace-nowrap">
        Only <span className="text-orange-200 text-base">{count}</span> {text}!
      </span>
    </motion.div>
  )
}
