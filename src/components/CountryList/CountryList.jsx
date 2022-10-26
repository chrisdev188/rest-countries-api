import React from "react";
import CountryCard from "./CountryCard/CountryCard";

const CountryList = ({ countries }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 mt-8 px-8">
      {countries.map((country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
