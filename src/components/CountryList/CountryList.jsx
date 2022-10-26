import React from "react";
import CountryCard from "./CountryCard/CountryCard";

const CountryList = ({ countries }) => {
  return (
    <ul className="grid grid-cols-1 gap-10 mt-8 px-8 justify-center md:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
