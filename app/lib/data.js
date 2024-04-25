export const fetchAllCountriesName = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data.map((country) => country.name.common).sort();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// countryId is equal to name in this case
export const fetchCountryDetails = async (countryId) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryId}?fullText=true`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCountriesFlags = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data
      .map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error(error);
    return [];
  }
};
