<template>
  <div class="supa-container">
    <file-explorer @select-file="selectedFile = $event"></file-explorer>
    <div class="container">
      <C1 :file=selectedFile></C1>
      <mini-skelly>
        <C1 :file=selectedFile></C1>
      </mini-skelly>
    </div>
  </div>
</template>
<script setup>
import C1 from "@/components/3A/C1.vue";
import MiniSkelly from "@/components/mini-skelly.vue";
import FileExplorer from "@/components/file-explorer.vue";
import {ref} from "vue";

const selectedFile = ref('Contexte');

</script>
<style scoped>

.supa-container {
  display: flex;
  flex-direction: row;
  height: 90vh;
  overflow: hidden;
}

.container {
  overflow-y: auto;
  display: flex;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 78%;
  border: 1px solid #000000;
  padding: 1em;
}

.container::-webkit-scrollbar {
  display: none;
}

</style>