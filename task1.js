fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Problem 1: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter((country) =>
      country.region?.includes("Asia")
    );
    console.log("Countries in Asia:", asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = data.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with population less than 2 lakhs:",
      lowPopulationCountries
    );

    // Problem 3: Print name, capital, and flag details using forEach function
    console.log("Details of each country:");
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
      console.log("__________");
    });

    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (acc, country) => acc + (country.population || 0),
      0
    );
    console.log("Total population of all countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency
    const usDollarCountry = data.find((country) => country.currencies?.USD);
    console.log("Country that uses US dollars:", usDollarCountry);
  })
  .catch((error) => console.error("Error fetching data:", error));
