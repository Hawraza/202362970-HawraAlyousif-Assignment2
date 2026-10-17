// Contact form interaction
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {
formMessage.textContent = "Please fill in all fields.";
formMessage.className = "error-message";
return;
}

if (!email.includes("@") || !email.includes(".")) {
formMessage.textContent = "Please enter a valid email address.";
formMessage.className = "error-message";
return;
}

formMessage.textContent = "Thank you! Your message has been received.";
formMessage.className = "success-message";
contactForm.reset();
});

// Project details interaction
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function (button) {
button.addEventListener("click", function () {
const details = button.nextElementSibling;

details.classList.toggle("show");

if (details.classList.contains("show")) {
button.textContent = "Hide Details";
} else {
button.textContent = "Show Details";
}
});
});