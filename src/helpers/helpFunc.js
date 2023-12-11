import React from "react";
import CloudyIcon from "../assets/images/weather/CloudyIcon";
import RainIcon from "../assets/images/weather/RainIcon";
import SmallRainIcon from "../assets/images/weather/SmallRainIcon";
import SunnyIcon from "../assets/images/weather/SunnyIcon";
import SnowIcon from "../assets/images/weather/WindIcon";

const calculateWindDirection = (degrees) => {
  if (typeof degrees !== "number") {
    return "Невірні дані про напрямок вітру";
  }

  const directions = [
    "Північ",
    "Північ-Північний Схід",
    "Північний Схід",
    "Схід-Північний Схід",
    "Схід",
    "Схід-Південний Схід",
    "Південний Схід",
    "Південний-Південний Схід",
    "Південний",
    "Південний-Південний Захід",
    "Південний Захід",
    "Захід-Південний Захід",
    "Захід",
    "Захід-Північний Захід",
    "Північний Захід",
    "Північ-Північний Захід",
  ];

  const index = Math.round((degrees % 360) / 22.5);
  const direction = directions[(index + 16) % 16];

  return direction;
};

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "clear sky":
    case "":
    case "few clouds":
      return <SunnyIcon />;
    case "scattered clouds":
    case "overcast clouds":
    case "broken clouds":
      return <CloudyIcon />;
    case "shower rain":
      return <RainIcon />;
    case "rain":
      return <SmallRainIcon />;
    case "snow":
      return <SnowIcon />;
    default:
      return null; // Возможно, следует предусмотреть базовую иконку для неизвестного типа погоды
  }
};

export { calculateWindDirection, getWeatherIcon };
