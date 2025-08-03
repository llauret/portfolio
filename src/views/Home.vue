<template>
  <div class="caflexparici">
    <div>
      <h1>LAURET Lucas</h1>

      <p>
        Etudiant en troisième année de BUT informatique à l'IUT de Belfort.
        Développeur Full Stack en Alternance chez <a href="https://amphenol-fci-besancon.com/"
                                                     target="_blank">Amphenol
        FCI</a>
        à
        Besançon.
      </p>
    </div>
  </div>
  <div class="card-container">
    <competence-card
        description="Réaliser un développement d’application"
        title="Compétences 1"
    />
    <competence-card
        description="Optimiser des applications"
        title="Compétences 2"
    />
    <competence-card
        description="Collaborer au sein d'une équipe informatique"
        title="Compétences 6"
    />
  </div>

</template>
<script setup>

import CompetenceCard from "@/components/competence-card.vue";
</script>

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.caflexparici {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60vh;
}

.caflexparici > div {
  margin: 0 1rem;
}

.box {
  position: relative;
  border: 2px solid #454138;
  padding: 1rem;
  width: 77px;
  height: 77px;
  text-align: center;
  font-size: 1.5rem;
  cursor: grab;
  user-select: none;
}

.box:hover {
  background-color: #454138;
  color: white;
}

.box mark {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1rem;
}
</style>