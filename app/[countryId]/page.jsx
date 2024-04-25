"use client";

import { useEffect, useState } from "react";
import { fetchCountryDetails } from "../lib/data";
import Image from "next/image";
import Spinner from "@/components/spinner";
import CountryInfo from "@/components/countryInfo";
import dynamic from "next/dynamic";

// Importa CountryMap con SSR desactivado
const CountryMap = dynamic(() => import("@/components/countryMap"), {
  ssr: false, // Esto desactivará la renderización del lado del servidor para el componente CountryMap
});

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
        <>
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
            Country Details
          </h2>
          <div className="flex flex-wrap md:w-[80%] sm:w-[90%] w-full md:justify-between sm:justify-center">
            <div className="p-4">
              <CountryInfo countryData={countryData} />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <p className="mt-3 mb-3 max-w-md text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-bold">
                Map of {countryData[0].name.common}
              </p>
              <CountryMap countryData={countryData[0]} />
            </div>
          </div>
          {/* <CountryInfo countryData={countryData} /> */}
        </>
      )}
    </div>
  );
};

export default CountryDetails;
