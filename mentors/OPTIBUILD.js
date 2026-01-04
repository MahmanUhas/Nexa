export function initMentors(scene) {
  const truckGeo = new THREE.BoxGeometry(2, 1, 1);
  const truckMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
  const optibuild = new THREE.Mesh(truckGeo, truckMat);
  optibuild.position.set(-10, 0.5, 10);
  scene.add(optibuild);

  optibuild.userData = { name: "OPTIBUILD", lesson: null };

  // Transform to walking robot
  const robotGeo = new THREE.BoxGeometry(1, 3, 1);
  const robotMat = new THREE.MeshStandardMaterial({ color: 0x7777ff });
  const robot = new THREE.Mesh(robotGeo, robotMat);
  robot.position.set(0, 1.5, 0);
  optibuild.add(robot);

  let transform = false;
  function animate() {
    requestAnimationFrame(animate);
    if (!transform && Math.random() < 0.001) {
      transform = true;
      robot.scale.y = 1;
      optibuild.scale.set(0.5, 0.5, 0.5);
    }
  }
  animate();
}