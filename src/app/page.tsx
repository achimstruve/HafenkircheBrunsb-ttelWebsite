'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'
import {

  Calendar,
  Clock,
  ChevronDown,
  Heart,
  Star,
  Users,
  ArrowRight,
  MapPin,
  Mail,
} from 'lucide-react'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import ParticleBackground from '@/components/ParticleBackground'
import Lightbox, { type LightboxImage } from '@/components/Lightbox'

const visionImages: LightboxImage[] = [
  { src: '/images/kreuz-gebet.jpg', alt: 'Gebet' },
  { src: '/images/taufe-freude.jpg', alt: 'Taufe' },
  { src: '/images/gebet-gottesdienst.jpg', alt: 'Gottesdienst' },
  { src: '/images/lobpreisband-singt.jpg', alt: 'Lobpreis' },
]

const galleryImages: LightboxImage[] = [
  { src: '/images/young-ladies-church.jpg', alt: 'Junge Frauen vor der Kirche' },
  { src: '/images/lounge-kaffee.jpg', alt: 'Kaffee & Gemeinschaft' },
  { src: '/images/kindergottesdienst.jpg', alt: 'Kindergottesdienst' },
  { src: '/images/jesus-gang.jpg', alt: 'Junge Menschen' },
  { src: '/images/wacken-gebet.jpg', alt: 'Wackenmission — Bibeln verteilen' },
  { src: '/images/hochzeit.jpg', alt: 'Hochzeit' },
  { src: '/images/worship-gitarrist.jpg', alt: 'Worship' },
  { src: '/images/gebet-vorne.jpg', alt: 'Gebet für Jung und Alt' },
  { src: '/images/lounge.jpg', alt: 'Lounge Buffet' },
  { src: '/images/bibel.jpg', alt: 'Bibel lesen mit markierten Versen' },
  { src: '/images/achim-predigt-2.jpg', alt: 'Dr. Achim Struve predigt' },
  { src: '/images/taufe-1.jpg', alt: 'Taufe' },
  { src: '/images/young-people.jpg', alt: 'Junge Menschen sitzen und lachen' },
  { src: '/images/young-people-cross.jpg', alt: 'Junge Menschen feiern vor dem Kreuz' },
  { src: '/images/kinder-bibel.jpg', alt: 'Gebet für ein Kind' },
  { src: '/images/gebet-gottesdienst-2.jpg', alt: 'Gebet im Gottesdienst' },
  { src: '/images/lobpreisband.jpg', alt: 'Gebetsabend Lobpreisband' },
]

const events = [
  {
    title: 'Gottesdienst',
    day: 'Sonntag',
    time: '10:30 Uhr',
    icon: Star,
    description: 'Gemeinsam feiern, anbeten und Gottes Wort hören.',
    color: 'from-[#c9a84c] to-[#e8c56d]',
    photo: '/images/achim-predigt.jpg',
  },
  {
    title: 'Power Gebet',
    day: 'Donnerstag',
    time: '19:00 Uhr',
    icon: Heart,
    description: 'Im Gebet füreinander eintreten und Gott begegnen.',
    color: 'from-[#3060b0] to-[#4a80d0]',
    photo: '/images/lobpreisband.jpg',
  },
  {
    title: 'Mutmacher Zoom',
    day: 'Dienstag',
    time: '19:00 Uhr',
    icon: Users,
    description: 'Online dabei sein: Fragen stellen, beten, uns kennenlernen.',
    color: 'from-[#254a8a] to-[#3060b0]',
    photo: '/images/kreuz-gebet.jpg',
  },
]

const valuesPreview = [
  {
    icon: '✝️',
    title: 'Familie des Vaters',
    text: 'Wir sind eine Familie, deren Identität die Kindschaft Gottes ist.',
  },
  {
    icon: '❤️',
    title: 'Geliebt',
    text: 'Wir sind von Gott, dem Vater, bedingungslos geliebt.',
  },
  {
    icon: '🌟',
    title: 'Relevant',
    text: 'Wir leben ein für die Gesellschaft und die Ewigkeit relevantes Leben.',
  },
  {
    icon: '🎉',
    title: 'Feiern',
    text: 'Weil wir uns an unserem großartigen Vater freuen, lieben wir es, Ihn zu ehren.',
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)
  const [visionIndex, setVisionIndex] = useState<number | null>(null)
  const closeGallery = useCallback(() => setGalleryIndex(null), [])
  const closeVision = useCallback(() => setVisionIndex(null), [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* Fixed full-viewport particle background — sits behind all content */}
      <ParticleBackground />

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative z-[1] min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e]"
      >
        {/* Animated background layers */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Church building photo — very subtle */}
          <div className="absolute inset-0">
            <Image
              src="/images/church-building.jpg"
              alt=""
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
          {/* Radial gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(37,74,138,0.2),transparent)]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#c9a84c]/40"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Logo Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-28 h-28 drop-shadow-[0_0_24px_rgba(201,168,76,0.5)]">
              <Image
                src="/logo-icon.png"
                alt="Hafenkirche Brunsbüttel"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Lebendige Kirche · Brunsbüttel
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[104px] font-black text-white leading-[0.9] tracking-tight mb-8"
          >
            Freiheit
            <br />
            <span className="gold-gradient-text">Leben.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Eine Gemeinde für Brunsbüttel, Dithmarschen und den Norden, verwurzelt
            in Gottes Liebe, ausgerichtet auf die Menschen dieser Region.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/vision" className="gold-button text-base">
              Unsere Vision
            </Link>
            <Link href="/kontakt" className="outline-button text-base">
              Kontakt aufnehmen
            </Link>
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
            Schleusenstraße 10 · 25541 Brunsbüttel
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-[#c9a84c]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="relative z-[1] py-24 bg-[#0d1526]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Regelmäßige Treffen
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Wann wir uns treffen
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Komm einfach vorbei, wir freuen uns auf dich!
              </p>
            </div>
          </AnimatedChild>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <div className="glass-card rounded-2xl overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
                  {event.photo ? (
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <Image
                        src={event.photo}
                        alt={event.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-8 flex flex-col flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">{event.description}</p>
                    <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-[#c9a84c] text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        {event.day}
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedChild delay={0.4}>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                <Users className="w-4 h-4 text-[#c9a84c]" />
                <p className="text-gray-300 text-sm">
                  <span className="text-[#c9a84c] font-semibold">Mutmacher Zoom</span>
                  {' '}online reinschnuppern, Fragen stellen, beten. Dienstags 19 Uhr.
                </p>
              </div>
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── VISION TEASER ─── */}
      <section className="relative z-[1] py-24 bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(201,168,76,0.07),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedChild direction="right">
              <div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#c9a84c] to-transparent mb-8" />
                <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
                  Unsere Vision
                </p>
                <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light italic mb-8">
                  „Unser Herz ist es, Jesu Herz für Brunsbüttel, Dithmarschen und den Norden
                  Deutschlands zu leben."
                </blockquote>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Wir glauben, dass die Liebe Gottes das Leben von Menschen verändern kann,
                  hier in der Hafenstadt an der Elbe, mitten im Alltag.
                </p>
                <Link
                  href="/vision"
                  className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-4 transition-all duration-300 text-lg"
                >
                  Mehr über unsere Vision
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedChild>
            <AnimatedChild direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {visionImages.map(({ src, alt }, i) => (
                  <div
                    key={src}
                    className="relative h-36 rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setVisionIndex(i)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Bild vergrößern: ${alt}`}
                    onKeyDown={(e) => e.key === 'Enter' && setVisionIndex(i)}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* ─── VALUES PREVIEW ─── */}
      <section className="relative z-[1] py-24 bg-[#060c18]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Was uns trägt
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Unsere Werte
              </h2>
            </div>
          </AnimatedChild>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuesPreview.map((value) => (
              <StaggerItem key={value.title}>
                <div className="relative p-7 rounded-2xl bg-[#0d1526] border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/0 to-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-3xl mb-5">{value.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedChild delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                href="/werte"
                className="inline-flex items-center gap-2 outline-button"
              >
                Alle 7 Werte entdecken
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── PHOTO GALLERY: Gemeindeleben ─── */}
      <section className="relative z-[1] py-24 bg-[#0a0f1e]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-12">
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Einblicke</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Unser Gemeindeleben</h2>
            </div>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {/* tallSet: indices in galleryImages that get row-span-2 */}
              {galleryImages.map(({ src, alt }, i) => {
                const tall = [0, 3, 10, 13].includes(i)
                return (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-lg cursor-pointer group ${tall ? 'row-span-2' : ''}`}
                    style={{ height: tall ? '19rem' : '9rem' }}
                    onClick={() => setGalleryIndex(i)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Bild vergrößern: ${alt}`}
                    onKeyDown={(e) => e.key === 'Enter' && setGalleryIndex(i)}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                )
              })}
            </div>
          </AnimatedChild>

          {/* Video clips */}
          <AnimatedChild delay={0.2}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { src: '/videos/jesus-starb-fuer.mp4', label: '„Jesus starb für…"' },
                { src: '/videos/licht-kette.mp4', label: 'Das Licht Jesu weitergeben' },
              ].map(({ src, label }) => (
                <div key={src} className="relative rounded-xl overflow-hidden bg-[#0d1526] border border-white/8">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full max-h-64 object-cover"
                    aria-label={label}
                  />
                  <p className="px-4 py-2 text-gray-400 text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── TEAM TEASER ─── */}
      <section className="relative z-[1] py-24 bg-[#0a0f1e]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedChild direction="right">
              <div>
                <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                  Wer wir sind
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-7 leading-tight">
                  Menschen mit
                  <br />
                  <span className="gold-gradient-text">echtem Herz.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Familien, Handwerker, Lehrer, Rentner: Wir kommen aus ganz verschiedenen
                  Lebenswelten. Was uns verbindet, ist die Liebe zu Gott und zu den Menschen
                  in dieser Region.
                </p>
                <Link href="/team" className="gold-button inline-flex items-center gap-2">
                  Das Team kennenlernen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedChild>

            <AnimatedChild direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Achim & Nadine', role: 'Gemeindeleitung', photo: '/images/team/achim-nadine.jpg' },
                  { name: 'Elke & Jens', role: 'Ältestenteam', photo: '/images/team/elke-jens.jpg' },
                  { name: 'Thomas & Tatjana', role: 'Evangelisation', photo: '/images/team/thomas-tatjana.jpg' },
                  { name: 'Iris & Monika', role: 'Dienst & Kinder', photo: '/images/team/iris.jpg' },
                ].map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    className="glass-card rounded-xl overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/60 to-transparent" />
                    </div>
                    <div className="p-3">
                      <p className="text-white font-semibold text-sm">{person.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{person.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* ─── MAP & LOCATION ─── */}
      <section className="relative z-[1] py-24 bg-[#0d1526]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-12">
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Wo wir sind
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Komm vorbei
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Du findest uns in Brunsbüttel, mitten in der Stadt, nah an den Menschen.
              </p>
            </div>
          </AnimatedChild>

          <AnimatedChild delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-[#c9a84c]/20 shadow-2xl shadow-black/40">
              <iframe
                src="https://maps.google.com/maps?q=Schleusenstra%C3%9Fe+10%2C+25541+Brunsbüttel&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hafenkirche Brunsbüttel"
              />
            </div>
          </AnimatedChild>

          <AnimatedChild delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card">
                <MapPin className="w-5 h-5 text-[#c9a84c]" />
                <div>
                  <p className="text-white font-semibold text-sm">Adresse</p>
                  <p className="text-gray-400 text-sm">Schleusenstraße 10, 25541 Brunsbüttel</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card">
                <Mail className="w-5 h-5 text-[#c9a84c]" />
                <div>
                  <p className="text-white font-semibold text-sm">E-Mail</p>
                  <a
                    href="mailto:info@hafenkirche.com"
                    className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    info@hafenkirche.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* Lightboxes */}
      <Lightbox images={galleryImages} currentIndex={galleryIndex} onClose={closeGallery} onNavigate={setGalleryIndex} />
      <Lightbox images={visionImages} currentIndex={visionIndex} onClose={closeVision} onNavigate={setVisionIndex} />

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-[1] py-32 bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,168,76,0.08),transparent)] pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimatedChild>
            <div className="relative w-16 h-16 mx-auto mb-8 drop-shadow-[0_0_12px_rgba(201,168,76,0.4)]">
              <Image src="/logo-icon.png" alt="Hafenkirche Brunsbüttel" fill className="object-contain" />
            </div>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Du bist
              <br />
              <span className="gold-gradient-text">herzlich willkommen.</span>
            </h2>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Egal wer du bist, wo du herkommst oder was dich beschäftigt:
              Bei uns gibt es Platz für dich.
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="gold-button text-lg py-4 px-8">
                Kontakt aufnehmen
              </Link>
              <Link href="/vision" className="outline-button text-lg py-4 px-8">
                Mehr erfahren
              </Link>
            </div>
          </AnimatedChild>
        </div>
      </section>
    </>
  )
}
