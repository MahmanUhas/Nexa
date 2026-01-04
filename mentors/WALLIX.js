export function initMentors(scene) {
  // WALLIX: robot-like, happy personality, shows hologram code
  const bodyGeo = new THREE.BoxGeometry(1, 1, 1);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  const wallix = new THREE.Mesh(bodyGeo, bodyMat);
  wallix.position.set(-10, 0.5, -10);
  scene.add(wallix);

  wallix.userData = { name: "WALLIX", lesson: null };

  // Hologram box
  const holoGeo = new THREE.PlaneGeometry(2, 1);
  const holoMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7 });
  const hologram = new THREE.Mesh(holoGeo, holoMat);
  hologram.position.set(0, 1.5, 0);
  wallix.add(hologram);

  // Animation
  let direction = 0.05;
  function animate() {
    requestAnimationFrame(animate);
    wallix.position.x += direction;
    if (wallix.position.x > -5 || wallix.position.x < -15) direction *= -1;
    wallix.rotation.y += 0.005;
  }
  animate();
}