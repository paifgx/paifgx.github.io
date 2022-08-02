<script setup lang="ts">
import MainNavigation from "@/components/layout/MainNavigation.vue";
import FooterNavigation from "@/components/layout/FooterNavigation.vue";
</script>

<template>
  <header class="relative">
    <main-navigation />
  </header>

  <main class="max-w-screen-lg px-8 mx-auto sm:px-16 slg:px-24 mt-24 mb-16">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer>
    <footer-navigation />
  </footer>
</template>

<style>
html,
body,
#app {
  @apply h-full max-w-full overflow-x-hidden;
}

#app {
  @apply flex flex-col justify-between;
}
</style>
