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
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center ">
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <Filter
          handleFilterByRegion={handleFilterByRegion}
          regions={regions}
          filterRegion={filterRegion}
        />
      </div>
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
