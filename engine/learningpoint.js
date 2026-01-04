let points = 0;

export function addPoints(amount) {
  points += amount;
  document.getElementById('pointsDisplay').innerText = `Learning Points: ${points}`;
}

export function getPoints() {
  return points;
}