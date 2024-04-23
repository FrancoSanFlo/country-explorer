"use client";

import { useEffect, useState } from "react";
import { fetchCountryDetails } from "../lib/data";
import Image from "next/image";
import Spinner from "@/components/spinner";

const CountryDetails = ({ params }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountryDetails(params.countryId);
        setCountryData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-6 px-4 sm:px-6 lg:px-8">
      {countryData && (
        <button
          onClick={goBack}
          className="mb-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      )}

      {countryData === null ? (
        <Spinner />
      ) : (
        <div className="space-y-4">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Country Details
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {countryData[0].name.common}
          </p>
          <Image
            src={countryData[0].flags.svg}
            alt={countryData[0].name.common}
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {countryData[0].name.official}
          </p>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Capital: {countryData[0].capital}
          </p>
          <h3 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Currencies
          </h3>
          {Object.entries(countryData[0].currencies).map(
            ([code, { name, symbol }]) => (
              <ul key={code} className="list-inside space-y-1 list-none">
                <li className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Code: {code}
                </li>
                <li className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Name: {name}
                </li>
                <li className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Symbol: {symbol}
                </li>
              </ul>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
