let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentTime = date.getSeconds();
  let currentMin = date.getMinutes();
  let currentHour = date.getHours();
  let currentMil = date.getMilliseconds();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}, ${currentTime}`;

  return formattedDate;
}

console.log(formatDate(currentTime));

function showTextInSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let h2 = document.querySelector("h2");
  h2.innerHTML(`${searchInput.value}`);
  console.log(searchInput.value);
}
let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", showTextInSearch);

function convertToFahrenheit() {
  let temp = document.querySelector("#temperature");
  // temp.innerHTML(`${temperature.value}`);
}
let temperatureFahrenheit = document.querySelector("#fahrenheit");
temperatureFahrenheit.addEventListener("click", convertToFahrenheit);

function convertToCelsius() {
  let tempCelsius = document.querySelector("#temperature-celsius");
  tempCelsius.innerHTML(`${temperatureCelsius.value}`);

  let temperatureCelsius = document.querySelector("#celsius");
  temperatureCelsius.addEventListener("click", convertToCelsius);
}
let dateElement = document.querySelector("h6");
dateElement.innerHTML = formatDate(currentTime);
// week 5
//
//
//

function showTextInSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;

  searchCity(searchInput.value);
}
function searchCity(city) {
  let units = "metric";
  let apiKey = "da85384d3034c8cbb61ebe4e68646925";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
function showTemperature(response) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let h4 = document.querySelector("#temperature");
  h4.innerHTML = temperature;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "da85384d3034c8cbb61ebe4e68646925";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector(".current-location-button");
currentLocationButton.addEventListener("click", getPosition);
