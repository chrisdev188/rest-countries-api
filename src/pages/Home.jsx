import React from "react";
import { CountryList, Filter, Search } from "../components";

const Home = ({
  searchTerm,
  handleSearch,
  countries,
  handleFilterByRegion,
  regions,
  filterRegion,
}) => {
  return (
    <div className="py-8 px-4">
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Filter
        handleFilterByRegion={handleFilterByRegion}
        regions={regions}
        filterRegion={filterRegion}
      />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
