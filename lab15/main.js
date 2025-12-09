
window.students = window.loadStudents();
window.studentMap = {};
students.forEach(s => studentMap[s.id] = s);


window.renderList(students, "student-list");


window.findStudentByName = function(name) {
    return window.filterByName(students, name);
}

window.deleteStudentById = function(id) {
    students = students.filter(s => s.id !== id);
    delete studentMap[id];
    window.saveStudents(students);
    window.renderList(students, "student-list");
    window.renderSearchResults([]);
}

window.renderSearchResults = function(list) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";

    if (!list || list.length === 0) {
        container.textContent = "Ничего не найдено";
        return;
    }

    list.forEach(function(s) {
        const li = document.createElement("li");
        li.textContent = s.name + ", " + s.age + " лет, группа: " + s.group;

        const btn = document.createElement("button");
        btn.textContent = "Удалить";
        btn.onclick = function() { window.deleteStudentById(s.id); }

        li.appendChild(btn);
        container.appendChild(li);
    });
}




document.getElementById("add-btn").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const group = document.getElementById("group").value.trim();

    if (!name || !age || !group) return;

    const student = { id: window.generateId(), name, age, group };
    students.push(student);
    studentMap[student.id] = student;

    window.saveStudents(students);
    window.renderList(students, "student-list");

    document.getElementById("student-form").reset();
});


document.getElementById("search-btn").addEventListener("click", function() {
    const keyword = document.getElementById("search").value.trim();
    const result = window.findStudentByName(keyword);
    window.renderSearchResults(result);
});
