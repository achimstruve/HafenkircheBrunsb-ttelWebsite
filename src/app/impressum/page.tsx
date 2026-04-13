import { Metadata } from 'next'
import { AnimatedChild } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Impressum & Datenschutz — Hafenkirche Brunsbüttel',
  description: 'Impressum und Datenschutzerklärung der Hafenkirche Brunsbüttel e.V.',
}

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(201,168,76,0.07),transparent)] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimatedChild>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Rechtliches
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Impressum &amp;<br />
              <span className="gold-gradient-text">Datenschutz.</span>
            </h1>
          </AnimatedChild>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0d1526]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Impressum */}
            <div id="impressum">
            <AnimatedChild>
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-black text-white mb-8 pb-4 border-b border-[#c9a84c]/20">
                  Impressum
                </h2>

                <div className="space-y-8 text-gray-300">
                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Angaben gemäß § 5 TMG
                    </h3>
                    <p className="font-semibold text-white text-lg">Hafenkirche Brunsbüttel e.V.</p>
                    <p>Schleusenstraße 10</p>
                    <p>25541 Brunsbüttel</p>
                    <p className="mt-2 text-gray-400 text-sm">Vereinsregister: VR 2125 PI</p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Vorstand
                    </h3>
                    <p>1. Vorstandsvorsitzender: Achim Struve</p>
                    <p>2. Vorstandsvorsitzender: Jens Struve</p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Kontakt
                    </h3>
                    <p>
                      E-Mail:{' '}
                      <a
                        href="mailto:info@hafenkirche.com"
                        className="text-[#c9a84c] hover:underline"
                      >
                        info@hafenkirche.com
                      </a>
                    </p>
                    <p>
                      Website:{' '}
                      <a
                        href="https://hafenkirche.com"
                        className="text-[#c9a84c] hover:underline"
                      >
                        www.hafenkirche.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Haftung für Inhalte
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                      diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                      TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                      gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                      die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                      oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                      bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                      Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                      Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                      umgehend entfernen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Haftung für Links
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                      wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                      keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                      jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                      Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                      überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                      erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                      jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                      Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                      entfernen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Urheberrecht
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                      unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                      Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                      Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                      bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                      nicht kommerziellen Gebrauch gestattet.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedChild>
            </div>

            {/* Datenschutz */}
            <div id="datenschutz">
            <AnimatedChild delay={0.15}>
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-black text-white mb-8 pb-4 border-b border-[#c9a84c]/20">
                  Datenschutzerklärung
                </h2>

                <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      1. Datenschutz auf einen Blick
                    </h3>
                    <p className="mb-3">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
                      Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                      Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                      werden können.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      Verantwortliche Stelle
                    </h3>
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="mt-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="font-semibold text-white">Hafenkirche Brunsbüttel e.V.</p>
                      <p>Schleusenstraße 10, 25541 Brunsbüttel</p>
                      <p>
                        E-Mail:{' '}
                        <a href="mailto:info@hafenkirche.com" className="text-[#c9a84c] hover:underline">
                          info@hafenkirche.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      2. Datenerfassung auf dieser Website
                    </h3>
                    <p className="font-semibold text-white mb-2">Kontaktformular</p>
                    <p className="mb-4">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                      aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                      zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
                      Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung
                      erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO.
                    </p>

                    <p className="font-semibold text-white mb-2">Server-Log-Dateien</p>
                    <p>
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in
                      Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
                      Browsertyp, Browserversion, verwendetes Betriebssystem, Referrer URL,
                      Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
                      vorgenommen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      3. Google Maps
                    </h3>
                    <p>
                      Diese Seite nutzt den Kartendienst Google Maps der Google Ireland Limited,
                      Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von
                      Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
                      Informationen werden in der Regel an einen Server von Google in den USA
                      übertragen. Mehr Informationen finden Sie in der Datenschutzerklärung von
                      Google:{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c9a84c] hover:underline"
                      >
                        policies.google.com/privacy
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">
                      4. Ihre Rechte
                    </h3>
                    <p>
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                      Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                      Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
                      zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                      können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
                      haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht
                      Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Wenden
                      Sie sich für Anfragen jederzeit an uns unter{' '}
                      <a href="mailto:info@hafenkirche.com" className="text-[#c9a84c] hover:underline">
                        info@hafenkirche.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedChild>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
