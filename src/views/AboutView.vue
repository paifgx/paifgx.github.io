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
      Mein Name ist Patrik Garten, und ich bin ein erfahrener, in Deutschland
      ansässiger Softwareentwickler. Ich habe mich auf Web- und App-Entwicklung
      spezialisiert und habe umfangreiche Kenntnisse und Erfahrung in einer
      Vielzahl von Programmiersprachen und Frameworks, wobei meine
      Spezialisierung auf TypeScript/JavaScript, Kotlin/Java und PHP liegt.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Als selbstständiger Anwendungsentwickler mit umfangreicher Erfahrung in
      der Web- und Software-Entwicklung strebe ich kontinuierlich danach,
      bessere Lösungen für anspruchsvolle Herausforderungen zu finden. Ich bin
      stets bestrebt, neue Technologien und Werkzeuge mir anzueignen.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Mein Ziel ist es, Unternehmen dabei zu unterstützen, Zeit und Geld zu
      sparen und gleichzeitig ihre Einnahmen zu steigern. Durch die
      Digitalisierung und Optimierung bestehender Arbeitsabläufe, die
      Verbesserung von Prozessen und die Einführung automatisierter Workflows
      trage ich dazu bei, Effizienzsteigerungen zu erzielen. Von der Beratung
      bis hin zur individuellen Entwicklung von Web- und Software-Projekten
      stehe ich zur Verfügung.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Einige meiner abgeschlossenen Projekte kannst du
      <link-button link="https://github.com/paifgx">Github</link-button>
      oder meinem
      <link-button
        link="https://drive.google.com/drive/folders/1qu9Jt64JdiDWy5RSHzPzi-Rvjh-z1Edm?usp=sharing"
      >
        Portfolio
      </link-button>
      entnehmen.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Abseits meiner beruflichen Tätigkeit beschäftige ich mich gerne mit dem
      Thema Künstliche Intelligenz. In meiner Freizeit spiele ich
      Computerspiele, höre Musik verschiedenster Genres und verbringe Zeit mit
      meinen Freunden auf Discord. Außerdem genieße ich es, an der frischen Luft
      zu sein, beispielsweise beim Wandern. Du kannst mein Leben auf.
      <link-button link="https://www.instagram.com/paifgx/">
        Instagram
      </link-button>
      oder
      <link-button link="https://twitter.com/paifgx">Twitter</link-button>
      verfolgen.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Ich freue mich darauf, mit dir zusammenzuarbeiten und deine Projekte
      erfolgreich umzusetzen. Bitte zögere nicht
      <link-button link="mailto:info@garten.dev"
        >mich zu kontaktieren</link-button
      >, um weitere Informationen zu erhalten. Ich stehe dir gerne zur
      Verfügung, um deine Anforderungen zu besprechen und mögliche
      Lösungsansätze zu erörtern. Um einen passenden Zeitpunkt für ein Gespräch
      zu finden, kannst du auch direkt einen Termin in meinem Kalender
      vereinbaren:
      <link-button link="https://calendly.com/gartendev/30min"
        >Link zu Calendly</link-button
      >.
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
