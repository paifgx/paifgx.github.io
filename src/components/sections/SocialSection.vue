<script setup lang="ts">
import SocialIcon from "@/components/ui/SocialIcon.vue";
import ActionButton from "@/components/ui/ActionButton.vue";
</script>

<template>
  <div class="flex flex-col gap-2 sm:flex-row justify-between items-center">
    <div class="flex flex-wrap gap-1">
      <social-icon
        title="Profil von Patrik Garten auf www.github.com"
        link="https://github.com/paifgx"
        icon="akar-icons:github-fill"
      />
      <social-icon
        title="Profil von Patrik Garten auf www.gitlab.com"
        link="https://gitlab.com/paifgx"
        icon="mdi:gitlab"
      />
      <social-icon
        title="Profil von Patrik Garten auf www.instagram.com"
        link="https://www.instagram.com/garten.dev"
        icon="akar-icons:instagram-fill"
      />
      <social-icon
        title="Profil von Patrik Garten auf www.linkedin.com"
        link="https://www.linkedin.com/in/paifgx"
        icon="akar-icons:linkedin-box-fill"
      />
      <social-icon
        title="Profil von Patrik Garten auf www.xing.com"
        link="https://www.xing.com/profile/Patrik_Garten"
        icon="dashicons:xing"
      />
      <social-icon
        title="Profil von Patrik Garten auf www.freelancermap.de"
        link="https://www.freelancermap.de/freelancer-verzeichnis/profile/entwicklung/216540-profil-patrik-garten-software-engineer-full-stack-developer.html"
        icon="dashicons:admin-site-alt3"
      />
    </div>

    <action-button link="mailto:info@garten.dev">Schreib mir</action-button>
  </div>
</template>
