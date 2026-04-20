# MrCoffee.no – designleveranse til YOOtheme (Joomla)

Denne mappen er laget for å bygge samme uttrykk i **Joomla + YOOtheme** som i referanseprosjektet (Vite + React + Tailwind v4). Kollegaen får farger, typografi, CSS-utdrag, anker-ID-er og bilde-/ikonliste.

## Filer i leveransen

| Fil | Innhold |
|-----|-----------|
| `design-tokens.json` | Maskinlesbare farger, fonter, knappevarianter, anker |
| `mrcoffee-yootheme-snippets.css` | Kopiérbar CSS (klasser med `mc-`-prefiks) til YOOtheme «Tilpasset CSS» |
| Dette dokumentet | Forklaring og sidekart |

Kildekode for alt innhold og layout: `src/App.tsx` + `src/index.css` i repo-roten.

---

## 1. Fonter (Google Fonts)

Last inn begge i YOOtheme (Typografi / egne stiler) eller via `<link>` i malen:

- **Overskrifter (serif):** Cormorant Garamond – vekter 300–700 + kursiv  
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap`
- **Brødtekst / meny (sans):** Inter – 100–900  
  `https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap`

**Regel:** Alle `h1–h6` med serif; brød og navigasjon med sans. Meny: liten tekst, **uppercase**, tydelig **letter-spacing** (ca. `0.1em` / «tracking-widest»).

---

## 2. Fargepalett (HEX)

Bruk som CSS-variabler eller YOOtheme-farger.

| Token / navn | HEX | Bruk |
|--------------|-----|------|
| Chinese black | `#0C1519` | Mørk bakgrunn, hero-tekst på mørkt, kontakt-seksjon |
| Dark jungle | `#162127` | Dypere paneler, gradient |
| Jet | `#3A3534` | Sekundær mørk |
| Coffee | `#724B39` | Akkurat definert i tema; sjelden ren flat |
| Antique brass | `#C89F80` | Accent, knapper, «eyebrow»-labels, ikoner (unntatt bærekraft-kort) |
| Cream | `#F8F6EF` | Lys seksjonsbakgrunn (produkter) |
| Cream dark | `#E8E4D9` | Kantlinjer / subtil kontrast |
| Kvalitet / service lys beige | `#F1E7DF` | Bakgrunn kvalitet + service |
| Kort beige | `#EBE2DA` | Små kort i kvalitetsseksjonen |

**Ikon «Bærekraft» (kaffe og sortiment):** grønn tone tilsvarende Tailwind `emerald-600` (ca. `#059669` – juster visuelt i YOOtheme om nødvendig).

---

## 3. Komponenter

### Knapper (pill)

- **Form:** full avrunding (`border-radius: 9999px`), `padding` ca. `1rem 2rem`, `font-size` ca. `0.875rem`, **uppercase**, **semibold**, `letter-spacing` ca. `0.1em`, `transition ~300ms`.
- **Varianter** (se `design-tokens.json` → `buttons`):
  - **primary:** bakgrunn `#C89F80`, tekst `#0C1519`, hover hvit bakgrunn.
  - **ghost:** hvit ramme, hvit tekst, hover lett hvit overlay (hero).
  - **outline:** bronse ramme + tekst, hover fylt bronse + mørk tekst (mørk hero / smak-seksjon).
  - **outlineDark:** mørk ramme på lys bakgrunn, hover bronse.

Ferdige klasser finnes i `mrcoffee-yootheme-snippets.css` (`.mc-btn`, `.mc-btn--primary`, osv.).

### Glass / «glassmorphism»

- `.mc-glass` – mørk/semi-transparent panel med blur (brukes bl.a. på kort over bilder).
- `.mc-glass-light` – lys variant (kontakt-panel).

### Kontakt-seksjon bakgrunn

- `.mc-atmosphere` – radial gradient fra `#162127` til `#0C1519` (se CSS-fil).

### Seksjonsvertikal avstand

- `.mc-section-pad` – ca. `6rem` vertikalt mobil, `8rem` desktop (tilsvarer `py-24 md:py-32`).

---

## 4. Navigasjon (atferd)

- **Fast topp** (`position: fixed`), høy `z-index`.
- **Ikke scrollet:** transparent bakgrunn, **hvit** logo (`MrCoffee_Logo-m-tekst-hvit.svg`), **hvite** menylenker.
- **Scrollet:** lys «cream» bakgrunn med lett blur/skygge, **sort** logo (`MrCoffee_Logo-m-tekst-sort.svg`), **mørke** lenker.
- **Produkter:** undermeny med hover-bro (usynlig `padding-top` over dropdown) + animasjon fade/slide. Underpunkter: Kaffemaskiner, Kaffetraktere, Vannmaskiner, Alle produkter.
- **Mobil:** fullskjerm meny, mørk bakgrunn.

YOOtheme: bygg som Builder-layout + egen less/CSS for scroll-klasser på `<html>` eller `body` (JavaScript som toggler klasse ved `scrollY > 50`).

---

## 5. Anker-ID-er (én side / smooth scroll)

Bruk samme ID-er i Joomla-artikler eller Builder-seksjoner for å matche meny:

| ID | Seksjon |
|----|---------|
| `#` eller hjem | Hero topp |
| `#produkter` | Produkter og løsninger (intro + tre kort) |
| `#kaffemaskiner` | Kort / underseksjon kaffemaskiner |
| `#kaffetraktere` | Kaffetraktere |
| `#vannmaskiner` | Vannmaskiner |
| `#alle-produkter` | Kaffe og sortiment (smak-valg) |
| `#kvalitet` | Kvalitet på kaffe |
| `#service` | Tjeneste og vedlikehold |
| `#om-oss` | Om oss |
| `#baerekraft` | Bærekraft |
| `#kontakt` | Bestilling / kontakt |

---

## 6. Bilder (referanse fra `public/images/`)

Disse filnavnene brukes i koden (noen kan ligge utenfor git – kopier fra ferdig deploy eller designmappe):

- `Hero-kontor.jpg` – hero fullskjerm
- `Kaffekvalitet-1.jpg`, `Kaffekvalitet-2.jpg` – kvalitet, to stående bilder
- `produkt-kaffemaskin.jpg`, `produkt-kaffetrakter.jpg`, `produkt-vannmaskin.jpg` – produktkort
- `kaffesmak-bakgrunn.jpg` – bakgrunn «Kaffe og sortiment»
- `om-oss-kaffe.jpg`, `om-oss-kaffekopp.jpg` – om oss + service-bilde
- `baerekraft-bakgrunn_2.jpeg` – bærekraft full bredde bak
- `MrCoffee_Logo.svg`, `MrCoffee_Logo-m-tekst-hvit.svg`, `MrCoffee_Logo-m-tekst-sort.svg`
- `miljofyrtarn-sertifisert-virksomhet-horisontal-RGB.svg` (stats), `miljofyrtarn-sertifisert-virksomhet-vertikal-RGB.svg` (bærekraft-panel)

Ikoner under `public/icons/` (SVG) kan gjenbrukes eller tegnes på nytt i YOOtheme.

---

## 7. Innholdsrekkefølge (som på forsiden)

1. **Navbar** – logo, lenker, Produkter-dropdown, mobilmeny  
2. **Hero** – h1, tre punkter (Gratis leie / Gratis service / Ingen bindingstid), ingress, to knapper  
3. **Stats** – 2009 Etablert, 70k Kopper daglig, 24t Responstid, Miljøfyrtårn-logo  
4. **Kvalitet** (`#kvalitet`) – to kolonner tekst + to små kort + bildekomposisjon  
5. **Produkter** (`#produkter`) – intro + tre store kort med anker-ID per produkt  
6. **Kaffe og sortiment** (`#alle-produkter`) – mørk overlay på bilde, tre smak-kort (Kontorklassiker, Baristaen/kaffekjennern med bønne-ikon, Bærekraft med grønt blomst-ikon), tekst + «Se alle produkter»  
7. **Tjeneste og vedlikehold** (`#service`) – tekst + to kolonner (Gratis service / Rask support) + bilde + knapp  
8. **Om oss** (`#om-oss`) – bildegrid + tekst + knapp  
9. **Bærekraft** (`#baerekraft`) – glass-panel over bakgrunnsbilde + Miljøfyrtårn vertikal + knapp  
10. **Kontakt** (`#kontakt`) – to kolonner kontaktinfo + skjema  
11. **Footer** – logo, lenker, copyright  

Tekst kan kopieres direkte fra `src/App.tsx` (søk etter seksjonsnavn).

---

## 8. YOOtheme – praktiske tips

1. **Style:** Opprett et child theme eller bruk «Tilpasset CSS» og lim inn `mrcoffee-yootheme-snippets.css`; legg til egne klasser på Builder-rader/kolonner (`mc-section-pad`, `mc-atmosphere`, osv.).
2. **Typografi:** Sett global heading-font til Cormorant Garamond og body til Inter; match vekter til design.
3. **Sticky header:** Bruk YOOthemes sticky navbar + egendefinert klasse ved scroll (lite JS) for logo- og fargebytte.
4. **Smooth scroll:** Joomla/YOOtheme kan aktivere smooth scroll til anker; sørg for at seksjons-ID-er matcher tabellen over.
5. **JSON:** Importer `design-tokens.json` i eget verktøy (Figma tokens plugin) om kollega bruker Figma parallelt.

---

## 9. Lisens / kilde

Design og innhold tilhører prosjektet MrCoffee. Repo: samme mappe som `docs/`. Ved spørsmål om avvik mellom live og fil: **sannhetskilde er `src/App.tsx`**.
