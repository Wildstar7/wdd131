// Select the DOM elements for output
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Use the Date object to get the current year
const today = new Date();
currentYear.textContent = today.getFullYear();

// Get the document's last modified date
lastModified.textContent = `Last Updated: ${document.lastModified}`;