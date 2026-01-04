export function initMentors(scene) {
  const bodyGeo = new THREE.BoxGeometry(1, 2, 0.5);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x44ff44 });
  const brusha = new THREE.Mesh(bodyGeo, bodyMat);
  brusha.position.set(0, 1, 15);
  scene.add(brusha);

  brusha.userData = { name: "BRUSHA", lesson: null };

  // Animation: slight bounce
  let up = true;
  function animate() {
    requestAnimationFrame(animate);
    brusha.position.y += up ? 0.01 : -0.01;
    if (brusha.position.y > 1.2 || brusha.position.y < 0.8) up = !up;
  }
  animate();
}