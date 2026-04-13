import { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'
import { Mail, Heart, Shield, Copy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Geben | Hafenkirche Brunsbüttel',
  description:
    'Unterstütze die Arbeit der Hafenkirche Brunsbüttel mit einer Spende. Spenden sind steuerlich absetzbar.',
}

const supportedWork = [
  { label: 'Gottesdienste', icon: '✝️' },
  { label: 'Alphakurse', icon: '📚' },
  { label: 'Jüngerschaftsworkshops', icon: '🌱' },
  { label: 'Berufungsworkshops', icon: '🎯' },
  { label: 'Power Gebet', icon: '🙏' },
  { label: 'Konferenzen', icon: '🎤' },
  { label: 'Frauenfrühstücke', icon: '☕' },
  { label: 'Männerevents', icon: '⚡' },
  { label: 'Seniorenkaffees', icon: '🫖' },
  { label: 'Neue Testamente', icon: '📖' },
  { label: 'Open Doors', icon: '🌍' },
  { label: 'Missionare', icon: '✈️' },
]

export default function GebenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <AnimatedChild>
                <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                  Unterstütze uns
                </p>
              </AnimatedChild>
              <AnimatedChild delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95]">
                  Geben &
                  <br />
                  <span className="gold-gradient-text">Fördern.</span>
                </h1>
              </AnimatedChild>
              <AnimatedChild delay={0.25}>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Jede Spende ermöglicht es uns, die frohe Botschaft weiterzutragen und
                  Menschen in Brunsbüttel und der Region zu erreichen.
                </p>
              </AnimatedChild>
            </div>

            {/* Plant image */}
            <AnimatedChild delay={0.15} direction="left">
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[400px] h-[400px] md:w-[540px] md:h-[540px] drop-shadow-[0_0_48px_rgba(201,168,76,0.12)]">
                  <Image
                    src="/images/pflanze-geben.png"
                    alt="Wachstum durch Geben"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 400px, 540px"
                    priority
                  />
                </div>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedChild>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Bankverbindung
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Als eingetragener gemeinnütziger Verein (e.V.) sind Spenden an die
                  Hafenkirche Brunsbüttel steuerlich absetzbar. Auf Wunsch stellen wir
                  eine Spendenbescheinigung aus.
                </p>

                <div className="space-y-4">
                  {[
                    { label: 'Empfänger', value: 'Hafenkirche Brunsbüttel e.V.' },
                    { label: 'IBAN', value: 'DE02 2225 0020 0090 5681 71' },
                    { label: 'BIC', value: 'NOLADE21WHO' },
                    { label: 'Vereinsregister', value: 'VR 2125 PI' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-5 rounded-xl glass-card hover:border-[#c9a84c]/40 transition-all duration-200 group"
                    >
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-white font-mono font-semibold">{item.value}</p>
                      </div>
                      <Copy className="w-4 h-4 text-gray-600 group-hover:text-[#c9a84c] transition-colors duration-200" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex gap-3">
                  <Mail className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      Spendenbescheinigung anfordern
                    </p>
                    <p className="text-gray-400 text-sm">
                      Schreib uns einfach eine E-Mail an{' '}
                      <a
                        href="mailto:info@hafenkirche.com"
                        className="text-[#c9a84c] hover:underline"
                      >
                        info@hafenkirche.com
                      </a>{' '}
                      mit deiner Postadresse.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedChild>

            <AnimatedChild delay={0.2}>
              <div className="space-y-6">
                {/* Tax deductible badge */}
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/30 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#c9a84c]" />
                    </div>
                    <h3 className="text-white font-bold text-xl">Steuerlich absetzbar</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Die Hafenkirche Brunsbüttel e.V. ist als gemeinnützig anerkannt.
                    Spenden können steuerlich geltend gemacht werden.
                  </p>
                </div>

                {/* What donations support */}
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3060b0]/30 to-[#3060b0]/10 border border-[#3060b0]/30 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-[#4a80d0]" />
                    </div>
                    <h3 className="text-white font-bold text-xl">Wofür deine Spende wirkt</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {supportedWork.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-sm text-gray-400 py-1"
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Giving philosophy */}
      <section className="py-24 bg-[#060c18]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedChild>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Geben aus Freude
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                Wir glauben an freiwiliges und fröhliches Geben, nicht aus Pflicht, sondern
                aus der Dankbarkeit heraus, was Gott uns geschenkt hat.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Jede Unterstützung, ob groß oder klein, hilft uns dabei, die Arbeit in
                Brunsbüttel und der Region weiterzuführen.
              </p>
            </AnimatedChild>
          </div>
        </div>
      </section>
    </>
  )
}
