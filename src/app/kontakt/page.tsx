'use client'

import { useState } from 'react'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import { Mail, MapPin, Clock, Copy, Check } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )
}

const EMAIL = 'info@hafenkirche.com'

export default function KontaktPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimatedChild>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Wir freuen uns auf dich
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95]">
              Meld dich
              <br />
              <span className="gold-gradient-text">bei uns.</span>
            </h1>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
              Fragen, Anliegen, oder einfach mal reinschnuppern: Schreib uns oder
              komm einfach sonntags um 10:30 Uhr vorbei.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <AnimatedChild>
              <h2 className="text-3xl font-black text-white mb-10">
                So erreichst du uns
              </h2>
            </AnimatedChild>

            {/* Info cards */}
            <StaggerContainer className="space-y-4 mb-12">
              {/* Address */}
              <StaggerItem>
                <div className="flex gap-5 p-6 rounded-2xl glass-card hover:border-[#c9a84c]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#e8c56d] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Adresse</p>
                    <p className="text-white font-semibold">Schleusenstraße 10</p>
                    <p className="text-white font-semibold">25541 Brunsbüttel</p>
                  </div>
                </div>
              </StaggerItem>

              {/* Email with copy button */}
              <StaggerItem>
                <div className="flex gap-5 p-6 rounded-2xl glass-card hover:border-[#c9a84c]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3060b0] to-[#4a80d0] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">E-Mail</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-white font-semibold hover:text-[#c9a84c] transition-colors"
                      >
                        {EMAIL}
                      </a>
                      <button
                        onClick={copyEmail}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all duration-200 shrink-0"
                        style={
                          copied
                            ? { color: '#4ade80', borderColor: 'rgba(74,222,128,0.4)', background: 'rgba(74,222,128,0.08)' }
                            : { color: '#c9a84c', borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)' }
                        }
                        aria-label="E-Mail-Adresse kopieren"
                      >
                        {copied
                          ? <><Check className="w-3.5 h-3.5" /> Kopiert!</>
                          : <><Copy className="w-3.5 h-3.5" /> Kopieren</>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Service time */}
              <StaggerItem>
                <div className="flex gap-5 p-6 rounded-2xl glass-card hover:border-[#c9a84c]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#20a060] to-[#30c080] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Gottesdienst</p>
                    <p className="text-white font-semibold">Sonntags · 10:30 Uhr</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Social Media */}
            <AnimatedChild delay={0.3}>
              <div className="glass-card rounded-2xl p-8 mb-6">
                <h3 className="text-white font-bold text-lg mb-6">
                  Folge uns in den sozialen Medien
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      Icon: FacebookIcon,
                      label: 'Facebook',
                      href: 'https://www.facebook.com/HafenkircheBrunsbuettel',
                      color: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 hover:text-[#1877F2]',
                    },
                    {
                      Icon: InstagramIcon,
                      label: 'Instagram',
                      href: 'https://www.instagram.com/hafenkirchebrunsbuttel',
                      color: 'hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 hover:text-[#E1306C]',
                    },
                    {
                      Icon: YoutubeIcon,
                      label: 'YouTube',
                      href: 'https://www.youtube.com/@hafenkirchebrunsbuttel5266',
                      color: 'hover:bg-[#FF0000]/20 hover:border-[#FF0000]/40 hover:text-[#FF0000]',
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-400 text-sm font-medium transition-all duration-200 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.Icon className="w-5 h-5" />
                      <span className="hidden sm:inline">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedChild>

            {/* Mutmacher Zoom */}
            <AnimatedChild delay={0.4}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20">
                <p className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-2">
                  Mutmacher Zoom
                </p>
                <p className="text-gray-300 font-semibold mb-2">Dienstags · 19:00 Uhr</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Einfach online reinschnuppern, Fragen stellen und beten, ohne Verpflichtung, einfach zum Reinschnuppern.
                </p>
                <a
                  href="https://us02web.zoom.us/j/86582901445?pwd=TC9JNnV1Y3hiVjQxU3YxSmthMko2QT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#c9a84c] text-sm font-semibold hover:underline"
                >
                  Meeting beitreten →
                </a>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#060c18]">
        <AnimatedChild>
          <div className="w-full h-80 relative overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Schleusenstra%C3%9Fe+10%2C+25541+Brunsbüttel&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hafenkirche Brunsbüttel Standort"
            />
          </div>
        </AnimatedChild>
      </section>
    </>
  )
}
