<script setup lang="ts">
import ActionButton from "@/components/ui/ActionButton.vue";
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="font-theme_bold text-8xl">404</h1>

    <span class="leading-loose text-lg">
      Die Seite, die du suchst, existiert nicht. Klick unten, um zurück zum
      sicheren und gemütlichen Zuhause zu gelangen.
    </span>

    <action-button link="/">Zur Startseite</action-button>
  </div>
</template>
