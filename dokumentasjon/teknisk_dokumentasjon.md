# Teknisk Dokumentasjon - Skogvika VGS Nettside

## Filstruktur
```
eksamen 2025/
├── hovedside/
│   ├── hovedside.html
│   ├── hovedside.css
│   ├── studiespesialisering.html
│   ├── medier.html
│   ├── idrett.html
│   └── logo.png
├── soknad.html
├── ai.md
└── teknisk_dokumentasjon.md
```

## Hovedkomponenter

### 1. Hovedside (hovedside.html)
- Landingsside med oversikt over studieretninger
- Responsivt design med CSS Grid og Flexbox
- Interaktive kort for hver studieretning
- Integrert navigasjonsmeny

### 2. Studieretningssider
- Separate sider for hver studieretning
- Deler samme CSS-fil for konsistent design
- Inneholder detaljert informasjon om hvert program
- "Søk nå"-knapp som leder til søknadsskjema

### 3. Søknadsskjema (soknad.html)
- Validering av input-felt
- Responsivt design
- Strukturert i seksjoner for bedre oversikt

## CSS-implementasjon
- Bruker CSS-variabler for fargetema
- Responsive breakpoints:
  - Mobil: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Animasjoner på hover-effekter
- Glassmorfisme-design på kort

## Design-elementer
- Fargepalett:
  - Primærfarge: #2563eb
  - Sekundærfarge: #1e40af
  - Bakgrunn: #f8fafc
- Font: Inter (Google Fonts)
- Ikoner: Font Awesome 6.5.1

## Responsive Strategier
- Fluid typography
- CSS Grid med auto-fit
- Flexbox for mindre komponenter
- Mobile-first tilnærming

## Fremtidige Forbedringer
1. Implementere JavaScript for:
   - Form validering
   - Dynamiske elementer
   - Smooth scrolling
2. Legge til:
   - Cookie consent
   - Kontaktskjema
   - Nyhetsarkiv
