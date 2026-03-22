import { SunMoon } from "lucide-react";

function Header() {
  return (
    <>
      <header className="bg-secondary/10 shadow-xl shadow-primary/50 h-20">
        <div className="flex justify-between items-center p-5">
          <h1 className="text-primary text-2xl font-bold hover:underline hover:cursor-pointer tracking-wide ">
            What in the World?
          </h1>
          <span className="flex items-center gap-2 p-2 text-primary hover:scale-110 hover:cursor-pointer">
            <SunMoon />
            <p>Dark Mode</p>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
