// SEO keyword landing pages (TODO-1 + TODO-3). Single source of truth shared by
// the SPA router (src/App.tsx) and the post-build prerenderer
// (scripts/prerender.ts) so the client-rendered page and the crawlable static
// HTML can never drift apart.
//
// Each page is a home-style landing (it reuses the Pricing packages) optimized
// for one principal German keyword, with the full German keyword set woven into
// the copy. Served at the root path `/<slug>` to match the domain.de/KEYWORD
// pattern. Claims are kept honest (no illegal "no-blackout"/piracy pitch).
//
// Per-site constants — the only lines that change when this file is cloned to
// the other German sites (scripts/replicate_de_kw.mjs).
const SITE = "https://www.iptvmeezzy.app";
const BRAND = "MEEZZY";
const WA = "https://wa.me/447462229301";

export interface KeywordFaq {
  q: string;
  a: string;
}

export interface KeywordPage {
  /** Root-level path segment, e.g. "iptv-12-monate" → https://domain.de/iptv-12-monate */
  slug: string;
  /** Principal keyword this page targets. */
  keyword: string;
  /** <title> (kept ≤ ~60 chars where possible). */
  title: string;
  /** Meta description (≤ 160 chars). */
  description: string;
  /** On-page H1. */
  h1: string;
  /** Intro paragraphs rendered above the packages. [label](url) markdown links allowed; "## " → H2. */
  lead: string[];
  /** FAQ block (rendered on-page and emitted as FAQPage JSON-LD). */
  faq: KeywordFaq[];
}

export const KEYWORD_PAGES: KeywordPage[] = [
  {
    slug: "iptv-meezzy",
    keyword: "IPTV Meezzy",
    title: "IPTV Meezzy — IPTV Abo in 4K | MEEZZY",
    description: "IPTV Meezzy: über 69.000 Live-Sender und 220.000+ Filme & Serien in bis zu 4K/8K. Transparentes IPTV-Abo mit 15 Tagen Geld-zurück-Garantie und 24/7 Support.",
    h1: "IPTV Meezzy — dein IPTV-Abo für Deutschland",
    lead: [
      "IPTV Meezzy bei [MEEZZY](https://www.iptvmeezzy.app) bedeutet Premium-Fernsehen über das Internet: über 69.000 Live-Sender und mehr als 220.000 Filme und Serien als Video-on-Demand, in Full HD, 4K und auf kompatiblen Inhalten bis zu 8K. Statt Kabel, Satellit und mehrere Streaming-Dienste bekommst du alles in einem transparenten IPTV-Abonnement.",
      "Wer „iptv meezzy\" sucht, will vor allem Stabilität und einen seriösen Anbieter. [MEEZZY](https://www.iptvmeezzy.app) nennt Pakete und Preise offen, pflegt den Sender- und VOD-Katalog täglich und ist per WhatsApp erreichbar – anders als die anonymen Wiederverkäufer hinter vielen Billigangeboten.",
      "## Was MEEZZY bietet",
      "Deutsche Sender wie ARD, ZDF, RTL, Sat.1 und ProSieben, dazu Sport mit Sky- und DAZN-Kanälen, internationale Programme und eine riesige Mediathek. Dank eines Relay-Server-Netzwerks bleibt das Bild auch zur Primetime und an vollen Fußballabenden flüssig – für HD reichen rund 16 Mbit/s, für 4K etwa 25 Mbit/s.",
      "## Pakete & Einrichtung",
      "Wähle unten dein Paket und aktiviere es in wenigen Minuten. Dein Zugang läuft auf Smart TV, Amazon Fire TV Stick, Android-Box, MAG und Apple TV und funktioniert mit IPTV Smarters Pro, TiviMate sowie jedem Xtream-Codes- oder M3U-Player. Dazu 15 Tage Geld-zurück-Garantie und 24/7 Support.",
    ],
    faq: [
      { q: "Was ist IPTV Meezzy?", a: "IPTV Meezzy ist ein IPTV-Abonnement von MEEZZY mit über 69.000 Live-Sendern und 220.000+ Filmen & Serien als VOD in bis zu 4K/8K – für Smart TV, Fire TV, Android und Apple TV." },
      { q: "Wie viel kostet das IPTV-Abo?", a: "Die Preise pro Paket und Laufzeit findest du in der Übersicht oben – mit transparentem Festpreis, ohne versteckte Kosten, und mit 15 Tagen Geld-zurück-Garantie." },
      { q: "Welche Geräte und Apps werden unterstützt?", a: "Smart TV, Amazon Fire TV Stick, Android-Box, MAG und Apple TV – über IPTV Smarters Pro, TiviMate und jeden Xtream-Codes-/M3U-Player." },
      { q: "Gibt es eine Geld-zurück-Garantie?", a: "Ja. MEEZZY bietet 15 Tage Geld-zurück-Garantie und 24/7 Support per WhatsApp." },
    ],
  },

  // ── 1 ── iptv abo / iptv-abonnement / iptv 12 monate ──────────────────────
  {
    slug: "iptv-12-monate",
    keyword: "IPTV Abo 12 Monate",
    title: `IPTV Abo 12 Monate — IPTV-Abonnement | ${BRAND}`,
    description:
      "IPTV Abo für 12 Monate: 69.000+ Sender und 220.000+ Filme & Serien in 4K. Das günstige IPTV-Abonnement von Deutschland mit 15 Tagen Geld-zurück-Garantie.",
    h1: "IPTV Abo für 12 Monate — Dein IPTV-Abonnement für Deutschland",
    lead: [
      `Ein [IPTV Abo](${SITE}/iptv-12-monate) für 12 Monate ist die günstigste Art, Live-Fernsehen und Video-on-Demand über das Internet zu streamen. Mit dem Jahresabo von ${BRAND} erhältst du über 69.000 Live-Sender und mehr als 220.000 Filme und Serien als VOD — in Full HD, 4K und bis zu 8K UHD. Statt zwölf Monate einzeln zu zahlen, sicherst du dir mit dem IPTV-Abonnement den besten Preis pro Monat.`,
      `Wer „iptv abo kaufen" sucht, vergleicht meist Monatsabo und Jahresabo. Ein 12-Monats-IPTV-Abonnement rechnet sich klar: ein fester, transparenter Preis, keine versteckten Kosten und permanente Updates der Sender- und VOD-Liste. ${BRAND} nennt seine Pakete und Preise offen und hält den Katalog täglich aktuell — anders als die anonymen Wiederverkäufer hinter vielen Billigangeboten.`,
      `## Was bringt ein IPTV Abo für 12 Monate?`,
      `Ein gutes IPTV-Abonnement ersetzt Kabel, Satellit und mehrere Streaming-Dienste in einem. Du bekommst deutsche Sender wie ARD, ZDF, RTL, Sat.1 und ProSieben, dazu internationale Programme, Sport mit Sky- und DAZN-Kanälen, sowie eine Mediathek mit 220.000+ Filmen und Serien. Alles läuft stabil und pufferfrei — für HD reichen rund 16 Mbit/s, für 4K etwa 25 Mbit/s Bandbreite.`,
      `## IPTV-Abonnement: Preise & Pakete`,
      `Wähle unten dein Paket und aktiviere es in wenigen Minuten. Jedes IPTV Abo von ${BRAND} enthält den vollständigen Sender- und VOD-Katalog, läuft auf Smart TV, Amazon Fire TV Stick, Android-Box, MAG und Apple TV und funktioniert mit IPTV Smarters Pro, TiviMate sowie jedem Xtream-Codes- oder M3U-kompatiblen Player. Dazu 15 Tage Geld-zurück-Garantie und 24/7 Support. Du willst zuerst fragen? [Schreib uns auf WhatsApp](${WA}).`,
    ],
    faq: [
      {
        q: "Was kostet ein IPTV Abo für 12 Monate?",
        a: `Das 12-Monats-IPTV-Abonnement von ${BRAND} ist deutlich günstiger als zwölf einzelne Monate. Den genauen Preis pro Paket (1 oder 2 Geräte) findest du in der Preisübersicht oben — mit transparentem Festpreis und ohne versteckte Kosten.`,
      },
      {
        q: "Was ist im IPTV-Abonnement enthalten?",
        a: "Enthalten sind 69.000+ Live-Sender, 220.000+ Filme & Serien als VOD, Bildqualität bis 4K/8K, permanente Updates sowie Zugang per IPTV Smarters Pro, TiviMate und anderen Xtream-/M3U-Playern.",
      },
      {
        q: "Lohnt sich ein Jahresabo oder lieber ein Monatsabo?",
        a: "Ein 12-Monats-Abo hat den niedrigsten Preis pro Monat und muss nur einmal eingerichtet werden. Wer erst testen möchte, startet mit einem kürzeren Paket und profitiert von der 15-tägigen Geld-zurück-Garantie.",
      },
      {
        q: "Gibt es eine Geld-zurück-Garantie?",
        a: `Ja. Jedes IPTV Abo von ${BRAND} kommt mit 15 Tagen Geld-zurück-Garantie und 24/7 Support per WhatsApp.`,
      },
    ],
  },

  // ── 2 ── bester iptv anbieter / iptv anbieter liste / vergleich ───────────
  {
    slug: "welcher-iptv-anbieter-ist-der-beste",
    keyword: "bester IPTV Anbieter",
    title: `Bester IPTV Anbieter — IPTV Anbieter Liste | ${BRAND}`,
    description:
      "Welcher IPTV Anbieter ist der beste? IPTV Anbieter Liste & Vergleich: Woran du einen seriösen IPTV-Anbieter erkennst — 69.000+ Sender, 4K, Geld-zurück-Garantie.",
    h1: "Welcher IPTV Anbieter ist der beste? Liste & Vergleich",
    lead: [
      `Die Frage „welcher ist der [beste IPTV Anbieter](${SITE}/welcher-iptv-anbieter-ist-der-beste)?" lässt sich nicht mit Werbung beantworten, sondern nur mit nachprüfbaren Kriterien. Dieser Ratgeber zeigt dir eine ehrliche IPTV Anbieter Liste und erklärt, woran du einen seriösen IPTV-Anbieter erkennst — damit du nicht auf unseriöse Billigangebote hereinfällst.`,
      `Viele Suchen nach „bester iptv-anbieter" landen bei anonymen Wiederverkäufern ohne Impressum, ohne klare Preise und ohne Kündigungsregeln. Seriosität erkennst du an transparenten Preisen, einem echten, gepflegten Sender- und VOD-Katalog, einer Geld-zurück-Garantie und erreichbarem Support. ${BRAND} erfüllt diese Punkte und nennt Pakete und Preise offen.`,
      `## IPTV Anbieter Vergleich: 6 Kriterien`,
      `Ein guter IPTV-Anbieter wird gemessen, nicht beworben. Achte im IPTV Anbieter Vergleich auf: (1) Stabilität zur Primetime — teste während eines Live-Spiels am Abend, nicht nur nachmittags; (2) Testphase ohne Kreditkarte; (3) tatsächlich verfügbare deutsche Sender (ARD, ZDF, RTL, Sat.1, Sky, DAZN); (4) Bildqualität bis 4K/8K und pufferfreies Streaming; (5) App-Freiheit mit IPTV Smarters Pro, TiviMate und Xtream-Codes/M3U; (6) transparente Preise, Impressum, Geld-zurück-Garantie und 24/7 Support.`,
      `## Warum ${BRAND} ein seriöser IPTV-Anbieter ist`,
      `${BRAND} liefert 69.000+ Live-Sender inklusive Bundesliga- und Champions-League-Kanälen, 220.000+ Filme und Serien als VOD mit wöchentlichen Updates, Bildqualität bis 8K, Zugang per IPTV Smarters Pro und TiviMate auf Fire TV, Android, Apple TV und Smart TV sowie 15 Tage Geld-zurück-Garantie. Vergleiche die Pakete unten und entscheide selbst. Fragen? [Schreib uns auf WhatsApp](${WA}).`,
    ],
    faq: [
      {
        q: "Welcher IPTV Anbieter ist der beste?",
        a: `Der beste IPTV-Anbieter ist der, der zur Primetime stabil läuft, deutsche Sender wirklich enthält, transparent abrechnet und eine Geld-zurück-Garantie bietet. ${BRAND} erfüllt diese Kriterien mit 69.000+ Sendern, 4K/8K und 24/7 Support.`,
      },
      {
        q: "Woran erkenne ich einen seriösen IPTV-Anbieter?",
        a: "An transparenten Preisen und Impressum, einem echten und täglich gepflegten Senderkatalog, einer Testphase bzw. Geld-zurück-Garantie, erreichbarem Support und stabilen Streams auch bei Live-Sport am Abend.",
      },
      {
        q: "Gibt es eine echte IPTV Anbieter Liste zum Vergleichen?",
        a: "Verlasse dich nicht auf Werbe- oder Affiliate-Ranglisten. Vergleiche Anbieter selbst anhand der 6 Kriterien oben und nutze eine kostenlose Testphase bzw. die Geld-zurück-Garantie, um die Qualität zur Hauptsendezeit zu prüfen.",
      },
      {
        q: "Welche Geräte und Apps werden unterstützt?",
        a: `Dein ${BRAND}-Zugang funktioniert mit IPTV Smarters Pro, TiviMate und jedem Xtream-Codes-/M3U-Player auf Smart TV, Amazon Fire TV Stick, Android-Box, MAG und Apple TV.`,
      },
    ],
  },

  // ── 3 ── iptv bundesliga ──────────────────────────────────────────────────
  {
    slug: "iptv-bundesliga",
    keyword: "IPTV Bundesliga",
    title: `IPTV Bundesliga — Fußball live streamen | ${BRAND}`,
    description:
      `IPTV Bundesliga: Fußball, Sky- und DAZN-Sender, Konferenz & Champions League in 4K live streamen. 69.000+ Sender auf Smart TV, Fire TV & Co. — mit ${BRAND}.`,
    h1: "IPTV Bundesliga — Fußball live in 4K streamen",
    lead: [
      `Du willst die [IPTV Bundesliga](${SITE}/iptv-bundesliga) live sehen, ohne mehrere Abos zu kombinieren? Mit ${BRAND} streamst du Fußball, die Samstagskonferenz, Einzelspiele und die UEFA Champions League über ein einziges IPTV-Abonnement — in Full HD und 4K, auf jedem Gerät.`,
      `Die Bundesliga ist in Deutschland auf mehrere Anbieter verteilt (u. a. Sky und DAZN). ${BRAND} bündelt die relevanten Sport- und Fußball-Sender zusammen mit 69.000+ Live-Sendern und 220.000+ Filmen und Serien — so verpasst du weder Bundesliga noch Champions League, DFB-Pokal oder internationale Ligen.`,
      `## Bundesliga per IPTV: Das brauchst du`,
      `Für ruckelfreies Fußball-Streaming in HD solltest du rund 16 Mbit/s, für 4K etwa 25 Mbit/s Bandbreite haben. ${BRAND} liefert stabile Server auch zur Primetime, wenn alle gleichzeitig das Abendspiel sehen. Der Zugang läuft über IPTV Smarters Pro, TiviMate oder jeden Xtream-Codes-/M3U-Player auf Amazon Fire TV Stick, Smart TV, Android-Box, MAG und Apple TV — mit EPG-Programmführer für alle Spiele.`,
      `## Alle Spiele in einem IPTV-Abo`,
      `Statt Sky, DAZN und Streaming-Dienste einzeln zu zahlen, bekommst du mit ${BRAND} Live-Sport, Bundesliga-Konferenz, Champions League und die großen europäischen Ligen in einem Paket. Wähle unten dein IPTV-Abonnement, aktiviere in Minuten und sieh das nächste Spiel live. Fragen zum Sport-Angebot? [Schreib uns auf WhatsApp](${WA}).`,
    ],
    faq: [
      {
        q: "Kann ich die Bundesliga per IPTV streamen?",
        a: `Ja. Mit ${BRAND} streamst du Bundesliga-Spiele, die Samstagskonferenz und die Champions League über ein IPTV-Abonnement in Full HD und 4K — auf Smart TV, Fire TV, Android und Apple TV.`,
      },
      {
        q: "Welche Internetgeschwindigkeit brauche ich für Fußball in 4K?",
        a: `Für HD-Streams werden rund 16 Mbit/s empfohlen, für 4K etwa 25 Mbit/s. Bei mehreren gleichzeitigen Streams entsprechend mehr. ${BRAND} liefert stabile, pufferfreie Server auch zur Primetime.`,
      },
      {
        q: "Brauche ich für die Bundesliga mehrere Abos?",
        a: `Nein. ${BRAND} bündelt die relevanten Sport- und Fußball-Sender mit 69.000+ Live-Kanälen in einem IPTV-Abo, sodass du Bundesliga, Champions League und weitere Ligen ohne mehrere Einzelabos siehst.`,
      },
      {
        q: "Auf welchen Geräten läuft die IPTV Bundesliga?",
        a: "Auf Amazon Fire TV Stick, Smart TV, Android-Box, MAG und Apple TV — über IPTV Smarters Pro, TiviMate oder jeden Xtream-Codes-/M3U-kompatiblen Player mit EPG-Programmführer.",
      },
    ],
  },
];

export function getKeywordPage(slug: string): KeywordPage | undefined {
  return KEYWORD_PAGES.find((k) => k.slug === slug);
}
