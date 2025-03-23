<template>
  <div :style="{ backgroundColor: color }" class="card">
    {{ title }}
  </div>
</template>
<script setup>

defineProps({
  title: String,
  color: String
})

</script>
<style scoped>
.card {
  width: 30%;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
</style>