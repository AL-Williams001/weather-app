import "./style.css";

import getCurrentWeather from "./src/utils/getCurrentWeather";
import appendWeather from "./src/utils/appendWeather";

getCurrentWeather("Manila").then((data) => appendWeather(data));
