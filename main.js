import { initCity } from './city/cityLayout.js';
import { spawnHouses } from './city/houses.js';
import { assignDistrict } from './city/districts.js';
import { initNavigation } from './city/navigation.js';

import { initMentors as WALLIX } from './mentors/WALLIX.js';
import { initMentors as BAYLEX } from './mentors/BAYLEX.js';
import { initMentors as OPTIBUILD } from './mentors/OPTIBUILD.js';
import { initMentors as PIXELINA } from './mentors/PIXELINA.js';
import { initMentors as BRUSHA } from './mentors/BRUSHA.js';
import { initMentors as FABRIX } from './mentors/FABRIX.js';

import { initLabs as CodingLab } from './labs/coding.js';
import { initLabs as RoboticsLab } from './labs/robotics.js';
import { initLabs as CivilLab } from './labs/civil.js';
import { initLabs as GraphicLab } from './labs/graphic.js';
import { initLabs as DrawingLab } from './labs/drawing.js';
import { initLabs as FashionLab } from './labs/fashion.js';

import { checkInteraction } from './engine/interactionEngine.js';

/* ---------- SCENE SETUP ---------- */
const canvas = document.getElementById('nexaCanvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0f1a);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(8, 8, 12);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

/* ---------- CITY ---------- */
initCity(scene);

/* ---------- NAVIGATION ---------- */
const controls = initNavigation(camera, renderer.domElement);

/* ---------- HOUSES ---------- */
const houses = spawnHouses(scene);
houses.forEach(assignDistrict);

/* ---------- LABS (attach to first house for now) ---------- */
const mainHouse = houses[0];
CodingLab(scene, mainHouse);
RoboticsLab(scene, mainHouse);
CivilLab(scene, mainHouse);
GraphicLab(scene, mainHouse);
DrawingLab(scene, mainHouse);
FashionLab(scene, mainHouse);

/* ---------- MENTORS ---------- */
WALLIX(scene);
BAYLEX(scene);
OPTIBUILD(scene);
PIXELINA(scene);
BRUSHA(scene);
FABRIX(scene);

/* ---------- PLAYER (camera proxy) ---------- */
const player = camera;

/* ---------- INTERACTION (click) ---------- */
window.addEventListener('click', () => {
  scene.traverse(obj => {
    if (obj.interact) {
      checkInteraction(player, obj);
    }
  });
});

/* ---------- RESIZE ---------- */
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ---------- RENDER LOOP ---------- */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();