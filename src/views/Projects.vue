<template>
  <h1>Projets</h1>

  <div class="grid-container">
    <project-card
        :technoimgs="['vue.png', 'nodejs.png', 'Postgresql_elephant.svg.png', 'docker.svg', 'python.png', 'sequelize.png', 'linux.png', 'vitepress.png']"
        description="Développement d'une application web pour la numérisation de processus papier.

        Cette application est destinée à un usage sur tablette (avec un os Windows, c'est plus un mini PC), l'objectif final est que :

        ■ Le site remplît les attentes.
        ■ Sois ergonomique, et agréable à utiliser.
        ■ Remplace les processus papier.

        Documentation avec VitePress et Test avec Vitest, hosting en VM/Container Docker
        "
        image="mode-histo.png"
        link-skills=""
        title="Alternance - Numérisation processus papier"
    ></project-card>
    <project-card
        :technoimgs="['kotlin.png']"
        description="Développement d'une application mobile - Lecteur de musique
    ■ Lecteur de musique
    ■ Playlist
    ■ Recherche de musique
    ■ Guesser de musique
    ■ Partage de musique
    ■ Téléchargement de musique
    ■ Etc.
    "
        link="https://github.com/llauret/ArcaneMusic"
        title="Lecteur de musique"
    >
      <template #model3D>
        <music-note3-d></music-note3-d>
      </template>
    </project-card>
    <project-card
        :technoimgs="['java.png']"
        description="Transcription Image en son avec JavaFX et OpenCV"
        link="https://github.com/llauret/ImageSonPM"
        title="Java ImageSon"
    ></project-card>
    <project-card
        :technoimgs="['python.png']"
        description="SUPA QUIZZU - QCM en Python Objectif :
    ■ Clé API pour générer in app les questions
    "
        link="https://github.com/llauret/QCM"
        title="SUPA QUIZZU"
    ></project-card>
    <project-card
        :technoimgs="['java.png']"
        description="2048 en Java avec JavaFX"
        image="2048.png"
        link="https://github.com/llauret/2048"
        title="2048"
    >
    </project-card>
    <project-card
        :technoimgs="['qt.png']"
        description="Gestionnaire de mot de passe avec Qt"
        link="https://github.com/llauret/BeretPass"
        pdf="QT_CPP_HUMBERT_LAURET.pdf"
    ></project-card>
    <project-card
        :technoimgs="['vue.png']"
        description="Application web gestion orgnisation de héros avec VueJS et Ionic"
        link="https://github.com/llauret/drMAD3"
        title="drMAD"
    ></project-card>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/project-card.vue";
import MusicNote3D from "@/components/music-note3D.vue";
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-height: 80vh;
  overflow-y: auto;
}

.card {
  width: 100%;
  display: flex;
  border: 1px solid #454138;
  flex-direction: column;
  overflow: hidden;
}

.grid-container::-webkit-scrollbar {
  width: 10px;
}

.grid-container::-webkit-scrollbar-track {
  background-color: #cbc4a7;
}

.grid-container::-webkit-scrollbar-thumb {
  background-color: #454138;
  border-radius: 5px;
  border: 2px solid #cbc4a7;
}

</style>