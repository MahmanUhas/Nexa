import { showHint, showSolution } from '../engine/hintSystem.js';
import { addPoints } from '../engine/learningPoints.js';

export function initLabs(scene, house) {
  const tableGeo = new THREE.BoxGeometry(2, 0.5, 1);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0x4444ff });
  const table = new THREE.Mesh(tableGeo, tableMat);
  table.position.set(house.position.x, 1, house.position.z + 3);
  scene.add(table);

  table.userData = { lesson: "Design Logo", hintsUsed: 0, completed: false };

  table.interact = function() {
    if (!table.userData.completed) {
      let correct = Math.random() > 0.5;
      if (!correct && table.userData.hintsUsed < 5) {
        showHint("Use main color palette and symmetry tools!");
        table.userData.hintsUsed++;
      } else if (!correct) {
        showSolution("Logo design: Triangle + Circle + Gradient!");
        table.userData.completed = true;
        addPoints(15);
      } else {
        showSolution("Logo designed correctly!");
        table.userData.completed = true;
        addPoints(15);
      }
    }
  };
}