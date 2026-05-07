/** Navigasjonslenker. Rediger her for å endre meny-innhold. */

export const productSubLinks = [
  { name: 'Kaffemaskiner', href: '/#kaffemaskiner' },
  { name: 'Kaffetraktere', href: '/#kaffetraktere' },
  { name: 'Vannmaskiner', href: '/#vannmaskiner' },
  { name: 'Alle produkter', href: '/#alle-produkter' },
] as const;

export const simpleLinks = [
  { name: 'Service', href: '/#service' },
  { name: 'Om oss', href: '/#om-oss' },
  { name: 'Bærekraft', href: '/baerekraft' },
  { name: 'Bestilling', href: '/bestilling' },
  { name: 'Kontakt', href: '/#kontakt' },
] as const;
