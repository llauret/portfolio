<template>
  <div class="caflexparici">
    <div>
      <h1>LAURET Lucas</h1>

      <p>
        Développeur Full Stack actuellement en Alternance chez <a href="https://amphenol-fci-besancon.com/"
                                                                  target="_blank">Amphenol
        FCI</a>
        à
        Besançon.
      </p>
    </div>

    <div class="box">
      3
      <mark>XP</mark>
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>

.caflexparici {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
}

.caflexparici > div {
  margin: 0 1rem;
}

.box {
  position: relative;
  border: 2px solid #454138;
  padding: 1rem;
  width: 77px;
  height: 77px;
  text-align: center;
  font-size: 1.5rem;
  cursor: grab;
  user-select: none;
}

.box:hover {
  background-color: #454138;
  color: white;
}

.box mark {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1rem;
}
</style>