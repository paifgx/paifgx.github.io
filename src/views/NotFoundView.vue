<script setup lang="ts">
import ActionButton from "@/components/ui/ActionButton.vue";
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="font-theme_bold text-8xl">404</h1>

    <span class="leading-loose text-lg">
      The page you're looking for doesn't exist. Click below to head back to the
      safe and cozy home.
    </span>

    <action-button link="/">Go Home</action-button>
  </div>
</template>
