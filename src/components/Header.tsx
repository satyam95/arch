import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-2 items-center cursor-pointer">
            <img src={logo} alt="logo" height={17} width={16} />
            <div className="text-base font-medium leading-none">
              Camille Moreau Atellier
            </div>
          </div>
          <div className="flex items-center gap-14">
            <nav>
              <ul className="flex items-center gap-14">
                <li className="text-[#1E1E1E] text-sm cursor-pointer">
                  Projects
                </li>
                <li className="text-[#1E1E1E] text-sm cursor-pointer">
                  Process
                </li>
                <li className="text-[#1E1E1E] text-sm cursor-pointer">About</li>
                <li className="text-[#1E1E1E] text-sm cursor-pointer">Ethos</li>
              </ul>
            </nav>
            <button className="bg-[#1E1E1E] text-[#EAEDF6] text-sm font-medium px-4 py-3 rounded-full">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
