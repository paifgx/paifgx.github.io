export interface Pillar {
  id: number;
  label: string;
  description: string;
}

export interface Principle {
  id: number;
  title: string;
  description: string;
}

export interface Capability {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export const pillars: Pillar[] = [
  {
    id: 1,
    label: "Marke & Rolle",
    description:
      "AI Solution Architect für den deutschen Mittelstand. Freelancer, Multi-Unternehmer, Software Engineer und Sparringspartner für Geschäftsführung, Fachbereiche und IT-Teams.",
  },
  {
    id: 2,
    label: "Arbeitsweise",
    description:
      "Problem vor Technologie · System statt Tool · Governance & Security-by-Design · Vendor-Neutralität · Enablement statt Handoff",
  },
  {
    id: 3,
    label: "Fokus",
    description:
      "Wertschöpfende Kernprozesse in E-Commerce, Gesundheitswesen, IT-Dienstleistern und wissensintensiven Organisationen. Keine Showcases, sondern stabile Systeme.",
  },
];

export const principles: Principle[] = [
  {
    id: 1,
    title: "Nachhaltigkeit",
    description:
      "Langlebige, wartbare Lösungen statt Wegwerf-Prototypen. Systeme, die Teams entlasten und Wissen verteilen statt neue Abhängigkeiten schaffen. Schlanke, effiziente Architekturen statt Overengineering.",
  },
  {
    id: 2,
    title: "Verantwortung",
    description:
      "Kein Schönreden von Risiken. Klare Aussagen zu Datenschutz, Sicherheit, Machbarkeit. Transparente Kommunikation von Annahmen, Grenzen und Trade-offs. Governance & Security-by-Design von Anfang an.",
  },
  {
    id: 3,
    title: "Humanismus",
    description:
      "Systeme sollen Menschen stärken, nicht ersetzen oder kontrollieren. Fokus auf bessere Arbeit für Wissensarbeiter: weniger stumpfe Tätigkeiten, mehr Empathie, Kreativität, Verantwortung.",
  },
  {
    id: 4,
    title: "Partnerschaft",
    description:
      "Zusammenarbeit auf Augenhöhe, keine Blackbox-Agentur. Ziel: langfristige, vertrauensvolle Beziehungen statt einmalige Feuerwehr-Einsätze. Dokumentation & Ownership bleiben beim Kunden.",
  },
];

export const capabilities: Capability[] = [
  {
    id: 1,
    title: "Digitale Prozesse & Architektur",
    icon: "ServerStackIcon",
    description:
      "End-to-End-Architekturen und Workflows, mit denen Ihre Kernprozesse klar definiert, automatisierbar und zukunftsfähig werden.",
  },
  {
    id: 2,
    title: "Assistenz & Automatisierung",
    icon: "CpuChipIcon",
    description:
      "Assistenz- und Automatisierungslösungen, die wiederkehrende Wissensarbeit abnehmen und sich sauber in Ihre bestehenden Systeme integrieren.",
  },
  {
    id: 3,
    title: "Security-by-Design",
    icon: "ShieldCheckIcon",
    description:
      "Governance-, Sicherheits- und Datenschutzkonzepte, die KI- und Automatisierungsvorhaben revisionssicher und auditierbar machen.",
  },
  {
    id: 4,
    title: "Beratung & Enablement",
    icon: "ChartBarIcon",
    description:
      "Sparring, Workshops und Trainings, damit Ihr Team selbst fundierte Architektur- und KI-Entscheidungen treffen kann.",
  },
];
