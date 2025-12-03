<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import {
  caseStudies as caseStudiesData,
  getTotalSlides,
} from "../../content/caseStudies";

const caseStudies = ref(caseStudiesData);
const totalSlides = getTotalSlides();
const currentSlideIndex = ref(0);

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
      class="mt-2 text-3xl font-bold text-gray-900 dark:text-white"
    >
      Ausschnitt aus vergangenen Mandaten
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
      class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-xs dark:border-gray-700 dark:bg-gray-900"
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
        class="h-2 w-2 rounded-full focus:outline-hidden"
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
        class="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
      >
        <span v-if="isPaused">Auto-Play fortsetzen</span>
        <span v-else>Auto-Play pausieren</span>
      </button>

      <div class="flex gap-x-4">
        <button
          @click="showPrevious"
          aria-label="Vorherige Cases"
          class="rounded-full border border-gray-300 p-2 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
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
          class="rounded-full border border-gray-300 p-2 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
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
