<script setup lang="ts">
import SocialIcon from "@/components/ui/SocialIcon.vue";
import ActionButton from "@/components/ui/ActionButton.vue";
</script>

<template>
  <div class="flex flex-col gap-2 sm:flex-row justify-between items-center">
    <div class="flex flex-wrap gap-1">
      <social-icon
        title="Github"
        link="https://github.com/paifgx"
        icon="akar-icons:github-fill"
      />
      <social-icon
        title="Gitlab"
        link="https://gitlab.com/paifgx"
        icon="mdi:gitlab"
      />
      <social-icon
        title="Instagram"
        link="https://www.instagram.com/garten.dev"
        icon="akar-icons:instagram-fill"
      />
      <social-icon
        title="LinkedIn"
        link="https://www.linkedin.com/in/paifgx"
        icon="akar-icons:linkedin-box-fill"
      />
      <social-icon
        title="Xing"
        link="https://www.xing.com/profile/Patrik_Garten"
        icon="dashicons:xing"
      />
    </div>

    <action-button link="mailto:info@garten.dev">Schreib mir</action-button>
  </div>
</template>
