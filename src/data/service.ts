import type { IconName } from "../utils/icons";
import architectureImage from "../assets/images/service/architecture.jpg";
import automationImage from "../assets/images/service/automation.jpg";
import enablementImage from "../assets/images/service/enablement.jpg";

export interface ServicePillarCard {
  title: string;
  description: string;
}

import type { ImageMetadata } from "astro";

export interface ServicePillar {
  title: string;
  subtitle: string;
  description: string;
  cards: ServicePillarCard[];
  icon: IconName;
  image: ImageMetadata;
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
      "Ihr Engpass wird zur Grundlage eines Systems, das nicht nur technisch funktioniert, sondern auch unter Last und im Audit bestehen kann.",
    cards: [
      {
        title: "Auslöser im Alltag",
        description:
          "Medienbrüche, Personalmangel oder Aufsichtsanforderungen bremsen Ihr Tagesgeschäft. Prozesse existieren nur in Köpfen, nicht in Systemen.",
      },
      {
        title: "Ansatz",
        description:
          "Assessment von Prozessen, Datenquellen und Sicherheitsanforderungen. Architektur-Blueprint mit Governance- und Risiko-Mapping für 3–6 Monate.",
      },
      {
        title: "Was bleibt",
        description:
          "Klare Roadmap mit messbaren Meilensteinen. Security-by-Design nach BSI IT-Grundschutz und ISO/IEC 27001. System statt Tool.",
      },
    ],
    icon: "ClipboardDocumentCheckIcon",
    image: architectureImage,
  },
  {
    title: "Assistenzsysteme & Automatisierung",
    subtitle: "4 bis 10 Wochen • Von PoC zu produktivem Workflow",
    description:
      "RAG-Assistenten, Agenten-Workflows und Automatisierungen, die direkt in Ihre Systeme greifen. Medienbrüche auflösen, ohne Kontrolle zu verlieren.",
    cards: [
      {
        title: "Auslöser im Alltag",
        description:
          "Copy-Paste, Mehrfacherfassung und fehlende Transparenz. Angebote, Reklamationen und Freigaben laufen über Excel, Word und E-Mail.",
      },
      {
        title: "Ansatz",
        description:
          "Backend-Engineering mit APIs und Datenpipelines. KI-Assistenzsysteme mit Guardrails, Prompt-Evaluierung und Incident-Response.",
      },
      {
        title: "Was bleibt",
        description:
          "Automatische Prozesse statt manuelle Schritte. Audit-fähige Systeme – Code gehört Ihnen, skalierbar von Pilot zu Enterprise.",
      },
    ],
    icon: "CpuChipIcon",
    image: automationImage,
  },
  {
    title: "Enablement & Sparring",
    subtitle: "Laufend oder projektbezogen • Ihr Team macht den Unterschied",
    description:
      "Architektur-Reviews, Pair-Programming, Trainings und Coaching. Ihr Team übernimmt Ownership, ich sorge für Governance und Wissenstransfer.",
    cards: [
      {
        title: "Auslöser im Alltag",
        description:
          "Ihr Team entwickelt selbst, braucht aber strategische Sicherheit. Entscheidungen werden ad-hoc getroffen, Wissen geht mit Einzelpersonen.",
      },
      {
        title: "Ansatz",
        description:
          "Reviews, Architecture Boards und Shadowing-Sessions. Maßgeschneiderte Trainings zu Softwarearchitektur, KI und Security-by-Design.",
      },
      {
        title: "Was bleibt",
        description:
          "Team-Kompetenz: Ihr Team versteht und betreibt Systeme eigenständig. Runbooks und Wissensdatenbanken statt Einzelpersonen-Abhängigkeit.",
      },
    ],
    icon: "UserGroupIcon",
    image: enablementImage,
  },
];

export const engagementModes: EngagementMode[] = [
  {
    title: "Strategische Verantwortung",
    description:
      "Ich übernehme die Rolle des Fractional AI/CIO: Roadmaps priorisieren, Budgets argumentieren, technische Security/Compliance-Anforderungen vertreten und Teams coachen.",
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
