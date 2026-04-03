import country_data from "../../../country_data.js";

function Filter() {
  const allRegions = country_data.map((country) => {
    return country.region;
  });

  const regionUnique = [...new Set(allRegions)];

  console.log(country_data);
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="filter-by-region" className="text-sm">
          Filter By Region:
        </label>
        <select
          className="p-2 hover:outline-none hover:cursor-pointer "
          name="filter-by-region"
          id="filter-by-region"
        >
          <option value="">All Regions</option>
          {regionUnique.map((region) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Filter;
