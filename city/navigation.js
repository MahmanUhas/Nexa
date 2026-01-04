import { PointerLockControls } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/controls/PointerLockControls.js';

let controls;

export function initNavigation(camera, domElement) {
  controls = new PointerLockControls(camera, domElement);
  domElement.addEventListener('click', () => {
    controls.lock();
  });

  const velocity = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const moveForward = false;
  const moveBackward = false;
  const moveLeft = false;
  const moveRight = false;

  const onKeyDown = function(event) {
    switch(event.code) {
      case 'ArrowUp':
      case 'KeyW': moveForward = true; break;
      case 'ArrowLeft':
      case 'KeyA': moveLeft = true; break;
      case 'ArrowDown':
      case 'KeyS': moveBackward = true; break;
      case 'ArrowRight':
      case 'KeyD': moveRight = true; break;
    }
  };

  const onKeyUp = function(event) {
    switch(event.code) {
      case 'ArrowUp':
      case 'KeyW': moveForward = false; break;
      case 'ArrowLeft':
      case 'KeyA': moveLeft = false; break;
      case 'ArrowDown':
      case 'KeyS': moveBackward = false; break;
      case 'ArrowRight':
      case 'KeyD': moveRight = false; break;
    }
  };

  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  function move() {
    requestAnimationFrame(move);
    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();
    controls.moveRight(direction.x * 0.1);
    controls.moveForward(direction.z * 0.1);
  }
  move();
}