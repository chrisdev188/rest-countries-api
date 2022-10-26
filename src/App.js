import React, { useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";
import { useToggle } from "./hooks";
import { useState, useCallback } from "react";

const URL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useToggle(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion] = useState("asia");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(URL);
      const dataPromise = await response.json();
      return dataPromise;
    };
    fetchCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const searchedCountries = useMemo(
    () =>
      countries.filter((country) =>
        country?.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [countries, searchTerm]
  );

  const filteredCountriesByRegion = useMemo(() => {
    if (!filterRegion || filterRegion === "all") {
      return searchedCountries;
    }
    return searchedCountries.filter(
      (country) => country.region.toLowerCase() === filterRegion
    );
  }, [searchedCountries, filterRegion]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-brand-dm-bg bg-brand-lm-bg min-h-screen transition-element">
        <Header handleToggleMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchTerm={searchTerm}
                  handleSearch={handleSearch}
                  countries={filteredCountriesByRegion}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
