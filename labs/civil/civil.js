import { showHint, showSolution } from '../engine/hintSystem.js';
import { addPoints } from '../engine/learningPoints.js';

export function initLabs(scene, house) {
  const tableGeo = new THREE.BoxGeometry(2, 0.5, 1);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0x44aa44 });
  const table = new THREE.Mesh(tableGeo, tableMat);
  table.position.set(house.position.x - 3, 1, house.position.z);
  scene.add(table);

  table.userData = { lesson: "Build a Beam", hintsUsed: 0, completed: false };

  table.interact = function() {
    if (!table.userData.completed) {
      let correct = Math.random() > 0.5;
      if (!correct && table.userData.hintsUsed < 5) {
        showHint("Check the load distribution on the beam.");
        table.userData.hintsUsed++;
      } else if (!correct) {
        showSolution("Beam: Use steel + concrete combination.");
        table.userData.completed = true;
        addPoints(20);
      } else {
        showSolution("Beam constructed correctly!");
        table.userData.completed = true;
        addPoints(20);
      }
    }
  };
}