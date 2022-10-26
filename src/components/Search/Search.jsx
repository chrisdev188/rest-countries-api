import { FaSearch } from "react-icons/fa";

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div className="relative rounded-lg shadow-surrounding transition-element dark:darkmode-element lightmode-element text-brand-lm-input">
      <label htmlFor="search" className="sr-only">
        Search:
      </label>
      <input
        type="search"
        value={searchTerm}
        placeholder="Search"
        className="w-full h-full block pl-24 py-4 pr-4 bg-inherit placeholder-inherit rounded-lg"
        onChange={handleSearch}
      />
      <FaSearch className="text-inherit absolute top-2/4 left-8 -translate-y-1/2" />
    </div>
  );
};

export default Search;
