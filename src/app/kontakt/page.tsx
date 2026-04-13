'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react'

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

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['Schleusenstraße 10', '25541 Brunsbüttel'],
    color: 'from-[#c9a84c] to-[#e8c56d]',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    lines: ['info@hafenkirche.com'],
    href: 'mailto:info@hafenkirche.com',
    color: 'from-[#3060b0] to-[#4a80d0]',
  },
  {
    icon: Clock,
    title: 'Gottesdienst',
    lines: ['Sonntags · 10:30 Uhr'],
    color: 'from-[#20a060] to-[#30c080]',
  },
]

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:info@hafenkirche.com?subject=${encodeURIComponent(formData.subject || 'Kontaktanfrage')}&body=${encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
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
              Fragen, Anliegen, oder einfach mal reinschnuppern — schreib uns oder
              komm einfach sonntags um 10:30 Uhr vorbei.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <AnimatedChild>
                <h2 className="text-3xl font-black text-white mb-10">
                  So erreichst du uns
                </h2>
              </AnimatedChild>

              <StaggerContainer className="space-y-4 mb-12">
                {contactInfo.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-5 p-6 rounded-2xl glass-card hover:border-[#c9a84c]/40 transition-all duration-300 group">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                          {item.title}
                        </p>
                        {item.lines.map((line, i) =>
                          item.href ? (
                            <a
                              key={i}
                              href={item.href}
                              className="block text-white font-semibold hover:text-[#c9a84c] transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-white font-semibold">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social Media */}
              <AnimatedChild delay={0.3}>
                <div className="glass-card rounded-2xl p-8">
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
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20">
                  <p className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-2">
                    Mutmacher Zoom
                  </p>
                  <p className="text-gray-300 font-semibold mb-2">Dienstags · 19:00 Uhr</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lerne uns online kennen, stelle Fragen und bete mit uns —
                    ohne Verpflichtung, einfach zum Reinschnuppern.
                  </p>
                  <a
                    href="mailto:info@hafenkirche.com?subject=Mutmacher Zoom Zugangsdaten"
                    className="inline-block mt-4 text-[#c9a84c] text-sm font-semibold hover:underline"
                  >
                    Zugangsdaten anfragen →
                  </a>
                </div>
              </AnimatedChild>
            </div>

            {/* Contact Form */}
            <AnimatedChild delay={0.2} direction="left">
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-black text-white mb-2">Schreib uns</h2>
                <p className="text-gray-400 text-sm mb-8">
                  Wir antworten so schnell wie möglich.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c56d] flex items-center justify-center mb-6 shadow-xl shadow-[#c9a84c]/30">
                      <Check className="w-8 h-8 text-[#0a0f1e]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Vielen Dank!</h3>
                    <p className="text-gray-400">
                      Dein E-Mail-Programm öffnet sich jetzt. Wir freuen uns auf deine Nachricht!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 transition-all duration-200 text-sm"
                          placeholder="Dein Name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 transition-all duration-200 text-sm"
                          placeholder="deine@email.de"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Betreff
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 transition-all duration-200 text-sm"
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 transition-all duration-200 text-sm resize-none"
                        placeholder="Was liegt dir auf dem Herzen?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-button flex items-center justify-center gap-2 text-base py-4"
                    >
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </button>

                    <p className="text-gray-600 text-xs text-center">
                      * Pflichtfelder. Deine Daten werden nur zur Beantwortung deiner Anfrage
                      verwendet.
                    </p>
                  </form>
                )}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8!2d9.1315!3d53.8983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b3f28d2e0da7b1%3A0x0!2sSchleusenstra%C3%9Fe+10%2C+25541+Bronsb%C3%BCttel!5e0!3m2!1sde!2sde!4v1"
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
