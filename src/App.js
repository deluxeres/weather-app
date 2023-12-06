// App.jsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import "./assets/scss/_header.scss";
import "./assets/scss/_main.scss";
import "./assets/scss/_theme.scss";

function App() {
  const [theme, setTheme] = useState(false);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme === "dark");
  }, []);

  return (
    <div className={`App ${theme ? "dark-theme" : "light-theme"}`}>
      <div className="container">
        <Header setTheme={setTheme} onWeatherData={setWeatherData} />
        <Main />
      </div>
    </div>
  );
}

export default App;
