import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team | Hafenkirche Brunsbüttel',
  description: 'Das Team der Hafenkirche Brunsbüttel: Menschen mit Herz für die Region.',
}

const team = [
  {
    names: 'Dr. Achim & Nadine Struve',
    role: 'Gemeindeleiter · Kinderdienstleitung',
    photo: '/images/team/achim-nadine.jpg',
    photoPosition: 'object-top',
    description:
      'Achim ist promovierter Ingenieur, Nadine ist Lehrerin und leitet den Kinderdienst. Gemeinsam sind sie Eltern von Elisa und Nathanael. Sie leiten die Hafenkirche zusammen mit dem Ältestenteam und tragen das Herz für Brunsbüttel.',
    highlight: 'Gemeindegründer',
  },
  {
    names: 'Elke & Jens Struve',
    role: 'Diakonin & Ältester · Alphakurse',
    photo: '/images/team/elke-jens.jpg',
    photoPosition: 'object-top',
    description:
      'Eltern von 4 Kindern, mittlerweile stolze Großeltern von 7 Enkeln. Ehemalige Landwirte. Erfahrene Gemeindegründer, Mitgründer der evangelischen Freikirche Wilstermarsch, und Leiter der Alphakurse.',
    highlight: 'Erfahrene Gemeindegründer',
  },
  {
    names: 'Thomas & Tatjana',
    role: 'Ältester Evangelisation · Kinderdienst',
    photo: '/images/team/thomas-tatjana.jpg',
    photoPosition: 'object-top',
    description:
      'Thomas ist Ältester mit Herz für Evangelisation. Tatjana ist leidenschaftliche Kinderdienstmitarbeiterin. Gemeinsam bezeugen sie Gottes Liebe im Alltag mit Leidenschaft und Authentizität.',
    highlight: 'Leidenschaft fürs Evangelium',
  },
  {
    names: 'Monika',
    role: 'Diakonin · Küchenteamleitung',
    photo: '/images/team/monika.jpg',
    photoPosition: 'object-top',
    description:
      'Monika ist Diakonin und leitet das Küchenteam. Mit ihrem warmen Herz und ihrer offenen Art sorgt sie für Gemeinschaft beim Kaffee und Kuchen und ist ein wichtiger Teil der Gemeinde.',
    highlight: 'Herzlich & einladend',
  },
  {
    names: 'Iris Moesker',
    role: 'Welcomedienst Leitung',
    photo: '/images/team/iris.jpg',
    photoPosition: 'object-[center_25%]',
    containerStyle: { aspectRatio: '2/3', minHeight: '400px', maxHeight: '600px' } as React.CSSProperties,
    description:
      'Iris leitet den Welcomedienst und sorgt dafür, dass sich jeder Besucher willkommen fühlt. Sie bringt ein großes Herz für Menschen und viel Erfahrung aus der Gemeindearbeit mit.',
    highlight: 'Willkommen & Gastfreundschaft',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />
        {/* Hero background photo */}
        <div className="absolute inset-0">
          <Image src="/images/young-people.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 to-[#0a0f1e]" />
        </div>
        <div className="container-max relative z-10">
          <AnimatedChild>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Die Menschen
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95]">
              Unser
              <br />
              <span className="gold-gradient-text">Team.</span>
            </h1>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
              Wir sind keine perfekten Menschen, aber wir sind Menschen, die von einem
              guten Gott geliebt werden und diese Liebe weitergeben möchten.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">

          {/* Featured — Achim & Nadine, full width */}
          <AnimatedChild className="mb-8">
            <div className="glass-card rounded-3xl overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 group">
              {/* Full-width photo — face clearly visible, no text on top */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7', minHeight: '320px' }}>
                <Image
                  src={team[0].photo}
                  alt={team[0].names}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="100vw"
                  priority
                />
              </div>
              {/* Content completely below photo */}
              <div className="p-8 md:p-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">
                  {team[0].highlight}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-1">{team[0].names}</h2>
                <p className="text-[#c9a84c] font-semibold text-sm mb-5">{team[0].role}</p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">{team[0].description}</p>
              </div>
            </div>
          </AnimatedChild>

          {/* Rest of team — 2-column grid, photo fully above text */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.slice(1).map((member) => (
              <StaggerItem key={member.names}>
                <div className="glass-card rounded-2xl overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
                  {/* Photo — no overlay text at all */}
                  <div
                    className="relative w-full overflow-hidden shrink-0"
                    style={'containerStyle' in member && member.containerStyle
                      ? member.containerStyle
                      : { aspectRatio: '3/4', minHeight: '320px', maxHeight: '520px' }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.names}
                      fill
                      className={`object-cover ${member.photoPosition} group-hover:scale-105 transition-transform duration-700`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Text fully below photo */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white">{member.names}</h3>
                    <p className="text-[#c9a84c] text-sm font-semibold mt-1 mb-4">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed flex-1">{member.description}</p>
                    <span className="inline-block mt-5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs w-fit">
                      {member.highlight}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Full-width photo break */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/images/young-people-cross.jpg"
          alt="Hafenkirche Gemeinschaft"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1e]/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-black italic text-center px-4">
            „Menschen, die Gottes Liebe weitergeben."
          </p>
        </div>
      </div>

      {/* Join the team */}
      <section className="py-24 bg-[#060c18]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedChild>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-8">
                <Heart className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Werde Teil des Teams
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Wir sind immer offen für Menschen, die mitgestalten möchten.
                Egal ob du schon lange Christ bist oder gerade erst anfängst:
                bei uns gibt es Platz für dich.
              </p>
              <a href="/kontakt" className="gold-button text-lg">
                Gespräch anfragen
              </a>
            </AnimatedChild>
          </div>
        </div>
      </section>
    </>
  )
}
