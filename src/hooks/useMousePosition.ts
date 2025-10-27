import { useState, useEffect } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'

interface MousePosition {
  x: MotionValue<number>
  y: MotionValue<number>
}

/**
 * Custom hook for tracking mouse position with optional smoothing
 *
 * @param smooth - Whether to apply spring smoothing to mouse movement
 * @returns Object containing x and y MotionValues
 *
 * @example
 * const { x, y } = useMousePosition(true)
 * <motion.div style={{ x, y }}>Follows cursor</motion.div>
 */
export function useMousePosition(smooth = true): MousePosition {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 300, damping: 50 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  return smooth ? { x: smoothX, y: smoothY } : { x, y }
}
