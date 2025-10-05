import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function ThemeDisplay() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-display ${darkMode ? "dark" : "light"}`}>
      <h2>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeDisplay;
