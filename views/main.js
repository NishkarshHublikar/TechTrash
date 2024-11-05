// main.js

// Redirect to dashboard on form submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
    window.location.href = "dashboard.html"; // Redirect to dashboard
});

document.getElementById("signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
    window.location.href = "dashboard.html"; // Redirect to dashboard
});
