"use client";

import { useRouter } from "next/navigation";

const SelectCountry = ({ countries = [] }) => {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedCountry = event.target.value;
    router.push(`/${selectedCountry}`);
  };

  return (
    <>
      {countries.length === 0 && <p>Countries are not available</p>}
      <select
        name="select"
        defaultValue={0}
        onChange={handleChange}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white text-black border border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="0">Select country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCountry;
