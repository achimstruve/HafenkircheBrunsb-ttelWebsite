'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/vision', label: 'Vision' },
  { href: '/werte', label: 'Werte' },
  { href: '/team', label: 'Team' },
  { href: '/geben', label: 'Geben' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0f1e]/95 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Hafenkirche Brunsbüttel"
                  fill
                  className="object-contain drop-shadow-[0_0_6px_rgba(201,168,76,0.4)]"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Hafen<span className="text-[#c9a84c]">kirche</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5 ${
                    pathname === link.href
                      ? 'text-[#c9a84c]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c56d] rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="ml-4 gold-button text-sm py-2 px-5"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0d1526] border-l border-[#c9a84c]/20 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#c9a84c]/20">
                <Link href="/" className="flex items-center gap-2">
                  <div className="relative w-9 h-9 shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Hafenkirche Brunsbüttel"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-white">
                    Hafen<span className="text-[#c9a84c]">kirche</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        pathname === link.href
                          ? 'bg-[#c9a84c]/15 text-[#c9a84c] border border-[#c9a84c]/30'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-4 pt-4 border-t border-[#c9a84c]/20">
                  <p className="text-xs text-gray-500 text-center font-medium tracking-wider uppercase">
                    Freiheit Leben
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
