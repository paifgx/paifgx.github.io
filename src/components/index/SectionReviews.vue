<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const caseStudies = ref([
  {
    company: "FlowCraftDB",
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
    company: "CANCOM",
    timeframe: "02/2025 – 08/2025",
    role: "AI Consultant & Software Engineer (Freelancer)",
    mission: "CANCOM Assistant Framework absichern & produktisieren",
    situation:
      "Mehrere Geschäftsbereiche wollten ChatGPT-ähnliche Bots mit Unternehmenswissen nutzen, benötigten aber Governance, Datenkontrolle und flexible LLM-Auswahl.",
    approach:
      "LLM-Orchestrierung mit GPT-4/4o, GPT-3.5 und Mistral, Aufbau von Knowledge Bases, SSO-/Berechtigungskonzepten und ERP-/CRM-Connectoren plus Admin-Governance.",
    result:
      "Unternehmen erhalten individuell konfigurierbare Bots mit überprüfbaren Quellen, DSGVO-konformer Datenhaltung und skalierbarer Betriebsführung.",
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
    company: "Universitätsklinikum Bonn AöR",
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
    company: "AICT Group",
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
    mission: "Skalierbare Steuer- & E-Commerce-Plattformen",
    situation:
      "Wachstum führte zu Engpässen in Backend-Teams, Authentifizierung und Reporting waren fehleranfällig.",
    approach:
      "Laravel-, Kotlin- und TypeScript-Services inklusive AuthN/AuthZ, Performance-Tuning sowie CI/CD- und Observability-Automatisierung in Azure & AWS.",
    result:
      "Stabile Releases, dokumentierte Verantwortlichkeiten und weniger Nacharbeit in Support-Teams dank klarer Monitoring- und Alerting-Strukturen.",
    stack:
      "PHP 8, Laravel 10, MySQL, Azure (IaaS/Blob), Cloudflare, GitHub, CI/CD, Dart, Flutter, Kotlin, TypeScript, Svelte, React Native, GraphQL, Docker, SQL, AWS.",
  },
]);

// Anzahl der Slides berechnen (jede Slide zeigt 2 Testimonials)
const totalSlides = Math.ceil(caseStudies.value.length / 2);

// Aktuellen Slide-Index initialisieren
const currentSlideIndex = ref(0);

// Sichtbare Testimonials basierend auf dem aktuellen Slide-Index berechnen
const visibleCaseStudies = computed(() => {
  const startIndex = (currentSlideIndex.value * 2) % caseStudies.value.length;
  const indices = [
    caseStudies.value[startIndex % caseStudies.value.length],
    caseStudies.value[(startIndex + 1) % caseStudies.value.length],
  ];
  return indices;
});

const showPrevious = () => {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + totalSlides) % totalSlides;
};

const showNext = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % totalSlides;
};

const isPaused = ref(false);
let rotationInterval = null;

const startRotation = () => {
  rotationInterval = setInterval(() => {
    if (!isPaused.value) {
      showNext();
    }
  }, 5000);
};

const togglePause = () => {
  isPaused.value = !isPaused.value;
};

onMounted(() => {
  startRotation();
});

onBeforeUnmount(() => {
  clearInterval(rotationInterval);
});
</script>

<template>
  <div class="mb-12 max-w-4xl">
    <p
      class="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
    >
      Referenzen
    </p>
    <h2
      id="case-studies-heading"
      class="mt-2 text-3xl font-bold text-gray-900 dark:text-white"
    >
      Case Highlights aus aktuellen Mandaten
    </h2>
    <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
      Drei Blickwinkel pro Projekt: Ausgangslage, Ansatz und was davon im Alltag
      spürbar bleibt – plus der Tech-Stack für Ihr Audit.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
    <article
      v-for="(caseStudy, index) in visibleCaseStudies"
      :key="caseStudy.company + index"
      class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
    >
      <div>
        <p
          class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
        >
          {{ caseStudy.timeframe }}
        </p>
        <p class="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
          {{ caseStudy.company }}
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          {{ caseStudy.role }}
        </p>
        <p
          class="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
        >
          {{ caseStudy.mission }}
        </p>

        <div class="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">
              Ausgangssituation
            </p>
            <p class="mt-1 leading-6">
              {{ caseStudy.situation }}
            </p>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Ansatz</p>
            <p class="mt-1 leading-6">
              {{ caseStudy.approach }}
            </p>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Ergebnis</p>
            <p class="mt-1 leading-6">
              {{ caseStudy.result }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <p
          class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
        >
          Stack
        </p>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {{ caseStudy.stack }}
        </p>
      </div>
    </article>
  </div>

  <div
    class="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
  >
    <div class="space-x-2">
      <button
        v-for="(step, index) in totalSlides"
        :key="index"
        @click="currentSlideIndex = index"
        class="h-2 w-2 rounded-full focus:outline-none"
        :class="
          index === currentSlideIndex
            ? 'bg-gray-800 dark:bg-white'
            : 'bg-gray-200 dark:bg-gray-700'
        "
        :aria-label="'Slide ' + (index + 1)"
        :aria-current="index === currentSlideIndex ? 'true' : 'false'"
      ></button>
    </div>

    <div class="flex flex-wrap gap-4 md:items-center">
      <button
        @click="togglePause"
        :aria-pressed="isPaused"
        class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
      >
        <span v-if="isPaused">Auto-Play fortsetzen</span>
        <span v-else>Auto-Play pausieren</span>
      </button>

      <div class="flex gap-x-4">
        <button
          @click="showPrevious"
          aria-label="Vorherige Cases"
          class="rounded-full border border-gray-300 p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
        >
          <span class="sr-only">Vorherige</span>
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M15 10a1 1 0 01-1 1H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0
              010-1.414l5-5a1 1 0 111.414 1.414L7.414 9H14a1 1 0 011 1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          @click="showNext"
          aria-label="Nächste Cases"
          class="rounded-full border border-gray-300 p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
        >
          <span class="sr-only">Nächste</span>
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 10a1 1 0 011-1h6.586l-3.293-3.293a1 1 0 011.414-1.414l5
              5a1 1 0 010 1.414l-5 5a1 1 0
              01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
