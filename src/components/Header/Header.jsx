import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ handleToggleMode, isDarkMode }) => {
  return (
    <header className="flex justify-between px-4 py-8 shadow-bottom transition-element dark:darkmode-element lightmode-element md:px-12">
      <Link className="font-extrabold" to="/">
        Where in the world?
      </Link>
      <button
        className="flex gap-2 items-center"
        onClick={() => handleToggleMode((prevValue) => !prevValue)}
      >
        <span>{isDarkMode ? <FaSun /> : <FaMoon />}</span>
        <span className="font-semibold text-[14px]">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </header>
  );
};

export default Header;
