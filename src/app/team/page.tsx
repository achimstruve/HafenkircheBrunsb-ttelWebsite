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
    role: 'Gemeindeleiter & Ältester · Kinderdienstleitung',
    photo: '/images/team/achim-nadine.jpg',
    photoPosition: 'object-top',
    description:
      <>Achim ist promovierter Ingenieur (Dr.-Ing.) und hat auch Theologie studiert. Heute arbeitet er selbstständig als <a href="https://agenovation.ai/de/" target="_blank" rel="noopener noreferrer" className="text-[#c45aa0] hover:underline">KI-Berater</a> für größere Unternehmen und leitet die Hafenkirche als Gemeindeleiter und Ältester. Nadine unterrichtet an der Boy-Lornsen-Grundschule in Brunsbüttel und leitet liebevoll den Kinderdienst. Gemeinsam sind sie Eltern von Elisa und Nathanael und führen die Gemeinde zusammen mit dem Ältesten- und Gründerteam.</>,
    highlight: 'Gemeindegründer',
  },
  {
    names: 'Elke & Jens Struve',
    role: 'Ältester & Diakonin · Alphakurse · Lobpreis',
    photo: '/images/team/elke-jens.jpg',
    photoPosition: 'object-top',
    description:
      'Jens arbeitet als LKW-Fahrer und ist Ältester der Gemeinde. Elke ist Hauswirtschafterin in einer sozialen Einrichtung, bringt ihr Herz für Menschen als Diakonin in die Gemeindearbeit ein und leitet den Lobpreis der Hafenkirche. Als Eltern von 4 Kindern und stolze Großeltern von 9 Enkeln wissen sie, was Familie bedeutet. Sie sind erfahrene Gemeindegründer und lieben es die frohe Botschaft von Jesus durch Glaubensgrund- und Jüngerschaftskurse weiterzugeben. Beide haben mehrere Semester Theologie an der BFP-Bibelschule Beröa studiert.',
    highlight: 'Erfahrene Gemeindegründer',
  },
  {
    names: 'Thomas & Tatjana Mutspill',
    role: 'Ältester & Evangelisation · Kernteam',
    photo: '/images/team/thomas-tatjana.jpg',
    photoPosition: 'object-top',
    description:
      'Thomas arbeitet als Systemadministrator im Amt Eiderstedt und ist Ältester der Hafenkirche. Mit viel Leidenschaft leitet er den Evangelisationsdienst und trägt das Herz dafür, dass Menschen in der Region von Jesus hören. Thomas hat zudem eine Ausbildung als Seelsorger. Tatjana ist als Teil des Kernteams mit Begeisterung dabei und bringt ihre Gaben und ihr Engagement in die Gemeinschaft ein. Gemeinsam leben sie Gottes Liebe mit Authentizität und Freude.',
    highlight: 'Leidenschaft fürs Evangelium',
  },
  {
    names: 'Monika',
    role: 'Diakonin · Küchenteamleitung',
    photo: '/images/team/monika.jpg',
    photoPosition: 'object-top',
    description:
      'Monika ist Diakonin und leitet das Küchenteam der Hafenkirche. Sie hat außerdem eine Ausbildung als Seelsorgerin. Mit ihrem warmen Herz, ihrer offenen Art und ihrem Talent für Gastfreundschaft sorgt sie dafür, dass sich nach dem Gottesdienst bei Kaffee und Kuchen echte Gemeinschaft entfaltet. Sie ist ein unverzichtbarer Teil der Gemeinde.',
    highlight: 'Herzlich & einladend',
  },
  {
    names: 'Ari & Iris Moesker',
    role: 'Marktplatzleitung · Welcomedienst Leitung',
    photo: '/images/team/ari-iris-moesker.jpg',
    photoPosition: 'object-center',
    containerStyle: { aspectRatio: '2/3', minHeight: '400px', maxHeight: '600px' } as React.CSSProperties,
    description:
      'Ari leitet den Hafenkirche Marktplatz und arbeitet als Ergotherapie-Fachkraft bei der Glückwerk Diakonie in Glückstadt. Iris leitet den Welcomedienst der Hafenkirche und arbeitet bei der Itzehoer Versicherung. Gemeinsam bringen sie viel Herzlichkeit, Verbindlichkeit und gelebten Glauben in die Gemeinde ein.',
    highlight: 'Dienst am Menschen',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#dfe8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(235,213,50,0.1),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <AnimatedChild>
                <p className="text-[#c45aa0] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                  Die Menschen
                </p>
              </AnimatedChild>
              <AnimatedChild delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-black text-[#0E395B] mb-8 leading-[0.95]">
                  Unser
                  <br />
                  <span className="gold-gradient-text">Team.</span>
                </h1>
              </AnimatedChild>
              <AnimatedChild delay={0.25}>
                <p className="text-[#345278] text-xl max-w-2xl leading-relaxed">
                  Wir sind keine perfekten Menschen, aber wir sind Menschen, die von einem
                  guten Gott geliebt werden und diese Liebe weitergeben möchten.
                </p>
              </AnimatedChild>
            </div>

            {/* Symbolbild */}
            <AnimatedChild delay={0.15} direction="left">
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[360px] h-[240px] md:w-[500px] md:h-[330px] drop-shadow-[0_0_42px_rgba(235,213,50,0.12)]">
                  <Image
                    src="/images/team-symbolbild-2.png"
                    alt="Symbolbild Team"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 360px, 500px"

                  />
                </div>
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>

      {/* Team Cards — uniform 3-column grid */}
      <section className="py-24 bg-[#d4e0f0]">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.names}>
                <div className="glass-card rounded-2xl overflow-hidden hover:border-[#EBD532]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
                  {/* Photo */}
                  <div
                    className="relative w-full overflow-hidden shrink-0"
                    style={'containerStyle' in member && member.containerStyle
                      ? member.containerStyle
                      : { aspectRatio: '3/4', minHeight: '280px', maxHeight: '480px' }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.names}
                      fill
                      className={`object-cover ${member.photoPosition} group-hover:scale-105 transition-transform duration-700`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

                    />
                  </div>
                  {/* Text */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#0E395B]">{member.names}</h3>
                    <p className="text-[#c45aa0] text-xs font-semibold mt-1 mb-3">{member.role}</p>
                    <p className="text-[#3f5f86] text-sm leading-relaxed flex-1">{member.description}</p>
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
        <div className="absolute inset-0 bg-[#dfe8f5]/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[#0E395B] text-2xl md:text-3xl font-black italic text-center px-4">
            „Menschen, die Gottes Liebe weitergeben."
          </p>
        </div>
      </div>

      {/* Join the team */}
      <section className="py-24 bg-[#c8d7ea]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedChild>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EBD532]/20 to-[#EBD532]/5 border border-[#EBD532]/30 flex items-center justify-center mx-auto mb-8">
                <Heart className="w-7 h-7 text-[#c45aa0]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0E395B] mb-6">
                Werde Teil des Teams
              </h2>
              <p className="text-[#3f5f86] text-xl leading-relaxed mb-10">
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
