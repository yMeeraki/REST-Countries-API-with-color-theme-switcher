import CountryCard from "./components/CountryCard/CountryCard.jsx";
import Header from "./components/Header/Header.jsx";

import country_data from "../country_data.js";
import CountryDetailCard from "./components/CountryCard/CountryDetailCard.jsx";

function App() {
  const allCountries = country_data.map((country) => {
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
      <main className="bg-secondary/20 h-screen">
        {/* <div className="p-10  gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allCountries}
        </div> */}
        <CountryDetailCard/>
      </main>
    </>
  );
}

export default App;
