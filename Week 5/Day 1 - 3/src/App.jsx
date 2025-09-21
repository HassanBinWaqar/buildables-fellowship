import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Counter from "./components/Counter";
import data from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header title="React Fundamentals App" />
      
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <Counter />

      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
