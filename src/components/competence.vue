<template>
  <skill-detail :title="props.ac">
    <template #description>
      <div v-if="dataExists">
        <template v-for="acNum in acNumbers" :key="acNum">
          <div v-html="compData[`AC${acNum}`]?.title || ''"></div>
          <div v-html="compData[`AC${acNum}`]?.content || ''"></div>
        </template>
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
</style>