import { Link } from "react-router-dom";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md flex flex-col">
      <div className="py-2 md:px-24 px-4 flex flex-row justify-between">
        <Link to="/home">
          {" "}
          <img
            src="img\logo.png"
            className="sm:w-14 w-10"
            alt="Osman Cleaning Services logo"
          ></img>
        </Link>

        <div className="hidden lg:block">
          <ul className="flex flex-row items-center font-medium mt-4 gap-8 rounded-lg">
            <li>
              <Link
                to="/home"
                className="block py-2 text-gray-900 rounded-2xl border-2 border-white px-12  text-center hover:text-green hover:text-darkBlue hover:border-darkBlue hover:border-2"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="block py-2 text-gray-900 rounded-2xl border-2 border-white px-8 text-center hover:text-green hover:text-darkBlue hover:border-darkBlue hover:border-2"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/booking"
                className="block py-2 text-gray-900 rounded-2xl border-2 border-white px-2 text-center hover:text-green hover:text-darkBlue hover:border-darkBlue hover:border-2"
              >
                Book a Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-gray-900 rounded-2xl border-2 border-white px-4 text-center hover:text-green hover:text-darkBlue hover:border-darkBlue hover:border-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="p-2 text-stone-500 font-bold rounded-2xl lg:hidden"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"} w-full`}
        id="navbar-hamburger"
      >
        <ul className="flex flex-col items-center font-medium my-4 rounded-lg ">
          <li>
            <Link
              to="/home"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              aria-current="page"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/booking"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              Book a Cleaning
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
