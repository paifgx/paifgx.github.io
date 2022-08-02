<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import SocialSection from "@/components/sections/SocialSection.vue";
</script>

<template>
  <div class="flex flex-col gap-16">
    <hero-section />

    <social-section />

    <!--
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <featured-projects />
    -->
  </div>
</template>
