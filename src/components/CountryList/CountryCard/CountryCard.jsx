import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="dark:darkmode-element lightmode-element transition-element shadow-surrounding rounded-lg">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-semibold">{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;