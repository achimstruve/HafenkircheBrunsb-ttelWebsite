'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface LightboxProps {
  src: string | null
  alt?: string
  onClose: () => void
}

export default function Lightbox({ src, alt = '', onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [src, onClose])

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Bild vergrößert"
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ duration: 0.22, type: 'spring', stiffness: 320, damping: 28 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-5 -right-5 z-10 w-11 h-11 rounded-full bg-[#0d1526] border border-white/20 flex items-center justify-center text-white hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-200 shadow-xl"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image container — fixed height, object-contain so full image is always visible */}
            <div className="relative w-[90vw] h-[82vh] max-w-5xl rounded-xl overflow-hidden shadow-2xl shadow-black/60">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
