'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRef, useState, useCallback } from 'react'
import {

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
import { type LightboxImage } from '@/components/Lightbox'

const Lightbox = dynamic(() => import('@/components/Lightbox'), { ssr: false })

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
    color: 'from-[#EBD532] to-[#f4e06b]',
    photo: '/images/achim-predigt.jpg',
    cta: null as null | { label: string; href: string },
  },
  {
    title: 'Power Gebet',
    day: 'Donnerstag',
    time: '19:00 Uhr',
    icon: Heart,
    description: 'Im Gebet füreinander eintreten und Gott begegnen.',
    color: 'from-[#EBD532] to-[#f4e06b]',
    photo: '/images/gebet-im-gottesdienst.jpg',
    cta: null as null | { label: string; href: string },
  },
  {
    title: 'Mutmacher Zoom',
    day: 'Dienstag',
    time: '19:00 Uhr',
    icon: Users,
    description: 'Einfach online reinschnuppern, Fragen stellen, beten — ohne Verpflichtung.',
    color: 'from-[#EBD532] to-[#f4e06b]',
    photo: '/images/worship-microphone.jpg',
    cta: { label: 'Meeting beitreten', href: '/mutmacher' },
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


  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative z-[1] min-h-screen pt-20 md:pt-24 flex items-center justify-center overflow-hidden bg-[#dfe8f5]"
      >
        {/* Static background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hero background photo */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-worship.webp"
              alt=""
              fill
              className="object-cover object-center opacity-28"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-[#dfe8f5]/55" />

          {/* Radial gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(235,213,50,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(37,74,138,0.16),transparent)]" />

        </div>


        <div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Logo Icon */}
          <div
            className="flex justify-center mb-8 hero-anim-logo"
          >
            <div className="relative w-28 h-28">
              <Image
                src="/logo-icon.webp"
                alt="Hafenkirche Brunsbüttel"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <p
            className="text-[#0d1526] text-sm font-semibold tracking-[0.3em] uppercase mb-6 hero-anim-tagline"
          >
            Lebendige Kirche · Brunsbüttel
          </p>

          {/* Main heading */}
          <h1
            className="text-6xl md:text-8xl lg:text-[104px] font-black text-[#0E395B] leading-[0.9] tracking-tight mb-8 hero-anim-heading"
          >
            Freiheit
            <br />
            <span className="gold-gradient-text">Leben.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-[#345278] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 hero-anim-subtext"
          >
            Eine lebendige Gemeinde für Brunsbüttel, Dithmarschen und den Norden,
            verwurzelt in Gottes Liebe, fokussiert auf Jesus und ausgerichtet auf
            die Menschen dieser Region.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center hero-anim-cta"
          >
            <Link href="/vision" className="gold-button text-base">
              Unsere Vision
            </Link>
            <Link href="/kontakt" className="outline-button text-base">
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Location badge */}
          <div
            className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#3f5f86] text-sm hero-anim-location"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0d1526]" />
            Schleusenstraße 10 · 25541 Brunsbüttel
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0d1526] text-xs tracking-widest uppercase hero-anim-scroll"
        >
          <span>Scroll</span>
          <div>
            <ChevronDown className="w-5 h-5 text-[#0d1526]" />
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="relative z-[1] py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-16">
              <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Regelmäßige Treffen
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E395B] mb-6">
                Wann wir uns treffen
              </h2>
              <p className="text-[#3f5f86] text-lg max-w-xl mx-auto">
                Komm einfach vorbei, wir freuen uns auf dich!
              </p>
            </div>
          </AnimatedChild>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <div className="glass-card rounded-2xl overflow-hidden hover:border-[#EBD532]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
                  {event.photo ? (
                    <div className="relative h-64 overflow-hidden shrink-0">
                      <Image
                        src={event.photo}
                        alt={event.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-8 flex flex-col flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <event.icon className="w-6 h-6 text-[#0E395B]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0E395B] mb-2">{event.title}</h3>
                    <p className="text-[#3f5f86] text-sm mb-4 leading-relaxed flex-1">{event.description}</p>
                    {event.cta && (
                      <a
                        href={event.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-[#0d1526] hover:underline"
                      >
                        {event.cta.label} →
                      </a>
                    )}
                    <div className="flex items-center gap-4 pt-5 border-t border-[#0E395B]/10">
                      <div className="flex items-center gap-1.5 text-[#3f5f86] text-sm">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      {!event.cta && (
                        <a
                          href="#standort"
                          className="ml-auto flex items-center gap-1 text-xs text-[#0d1526] hover:text-[#c9a84c] transition-colors duration-200"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          Standort
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>


        </div>
      </section>

      {/* ─── VISION TEASER ─── */}
      <section className="relative z-[1] py-24 bg-[#dfe8f5] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(235,213,50,0.07),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedChild direction="right">
              <div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#EBD532] to-transparent mb-8" />
                <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
                  Unsere Vision
                </p>
                <blockquote className="text-2xl md:text-3xl text-[#0E395B] leading-relaxed font-light italic mb-8">
                  „Unser Herz ist es, Jesu Herz für Brunsbüttel, Dithmarschen und den Norden
                  Deutschlands zu leben."
                </blockquote>
                <p className="text-[#3f5f86] text-lg leading-relaxed mb-10">
                  Wir glauben, dass die Liebe Gottes das Leben von Menschen verändern kann,
                  hier in der Hafenstadt an der Elbe, mitten im Alltag.
                </p>
                <Link
                  href="/vision"
                  className="inline-flex items-center gap-2 text-[#0d1526] font-semibold hover:gap-4 transition-all duration-300 text-lg"
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
      <section className="relative z-[1] py-24 bg-[#c8d7ea]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-16">
              <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Was uns trägt
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E395B] mb-6">
                Unsere Werte
              </h2>
            </div>
          </AnimatedChild>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuesPreview.map((value) => (
              <StaggerItem key={value.title}>
                <div className="relative p-7 rounded-2xl bg-[#d4e0f0] border border-[#EBD532]/15 hover:border-[#EBD532]/40 transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EBD532]/0 to-[#EBD532]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-3xl mb-5">{value.icon}</div>
                  <h3 className="text-[#0E395B] font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-[#3f5f86] text-sm leading-relaxed">{value.text}</p>
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
              </Link>
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── PHOTO GALLERY: Gemeindeleben ─── */}
      <section className="relative z-[1] py-24 bg-[#dfe8f5]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-12">
              <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Einblicke</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E395B]">Unser Gemeindeleben</h2>
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
                <div key={src} className="relative rounded-xl overflow-hidden bg-[#d4e0f0] border border-[#0E395B]/12">
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
                  <p className="px-4 py-2 text-[#3f5f86] text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── PREDIGTEN / YOUTUBE ─── */}
      <section className="relative z-[1] py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-10">
              <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                YouTube
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E395B] mb-4">
                Aktuelle Predigten
              </h2>
              <p className="text-[#3f5f86] text-lg max-w-xl mx-auto">
                Schau dir unsere neuesten Predigten auf YouTube an.
              </p>
            </div>
          </AnimatedChild>

          <AnimatedChild delay={0.15}>
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UUf1R60OoKtLv1zqIwMq_sVg&rel=0"
                  title="Hafenkirche Brunsbüttel Predigten"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
          loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </AnimatedChild>

          <AnimatedChild delay={0.25}>
            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/@hafenkirchebrunsbuttel5266"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center outline-button"
              >
                Alle Videos auf YouTube
              </a>
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── TEAM TEASER ─── */}
      <section className="relative z-[1] py-24 bg-[#dfe8f5]">
        <div className="container-max max-w-2xl mx-auto text-center">
          <AnimatedChild>
            <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Wer wir sind
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0E395B] mb-7 leading-tight">
              Kinder Gottes,
              <br />
              <span className="gold-gradient-text">geliebt vom Vater.</span>
            </h2>
            <p className="text-[#3f5f86] text-lg leading-relaxed mb-10">
              Wir sind unterwegs mit Jesus und lernen gemeinsam, Glauben im Alltag zu leben.
            </p>
            <Link href="/team" className="gold-button inline-flex items-center whitespace-nowrap">
              Das Team kennenlernen
            </Link>
          </AnimatedChild>
        </div>
      </section>

      {/* ─── MAP & LOCATION ─── */}
      <section id="standort" className="relative z-[1] py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-12">
              <p className="text-[#0d1526] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Wo wir sind
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E395B] mb-6">
                Komm vorbei
              </h2>
              <p className="text-[#3f5f86] text-lg max-w-xl mx-auto">
                Du findest uns in Brunsbüttel, mitten in der Stadt, nah an den Menschen.
              </p>
            </div>
          </AnimatedChild>

          <AnimatedChild delay={0.15}>
            <div className="relative h-96 rounded-2xl overflow-hidden border border-[#EBD532]/20 shadow-xl shadow-black/40 mb-4">
              <Image
                src="/images/church-building.jpg"
                alt="Hafenkirche Brunsbüttel Gebäude"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/50 to-transparent" />
              <div className="absolute bottom-4 left-5 text-[#0E395B]">
                <p className="font-bold text-sm">Hafenkirche Brunsbüttel</p>
                <p className="text-[#345278] text-xs">Schleusenstraße 10</p>
              </div>
            </div>
          </AnimatedChild>

          <AnimatedChild delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-[#EBD532]/20 shadow-2xl shadow-black/40">
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
                <MapPin className="w-5 h-5 text-[#0d1526]" />
                <div>
                  <p className="text-[#0E395B] font-semibold text-sm">Adresse</p>
                  <p className="text-[#3f5f86] text-sm">Schleusenstraße 10, 25541 Brunsbüttel</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card">
                <Mail className="w-5 h-5 text-[#0d1526]" />
                <div>
                  <p className="text-[#0E395B] font-semibold text-sm">E-Mail</p>
                  <a
                    href="mailto:info@hafenkirche.com"
                    className="text-[#3f5f86] text-sm hover:text-[#c9a84c] transition-colors"
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
      <section className="relative z-[1] py-32 bg-[#dfe8f5] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(235,213,50,0.08),transparent)] pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimatedChild>
            <div className="relative w-16 h-16 mx-auto mb-8">
              <Image src="/logo-icon.webp" alt="Hafenkirche Brunsbüttel" fill className="object-contain" />
            </div>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black text-[#0E395B] mb-8 leading-tight">
              Du bist
              <br />
              <span className="gold-gradient-text">herzlich willkommen.</span>
            </h2>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-[#3f5f86] text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Egal wer du bist, wo du herkommst oder was dich beschäftigt:
              Bei uns gibt es Platz für dich.
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-anim-cta">
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
