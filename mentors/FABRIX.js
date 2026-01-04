export function initMentors(scene) {
  const bodyGeo = new THREE.BoxGeometry(1, 2, 1);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffaa44 });
  const fabrix = new THREE.Mesh(bodyGeo, bodyMat);
  fabrix.position.set(0, 1, -15);
  scene.add(fabrix);

  fabrix.userData = { name: "FABRIX", lesson: null };

  // Animation: rotate slowly
  function animate() {
    requestAnimationFrame(animate);
    fabrix.rotation.y += 0.005;
  }
  animate();
}