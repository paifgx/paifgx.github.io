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
    title: "Audit & Roadmap",
    subtitle: "2 bis 4 Wochen • Architektur-Assessment & Governance-Plan",
    description:
      "Sie wissen, dass KI/Automation nötig ist, aber Initiativen verlaufen im Silo. Ich ordne Anforderungen, Datenlage und Risiken, von der ersten Bewertung bis zur Governance im Betrieb.",
    deliverables: [
      "Assessment von Prozessen, Datenquellen und Sicherheitsanforderungen inkl. Stakeholder-Interviews.",
      "Architektur-Review und Risiko-Mapping mit klaren Quick-Wins.",
      "Security, IAM & Compliance orientiert an BSI IT-Grundschutz, ISO/IEC 27001 und DSGVO, mit dokumentierten Guardrails.",
    ],
    results: [
      "Architektur-Blueprint: Klare technische Roadmap für die nächsten 12 Wochen.",
      "Risiko-Matrix: Technische Entscheidungsgrundlagen für die Umsetzung von Datenschutz & Compliance.",
      "Investitionssicherheit: Sie wissen vor dem Start genau, was machbar ist und was es kostet.",
    ],
    stack:
      "LLMs: GPT, Claude, Gemini, Mistral · Orchestrierung: LangChain, LlamaIndex, Haystack.",
  },
  {
    title: "PoC → produktiver Workflow",
    subtitle: "6 bis 12 Wochen • Von Prototyp zu skalierbarem System",
    description:
      "Übergang von bestehendem PoC oder Konzept zu produktivem, audit-fähigem Workflow. Architektur, Infra, Integration und Doku, alles für stabilen Betrieb unter Last.",
    deliverables: [
      "Backend- & API-Engineering (FastAPI, NestJS, Django) inklusive Datenpipelines und Event-Handling.",
      "Cloud & Infrastruktur: AWS/Azure/GCP, Terraform, Docker/Kubernetes, CI/CD mit Monitoring.",
      "Security-by-Design: IAM, OAuth2, Keycloak, Observability und Incident-Response.",
    ],
    results: [
      "Produktionsreifer Workflow: Skalierbar, audit-fähig, mit Runbook und Logging.",
      "Eigentum & Unabhängigkeit: Code gehört Ihnen, technische Abhängigkeiten transparent.",
      "Messbare Effizienz: Prozesse laufen automatisch statt manuell.",
    ],
    stack:
      "Python, TypeScript, SQL/NoSQL, Docker/Kubernetes, Terraform, Prometheus/Grafana.",
  },
];

export const engagementModes: EngagementMode[] = [
  {
    title: "Fractional AI/CIO",
    description:
      "Sie brauchen jemanden, der Verantwortung übernimmt: Steering Committees leiten, Roadmaps priorisieren, Budgets argumentieren und Security/Compliance vertreten.",
  },
  {
    title: "Projekt-Delivery",
    description:
      "End-to-end Umsetzung mit Verantwortung für Architektur, Engineering, Security und Übergabe, inklusive Runbooks, Tests und Onboarding.",
  },
  {
    title: "Advisory & Enablement",
    description:
      "Sparring, Reviews, Architecture Boards, Trainings und On-the-job-Coaching, ideal, wenn interne Teams liefern, aber Guidance brauchen.",
  },
];

export const technologyHighlights: TechnologyHighlights = {
  llm: [
    "LangChain, LlamaIndex, Haystack, RAG-Tooling",
    "Embeddings: OpenAI, Hugging Face, Cohere, BGE, MiniLM",
    "Agenten-Patterns: ReAct, CoT, Tool-Use, AutoGPT-ähnlich",
  ],
  cloud: [
    "AWS (EC2, S3, Lambda, DynamoDB, RDS, ElastiCache, API Gateway, CloudFront, ECR, SQS, Fargate)",
    "Azure (OpenAI, Cognitive Services, CosmosDB, Blob, IaaS), GCP (Vertex AI, BigQuery, Firebase)",
    "Infrastructure-as-Code mit Terraform, Docker, Kubernetes, Helm, GitHub Actions/GitLab CI",
  ],
  security: [
    "Security/Privacy-by-Design, IAM/RBAC, OAuth2, Keycloak, Supabase Auth",
    "Technische DSGVO-Konformität, BSI IT-Grundschutz (200-1/-2/-3), ISO/IEC 27001",
    "Observability: Prometheus, Grafana, ELK/OpenSearch, DeepEval für Prompt-Qualität",
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
