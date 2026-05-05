/** Produkter på bestillingssiden. Bilder ligger i /public/produktbilder (600×600 kildefiler). */
export type OrderProduct = {
  id: string;
  title: string;
  /** Beskrivende tekst under tittelen (uten eske/antall). */
  subtitle: string;
  /** Vises på egen linje under undertekst, f.eks. «(8 poser pr. eske)». */
  pakningLinje: string;
  /** Tom streng = grå placeholder-boks */
  imageSrc: string;
};

export const ORDER_PRODUCTS: OrderProduct[] = [
  {
    id: 'gashaga-real-deal-bonner',
    title: 'Gåshaga Real Deal',
    subtitle: 'Hele bønner, 1 kg · Colombia & Brasil',
    pakningLinje: '(8 poser pr. eske)',
    imageSrc: '/produktbilder/gashaga-real-deal-hele-bonner.png',
  },
  {
    id: 'gashaga-tws-bonner',
    title: 'Gåshaga TWS',
    subtitle: 'The Whole Shebang · hele bønner, 1 kg · Brasil, Colombia & Vietnam',
    pakningLinje: '(8 poser pr. eske)',
    imageSrc: '/produktbilder/gashaga-tws-hele-bonner.png',
  },
  {
    id: 'gashaga-real-deal-filter',
    title: 'Gåshaga Real Deal',
    subtitle: 'Filterkaffe (malt), 1 kg',
    pakningLinje: '(8 poser pr. eske)',
    imageSrc: '/produktbilder/gashaga-real-deal-filterkaffe.png',
  },
  {
    id: 'dgb-bolivia',
    title: 'Den gyldne bønne, Bolivia',
    subtitle: 'Hele bønner · Mikrobrenneri',
    pakningLinje: '(10 poser pr. eske)',
    imageSrc: '/produktbilder/den-gyldne-bonne-bolivia.png',
  },
  {
    id: 'dgb-eksklusive',
    title: 'Den gyldne bønne, Eksklusive',
    subtitle: 'Hele bønner · Mikrobrenneri',
    pakningLinje: '(10 poser pr. eske)',
    imageSrc: '/produktbilder/den-gyldne-bonne-eksklusive.png',
  },
  {
    id: 'mr-utvalgte',
    title: 'Mr Coffee utvalgte kaffebønner',
    subtitle: 'Hele bønner',
    pakningLinje: '(6 kg i eske · art. 40256)',
    imageSrc: '/produktbilder/mr-coffee-utvalgte-kaffebonner.png',
  },
  {
    id: 'lofbergs-lilla',
    title: 'Löfbergs Lilla hele kaffebønner',
    subtitle: 'Continental · 1 kg',
    pakningLinje: '(6 kg i eske · art. 20503)',
    imageSrc: '/produktbilder/lofbergs-lilla-continental.png',
  },
  {
    id: 'lofbergs-contessa',
    title: 'Löfbergs Contessa',
    subtitle: 'Espresso · hele bønner, 1 kg',
    pakningLinje: '(4 kg i eske · art. 20505)',
    imageSrc: '/produktbilder/lofbergs-contessa-hele-bonner.png',
  },
  {
    id: 'lofbergs-100g',
    title: 'Löfbergs filterkaffe 100 g',
    subtitle: 'Medium',
    pakningLinje: '(6 kg i eske · art. 20278)',
    imageSrc: '/produktbilder/lofbergs-medium-100g.png',
  },
  {
    id: 'instant',
    title: 'Instant kaffe',
    subtitle: '',
    pakningLinje: '(10 poser pr. eske)',
    imageSrc: '/produktbilder/instant-kaffe.png',
  },
  {
    id: 'melkepulver',
    title: 'Melkepulver',
    subtitle: '',
    pakningLinje: '(10 poser pr. eske)',
    imageSrc: '/produktbilder/melkepulver.png',
  },
  {
    id: 'kakaopulver',
    title: 'Kakaopulver',
    subtitle: '',
    pakningLinje: '(10 poser pr. eske)',
    imageSrc: '/produktbilder/kakaopulver.png',
  },
  {
    id: 'pappbeger',
    title: 'Pappbeger',
    subtitle: '',
    pakningLinje: '(1000 stk pr. eske)',
    imageSrc: '/produktbilder/pappbeger.png',
  },
  {
    id: 'rorepinner',
    title: 'Rørepinner',
    subtitle: '',
    pakningLinje: '(1000 stk pr. eske)',
    imageSrc: '/produktbilder/rorepinner.png',
  },
  {
    id: 'sukkersticks',
    title: 'Sukkersticks',
    subtitle: '',
    pakningLinje: '(1000 stk pr. eske)',
    imageSrc: '/produktbilder/sukkersticks.png',
  },
  {
    id: 'co2',
    title: 'CO₂',
    subtitle: '',
    pakningLinje: '(12 stk pr. eske)',
    imageSrc: '/produktbilder/co2.png',
  },
  {
    id: 'te',
    title: 'Te',
    subtitle: '',
    pakningLinje: '(180 enheter)',
    imageSrc: '/produktbilder/te-lipton-varietypack.png',
  },
];
