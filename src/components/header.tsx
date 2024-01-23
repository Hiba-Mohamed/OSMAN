import { Link } from "react-router-dom";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md flex flex-col m-2 rounded-lg">
      <div className="py-2 md:px-24 px-4 flex flex-row justify-between">
        <Link to="/home">
          {" "}
          <img
            src="img\logo.png"
            className="sm:w-14 w-10"
            alt="Osman Cleaning Services logo"
          ></img>
        </Link>
    

        <div className="hidden md:block">
          <ul className="flex flex-row items-center font-medium mt-4 rounded-lg">
            <li>
              <Link
                to="/homePage"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              >
                About
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
        <button
          className="p-2 text-stone-500 font-bold rounded-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"} w-full`}
        id="navbar-hamburger"
      >
        <ul className="flex flex-col items-center font-medium mt-4 rounded-lg">
          <li>
            <Link
              to="/homePage"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              aria-current="page"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </li>
  
          <li>
            <Link
              to="/contact"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
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