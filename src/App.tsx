import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/** Standard farge for strek-ikoner (unntak: Miljøfyrtårn-blad i stats-raden). */
const ICON_BRASS = 'text-[#C89F80]';

// --- Helpers ---

const StatsMiljofyrtarnLeafIcon = () => (
  <svg
    className="mb-1 h-10 w-10 shrink-0 text-chinese-black"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const NavbarMenuIcon = () => (
  <svg className={`h-[1.8rem] w-[1.8rem] shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 5h16" />
    <path d="M4 12h16" />
    <path d="M4 19h16" />
  </svg>
);

const NavbarCloseIcon = () => (
  <svg className={`h-8 w-8 shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ProductLineIcon = ({ name, className }: { name: string; className?: string }) => {
  const cls = `shrink-0 ${ICON_BRASS} ${className ?? ''}`.trim();
  switch (name) {
    case 'coffee':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M10 2v2" />
          <path d="M14 2v2" />
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
          <path d="M6 2v2" />
        </svg>
      );
    case 'clock':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 'droplets':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
        </svg>
      );
    default:
      return null;
  }
};

const ChevronRightBrassIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={`shrink-0 ${ICON_BRASS} ${className}`.trim()} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ContactLineIcon = ({ name, className = 'h-5 w-5' }: { name: string; className?: string }) => {
  const cls = `shrink-0 ${ICON_BRASS} ${className}`.trim();
  switch (name) {
    case 'phone':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      );
    case 'map-pin':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

const Button = ({
  children,
  variant = 'primary',
  className = '',
  href,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'outlineDark';
  className?: string;
  href?: string;
}) => {
  const variants = {
    primary: 'bg-antique-brass text-chinese-black hover:bg-white',
    secondary: 'border border-white/20 text-white hover:bg-white hover:text-chinese-black',
    ghost: 'border border-white bg-transparent text-white hover:bg-white/10',
    outline: 'border border-antique-brass text-antique-brass hover:bg-antique-brass hover:text-chinese-black',
    outlineDark: 'border border-chinese-black/30 text-chinese-black hover:bg-antique-brass hover:border-antique-brass',
  };
  const base = `inline-flex items-center justify-center px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) return <a href={href} className={base}>{children}</a>;
  return <button type="button" className={base}>{children}</button>;
};

// --- Navbar ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Hjem', href: '#' },
    { name: 'Maskiner', href: '#produkter' },
    { name: 'Produkter', href: '#produkter' },
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Service', href: '#service' },
    { name: 'Bestilling', href: '#kontakt' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/10 bg-chinese-black/95 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#">
            <img
              src="/images/MrCoffee_Logo.svg"
              alt="MrCoffee"
              className={`w-auto transition-[height] duration-300 ${isScrolled ? 'h-[4.2rem]' : 'h-[4.8rem]'}`}
            />
          </a>
          <div className="hidden items-center gap-[2.1rem] lg:flex">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-[15.6px] uppercase tracking-widest text-white transition-colors hover:text-antique-brass"
              >
                {l.name}
              </a>
            ))}
          </div>
          <button type="button" className="lg:hidden p-1" aria-label="Meny" onClick={() => setMobileOpen(true)}>
            <NavbarMenuIcon />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] bg-chinese-black p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button type="button" className="p-2 text-white" aria-label="Lukk" onClick={() => setMobileOpen(false)}>
                <NavbarCloseIcon />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-2xl font-serif text-white hover:text-antique-brass" onClick={() => setMobileOpen(false)}>
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Sections ---

const HeroCheckIcon = () => (
  <svg className={`w-4 h-4 shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/images/Hero-kontor.jpg"
        alt=""
        className="absolute inset-0 h-full w-full max-w-none object-cover object-bottom opacity-100"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 130% 90% at 0% 100%, rgb(12 21 25 / 0.72) 0%, rgb(12 21 25 / 0.35) 42%, transparent 68%)',
        }}
      />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-7xl translate-y-[50px] px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
        <h1 className="mb-8 mt-[80px] font-serif text-[2.64rem] leading-[0.9] md:text-[5.28rem]">
          Bedre kaffe gir <br />
          <span className="text-antique-brass italic">bedre arbeidsdager</span>
        </h1>
        <div className="inline-flex max-w-full flex-col items-stretch">
          <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 md:flex-nowrap">
            {['Gratis leie', 'Gratis service', 'Ingen bindingstid'].map((item) => (
              <span key={item} className="flex shrink-0 items-center gap-2 text-sm uppercase tracking-widest text-white">
                <HeroCheckIcon />
                {item}
              </span>
            ))}
          </div>
          <p className="mb-10 w-full max-w-xs text-pretty text-lg leading-relaxed text-white sm:max-w-sm md:max-w-md md:text-xl lg:max-w-lg">
            Vi leverer kaffeløsninger og drikkeløsninger til norske kontorer. Med 17 års erfaring og rask service sørger vi for at kaffekoppen alltid er som den skal.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="#kontakt">Bestill kaffeløsning</Button>
          <Button variant="ghost" href="#kontakt" className="!border-[#3D4245] hover:!border-[#3D4245]">
            Kontakt oss
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => {
  const items = [
    { value: '17+', label: 'Års erfaring' },
    { value: '70k', label: 'Kopper daglig' },
    { value: '1-2t', label: 'Responstid' },
    { value: null, label: 'Miljøfyrtårn sertifisert', iconName: 'leaf' },
  ];

  return (
    <section className="bg-cream py-14 border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            {s.value ? (
              <span className="text-4xl md:text-5xl font-serif text-chinese-black mb-1">{s.value}</span>
            ) : (
              <StatsMiljofyrtarnLeafIcon />
            )}
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-antique-brass font-semibold">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const QualityCoffeeIcon = () => (
  <svg className={`mb-3 h-7 w-7 shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M10 2v2" />
    <path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
);

const QualityLeafIcon = () => (
  <svg className={`mb-3 h-7 w-7 shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const QualitySection = () => (
  <section id="kvalitet" className="bg-[#F1E7DF] py-24 md:py-32 text-chinese-black">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-16 lg:gap-20 items-start">
      <div className="md:pt-2">
        <span className="text-antique-brass uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Kvalitet på kaffe</span>
        <h2 className="text-4xl md:text-6xl font-serif leading-[1.05] mb-8 text-chinese-black">
          Kaffe folk faktisk
          <br />
          <span className="italic text-antique-brass">vil drikke</span>
        </h2>
        <div className="space-y-5 text-chinese-black/70 leading-relaxed max-w-xl">
          <p>
            Det hjelper ikke med en kaffemaskin hvis kaffen ikke smaker godt. Derfor jobber vi med utvalgte mikrobrennerier og leverandører som leverer kvalitet – hver gang.
          </p>
          <p>
            Vi tilbyr blant annet kaffe fra <span className="text-chinese-black font-medium">Den Gyldne Bønne</span> og utvalgte brennerier i Stockholm, inkludert <span className="text-chinese-black font-medium">GasHaga på Lidingö</span>, som har oppnådd topp plassering internasjonalt.
          </p>
          <p>
            Hos oss får du ikke bare kaffe – du får en løsning som er tilpasset smaken på arbeidsplassen. Selv kakaoen smaker slik den skal – som sjokolade.
          </p>
        </div>
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div className="rounded-2xl bg-[#EBE2DA] p-6 md:p-7">
            <QualityCoffeeIcon />
            <h4 className="font-serif text-xl mb-2 text-chinese-black">Mikrobrennerier</h4>
            <p className="text-sm text-chinese-black/65 leading-relaxed">Håndplukkede bønner fra de beste brenneriene.</p>
          </div>
          <div className="rounded-2xl bg-[#EBE2DA] p-6 md:p-7">
            <QualityLeafIcon />
            <h4 className="font-serif text-xl mb-2 text-chinese-black">Bærekraftig</h4>
            <p className="text-sm text-chinese-black/65 leading-relaxed">Miljøfyrtårn-sertifisert og etisk handel.</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-4 w-full max-w-[640px] md:mx-0 md:mt-0 md:min-h-[710px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-0 mx-auto w-full max-w-[400px] md:absolute md:left-0 md:top-0 md:mx-0"
        >
          <div className="h-[500px] w-full max-w-[400px] overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/Kaffekvalitet-1.jpg"
              alt="Kaffe på kontoret"
              width={400}
              height={500}
              className="h-full w-full object-cover object-[center_25%]"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative z-10 mx-auto mt-[210px] w-full max-w-[400px] md:absolute md:right-0 md:top-[210px] md:mt-0 md:mx-0"
        >
          <div className="h-[500px] w-full max-w-[400px] overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/Kaffekvalitet-2.jpg"
              alt="Kaffe og kaffemaskin"
              width={400}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => {
  const products = [
    { title: 'Kaffemaskiner', desc: 'Kaffemaskiner for den perfekte koppen.', img: '/images/produkt-kaffemaskin.jpg', icon: 'coffee' },
    { title: 'Kaffetraktere', desc: 'Tradisjonell trakting for store og små kontorer.', img: '/images/produkt-kaffetrakter.jpg', icon: 'clock' },
    { title: 'Vannmaskiner', desc: 'Friskt, kaldt vann med og uten kullsyre.', img: '/images/produkt-vannmaskin.jpg', icon: 'droplets' },
  ];

  return (
    <section id="produkter" className="bg-white py-24 md:py-32 text-chinese-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-antique-brass uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Produkter og løsninger</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Kaffeløsninger tilpasset<br /><span className="italic font-light">din bedrift.</span>
          </h2>
          <p className="text-chinese-black/60 leading-relaxed">
            Vi leverer kaffemaskiner og drikkeløsninger til kontorer og arbeidsplasser. Enten dere er 20 ansatte eller flere, finner vi en løsning som passer behovet deres.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-chinese-black via-chinese-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full glass">
                  <ProductLineIcon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-white">{p.title}</h3>
                <p className="text-sm text-white/60 mb-5">{p.desc}</p>
                <span className={`flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-4 ${ICON_BRASS}`}>
                  Se {p.title.toLowerCase()} <ChevronRightBrassIcon className="h-4 w-4 opacity-90" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TasteSortimentIcon = ({ name }: { name: string }) => {
  const cls = `h-7 w-7 shrink-0 ${ICON_BRASS}`;
  switch (name) {
    case 'coffee':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M10 2v2" />
          <path d="M14 2v2" />
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
          <path d="M6 2v2" />
        </svg>
      );
    case 'diamond':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
        </svg>
      );
    case 'flower-2':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
          <circle cx="12" cy="8" r="2" />
          <path d="M12 10v12" />
          <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
          <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
        </svg>
      );
    default:
      return null;
  }
};

const TasteSection = () => {
  const items = [
    { icon: 'coffee', name: "Vanlige mannen i gata", desc: "Klassisk og tilgjengelig – kaffe alle kjenner seg igjen i." },
    { icon: 'diamond', name: "Feinsmekker'n", desc: "Spesialkaffe fra mikrobrennerier med karakter og dybde." },
    { icon: 'flower-2', name: "Trommer'n", desc: "Kraftig og fyldig – for de som vil kjenne at det er kaffe." },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/kaffesmak-bakgrunn.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-chinese-black/60 via-transparent to-chinese-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-antique-brass uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Kaffe og sortiment</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white">
            Hvordan vil du at kaffen<br /><span className="italic font-light">skal smake?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-white/10 hover:border-antique-brass/40 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-300"
            >
              <div className="mb-6 opacity-90 transition-opacity group-hover:opacity-100">
                <TasteSortimentIcon name={item.icon} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-antique-brass transition-colors leading-tight mb-4">{item.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline">Se alle produkter</Button>
        </div>
      </div>
    </section>
  );
};

const ServiceShieldIcon = () => (
  <svg className={`h-6 w-6 shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ServicePhoneIcon = () => (
  <svg className={`h-6 w-6 shrink-0 ${ICON_BRASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
);

const ServiceSection = () => (
  <section id="service" className="bg-[#F1E7DF] py-24 md:py-32 text-chinese-black">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-6 md:grid-cols-2 md:items-stretch md:gap-16 lg:gap-20">
      <div className="md:pt-1">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-antique-brass">Service &amp; vedlikehold</span>
        <h2 className="mb-8 font-serif text-4xl leading-[1.05] text-chinese-black md:text-6xl">
          Service som
          <br />
          <span className="italic text-antique-brass">faktisk fungerer</span>
        </h2>
        <p className="mb-10 max-w-xl leading-relaxed text-chinese-black/80">
          Når kaffemaskinen stopper, må det løses raskt. Derfor er service det viktigste vi gjør. Vi er på plass innen 1–2 timer ved behov.
        </p>
        <div className="mb-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <div className="flex flex-col gap-3">
            <ServiceShieldIcon />
            <h4 className="font-serif text-xl font-medium text-chinese-black">Gratis service</h4>
            <p className="text-sm leading-relaxed text-chinese-black/65">Alle våre maskiner inkluderer full serviceavtale uten ekstra kostnad.</p>
          </div>
          <div className="flex flex-col gap-3">
            <ServicePhoneIcon />
            <h4 className="font-serif text-xl font-medium text-chinese-black">Rask support</h4>
            <p className="text-sm leading-relaxed text-chinese-black/65">I de fleste tilfeller løser vi problemet over telefon – raskt og effektivt.</p>
          </div>
        </div>
        <Button href="#kontakt" className="border border-transparent hover:border-[#3D4245]">
          Service
        </Button>
      </div>

      <div className="flex w-full items-center justify-center md:h-full md:min-h-0">
        <div className="group relative w-full max-w-3xl cursor-pointer overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/images/om-oss-kaffekopp.jpg"
            alt=""
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-chinese-black/15 transition-colors group-hover:bg-chinese-black/25">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="#C89F80" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 max-w-[240px] rounded-2xl bg-chinese-black/92 px-5 py-4 text-white backdrop-blur-sm">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-antique-brass">Se video</span>
            <span className="text-sm leading-snug text-white">Slik fungerer vår service</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OmOssCoffeeWatermark = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M10 2v2" />
    <path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
);

const GreenSection = () => (
  <section id="om-oss" className="bg-white py-24 text-chinese-black md:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-16 lg:gap-20">
      <div className="order-2 flex min-h-0 gap-3 sm:gap-4 md:order-1">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
          <div className="overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
            <img src="/images/om-oss-kaffe.jpg" alt="Coffee" className="h-full w-full object-cover" />
          </div>
          <div className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl bg-antique-brass p-5 shadow-lg transition-colors duration-300 hover:bg-white md:p-6">
            <img
              src="/images/MrCoffee_Logo.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[42%] h-[5.4rem] w-[5.4rem] -translate-x-1/2 -translate-y-1/2 opacity-100 sm:h-[7.2rem] sm:w-[7.2rem]"
            />
            <span className="relative font-serif text-4xl text-chinese-black transition-transform duration-300 group-hover:scale-105 md:text-5xl">
              17+
            </span>
            <span className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-chinese-black/85 md:text-xs">
              Års erfaring
            </span>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3 pt-10 sm:gap-4 sm:pt-12 md:pt-14 lg:pt-16">
          <div className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl bg-dark-jungle p-5 shadow-lg md:p-6">
            <OmOssCoffeeWatermark className={`pointer-events-none absolute right-1 top-1 h-[5.5rem] w-[5.5rem] opacity-10 transition-opacity duration-300 group-hover:opacity-[0.2] sm:right-2 sm:top-2 sm:h-28 sm:w-28 ${ICON_BRASS}`} />
            <span className="relative font-serif text-3xl text-antique-brass md:text-4xl lg:text-[2.75rem]">70.000</span>
            <span className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 md:text-xs">
              Kopper daglig
            </span>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
            <img src="/images/om-oss-kaffekopp.jpg" alt="Coffee cup" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <motion.div
        className="order-1 md:order-2 md:pt-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-antique-brass">Om oss</span>
        <h2 className="mb-8 font-serif text-4xl leading-tight text-chinese-black md:text-6xl">
          Erfaring du
          <br />
          <span className="italic text-antique-brass">kan stole på.</span>
        </h2>
        <div className="mb-8 space-y-5 leading-relaxed text-chinese-black/70">
          <p>
            MrCoffee er et 100 % norskeid selskap med over 17 års erfaring i å levere kaffeløsninger til norske arbeidsplasser.
          </p>
          <p>
            Vi serverer i dag over <span className="font-bold text-chinese-black">70.000 kopper</span> varm drikke hver eneste dag, og har fornøyde kunder over store deler av landet.
          </p>
        </div>
        <div className="mb-10">
          <h4 className="font-serif text-xl text-chinese-black">Miljøfyrtårn-sertifisert</h4>
          <p className="mt-1 text-sm leading-relaxed text-chinese-black/70">
            Et bevis på at vi tar bærekraft på alvor – i alt vi leverer.
          </p>
        </div>
        <Button href="#om-oss" className="border border-transparent hover:border-[#3D4245]">
          Om oss
        </Button>
      </motion.div>
    </div>
  </section>
);

const SustainabilitySection = () => (
  <section id="baerekraft" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/baerekraft-bakgrunn_2.jpeg" alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/55 via-[#0f0c0a]/48 to-[#0d0907]/94" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="glass p-10 md:p-16 rounded-[48px] border-white/5 bg-chinese-black/40">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 md:w-44 shrink-0">
            <img src="/images/miljofyrtarn-sertifisert-virksomhet-vertikal-RGB.svg" alt="Miljøfyrtårn sertifisert" className="w-full h-auto" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-antique-brass uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Bærekraft</span>
            <h2 className="mb-6 font-serif text-3xl text-white md:text-5xl">
              Vi tar ansvar for <span className="italic">fremtiden</span>.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              MrCoffee er stolte av å være Miljøfyrtårn-sertifisert. Vi jobber kontinuerlig med å redusere vårt miljøavtrykk gjennom bærekraftige kaffeløsninger, etisk handel og miljøvennlig logistikk.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {['Etisk handel', 'Gjenbrukbare løsninger', 'CO₂-nøytral frakt'].map((item) => (
                <span key={item} className={`flex items-center gap-2 text-sm font-medium ${ICON_BRASS}`}>
                  <svg
                    className={`h-4 w-4 shrink-0 ${ICON_BRASS}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="kontakt" className="py-24 md:py-32 atmosphere-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass p-10 md:p-16 rounded-[48px] relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-antique-brass uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Bestilling / Kontakt</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
              Klar for bedre kaffe<br /><span className="italic font-light">på jobben?</span>
            </h2>
            <p className="text-white/60 mb-12 leading-relaxed">
              Ta kontakt med oss for en løsning tilpasset din bedrift. Det er enkelt å komme i gang, og vi hjelper deg hele veien.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'phone', label: 'Ring oss', value: '64 86 68 00' },
                { icon: 'mail', label: 'E-post', value: 'post@mrcoffee.no' },
                { icon: 'map-pin', label: 'Besøk oss', value: 'Gneisveien 2, 1914 Ytre Enebakk' },
              ].map((c) => (
                <div key={c.icon} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full glass">
                    <ContactLineIcon name={c.icon} className="h-5 w-5 opacity-90" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{c.label}</p>
                    <p className="text-lg text-white">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 md:p-10 rounded-3xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Navn</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-antique-brass transition-colors" placeholder="Ditt navn" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Bedrift</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-antique-brass transition-colors" placeholder="Bedriftsnavn" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 ml-1">E-post</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-antique-brass transition-colors" placeholder="din@epost.no" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Melding</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-antique-brass transition-colors resize-none" placeholder="Hvordan kan vi hjelpe deg?" />
              </div>
              <Button className="w-full">Send forespørsel</Button>
            </form>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-antique-brass/10 rounded-full blur-[100px] -z-0" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <img src="/images/MrCoffee_Logo.svg" alt="MrCoffee" className="h-14 w-auto" />
      <span className="text-white/30 text-xs uppercase tracking-[0.2em]">© 2026 MrCoffee.no — 100% Norskeid</span>
      <div className="flex gap-6">
        {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
          <a key={s} href="#" className="text-white/40 hover:text-antique-brass transition-colors text-xs uppercase tracking-widest font-bold">{s}</a>
        ))}
      </div>
    </div>
  </footer>
);

// --- App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-antique-brass selection:text-chinese-black">
      <Navbar />
      <Hero />
      <Stats />
      <QualitySection />
      <ProductsSection />
      <TasteSection />
      <ServiceSection />
      <GreenSection />
      <SustainabilitySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
