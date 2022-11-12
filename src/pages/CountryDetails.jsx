import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { formatWordSeparatedByHyphen, numberToLocaleString } from "../helpers";

const CountryDetails = ({ countries }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const country = useMemo(() => {
    return countries.find(
      (country) =>
        formatWordSeparatedByHyphen(country.name.common) === countryName
    );
  }, [countryName, countries]);

  const BackButton = () => (
    <button
      className="px-6 py-2 shadow-surrounding rounded-sm flex gap-2 items-center mb-20 dark:darkmode-element lightmode-element transition-element"
      onClick={() => {
        const path = "/";
        navigate(path);
      }}
    >
      <FaArrowLeft /> <span>Back To Home</span>
    </button>
  );

  const Flag = ({ country }) => (
    <div className="md:flex-1">
      <img src={country.flags.svg} alt={country.name.common} />
    </div>
  );

  const Information = ({ country }) => (
    <div className="dark:text-brand-white text-brand-lm-text">
      <h2 className="font-bold text-3xl">{country.name.common}</h2>
      <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-2">
        <div>
          <p>Native name: {Object.values(country.name.nativeName)[0].common}</p>
          <p>Population: {numberToLocaleString(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Sub Region: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
        </div>
        <div>
          <p>Top Level Domain: {country.tld.join(", ")}</p>
          <p>
            Currencies:{" "}
            {Object.values(country.currencies)
              .map((c) => c.name)
              .join(", ")}
          </p>
          <p>
            Languages:{" "}
            {Object.values(country.languages)
              .map((l) => l)
              .join(", ")}
          </p>
        </div>
      </div>
    </div>
  );

  const BorderList = ({ country, countries }) => {
    const findCountryWithBorder = (border) => {
      return countries.find((c) => c.cca3 === border);
    };
    return (
      <div className="flex md:flex-col gap-6 lg:col-span-2 flex-wrap mt-16">
        <h3 className="text-lg font-semibold text-brand-lm-text dark:text-brand-white">
          Borders Countries:
        </h3>
        {country.borders ? (
          <ul className="flex gap-4 flex-wrap">
            {country.borders?.map((border) => (
              <li key={border}>
                <Link
                  className="px-4 py-6 dark:darkmode-element lightmode-element transition-element rounded-sm shadow-surrounding block w-[10rem] h-full"
                  to={`/${formatWordSeparatedByHyphen(
                    findCountryWithBorder(border).name.common
                  )}`}
                >
                  <img src={findCountryWithBorder(border).flags.png} alt="" />
                  <h4 className="mt-4">
                    {findCountryWithBorder(border).name?.common}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-brand-lm-text dark:text-brand-white">
            There are no borders
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="md:p-12 py-6 px-4">
      <BackButton />
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <Flag country={country} />
        <Information country={country} />
      </div>
      <BorderList country={country} countries={countries} />
    </div>
  );
};

export default CountryDetails;
