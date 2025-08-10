<template>
  <div class="tronc">
    <div @click="handleContentClick" v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import {useRoute} from 'vue-router';

const route = useRoute();
const htmlContent = ref('');

marked.setOptions({
  highlight: function (code, lang) {
    if (hljs.getLanguage(lang)) {
      return hljs.highlight(code, {language: lang}).value;
    }
    return hljs.highlightAuto(code).value;
  }
});

async function loadContent(filename) {
  if (!filename) return;
  let rawContent = '';
  if (filename === 'C1') {
    const mod = await import('@/docs/C1.md?raw');
    rawContent = mod.default;
  } else if (filename === 'C2') {
    const mod = await import('@/docs/C2.md?raw');
    rawContent = mod.default;
  } else if (filename === 'C6') {
    const mod = await import('@/docs/C6.md?raw');
    rawContent = mod.default;
  } else if (filename === 'Contexte') {
    const mod = await import('@/docs/Contexte.md?raw');
    rawContent = mod.default;
  } else {
    rawContent = 'Fichier non trouvé';
  }
  htmlContent.value = marked.parse(rawContent);
}

function handleContentClick(event) {
  const link = event.target.closest('a');

  if (link && link.getAttribute('href').startsWith('#')) {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}

watch(() => route.params.file, async (newFile) => {
  await loadContent(newFile);
  const scrollContainer = document.querySelector('.container');
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  } else {
    window.scrollTo(0, 0);
  }
}, {immediate: true});
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