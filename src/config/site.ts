/**
 * Central configuration file to prevent data inconsistencies and ensure
 * all components use the same business, contact, and content data.
 */

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

/**
 * Used across legal pages and structured data to ensure consistency.
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

export const uspPrimary =
  "Ich helfe Mittelstand & IT-Teams, aus KI-Experimenten produktive Workflows zu machen – integriert in bestehende Systeme, mit Security-by-Design und Doku, die für Audits ausgelegt ist.";

export const uspAlt =
  "Ich baue produktive KI-Systeme für Mittelstand & IT-Dienstleister – mit sauberer Architektur, Integration & Governance, statt noch ein weiteres KI-Tool in Ihren Stack zu kippen.";

export const siteMeta: SiteMeta = {
  title: "Patrik Garten · AI Solution Architect & Software Engineer",
  description:
    "Freelance AI Solution Architect, Software Engineer & IT-Dozent. End-to-end KI-Architekturen – von klassischen ML-Systemen bis zu LLM-/GenAI-Plattformen – sowie Security-by-Design für regulierte DACH-Unternehmen.",
  origin: "https://garten.ai",
  locale: "de_DE",
  ogImage: "/og-image.png",
};

/**
 * Shared stats to keep about and service pages consistent with Notion knowledgebase.
 */
export const stats: Stat[] = [
  { id: 1, value: "8+", label: "Jahre Erfahrung in Architektur & Development" },
  { id: 2, value: "60%", label: "Kooperationen mit Product & Security" },
  { id: 3, value: "24h", label: "Reaktionszeit auf Projektanfragen" },
];

export const serviceStats: Stat[] = [
  {
    id: 1,
    value: "25+",
    label: "aktive KI- & Plattforminitiativen (ML & GenAI)",
  },
  { id: 2, value: "<90d", label: "Time-to-Value für MVP/POC" },
  { id: 3, value: "3", label: "Engagement-Modi kombinierbar" },
];

/**
 * Ordered by recency/prominence to highlight most relevant work first.
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
 * Aligned with Notion knowledgebase to maintain consistent messaging.
 */
export const focusAreas: FocusArea[] = [
  { id: 1, title: "Prozesse automatisieren & Medienbrüche abbauen" },
  { id: 2, title: "Wissen sichern & Ausfälle auffangen" },
  {
    id: 3,
    title: "KI-Einsatz orientiert an BSI IT-Grundschutz, ISO/IEC 27001 & DSGVO",
  },
];

export const currentMandates: CurrentMandate[] = [
  {
    id: 1,
    company: "Universitätsklinikum Bonn",
    role: "AI Solution Architect",
  },
  { id: 2, company: "FlowCraftDB", role: "Event-driven GenAI Plattform" },
  { id: 3, company: "AICT Group", role: "Co-Founder & CIO" },
];

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

export const availability = [
  {
    title: "Verfügbarkeit",
    detail:
      "Teil- oder Vollzeitmandate, Start kurzfristig möglich. Remote im DACH-Raum, Vor-Ort nach Absprache.",
  },
  {
    title: "Fokus 2024/2025",
    detail:
      "KI & GenAI für Mittelstand & IT-Dienstleister – Schwerpunkte Gesundheitswesen und B2B-SaaS/IT-Dienstleister. Von klassischen Anwendungen bis zu ML/LLM-Systemen.",
  },
  {
    title: "Ausgewählte Mandate",
    detail: currentMandates.map((m) => m.company).join(", ") + ".",
  },
];

export const navigationItems = [
  { name: "Werdegang", href: "/about" },
  { name: "Dienstleistungen", href: "/service" },
];

export const footerNavigation = [
  { name: "Werdegang", href: "/about" },
  { name: "Dienstleistungen", href: "/service" },
  { name: "Kontakt", href: "/contact" },
  { name: "Impressum", href: "/impress" },
  { name: "Datenschutz", href: "/privacy" },
];

export const pathNames: Record<string, string> = {
  about: "Werdegang",
  service: "Dienstleistungen",
  contact: "Kontakt",
  impress: "Impressum",
  privacy: "Datenschutz",
  "workflow-automatisierung": "Workflow-Automatisierung",
};

export function getFullAddress(): string {
  return `${business.street}, ${business.postalCode} ${business.city}, ${business.country}`;
}

export function getPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: business.street,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressCountry: business.countryCode,
  };
}
