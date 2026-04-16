'use client'

import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

// Performance mode: render statically to reduce main-thread/paint work.
export default function AnimatedSection({
  children,
  className = '',
}: AnimatedSectionProps) {
  return <div className={className}>{children}</div>
}

export function AnimatedChild({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  id?: string
}) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  )
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}
