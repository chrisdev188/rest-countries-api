import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { formatWordSeparatedByHyphen, numberToLocaleString } from "../helpers";

const CountryDetails = ({ countries }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const backToHome = () => {
    const path = "/";
    navigate(path);
  };

  const country = useMemo(() => {
    return countries.find(
      (country) =>
        formatWordSeparatedByHyphen(country.name.common) === countryName
    );
  }, [countryName, countries]);

  const borders = (
    <div className="flex md:flex-col gap-4 lg:col-span-2 flex-wrap">
      Borders Countries:
      <ul className="flex gap-2 flex-wrap">
        {country.borders?.map((border) => (
          <li key={border}>
            <Link
              className="px-4 py-2 dark:darkmode-element lightmode-element transition-element rounded-sm shadow-surrounding inline-block"
              to={`/${formatWordSeparatedByHyphen(
                countries.find((country) => country.cca3 === border).name.common
              )}`}
            >
              {countries.find((country) => country.cca3 === border).name.common}
            </Link>
          </li>
        )) || "There are no borders"}
      </ul>
    </div>
  );

  const backButton = (
    <button
      className="px-6 py-2 shadow-surrounding rounded-sm flex gap-2 items-center mb-20 dark:darkmode-element lightmode-element transition-element"
      onClick={backToHome}
    >
      <FaArrowLeft /> <span>Back To Home</span>
    </button>
  );

  const flag = (
    <div className="md:flex-1">
      <img src={country.flags.svg} alt={country.name.common} />
    </div>
  );

  const countryCommonName = (
    <h2 className="font-bold text-3xl">{country.name.common}</h2>
  );

  const mainInfo = (
    <div>
      <p>Native name: {Object.values(country.name.nativeName)[0].common}</p>
      <p>Population: {numberToLocaleString(country.population)}</p>
      <p>Region: {country.region}</p>
      <p>Sub Region: {country.subregion}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );

  const otherInfo = (
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
  );

  return (
    <div className="md:p-12 py-6 px-4">
      {backButton}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {flag}
        <div className="dark:text-brand-white text-brand-lm-text">
          {countryCommonName}
          <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-2">
            {mainInfo}
            {otherInfo}
            {borders}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
