/**
 * Single source of truth for case studies to keep them aligned with
 * Notion knowledgebase and CV, preventing duplication across components.
 */

export interface CaseStudy {
  company: string;
  timeframe: string;
  role: string;
  mission: string;
  situation: string;
  approach: string;
  result: string;
  stack: string;
}

/**
 * Ordered by recency/prominence to highlight most relevant work first.
 */
export const caseStudies: CaseStudy[] = [
  {
    company: "FlowCraftDB (E-Commerce)",
    timeframe: "12/2024 – heute",
    role: "AI Solution Architect & Consultant (Freelancer)",
    mission: "Event-getriebene Datenanreicherung im E-Commerce",
    situation:
      "Heterogene Shop- & ERP-Daten, viel manuelle Recherche und langsame Entscheidungswege für Kampagnen.",
    approach:
      "RAG-Assistants, orchestrierte LLM-Flows (GPT-4, Gemini, LangChain) sowie Event-Pipelines auf FastAPI/Docker/Kubernetes.",
    result:
      "Produktteams erhalten konsolidierte Insights in Echtzeit, Freigaben erfolgen auf Basis dokumentierter Guardrails & Observability.",
    stack:
      "GPT-4, Gemini, LangChain, FastAPI, Docker, Kubernetes, AWS (S3/SQS/ECR), Azure, MongoDB, Redis, Terraform, GitHub Actions, Prometheus, Grafana, ELK, OAuth2, Keycloak.",
  },
  {
    company: "CANCOM (IT-Dienstleister)",
    timeframe: "02/2025 – 08/2025",
    role: "AI Consultant & Software Engineer (Freelancer)",
    mission: "CANCOM Assistant Framework absichern & produktisieren",
    situation:
      "Mehrere Geschäftsbereiche wollten ChatGPT-ähnliche Bots mit Unternehmenswissen nutzen, benötigten aber Governance, Datenkontrolle und flexible LLM-Auswahl.",
    approach:
      "LLM-Orchestrierung mit GPT-4/4o, GPT-3.5 und Mistral, Aufbau von Knowledge Bases, SSO-/Berechtigungskonzepten und ERP-/CRM-Connectoren plus Admin-Governance.",
    result:
      "Unternehmen erhalten individuell konfigurierbare Bots mit überprüfbaren Quellen, DSGVO-orientierter Datenhaltung und skalierbarer Betriebsführung.",
    stack:
      "GPT-4/4o, GPT-3.5 Turbo, Mistral, LangChain, Azure/AWS, SSO/SCIM, ERP-/CRM-APIs, Monitoring & Guardrails.",
  },
  {
    company: "CANCOM",
    timeframe: "12/2024 – 06/2025",
    role: "Teamlead & Flutter Engineer (Freelancer)",
    mission: "Interne Service-App für Operations & Vertrieb liefern",
    situation:
      "Backend-, Mobile- und Security-Teams benötigten gemeinsame Steuerung, um eine interne Flutter-App zuverlässig zu liefern.",
    approach:
      "Teamlead-Funktion für Backlog, QA, CI/CD und Flutter-Delivery übernommen; Stakeholder-Alignment mit Product/Security, Runbooks und Releaserhythmen etabliert.",
    result:
      "Stabile Releases, nachvollziehbare Verantwortlichkeiten und Flutter-Features, die interne Abläufe beschleunigen.",
    stack:
      "Flutter, Dart, REST/gRPC-APIs, Firebase/AWS, GitHub Actions, QA-Automatisierung, Observability.",
  },
  {
    company: "Universitätsklinikum Bonn (Gesundheitswesen)",
    timeframe: "11/2025 – heute",
    role: "AI Solution Architect & Consultant (Freelancer)",
    mission: "Middleware für personalisierte Medizin & Forschungsnetzwerke",
    situation:
      "Klinische Datensätze mussten zwischen lokalen Krankenhaus-Systemen und nationalen Forschungsverbünden interoperabel ausgetauscht werden – unter strengen Datenschutz- und Aufsichtsanforderungen.",
    approach:
      "Kotlin/Micronaut-Backend mit strikter Schema-Validierung, Prozess-Tracking und automatisierter Transformation heterogener Datenströme in standardisierte Formate; Governance mit Datenschutz, Medizin-IT und Forschungsgremien abgestimmt.",
    result:
      "Qualitätsgesicherte Datenintegration, revisionssichere Nachvollziehbarkeit und automatisierte Übergaben an Forschungsdatenbanken – ohne sensible Interna zu veröffentlichen.",
    stack:
      "Kotlin, Micronaut, Azure, MSSQL, Keycloak/IAM, Observability-Playbooks, DSGVO/DPIA-Governance.",
  },
  {
    company: "AICT Group (Public Sector)",
    timeframe: "06/2024 – heute",
    role: "Co-Founder & CIO",
    mission: "KI-Plattform zur Konfliktprävention (LLMs & Knowledge Graphs)",
    situation:
      "Sensible Fallanalysen sollten in Echtzeit ausgewertet werden, während Datenschutz und Zugriffskontrollen streng geregelt bleiben.",
    approach:
      "Knowledge Graphs, LLM-Orchestrierung und Microservices mit Security/Privacy-by-Design. Governance-Modelle, um Partnerorganisationen einzubinden.",
    result:
      "Operative Teams erhalten belastbare Lagebilder, Zugriffe sind revisionssicher dokumentiert und Onboarding neuer Partner dauert Stunden statt Wochen.",
    stack:
      "LLMs, Knowledge Graphs, Microservices, Realtime Analytics, Docker, Kubernetes, AWS, Azure, IT-Grundschutz, ISO 27001, IAM.",
  },
  {
    company: "Bringmeister GmbH",
    timeframe: "08/2023 – 09/2024",
    role: "Backend & Fullstack Engineering (Freelancer)",
    mission: "Skalierbare E-Commerce-Plattform",
    situation:
      "Wachstum führte zu Engpässen in Backend-Teams, Authentifizierung und Reporting waren fehleranfällig.",
    approach:
      "Laravel-, Kotlin- und TypeScript-Services inklusive AuthN/AuthZ, Performance-Tuning sowie CI/CD- und Observability-Automatisierung in Azure & AWS.",
    result:
      "Stabile Releases, dokumentierte Verantwortlichkeiten und weniger Nacharbeit in Support-Teams dank klarer Monitoring- und Alerting-Strukturen.",
    stack:
      "PHP 8, Laravel 10, MySQL, Azure (IaaS/Blob), Cloudflare, GitHub, CI/CD, Dart, Flutter, Kotlin, TypeScript, Svelte, React Native, GraphQL, Docker, SQL, AWS.",
  },
];

/**
 * Calculates slides assuming 2 case studies per slide for carousel layout.
 */
export function getTotalSlides(): number {
  return Math.ceil(caseStudies.length / 2);
}
