<template>
  <div class="file-container">
    <div class="explorer-header">
      <span class="explorer-title">EXPLORATEUR</span>
    </div>

    <div class="folder-section">
      <div class="folder-header">
        <span class="folder-icon">▼</span>
        <span class="folder-name">PORTFOLIO</span>
      </div>

      <div class="file-tree">
        <!-- Fichiers -->
        <div class="file-item" @click="selectFile('Contexte')">
          <span class="file-indent"></span>
          <span class="file-icon">📝</span>
          <span class="item-name">Contexte.md</span>
        </div>
        <div class="file-item" @click="selectFile('C1')">
          <span class="file-indent"></span>
          <span class="file-icon">📝</span>
          <span class="item-name">Compétence1.md</span>
        </div>
        <div class="file-item" @click="selectFile('C2')">
          <span class="file-indent"></span>
          <span class="file-icon">📝</span>
          <span class="item-name">Compétence2.md</span>
        </div>
        <div class="file-item" @click="selectFile('C6')">
          <span class="file-indent"></span>
          <span class="file-icon">📝</span>
          <span class="item-name">Compétence6.md</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const selectFile = (file) => {
  router.push(`/but3/${file}`);
  console.log(file);
}
</script>

<style scoped>
.file-container {
  width: 240px;
  height: 100vh;
  background-color: #252526;
  color: #cccccc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  border-right: 1px solid #3c3c3c;
  margin-right: 1em;
}

.explorer-header {
  padding: 8px 12px;
  background-color: #2d2d30;
  border-bottom: 1px solid #3c3c3c;
}

.explorer-title {
  font-size: 11px;
  font-weight: 600;
  color: #cccccc;
  letter-spacing: 0.5px;
}

.folder-section {
  padding: 4px 0;
}

.folder-header {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
}

.folder-header:hover {
  background-color: #2a2d2e;
}

.folder-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  font-size: 10px;
  color: #cccccc;
}

.folder-name {
  font-size: 11px;
  font-weight: 600;
  color: #cccccc;
  letter-spacing: 0.5px;
}

.file-tree {
  margin-left: 8px;
}

.folder-item,
.file-item {
  display: flex;
  align-items: center;
  padding: 2px 8px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
}

.folder-item:hover,
.file-item:hover {
  background-color: #2a2d2e;
}

.file-item.active {
  background-color: #094771;
  color: #ffffff;
}

.file-indent {
  width: 12px;
}

.folder-icon-img,
.file-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-name {
  font-size: 13px;
  color: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Scrollbar styling */
.file-container::-webkit-scrollbar {
  width: 10px;
}

.file-container::-webkit-scrollbar-track {
  background: #252526;
}

.file-container::-webkit-scrollbar-thumb {
  background: #424242;
  border-radius: 5px;
}

.file-container::-webkit-scrollbar-thumb:hover {
  background: #4f4f4f;
}
</style>