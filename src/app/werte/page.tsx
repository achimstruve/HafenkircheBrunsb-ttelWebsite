import { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Werte | Hafenkirche Brunsbüttel',
  description: 'Die 7 Werte, die das Leben der Hafenkirche Brunsbüttel prägen.',
}

const values = [
  {
    number: '01',
    icon: '🏠',
    title: 'Familie des Vaters',
    text: 'Wir sind eine Familie, deren Identität die Kindschaft Gottes ist. Als Kinder eines guten Vaters leben wir in Geborgenheit, Zugehörigkeit und Liebe.',
    color: 'from-[#EBD532] to-[#f4e06b]',
  },
  {
    number: '02',
    icon: '❤️',
    title: 'Geliebt',
    text: 'Wir sind von Gott, dem Vater, bedingungslos geliebt. Diese Liebe ist nicht verdient, sondern geschenkt, und sie verändert alles.',
    color: 'from-[#e8455a] to-[#f07080]',
  },
  {
    number: '03',
    icon: '✝️',
    title: 'Gerettet',
    text: 'Jesus Christus ist der Sohn Gottes und hat sein Leben zur Sühnung unserer Schuld am Kreuz gegeben. Dadurch haben wir für immer Zugang zum Vater.',
    color: 'from-[#3060b0] to-[#4a80d0]',
  },
  {
    number: '04',
    icon: '🌍',
    title: 'Relevant',
    text: 'Wir leben ein für die Gesellschaft und die Ewigkeit relevantes Leben. Egal ob Sport, Arbeitsplatz, Schule, Kino, Party, Hobby oder Familie.',
    color: 'from-[#20a060] to-[#30c080]',
  },
  {
    number: '05',
    icon: '🎉',
    title: 'Feiern',
    text: 'Weil wir uns an unserem großartigen Vater freuen, lieben wir es, Ihn zu ehren und zu feiern. Gottesdienst ist Freude, kein Pflichtprogramm.',
    color: 'from-[#8040c0] to-[#a060e0]',
  },
  {
    number: '06',
    icon: '💪',
    title: 'Ermutigen',
    text: 'Wir feuern uns an und ermutigen uns gegenseitig auf unserer Reise mit Gott. Gemeinsam kommen wir weiter als allein.',
    color: 'from-[#EBD532] to-[#f4e06b]',
  },
  {
    number: '07',
    icon: '🌊',
    title: 'Leben',
    text: 'Wir lieben das Leben und sind füreinander da. In guten wie in schwierigen Zeiten: Gemeinschaft trägt.',
    color: 'from-[#0080c0] to-[#20a8e0]',
  },
]

export default function WertePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#dfe8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(235,213,50,0.1),transparent)] pointer-events-none" />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <AnimatedChild>
                <p className="text-[#c45aa0] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                  Was uns prägt
                </p>
              </AnimatedChild>
              <AnimatedChild delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-black text-[#0E395B] mb-8 leading-[0.95]">
                  Unsere
                  <br />
                  <span className="gold-gradient-text">7 Werte.</span>
                </h1>
              </AnimatedChild>
              <AnimatedChild delay={0.25}>
                <p className="text-[#345278] text-xl max-w-2xl leading-relaxed">
                  Diese Werte sind keine Regeln, sie sind das, was unser Leben und unsere
                  Gemeinschaft von innen heraus prägt.
                </p>
              </AnimatedChild>
            </div>

            {/* Symbolbild */}
            <AnimatedChild delay={0.15} direction="left">
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[360px] h-[240px] md:w-[520px] md:h-[340px]">
                  <Image
                    src="/images/werte-schatz.png"
                    alt="Symbolbild Werte"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 360px, 520px"

                  />
                </div>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.slice(0, 6).map((value) => (
              <StaggerItem key={value.number}>
                <div className="relative rounded-2xl glass-card p-8 hover:border-[#EBD532]/40 transition-all duration-300 group hover:-translate-y-2 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300 -translate-y-8 translate-x-8"
                    style={{ background: `linear-gradient(135deg, ${value.color.includes('c9a84c') ? '#EBD532' : value.color.includes('e8455a') ? '#e8455a' : value.color.includes('3060b0') ? '#3060b0' : value.color.includes('20a060') ? '#20a060' : value.color.includes('8040c0') ? '#8040c0' : '#0080c0'}, transparent)` }}
                  />
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{value.icon}</div>
                    <span className="text-xs font-bold text-gray-600 tracking-widest">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0E395B] mb-4">{value.title}</h3>
                  <p className="text-[#3f5f86] leading-relaxed">{value.text}</p>
                  <div className={`mt-6 h-0.5 w-12 bg-gradient-to-r ${value.color} rounded-full group-hover:w-20 transition-all duration-500`} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Last value - full width featured */}
          <AnimatedChild delay={0.3} className="mt-6">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0080c0]/20 via-[#0a0f1e] to-[#0a0f1e]" />
              <div className="relative glass-card rounded-2xl p-10 md:p-14 hover:border-[#EBD532]/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl">{values[6].icon}</div>
                    <span className="text-xs font-bold text-gray-600 tracking-widest">
                      {values[6].number}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-black text-[#0E395B] mb-4">{values[6].title}</h3>
                    <p className="text-[#345278] text-lg leading-relaxed">{values[6].text}</p>
                    <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-[#0080c0] to-[#20a8e0] rounded-full group-hover:w-32 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedChild>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-24 bg-[#c8d7ea] text-center">
        <div className="container-max">
          <AnimatedChild>
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#EBD532] to-transparent mx-auto mb-12" />
              <p className="text-3xl md:text-4xl text-[#0E395B] font-light italic leading-relaxed mb-12">
                „Diese Werte sind nicht unser Ziel, sie sind unsere Antwort auf
                Gottes Liebe zu uns."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/team" className="gold-button">
                  Das Team kennenlernen
                </a>
                <a href="/kontakt" className="outline-button">
                  Fragen? Schreib uns!
                </a>
              </div>
            </div>
          </AnimatedChild>
        </div>
      </section>
    </>
  )
}
