import type { ReactNode } from 'react';
import { Footer, Navbar } from './HomePage';

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="scroll-mt-28">
    <h2 className="mb-4 font-serif text-2xl text-chinese-black md:text-3xl">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed text-chinese-black/75">{children}</div>
  </section>
);

export function BaerekraftPage() {
  return (
    <div className="min-h-screen bg-white text-chinese-black selection:bg-antique-brass selection:text-chinese-black">
      <Navbar />
      <header className="relative w-full">
        <div className="h-[min(44vh,560px)] w-full overflow-hidden md:h-[min(48vh,620px)]">
          <img
            src="/images/baerekraft-bakgrunn_2.jpg"
            alt=""
            className="h-full w-full object-cover object-[center_40%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-chinese-black/35 via-transparent to-chinese-black/25" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <h1 className="mb-12 font-serif text-4xl leading-tight text-chinese-black md:mb-16 md:text-6xl">Bærekraft</h1>

        <div className="grid gap-14 lg:grid-cols-[1fr_min(100%,280px)] lg:gap-16 xl:grid-cols-[1fr_300px]">
          <div className="max-w-3xl space-y-12 md:space-y-14">
            <Section title="Miljøpolicy">
              <p>
                Mr Coffee AS er en Miljøfyrtårn-sertifisert virksomhet som arbeider systematisk for å redusere vår miljøpåvirkning og bidra til en mer
                bærekraftig og sirkulær kaffebransje.
              </p>
            </Section>

            <Section title="Forpliktelser">
              <p className="font-medium text-chinese-black">Vi forplikter oss til å:</p>
              <ul className="list-disc space-y-3 pl-5 marker:text-antique-brass">
                <li>Overholde gjeldende miljølovgivning og krav i Miljøfyrtårn-ordningen</li>
                <li>Forebygge forurensning og redusere avfall</li>
                <li>Jobbe kontinuerlig med forbedring av vår miljøprestasjon</li>
              </ul>
            </Section>

            <Section title="Prioriterte områder">
              <ul className="list-disc space-y-3 pl-5 marker:text-antique-brass">
                <li>Gjenbruk og levetidsforlengelse av kaffemaskiner</li>
                <li>Reduksjon og forsvarlig håndtering av EE-avfall</li>
                <li>Minst 80 % miljøsertifiserte kaffeprodukter</li>
                <li>Reduksjon av emballasje</li>
                <li>Effektiv logistikk og reduserte utslipp</li>
              </ul>
            </Section>

            <Section title="Ansvar og oppfølging">
              <p>Ledelsen har ansvar for mål og oppfølging.</p>
              <p>Alle ansatte skal bidra aktivt.</p>
            </Section>
          </div>

          <aside className="flex justify-center lg:justify-end lg:pt-2">
            <div className="sticky top-28 w-full max-w-[220px] rounded-2xl border border-chinese-black/10 bg-cream/40 p-6 shadow-sm backdrop-blur-sm md:max-w-[260px]">
              <img
                src="/images/miljofyrtarn-sertifisert-virksomhet-vertikal-RGB.svg"
                alt="Miljøfyrtårn sertifisert virksomhet"
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
