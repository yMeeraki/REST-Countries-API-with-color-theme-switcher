import { CircleArrowLeft } from "lucide-react";

function CountryDetailCard() {
  const country = {
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png",
    capital: "Lima",
    region: "Americas",
    population: 34530244,
    languages: ["Spanish", "Quechua"],
    currency: "Peruvian sol",
    borders: ["BOL", "BRA", "CHL"],
  };

  return (
    <section className="p-6 max-w-6xl mx-auto ">
      {/* Back Button */}
      <button className="flex items-center gap-2 px-4 py-2 mb-8 bg-primary text-accent rounded-lg  transition hover:bg-accent hover:text-primary hover:cursor-pointer">
        <CircleArrowLeft size={18} />
        Go Back
      </button>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-primary/30  backdrop-blur-md shadow-2xl p-10 rounded-2xl">
        {/* Flag */}
        <div>
          <img
            className="w-full rounded-lg shadow-md"
            src={country.flag}
            alt={country.name}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div className="bg-primary p-2 rounded">
            <h2 className="text-4xl font-extrabold text-accent">
              {country.name}
            </h2>
          </div>
          <div className="space-y-2 text-sm md:text-base">
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>

            <p>
              <strong>Languages:</strong> {country.languages.join(", ")}
            </p>

            <p>
              <strong>Currency:</strong> {country.currency}
            </p>
          </div>

          {/* Borders */}
          <div>
            <p className="font-semibold mb-2">Border Countries:</p>
            <div className="flex flex-wrap gap-2">
              {country.borders.map((border, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent text-primary hover:bg-primary hover:text-accent hover:cursor-pointer hover:scale-105 transition delay-150 duration-300 ease-in-out rounded-md text-sm "
                >
                  {border}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetailCard;
