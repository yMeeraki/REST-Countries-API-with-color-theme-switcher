import { Search } from "lucide-react";

function SearchCountry() {
  return (
    <>
      <form>
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
    </>
  );
}

export default SearchCountry;
