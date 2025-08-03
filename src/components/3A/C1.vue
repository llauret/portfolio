<template>
  <div class="tronc">
    <div v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const props = defineProps({
  file: {
    type: String,
  }
});

const htmlContent = ref('');

marked.setOptions({
  highlight: function (code, lang) {
    if (hljs.getLanguage(lang)) {
      return hljs.highlight(code, {language: lang}).value;
    }
    return hljs.highlightAuto(code).value;
  }
});

async function loadContent() {
  let rawContent = '';
  if (props.file === 'C1') {
    const mod = await import('@/docs/C1_C4.md?raw');
    rawContent = mod.default;
  } else if (props.file === 'C2') {
    const mod = await import('@/docs/affichage.md?raw');
    rawContent = mod.default;
  } else if (props.file === 'Contexte') {
    const mod = await import('@/docs/Contexte.md?raw');
    rawContent = mod.default;
  } else {
    rawContent = 'Fichier non trouvé';
  }
  htmlContent.value = marked.parse(rawContent);
}

onMounted(loadContent);

watch(() => props.file, loadContent);
</script>

<style scoped>
.tronc {
  max-width: 100%;
  height: 100px;
}

figure img {
  max-width: 100%;
  height: auto;
  display: block;
}

pre {
  border-left: 3px solid #f36d33;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}
</style>