import { useEffect, useState } from 'react';
import { Footer, Navbar } from './HomePage';
import { ORDER_PRODUCTS } from './bestillingData';

const pageBg = 'bg-[#F8F6EF]';
const imageWell = 'bg-[#F2F2F2]';
const labelClass = 'mb-2 block text-xs font-medium tracking-wide text-chinese-black/55';
const inputClass =
  'w-full rounded-full border border-chinese-black/10 bg-white px-5 py-3 text-sm text-chinese-black shadow-sm outline-none transition-[box-shadow,border-color] placeholder:text-chinese-black/35 focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/25';
const textareaClass =
  'min-h-[140px] w-full rounded-3xl border border-chinese-black/10 bg-white px-5 py-4 text-sm text-chinese-black shadow-sm outline-none transition-[box-shadow,border-color] placeholder:text-chinese-black/35 focus:border-antique-brass focus:ring-2 focus:ring-antique-brass/25';

function ProductThumb({ src, alt, onExpand }: { src: string; alt: string; onExpand?: () => void }) {
  if (src) {
    return (
      <button
        type="button"
        onClick={onExpand}
        className="group flex h-[200px] w-[200px] shrink-0 cursor-zoom-in items-center justify-center overflow-hidden border-0 bg-transparent p-0 text-left ring-chinese-black ring-offset-2 ring-offset-[#F8F6EF] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
        aria-haspopup="dialog"
        aria-label={`Vis større bilde: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </button>
    );
  }
  return (
    <div className={`flex h-[200px] w-[200px] shrink-0 items-center justify-center overflow-hidden ${imageWell}`}>
      <span className="px-4 text-center font-serif text-sm leading-snug text-chinese-black/35">Bilde kommer</span>
    </div>
  );
}

export function BestillingPage() {
  const [quantities, setQuantities] = useState<Record<string, string>>(() =>
    Object.fromEntries(ORDER_PRODUCTS.map((p) => [p.id, ''])),
  );
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <div className={`min-h-screen text-chinese-black selection:bg-antique-brass selection:text-chinese-black ${pageBg}`}>
      <Navbar />

      <main className="scroll-mt-28 pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="mx-auto w-full max-w-[900px] px-6">
          <header className="mb-12 text-left md:mb-14">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-chinese-black md:text-5xl">Bestilling</h1>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-chinese-black/60 md:text-base">
              Bestillingsskjema for eksisterende kunder med avtaler.
            </p>
          </header>

          <ul className="space-y-8 md:space-y-10">
            {ORDER_PRODUCTS.map((p) => (
              <li
                key={p.id}
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <ProductThumb
                  src={p.imageSrc}
                  alt={p.imageSrc ? p.title : ''}
                  onExpand={p.imageSrc ? () => setLightbox({ src: p.imageSrc, title: p.title }) : undefined}
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-2xl font-semibold leading-snug text-chinese-black md:text-[1.875rem] lg:text-[2.125rem]">
                    {p.title}
                  </h3>
                  {p.subtitle ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-chinese-black/55 md:text-base">{p.subtitle}</p>
                  ) : null}
                  {p.pakningLinje ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-chinese-black/55 md:text-base">{p.pakningLinje}</p>
                  ) : null}
                </div>
                <div className="w-full shrink-0 sm:w-[140px]">
                  <label htmlFor={`qty-${p.id}`} className="sr-only">
                    Antall {p.title}
                  </label>
                  <input
                    id={`qty-${p.id}`}
                    type="number"
                    inputMode="numeric"
                    min={0}
                    step={1}
                    placeholder="Antall"
                    value={quantities[p.id]}
                    onChange={(e) => setQuantities((q) => ({ ...q, [p.id]: e.target.value }))}
                    className={`${inputClass} text-right tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-auto [&::-webkit-outer-spin-button]:appearance-auto`}
                  />
                </div>
              </li>
            ))}
          </ul>

          <form
            className="mt-14 space-y-8 border-t border-chinese-black/10 pt-12"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label htmlFor="firmanavn" className={labelClass}>
                  Firmanavn <span className="text-antique-brass">*</span>
                </label>
                <input id="firmanavn" name="firmanavn" type="text" required autoComplete="organization" className={inputClass} />
              </div>
              <div>
                <label htmlFor="telefon" className={labelClass}>
                  Telefon <span className="text-antique-brass">*</span>
                </label>
                <input id="telefon" name="telefon" type="tel" required autoComplete="tel" className={inputClass} />
              </div>
              <div>
                <label htmlFor="kontakt" className={labelClass}>
                  Kontaktperson <span className="text-antique-brass">*</span>
                </label>
                <input id="kontakt" name="kontakt" type="text" required autoComplete="name" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="melding" className={labelClass}>
                Melding
              </label>
              <textarea
                id="melding"
                name="melding"
                rows={5}
                placeholder="Skriv en melding til oss her"
                className={textareaClass}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-chinese-black px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-antique-brass hover:text-chinese-black md:w-auto"
            >
              Send bestilling
            </button>
          </form>
        </div>
      </main>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-chinese-black/75 p-4 backdrop-blur-[2px]"
          role="presentation"
          onClick={() => setLightbox(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
            className="relative max-h-[90vh] w-full max-w-[min(90vw,640px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -right-1 -top-10 z-10 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:-right-3 sm:-top-3 sm:border-0 sm:bg-white sm:text-chinese-black sm:hover:bg-cream"
              onClick={() => setLightbox(null)}
              aria-label="Lukk"
            >
              Lukk
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[85vh] w-full object-contain"
              width={600}
              height={600}
            />
            <p className="mt-3 text-center font-serif text-lg text-white/95">{lightbox.title}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
