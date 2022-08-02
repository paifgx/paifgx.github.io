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
        title="Twitter"
        link="https://twitter.com/paifgx"
        icon="akar-icons:twitter-fill"
      />
      <social-icon
        title="Instagram"
        link="https://www.instagram.com/paifgx"
        icon="akar-icons:instagram-fill"
      />
      <social-icon
        title="Twitch"
        link="https://www.twitch.tv/paifgx"
        icon="akar-icons:twitch-fill"
      />
      <social-icon
        title="LinkedIn"
        link="https://www.linkedin.com/in/paifgx"
        icon="akar-icons:linkedin-box-fill"
      />
      <social-icon
        title="Xing"
        link="https://www.xing.com/profile/Patrik_Garten/"
        icon="dashicons:xing"
      />
    </div>

    <action-button link="mailto:info@patrikgarten.de">
      Schreib mir
    </action-button>
  </div>
</template>
