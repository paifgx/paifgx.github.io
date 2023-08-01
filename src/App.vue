<script setup lang="ts">
import MainNavigation from "@/components/layout/MainNavigation.vue";
import FooterNavigation from "@/components/layout/FooterNavigation.vue";
</script>

<template>
  <header class="relative">
    <main-navigation />
  </header>

  <main class="max-w-screen-lg px-8 mx-auto sm:px-16 slg:px-24 mt-36 mb-8">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer>
    <!-- TrustBox widget - Micro Review Count -->
    <div
      class="trustpilot-widget w-full pt-4 pb-8"
      data-locale="de-DE"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="648877e11a4097c3f10c7354"
      data-style-height="24px"
      data-style-width="100%"
      data-theme="dark"
      data-min-review-count="10"
      data-style-alignment="center"
    >
      <a
        class="text-center"
        href="https://de.trustpilot.com/review/garten.dev"
        target="_blank"
        rel="noopener"
        >Trustpilot</a
      >
    </div>
    <!-- End TrustBox widget -->

    <footer-navigation />
  </footer>
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
