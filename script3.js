document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const chatContainer = document.getElementById("chat-container");
    const anotherPageLink = document.getElementById("another-page-link");
    const loginButton = document.getElementById("login-button");
    const userInput = document.getElementById("user-input");

    // Show login button when the user starts typing in the text box
    userInput.addEventListener("input", function(event) {
        if (userInput.value.trim() !== "") {
            loginButton.style.display = "block";
        } else {
            loginButton.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform email validation (you can add more robust validation if needed)
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Hide the login form and show the chat container
        loginForm.style.display = "none";
        chatContainer.style.display = "block";

        // Show the link to another page
        anotherPageLink.style.display = "block";

        // Optionally, you can perform additional login logic here
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to handle navigation to another page
    function navigateToAnotherPage() {
        window.location.href = "index.html"; // Replace "another-page.html" with the URL of the destination page
    }

    // Listen for the Enter key press
    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            navigateToAnotherPage();
        }
    });
});
