import SelectCountry from "@/components/selectCountry";
import { fetchAllCountriesName } from "./lib/data";

export default async function Home() {
  const countries = await fetchAllCountriesName();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Country Explorer</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Explore and learn more about different countries around the world.
        Select a country from the dropdown to get started.
      </p>
      <div className="w-full flex justify-center p-8">
        <SelectCountry countries={countries} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg tracking-tight font-extrabold text-gray-900 sm:text-lg md:text-xl flex flex-col items-center">
          <span className="block xl:inline">
            If you want to see all the countries in the world, click on the
            button
          </span>
          <a
            href="/countries"
            className="text-white text-md sm:text-base md:text-lg hover:bg-indigo-700 py-1 px-2 border border-transparent bg-indigo-600 rounded-md mt-4"
          >
            All countries
          </a>
        </h2>
      </div>
    </div>
  );
}
