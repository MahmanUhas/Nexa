export function checkInteraction(player, object) {
  // Simple distance check
  const dist = player.position.distanceTo(object.position);
  if (dist < 2) {
    if (object.interact) {
      object.interact();
    }
  }
}