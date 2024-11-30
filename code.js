const teachers = [
    { id: 1, name: "Mr. Smith", department: "Mathematics" },
    { id: 2, name: "Ms. Johnson", department: "Physics" },
    { id: 3, name: "Dr. Brown", department: "Chemistry" },
];

const appointments = [];

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Logged in successfully!");
    document.getElementById("login-container").style.display = "none";
    document.getElementById("teacher-search-container").style.display = "block";
    displayTeachers();
});

document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registered successfully!");
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
});

document.getElementById("show-register").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
});

function displayTeachers() {
    const teacherList = document.getElementById("teacher-list");
    teacherList.innerHTML = "";
    teachers.forEach(teacher => {
        const li = document.createElement("li");
        li.textContent = teacher.name + " - " + teacher.department;
        li.onclick = function() {
            selectTeacher(teacher);
        };
        teacherList.appendChild(li);
    });
}

function filterTeachers() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredTeachers = teachers.filter(teacher => teacher.name.toLowerCase().includes(searchTerm));
    const teacherList = document.getElementById("teacher-list");
    teacherList.innerHTML = "";
    filteredTeachers.forEach(teacher => {
        const li = document.createElement("li");
        li.textContent = teacher.name + " - " + teacher.department;
        li.onclick = function() {
            selectTeacher(teacher);
        };
        teacherList.appendChild(li);
    });
}

function selectTeacher(teacher) {
    document.getElementById("teacher-search-container").style.display = "none";
    document.getElementById("appointment-form-container").style.display = "block";
    const appointmentForm = document.getElementById("appointment-form");
    appointmentForm.onsubmit = function(e) {
        e.preventDefault();
        bookAppointment(teacher);
    };
}

function bookAppointment(teacher) {
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;
    const message = document.getElementById("appointment-message").value;

    appointments.push({ teacher, date, time, message });
    alert("Appointment booked with " + teacher.name);
    document.getElementById("appointment-form-container").style.display = "none";
    document.getElementById("appointments-container").style.display = "block";
    displayAppointments();
}

function displayAppointments() {
    const appointmentsList = document.getElementById("appointments-list");
    appointmentsList.innerHTML = "";
    appointments.forEach(app => {
        const li = document.createElement("li");
        li.textContent = `Appointment with ${app.teacher.name} on ${app.date} at ${app.time}. Message: ${app.message}`;
        appointmentsList.appendChild(li);
    });
}
