import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="relative flex flex-col items-center font-Montserrat">
      <div className="absolute inset-0 bg-[url('/img/banner4.jpeg')] bg-cover bg-center  z-0"></div>
      {/* Solid Background Color */}
      <div className="absolute inset-0 bg-gray-900 opacity-80 z-0"></div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-32 bg-gradient-to-r from-white via-white to-cyan-500 opacity-20 rotate-45 rounded-lg filter blur-3xl"></div>

      {/* Streaks (over the solid background, but under the content) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:p-12 items-center lg:pb-12 min-h-screen">
        {/* Logo */}
        <div className="relative flex flex-col items-center">
          {/* White blurred circle behind the logo */}
          <div className="absolute inset-0 bg-white opacity-70 rounded-full filter blur-3xl w-96 h-96"></div>

          {/* Logo */}
          <img
            src="img/logo.png"
            className="relative w-60 md:w-68 py-12 z-10"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col">
          <h1 className="text-lg text-center pb-2 md:text-2xl text-white px-4">
            Sparkling Spaces, Exceptional Service !
          </h1>
          <div className="flex flex-col text-lg font-bold md:text-xl md:flex-row text-center items-center gap-8 py-10">
            <Link
              to="/services"
              className="bg-transparent w-60 border-2 border-white text-white font-bold py-2 rounded-lg shadow-2xl"
            >
              Explore Services
            </Link>
            <Link
              to="/booking"
              className="bg-transparent w-60 border-2 border-lightBlue text-lightBlue  font-bold py-2 rounded-lg shadow-2xl"
            >
              Book Cleaning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
