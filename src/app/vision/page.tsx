import { Metadata } from 'next'
import Image from 'next/image'
import { Compass, Heart, Globe, Users } from 'lucide-react'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Vision | Hafenkirche Brunsbüttel',
  description:
    'Unsere Vision: Jesu Herz für Brunsbüttel, Dithmarschen und den Norden Deutschlands zu leben.',
}

const pillars = [
  {
    icon: Heart,
    title: 'Beziehung zum Vater',
    text: 'Unsere beschädigte Beziehung zu Gott kann durch Jesus Christus vollständig wiederhergestellt werden, ein Geschenk, das kein Geld der Welt kaufen kann.',
  },
  {
    icon: Globe,
    title: 'Einfluss in der Region',
    text: 'Brunsbüttel an der Mündung des Nord-Ostsee-Kanals zur Elbe, eine bedeutende Stadt, in der Gottes Liebe sichtbar werden soll.',
  },
  {
    icon: Users,
    title: 'Gemeinschaft & Gesellschaft',
    text: 'Wir engagieren uns gesellschaftlich und sind ein Segen für die Menschen in Stadt und Region: in Sport, Beruf, Schule und Familie.',
  },
  {
    icon: Compass,
    title: 'Lebendige Gemeinde',
    text: 'Die Gründung einer lebendigen Gemeinde in dieser bedeutenden Hafen- und Schleusenstadt ist ein großes Privileg und Auftrag.',
  },
]

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,168,76,0.12),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimatedChild>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Wer wir sind
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95] max-w-3xl">
              Unsere
              <br />
              <span className="gold-gradient-text">Vision.</span>
            </h1>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
              Jesu Herz für Brunsbüttel, Dithmarschen und den Norden Deutschlands zu leben,
              das ist der Kern dessen, was uns antreibt.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Harbour quote */}
      <section className="py-20 bg-[#0d1526] border-t border-white/5">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedChild>
              <div className="relative pl-8 md:pl-12 border-l-4 border-[#c9a84c]">
                {/* Anchor icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-9 h-9 shrink-0 opacity-80">
                    <Image src="/logo-icon.png" alt="" fill className="object-contain" />
                  </div>
                  <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase">
                    Was unser Name bedeutet
                  </span>
                </div>
                {/* Decorative opening quote */}
                <span
                  className="absolute -top-4 left-6 md:left-10 text-[7rem] leading-none text-[#c9a84c]/15 font-serif select-none pointer-events-none"
                  aria-hidden="true"
                >
                  „
                </span>
                <blockquote className="text-gray-200 text-lg md:text-2xl leading-[1.85] font-light italic relative z-10">
                  Wir sind als Kirche ein Hafen, in dem jeder anlegen darf, um seine alte Ladung
                  an Jesus abzugeben, um dann mit Gottes leichter Ladung — der Liebe, Befreiung,
                  Heilung und Befähigung — ins Leben zu segeln und anderen davon weiterzugeben.
                </blockquote>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Main Vision Text */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedChild>
              <div className="glass-card rounded-3xl p-10 md:p-16 mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative w-10 h-10 shrink-0">
                    <Image
                      src="/logo-icon.png"
                      alt="Hafenkirche Brunsbüttel"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#c9a84c]/40 to-transparent" />
                </div>
                <p className="text-gray-200 text-lg md:text-xl leading-[1.9] font-light">
                  Brunsbüttel liegt an der Mündung des Nord-Ostsee-Kanals zur Elbe im Westen
                  Schleswig-Holsteins, nahe der Nordseeküste. Die Gründung einer lebendigen
                  Gemeinde in dieser bedeutenden Hafen- und Schleusenstadt ist dabei ein
                  großes Privileg.
                </p>
              </div>
            </AnimatedChild>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <AnimatedChild delay={0.1}>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Wir glauben, dass sich Jesu Herz unter anderem durch das{' '}
                    <span className="text-[#c9a84c] font-semibold">Weitersagen</span> und das{' '}
                    <span className="text-[#c9a84c] font-semibold">Vorleben</span> seiner frohen
                    Botschaft zeigt.
                  </p>
                  <p>
                    Diese Botschaft spricht davon, dass unsere beschädigte Beziehung zu unserem
                    Vater im Himmel wieder hergestellt werden kann.
                  </p>
                </div>
              </AnimatedChild>
              <AnimatedChild delay={0.2}>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Diese Beziehung kann mit keinem Geld der Welt und auch mit keiner guten Tat
                    von unserer Seite her erkauft werden. Einzig und allein der Glaube an{' '}
                    <span className="text-[#c9a84c] font-semibold">Jesus Christus</span> und sein
                    Erlösungswerk am Kreuz führt uns zurück in die Beziehung zum Vater.
                  </p>
                  <p>
                    Jesus Christus ist nach seinem Tod am Kreuz wieder auferstanden und lebt
                    heute durch seinen Heiligen Geist in uns.
                  </p>
                </div>
              </AnimatedChild>
            </div>

            <AnimatedChild delay={0.3}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
                  „Wir lieben es, aus dieser Beziehung heraus ein Segen für die Menschen
                  in dieser Stadt und der Region zu sein."
                </p>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[#060c18]">
        <div className="container-max">
          <AnimatedChild>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Unsere Grundlagen
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Was uns trägt
              </h2>
            </div>
          </AnimatedChild>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="flex gap-6 p-8 rounded-2xl glass-card hover:border-[#c9a84c]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-6 h-6 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0f1e] text-center">
        <div className="container-max">
          <AnimatedChild>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Teil dieser Vision werden?
            </h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10">
              Wir freuen uns, dich kennenzulernen. Komm einfach zu einem unserer
              Gottesdienste oder schreib uns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt" className="gold-button text-lg">
                Kontakt aufnehmen
              </a>
              <a href="/werte" className="outline-button text-lg">
                Unsere Werte
              </a>
            </div>
          </AnimatedChild>
        </div>
      </section>
    </>
  )
}
