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

export interface PainPoint {
  title: string;
  description: string;
}

export const servicePillars: ServicePillar[] = [
  {
    title: "Roadmap & Verantwortlichkeiten klären",
    subtitle: "FlowCraftDB",
    description:
      "Sie wissen, dass KI/Automation nötig ist, aber Initiativen verlaufen im Silo. Ich ordne Anforderungen, Datenlage und Risiken – von der ersten Rechtsprüfung bis zur Governance im Betrieb.",
    deliverables: [
      "Assessment von Prozessen, Datenquellen und Sicherheitsanforderungen inkl. Stakeholder-Interviews.",
      "RAG- & Agentensysteme mit LangChain, LlamaIndex, Haystack, OpenSearch/Qdrant/Weaviate – abgestimmt auf bestehende IT.",
      "Security, IAM & Compliance nach BSI IT-Grundschutz, ISO/IEC 27001, DSGVO/DPIA mit OAuth2/Keycloak und dokumentierten Guardrails.",
    ],
    results: [
      "Investitionssicherheit: Sie wissen vor dem Start genau, was machbar ist und was es kostet.",
      "Rechtssicherheit: Klare Ampel für Datenschutz & Compliance (DSGVO) – kein Blindflug.",
    ],
    stack:
      "LLMs: GPT, Claude, Gemini, Mistral, LLaMA/Mixtral · Orchestrierung: LangChain, LlamaIndex, Haystack, Custom Agents.",
  },
  {
    title: "Operative Abläufe mit smarter Automatisierung entlasten",
    subtitle: "Universitätsklinikum Bonn",
    description:
      "Ich begleite End-to-end Delivery – von der Architektur über APIs bis zum Betrieb. Ziel: weniger manuelle Nacharbeit, stabile Releases und Systeme, die mitwachsen.",
    deliverables: [
      "Backend- & API-Engineering (FastAPI, NestJS, Micronaut, Django, Laravel, GraphQL, WebSockets) inklusive Datenpipelines.",
      "Cloud & Infrastruktur: AWS, Azure, GCP, Terraform, Docker/Kubernetes, GitHub Actions/GitLab CI/CD mit Observability (Prometheus/Grafana, ELK).",
      "Automation von Tests, Monitoring & Incident-Response – damit Teams liefern können, ohne ständig Feuer zu löschen.",
    ],
    results: [
      "Messbare Effizienz: Prozesse laufen automatisch in Sekunden statt manuell in Stunden.",
      "Reduzierte Betriebskosten durch stabile Software-Architektur, die wenig Wartung braucht.",
    ],
    stack:
      "Python, TypeScript/Node, Kotlin, PHP, Dart/Flutter, SQL/NoSQL, Kafka, RabbitMQ, Docker/Kubernetes, Terraform.",
  },
  {
    title: "Team befähigen & Skepsis abbauen",
    subtitle: "GFU Cyrus AG",
    description:
      "Neue Systeme scheitern selten an Technik, sondern an Kommunikation. Ich kombiniere Trainings, Shadowing und Change-Arbeit, damit Ihr Team Verantwortung übernehmen kann.",
    deliverables: [
      "Modulare Trainings (Web, DevOps, KI, Security) für Fach- und Führungskräfte mit über 100 Teilnehmenden pro Jahr.",
      "Shadowing & Coaching für Architekt:innen, Product Owner, Operations- und Security-Rollen – direkt an Ihren Fällen.",
      "Wissenssysteme, Playbooks und Enablement-Artefakte (Notion, Confluence, Git) als Single Source of Truth.",
    ],
    results: [
      "Volle Unabhängigkeit: Ihr Team versteht das System und kann es ohne mich weiterentwickeln.",
      "Schnelleres Onboarding: Neue Mitarbeiter sind dank perfekter Dokumentation sofort produktiv.",
    ],
    stack:
      "Workshops, Pair-Architecture, Code-/Prompt-Clinics, Assessments, OKRs & KPI-Frameworks.",
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
      "End-to-end Umsetzung mit Verantwortung für Architektur, Engineering, Security und Übergabe – inklusive Runbooks, Tests und Onboarding.",
  },
  {
    title: "Advisory & Enablement",
    description:
      "Sparring, Reviews, Architecture Boards, Trainings und On-the-job-Coaching – ideal, wenn interne Teams liefern, aber Guidance brauchen.",
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
    "BSI IT-Grundschutz (200-1/-2/-3), ISO/IEC 27001, DSGVO, DPIA",
    "Observability: Prometheus, Grafana, ELK/OpenSearch, DeepEval für Prompt-Qualität",
  ],
};

export const painPoints: PainPoint[] = [
  {
    title: "Tool-Wildwuchs",
    description:
      "Jede Abteilung nutzt eigene Lösungen, Daten liegen in Excel, Outlook, Branchensoftware – nichts greift ineinander.",
  },
  {
    title: "Abhängigkeit von Einzelpersonen",
    description:
      "Wenn Schlüsselpersonen fehlen, steht das Tagesgeschäft. Prozesse existieren nur im Kopf – nicht im System.",
  },
  {
    title: "Skepsis & Risikoangst",
    description:
      "Teams sind KI-müde oder fürchten Datenschutzprobleme. Es fehlt ein Setup, das Verantwortung und Nutzen verbindet.",
  },
];
