<template>
  <div id="app">
    <TopBar/>
    <router-view/>
  </div>
</template>
<script setup>
import TopBar from "@/components/top-bar.vue";
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #cbc4a7;
}

::-webkit-scrollbar-thumb {
  background-color: #454138;
  border-radius: 5px;
  border: 2px solid #cbc4a7;
}

/* Pour Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #454138 #cbc4a7;
}
</style>