<template>
  <div class="nier-card" @click="navToSkill">
    <div class="card-header">
      <div class="selector-bracket">■</div>
      <div class="title">{{ title }}</div>
      <div :class="{ 'in-use': isSelected }" class="status-indicator">
        {{ isSelected ? 'IN USE' : '' }}
      </div>
    </div>

    <div class="card-content">
      <div class="description">{{ description }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>

    <div class="corner-decoration top-left"></div>
    <div class="corner-decoration top-right"></div>
    <div class="corner-decoration bottom-left"></div>
    <div class="corner-decoration bottom-right"></div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  skill: String,
  description: String,
  subTitle: String,
  isSelected: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.nier-card {
  width: 400px;
  background: linear-gradient(135deg, #d4c5a0 0%, #c7b896 100%);
  border: 2px solid #8b7355;
  position: relative;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
  0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
}

.card-header {
  display: flex;
  align-items: center;
  background: rgba(24, 24, 24, 0.9);
  color: #d4c5a0;
  padding: 8px 12px;
  border-bottom: 1px solid #8b7355;
  position: relative;
}

.selector-bracket {
  font-size: 14px;
  margin-right: 8px;
  color: #d4c5a0;
  font-weight: bold;
}

.title {
  font-size: 16px;
  font-weight: bold;
  color: #d4c5a0;
  flex: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.status-indicator {
  font-size: 11px;
  padding: 2px 8px;
  background: rgba(139, 115, 85, 0.3);
  border: 1px solid #8b7355;
  color: #d4c5a0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 60px;
  text-align: center;
}

.status-indicator.in-use {
  background: rgba(212, 197, 160, 0.2);
  border-color: #d4c5a0;
  color: #fff;
}

.card-content {
  padding: 16px;
  background: rgba(212, 197, 160, 0.1);
}

.description {
  font-size: 14px;
  color: #2a2a2a;
  margin-bottom: 12px;
  line-height: 1.4;
}

.sub-title {
  font-size: 12px;
  color: #5a5a5a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-left: 3px solid #8b7355;
  padding-left: 8px;
}

.card-footer {
  background: rgba(24, 24, 24, 0.8);
  padding: 6px 12px;
  border-top: 1px solid #8b7355;
}

.control-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #d4c5a0;
}

.key-hint {
  background: rgba(212, 197, 160, 0.2);
  border: 1px solid #8b7355;
  padding: 2px 6px;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

.key-hint.esc {
  background: rgba(139, 115, 85, 0.3);
}

.action-text {
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Decorative corner elements */
.corner-decoration {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid #8b7355;
}

.corner-decoration.top-left {
  top: 4px;
  left: 4px;
  border-right: none;
  border-bottom: none;
}

.corner-decoration.top-right {
  top: 4px;
  right: 4px;
  border-left: none;
  border-bottom: none;
}

.corner-decoration.bottom-left {
  bottom: 4px;
  left: 4px;
  border-right: none;
  border-top: none;
}

.corner-decoration.bottom-right {
  bottom: 4px;
  right: 4px;
  border-left: none;
  border-top: none;
}

/* Hover effects */
.nier-card:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
  0 6px 12px rgba(0, 0, 0, 0.4);
}

.nier-card:hover .selector-bracket {
  color: #fff;
}

/* Background pattern overlay */
.nier-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
  radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  opacity: 0.3;
}
</style>