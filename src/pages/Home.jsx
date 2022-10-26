import React from "react";
import { CountryList, Search } from "../components";

const Home = ({ searchTerm, handleSearch, countries }) => {
  return (
    <div className="py-8 px-4">
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
