export function initMentors(scene) {
  const bodyGeo = new THREE.SphereGeometry(1, 32, 32);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const baylex = new THREE.Mesh(bodyGeo, bodyMat);
  baylex.position.set(10, 1, -10);
  scene.add(baylex);

  baylex.userData = { name: "BAY-LEX", lesson: null };

  // Belly screen
  const screenGeo = new THREE.PlaneGeometry(1.5, 0.75);
  const screenMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.7 });
  const screen = new THREE.Mesh(screenGeo, screenMat);
  screen.position.set(0, 0, 1.1);
  baylex.add(screen);

  // Animation: floating slightly
  let up = true;
  function animate() {
    requestAnimationFrame(animate);
    baylex.position.y += up ? 0.01 : -0.01;
    if (baylex.position.y > 1.2 || baylex.position.y < 0.8) up = !up;
  }
  animate();
}
