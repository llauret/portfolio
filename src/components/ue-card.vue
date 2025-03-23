<template>
  <div :style="{ backgroundColor: color }" class="card">
    <slot></slot>
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}
</style>