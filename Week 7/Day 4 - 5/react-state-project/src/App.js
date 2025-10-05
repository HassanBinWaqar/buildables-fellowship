import React from "react";
import Counter from "./Counter";
import ThemeDisplay from "./ThemeDisplay";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>React State Management Demo</h1>
        <ThemeDisplay />
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;
