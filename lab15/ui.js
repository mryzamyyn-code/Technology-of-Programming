window.renderList = function(students, containerId) {
  containerId = containerId || "student-list";
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (students.length === 0) {
      container.textContent = "Список пуст";
      return;
  }

  students.forEach(function(s) {
      const li = document.createElement("li");
      li.textContent = s.name + ", " + s.age + " лет, группа: " + s.group;

      const btn = document.createElement("button");
      btn.textContent = "Удалить";
      btn.onclick = function() {
          window.deleteStudentById(s.id);
      }

      li.appendChild(btn);
      container.appendChild(li);
  });
}
