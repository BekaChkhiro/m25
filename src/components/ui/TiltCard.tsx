import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { type ReactNode, useRef } from 'react'
import { cn } from '@/utils/cn'

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltStrength?: number
  enableGlow?: boolean
}

/**
 * 3D Tilt Card Component
 *
 * A card that follows the mouse cursor with 3D perspective tilt effect.
 * Perfect for premium office cards, amenity cards, or any interactive content.
 *
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param tiltStrength - How much the card tilts (default: 15 degrees)
 * @param enableGlow - Whether to add a glow effect following the cursor
 *
 * @example
 * <TiltCard tiltStrength={20} enableGlow>
 *   <Card>Your content here</Card>
 * </TiltCard>
 */
export const TiltCard = ({
  children,
  className,
  tiltStrength = 15,
  enableGlow = true
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse position relative to card (0 to 1)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  // Transform to rotation angles with spring physics
  const rotateX = useSpring(
    useTransform(y, [0, 1], [tiltStrength, -tiltStrength]),
    { stiffness: 300, damping: 30 }
  )

  const rotateY = useSpring(
    useTransform(x, [0, 1], [-tiltStrength, tiltStrength]),
    { stiffness: 300, damping: 30 }
  )

  // Glow effect position
  const glowX = useSpring(useTransform(x, [0, 1], ['0%', '100%']), {
    stiffness: 200,
    damping: 30
  })
  const glowY = useSpring(useTransform(y, [0, 1], ['0%', '100%']), {
    stiffness: 200,
    damping: 30
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    // Calculate mouse position relative to card (0 to 1)
    const relativeX = (e.clientX - rect.left) / rect.width
    const relativeY = (e.clientY - rect.top) / rect.height

    x.set(relativeX)
    y.set(relativeY)
  }

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000
      }}
      className={cn('relative', className)}
    >
      {/* Glow effect following cursor */}
      {enableGlow && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
          style={{
            background: `radial-gradient(600px circle at ${glowX.get()} ${glowY.get()}, rgba(74, 163, 255, 0.15), transparent 40%)`
          }}
        />
      )}

      {/* Content with 3D transform */}
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
