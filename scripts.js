// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const coursesLink = document.getElementById("courses-link");
    const dropdownCourses = document.getElementById("dropdown-courses");

    coursesLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior
        dropdownCourses.classList.toggle("show"); // Toggle the 'show' class
    });
});
