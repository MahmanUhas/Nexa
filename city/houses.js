export function spawnHouses(scene) {
  const houseGeometry = new THREE.BoxGeometry(3, 3, 3);
  const houseMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });

  const houses = [];
  for (let i = 0; i < 20; i++) { // spawn 20 random houses
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.set(
      (Math.random() - 0.5) * 100,
      1.5,
      (Math.random() - 0.5) * 100
    );
    scene.add(house);
    houses.push(house);
  }
  return houses;
}