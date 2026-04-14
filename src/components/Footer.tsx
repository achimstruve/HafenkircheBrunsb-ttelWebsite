import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon fill="#0a0f1e" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/vision', label: 'Unsere Vision' },
  { href: '/werte', label: 'Unsere Werte' },
  { href: '/team', label: 'Das Team' },
  { href: '/geben', label: 'Geben' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-[#c8d7ea] border-t border-[#EBD532]/15">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Hafenkirche Brunsbüttel"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(235,213,50,0.3)]"
                />
              </div>
              <span className="text-xl font-bold text-[#0E395B]">
                Hafen<span className="text-[#c45aa0]">kirche</span>
              </span>
            </Link>
            <p className="text-[#c45aa0] font-semibold text-sm tracking-widest uppercase mb-4">
              Freiheit Leben
            </p>
            <p className="text-[#3f5f86] text-sm leading-relaxed">
              Eine lebendige Gemeinde in Brunsbüttel, verwurzelt in Gottes Liebe,
              ausgerichtet auf die Region Dithmarschen.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/HafenkircheBrunsbuettel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#d4e0f0] border border-[#EBD532]/20 flex items-center justify-center text-[#3f5f86] hover:text-[#c45aa0] hover:border-[#EBD532]/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hafenkirchebrunsbuttel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#d4e0f0] border border-[#EBD532]/20 flex items-center justify-center text-[#3f5f86] hover:text-[#c45aa0] hover:border-[#EBD532]/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@hafenkirchebrunsbuttel5266"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#d4e0f0] border border-[#EBD532]/20 flex items-center justify-center text-[#3f5f86] hover:text-[#c45aa0] hover:border-[#EBD532]/50 transition-all duration-200"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#0E395B] font-semibold mb-5 text-sm tracking-wider uppercase">
              Seiten
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#3f5f86] hover:text-[#c45aa0] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#0E395B] font-semibold mb-5 text-sm tracking-wider uppercase">
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#c45aa0] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#345278] text-sm">Schleusenstraße 10</p>
                  <p className="text-[#345278] text-sm">25541 Brunsbüttel</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-[#c45aa0] shrink-0" />
                <a
                  href="mailto:info@hafenkirche.com"
                  className="text-[#345278] text-sm hover:text-[#c45aa0] transition-colors"
                >
                  info@hafenkirche.com
                </a>
              </div>
            </div>

            {/* Service Times */}
            <div className="mt-6 p-4 rounded-xl bg-[#d4e0f0] border border-[#EBD532]/20">
              <p className="text-[#c45aa0] text-xs font-semibold uppercase tracking-wider mb-2">
                Gottesdienste
              </p>
              <p className="text-[#345278] text-sm">Sonntags · 10:30 Uhr</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#0E395B] font-semibold mb-5 text-sm tracking-wider uppercase">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-[#3f5f86] hover:text-[#c45aa0] text-sm transition-colors duration-200"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum#datenschutz"
                  className="text-[#3f5f86] hover:text-[#c45aa0] text-sm transition-colors duration-200"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EBD532]/10">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5e76a0] text-sm">
              © {new Date().getFullYear()} Hafenkirche Brunsbüttel e.V. · Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-600 text-xs">
              Mit Liebe gebaut · Freiheit Leben
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
