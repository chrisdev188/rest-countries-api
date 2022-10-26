import { RiArrowDownSLine } from "react-icons/ri";
import { useToggle } from "../../hooks";

const Filter = ({ handleFilterByRegion, regions, regionToFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useToggle(false);
  return (
    <div className="w-full max-w-[15rem] relative">
      <button
        className="dark:darkmode-element lightmode-element transition-element flex justify-between items-center  w-full p-4 shadow-surrounding rounded-lg"
        onClick={setIsFilterOpen}
      >
        <span className="capitalize">
          {regionToFilter ? regionToFilter : "Filter by Region"}
        </span>
        <span>
          <RiArrowDownSLine />
        </span>
      </button>
      {isFilterOpen && (
        <ul className="dark:darkmode-element lightmode-element transition-element rounded-lg shadow-surrounding p-4 absolute top-[120%] left-0 w-full flex flex-col">
          {regions.map((region, index) => (
            <li
              key={index}
              className="capitalize p-2 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
              onClick={() => {
                handleFilterByRegion(region);
                setIsFilterOpen(false);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
