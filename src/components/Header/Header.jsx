import { Sun, Moon } from "lucide-react";
import SearchCountry from "../Search-And-Filter/SearchCountry.jsx";
import Filter from "../Search-And-Filter/Filter.jsx";
import React from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  function changeMode() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <>
      <header className="bg-secondary/10 shadow-xl shadow-primary/50 h-auto">
        <div className="flex justify-between items-center p-5">
          <h1 className="text-primary text-2xl font-bold hover:underline hover:cursor-pointer tracking-wide  ">
            What in the World?
          </h1>
          <button onClick={changeMode}>
            <span className="flex items-center gap-2 p-2 text-primary hover:scale-110 hover:cursor-pointer   transition delay-150 duration-300 ease-in-out">
              {isDarkMode ? (
                <>
                  <Moon />
                  <p>Dark Mode</p>
                </>
              ) : (
                <>
                  <Sun />
                  <p>Light Mode</p>
                </>
              )}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <SearchCountry />
          <Filter />
        </div>
      </header>
    </>
  );
}

export default Header;
