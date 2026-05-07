import type { ReactNode } from 'react';
import { ContactSection, Footer, Navbar } from './HomePage';
import { baerekraft } from './content/baerekraft';

const { sections, signature, reportUrl, policyPdfPath, reportLinkLabel, policyLinkLabel } = baerekraft;

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="scroll-mt-28">
    <h2 className="mb-4 font-serif text-2xl text-chinese-black md:text-3xl">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed text-chinese-black/75">{children}</div>
  </section>
);

export function BaerekraftPage() {
  return (
    <div className="min-h-screen text-chinese-black selection:bg-antique-brass selection:text-chinese-black">
      <Navbar />
      <header className="relative w-full">
        <div className="h-[min(44vh,560px)] w-full overflow-hidden md:h-[min(48vh,620px)]">
          <img
            src={baerekraft.heroImageSrc}
            alt=""
            className="h-full w-full object-cover object-[center_40%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-chinese-black/35 via-transparent to-chinese-black/25" />
        </div>
      </header>

      <main className="scroll-mt-28 bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-14">
            <div className="w-full min-w-0 max-w-xl space-y-12 md:space-y-14 lg:flex-1">
              <h1 className="text-left font-serif text-4xl leading-tight text-chinese-black md:text-6xl">
                {baerekraft.pageTitle}
              </h1>

              <Section title={sections.miljoPolicy.title}>
                <p>{sections.miljoPolicy.text}</p>
              </Section>

              <Section title={sections.forpliktelser.title}>
                <p className="font-medium text-chinese-black">{sections.forpliktelser.intro}</p>
                <ul className="list-disc space-y-3 pl-5 marker:text-antique-brass">
                  {sections.forpliktelser.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title={sections.prioriterteOmrader.title}>
                <ul className="list-disc space-y-3 pl-5 marker:text-antique-brass">
                  {sections.prioriterteOmrader.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title={sections.ansvarOgOppfolging.title}>
                <p>{sections.ansvarOgOppfolging.p1}</p>
                <p>{sections.ansvarOgOppfolging.p2}</p>
                <div className="space-y-6 pt-1">
                  <p className="text-base leading-relaxed text-chinese-black/75">
                    {sections.ansvarOgOppfolging.p3}
                  </p>
                  <div className="space-y-3">
                    <p>
                      <a
                        href={reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-antique-brass underline decoration-antique-brass/40 underline-offset-4 transition-colors hover:text-chinese-black hover:decoration-chinese-black/30"
                      >
                        {reportLinkLabel}
                      </a>
                    </p>
                    <p>
                      <a
                        href={policyPdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-antique-brass underline decoration-antique-brass/40 underline-offset-4 transition-colors hover:text-chinese-black hover:decoration-chinese-black/30"
                      >
                        {policyLinkLabel}
                      </a>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base leading-relaxed text-chinese-black/75">{signature.date}</p>
                    <p className="text-base font-bold leading-relaxed text-chinese-black/75">{signature.name}</p>
                  </div>
                </div>
              </Section>
            </div>

            <aside className="flex w-full shrink-0 justify-center lg:w-auto lg:max-w-[200px] lg:pt-1 xl:max-w-[220px]">
              <div className="sticky top-28 w-full max-w-[200px] xl:max-w-[220px]">
                <img
                  src="/images/miljofyrtarn-sertifisert-virksomhet-vertikal-RGB.svg"
                  alt="Miljøfyrtårn sertifisert virksomhet"
                  className="mx-auto h-auto w-full object-contain"
                />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
