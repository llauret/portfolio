<template>
  <skill-detail :title="props.ac">
    <template #description>
      <div v-if="dataExists" class="ac-container">
        <div v-for="acNum in acNumbers" :key="acNum" class="ac-section">
          <div class="ac-title sticky-title" v-html="compData[`AC${acNum}`]?.title || ''"></div>
          <div class="ac-content" v-html="compData[`AC${acNum}`]?.content || ''"></div>
        </div>
      </div>
      <div v-else>
        Aucune donnée disponible pour cette compétence dans cette année.
      </div>
    </template>
  </skill-detail>
</template>

<script setup>
import SkillDetail from "@/components/skill-detail.vue";
import jason from "@/jason.js"
import {computed} from 'vue';

const props = defineProps({
  annee: {
    type   : String,
    default: "2ème année"
  },
  ac   : {
    type   : String,
    default: "Réaliser un développement d'application"
  }
})

const dataExists = computed(() => {return jason[props.annee] && jason[props.annee][props.ac]});

const compData = computed(() => {
  if(dataExists.value) return jason[props.annee][props.ac];
  return {};
});

const acNumbers = computed(() => {
  if(!dataExists.value) return [];
  return Object.keys(compData.value)
      .filter(key => key.startsWith('AC'))
      .map(key => parseInt(key.replace('AC', '')))
      .sort((a, b) => a - b);
});
</script>

<style>
img {
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

pre {
  border-left: 3px solid #f36d33;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}

.ac-container {
  position: relative;
}

.ac-section {
  margin-bottom: 2rem;
}

.sticky-title {
  position: sticky;
  top: 0;
  background-color: #cbc4a7;
  padding: 10px;
  z-index: 10;
  border-bottom: 1px solid #454138;
  margin-bottom: 1rem;
}

.ac-content {
  padding: 0 10px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #cbc4a7;
}

::-webkit-scrollbar-thumb {
  background-color: #454138;
  border-radius: 4px;
  border: 1px solid #cbc4a7;
}

/* Pour Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #454138 #cbc4a7;
}
</style>