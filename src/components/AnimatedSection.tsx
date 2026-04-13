'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

function getHidden(direction: Direction) {
  const base = { opacity: 0, x: 0, y: 0 }
  if (direction === 'up') return { ...base, y: 40 }
  if (direction === 'down') return { ...base, y: -40 }
  if (direction === 'left') return { ...base, x: 40 }
  if (direction === 'right') return { ...base, x: -40 }
  return base
}

const EASE = 'easeOut' as const

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={getHidden(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedChild({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  id?: string
}) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={getHidden(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
