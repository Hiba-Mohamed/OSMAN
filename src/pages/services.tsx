import { FaHome, FaBuilding, FaStore, FaKey, FaBroom } from "react-icons/fa"; // Importing different icons

export function ExploreServices() {
  return (
    <div>
  

      <section className="text-xl flex flex-col align-center items-center justify-center md:gap-4 md:text-3xl">
        <div>
          {/* Section Header */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-darkBlue p-12 md:text-5xl">
              What We Offer
            </h1>
          </div>

          {/* Cleaning Services List */}
          <div className="px-8  py-8 rounded-xl shadow-lg mb-12">
            {/* <p className="text-xl md:text-3xl text-center text-gray-700 mb-6 font-semibold">
              Cleaning services for all:
            </p> */}

            {/* Service Items */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <FaHome className="text-blue-500 text-xl" />
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Airbnb's / Rentals
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaKey className="text-orange-500 text-xl" />
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Move-In / Move-Out
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBuilding className="text-green-500 text-xl" />
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Apartments
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaStore className="text-purple-500 text-xl" />
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Condos
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBroom className="text-red-500 text-xl" />
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Small Offices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Rooms Section */}
      <section className="flex flex-col shadow-lg rounded-2xl m-6 mb-24 md:mb-32 lg:mx-48">
        <h1 className="bg-darkBlue w-full text-white font-bold text-center text-3xl p-4 rounded-t-2xl lg:text-4xl">
          Living Rooms
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            className="w-65 md:w-96 object-cover max-w-full"
            src="./img/living.png"
            alt="Living Room"
          />
          <div className="flex flex-col rounded-b-2xl md:text-xl lg:text-3xl gap-2 md:gap-6 md:pl-10 p-4">
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Dusting surfaces, windows, blinds, and curtains.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Vacuuming & mopping floors.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Cleaning and disinfecting high traffic areas and surfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bedrooms Section */}
      <section className="flex flex-col shadow-lg rounded-2xl m-6 mb-24 md:mb-32 lg:mx-48">
        <h1 className="bg-darkBlue w-full text-white font-bold text-center text-3xl p-4 rounded-t-2xl lg:text-4xl">
          Bedrooms
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            className="w-65 md:w-96 object-cover max-w-full"
            src="./img/bedroom.png"
            alt="Bedroom"
          />
          <div className="flex flex-col rounded-b-2xl md:text-xl lg:text-3xl gap-2 md:gap-6 md:pl-10 p-4">
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Dusting surfaces, windows, blinds, and curtains.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Vacuuming & mopping floors.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Cleaning and disinfecting high traffic areas and surfaces.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Changing bedding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bathrooms Section */}
      <section className="flex flex-col shadow-lg rounded-2xl m-6 mb-24 md:mb-32 lg:mx-48">
        <h1 className="bg-darkBlue w-full text-white font-bold text-center text-3xl p-4 rounded-t-2xl lg:text-4xl">
          Bathrooms
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            className="w-65 md:w-96 object-cover max-w-full"
            src="./img/bathroom.png"
            alt="Bathroom"
          />
          <div className="flex flex-col rounded-b-2xl md:text-xl lg:text-3xl gap-2 md:gap-6 md:pl-10 p-4">
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Cleaning and disinfecting mirrors.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Cleaning and disinfecting toilet seat, shower, bathtubs.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Cleaning and disinfecting high traffic areas and surfaces.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>Cleaning floors.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png" alt="bullet" />
              <p>
                <strong>Note: </strong>We provide new toiletries set for our
                regular Airbnb and short-term rental clients per turnover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional service sections can follow the same pattern */}
    </div>
  );
}

export default ExploreServices;
