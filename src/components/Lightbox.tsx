'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  /** null = closed */
  currentIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = currentIndex !== null
  const total = images.length

  const prev = useCallback(() => {
    if (currentIndex === null) return
    onNavigate((currentIndex - 1 + total) % total)
  }, [currentIndex, total, onNavigate])

  const next = useCallback(() => {
    if (currentIndex === null) return
    onNavigate((currentIndex + 1) % total)
  }, [currentIndex, total, onNavigate])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, prev, next])

  const current = currentIndex !== null ? images[currentIndex] : null

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/93 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Bild vergrößert"
        >
          {/* Left arrow */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-5 z-10 w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-200 shadow-lg"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.16 }}
            className="relative w-full max-w-5xl px-14 sm:px-20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-14 sm:right-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-200"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full h-[78vh] rounded-xl overflow-hidden shadow-2xl shadow-black/70">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 95vw, 85vw"
                priority
              />
            </div>

            {/* Counter + alt text */}
            {total > 1 && (
              <div className="mt-3 flex items-center gap-3 text-gray-500 text-xs">
                <span className="tabular-nums">{(currentIndex ?? 0) + 1} / {total}</span>
                {current.alt && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-gray-600 inline-block" />
                    <span className="text-gray-400">{current.alt}</span>
                  </>
                )}
              </div>
            )}
          </motion.div>

          {/* Right arrow */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-5 z-10 w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-200 shadow-lg"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
