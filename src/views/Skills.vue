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

    <div class="content-layout">
      <div class="skills-sidebar">
        <ue-card
            v-for="(skill, index) in skills"
            :key="index"
            :class="{ active: selectedSkill === index }"
            :title="skill.title"
            class="skill-card"
            @mouseenter="selectedSkill = index"
        >
          <div
              :class="{ active: selectedSkill === index }"
              class="square"
          ></div>
        </ue-card>
      </div>

      <div class="main-content">
        <Competence
            :ac="skills[selectedSkill].title"
            :annee="years[selectedYear]"
        ></Competence>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import UeCard from "@/components/ue-card.vue";
import Competence from "@/components/competence.vue";

const selectedYear = ref(1);
const selectedSkill = ref(0);
const years = ["1ère année", "2ème année", "3ème année"];

const skills =
    [
      {title: "Réaliser un développement d'application", color: "#47443b"},
      {title: "Optimiser des applications", color: "#47443b"},
      {title: "Administrer des systèmes informatiques communicants complexes", color: "#47443b"},
      {title: "Gérer les données de l'information", color: "#47443b"},
      {title: "Conduire un projet", color: "#47443b"},
      {title: "Collaborer au sein d'une équipe informatique", color: "#47443b"}
    ];

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    selectedYear.value = (selectedYear.value - 1 + years.length) % years.length;
  } else if (event.key === 'ArrowRight') {
    selectedYear.value = (selectedYear.value + 1) % years.length;
  } else if (event.key === 'ArrowDown') {
    selectedSkill.value = (selectedSkill.value + 1) % skills.length;
  } else if (event.key === 'ArrowUp') {
    selectedSkill.value = (selectedSkill.value - 1 + skills.length) % skills.length;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

function selectYear(index) {
  selectedYear.value = index;
}
</script>

<style scoped>
.square {
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  flex-shrink: 0;
  background-color: #4d4a41;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease;
}

.square.active {
  background-color: #d4ceb6;
}

.skills-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding: 2rem;
}

.content-layout {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
}

.skills-sidebar {
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 1.5rem;
  animation: fadeIn 0.5s ease-in-out;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  height: 80vh;
  border: 1px solid #454138;
  padding: 1rem;
}

.selection-annee {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.selection-annee > div {
  background-color: #c0bba5;
  background-size: 0.3rem 0.3rem;
  background-image: linear-gradient(to right, #bab59f 1px, rgba(204, 200, 177, 0) 1px), linear-gradient(to bottom, #bab59f 1px, rgba(204, 200, 177, 0) 1px);;
  padding: 1rem 2rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.selection-annee > div:hover {
  background-color: #4d4a41;
  background-size: 0.3rem 0.3rem;
  background-image: linear-gradient(to right, #47443b 1px, rgba(204, 200, 177, 0) 1px), linear-gradient(to bottom, #47443b 1px, rgba(204, 200, 177, 0) 1px);;
  transform: translateY(-3px);
}

.selection-annee > div.active {
  background-color: #4d4a41;
  background-size: 0.3rem 0.3rem;
  background-image: linear-gradient(to right, #47443b 1px, rgba(204, 200, 177, 0) 1px), linear-gradient(to bottom, #47443b 1px, rgba(204, 200, 177, 0) 1px);;
  color: #c0bba5;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.skill-card {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  background-color: #c0bba5;
  background-size: 0.3rem 0.3rem;
  background-image: linear-gradient(to right, #bab59f 1px, rgba(204, 200, 177, 0) 1px), linear-gradient(to bottom, #bab59f 1px, rgba(204, 200, 177, 0) 1px);;
  text-align: center;
  opacity: 50%;
  color: #454138;
}

.skill-card.active {
  color: #c0bba5;
  opacity: 100%;
  background-color: #4d4a41;
  background-size: 0.3rem 0.3rem;
  background-image: linear-gradient(to right, #47443b 1px, rgba(204, 200, 177, 0) 1px), linear-gradient(to bottom, #47443b 1px, rgba(204, 200, 177, 0) 1px);;
}

.skill-card:hover {
  transform: translateX(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
  }

  .skills-sidebar {
    width: 100%;
    margin-bottom: 2rem;
  }

  .selection-annee {
    flex-direction: column;
    gap: 1rem;
  }

  .selection-annee > div {
    width: 100%;
  }
}
</style>