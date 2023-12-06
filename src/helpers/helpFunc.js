function calculateWindDirection(degrees) {
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
  const direction = directions[(index + 1) % 16];

  return `${direction}`;
}

export default calculateWindDirection;
