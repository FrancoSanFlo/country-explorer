"use client";

import { useEffect, useState } from "react";
import { fetchCountryDetails } from "../lib/data";
import Image from "next/image";
import Spinner from "@/components/spinner";
import CountryInfo from "@/components/countryInfo";

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
        <CountryInfo countryData={countryData} />
      )}
    </div>
  );
};

export default CountryDetails;
