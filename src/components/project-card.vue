<template>
  <div class="card">
    <div class="title-header">
      <h2>{{ title }}</h2>
    </div>

    <div class="tech-bubble">
      <div class="tech-images">
        <img
            v-for="(img, index) in technoimgs"
            :key="index"
            :alt="'Technologie ' + index"
            :src="img"
            class="logo"
        />
      </div>
    </div>

    <div class="content">
      <img v-if="image" id="illustration" :src="image" alt="project image" class="project-image"/>
      <slot name="model3D"></slot>
      <iframe v-if="pdf" id="illustration" :src="pdf" class="project-image"></iframe>
      <div class="description">
        <p>{{ description }}</p>
      </div>
    </div>

    <a v-if="link" :href="link" class="project-link" target="_blank">Voir le projet</a>
    <a v-if="linkSkills" class="project-link" href="" target="_blank">Voir compétences (explication projet)</a>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  pdf: String,
  technoimgs: Array,
  description: String,
  link: String,
  linkSkills: String
})
</script>

<style scoped>
.card {
  width: 30%;
  background-color: #cbc4a7;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 0 10px 0 #454138;
}

.title-header {
  text-align: center;
  margin-bottom: 1rem;
}

.title-header h2 {
  margin: 0;
}

.tech-bubble {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem;
  background-color: #454138;
  color: #cbc4a7;
  margin-bottom: 1rem;
}

.tech-images {
  display: flex;
  gap: 0.5rem;
}

.logo {
  width: 30px;
  height: 30px;
}

.content {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
  height: 100%;
}

.project-image {
  width: 40%;
  height: 80%;
  object-fit: cover;
  border: 1px solid #454138;
}

.description {
  flex: 1;
  text-align: justify;
  font-size: 1rem;
  border: 1px solid #454138;
  padding: 0.5rem;
  white-space: pre-line;
}

.project-link {
  align-self: flex-start;
  color: #454138;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  margin-top: auto;
}
</style>
