<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  currentPath: {
    type: String,
    required: true,
  },
});

const navigationItems = [
  { name: "Werdegang", href: "/about" },
  { name: "Dienstleistungen", href: "/service" },
  { name: "Artikel", href: "/blog" },
];

const contact = { name: "Kontakt", href: "/contact" };

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
    class="bg-white shadow sticky top-0 z-50"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex flex-shrink-0 items-center">
          <h1 class="text-lg font-semibold">
            <a href="/" class="flex items-center">
              <img class="h-8 w-auto" src="logo.png" alt="Logo Ihrer Website" />
              <span class="sr-only">Startseite</span>
            </a>
          </h1>
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
                ? 'border-indigo-500 text-gray-900'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
            ]"
          >
            {{ navItem.name }}
          </a>
        </nav>

        <!-- Kontaktbutton (Desktop) -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <a
            :href="contact.href"
            class="contact-button bg-indigo-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {{ contact.name }}
          </a>
        </div>

        <!-- Mobile Menü Button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
    <DisclosurePanel class="sm:hidden">
      <nav aria-label="Mobile Hauptnavigation" class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          v-for="navItem in navigationItems"
          :key="navItem.name"
          as="a"
          :href="navItem.href"
          :class="[
            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            isActive(navItem.href)
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
          ]"
        >
          {{ navItem.name }}
        </DisclosureButton>
      </nav>

      <!-- Kontaktbutton (Mobile) -->
      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <a
            :href="contact.href"
            class="bg-indigo-600 text-white w-full text-center py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {{ contact.name }}
          </a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
