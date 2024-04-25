"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchCountriesFlags } from "../lib/data";
import Spinner from "@/components/spinner";

const PER_PAGE = 20;

export default function Countries() {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountriesFlags().then((data) => {
      setAllCountries(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    setCountries(allCountries.slice(start, end));
  }, [currentPage, allCountries]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <Spinner />
      </div>
    ); // Muestra el spinner mientras los datos se están cargando
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">All Countries</span>
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8">
        {countries.map((country) => (
          <div key={country.name} className="m-4">
            <h2 className="text-lg tracking-tight font-extrabold text-gray-900 sm:text-lg md:text-xl">
              {country.name}
            </h2>
            <img
              src={country.flag}
              alt={country.name}
              className="w-48 h-32 object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className={`text-white text-md sm:text-base md:text-lg  py-1 px-5 border border-transparent ${
            currentPage === 1
              ? "bg-indigo-400"
              : "bg-indigo-600 hover:bg-indigo-700"
          } rounded-md mt-4`}
        >
          &#8592;
        </button>
        <button
          onClick={() =>
            setCurrentPage((page) =>
              page * PER_PAGE < allCountries.length ? page + 1 : page
            )
          }
          disabled={currentPage * PER_PAGE >= allCountries.length}
          className={`text-white text-md sm:text-base md:text-lg py-1 px-5 border border-transparent ${
            currentPage * PER_PAGE >= allCountries.length
              ? "bg-indigo-400"
              : "bg-indigo-600 hover:bg-indigo-700"
          } rounded-md mt-4`}
        >
          &#8594;
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="text-white text-md sm:text-base md:text-lg hover:bg-indigo-700 py-1 px-2 border border-transparent bg-indigo-600 rounded-md mt-4"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
