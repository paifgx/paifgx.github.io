export interface ServicePillar {
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  results: string[];
  stack: string;
}

export interface EngagementMode {
  title: string;
  description: string;
}

export interface TechnologyHighlights {
  llm: string[];
  cloud: string[];
  security: string[];
}

import type { PainPoint } from "../types/common";

export const servicePillars: ServicePillar[] = [
  {
    title: "Architektur & Workflow-Design",
    subtitle:
      "2 bis 6 Wochen • Von Engpass-Analyse zu skalierbarer Architektur",
    description:
      "Ihr Engpass (Medienbrüche, Personalmangel, Aufsichtsanforderungen) wird zur Grundlage eines Systems, das nicht nur technisch funktioniert, sondern auch unter Last und im Audit bestehen kann.",
    deliverables: [
      "Assessment von Prozessen, Datenquellen und Sicherheitsanforderungen mit Stakeholder-Interviews.",
      "Architektur-Blueprint mit Governance- und Risiko-Mapping für die nächsten 3–6 Monate.",
      "Security-by-Design mit dokumentierten Guardrails nach BSI IT-Grundschutz und ISO/IEC 27001.",
    ],
    results: [
      "Klare technische Roadmap mit messbaren Meilensteinen und Risiko-Einschätzung.",
      "Investitionssicherheit: Sie wissen vor dem Start genau, was machbar ist und welche Abhängigkeiten bestehen.",
      "System statt Tool: Integrationsfähige Architektur, die Ihre bestehende IT einbindet.",
    ],
    stack:
      "LLMs: OpenAI, Azure OpenAI, Claude, Gemini · Orchestrierung: LangChain, LlamaIndex, Haystack.",
  },
  {
    title: "Assistenzsysteme & Automatisierung",
    subtitle: "4 bis 10 Wochen • Von PoC zu produktivem Workflow",
    description:
      "RAG-Assistenten, Agenten-Workflows und Automatisierungen, die direkt in Ihre Systeme greifen. Medienbrüche auflösen, ohne Kontrolle zu verlieren.",
    deliverables: [
      "Backend-Engineering mit APIs und Datenpipelines für nahtlose Integration.",
      "KI-Assistenzsysteme mit Guardrails, Prompt-Evaluierung und Incident-Response.",
      "Deployment in Ihre Infrastruktur mit Monitoring und skalierbarer Architektur.",
    ],
    results: [
      "Automatische Prozesse statt manuelle Schritte – messbare Effizienzsteigerung.",
      "Audit-fähige Systeme: Code gehört Ihnen, technische Abhängigkeiten transparent dokumentiert.",
      "Skalierbare Lösungen: Von Pilot zu unternehmensweiter Nutzung ohne Neuaufbau.",
    ],
    stack:
      "Backend: FastAPI, NestJS, Python · Cloud: AWS/Azure/GCP, Docker/Kubernetes, Terraform.",
  },
  {
    title: "Enablement & Sparring",
    subtitle: "Laufend oder projektbezogen • Ihr Team macht den Unterschied",
    description:
      "Architektur-Reviews, Pair-Programming, Trainings und Coaching. Ihr Team übernimmt Ownership, ich sorge für Governance und Wissenstransfer.",
    deliverables: [
      "Hands-on Guidance durch Reviews, Architecture Boards und Shadowing-Sessions.",
      "Maßgeschneiderte Trainings zu moderner Softwarearchitektur, KI und Security-by-Design.",
      "Runbooks, Wissensdatenbanken und Enablement-Artefakte für nachhaltigen Betrieb.",
    ],
    results: [
      "Team-Kompetenz: Ihr Team versteht und betreibt die Systeme eigenständig.",
      "Wissen bleibt im Unternehmen: Dokumentierte Entscheidungen statt Einzelpersonen-Abhängigkeit.",
      "Schnellere Iteration: Reviews und Coaching beschleunigen Ihre Entwicklung.",
    ],
    stack:
      "Tools: GitHub/GitLab, Notion/Confluence, DeepEval für Prompt-Qualität.",
  },
];

export const engagementModes: EngagementMode[] = [
  {
    title: "Strategische Verantwortung",
    description:
      "Ich übernehme die Rolle des Fractional AI/CIO: Roadmaps priorisieren, Budgets argumentieren, Security/Compliance vertreten und Teams coachen.",
  },
  {
    title: "End-to-end Delivery",
    description:
      "Vollständige Umsetzung von Architektur bis Deployment. Ihr Team übernimmt Ownership, ich liefere Governance und Enablement.",
  },
  {
    title: "Sparring & Guidance",
    description:
      "Reviews, Architecture Boards und Trainings für Teams, die selbst entwickeln, aber strategische Sicherheit brauchen.",
  },
];

export const technologyHighlights: TechnologyHighlights = {
  llm: [
    "LangChain, LlamaIndex, Haystack für RAG & Agenten-Workflows",
    "Embeddings: OpenAI, Cohere, lokale Modelle mit BGE/MiniLM",
    "Prompt-Evaluierung: DeepEval für Qualität und Sicherheit",
  ],
  cloud: [
    "AWS/Azure/GCP mit Infrastructure-as-Code (Terraform, Docker/K8s)",
    "CI/CD: GitHub Actions, GitLab CI mit Monitoring (Prometheus/Grafana)",
    "Event-Driven Architecture: APIs, Streaming, Serverless",
  ],
  security: [
    "Security-by-Design: IAM/RBAC, OAuth2, Keycloak",
    "Compliance: BSI IT-Grundschutz, ISO/IEC 27001, technische DSGVO",
    "Observability: Prometheus, Grafana, ELK für Logging & Monitoring",
  ],
};

// Pain points for service page - specific to workflow automation services
export const painPoints: PainPoint[] = [
  {
    title: "Tool-Wildwuchs",
    description:
      "Jede Abteilung nutzt eigene Lösungen, Daten liegen in Excel, Outlook, Branchensoftware, nichts greift ineinander.",
    icon: "SquaresPlusIcon",
  },
  {
    title: "Abhängigkeit von Einzelpersonen",
    description:
      "Wenn Schlüsselpersonen fehlen, steht das Tagesgeschäft. Prozesse existieren nur im Kopf, nicht im System.",
    icon: "UserGroupIcon",
  },
  {
    title: "Skepsis & Risikoangst",
    description:
      "Teams sind KI-müde oder fürchten Datenschutzprobleme. Es fehlt ein Setup, das Verantwortung und Nutzen verbindet.",
    icon: "ShieldExclamationIcon",
  },
];
