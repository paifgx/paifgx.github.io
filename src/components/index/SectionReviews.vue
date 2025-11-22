<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const caseStudies = ref([
  {
    company: "FlowCraftDB",
    timeframe: "12/2024 – heute",
    role: "AI Solution Architect & Consultant (Freelancer)",
    focus: "Event-getriebene Datenanreicherung im E-Commerce",
    impact: [
      "E2E-Architektur für RAG-Assistenten, Tool-Use und orchestrierte LLM-Flows (GPT-4, Gemini, LangChain).",
      "Security-by-Design nach BSI IT-Grundschutz, Observability mit Prometheus/Grafana und ELK.",
    ],
    stack:
      "GPT-4, Gemini, LangChain, FastAPI, Docker, Kubernetes, AWS (S3/SQS/ECR), Azure, MongoDB, Redis, Terraform, GitHub Actions, Prometheus, Grafana, ELK, Pytest, OAuth2, Keycloak.",
  },
  {
    company: "CANCOM",
    timeframe: "02/2025 – 08/2025",
    role: "Technical Lead Conversational AI (Freelancer)",
    focus: "Agentenbasierte Multi-LLM-Systeme & Flutter-App Delivery",
    impact: [
      "Architektur & Strategie für sichere, skalierbare Conversational AI mit React, TypeScript & FastAPI.",
      "CI/CD, QA und Security-Workstreams gemäß ISO 27001 & BSI 200-x.",
    ],
    stack:
      "React, TypeScript, Python, FastAPI, Docker, Kubernetes, AWS, Azure, IAM, Flutter, Dart, REST, Microservices.",
  },
  {
    company: "Universitätsklinikum Bonn AöR",
    timeframe: "11/2025 – heute",
    role: "AI Solution Architect & Consultant (Freelancer)",
    focus: "GenAI-Integrationen für Forschung & Versorgung",
    impact: [
      "Micronaut/Kotlin-Services, MSSQL-Backends und Integrationen in bestehende Klinikprozesse.",
      "Governance & Security in hochregulierten Umfeldern, inklusive DSGVO & Datenschutz-Folgenabschätzungen.",
    ],
    stack:
      "Kotlin, Micronaut, MSSQL, OAuth2, Keycloak, Docker, Azure, Observability.",
  },
  {
    company: "AICT Group",
    timeframe: "06/2024 – heute",
    role: "Co-Founder & CIO",
    focus: "KI-Plattform zur Konfliktprävention (LLMs & Knowledge Graphs)",
    impact: [
      "Realtime-Analytics, Microservices und Governance-Strukturen für sensible Daten.",
      "Team-Enablement & Security/Privacy-by-Design in hybriden Cloud-Setups.",
    ],
    stack:
      "LLMs, Knowledge Graphs, Microservices, Realtime Analytics, Docker, Kubernetes, AWS, Azure, Security/Privacy by Design, IT-Grundschutz, ISO 27001, IAM.",
  },
  {
    company: "MeinPaul GmbH & Bringmeister GmbH",
    timeframe: "08/2023 – 09/2024",
    role: "Backend & Fullstack Engineering (Freelancer)",
    focus: "Skalierbare Steuer- & E-Commerce-Plattformen",
    impact: [
      "Laravel-, Kotlin- und TypeScript-Services inklusive AuthN/AuthZ und Performance-Tuning.",
      "Migrationen, CI/CD-Automatisierung und DevOps-Enablement in Azure & AWS.",
    ],
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
    <p class="text-sm font-semibold uppercase tracking-widest text-indigo-600">
      Referenzen
    </p>
    <h2 id="case-studies-heading" class="mt-2 text-3xl font-bold text-gray-900">
      Case Highlights aus aktuellen Mandaten
    </h2>
    <p class="mt-3 text-base text-gray-600">
      Auszug aus Projekten in regulierten Branchen, E-Commerce und Wissensarbeit
      – inklusive Rollen, Wirkung und verantwortungsvollem Tech-Stack.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
    <article
      v-for="(caseStudy, index) in visibleCaseStudies"
      :key="caseStudy.company + index"
      class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div>
        <p class="text-xs uppercase tracking-wide text-gray-500">
          {{ caseStudy.timeframe }}
        </p>
        <p class="mt-1 text-xl font-semibold text-gray-900">
          {{ caseStudy.company }}
        </p>
        <p class="text-sm text-gray-600">{{ caseStudy.role }}</p>
        <p class="mt-4 text-sm font-semibold text-indigo-600">
          {{ caseStudy.focus }}
        </p>

        <ul
          class="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600 marker:text-indigo-600"
        >
          <li
            v-for="(highlight, idx) in caseStudy.impact"
            :key="idx"
            class="leading-6"
          >
            {{ highlight }}
          </li>
        </ul>
      </div>

      <div class="mt-6">
        <p class="text-xs uppercase tracking-wide text-gray-500">Stack</p>
        <p class="mt-1 text-sm text-gray-600">
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
        :class="index === currentSlideIndex ? 'bg-gray-800' : 'bg-gray-200'"
        :aria-label="'Slide ' + (index + 1)"
        :aria-current="index === currentSlideIndex ? 'true' : 'false'"
      ></button>
    </div>

    <div class="flex flex-wrap gap-4 md:items-center">
      <button
        @click="togglePause"
        :aria-pressed="isPaused"
        class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span v-if="isPaused">Auto-Play fortsetzen</span>
        <span v-else>Auto-Play pausieren</span>
      </button>

      <div class="flex gap-x-4">
        <button
          @click="showPrevious"
          aria-label="Vorherige Cases"
          class="rounded-full border border-gray-300 p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
          class="rounded-full border border-gray-300 p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
