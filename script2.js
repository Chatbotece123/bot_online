document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");

    loginForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Perform email validation using regex
        const email = emailInput.value.trim();
        if (email === '') {
            alert("Please enter an email address.");
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            // Don't proceed further if email is invalid
            return;
        }
        else{
        console.log("Navigating to next page...");
        window.location.href = "index.html";
        }

        // If email is valid, perform additional logic or navigation
        
    });

    // Function to validate email format using regex
    function isValidEmail(email) {
        const emailRegex = /^62\d{4}@student\.nitandhra\.ac\.in$/i;
        return emailRegex.test(email);
    }
});
