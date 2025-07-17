// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Insert the current year into the first paragraph of the footer
document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear}`;

// Insert the last modified date into the second paragraph of the footer
document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed, unit) {
  if ((unit === "metric" && temp <= 10 && windSpeed > 4.8) ||
      (unit === "imperial" && temp <= 50 && windSpeed > 3)) {
    return unit === "metric"
      ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
      : 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
  }
  return "N/A";
}

console.log(calculateWindChill(5, 10, "metric"));    // Valid metric input
console.log(calculateWindChill(45, 5, "imperial"));  // Valid imperial input
console.log(calculateWindChill(12, 2, "metric"));    // Invalid → "N/A"