<template>
  <div class="title">{{ title }}</div>
  <div class="ac"> {{ ac }}</div>
  <div class="subTitle">{{ subTitle }}</div>
  <slot name="description"></slot>
</template>
<script setup>

defineProps({
  title: String,
  ac: String,
  subTitle: String
})

</script>
<style scoped>
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.ac {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subTitle {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>