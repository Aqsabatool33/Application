let weather = prompt("Enter current weather condition (Sunny, Rainy, Cloudy,Not available):");

weather = weather.toLowerCase();

let result = document.getElementById("weather-result");
let body = document.body;

if (weather === "sunny") {
  result.textContent = "A sunny day.";
  body.style.backgroundImage = "url('sun.jpg')";
} else if (weather === "rainy") {
  result.textContent = "Today is a rainy day.";
  body.style.backgroundImage = "url('rain.jpg')";
} else if (weather === "cloudy") {
  result.textContent = "It's cloudy outside.";
  body.style.backgroundImage = "url('cloude.jpg')";
} else {
  result.textContent = "Sorry, this weather type is not available.";
  body.style.backgroundImage = "url('nott.jpg')";
}