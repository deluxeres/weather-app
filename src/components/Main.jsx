import React, { useEffect, useState } from "react";
import calculateWindDirection from "../helpers/helpFunc";
import SunnyIcon from "../assets/images/weather/SunnyIcon";
import TempIcon from "../assets/images/weather/TempIcon";
import WindIcon from "../assets/images/weather/WindIcon";
import PrecipitationIcon from "../assets/images/weather/PrecipitationIcon";
import PressureIcon from "../assets/images/weather/PressureIcon";
import CloudyIcon from "../assets/images/weather/CloudyIcon";
import RainIcon from "../assets/images/weather/RainIcon";
import SmallRainIcon from "../assets/images/weather/SmallRainIcon";

function Main() {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const data = localStorage.getItem("weather");
    setWeatherData(JSON.parse(data));
  }, []);

  let formattedTime = "";
  if (weatherData && weatherData.timezone) {
    const currentDateUTC = new Date();
    const currentDateWithOffset = new Date(
      currentDateUTC.getTime() + weatherData.timezone * 1000
    );
    formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: "UTC",
    }).format(currentDateWithOffset);
  }

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "clear sky":
        return <SunnyIcon />;
        break;
      case "":
        return <SunnyIcon />;
        break;
      case "few clouds":
        return <SunnyIcon />;
        break;
      case "scattered clouds":
        return <CloudyIcon />;
        break;
      case "overcast clouds":
        return <CloudyIcon />;
        break;
      case "broken clouds":
        return <CloudyIcon />;
        break;
      case "shower rain":
        return <RainIcon />;
        break;
      case "rain":
        return <SmallRainIcon />;
        break;
      case "snow":
        return <CloudyIcon />;
        break;
    }
  };

  return (
    <>
      <div className="main">
        <div className="left-block">
          <div className="wrapper">
            <div className="wrapper-weather-block">
              <div className="temp">
                <span className="temp-text">
                  {Math.round(weatherData?.main?.temp) || "0"}°
                </span>
                <span className="temp-text__day">Сьогодні</span>
              </div>
              <div className="temp-icon">
                {weatherData &&
                  weatherData.weather &&
                  weatherData.weather[0] &&
                  getWeatherIcon(weatherData.weather[0].description)}
              </div>
            </div>
            <div className="temp-info">
              <span className="main-label">Час: {formattedTime}</span>
              <span className="main-label">Місто: {weatherData?.name}</span>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="worldIcon">
            <img
              src={require("../assets/images/weather/WorldIcon.png")}
              alt="weather"
            />
          </div>
          <div className="wrapper">
            <div className="weather-info">
              <div className="weather-info-block">
                <div className="weather-info-block__general">
                  <div className="icon">
                    <TempIcon />
                  </div>
                  <span className="weather-info-block__label">Температура</span>
                </div>
                <div className="weather-info-block__general">
                  <div className="icon">
                    <PressureIcon />
                  </div>
                  <span className="weather-info-block__label">Тиск</span>
                </div>
                <div className="weather-info-block__general">
                  <div className="icon">
                    <PrecipitationIcon />
                  </div>
                  <span className="weather-info-block__label">Вологість</span>
                </div>
                <div className="weather-info-block__general">
                  <div className="icon">
                    <WindIcon />
                  </div>
                  <span className="weather-info-block__label">Вітер</span>
                </div>
              </div>
              <div className="weather-info-block">
                <div className="weather-info-block__general">
                  <span className="weather-info-block__text">
                    {Math.round(weatherData?.main?.temp)}° - відчувається як{" "}
                    {Math.round(weatherData?.main?.feels_like)}°
                  </span>
                </div>
                <div className="weather-info-block__general">
                  <span className="weather-info-block__text">
                    {weatherData?.main?.pressure} мм ртутного столба -
                    {weatherData?.wind?.pressure > 750
                      ? "сильний"
                      : "нормальний"}
                  </span>
                </div>
                <div className="weather-info-block__general">
                  <span className="weather-info-block__text">
                    {weatherData?.main?.humidity}%
                  </span>
                </div>
                <div className="weather-info-block__general">
                  <span className="weather-info-block__text">
                    {weatherData?.wind?.speed} м/с{" "}
                    {calculateWindDirection(weatherData?.wind?.deg)} -{" "}
                    {weatherData?.wind?.speed > 3
                      ? "сильний вiтер"
                      : "легкий вiтер"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
