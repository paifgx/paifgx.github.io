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
    label: "Rollen",
    description:
      "AI Solution Architect & Consultant · Software Engineer · Fractional CIO · IT-Trainer & Coach",
  },
  {
    id: 2,
    label: "Methodik",
    description:
      "RAG & Agentensysteme · Security-by-Design · Observability · Continuous Delivery · Governance & Enablement",
  },
  {
    id: 3,
    label: "Aktuelle Schwerpunkte",
    description:
      "GenAI im Gesundheitswesen & E-Commerce · Realtime Knowledge Graphs · Trainingsprogramme für moderne Softwarearchitektur",
  },
  {
    id: 4,
    label: "Ausbildung & Zertifikate",
    description:
      "BSc Informatik (IU Internationale Hochschule, seit 09/2023) · TÜV Rheinland zertifizierter AI Consultant (03/2024)",
  },
];

export const principles: Principle[] = [
  {
    id: 1,
    title: "Enablement statt Handoff",
    description:
      "Teams erhalten Toolkits, Playbooks und Trainings, damit Architekturentscheidungen ohne externe Feuerwehr weitergeführt werden können.",
  },
  {
    id: 2,
    title: "Security-first Delivery",
    description:
      "Privacy-by-Design, Threat-Modelling und Compliance-Reviews laufen mit – so bestehen Vorstände, Betriebsräte und Auditor:innen dieselben Unterlagen.",
  },
  {
    id: 3,
    title: "Transparente Governance",
    description:
      "Metriken, Runbooks und Decision Logs schaffen Klarheit für Produkt, Security und Management – inklusive Verantwortlichkeiten, Eskalationswegen und KPIs.",
  },
  {
    id: 4,
    title: "Klartext statt Agentur-Bullshit",
    description:
      "Keine Buzzwords, sondern Entscheidungsgrundlagen, die Revision und IT gemeinsam unterschreiben können. Ich sitze selbst im Code und liefere Pull Requests, keine PowerPoint-Präsentationen.",
  },
];

export const capabilities: Capability[] = [
  {
    id: 1,
    title: "Programmiersprachen",
    icon: "CommandLineIcon",
    description:
      "Python, TypeScript, JavaScript, Kotlin, PHP, Java, Dart, SQL, Bash, C/C++",
  },
  {
    id: 2,
    title: "KI & LLM-Ökosystem",
    icon: "CpuChipIcon",
    description:
      "GPT-4/3.5, Claude, Gemini, Mistral, LLaMA/Mixtral, LangChain, LlamaIndex, Haystack, RAG & Agentensysteme, Embeddings, Reranker, DeepEval, PromptLayer",
  },
  {
    id: 3,
    title: "Machine Learning & Statistik",
    icon: "ChartBarIcon",
    description:
      "scikit-learn, XGBoost, LightGBM, TensorFlow, Keras, PyTorch, Pandas, NumPy, Feature Engineering, Drift/Bias Monitoring",
  },
  {
    id: 4,
    title: "Retrieval & Vektordatenbanken",
    icon: "MagnifyingGlassIcon",
    description:
      "OpenSearch, Elasticsearch, Qdrant, Weaviate, Pinecone, FAISS, Hybrid Retrieval, Chunking & Reranking Pipelines",
  },
  {
    id: 5,
    title: "Backend & API-Entwicklung",
    icon: "ServerStackIcon",
    description:
      "FastAPI, Django, Node.js, NestJS, GraphQL, WebSockets/Streaming, Event-Driven Architecture, Microservices",
  },
  {
    id: 6,
    title: "Cloud, Infrastruktur & DevOps",
    icon: "CloudIcon",
    description:
      "Docker, Kubernetes, Terraform, Cloudflare, AWS (EC2/S3/Lambda/RDS/ECR/SQS), Azure (OpenAI, Blob, CosmosDB), GCP (Vertex AI, BigQuery)",
  },
  {
    id: 7,
    title: "Security, Identity & Compliance",
    icon: "ShieldCheckIcon",
    description:
      "OAuth2, Keycloak, IAM, Security/Privacy-by-Design, BSI IT-Grundschutz, ISO/IEC 27001, DSGVO, DPIA",
  },
  {
    id: 8,
    title: "Observability & Automation",
    icon: "EyeIcon",
    description:
      "Prometheus, Grafana, ELK-Stack, GitHub Actions, GitLab CI/CD, Jenkins, Kafka, RabbitMQ, n8n, Make, Zapier",
  },
  {
    id: 9,
    title: "Frontend & Mobile",
    icon: "DevicePhoneMobileIcon",
    description:
      "Vue/Nuxt, React, Svelte, Tailwind CSS, Storybook, Figma, Flutter, React Native, Android (Kotlin)",
  },
];
