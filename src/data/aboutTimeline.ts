export interface TimeEntry {
  id: number;
  date: string;
  endDate?: string;
  title: string;
  content: string;
}

export const timeEntries: TimeEntry[] = [
  {
    id: 1,
    date: "2025-11",
    title: "AI Solution Architect – Universitätsklinikum Bonn",
    content:
      "Middleware für personalisierte Medizin aufgebaut: klinische Datensätze werden qualitätsgesichert validiert, harmonisiert und sicher zwischen lokalen Systemen und nationalen Forschungsnetzwerken ausgetauscht, ohne sensible Interna offenzulegen.",
  },
  {
    id: 2,
    date: "2025-02",
    endDate: "2025-08",
    title: "AI Consultant & Software Engineer – CANCOM Assistant",
    content:
      "CANCOM Assistant als sicheres Multi-LLM-Framework vorangetrieben: Auswahl & Kombination von GPT-, Mistral-Stacks, Knowledge Bases mit Unternehmensdaten, SSO/Berechtigungen und ERP-/CRM-Anbindungen für regulierte Kund:innen.",
  },
  {
    id: 3,
    date: "2024-12",
    title: "AI Solution Architect – FlowCraftDB",
    content:
      "Event-getriebene Datenanreicherung im E-Commerce: LangChain-Workflows, FastAPI-Services, Docker/Kubernetes, AWS/Azure, Terraform und Observability via Prometheus/Grafana/ELK, um Kampagnen ohne Copy-Paste und mit nachvollziehbarer Datenherkunft zu steuern.",
  },
  {
    id: 4,
    date: "2024-06",
    title: "Co-Founder & CIO – AICT Group",
    content:
      "Architektur & Governance einer KI-Plattform zur Konfliktprävention (LLMs, Knowledge Graphs, Realtime) mit Security/Privacy-by-Design, Microservices und Team-Enablement, damit sensible Erkenntnisse revisionssicher und partnerfähig geteilt werden können.",
  },
  {
    id: 5,
    date: "2024-04",
    title: "IT-Trainer & Coach – Nextise / ptm / GFU",
    content:
      "Trainings zu Webentwicklung, DevOps, moderner Softwarearchitektur und KI; maßgeschneiderte Curricula, IT-Grundschutz/ISO 27001 Inhalte und >100 Teilnehmende, damit Unternehmen interne Kompetenz statt externe Abhängigkeit aufbauen.",
  },
  {
    id: 6,
    date: "2024-03",
    endDate: "2025-03",
    title: "AI Engineer – mib Management Institut Bochum",
    content:
      "RAG-Assistenz für 'copiki' mit semantischer Suche, Prompt-Flows, API-Design, Security-Maßnahmen sowie Betrieb mit Python, FastAPI, OpenSearch und Docker/Kubernetes, damit Berater:innen Antworten ohne manuelles Nachfassen liefern können.",
  },
  {
    id: 7,
    date: "2017-10",
    title: "GARTEN gegründet – Freelance-Label",
    content:
      "Freelance-Label für Engineering/Bildung & KI-Lösungen: Architektur, Entwicklung, Betrieb und Trainingsprogramme für Auftraggeber wie DB Fernverkehr, CANCOM, MeinPaul und Bringmeister, mit Fokus auf Verantwortung statt Prototyping.",
  },
];
