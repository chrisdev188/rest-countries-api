import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="dark:bg-brand-dm-elements dark:text-brand-white relative rounded-lg shadow-surrounding bg-brand-white text-brand-lm-text">
      <label htmlFor="search" className="sr-only">
        Search:
      </label>
      <input
        type="search"
        placeholder="Search"
        className="w-full h-full block pl-24 py-4 pr-4 bg-inherit placeholder-inherit rounded-lg"
      />
      <FaSearch className="text-inherit absolute top-2/4 left-8 -translate-y-1/2" />
    </div>
  );
};

export default Search;
