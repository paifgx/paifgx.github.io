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
      "Middleware für personalisierte Medizin aufgebaut: klinische Datensätze werden qualitätsgesichert validiert, harmonisiert und sicher zwischen lokalen Systemen und nationalen Forschungsnetzwerken ausgetauscht – ohne sensible Interna offenzulegen.",
  },
  {
    id: 2,
    date: "2025-10",
    title: "Software Engineer – Web Computing GmbH",
    content:
      "Performance-Optimierung der GenAI-Applikation, Tooling-Härtung mit TypeScript/JavaScript, Lerna-Monorepo, Docker und ChatGPT-gestützten Flows, damit Kund:innen schnellere Antwortzeiten und das interne Team belastbare Deployments erhält.",
  },
  {
    id: 3,
    date: "2025-02",
    endDate: "2025-08",
    title: "AI Consultant & Software Engineer – CANCOM Assistant",
    content:
      "CANCOM Assistant als sicheres Multi-LLM-Framework vorangetrieben: Auswahl & Kombination von GPT-, Mistral-Stacks, Knowledge Bases mit Unternehmensdaten, SSO/Berechtigungen und ERP-/CRM-Anbindungen für regulierte Kund:innen.",
  },
  {
    id: 4,
    date: "2024-12",
    endDate: "2025-02",
    title: "Teamlead & Flutter Engineer – CANCOM (Interne Anwendung)",
    content:
      "Interne Applikation verantwortet: cross-funktionales Team koordiniert, Flutter-App entwickelt, Backlog/Priorisierung mit Product & Security abgestimmt und CI/CD-/QA-Governance in Betriebsteams verankert.",
  },
  {
    id: 5,
    date: "2024-12",
    title: "AI Solution Architect – FlowCraftDB",
    content:
      "Event-getriebene Datenanreicherung im E-Commerce: LangChain-Workflows, FastAPI-Services, Docker/Kubernetes, AWS/Azure, Terraform und Observability via Prometheus/Grafana/ELK – um Kampagnen ohne Copy-Paste und mit nachvollziehbarer Datenherkunft zu steuern.",
  },
  {
    id: 6,
    date: "2024-06",
    title: "Co-Founder & CIO – AICT Group",
    content:
      "Architektur & Governance einer KI-Plattform zur Konfliktprävention (LLMs, Knowledge Graphs, Realtime) mit Security/Privacy-by-Design, Microservices und Team-Enablement, damit sensible Erkenntnisse revisionssicher und partnerfähig geteilt werden können.",
  },
  {
    id: 7,
    date: "2024-04",
    title: "IT-Trainer & Coach – Nextise / ptm / GFU",
    content:
      "Trainings zu Webentwicklung, DevOps, moderner Softwarearchitektur und KI; maßgeschneiderte Curricula, IT-Grundschutz/ISO 27001 Inhalte und >100 Teilnehmende, damit Unternehmen interne Kompetenz statt externe Abhängigkeit aufbauen.",
  },
  {
    id: 8,
    date: "2024-03",
    endDate: "2025-03",
    title: "AI Engineer – mib Management Institut Bochum",
    content:
      "RAG-Assistenz für 'copiki' mit semantischer Suche, Prompt-Flows, API-Design, Security-Maßnahmen sowie Betrieb mit Python, FastAPI, OpenSearch und Docker/Kubernetes – damit Berater:innen Antworten ohne manuelles Nachfassen liefern können.",
  },
  {
    id: 9,
    date: "2024-01",
    endDate: "2024-03",
    title: "Softwareentwickler – DB Fernverkehr AG",
    content:
      "Weiterentwicklung von Sprachassistenzsystemen (Alexa Skills) mit TypeScript/Node.js & Python, Feature-Delivery, technische Doku und CI/CD auf AWS – um Fahrgästen verlässliche Informationen zu liefern und interne Supportketten zu entlasten.",
  },
  {
    id: 10,
    date: "2023-08",
    endDate: "2024-09",
    title: "Backend Developer – MeinPaul GmbH",
    content:
      "Skalierbares Laravel-Backend für digitale Steuerprozesse, AuthN/AuthZ, Azure-Integrationen, Cloudflare-Härtung sowie Flutter/Dart-Anbindungen – damit Wachstumsphasen ohne zusätzliche Sachbearbeitung abbildbar bleiben.",
  },
  {
    id: 11,
    date: "2022-06",
    endDate: "2023-10",
    title: "Full Stack Developer – Bringmeister GmbH",
    content:
      "PHP/Laravel-Backends, Kotlin-Migrationen, Flutter-Apps, AuthN/AuthZ, Performance-Tuning und DevOps-Automatisierung in AWS & Azure – mit Fokus auf Liefertreue, Performance und geringere Betriebskosten.",
  },
  {
    id: 12,
    date: "2021-12",
    endDate: "2022-05",
    title: "Full Stack Developer – IU Internationale Hochschule",
    content:
      "Microservices mit NestJS & Kafka, Single-SPA (Vue), Betrieb auf AWS (Fargate, CloudFront, ELB, Lambda) und DevOps-Schnittstelle, um stark wachsende Studierendenzahlen zuverlässig zu bedienen.",
  },
  {
    id: 13,
    date: "2018-01",
    endDate: "2021-11",
    title: "Full Stack Development – Diverse Kunden",
    content:
      "CMS-Modernisierungen (TYPO3/Drupal), Mobile-Projekte (Flutter/Android), Intranet-Systeme für Kliniken und serverlose Event-Plattformen – technische Bandbreite aufgebaut, bevor der Fokus auf Event-Architekturen und später KI wechselte.",
  },
  {
    id: 14,
    date: "2017-10",
    title: "GARTEN gegründet – Freelance-Label",
    content:
      "Freelance-Label für Engineering/Bildung & KI-Lösungen: Architektur, Entwicklung, Betrieb und Trainingsprogramme für Auftraggeber wie DB Fernverkehr, CANCOM, MeinPaul und Bringmeister – mit Fokus auf Verantwortung statt Prototyping.",
  },
];
