import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.scss";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`App container bg-${darkMode ? "dark" : "light"}`}>
      <Header dark={darkMode} toggleDarkMode={toggleDarkMode} />
      <Section1 dark={darkMode} toggleDarkMode={toggleDarkMode}></Section1>
      <Section2 dark={darkMode} toggleDarkMode={toggleDarkMode}></Section2>
      <Section3 dark={darkMode} toggleDarkMode={toggleDarkMode}></Section3>
      <Section4 dark={darkMode} toggleDarkMode={toggleDarkMode}></Section4>
      <Section5 dark={darkMode} toggleDarkMode={toggleDarkMode}></Section5>
      <Footer dark={darkMode} toggleDarkMode={toggleDarkMode}></Footer>
      {/* Other components */}
    </div>
  );
}

export default App;