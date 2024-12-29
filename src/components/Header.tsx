import { useState } from "react";
import logo from "../assets/logo.svg";
import menuBtn from "../assets/hamburger.png";
import closeBtn from "../assets/cross.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <header>
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex justify-between items-center py-3">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src={logo} alt="logo" height={17} width={16} />
              <div className="text-base font-medium leading-none">
                Camille Moreau Atellier
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-14">
              <nav>
                <ul className="flex items-center gap-14">
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    Projects
                  </li>
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    Process
                  </li>
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    About
                  </li>
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    Ethos
                  </li>
                </ul>
              </nav>
              <button className="bg-[#1E1E1E] text-[#EAEDF6] text-sm font-medium px-4 py-3 rounded-full">
                Contact
              </button>
            </div>
            <div className="lg:hidden">
              <img
                src={menuBtn}
                alt="hamburger menu icon"
                height={20}
                width={20}
                className="cursor-pointer"
                onClick={handleChange}
              />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed z-20 overflow-y-scroll top-0 right-0 h-full bg-white duration-300 ${
          isToggled ? "w-full" : "w-0"
        }`}
      >
        <div className="px-4 py-8">
          <img
            src={closeBtn}
            alt="close icon"
            height={20}
            width={20}
            className="cursor-pointer"
            onClick={handleChange}
          />
          <div className="px-6 py-8">
            <ul className="flex flex-col">
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link to="/" onClick={handleChange} >
                  Home
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link to="/" onClick={handleChange}>
                  Projects
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link to="/" onClick={handleChange}>
                  Process
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link to="/" onClick={handleChange}>
                  About
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link to="/" onClick={handleChange}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
