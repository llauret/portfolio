<template>
  <h1>Projets (et autres... voir Github)</h1>

  <div class="grid-container">
    <project-card
        :technoimgs="['vue.png', 'nodejs.png', 'Postgresql_elephant.svg.png', 'docker.svg', 'python.png', 'sequelize.png', 'linux.png', 'vitepress.png']"
        description="Développement d'une application web pour la numérisation de processus papier.

        Cette application est destinée à un usage sur tablette (avec un os Windows, c'est plus un mini PC), l'objectif final est que :

        ■ Le site remplît les attentes.
        ■ Sois ergonomique, et agréable à utiliser.
        ■ Remplace les processus papier.

        Documentation avec VitePress/Histoire et Test avec Vitest, hosting en VM/Container Docker

        ■ Sert à réaliser des relevés de mesures sur des machines industrielles, et à les stocker dans une base de données.
          Avoir un suivi de ces relevés, et les exploiter via un dashboard.

        ■ Permet de veiller à la qualité des relevés sur ligne de production, et agir en conséquence.
        "
        link-skills="https://mahara-info.iut-bm.univ-fcomte.fr/view/view.php?t=d60b01973f28bf5c7157"
        title="Alternance - Numérisation processus papier"
    >
      <template #model3D>
        <music-note3-d model3-d="doc"></music-note3-d>
      </template>
    </project-card>

    <project-card
        :technoimgs="['kotlin.png']"
        description="Développement d'une application mobile - Lecteur de musique en Kotlin
    ■ Lecteur de musique
    ■ Playlist
    ■ Recherche de musique
    ■ Guesser de musique
    ■ Partage de musique
    ■ Téléchargement de musique
    ■ Etc.

    EN COURS DE DEVELOPPEMENT

    J'apprends à utiliser Kotlin et Android Studio pour ce projet. Notamment l'architecture MVVM et les tests unitaires.
    Ainsi que la gestion de la musique et des fichiers avec base de données en utilisant Room.
    "
        link="https://github.com/llauret/ArcaneMusic"
        title="Lecteur de musique"
    >
      <template #model3D>
        <music-note3-d model3-d="note"></music-note3-d>
      </template>
    </project-card>
    <project-card
        :technoimgs="['java.png']"
        description="Transcription Image en son avec JavaFX et OpenCV
        Prends en input une image et la découpe afin de générer des fréquences de sons pour chaque pixel de l'image

        J'ai appris à utiliser OpenCV et JavaFX pour ce projet et développé mon algorithmie pour la génération de son.
"
        link="https://github.com/llauret/ImageSonPM"
        title="Java ImageSon"
    >
      <template #model3D>
        <music-note3-d model3-d="sound"></music-note3-d>
      </template>
    </project-card>
    <project-card
        :technoimgs="['vue.png', 'supabase.png']"
        description="SUPA QUIZZU - QCM en vue JS avec Supabase:
    ■ Permet la révision de cours
    ■ Permet de créer des QCM

    EN COURS DE DEVELOPPEMENT

    A venir:
    ■ PvP
    ■ Classement
    ■ Génération de QCM par IA
    ■ Mettre sur vercel
    "
        link="https://github.com/llauret/SupaQuizzu"
        title="SUPA QUIZZU"
    >
      <template #model3D>
        <music-note3-d model3-d="question"></music-note3-d>
      </template>
    </project-card>
    <project-card
        :technoimgs="['java.png']"
        description="2048 en Java avec JavaFX

        M'as permis de m'entrainer à JavaFX et à l'algorithmie

        A venir:

        ■ IA
        ■ Récapitulatif des parties
        ■ Mode de jeux (3x3, 4x4, 5x5, etc.)
"
        link="https://github.com/llauret/2048"
        title="2048"
    >
      <template #model3D>
        <music-note3-d model3-d="2048"></music-note3-d>
      </template>
    </project-card>
    <project-card
        :technoimgs="['qt.png', 'cpp.png', 'sqlite.svg']"
        description="Gestionnaire de mot de passe avec Qt avec C++ et SQLite

    ■ Permet de stocker des mots de passe
    ■ Permet de générer des mots de passe
    ■ Permet de les retrouver
    ■ Permet de les copier
    ■ Permet de les supprimer
    ■ Permet de les modifier
"
        link="https://github.com/llauret/BeretPass"
        title="BeretPass"
    >
      <template #model3D>
        <music-note3-d model3-d="key"></music-note3-d>
      </template>
    </project-card>
    <project-card
        :technoimgs="['vue.png', 'ionic.png', 'mongodb.png']"
        description="Application web gestion orgnisation de héros avec VueJS3 et Ionic
        Web app permettant de découvrir la création d'application web avec VueJS3 et Ionic
        Elle permet de gérer des héros, de les créer, les modifier, les supprimer, les voir, etc.
        Ainsi que de gérer des équipes de héros, de les créer, les modifier, les supprimer, les voir, etc.
"
        link="https://github.com/llauret/heroes-and-vilains"
        title="drMAD"
    >
      <template #model3D>
        <music-note3-d model3-d="globe"></music-note3-d>
      </template>
    </project-card>
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