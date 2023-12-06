function Urls() {
  const getWeatherWithApi = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua,uk&units=metric&appid=9a40b8e72163e8ac075e05be79b8f39d`;

  return {
    getWeatherWithApi,
  };
}

export default Urls;
