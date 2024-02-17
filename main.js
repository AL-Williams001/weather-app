import "./style.css";

import getCurrentWeather from "./src/utils/getCurrentWeather";
import appendWeather from "./src/utils/appendWeather";

const formWeather = document.getElementById("form-weather");

const searchWeatherInput = document.getElementById("search-weather-input");

formWeather.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  console.log(input);

  getCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});
