import Image from "next/image";

const CountryInfo = ({ countryData }) => {
  return (
    <div className="space-y-4">
      <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-bold">
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
  );
};

export default CountryInfo;
