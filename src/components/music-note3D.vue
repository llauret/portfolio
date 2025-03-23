<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const container = ref(null);
let scene, camera, renderer, model;
let mixer;
let animationId = null;

onMounted(() => {
  initThree();
  animate();

  window.addEventListener('resize', onWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
});

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcbc4a7);

  camera = new THREE.PerspectiveCamera(
      60,
      container.value.clientWidth / container.value.clientHeight,
      0.1,
      3000
  );
  camera.position.z = 0;
  camera.position.set(5, 0, 15);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  loadModel();
}


function loadModel() {
  const loader = new GLTFLoader();
  const scale = 0.7;

  loader.load(
      '/portfolio/note.glb',
      (gltf) => {
        model = gltf.scene;

        const container = new THREE.Object3D();
        scene.add(container);

        container.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;

        container.scale.set(scale, scale, scale);

        model = container;

        mixer = new THREE.AnimationMixer(gltf.scene);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('Error loading model', error);
      }
  );
}

function animate() {
  animationId = requestAnimationFrame(animate);

  if (mixer) mixer.update(0.01);
  if (model) model.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (camera && renderer && container.value) {
    camera.aspect = container.value.clientWidth / container.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  }
}
</script>

<style scoped>
.three-container {
  width: 30%;
  height: 100%;
  border: 1px solid #454138;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>