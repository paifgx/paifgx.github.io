<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";

interface CaseStudy {
  company: string;
  timeframe: string;
  role: string;
  mission: string;
  situation: string;
  approach: string;
  result: string;
  stack: string;
}

const props = defineProps<{
  caseStudies: CaseStudy[];
}>();

const slides = computed(() => {
  const grouped: CaseStudy[][] = [];
  for (let i = 0; i < props.caseStudies.length; i += 2) {
    grouped.push(props.caseStudies.slice(i, i + 2));
  }
  return grouped;
});

const totalSlides = computed(() => Math.max(slides.value.length, 1));
const currentSlide = ref(0);
const userPaused = ref(false);
const systemPaused = ref(false);
const prefersReducedMotion = ref(false);
const intervalMs = 5000;
let intervalId: ReturnType<typeof setInterval> | null = null;
let visibilityHandler: (() => void) | null = null;

const isPaused = computed(() => userPaused.value || systemPaused.value);
const regionLabel = computed(
  () => `Case Studies, Seite ${currentSlide.value + 1} von ${totalSlides.value}`
);
const toggleLabel = computed(() =>
  isPaused.value ? "Auto-Play fortsetzen" : "Auto-Play pausieren"
);

const showSlide = (index: number) => {
  const nextIndex = (index + totalSlides.value) % totalSlides.value;
  currentSlide.value = nextIndex;
};

const nextSlide = () => showSlide(currentSlide.value + 1);
const prevSlide = () => showSlide(currentSlide.value - 1);

const stopAutoplay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const startAutoplay = () => {
  stopAutoplay();
  if (isPaused.value || prefersReducedMotion.value) return;
  intervalId = setInterval(() => {
    if (!isPaused.value) nextSlide();
  }, intervalMs);
};

const handleDotKey = async (index: number, e: KeyboardEvent) => {
  let targetIndex: number | null = null;

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    targetIndex = (index + 1) % totalSlides.value;
    showSlide(index + 1);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    targetIndex = (index - 1 + totalSlides.value) % totalSlides.value;
    showSlide(index - 1);
  } else if (e.key === "Home") {
    e.preventDefault();
    targetIndex = 0;
    showSlide(0);
  } else if (e.key === "End") {
    e.preventDefault();
    targetIndex = totalSlides.value - 1;
    showSlide(totalSlides.value - 1);
  }

  if (targetIndex !== null) {
    await nextTick();
    const targetButton = document.querySelector(
      `#carousel-dots button[data-slide="${targetIndex}"]`
    ) as HTMLButtonElement | null;
    if (targetButton) {
      targetButton.focus();
    }
  }
};

const handleVisibility = () => {
  systemPaused.value = document.hidden || !document.hasFocus();
};

const toggleAutoplay = () => {
  userPaused.value = !userPaused.value;
};

watch(isPaused, (paused) => {
  if (paused) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
});

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion.value) {
    userPaused.value = true;
  }

  visibilityHandler = () => {
    handleVisibility();
  };

  document.addEventListener("visibilitychange", visibilityHandler);
  window.addEventListener("blur", visibilityHandler);
  window.addEventListener("focus", visibilityHandler);
  window.addEventListener("beforeunload", stopAutoplay);

  handleVisibility();
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
  if (visibilityHandler) {
    document.removeEventListener("visibilitychange", visibilityHandler);
    window.removeEventListener("blur", visibilityHandler);
    window.removeEventListener("focus", visibilityHandler);
  }
  window.removeEventListener("beforeunload", stopAutoplay);
});
</script>

<template>
  <div
    id="case-studies-carousel"
    :data-total-slides="totalSlides"
    role="region"
    aria-roledescription="Karussell"
    :aria-label="regionLabel"
  >
    <div
      v-for="(slide, slideIndex) in slides"
      v-show="slideIndex === currentSlide"
      :key="slideIndex"
      class="case-study-slide grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
      role="group"
      aria-roledescription="Folie"
      :aria-label="`Seite ${slideIndex + 1} von ${totalSlides}`"
      :data-slide-index="slideIndex"
    >
      <article
        v-for="caseStudy in slide"
        :key="caseStudy.company + caseStudy.timeframe"
        class="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-blue/50 dark:hover:bg-white/10"
      >
        <div>
          <div class="flex items-center justify-between mb-4">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              {{ caseStudy.timeframe }}
            </p>
            <div class="h-px flex-1 bg-gray-200 dark:bg-white/10 mx-4" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ caseStudy.company }}
          </h3>
          <p class="text-sm text-brand-blue font-medium mt-1">
            {{ caseStudy.role }}
          </p>
          <p
            class="mt-4 text-sm font-medium text-gray-900 dark:text-gray-200 border-l-2 border-brand-gold pl-3"
          >
            {{ caseStudy.mission }}
          </p>

          <div class="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <p
                class="font-semibold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-1"
              >
                Ausgangssituation
              </p>
              <p class="leading-relaxed">
                {{ caseStudy.situation }}
              </p>
            </div>
            <div>
              <p
                class="font-semibold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-1"
              >
                Ansatz
              </p>
              <p class="leading-relaxed">
                {{ caseStudy.approach }}
              </p>
            </div>
            <div>
              <p
                class="font-semibold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-1"
              >
                Ergebnis
              </p>
              <p
                class="leading-relaxed text-gray-900 dark:text-white font-medium"
              >
                {{ caseStudy.result }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
          <p
            class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2"
          >
            Stack
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in caseStudy.stack.split(',')"
              :key="caseStudy.company + tech"
              class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-white/5 dark:text-gray-300 dark:ring-white/20"
            >
              {{ tech.trim() }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div
    class="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    role="group"
    aria-label="Karussell-Navigation"
  >
    <div
      id="carousel-dots"
      class="space-x-2"
      role="tablist"
      aria-label="Folien auswählen"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        type="button"
        role="tab"
        class="carousel-dot h-2 w-2 rounded-full focus:outline-hidden focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 dark:focus:ring-offset-brand-dark transition-colors duration-200"
        :class="
          index === currentSlide
            ? 'bg-brand-blue w-4'
            : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
        "
        :data-slide="index"
        :aria-label="`Seite ${index + 1} von ${totalSlides}`"
        :aria-selected="index === currentSlide ? 'true' : 'false'"
        :tabindex="index === currentSlide ? 0 : -1"
        @click="showSlide(index)"
        @keydown="handleDotKey(index, $event)"
      />
    </div>

    <div class="flex flex-wrap gap-4 md:items-center">
      <button
        id="toggle-autoplay"
        :aria-pressed="isPaused"
        class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white dark:focus:ring-offset-brand-dark transition-colors"
        @click="toggleAutoplay"
      >
        {{ toggleLabel }}
      </button>

      <div class="flex gap-x-4">
        <button
          id="prev-slide"
          aria-label="Vorherige Cases"
          class="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white dark:focus:ring-offset-brand-dark transition-colors"
          @click="prevSlide"
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
              d="M15 10a1 1 0 01-1 1H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L7.414 9H14a1 1 0 011 1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          id="next-slide"
          aria-label="Nächste Cases"
          class="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white dark:focus:ring-offset-brand-dark transition-colors"
          @click="nextSlide"
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
              d="M5 10a1 1 0 011-1h6.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
