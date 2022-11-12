import React, { useEffect, useMemo } from "react";
import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { CountryDetails, Home } from "./pages";
import { useLocalStorage } from "./hooks";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useLocalStorage("is_dark", false);
  const [regionToFilter, setRegionToFilter] = useLocalStorage(
    "filter_region",
    null
  );
  const [countries, setCountries] = useLocalStorage("countries", []);
  const regions = useMemo(
    () => ["africa", "americas", "asia", "europe", "oceania", "all"],
    []
  );

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    const fetchCountries = async () => {
      const response = await fetch(URL);
      const dataPromise = await response.json();
      return dataPromise;
    };
    fetchCountries().then((data) => {
      setCountries(data);
    });
  }, [setCountries]);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleFilterByRegion = useCallback(
    (regionName) => {
      setRegionToFilter(regionName);
    },
    [setRegionToFilter]
  );

  const searchedCountries = useMemo(
    () =>
      countries.filter((country) =>
        country?.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [countries, searchTerm]
  );

  const filteredCountriesByRegion = useMemo(() => {
    if (!regionToFilter || regionToFilter === "all") {
      return searchedCountries;
    }
    return searchedCountries.filter(
      (country) => country.region.toLowerCase() === regionToFilter
    );
  }, [searchedCountries, regionToFilter]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-brand-dm-bg bg-brand-lm-bg min-h-screen transition-element">
        <Header handleToggleMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <main>
          <h1 className="sr-only">Rest Countries API App</h1>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchTerm={searchTerm}
                  handleSearch={handleSearch}
                  countries={filteredCountriesByRegion}
                  handleFilterByRegion={handleFilterByRegion}
                  regions={regions}
                  regionToFilter={regionToFilter}
                />
              }
            />
            <Route
              path="/:countryName"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </main>
        <footer className="px-4 py-6 md:p-12 text-center dark:darkmode-element lightmode-element transition-element">
          Built by{" "}
          <a href="https://github.com/chrisbui188" className="underline">
            Chris Bui
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
