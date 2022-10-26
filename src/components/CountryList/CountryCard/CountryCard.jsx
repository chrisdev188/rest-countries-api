import { populationToString } from "../helpers";

const CountryCard = ({ country }) => {
  return (
    <div className="dark:darkmode-element lightmode-element transition-element shadow-surrounding rounded-lg h-full">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="rounded-t-lg h-56 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">
          {country.name.common} {country.flag}
        </h3>
        <p>Population: {populationToString(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
