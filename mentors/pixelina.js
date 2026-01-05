export function initMentors(scene) {
  const bodyGeo = new THREE.CylinderGeometry(0.5, 0.5, 2, 16);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xff55ff });
  const pixelina = new THREE.Mesh(bodyGeo, bodyMat);
  pixelina.position.set(10, 1, 10);
  scene.add(pixelina);

  pixelina.userData = { name: "PIXELINA", lesson: null };

  // Animation: rotate for effect
  function animate() {
    requestAnimationFrame(animate);
    pixelina.rotation.y += 0.01;
  }
  animate();
}
