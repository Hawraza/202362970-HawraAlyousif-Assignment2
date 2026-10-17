// Contact form interaction
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
event.preventDefault();

formMessage.textContent = "Thank you! Your message has been received.";

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