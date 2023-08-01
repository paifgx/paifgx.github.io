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
      Als engagierter Softwareentwickler und versierter Informatiker nutze ich
      mein technisches Know-how und meine Leidenschaft für das Programmieren, um
      komplexe Softwarelösungen zu erstellen. Ich verfüge über Kenntnisse in
      PHP, Kotlin und TypeScript, unterstützt durch ein tiefgreifendes
      Verständnis effizienter Softwarearchitekturen.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Ich strebe stets nach Perfektion, betrachte das Gesamtbild und
      gewährleiste so robuste, skalierbare und optimierte Lösungen. Ich liebe
      es, komplexe Probleme in einfache und effektive Lösungen zu verwandeln,
      die echten Mehrwert bieten.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Mein Ziel ist es daher: Unternehmen zu unterstützen effizienter zu
      arbeiten und dabei Geld zu sparen. Dazu nutze ich modernste Technologien,
      um Prozesse einfacher und erfolgreich zu gestalten, von der Verbesserung
      bestehender Arbeitsweisen bis zur Entwicklung neuer digitaler Hilfsmittel.
      In der sich rasch verändernden Technologiebranche gedeihe ich in einer
      kreativen Umgebung und bin immer bereit, innovative Wege zu gehen. Dieser
      Mix aus bewährten Methoden und frischem Denken ermöglicht es mir,
      praktische und aufregende Lösungen für jedes Business-Niveau zu bieten.
    </p>

    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Über alles hinaus ist meine Liebe für meine Arbeit echt. Ich bin stolz auf
      meine Arbeit und es erfüllt mich mit großer Freude, Unternehmen im
      digitalen Zeitalter zum Erfolg zu verhelfen.
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
      meinen Freunden. Außerdem genieße ich es, an der frischen Luft zu sein,
      beispielsweise beim Wandern oder auf Musik-Festivals.
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
      <link-button link="https://app.reclaim.ai/m/gartendev/meeting"
        >Link zu Reclaim</link-button
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
