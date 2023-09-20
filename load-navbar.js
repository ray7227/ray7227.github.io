// load-navbar.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the navigation bar HTML using an HTTP request
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            // Insert the navigation bar HTML into the container
            document.getElementById("navbar-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading navigation bar:", error));
});
