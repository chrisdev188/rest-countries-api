import React, { useState } from "react";
import { Header } from "./components";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode((prevValue) => !prevValue);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-brand-dm-bg bg-brand-lm-bg min-h-screen transition-element">
        <Header handleToggleMode={handleToggleMode} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
