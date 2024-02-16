export default async function getCurrentWeather(city) {
  const API_KEY = "6278b88a153e5140e117e9ab226a3b67";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();
  return weatherData;
}
