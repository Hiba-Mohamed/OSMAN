import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="flex flex-col items-center font-Montserrat bg-stone-50 ">
      <div className="bg-[url('/img/banner.png')] bg-opacity-0 bg-cover w-full flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:p-12 items-center lg:pb-12 min-h-screen">
        <img src="img/logo.png" className="w-72 md:w-68 py-12" />
        <div className="flex flex-col">
          {" "}
          <h1 className="text-3xl text-center pb-2 md:text-5xl">
            Sparkling Spaces, <br /> Exceptional Service!
          </h1>
          <div className="flex flex-col text-2xl font-bold md:text-3xl md:flex-row text-center items-center gap-8 py-10">
            <Link
              to="/services"
              className="bg-lightBlue w-80 text-black font-bold py-4 rounded-lg  shadow-2xl"
            >
              Explore Services
            </Link>
           <Link
              to="/booking" className="bg-darkBlue w-80 text-white font-bold py-4 rounded-lg shadow-2xl">
              Book Cleaning
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Homepage;
