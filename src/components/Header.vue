<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  currentPath: {
    type: String,
    required: true,
  },
});

const navigationItems = [
  { name: "Werdegang", href: "/about" },
  { name: "Dienstleistungen", href: "/service" },
];

const contact = { name: "Kontakt", href: "/contact" };

const THEME_STORAGE_KEY = "theme-preference";
const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

const isDarkMode = ref(false);
const themeToggleLabel = computed(() =>
  isDarkMode.value ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"
);
let mediaQueryListener;

const applyThemeClass = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = theme;
  isDarkMode.value = isDark;
};

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
};

const resolvePreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia(THEME_MEDIA_QUERY).matches ? "dark" : "light";
};

const persistTheme = (theme) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyThemeClass(theme);
};

const toggleTheme = () => {
  const nextTheme = isDarkMode.value ? "light" : "dark";
  persistTheme(nextTheme);
};

const handleSystemThemeChange = (event) => {
  if (getStoredTheme()) {
    return;
  }

  applyThemeClass(event.matches ? "dark" : "light");
};

const handleStorageUpdate = (event) => {
  if (event.key !== THEME_STORAGE_KEY || !event.newValue) {
    return;
  }

  const nextTheme = event.newValue === "dark" ? "dark" : "light";
  applyThemeClass(nextTheme);
};

onMounted(() => {
  applyThemeClass(resolvePreferredTheme());

  mediaQueryListener = window.matchMedia(THEME_MEDIA_QUERY);
  mediaQueryListener.addEventListener("change", handleSystemThemeChange);

  window.addEventListener("storage", handleStorageUpdate);
});

onBeforeUnmount(() => {
  mediaQueryListener?.removeEventListener("change", handleSystemThemeChange);
  window.removeEventListener("storage", handleStorageUpdate);
});

const isActive = (href) => {
  const normalize = (path) => path.replace(/\/$/, "");
  const [hrefPath, hrefHash] = href.split("#");
  const [currentPathBase, currentHash] = props.currentPath.split("#");

  if (normalize(hrefPath) !== normalize(currentPathBase)) {
    return false;
  }

  if (hrefHash) {
    return hrefHash === currentHash;
  }

  return true;
};
</script>

<template>
  <Disclosure
    as="header"
    class="sticky top-0 z-50 bg-white shadow transition-colors duration-200 dark:bg-gray-950 dark:shadow-gray-900/40"
    v-slot="{ open }"
  >
    <div
      class="h-1 bg-gradient-to-r from-[var(--color-tiber-900)] via-[var(--color-tiber-500)] to-[var(--color-granny-apple)]"
    ></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex flex-shrink-0 items-center">
          <a
            href="/"
            class="flex flex-col leading-tight"
            aria-label="Startseite"
          >
            <span
              class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              GARTEN.ai
            </span>
            <span class="text-xs uppercase text-gray-500 dark:text-gray-400">
              AI Solution Architect
            </span>
          </a>
        </div>

        <!-- Navigation Links (Desktop) -->
        <nav
          aria-label="Hauptnavigation"
          class="hidden sm:ml-6 sm:flex sm:space-x-8"
        >
          <a
            v-for="navItem in navigationItems"
            :key="navItem.name"
            :href="navItem.href"
            :class="[
              'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
              isActive(navItem.href)
                ? 'border-indigo-500 text-gray-900 dark:text-white'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:border-gray-600',
            ]"
          >
            {{ navItem.name }}
          </a>
        </nav>

        <!-- Kontaktbutton & Theme Toggle (Desktop) -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:gap-3">
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-600 shadow-sm transition hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            :aria-pressed="isDarkMode"
            :aria-label="themeToggleLabel"
            :title="themeToggleLabel"
            @click="toggleTheme"
          >
            <MoonIcon v-if="isDarkMode" class="h-5 w-5" aria-hidden="true" />
            <SunIcon v-else class="h-5 w-5" aria-hidden="true" />
            <span class="sr-only">{{ themeToggleLabel }}</span>
          </button>
          <a
            :href="contact.href"
            class="contact-button rounded-md bg-indigo-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-offset-gray-950"
          >
            {{ contact.name }}
          </a>
        </div>

        <!-- Mobile Menü Button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            aria-label="Menü öffnen"
          >
            <span class="sr-only">Menü öffnen</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Menü -->
    <DisclosurePanel class="sm:hidden dark:bg-gray-950 dark:text-gray-100">
      <nav aria-label="Mobile Hauptnavigation" class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          v-for="navItem in navigationItems"
          :key="navItem.name"
          as="a"
          :href="navItem.href"
          :class="[
            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            isActive(navItem.href)
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-900 dark:hover:text-gray-100',
          ]"
        >
          {{ navItem.name }}
        </DisclosureButton>
      </nav>

      <!-- Theme Toggle (Mobile) -->
      <div class="border-t border-gray-200 px-4 py-4 dark:border-gray-800">
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          Darstellungsmodus
        </p>
        <button
          type="button"
          class="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-100 dark:hover:bg-gray-800"
          :aria-pressed="isDarkMode"
          :aria-label="themeToggleLabel"
          :title="themeToggleLabel"
          @click="toggleTheme"
        >
          <span>{{ isDarkMode ? "Dunkler Modus" : "Heller Modus" }}</span>
          <MoonIcon v-if="isDarkMode" class="h-5 w-5" aria-hidden="true" />
          <SunIcon v-else class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <!-- Kontaktbutton (Mobile) -->
      <div class="border-t border-gray-200 pb-3 pt-4 dark:border-gray-800">
        <div class="flex items-center px-4">
          <a
            :href="contact.href"
            class="w-full rounded-md bg-indigo-600 py-2 text-center text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-offset-gray-900"
          >
            {{ contact.name }}
          </a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
