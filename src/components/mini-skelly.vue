<template>
  <div class="rikiki" @click="onClick" @mouseleave="hoverBar = null" @mousemove="onMouseMove">
    <div
        v-if="hoverBar !== null"
        :style="{ top: hoverBar + 'px' }"
        class="hover-bar"
    ></div>
    <slot></slot>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const hoverBar = ref(null);

function onMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const scrollContainer = document.querySelector('.container');
  const scrollTop = scrollContainer ? scrollContainer.scrollTop : 0;
  hoverBar.value = e.clientY - rect.top + scrollTop - 40;
}

function onClick(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickY = e.clientY - rect.top - 170;
  const percent = clickY / rect.height;

  const scrollContainer = document.querySelector('.container') || window;
  const scrollHeight = scrollContainer === window
      ? document.documentElement.scrollHeight - window.innerHeight
      : scrollContainer.scrollHeight - scrollContainer.clientHeight;

  const targetScroll = percent * scrollHeight;

  if (scrollContainer === window) {
    window.scrollTo({top: targetScroll, behavior: 'smooth'});
  } else {
    scrollContainer.scrollTo({top: targetScroll, behavior: 'smooth'});
  }
}
</script>
<style scoped>
.rikiki {
  font-size: 0.1rem;
  color: #333;
  width: 10%;
  position: absolute;
  padding-left: 2rem;
  right: 0;
  user-select: none;
  height: 90vh;
  overflow: auto;
}

.rikiki img,
.rikiki figure,
.rikiki figure img {
  max-width: 100px;
  max-height: 60px;
  height: auto;
  width: auto;
  object-fit: contain;
  display: block;
}
</style>