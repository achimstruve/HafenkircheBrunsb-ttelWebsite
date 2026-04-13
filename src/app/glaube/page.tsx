import { Metadata } from 'next'
import Image from 'next/image'
import { BookOpen, Cross, Wind } from 'lucide-react'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Glaube | Hafenkirche Brunsbüttel',
  description:
    'Was wir glauben: Die Grundlagen des Glaubens der Hafenkirche Brunsbüttel.',
}

const beliefs = [
  {
    icon: BookOpen,
    title: 'Die Bibel',
    subtitle: 'Gottes Wort als Fundament',
    text: 'Unser Glaube ist auf die Bibel gegründet. Die Bibel ist Gottes Wort und die Grundlage für unser Leben und unseren Glauben. Sie zeigt uns, wer Gott ist, wer wir sind und wie wir leben können.',
    image: '/images/glaube-bibel.png',
    imageAlt: 'Bibel',
  },
  {
    icon: Cross,
    title: 'Jesus Christus',
    subtitle: 'Das Evangelium',
    text: 'Wir glauben an das Evangelium von Jesus Christus. Jesus ist der Sohn Gottes, gestorben für unsere Sünden und auferstanden. Durch den Glauben an ihn haben wir Zugang zum Vater.',
    image: '/images/glaube-kreuz.png',
    imageAlt: 'Kreuz',
  },
  {
    icon: Wind,
    title: 'Der Heilige Geist',
    subtitle: 'Lebendig und wirksam heute',
    text: 'Wir glauben an das Wirken des Heiligen Geistes, so wie vor 2000 Jahren zur Zeit Jesu. Der Heilige Geist ist heute genauso lebendig und wirksam wie damals.',
    image: '/images/glaube-taube.png',
    imageAlt: 'Heiliger Geist Taube',
  },
]

export default function GlaubePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimatedChild>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Was wir glauben
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95]">
              Unser
              <br />
              <span className="gold-gradient-text">Glaube.</span>
            </h1>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
              Drei Grundlagen, auf denen alles aufbaut, was wir glauben und leben.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Belief Cards */}
      <section className="py-24 bg-[#0d1526]">
        <div className="container-max">
          <StaggerContainer className="space-y-12">
            {beliefs.map((belief, i) => {
              const Icon = belief.icon
              const isEven = i % 2 === 0
              return (
                <StaggerItem key={belief.title}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                    {/* Image */}
                    <div className={`flex items-center justify-center ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="relative w-full max-w-sm aspect-square drop-shadow-[0_0_40px_rgba(201,168,76,0.08)]">
                        <Image
                          src={belief.image}
                          alt={belief.imageAlt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 80vw, 40vw"
                          priority={i === 0}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className={`flex flex-col gap-6 ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/30 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#c9a84c]" />
                      </div>
                      <div>
                        <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                          {belief.subtitle}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                          {belief.title}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {belief.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-20 bg-[#060c18]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedChild>
              <div className="relative inline-block">
                <span
                  className="absolute -top-6 left-0 text-[6rem] leading-none text-[#c9a84c]/10 font-serif select-none pointer-events-none"
                  aria-hidden="true"
                >
                  „
                </span>
                <blockquote className="text-gray-200 text-xl md:text-2xl leading-[1.8] font-light italic relative z-10 px-8">
                  Denn so hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren gehen, sondern ewiges Leben haben.
                </blockquote>
              </div>
              <p className="text-[#c9a84c] text-sm font-semibold mt-6 tracking-wider">
                Johannes 3,16
              </p>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0f1e]">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedChild>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Fragen zum Glauben?
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Wir reden gerne mit dir. Komm einfach zu einem Gottesdienst oder schreib uns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/kontakt" className="gold-button text-lg">
                  Kontakt aufnehmen
                </a>
                <a href="/vision" className="outline-button text-lg">
                  Unsere Vision
                </a>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>
    </>
  )
}
