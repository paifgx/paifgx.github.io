<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const testimonials = ref([
  {
    text: 'Die Zusammenarbeit mit Patrik war eine echte Bereicherung für unser Unternehmen.',
    name: 'Anna Müller',
    position: 'Leiterin, Tech Solutions',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    companyLogo: 'https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg',
    company: 'Tech Solutions',
  },
  {
    text: 'Dank Patriks Lösungen konnten wir unsere Effizienz erheblich steigern.',
    name: 'Markus Schmidt',
    position: 'Geschäftsführer, Innovate GmbH',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    companyLogo: 'https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg',
    company: 'Innovate GmbH',
  },
  {
    text: 'Patriks Expertise hat uns geholfen, die neuesten Technologien effektiv zu integrieren.',
    name: 'Sophie Wagner',
    position: 'Projektmanagerin, FutureWorks',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    companyLogo: 'https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg',
    company: 'FutureWorks',
  },
  {
    text: 'Unsere Produktivität hat sich durch Patriks Beratung und Implementierung verbessert.',
    name: 'David Klein',
    position: 'COO, DigitalizeNow',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    companyLogo: 'https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg',
    company: 'DigitalizeNow',
  },
  {
    text: 'Patrik hat uns gezeigt, wie wir mit KI-Lösungen schneller skalieren können.',
    name: 'Laura Fischer',
    position: 'CEO, ScaleUpTech',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    companyLogo: 'https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg',
    company: 'ScaleUpTech',
  },
]);

// Anzahl der Slides berechnen (jede Slide zeigt 2 Testimonials)
const totalSlides = Math.ceil(testimonials.value.length / 2);

// Aktuellen Slide-Index initialisieren
const currentSlideIndex = ref(0);

// Sichtbare Testimonials basierend auf dem aktuellen Slide-Index berechnen
const visibleTestimonials = computed(() => {
  const startIndex = (currentSlideIndex.value * 2) % testimonials.value.length;
  const indices = [
    testimonials.value[startIndex % testimonials.value.length],
    testimonials.value[(startIndex + 1) % testimonials.value.length],
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

let rotationInterval = null;

onMounted(() => {
  rotationInterval = setInterval(() => {
    showNext();
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(rotationInterval);
});
</script>

<template>
  <section class="container mx-auto bg-white py-24 px-6" aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading" class="text-3xl font-bold text-gray-900 mb-12">Kundenbewertungen</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <figure
        v-for="(testimonial, index) in visibleTestimonials"
        :key="testimonial.name + index"
        class="flex flex-col justify-between bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
      >
        <div class="flex gap-x-1 text-indigo-600" aria-hidden="true">
          <svg
            v-for="starIndex in 5"
            :key="starIndex"
            class="h-5 w-5 flex-none"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536
              1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405
              1.02L10 15.591l4.069 2.485c.713.436
              1.598-.207 1.404-1.02l-1.106-4.637
              3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <blockquote class="mt-4 text-lg font-semibold text-gray-900">
          <p>“{{ testimonial.text }}”</p>
        </blockquote>
        
        <figcaption class="mt-6 flex items-center gap-x-4">
          <img
            class="h-12 w-12 rounded-full bg-gray-50"
            :src="testimonial.avatar"
            alt=""
          />
          <div>
            <div class="text-base font-semibold text-gray-900">
              {{ testimonial.name }}
            </div>
            <div class="text-sm text-gray-600">{{ testimonial.position }}</div>
          </div>
          <img
            class="h-6 w-auto ml-auto"
            :src="testimonial.companyLogo"
            :alt="testimonial.company"
          />
        </figcaption>
      </figure>
    </div>

    <div class="mt-8 flex justify-between items-center">
      <div class="space-x-2">
        <button
          v-for="(step, index) in totalSlides"
          :key="index"
          @click="currentSlideIndex = index"
          class="w-2 h-2 rounded-full focus:outline-none"
          :class="index === currentSlideIndex ? 'bg-gray-800' : 'bg-gray-200'"
          :aria-label="'Slide ' + (index + 1)"
          :aria-current="index === currentSlideIndex ? 'true' : 'false'"
        ></button>
      </div>

      <div class="flex gap-x-4">
        <button
          @click="showPrevious"
          aria-label="Vorherige Bewertungen"
          class="rounded-full p-2 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
          aria-label="Nächste Bewertungen"
          class="rounded-full p-2 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
  </section>
</template>
