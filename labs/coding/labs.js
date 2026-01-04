import { showHint, showSolution } from '../engine/hintSystem.js';
import { addPoints } from '../engine/learningPoints.js';

export function initLabs(scene, house) {
  const tableGeo = new THREE.BoxGeometry(2, 0.5, 1);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0x4444aa });
  const table = new THREE.Mesh(tableGeo, tableMat);
  table.position.set(house.position.x, 1, house.position.z);
  scene.add(table);

  // Lesson state
  table.userData = {
    lesson: "Variables",
    hintsUsed: 0,
    completed: false,
    primaryLanguage: "JavaScript",
    secondaryLanguage: null,
    code: ""
  };

  table.interact = function() {
    if (!table.userData.completed) {
      // Show message
      document.getElementById('lessonMessage').style.display = 'block';
      document.getElementById('lessonMessage').innerText = `Coding Lab: ${table.userData.lesson}`;

      // Simulate block coding
      let correct = Math.random() > 0.5; 
      if (!correct && table.userData.hintsUsed < 5) {
        showHint("Declare variables with let, const, or var!");
        table.userData.hintsUsed++;
      } else if (!correct) {
        showSolution("Solution: let x = 5; console.log(x);");
        table.userData.completed = true;
        addPoints(10);
      } else {
        showSolution("Well done! Variable declared correctly.");
        table.userData.completed = true;
        addPoints(10);
      }
    }
  };
}