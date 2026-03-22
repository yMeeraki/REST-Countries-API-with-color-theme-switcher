function CountryCard(props) {
  return (
    <>
      <section className="rounded-lg cursor-pointer p-5 grid grid-rows-1 gap-3 bg-primary/30  backdrop-blur-md shadow-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out">
        <div className="rounded-lg flex items-center">
          <img
            className="w-full rounded-lg"
            src={props.flag}
            alt={props.countryName || "N/A"}
          />
        </div>
        <div className="bg-primary p-2 rounded">
          <h2 className="text-xl font-extrabold text-accent">
            {props.countryName}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="items-center">
            <span className="text-sm font-bold">Capital: </span>
            <p className="text-lg">{props.capital || "N/A"}</p>
          </div>
          <div className=" items-center">
            <span className="text-sm font-bold">Region: </span>
            <p className="text-lg">{props.region}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CountryCard;
