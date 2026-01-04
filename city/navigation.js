export function initNavigation(camera, domElement) {
  const controls = new THREE.OrbitControls(camera, domElement);
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.maxPolarAngle = Math.PI / 2.2;
  controls.minDistance = 2;
  controls.maxDistance = 50;
  return controls;
}