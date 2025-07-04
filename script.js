document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("registration-form");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const isValid = true;
        const messages = [];

        const usernameInput = document.getElementById("username");
        const username = usernameInput.value.trim();

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must be a valid email address.");
        }

        const passwordInput = document.getElementById("password");
        const password = passwordInput.value.trim();

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        const feedbackDiv = document.getElementById("form-feedback");
        feedbackDiv.style.display = "block";

        if (isValid === true) {
            feedbackDiv.innerHTML = "<p>Registration successful!</p>";
            feedbackDiv.style.color = "#28a745";
        } else if (isValid === false) {
            feedbackDiv.innerHTML = "<p>" + messages.join("<br>") + "</p>";
            feedbackDiv.style.color = "#dc3545";
        } else {
            feedbackDiv.innerHTML = "<p>Form submission failed.</p>";
            feedbackDiv.style.color = "#dc3545";
        }

        form.submit();
    });
});
