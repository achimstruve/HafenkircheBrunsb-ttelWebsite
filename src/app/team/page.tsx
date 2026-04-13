import { Metadata } from 'next'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team — Hafenkirche Brunsbüttel',
  description: 'Das Team der Hafenkirche Brunsbüttel — Menschen mit Herz für die Region.',
}

const team = [
  {
    names: 'Achim & Nadine',
    role: 'Gemeindeleitung',
    initials: 'AN',
    description:
      'Achim ist Ingenieur, Nadine ist Lehrerin. Gemeinsam sind sie Eltern von Elisa und Nathanael. Sie leiten die Hafenkirche zusammen mit dem Ältestenteam und tragen das Herz für Brunsbüttel.',
    highlight: 'Gemeindegründer',
    color: 'from-[#c9a84c] to-[#e8c56d]',
  },
  {
    names: 'Elke & Jens',
    role: 'Ältestenteam',
    initials: 'EJ',
    description:
      'Eltern von 4 Kindern, mittlerweile stolze Großeltern von 7 Enkeln. Ehemalige Landwirte. Erfahrene Gemeindegründer und Mitgründer der evangelischen Freikirche Wilstermarsch.',
    highlight: 'Erfahrene Gemeindegründer',
    color: 'from-[#3060b0] to-[#4a80d0]',
  },
  {
    names: 'Thomas & Tatjana',
    role: 'Evangelisation',
    initials: 'TT',
    description:
      'Ihr Herz brennt dafür, Menschen mit der frohen Botschaft des Evangeliums zu erreichen. Mit Leidenschaft und Authentizität bezeugen sie Gottes Liebe im Alltag.',
    highlight: 'Leidenschaft fürs Evangelium',
    color: 'from-[#20a060] to-[#30c080]',
  },
  {
    names: 'Monika',
    role: 'Dienst & Gemeinschaft',
    initials: 'MO',
    description:
      'Monika ist leidenschaftlich darum bemüht, Gottes Liebe mit anderen zu teilen. Mit ihrem warmen Herz und ihrer offenen Art ist sie ein wichtiger Teil der Gemeinschaft.',
    highlight: 'Herzlich & einladend',
    color: 'from-[#e8455a] to-[#f07080]',
  },
  {
    names: 'Iris',
    role: 'Kinderarbeit',
    initials: 'IR',
    description:
      'Mutter von zwei Kindern, erfahren in der Kinderarbeit. Von der Freikirche Wilstermarsch ausgesandt, bringt sie großes Herz und Erfahrung für die Jüngsten der Gemeinde mit.',
    highlight: 'Kinder & Familie',
    color: 'from-[#8040c0] to-[#a060e0]',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />
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
              Wir sind keine perfekten Menschen — aber wir sind Menschen, die von einem
              guten Gott geliebt werden und diese Liebe weitergeben möchten.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">
          {/* Featured pair - full width */}
          <AnimatedChild className="mb-8">
            <div className="glass-card rounded-3xl p-10 md:p-14 hover:border-[#c9a84c]/40 transition-all duration-300 group">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${team[0].color} flex items-center justify-center shadow-2xl shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-3xl font-black text-[#0a0f1e]">{team[0].initials}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-black text-white">{team[0].names}</h2>
                    <p className="text-[#c9a84c] font-semibold text-sm mt-1">{team[0].role}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-medium">
                      {team[0].highlight}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">{team[0].description}</p>
                </div>
              </div>
            </div>
          </AnimatedChild>

          {/* Rest of team */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.slice(1).map((member) => (
              <StaggerItem key={member.names}>
                <div className="glass-card rounded-2xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300 group hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-lg font-black text-white">{member.initials}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.names}</h3>
                      <p className="text-[#c9a84c] text-sm font-medium mt-0.5">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-5">{member.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                    {member.highlight}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join the team teaser */}
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
                Egal ob du schon lange Christ bist oder gerade erst anfängst —
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
