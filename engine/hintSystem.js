export function showHint(message) {
  const lessonMessage = document.getElementById('lessonMessage');
  lessonMessage.style.display = 'block';
  lessonMessage.innerText = `Hint: ${message}`;
  setTimeout(() => { lessonMessage.style.display = 'none'; }, 3000);
}

export function showSolution(message) {
  const lessonMessage = document.getElementById('lessonMessage');
  lessonMessage.style.display = 'block';
  lessonMessage.innerText = `Solution: ${message}`;
  setTimeout(() => { lessonMessage.style.display = 'none'; }, 5000);
}