function calculateWindChill(temperature, windspeed) {
    return (35.74 + (0.6215 * temperature) - 35.75 * (windspeed ** 0.16)) + (0.4275 * temperature * (windspeed ** 0.16));
}

// Current weather conditions
const temperature = 60;
const conditions = "Partly Cloudy";
const windspeed = 7;

// Select the DOM elements for output
const currentTemperature = document.querySelector("#current-temp");
const currentConditions = document.querySelector("#current-condition");
const currentWindspeed = document.querySelector("#wind-speed");
const currentWindChill = document.querySelector("#wind-chill");

// Set the text content of the elements
currentTemperature.textContent = temperature + " °F";
currentConditions.textContent = conditions;
currentWindspeed.textContent = windspeed + " mph";

if (temperature <= 50 && windspeed > 3) {
    currentWindChill.textContent = calculateWindChill(temperature, windspeed).toFixed(1) + " °F"; 
} else {
    currentWindChill.textContent = "N/A";
}