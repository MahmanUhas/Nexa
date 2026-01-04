export function spawnHouses(scene) {
  const houses = [];
  for (let i = 0; i < 20; i++) { // 20 houses
    const houseGeo = new THREE.BoxGeometry(2, 2, 2);
    const houseMat = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff });
    const house = new THREE.Mesh(houseGeo, houseMat);

    // Random positions in city grid (5 districts)
    house.position.x = Math.floor(Math.random() * 90 - 45);
    house.position.z = Math.floor(Math.random() * 90 - 45);
    house.position.y = 1;

    scene.add(house);
    houses.push(house);

    // Each house gets a userData for labs and ownership
    house.userData = {
      owner: null, 
      labs: [], 
      canPurchase: true
    };
  }
  return houses;
}