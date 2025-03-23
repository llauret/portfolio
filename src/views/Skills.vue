<template>
  <div class="skills-container">
    <div class="selection-annee">
      <div
          v-for="(year, index) in years"
          :key="index"
          :class="{ active: selectedYear === index }"
          @click="selectYear(index)">
        {{ year }}
      </div>
    </div>

    <div v-if="selectedYear !== null" class="skills-content">

      <div class="skills-grid">
        <ue-card
            v-for="(skill, index) in skills[selectedYear]"
            :key="index"
            :color="skill.color"
            :title="skill.title"
            class="skill-card"
        />
      </div>
    </div>
    <competence1></competence1>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import UeCard from "@/components/ue-card.vue";
import Competence1 from "@/components/3a/compétence 1/competence-1.vue";

const selectedYear = ref(3);
const years = ["1ère année", "2ème année", "3ème année"];

const skills = [
  [
    {title: "Réaliser un développement d’application", color: "#454138"},
    {title: "Optimiser des applications", color: "#5D7052"},
    {title: "Administrer des systèmes informatiques communicants complexes", color: "#8B8778"},
    {title: "Gérer des données de l’information", color: "#6A6156"},
    {title: "Conduire un projet", color: "#A39171"},
    {title: "Collaborer au sein d’une équipe informatique", color: "#787058"}
  ]
];

function selectYear(index) {
  selectedYear.value = index;
}
</script>

<style scoped>


.description {
  font-size: 1rem;
  font-weight: normal;
  color: #2c3e50;
}

.skills-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding: 2rem;
}

.selection-annee {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.selection-annee > div {
  background: #454138;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.selection-annee > div:hover {
  background: #cbc4a7;
  color: #454138;
  transform: translateY(-3px);
}

.selection-annee > div.active {
  background: #cbc4a7;
  color: #454138;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.skills-content {
  width: 100%;
  animation: fadeIn 0.5s ease-in-out;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
}

.skill-card {
  width: 100%;
  height: 120px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.select-prompt {
  text-align: center;
  color: #787058;
  font-style: italic;
  margin-top: 3rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .selection-annee {
    flex-direction: column;
    gap: 1rem;
  }

  .selection-annee > div {
    width: 100%;
  }
}
</style>