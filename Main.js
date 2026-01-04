import { initCity } from './city/cityLayout.js';
import { spawnHouses } from './city/houses.js';
import { initNavigation } from './city/navigation.js';
import { initMentors } from './mentors/WALLIX.js'; // Initialize mentors as example

let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('nexaCanvas'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // City and houses
  initCity(scene);
  spawnHouses(scene);

  // Mentors placeholder
  initMentors(scene);

  // Navigation
  initNavigation(camera, renderer.domElement);

  camera.position.set(0, 2, 5);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
