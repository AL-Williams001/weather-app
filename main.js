import "./style.css";

import getCurrentWeather from "./src/utils/getCurrentWeather";
import appendWeather from "./src/utils/appendWeather";

const searchWeatherBtn = document.getElementById("search-weather-btn");
const searchWeatherInput = document.getElementById("search-weather-input");

searchWeatherBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  console.log(input);

  getCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});
