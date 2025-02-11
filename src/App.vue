<template>
  <div id="app">
    <TopBar/>
    <router-view/>
  </div>
</template>
<script setup>
import TopBar from "@/components/top-bar.vue";
</script>