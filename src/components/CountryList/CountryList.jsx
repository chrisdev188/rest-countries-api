import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard/CountryCard";
import { formatWordSeparatedByHyphen } from "../../helpers";

const CountryList = ({ countries }) => {
  return (
    <ul className="grid grid-cols-1 gap-10 mt-12 px-8 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <li key={country.name.common}>
          <Link to={`/${formatWordSeparatedByHyphen(country.name.common)}`}>
            <CountryCard country={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
