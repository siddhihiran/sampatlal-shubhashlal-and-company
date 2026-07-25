/* ==========================================
   Sampatlal Shubhashlal And Company
   Main JavaScript
========================================== */

"use strict";

/* ==========================================
   DOM Elements
========================================== */

const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("language");
const searchInput = document.getElementById("searchInput");

/* ==========================================
   Dark Mode
========================================== */

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});

/* ==========================================
   Load Saved Theme
========================================== */

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {

            themeToggle.textContent = "☀️";

        }

    }

});

/* ==========================================
   Language Selector (Temporary)
========================================== */

languageSelect?.addEventListener("change", () => {

    const lang = languageSelect.value;

    console.log("Selected Language:", lang);

});

/* ==========================================
   Search Box (Temporary)
========================================== */

searchInput?.addEventListener("input", () => {

    const keyword = searchInput.value.trim();

    console.log("Searching:", keyword);

});

/* ==========================================
   Page Loaded
========================================== */

console.log("Website Loaded Successfully 🚀");
