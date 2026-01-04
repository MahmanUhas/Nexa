export function initMentors(scene) {
  const geometry = new THREE.SphereGeometry(1, 16, 16);
  const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
  const wallix = new THREE.Mesh(geometry, material);
  wallix.position.set(0, 1, 0);
  scene.add(wallix);

  // Placeholder animation
  let direction = 0.05;
  function animateMentor() {
    requestAnimationFrame(animateMentor);
    wallix.position.x += direction;
    if (wallix.position.x > 5 || wallix.position.x < -5) direction *= -1;
  }
  animateMentor();
}