"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchCountriesFlags } from "../lib/data";
import Spinner from "@/components/spinner";
import CountryCard from "@/components/countryCard";
import Pagination from "@/components/pagination";

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
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">All Countries</span>
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        allCountries={allCountries}
        setCurrentPage={setCurrentPage}
      />
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
