/**
 * Zentrale Konfigurationsdatei für garten.ai
 * Single Source of Truth für alle wiederkehrenden Stammdaten.
 *
 * Änderungen hier wirken sich auf alle Komponenten aus, die diese Daten importieren:
 * - BaseLayout.astro (Structured Data, Meta)
 * - Footer.astro
 * - SectionPartners.astro
 * - about.astro, service.astro, contact.astro
 * - impress.astro, privacy.astro
 */

// ============================================================================
// TYPES
// ============================================================================

export interface Business {
  owner: string;
  company: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  countryCode: string;
  vatId: string;
  insurer: {
    name: string;
    street: string;
    city: string;
    coverage: string;
  };
}

export interface Contact {
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  websites: {
    main: string;
    dev: string;
    solutions: string;
  };
  linkedin: {
    url: string;
    handle: string;
  };
  calendaring: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface FocusArea {
  id: number;
  title: string;
}

export interface CurrentMandate {
  id: number;
  company: string;
  role: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  origin: string;
  locale: string;
  ogImage: string;
}

// ============================================================================
// DATA
// ============================================================================

/**
 * Geschäftsdaten für Impressum, Datenschutz und Structured Data
 */
export const business: Business = {
  owner: "Patrik Garten",
  company: "Patrik Garten AI Development",
  street: "Phönixstraße 30",
  postalCode: "44263",
  city: "Dortmund",
  country: "Deutschland",
  countryCode: "DE",
  vatId: "DE351701080",
  insurer: {
    name: "exali AG",
    street: "Franz-Kobinger-Str. 9",
    city: "86157 Augsburg",
    coverage: "weltweit",
  },
};

/**
 * Kontaktinformationen
 */
export const contact: Contact = {
  email: "info@garten.ai",
  phoneDisplay: "+49 1516 4587494",
  phoneHref: "+4915164587494",
  websites: {
    main: "https://garten.ai",
    dev: "https://garten.dev",
    solutions: "https://garten.solutions",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/paifgx",
    handle: "/in/paifgx",
  },
  calendaring: "https://app.reclaim.ai/m/gartenai/meet",
};

/**
 * Standard-Metadaten für die Website
 */
export const siteMeta: SiteMeta = {
  title: "Patrik Garten · AI Solution Architect & Software Engineer",
  description:
    "Freelance AI Solution Architect, Software Engineer & IT-Dozent. End-to-end KI-Architekturen – von klassischen ML-Systemen bis zu LLM-/GenAI-Plattformen – sowie Security-by-Design für regulierte DACH-Unternehmen.",
  origin: "https://garten.ai",
  locale: "de_DE",
  ogImage: "/og-image.png",
};

/**
 * Kennzahlen für about.astro und service.astro
 * Konsistent mit Notion-Knowledgebase
 */
export const stats: Stat[] = [
  { id: 1, value: ">150", label: "Projekte in regulierten Branchen" },
  { id: 2, value: "60%", label: "Kooperationen mit Product & Security" },
  { id: 3, value: "24h", label: "Reaktionszeit auf Projektanfragen" },
];

/**
 * Service-spezifische Kennzahlen (service.astro)
 */
export const serviceStats: Stat[] = [
  { id: 1, value: "25+", label: "aktive KI- & Plattforminitiativen (ML & GenAI)" },
  { id: 2, value: "<90d", label: "Time-to-Value für MVP/POC" },
  { id: 3, value: "3", label: "Engagement-Modi kombinierbar" },
];

/**
 * Mandatsliste für SectionPartners.astro
 * Reihenfolge: aktuellste/prominenteste zuerst
 */
export const clients: string[] = [
  "Universitätsklinikum Bonn",
  "FlowCraftDB",
  "CANCOM",
  "AICT Group",
  "DB Fernverkehr AG",
  "MeinPaul GmbH",
  "Nextise GmbH",
  "GFU Cyrus AG",
  "Bringmeister GmbH",
];

/**
 * Fokusfelder für Footer und andere Stellen
 * Konsistent mit Notion-Knowledgebase Abschnitt 0 (Kurzprofil)
 */
export const focusAreas: FocusArea[] = [
  { id: 1, title: "Prozesse automatisieren & Medienbrüche abbauen" },
  { id: 2, title: "Wissen sichern & Ausfälle auffangen" },
  { id: 3, title: "Sicherer KI-Einsatz nach BSI IT-Grundschutz, ISO/IEC 27001 & DSGVO" },
];

/**
 * Ausgewählte aktuelle Mandate für Footer
 * Teilmenge der wichtigsten laufenden Projekte
 */
export const currentMandates: CurrentMandate[] = [
  { id: 1, company: "Universitätsklinikum Bonn", role: "AI Solution Architect" },
  { id: 2, company: "FlowCraftDB", role: "Event-driven GenAI Plattform" },
  { id: 3, company: "AICT Group", role: "Co-Founder & CIO" },
];

/**
 * Kontaktkanäle für contact.astro
 */
export const contactChannels = [
  {
    label: "E-Mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    description: "Direkte Anfrage, CV oder Portfolio erhalten.",
  },
  {
    label: "LinkedIn",
    value: contact.linkedin.handle,
    href: contact.linkedin.url,
    description: "Updates, Referenzen und Austausch.",
  },
  {
    label: "Website",
    value: "www.garten.ai",
    href: contact.websites.main,
    description: "Weitere Projekte, Blog & Ressourcen.",
  },
];

/**
 * Verfügbarkeitsinfos für contact.astro
 */
export const availability = [
  {
    title: "Verfügbarkeit",
    detail:
      "Teil- oder Vollzeitmandate, Start kurzfristig möglich. Remote im DACH-Raum, Vor-Ort nach Absprache.",
  },
  {
    title: "Fokus 2024/2025",
    detail:
      "KI & GenAI im Gesundheitswesen, E-Commerce, Wissensmanagement und Public Sector – von klassischen ML-Anwendungen bis zu LLM-Systemen. Beratungs- & Delivery-Kombinationen bevorzugt.",
  },
  {
    title: "Ausgewählte Mandate",
    detail: currentMandates.map((m) => m.company).join(", ") + ".",
  },
];

/**
 * Navigationseinträge (Header)
 */
export const navigationItems = [
  { name: "Werdegang", href: "/about" },
  { name: "Dienstleistungen", href: "/service" },
];

/**
 * Footer-Navigation
 */
export const footerNavigation = [
  { name: "Werdegang", href: "/about" },
  { name: "Dienstleistungen", href: "/service" },
  { name: "Kontakt", href: "/contact" },
  { name: "Impressum", href: "/impress" },
  { name: "Datenschutz", href: "/privacy" },
];

/**
 * Seitennamen für Breadcrumbs (BaseLayout)
 */
export const pathNames: Record<string, string> = {
  about: "Werdegang",
  service: "Dienstleistungen",
  contact: "Kontakt",
  impress: "Impressum",
  privacy: "Datenschutz",
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Gibt die vollständige Adresse als einzelnen String zurück
 */
export function getFullAddress(): string {
  return `${business.street}, ${business.postalCode} ${business.city}, ${business.country}`;
}

/**
 * Gibt die Adresse für Structured Data zurück
 */
export function getPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: business.street,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressCountry: business.countryCode,
  };
}

