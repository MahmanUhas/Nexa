export function startLesson(mentor, lessonName) {
  // Assign current lesson to mentor
  mentor.userData.lesson = lessonName;

  const lessonMessage = document.getElementById('lessonMessage');
  lessonMessage.style.display = 'block';
  lessonMessage.innerText = `${mentor.userData.name} is teaching: ${lessonName}`;
  setTimeout(() => { lessonMessage.style.display = 'none'; }, 5000);
}

export function completeLesson(mentor) {
  mentor.userData.lesson = null;
}