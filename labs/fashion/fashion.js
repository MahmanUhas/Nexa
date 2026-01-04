import { showHint, showSolution } from '../engine/hintSystem.js';
import { addPoints } from '../engine/learningPoints.js';

export function initLabs(scene, house) {
  const tableGeo = new THREE.BoxGeometry(2, 0.5, 1);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0xffaa44 });
  const table = new THREE.Mesh(tableGeo, tableMat);
  table.position.set(house.position.x + 3, 1, house.position.z + 3);
  scene.add(table);

  table.userData = { lesson: "Design a Dress", hintsUsed: 0, completed: false };

  table.interact = function() {
    if (!table.userData.completed) {
      let correct = Math.random() > 0.5;
      if (!correct && table.userData.hintsUsed < 5) {
        showHint("Focus on fabric flow and color scheme!");
        table.userData.hintsUsed++;
      } else if (!correct) {
        showSolution("Dress: Silk + Ruffles + Gradient colors applied.");
        table.userData.completed = true;
        addPoints(20);
      } else {
        showSolution("Dress designed correctly!");
        table.userData.completed = true;
        addPoints(20);
      }
    }
  };
}