const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const feedbackDiv = document.getElementById("form-feedback");

const usernameInput = document.getElementById("username");
const usernameValue = usernameInput.value.trim();

if (usernameValue.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
};

const emailInput = document.getElementById("email");
const emailValue = emailInput.value.trim();

const passwordInput = document.getElementById("password");
const passwordValue = passwordInput.value.trim();

const isValid = true;
const messages = [];

