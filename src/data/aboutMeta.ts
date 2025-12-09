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
    title: "Digitale Architektur & Workflow-Design",
    icon: "ServerStackIcon",
    description:
      "Analyse bestehender Prozess- und Systemlandschaften, Definition von Zielbildern und Soll-Prozessen, Design von Architekturen für Geschäftslogik, APIs, Events, Datenmodelle und Integrationslayer.",
  },
  {
    id: 2,
    title: "Assistenzsysteme & Automatisierung",
    icon: "CpuChipIcon",
    description:
      "Aufbau unternehmensspezifischer Assistenz- und Automatisierungslösungen. Kombination aus klassischer Automatisierung und intelligenten Komponenten (LLMs, RAG, Klassifikatoren), wo sie Mehrwert liefern.",
  },
  {
    id: 3,
    title: "Governance & Security-by-Design",
    icon: "ShieldCheckIcon",
    description:
      "Sicherheits-, Datenschutz- und Governance-Fragen von Anfang an mitgedacht (orientiert an IT-Grundschutz/ISO). Dokumentation, Runbooks und Trainingspfade für nachhaltigen Betrieb.",
  },
  {
    id: 4,
    title: "Beratung & Enablement",
    icon: "ChartBarIcon",
    description:
      "Sparring für Geschäftsführung & Leitungen, Architektur-Workshops mit IT & Fachbereichen, Trainings zu moderner Softwarearchitektur und KI-/LLM-Architekturen mit Praxisfokus.",
  },
];
