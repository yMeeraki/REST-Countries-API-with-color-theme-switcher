import CountryCard from "./components/CountryCard/CountryCard.jsx";
import Header from "./components/Header/Header.jsx";
import CountryDetailCard from "./components/CountryCard/CountryDetailCard.jsx";
import country_data from "../country_data.js";

import React from "react";
import { Search } from "lucide-react";

function App() {
  const [search, setSearch] = React.useState("");

  function searchCountryCard(formData) {
    const searchCountry = formData.get("searchCountry").toLowerCase();
    console.log(searchCountry);
    setSearch(searchCountry);
  }

  const filteredCountriesBySearch = country_data.filter((country) =>
    country.name.toLowerCase().includes(search),
  );

  const countriesToShow = (
    search === " " ? country_data : filteredCountriesBySearch
  ).map((country) => {
    return (
      <CountryCard
        key={country.name}
        flag={country.flags.png}
        countryName={country.name}
        region={country.region}
        capital={country.capital}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
        <form action={searchCountryCard}>
          <div className="flex bg-secondary/20 p-2 gap-2 rounded-lg">
            <div className="flex items-center p-2 w-full">
              <label htmlFor="searchCountry">
                <Search className="hover:cursor-pointer" />
              </label>
              <input
                className="p-2 outline-none w-full "
                type="text"
                name="searchCountry"
                id="searchCountry"
                placeholder="e.g.: India"
              />
            </div>
            <input
              className="bg-primary text-accent hover:bg-accent hover:text-primary px-5 rounded-lg hover:cursor-pointer hover:scale-105    transition  duration-300 ease-in-out"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
      <main className="bg-secondary/20 h-full">
        <div className="p-10  gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {countriesToShow.length > 0 ? (
            countriesToShow
          ) : (
            <p>No Country Found</p>
          )}
        </div>
        <CountryDetailCard />
      </main>
    </>
  );
}

export default App;
