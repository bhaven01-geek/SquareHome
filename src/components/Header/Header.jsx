import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className=" shadow-md">
      {" "}
      {/*good seo practice to have a header tag */}
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            {" "}
            {/* flex-wrap is used to wrap the text in mobile view */}
            <span className="text-violet">SQUARE</span>
            <span className="text-grey-100">HOME</span>
            <span className="text-violet font-bold text-xl">.</span>
          </h1>
        </Link>
        <ul className="flex gap-12">
          <Link to="/Listings">
            <li className="hidden sm:inline text-slate-700 hover:text-violet">
              Search Property
            </li>
          </Link>

          <Link to="/emi">
            <li className="hidden sm:inline text-slate-700 hover:text-violet">
              EMI Calculator
            </li>
          </Link>

          <Link to="/login">
            <li className="hidden sm:inline text-slate-700 hover:text-violet">
              Login
            </li>
          </Link>
          <Link to="/signUp">
            <li className="hidden sm:inline text-slate-700 bg-violet hover:bg-purple-800 text-white px-4 py-3 rounded-lg transition">
              Signup
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
