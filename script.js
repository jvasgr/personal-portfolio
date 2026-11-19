// Get the language button, mobile menu button and navigation menu.
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// The website starts in English.
let currentLanguage = "en";

// Switch between English and Greek when the language button is clicked.
languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "el" : "en";

    // Update the language attribute of the HTML document.
    document.documentElement.lang = currentLanguage;

    // Find every element that has both English and Greek text.
    document.querySelectorAll("[data-en][data-el]").forEach((element) => {
        element.textContent = element.dataset[currentLanguage];
    });

    // Change the button label to show the other available language.
    languageToggle.textContent = currentLanguage === "en" ? "EL" : "EN";
});

// Open or close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Close the mobile menu after a navigation link is selected.
document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// Display the current year automatically in the footer.
document.getElementById("year").textContent = new Date().getFullYear();
