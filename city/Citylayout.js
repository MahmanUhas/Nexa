export function initCity(scene) {
  // Ground
  const groundGeometry = new THREE.PlaneGeometry(200, 200);
  const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI/2;
  scene.add(ground);

  // Simple light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(10, 20, 10);
  scene.add(directionalLight);

  // District markers (just cubes for reference)
  const districtColors = [0x4444ff, 0x44ff44, 0xff4444, 0xffff44, 0xff44ff];
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 0.5, 20);
    const material = new THREE.MeshStandardMaterial({ color: districtColors[i] });
    const district = new THREE.Mesh(geometry, material);
    district.position.set((i-2)*25, 0.25, 0);
    scene.add(district);
  }
}
