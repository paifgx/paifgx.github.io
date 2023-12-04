<script setup lang="ts">
import MainNavigation from "@/components/layout/MainNavigation.vue";
import FooterNavigation from "@/components/layout/FooterNavigation.vue";
</script>

<template>
  <header class="relative">
    <main-navigation/>
  </header>

  <main class="max-w-screen-lg px-8 mx-auto sm:px-16 slg:px-24 mt-36 mb-8">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>

  <footer>
    <footer-navigation/>
  </footer>

  <!-- ProvenExpert Bewertungssiegel -->
  <a class="hidden lg:block z-50 fixed right-0 bottom-20"
     href="https://www.provenexpert.com/patrik-garten-development/?utm_source=Widget&amp;utm_medium=Widget&amp;utm_campaign=Widget"
     title="Kundenbewertungen &amp; Erfahrungen zu Patrik Garten Development. Mehr Infos anzeigen."
     target="_blank"
     rel="noopener noreferrer"
  >
    <img src="https://images.provenexpert.com/76/a5/cebef886f7a565df0ebe6b8e9868/widget_landscape_180_de_0.png"
         class="border-0"
         alt="Erfahrungen &amp; Bewertungen zu Patrik Garten Development"
         width="180"
         height="150"
    />
  </a>
</template>

<style>
html,
body,
#app {
  @apply h-full max-w-full;
}

#app {
  @apply flex flex-col justify-between;
}
</style>
