export function initCity(scene) {
  // Ground plane
  const groundGeo = new THREE.PlaneGeometry(100, 100);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);

  const directional = new THREE.DirectionalLight(0xffffff, 0.6);
  directional.position.set(10, 20, 10);
  scene.add(directional);

  // Optional: Add simple city landmarks
  const landmarkGeo = new THREE.BoxGeometry(3, 10, 3);
  const landmarkMat = new THREE.MeshStandardMaterial({ color: 0x5555ff });
  const landmark = new THREE.Mesh(landmarkGeo, landmarkMat);
  landmark.position.set(0, 5, 0);
  scene.add(landmark);
}
