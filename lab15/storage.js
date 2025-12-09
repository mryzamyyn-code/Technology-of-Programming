
window.loadStudents = function() {
  return JSON.parse(localStorage.getItem("students") || "[]");
}

window.saveStudents = function(students) {
  localStorage.setItem("students", JSON.stringify(students));
}
