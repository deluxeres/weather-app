import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo";
import Theme from "../assets/images/theme";
import Urls from "../helpers/urls";

function Header({ setTheme }) {
  const [theme, setThemeLocal] = useState(false);
  const [search, setSearch] = useState("Киев");

  const toggleSearch = () => {
    const weatherApiUrl = Urls().getWeatherWithApi(search);
    fetch(weatherApiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Місто не знайдено");
        }
      })
      .then((result) => {
        localStorage.setItem("weather", JSON.stringify(result));
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  const toggleTheme = () => {
    const newTheme = !theme;
    setThemeLocal(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeLocal(savedTheme === "dark");
    }
  }, []);

  return (
    <>
      <div className="header">
        <div className="logo">
          <Logo />
          <span className="logo__text">REACT WEATHER</span>
        </div>
        <div className="navigate">
          <div
            style={{
              height: 35,
              cursor: "pointer",
              transform: theme ? "scale(-1, 1)" : "none",
            }}
            onClick={toggleTheme}
          >
            <Theme />
          </div>
          <input
            className="search"
            placeholder="Введіть місто"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            disabled={!search}
            className="search__btn"
            onClick={toggleSearch}
          >
            Знайти
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
