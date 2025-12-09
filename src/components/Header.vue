<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { iconMap } from "../utils/icons";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import { navigationItems } from "../config/site";
import {
  resolveInitialTheme,
  applyTheme,
  persistTheme,
  onSystemThemeChange,
  onStorageChange,
} from "../utils/theme";

const props = defineProps({
  currentPath: {
    type: String,
    required: true,
  },
});

const contact = { name: "Kontakt", href: "/contact" };

const isDarkMode = ref(false);
const themeToggleLabel = computed(() =>
  isDarkMode.value ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"
);

let cleanupSystemListener;
let cleanupStorageListener;

const toggleTheme = () => {
  const nextTheme = isDarkMode.value ? "light" : "dark";
  persistTheme(nextTheme);
  isDarkMode.value = nextTheme === "dark";
};

onMounted(() => {
  const initialTheme = resolveInitialTheme();
  applyTheme(initialTheme);
  isDarkMode.value = initialTheme === "dark";

  cleanupSystemListener = onSystemThemeChange((theme) => {
    applyTheme(theme);
    isDarkMode.value = theme === "dark";
  });

  cleanupStorageListener = onStorageChange((theme) => {
    applyTheme(theme);
    isDarkMode.value = theme === "dark";
  });
});

onBeforeUnmount(() => {
  cleanupSystemListener?.();
  cleanupStorageListener?.();
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
    class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 dark:bg-brand-dark/80 transition-colors duration-200"
    v-slot="{ open }"
  >
    <div
      class="h-1 w-full bg-linear-to-r from-brand-blue via-indigo-500 to-brand-gold"
    ></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex shrink-0 items-center">
          <a
            href="/"
            class="flex flex-col leading-tight"
            aria-label="Startseite"
          >
            <span
              class="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              GARTEN.ai
            </span>
            <span
              class="text-[10px] uppercase tracking-wider text-brand-gold font-medium"
            >
              AI Solution Architect
            </span>
          </a>
        </div>

        <nav
          aria-label="Hauptnavigation"
          class="hidden sm:ml-6 sm:flex sm:space-x-8"
        >
          <a
            v-for="navItem in navigationItems"
            :key="navItem.name"
            :href="navItem.href"
            :class="[
              'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200',
              isActive(navItem.href)
                ? 'border-brand-blue text-gray-900 dark:text-white'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:border-brand-gold/50',
            ]"
          >
            {{ navItem.name }}
          </a>
        </nav>

        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:gap-3">
          <button
            type="button"
            class="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-600 shadow-xs transition hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue dark:border-gray-800 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
            :aria-pressed="isDarkMode"
            :aria-label="themeToggleLabel"
            :title="themeToggleLabel"
            @click="toggleTheme"
          >
            <component
              :is="iconMap.MoonIcon"
              v-if="isDarkMode"
              class="h-5 w-5"
              aria-hidden="true"
            />
            <component
              :is="iconMap.SunIcon"
              v-else
              class="h-5 w-5"
              aria-hidden="true"
            />
            <span class="sr-only">{{ themeToggleLabel }}</span>
          </button>
          <a
            :href="contact.href"
            class="contact-button rounded-md bg-brand-blue px-4 py-2 text-white shadow-lg shadow-brand-blue/20 transition hover:bg-blue-600 focus:outline-hidden focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-brand-dark"
          >
            {{ contact.name }}
          </a>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-brand-blue dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            aria-label="Menü öffnen"
          >
            <span class="sr-only">Menü öffnen</span>
            <component
              :is="iconMap.Bars3Icon"
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <component
              :is="iconMap.XMarkIcon"
              v-else
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden dark:bg-brand-dark dark:text-gray-100">
      <nav aria-label="Mobile Hauptnavigation" class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          v-for="navItem in navigationItems"
          :key="navItem.name"
          as="a"
          :href="navItem.href"
          :class="[
            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            isActive(navItem.href)
              ? 'border-brand-blue bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/10 dark:text-white'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-white/5 dark:hover:text-white',
          ]"
        >
          {{ navItem.name }}
        </DisclosureButton>
      </nav>

      <div class="border-t border-gray-200 px-4 py-4 dark:border-gray-800">
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Darstellungsmodus
        </p>
        <button
          type="button"
          class="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue dark:border-gray-700 dark:bg-white/5 dark:text-gray-100 dark:hover:bg-white/10"
          :aria-pressed="isDarkMode"
          :aria-label="
            isDarkMode
              ? 'Dunkler Modus, zum hellen Modus wechseln'
              : 'Heller Modus, zum dunklen Modus wechseln'
          "
          :title="themeToggleLabel"
          @click="toggleTheme"
        >
          <span>{{ isDarkMode ? "Dunkler Modus" : "Heller Modus" }}</span>
          <component
            :is="iconMap.MoonIcon"
            v-if="isDarkMode"
            class="h-5 w-5"
            aria-hidden="true"
          />
          <component
            :is="iconMap.SunIcon"
            v-else
            class="h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </div>

      <div class="border-t border-gray-200 pb-3 pt-4 dark:border-gray-800">
        <div class="flex items-center px-4">
          <a
            :href="contact.href"
            class="w-full rounded-md bg-brand-blue py-2 text-center text-white shadow-lg shadow-brand-blue/20 focus:outline-hidden focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-gray-50 dark:hover:bg-blue-600 dark:focus:ring-offset-brand-dark"
          >
            {{ contact.name }}
          </a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
