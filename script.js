
// Display a welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to Atchaya's Portfolio!");
});

// Show a message when a navigation link is clicked
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});
