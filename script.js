/*
  IMPORTANT: Edit the two settings below before publishing.
  WhatsApp number must include country code, digits only (Kenya example: 2547XXXXXXXX).
*/
const BUSINESS_WHATSAPP = "254798796185"; // REPLACE with your real WhatsApp number
const BUSINESS_EMAIL = "josephnjorogekinyanjui4@gmail.com"; // REPLACE with your real business email

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappDisplay = document.getElementById("whatsappDisplay");
const emailDisplay = document.getElementById("emailDisplay");
if (BUSINESS_WHATSAPP !== "254700000000") {
  whatsappDisplay.textContent = "+" + BUSINESS_WHATSAPP;
  whatsappDisplay.href = `https://wa.me/${BUSINESS_WHATSAPP}`;
}
if (BUSINESS_EMAIL !== "hello@example.com") {
  emailDisplay.textContent = BUSINESS_EMAIL;
  emailDisplay.href = `mailto:${BUSINESS_EMAIL}`;
}

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.getElementById("service");
    select.value = link.dataset.service;
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  if (BUSINESS_WHATSAPP === "254700000000") {
    alert("Please edit BUSINESS_WHATSAPP in script.js and add your real WhatsApp number before using the enquiry form.");
    return;
  }
  const data = new FormData(event.currentTarget);
  const message = [
    "Hello Digital Growth Studio, I'd like to make an enquiry.",
    "",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email") || "Not provided"}`,
    `Service: ${data.get("service")}`,
    `Project details: ${data.get("message")}`
  ].join("\n");
  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
