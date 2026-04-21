import { Metadata } from 'next'
import { Users, Clock, Calendar, Heart, Video, ArrowRight } from 'lucide-react'
import { AnimatedChild, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Mutmacher Zoom | Hafenkirche Brunsbüttel',
  description:
    'Der Mutmacher Zoom der Hafenkirche Brunsbüttel: Jeden Dienstag um 19:00 Uhr online reinschnuppern, Fragen stellen, beten — ohne Verpflichtung.',
}

const ZOOM_URL =
  'https://us02web.zoom.us/j/86582901445?pwd=TC9JNnV1Y3hiVjQxU3YxSmthMko2QT09'

const highlights = [
  {
    icon: Heart,
    title: 'Ohne Verpflichtung',
    text: 'Einfach reinschnuppern, zuhören, dich wohlfühlen — du musst nichts sagen und nichts mitbringen.',
  },
  {
    icon: Users,
    title: 'Fragen stellen',
    text: 'Was dich bewegt, hat Platz. Wir reden ehrlich über Glaube, Leben und was dazwischen liegt.',
  },
  {
    icon: Heart,
    title: 'Gemeinsam beten',
    text: 'Wir bringen unsere Anliegen vor Gott und dürfen erleben, wie er ganz konkret antwortet.',
  },
]

export default function MutmacherPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#dfe8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(248,5,50,0.12),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimatedChild>
            <p className="text-[#c45aa0] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Online-Treffen · Dienstags
            </p>
          </AnimatedChild>
          <AnimatedChild delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-[#0E3958] mb-8 leading-[0.95]">
              Mutmacher
              <br />
              <span className="gold-gradient-text">Zoom.</span>
            </h1>
          </AnimatedChild>
          <AnimatedChild delay={0.25}>
            <p className="text-[#345278] text-xl max-w-2xl leading-relaxed">
              Ein Ort für Mut, ehrliche Fragen und gemeinsames Gebet — direkt von zuhause aus.
              Komm vorbei, so wie du bist. Du bist herzlich willkommen.
            </p>
          </AnimatedChild>
        </div>
      </section>

      {/* Wann + Zoom CTA */}
      <section className="py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedChild>
              <div className="glass-card rounded-3xl p-10 md:p-14 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f80532] to-[#f4c06b] flex items-center justify-center shadow-lg mx-auto mb-6">
                  <Video className="w-8 h-8 text-[#0E3958]" />
                </div>
                <p className="text-[#c45aa0] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Wann wir uns treffen
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-[#0E3958] mb-6">
                  Jeden Dienstag
                  <br />
                  <span className="gold-gradient-text">um 19:00 Uhr.</span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-[#345278] text-lg mb-10">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#f80532]" />
                    Dienstags
                  </span>
                  <span className="hidden sm:inline text-[#c45aa0]">·</span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#f80532]" />
                    19:00 Uhr
                  </span>
                  <span className="hidden sm:inline text-[#c45aa0]">·</span>
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#f80532]" />
                    Online via Zoom
                  </span>
                </div>
                <a
                  href={ZOOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button text-lg inline-flex items-center gap-2"
                >
                  Meeting beitreten
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-[#345278] text-sm mt-6">
                  Der Link öffnet direkt Zoom — einfach draufklicken, kurz vor 19 Uhr.
                </p>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="py-24 bg-[#dfe8f5]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedChild>
              <p className="text-[#c45aa0] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                Was dich erwartet
              </p>
            </AnimatedChild>
            <AnimatedChild delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E3958] mb-6">
                Online reinschnuppern,
                <br />
                <span className="gold-gradient-text">ohne Druck.</span>
              </h2>
            </AnimatedChild>
            <AnimatedChild delay={0.2}>
              <p className="text-[#345278] text-xl leading-relaxed">
                Der Mutmacher Zoom ist ein kleiner, feiner Raum. Eine Stunde, in der wir uns
                gegenseitig Mut zusprechen, aus dem Alltag teilen und beten — für uns,
                füreinander und für die Menschen um uns herum.
              </p>
            </AnimatedChild>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title}>
                  <div className="glass-card rounded-2xl p-8 h-full hover:border-[#f80532]/40 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f80532] to-[#f4c06b] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#0E3958]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0E3958] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#345278] leading-relaxed">{item.text}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedChild>
              <div className="glass-card rounded-3xl p-10 md:p-14">
                <p className="text-[#c45aa0] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                  Für wen?
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-[#0E3958] mb-6">
                  Für dich.
                </h2>
                <p className="text-[#345278] text-lg leading-relaxed">
                  Egal, ob du schon lange mit Jesus unterwegs bist oder gerade zum ersten Mal
                  über Glauben nachdenkst — du bist willkommen. Auch wenn du weit weg wohnst
                  oder am Dienstagabend einfach nicht rauskommst: Der Mutmacher Zoom ist für
                  dich da.
                </p>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#dfe8f5]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedChild>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E3958] mb-6">
                Wir freuen uns auf dich.
              </h2>
              <p className="text-[#345278] text-xl leading-relaxed mb-10">
                Klick dich einfach rein — oder schreib uns vorher, wenn du Fragen hast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={ZOOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button text-lg inline-flex items-center gap-2"
                >
                  Meeting beitreten
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/kontakt" className="outline-button text-lg">
                  Kontakt aufnehmen
                </a>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>
    </>
  )
}
