import { SunMoon } from "lucide-react";
import SearchCountry from "../Search-And-Filter/SearchCountry.jsx";
import Filter from "../Search-And-Filter/Filter.jsx";

function Header() {
  return (
    <>
      <header className="bg-secondary/10 shadow-xl shadow-primary/50 h-auto">
        <div className="flex justify-between items-center p-5">
          <h1 className="text-primary text-2xl font-bold hover:underline hover:cursor-pointer tracking-wide ">
            What in the World?
          </h1>
          <span className="flex items-center gap-2 p-2 text-primary hover:scale-110 hover:cursor-pointer">
            <SunMoon />
            <p>Dark Mode</p>
          </span>
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
