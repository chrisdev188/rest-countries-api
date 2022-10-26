import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";
import { useToggle } from "./hooks";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useToggle(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-brand-dm-bg bg-brand-lm-bg min-h-screen transition-element">
        <Header handleToggleMode={setIsDarkMode} isDarkMode={isDarkMode} />
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
