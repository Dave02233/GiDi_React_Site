# GI.DI. Automazione - Project Brief

## Obiettivo del Progetto

Sviluppo di un sito web moderno e responsive per **GI.DI. Automazione**, un'azienda specializzata in automazione industriale. Il sito deve presentare i servizi dell'azienda in modo professionale, accessibile e ottimizzato per tutti i dispositivi.

## Informazioni Azienda

**Nome**: GI.DI. Automazione  
**Settore**: Automazione Industriale  
**Servizi Principali**:
- **Automazione**: Programmazione PLC, HMI, SCADA, Motion e Revamping
- **Informatica**: Soluzioni informatiche su misura, Industria 4.0 e Raccolta Dati
- **Robotica**: Cobot e Robot personalizzati per ogni contesto industriale

## Stack Tecnologico

- **Framework Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Linguaggio**: JavaScript (JSX)
- **Styling**: CSS Modules/Standard CSS
- **Package Manager**: npm
- **Linting**: ESLint

## Struttura del Progetto

```
GiDi_React_Site/
├── public/              # Asset statici (immagini, video, icone)
├── src/
│   ├── App.jsx         # Componente principale
│   ├── main.jsx        # Entry point dell'applicazione
│   ├── Components/     # Componenti React riutilizzabili
│   │   ├── Header.jsx      # Intestazione con menu responsive
│   │   ├── Cards.jsx       # Card dei servizi aziendali
│   │   ├── Presentazione.jsx # Sezione video presentazione
│   │   └── *.css       # Stili per ogni componente
│   └── Functions/      # Utilità e funzioni helper
│       └── Mailer.js   # Gestione invio email/form contatti
├── vite.config.js      # Configurazione Vite
└── package.json        # Dipendenze e script
```

## Componenti Principali

### 1. Header
- **File**: `src/Components/Header.jsx`
- **Funzionalità**:
  - Menu hamburger responsive per dispositivi mobile
  - Effetto scroll con cambio stile header (classe `scrolled`)
  - Animazioni apertura/chiusura menu
  - Logo e titolo aziendale
- **Requisiti Design**:
  - Fixed position per rimanere visibile durante lo scroll
  - Transizioni fluide per tutte le interazioni
  - Icone SVG per menu (sandwichButton.svg, closeButton.svg)

### 2. Cards
- **File**: `src/Components/Cards.jsx`
- **Funzionalità**:
  - Tre card principali per i servizi (Automazione, Informatica, Robotica)
  - Pulsanti "Scopri di più" con link ad ancore nella pagina
  - Design a griglia responsive
- **Requisiti Design**:
  - Layout che si adatta da desktop (griglia 3 colonne) a mobile (stack verticale)
  - Effetti hover per interattività
  - Immagini di background o icone per ogni servizio

### 3. Presentazione
- **File**: `src/Components/Presentazione.jsx`
- **Funzionalità**:
  - Sezione video presentazione aziendale
  - Autoplay video quando visibile al 90% (Intersection Observer)
  - Pausa automatica quando fuori viewport
  - Controlli video nativi disponibili
- **Requisiti Design**:
  - Container centrato e responsive
  - Video che si adatta alle dimensioni dello schermo
  - Titolo della sezione

## Principi di Design

### Style Moderno
- **Layout pulito e minimalista**
- **Tipografia professionale** e leggibile
- **Palette colori industriale**: toni di blu/grigio/nero con accenti di colore per CTA
- **Spaziature generose** per respirabilità
- **Animazioni sottili** per migliorare UX senza distrarre
- **Immagini e video di alta qualità**

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Grid flessibili e Flexbox** per layout adattivi
- **Immagini responsive** con dimensioni ottimizzate
- **Touch-friendly**: pulsanti e link con area cliccabile adeguata (min 44x44px)
- **Menu hamburger su mobile**, navbar completa su desktop
- **Video responsive** con aspect ratio mantenuto

### Performance
- **Vite per build veloce e HMR**
- **Lazy loading** per immagini e video
- **Ottimizzazione asset** (compressione immagini/video)
- **CSS modulare** per evitare conflitti e ridurre bundle size

## Configurazione Dev Server

```javascript
server: {
  host: '0.0.0.0',  // Accessibile da rete locale
  port: 5173
}
```

## Script NPM Disponibili

- `npm run dev` - Avvia dev server
- `npm run build` - Build di produzione
- `npm run preview` - Anteprima build di produzione
- `npm run lint` - Controllo qualità codice con ESLint

## Funzionalità Future/In Sviluppo

- **Mailer.js**: Sistema di contatto/form email
- **Sezioni dettagliate** per ogni servizio (automazione, informatica, robotica)
- **Portfolio/Case studies**
- **Testimonianze clienti**
- **Footer** con contatti e social media
- **SEO optimization**
- **Multilingua** (Italiano/Inglese)

## Linee Guida per Sviluppo

### Best Practices React
- Componenti funzionali con Hooks
- Naming convention: PascalCase per componenti
- Props typing e validazione
- Gestione stato con useState/useEffect
- Event handlers con naming on* (onClick, onToggle)

### Best Practices CSS
- Classi BEM o naming descrittivo
- CSS file separati per ogni componente
- Variabili CSS per colori e spacing ricorrenti
- Media queries per responsive
- Transizioni CSS per animazioni performanti

### Accessibilità (A11y)
- Alt text per immagini
- Aria labels dove necessario
- Contrast ratio WCAG AA minimo
- Navigazione da tastiera funzionante
- Focus states visibili

## Note Importanti

1. **Tutti i device devono avere la stessa esperienza utente**, adattata alle dimensioni dello schermo
2. **Performance è prioritaria**: ottimizzare immagini, lazy loading, code splitting
3. **Professionalità del brand**: il design deve riflettere competenza tecnica e affidabilità
4. **Call-to-action chiari**: ogni sezione deve guidare l'utente verso un'azione (contatto, scopri di più)
5. **Testare su dispositivi reali**: non solo browser dev tools

## Testing

- Testare su Chrome, Firefox, Safari, Edge
- Testare su dispositivi reali: smartphone, tablet, desktop
- Verificare comportamento scroll, menu, video
- Validare form contatti
- Controllare tempi di caricamento

## Deploy

- Build con `npm run build`
- Cartella `dist/` contiene i file statici ottimizzati
- Hosting consigliato: Vercel, Netlify, o server tradizionale con supporto SPA

---

**Data creazione**: 28 Novembre 2025  
**Versione**: 1.0  
**Stato**: In Sviluppo Attivo
