/**
 * Innhold for forsiden (/).
 * Rediger her for å endre tekst, bilder og data-arrays på forsiden.
 */

// --- Hero ---

export const hero = {
  imageSrc: '/images/Hero-kontor.jpg',
  headlineLine1: 'Gratis kaffemaskin',
  headlineLine2: 'til kontoret',
  badges: ['Gratis leie', 'Gratis service', 'Ingen bindingstid'] as const,
  body: 'Vi leverer kaffeløsninger til kontor og bedrifter – uten unødvendige kostnader. Få en god kaffe på jobb uten å binde deg til lange avtaler.',
  ctaPrimary: { label: 'Bestill kaffeløsning', href: '/#kontakt' },
  ctaSecondary: { label: 'Kontakt oss', href: '/#kontakt' },
};

// --- Stats row ---

export const stats = [
  { kind: 'icon' as const, icon: 'feather' as const, label: 'Etablert 2009' },
  { kind: 'icon' as const, icon: 'coffee' as const, label: '70K kopper daglig' },
  { kind: 'icon' as const, icon: 'clock' as const, label: 'Rask responstid' },
  { kind: 'miljo' as const, label: 'Miljøfyrtårn sertifisert' },
];

// --- Kvalitet-seksjonen ---

export const quality = {
  eyebrow: 'Kvalitet på kaffe',
  headlineLine1: 'Kaffe folk faktisk',
  headlineLine2: 'vil drikke',
  p1: 'Det hjelper ikke med en kaffemaskin hvis kaffen ikke smaker godt. Derfor jobber vi med utvalgte mikrobrennerier og leverandører som leverer kvalitet hver gang.',
  p2Brand1: 'Den Gyldne Bønne',
  p2Brand2: 'Gåshaga',
  p3: 'Hos oss får du ikke bare kaffe – du får en løsning som er tilpasset smaken på arbeidsplassen.',
  cards: [
    { title: 'Mikrobrennerier', text: 'Håndplukkede bønner fra de beste brenneriene.' },
    { title: 'Bærekraftig', text: 'Miljøfyrtårn-sertifisert og etisk handel.' },
  ],
  images: [
    { src: '/images/Kaffekvalitet-1.jpg', alt: 'Kaffe på kontoret' },
    { src: '/images/Kaffekvalitet-2.jpg', alt: 'Kaffe og kaffemaskin' },
  ],
};

// --- Produkter-seksjonen (forsidekort, ikke bestillingsprodukter) ---

export const productsSection = {
  eyebrow: 'Produkter og løsninger',
  headlineLine1: 'Kaffeløsninger tilpasset',
  headlineLine2: 'din bedrift',
  body: 'Våre skreddersydde kaffeløsninger passer både små og store virksomheter, med fokus på kvalitet og brukervennlighet. Vi tilpasser løsningen etter deres behov, forbruk og preferanser, slik at dere alltid får kvalitetskaffe – enkelt, effektivt og uten bekymringer.',
  cards: [
    {
      id: 'kaffemaskiner',
      title: 'Kaffemaskiner',
      desc: 'Kaffemaskiner for den perfekte koppen.',
      img: '/images/produkt-kaffemaskin.jpg',
      badge: '/icons/produkt-kaffemaskin-badge.svg',
    },
    {
      id: 'kaffetraktere',
      title: 'Kaffetraktere',
      desc: 'Tradisjonell trakting for store og små kontorer.',
      img: '/images/produkt-kaffetrakter.jpg',
      badge: '/icons/produkt-kaffetrakter-badge.svg',
    },
    {
      id: 'vannmaskiner',
      title: 'Vannmaskiner',
      desc: 'Friskt, kaldt vann med og uten kullsyre.',
      img: '/images/produkt-vannmaskin.jpg',
      badge: '/icons/produkt-vannmaskin-badge.svg',
    },
  ],
};

// --- Smak/sortiment-seksjonen ---

export const tasteSection = {
  eyebrow: 'Kaffe og sortiment',
  headlineLine1: 'Hvordan vil du at kaffen',
  headlineLine2: 'skal smake?',
  body: 'Vi har samlet kaffe, te, kakao og tilbehør fra leverandører vi vet leverer kvalitet – så dere enkelt kan finne det som passer best hos dere.',
  cta: 'Se alle produkter',
  backgroundImageSrc: '/images/kaffesmak-bakgrunn.jpg',
  items: [
    {
      icon: 'coffee' as const,
      name: 'Kontorklassiker',
      desc: 'Balansert og lett å like – passer når dere vil ha kaffe som fungerer for mange på arbeidsplassen, fra kjøkkenet til møterommet.',
    },
    {
      icon: 'bean' as const,
      name: 'Baristaen/kaffekjennern',
      desc: 'Utvalg fra mikrobrennerier med tydelig smak og historie – for bedrifter som vil tilby litt ekstra i kaffekroken.',
    },
    {
      icon: 'flower-2' as const,
      name: 'Bærekraft',
      desc: 'For deg som bryr deg om kvalitet, opprinnelse og planeten vår.',
      iconColor: 'text-emerald-600' as const,
    },
  ],
};

// --- Service-seksjonen ---

export const service = {
  eyebrow: 'Tjeneste og vedlikehold',
  headlineLine1: 'Service som',
  headlineLine2: 'faktisk fungerer',
  intro: 'Når kaffemaskinen stopper, må det løses raskt. Derfor er service det viktigste vi gjør.',
  cta: 'Service',
  cards: [
    {
      icon: 'shield' as const,
      title: 'Gratis service',
      text: 'Alle våre maskiner inkluderer full serviceavtale uten ekstra kostnader.',
    },
    {
      icon: 'phone' as const,
      title: 'Rask support',
      text: 'I de fleste tilfeller løser vi problemet over telefon – raskt og effektivt.',
    },
  ],
  image: { src: '/images/om-oss-kaffekopp.jpg', videoCaption: 'Slik fungerer vår service' },
};

// --- Om oss-seksjonen ---

export const omOss = {
  eyebrow: 'Om oss',
  headlineLine1: 'Erfaring du',
  headlineLine2: 'kan stole på.',
  p1: 'Mr Coffee er et 100 % norskeid selskap med over 17 års erfaring i å levere kaffeløsninger til norske arbeidsplasser.',
  p2Prefix: 'Vi serverer i dag over ',
  p2Bold: '70.000 kopper',
  p2Suffix: ' varm drikke hver eneste dag, og har fornøyde kunder over store deler av landet.',
  p3: 'Miljøfyrtårn sertifisert',
  cta: 'Om oss',
  statYears: { value: '17+', label: 'Års erfaring' },
  statCups: { value: '70.000', label: 'Kopper daglig' },
  images: [
    { src: '/images/om-oss-kaffe.jpg', alt: 'Coffee' },
    { src: '/images/om-oss-kaffekopp.jpg', alt: 'Coffee cup' },
  ],
};

// --- Bærekraft-seksjonen (forsiden, ikke /baerekraft-siden) ---

export const sustainability = {
  backgroundImageSrc: '/images/baerekraft-bakgrunn_2.jpeg',
  eyebrow: 'Bærekraft',
  headlineLine1: 'Vi tar ansvar for',
  headlineItalic: 'fremtiden',
  body: 'MrCoffee er stolte av å være Miljøfyrtårn-sertifisert. Vi jobber kontinuerlig med å redusere vårt miljøavtrykk gjennom bærekraftige kaffeløsninger, etisk handel og miljøvennlig logistikk.',
  badges: ['Etisk handel', 'Gjenbrukbare løsninger', 'CO₂-nøytral frakt'] as const,
  cta: 'Bærekraft',
};

// --- Kontakt-seksjonen ---

export const contact = {
  eyebrow: 'Bestilling / Kontakt',
  headlineLine1: 'Klar for bedre kaffe',
  headlineLine2: 'på jobben?',
  intro: 'Ta kontakt med oss for en løsning tilpasset din bedrift. Det er enkelt å komme i gang, og vi hjelper deg hele veien.',
  details: [
    { icon: 'phone' as const, label: 'Ring oss', value: '64 86 68 00' },
    { icon: 'mail' as const, label: 'E-post', value: 'post@mrcoffee.no' },
    { icon: 'map-pin' as const, label: 'Besøk oss', value: 'Gneisveien 2c, 1914 Ytre Enebakk' },
  ],
  form: {
    namePlaceholder: 'Ditt navn',
    companyPlaceholder: 'Bedriftsnavn',
    emailPlaceholder: 'din@epost.no',
    phonePlaceholder: '64 86 68 00',
    messagePlaceholder: 'Hvordan kan vi hjelpe deg?',
    submitLabel: 'Send forespørsel',
  },
};

// --- Footer ---

export const footer = {
  copyright: '© 2026 MrCoffee.no — 100% Norskeid',
  socials: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
};
