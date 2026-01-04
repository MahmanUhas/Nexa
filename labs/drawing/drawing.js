import { showHint, showSolution } from '../engine/hintSystem.js';
import { addPoints } from '../engine/learningPoints.js';

export function initLabs(scene, house) {
  const tableGeo = new THREE.BoxGeometry(2, 0.5, 1);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0xaa44aa });
  const table = new THREE.Mesh(tableGeo, tableMat);
  table.position.set(house.position.x, 1, house.position.z - 3);
  scene.add(table);

  table.userData = { lesson: "Sketch a Tree", hintsUsed: 0, completed: false };

  table.interact = function() {
    if (!table.userData.completed) {
      let correct = Math.random() > 0.5;
      if (!correct && table.userData.hintsUsed < 5) {
        showHint("Remember proportions and shading!");
        table.userData.hintsUsed++;
      } else if (!correct) {
        showSolution("Tree: Trunk + Branches + Leaves shading applied.");
        table.userData.completed = true;
        addPoints(15);
      } else {
        showSolution("Tree sketched correctly!");
        table.userData.completed = true;
        addPoints(15);
      }
    }
  };
}