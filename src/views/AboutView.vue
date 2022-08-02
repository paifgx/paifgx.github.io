<script setup lang="ts">
// import { useWorkStore } from "@/stores/work.store";
import LinkButton from "@/components/ui/LinkButton.vue";

// const workStore = useWorkStore();
</script>

<template>
  <div class="flex flex-col gap-8">
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Ich bin Patrik Garten, ein in Deutschland ansässiger Entwickler und
      Student an der Universität für Universität für angewandte Wissenschaften
      und Künste Dortmund, mit einer ungebrochenen Liebe zum Lernen neue
      Technik. Ich bin spezialisiert auf Web- und App-Entwicklung mit
      TypeScript, JavaScript, Kotlin und PHP
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Als selbständiger Anwendungsentwickler mit Erfahrung in der Web- und
      Software-Entwicklung, zeige ich ein kontinuierliches Interesse an der
      Entwicklung besserer Methoden zur Lösung anspruchsvoller Herausforderungen
      und am Erlernen neuer Technologien und Werkzeuge.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Ich helfe Unternehmen, Zeit und Geld zu sparen und gleichzeitig mehr
      Einnahmen zu erzielen. I Dies erreiche ich, indem ich bestehende
      Arbeitsabläufe digitalisiere und optimiere, automatische Abläufe
      verbessere automatisierte Abläufe verbessere und neue Abläufe einführe.
      Meine Aufgaben reichen dabei von Beratung bis hin zur Umsetzung und
      individuellen Entwicklung von Web- und Software-Projekten.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Einige meiner Projekte finden Sie auf
      <link-button link="https://github.com/paifgx">Github</link-button>
      oder meinem <link-button link="/">Portfolio</link-button>.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Außerhalb meines Arbeitslebens spiele ich gerne Computerspiele, höre alle
      Arten von Musik alle Arten von Musik, hänge mit meinen Freunden auf
      Discord ab oder gehe mit ihnen aus. mit ihnen. Du kannst mein Leben auf
      meinem Blog verfolgen
      <link-button link="https://www.instagram.com/paifgx/"
        >Instagram</link-button
      >
      oder
      <link-button link="https://twitter.com/paifgx">Twitter</link-button>.
    </p>

    <!--
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />

    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <a
          class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
          v-for="work in workStore.getAllWorks"
          :key="work.id"
          :href="work.link"
        >
          <span class="font-theme_bold text-head_text">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">{{
            work.position
          }}</span>
          <span class="text-sm sm:text-base"
            >{{ work.from }} - {{ work.to }}</span
          >
        </a>
      </div>
    </div>
    -->
  </div>
</template>
