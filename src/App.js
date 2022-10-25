import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode((prevValue) => !prevValue);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-brand-dm-bg bg-brand-lm-bg min-h-screen transition-element">
        <Header handleToggleMode={handleToggleMode} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
