import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ handleToggleMode, isDarkMode }) => {
  return (
    <header className="flex justify-between px-4 py-6 shadow-bottom-lightmode dark:shadow-bottom-darkmode dark:bg-brand-dm-elements dark:text-brand-white bg-brand-lm-bg text-brand-lm-text transition-element">
      <a className="font-extrabold" href="/">
        Where in the world?
      </a>
      <button className="flex gap-2 items-center" onClick={handleToggleMode}>
        <span>{isDarkMode ? <FaSun /> : <FaMoon />}</span>
        <span className="font-semibold">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </header>
  );
};

export default Header;
