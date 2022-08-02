<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  link: string;
  icon: string;
  title: string;
}>();
</script>

<template>
  <a :href="link" :title="title" target="_blank">
    <icon
      :icon="icon"
      width="50"
      class="text-p_text rounded-md hover:bg-border_sm p-2 transition-all"
    />
  </a>
</template>
