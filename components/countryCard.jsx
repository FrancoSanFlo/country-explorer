"use client";

import { useRouter } from "next/navigation";

const CountryCard = ({ country }) => {
  const router = useRouter();

  return (
    <div key={country.name} className="m-4">
      <h2 className="text-lg tracking-tight font-extrabold text-gray-900 sm:text-lg md:text-xl">
        {country.name}
      </h2>
      <img
        src={country.flag}
        alt={country.name}
        className="w-48 h-32 object-cover rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
        onClick={() => router.push(`/${country.name}`)}
      />
    </div>
  );
};

export default CountryCard;
