import { initCity } from './city/cityLayout.js';
import { spawnHouses } from './city/houses.js';
import { initNavigation } from './city/navigation.js';
import { initMentors } from './mentors/WALLIX.js';
import { initMentors as initMentorsB } from './mentors/BAYLEX.js';
import { initMentors as initMentorsC } from './mentors/OPTIBUILD.js';
import { initMentors as initMentorsD } from './mentors/PIXELINA.js';
import { initMentors as initMentorsE } from './mentors/BRUSHA.js';
import { initMentors as initMentorsF } from './mentors/FABRIX.js';
import { initLabs } from './labs/coding.js';
import { initLabs as roboticsLab } from './labs/robotics.js';
import { initLabs as civilLab } from './labs/civil.js';
import { initLabs as graphicLab } from './labs/graphic.js';
import { initLabs as drawingLab } from './labs/drawing.js';
import { initLabs as fashionLab } from './labs/fashion.js';
import { lessonEngine } from './engine/lessonFlow.js';

let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('nexaCanvas'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // City
  initCity(scene);

  // Houses
  const houses = spawnHouses(scene);

  // Mentors
  initMentors(scene);
  initMentorsB(scene);
  initMentorsC(scene);
  initMentorsD(scene);
  initMentorsE(scene);
  initMentorsF(scene);

  // Labs
  initLabs(scene, houses[0]);
  roboticsLab(scene, houses[0]);
  civilLab(scene, houses[0]);
  graphicLab(scene, houses[0]);
  drawingLab(scene, houses[0]);
  fashionLab(scene, houses[0]);

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